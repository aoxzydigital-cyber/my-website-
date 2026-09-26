import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, CheckCircle2, History, Sliders, AlertTriangle } from 'lucide-react';

interface AuditLogEntry {
  id: string;
  timestamp: string;
  modelScore: number;
  priorityBand: string;
  analystVerdict: 'Confirmed Fraud' | 'Legitimate' | 'Inconclusive';
  notes: string;
}

export const FraudRiskSimulator: React.FC = () => {
  // Configurable transaction parameters
  const [amount, setAmount] = useState<number>(3200); // normal is ~120
  const [velocity10m, setVelocity10m] = useState<number>(5); // normal is 1
  const [geoDistanceMiles, setGeoDistanceMiles] = useState<number>(4500); // distance from billing IP
  const [accountAgeMonths, setAccountAgeMonths] = useState<number>(14); // tenure
  const [deviceKnown, setDeviceKnown] = useState<boolean>(false);

  // Human review state
  const [analystNotes, setAnalystNotes] = useState('');
  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>([
    {
      id: 'TXN-84910',
      timestamp: '10:41 AM',
      modelScore: 92,
      priorityBand: 'HIGH',
      analystVerdict: 'Confirmed Fraud',
      notes: 'Synthetic identity ring confirmed via shared device hash.',
    },
    {
      id: 'TXN-84908',
      timestamp: '10:28 AM',
      modelScore: 48,
      priorityBand: 'MEDIUM',
      analystVerdict: 'Legitimate',
      notes: 'Customer verified phone 2FA challenge during travel.',
    },
  ]);
  const [submittedCurrent, setSubmittedCurrent] = useState<boolean>(false);

  // XGBoost simulation logic: baseline base value = 20 pts
  // Compute SHAP contributions
  const baseline = 20;

  // Velocity SHAP
  const velocityShap = Math.min(35, Math.max(0, (velocity10m - 1) * 7.5));
  // Geo mismatch SHAP
  const geoShap = Math.min(25, (geoDistanceMiles / 5000) * 25);
  // Amount anomaly SHAP
  const amountShap = Math.min(25, (amount / 4000) * 25);
  // Account age mitigating SHAP (negative risk contribution)
  const ageShap = -Math.min(18, (accountAgeMonths / 36) * 18);
  // Device recognized mitigating SHAP
  const deviceShap = deviceKnown ? -15 : 8;

  const rawSum = baseline + velocityShap + geoShap + amountShap + ageShap + deviceShap;
  const calculatedScore = Math.min(99, Math.max(1, Math.round(rawSum)));

  // Priority bands derived from analyst capacity simulation:
  // High: >= 75 (Top 5% queue, urgent review within 15 mins)
  // Medium: 45 - 74 (Next 15% queue, review within 4 hours)
  // Low: < 45 (Not routed to human queue; auto-monitored)
  let priorityBand = 'LOW';
  let priorityColor = 'text-emerald-400 bg-emerald-950/50 border-emerald-800';
  if (calculatedScore >= 75) {
    priorityBand = 'HIGH';
    priorityColor = 'text-rose-400 bg-rose-950/50 border-rose-800';
  } else if (calculatedScore >= 45) {
    priorityBand = 'MEDIUM';
    priorityColor = 'text-amber-400 bg-amber-950/50 border-amber-800';
  }

  const handleAnalystSubmit = (verdict: 'Confirmed Fraud' | 'Legitimate' | 'Inconclusive') => {
    const newEntry: AuditLogEntry = {
      id: `TXN-${Math.floor(10000 + Math.random() * 90000)}`,
      timestamp: 'Just now',
      modelScore: calculatedScore,
      priorityBand,
      analystVerdict: verdict,
      notes: analystNotes || 'Routine investigation completed.',
    };

    setAuditLogs([newEntry, ...auditLogs]);
    setSubmittedCurrent(true);
    setAnalystNotes('');
    setTimeout(() => setSubmittedCurrent(false), 3000);
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-[#0d0f18] p-5 text-sm text-zinc-300">
      {/* Header */}
      <div className="flex flex-col gap-2 pb-4 border-b border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-rose-400 font-mono">Interactive Decision Support</span>
          <h4 className="text-base font-semibold text-zinc-100">XGBoost Risk Scoring & SHAP Explainability Engine</h4>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="text-zinc-500">Architecture Rule:</span>
          <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/60">
            Never Auto-Blocks
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 py-4">
        {/* Left Column: Interactive Transaction Features Slider (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-zinc-400" />
              Adjust Transaction Parameters
            </span>
            <span className="text-[11px] text-zinc-500">Live Feature Vector</span>
          </div>

          <div className="space-y-3 rounded-lg border border-zinc-800 bg-zinc-950 p-3.5">
            {/* Amount */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-400">Transaction Amount:</span>
                <span className="font-mono text-zinc-100 font-semibold">${amount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="50"
                max="8000"
                step="50"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-blue-500 bg-zinc-800 h-1.5 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-zinc-500">Baseline user average: $120.00</span>
            </div>

            {/* Velocity */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-400">10-Min Velocity:</span>
                <span className="font-mono text-zinc-100 font-semibold">{velocity10m} txns / 10 min</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={velocity10m}
                onChange={(e) => setVelocity10m(Number(e.target.value))}
                className="w-full accent-blue-500 bg-zinc-800 h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            {/* Geolocation Delta */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-400">IP Geolocation Distance:</span>
                <span className="font-mono text-zinc-100 font-semibold">{geoDistanceMiles.toLocaleString()} miles</span>
              </div>
              <input
                type="range"
                min="0"
                max="8000"
                step="100"
                value={geoDistanceMiles}
                onChange={(e) => setGeoDistanceMiles(Number(e.target.value))}
                className="w-full accent-blue-500 bg-zinc-800 h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            {/* Account Age */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-zinc-400">Account History / Tenure:</span>
                <span className="font-mono text-zinc-100 font-semibold">{accountAgeMonths} months</span>
              </div>
              <input
                type="range"
                min="1"
                max="48"
                step="1"
                value={accountAgeMonths}
                onChange={(e) => setAccountAgeMonths(Number(e.target.value))}
                className="w-full accent-blue-500 bg-zinc-800 h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            {/* Device Recognized toggle */}
            <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-400">Device Fingerprint:</span>
              <button
                type="button"
                onClick={() => setDeviceKnown(!deviceKnown)}
                className={`text-xs font-mono px-2.5 py-1 rounded border transition ${
                  deviceKnown
                    ? 'border-emerald-700 bg-emerald-950/60 text-emerald-300'
                    : 'border-zinc-700 bg-zinc-900 text-zinc-400'
                }`}
              >
                {deviceKnown ? 'Known Device (Mitigates Risk)' : 'Unrecognized Device (+Risk)'}
              </button>
            </div>
          </div>
        </div>

        {/* Center Column: SHAP Waterfall & Score Output (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">Model Decision Output</span>
            <span className="text-xs font-mono text-zinc-500">TreeSHAP Local</span>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3.5 space-y-3">
            {/* Score & Priority Band */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-500 block">0–100 Risk Score</span>
                <span className="text-3xl font-extrabold font-mono text-zinc-100">{calculatedScore}</span>
                <span className="text-xs text-zinc-500 ml-1">/ 100</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-zinc-500 block">Queue Priority</span>
                <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border inline-block mt-1 ${priorityColor}`}>
                  {priorityBand} PRIORITY
                </span>
              </div>
            </div>

            {/* TreeSHAP Waterfall breakdown */}
            <div className="pt-2 border-t border-zinc-800/80 space-y-2">
              <span className="text-xs font-semibold text-zinc-300 block">SHAP Feature Contributions:</span>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between items-center text-zinc-400 text-[11px]">
                  <span>Population Baseline</span>
                  <span>+{baseline.toFixed(1)} pts</span>
                </div>
                <div className="flex justify-between items-center text-rose-300">
                  <span className="truncate pr-2">+ Velocity Spike ({velocity10m} txns)</span>
                  <span>+{velocityShap.toFixed(1)}</span>
                </div>
                <div className="flex justify-between items-center text-rose-300">
                  <span className="truncate pr-2">+ Geolocation Distance ({geoDistanceMiles}m)</span>
                  <span>+{geoShap.toFixed(1)}</span>
                </div>
                <div className="flex justify-between items-center text-rose-300">
                  <span className="truncate pr-2">+ Amount Deviation (${amount})</span>
                  <span>+{amountShap.toFixed(1)}</span>
                </div>
                <div className="flex justify-between items-center text-emerald-400">
                  <span className="truncate pr-2">- Account Tenure ({accountAgeMonths} mo)</span>
                  <span>{ageShap.toFixed(1)}</span>
                </div>
                <div className="flex justify-between items-center text-emerald-400">
                  <span className="truncate pr-2">{deviceKnown ? '- Known Device' : '+ Unfamiliar Device'}</span>
                  <span>{deviceShap > 0 ? `+${deviceShap.toFixed(1)}` : `${deviceShap.toFixed(1)}`}</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-zinc-500 leading-tight">
              SHAP explains why the model produced this score. It does not constitute proof of fraudulent intent.
            </p>
          </div>
        </div>

        {/* Right Column: Human Analyst Review Console (3 cols) */}
        <div className="lg:col-span-3 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">Human Analyst Console</span>
            <span className="text-xs text-blue-400 font-mono">Audit Loop</span>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3.5 space-y-3">
            <div>
              <label className="text-xs text-zinc-400 block mb-1">Investigation Note:</label>
              <textarea
                value={analystNotes}
                onChange={(e) => setAnalystNotes(e.target.value)}
                placeholder="e.g. Spoke with cardholder; verified foreign IP travel..."
                rows={2}
                className="w-full rounded bg-zinc-900 border border-zinc-800 p-2 text-xs text-zinc-200 placeholder-zinc-600 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <span className="text-xs text-zinc-400 block font-medium">Record Human Verdict:</span>
              <button
                onClick={() => handleAnalystSubmit('Confirmed Fraud')}
                className="w-full text-xs font-medium py-1.5 px-2 rounded bg-rose-950/80 border border-rose-800 text-rose-200 hover:bg-rose-900 transition text-center"
              >
                Confirmed Fraud
              </button>
              <button
                onClick={() => handleAnalystSubmit('Legitimate')}
                className="w-full text-xs font-medium py-1.5 px-2 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-200 hover:bg-emerald-900 transition text-center"
              >
                Legitimate
              </button>
              <button
                onClick={() => handleAnalystSubmit('Inconclusive')}
                className="w-full text-xs font-medium py-1.5 px-2 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition text-center"
              >
                Inconclusive
              </button>
            </div>

            {submittedCurrent && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 p-1.5 rounded border border-emerald-900">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verdict logged to audit trail!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Append-Only Audit Trail Table */}
      <div className="pt-3 border-t border-zinc-800 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-zinc-400 flex items-center gap-1.5">
            <History className="w-3.5 h-3.5 text-zinc-400" />
            Append-Only Audit Log (Human Verdict Decoupled from Model Score)
          </span>
          <span className="text-zinc-500 font-mono">SQLite Persistence</span>
        </div>

        <div className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
          <table className="w-full text-left text-xs text-zinc-300">
            <thead className="border-b border-zinc-800 bg-zinc-900/60 font-mono text-[11px] text-zinc-400">
              <tr>
                <th className="py-2 px-3">Transaction ID</th>
                <th className="py-2 px-3">ML Score</th>
                <th className="py-2 px-3">Priority Band</th>
                <th className="py-2 px-3">Human Verdict</th>
                <th className="py-2 px-3">Investigation Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80 font-mono">
              {auditLogs.map((log, i) => (
                <tr key={i} className="hover:bg-zinc-900/40 transition">
                  <td className="py-2 px-3 text-blue-400">{log.id}</td>
                  <td className="py-2 px-3">{log.modelScore}/100</td>
                  <td className="py-2 px-3">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] ${
                        log.priorityBand === 'HIGH'
                          ? 'bg-rose-950 text-rose-400 border border-rose-800'
                          : 'bg-amber-950 text-amber-400 border border-amber-800'
                      }`}
                    >
                      {log.priorityBand}
                    </span>
                  </td>
                  <td className="py-2 px-3 font-semibold text-zinc-200">{log.analystVerdict}</td>
                  <td className="py-2 px-3 text-zinc-400 max-w-[200px] truncate">{log.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
