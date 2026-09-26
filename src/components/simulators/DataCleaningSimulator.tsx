import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle2, AlertCircle, FileSpreadsheet, Bot, ShieldCheck } from 'lucide-react';

interface DirtyRow {
  id: number;
  name: string;
  age: number | null | string;
  gender: string;
  salary: number | null | string;
  anomaly?: string;
}

const initialDirtyData: DirtyRow[] = [
  { id: 1, name: 'John', age: 25, gender: 'M', salary: 50000 },
  { id: 2, name: 'John', age: 25, gender: 'M', salary: 50000, anomaly: 'Duplicate record of row #1' },
  { id: 3, name: 'Sarah', age: null, gender: 'Female', salary: 60000, anomaly: 'Missing Age (NaN)' },
  { id: 4, name: 'Mike', age: 150, gender: 'male', salary: 70000, anomaly: 'Outlier (Age = 150 > biological limit)' },
  { id: 5, name: 'Alice', age: 30, gender: 'MALE', salary: null, anomaly: 'Missing Salary (NaN) & all-caps gender' },
  { id: 6, name: 'Bob', age: 28, gender: 'Female', salary: 55000 },
];

export const DataCleaningSimulator: React.FC = () => {
  const [pipelinePhase, setPipelinePhase] = useState<'raw' | 'profiled' | 'planned' | 'cleaned'>('raw');

  // Planning Agent parameters (configurable)
  const [removeDuplicates, setRemoveDuplicates] = useState(true);
  const [missingStrategy, setMissingStrategy] = useState<'median' | 'mean' | 'drop'>('median');
  const [outlierStrategy, setOutlierStrategy] = useState<'remove' | 'cap' | 'keep'>('remove');
  const [standardizeCategories, setStandardizeCategories] = useState(true);

  const handleNextPhase = () => {
    if (pipelinePhase === 'raw') setPipelinePhase('profiled');
    else if (pipelinePhase === 'profiled') setPipelinePhase('planned');
    else if (pipelinePhase === 'planned') setPipelinePhase('cleaned');
  };

  const handleReset = () => {
    setPipelinePhase('raw');
  };

  // Cleaned data computed based on selected plan
  const cleanedData = [
    { id: 1, name: 'John', age: 25, gender: 'Male', salary: 50000, status: 'Preserved' },
    { id: 3, name: 'Sarah', age: missingStrategy === 'median' ? 28 : missingStrategy === 'mean' ? 27.6 : null, gender: 'Female', salary: 60000, status: 'Imputed Age' },
    ...(outlierStrategy === 'remove' ? [] : [{ id: 4, name: 'Mike', age: outlierStrategy === 'cap' ? 65 : 150, gender: 'Male', salary: 70000, status: 'Capped Outlier' }]),
    { id: 5, name: 'Alice', age: 30, gender: 'Male', salary: missingStrategy === 'median' ? 55000 : 58750, status: 'Imputed Salary & Standardized' },
    { id: 6, name: 'Bob', age: 28, gender: 'Female', salary: 55000, status: 'Preserved' },
  ];

  return (
    <div className="rounded-xl border border-zinc-800 bg-[#0d0f18] p-5 text-sm text-zinc-300">
      {/* Header */}
      <div className="flex flex-col gap-2 pb-4 border-b border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-purple-400 font-mono">Agentic Pipeline Simulation</span>
          <h4 className="text-base font-semibold text-zinc-100">Separation of Planning vs Execution</h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1 rounded-lg border border-zinc-700 bg-zinc-900/80 px-2.5 py-1.5 text-xs text-zinc-300 hover:text-white transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo</span>
          </button>
        </div>
      </div>

      {/* Pipeline Stages Stepper */}
      <div className="grid grid-cols-4 gap-2 py-4 border-b border-zinc-800 text-xs">
        {[
          { key: 'raw', label: '1. Raw Ingestion' },
          { key: 'profiled', label: '2. Profiling Agent' },
          { key: 'planned', label: '3. Planning Agent (LLM)' },
          { key: 'cleaned', label: '4. Cleaned & Validated' },
        ].map((s) => {
          const isActive = pipelinePhase === s.key;
          return (
            <button
              key={s.key}
              onClick={() => setPipelinePhase(s.key as any)}
              className={`py-2 px-1.5 rounded-lg border text-center transition ${
                isActive
                  ? 'border-purple-500 bg-purple-950/40 text-purple-300 font-medium'
                  : 'border-zinc-800/80 bg-zinc-950/40 text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <span className="block truncate">{s.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main View Area */}
      <div className="py-4 space-y-4">
        {/* Phase 1: Raw Ingestion */}
        {pipelinePhase === 'raw' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5 text-zinc-400" />
                Raw Dirty Dataset (CSV / SQLite Source)
              </span>
              <span className="text-xs text-amber-400 font-mono">6 Rows Ingested</span>
            </div>

            <div className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-zinc-900/60 border-b border-zinc-800 text-zinc-400">
                  <tr>
                    <th className="p-2.5">ID</th>
                    <th className="p-2.5">Name</th>
                    <th className="p-2.5">Age</th>
                    <th className="p-2.5">Gender</th>
                    <th className="p-2.5">Salary</th>
                    <th className="p-2.5 text-amber-400">Detected Defect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80 text-zinc-300">
                  {initialDirtyData.map((row) => (
                    <tr key={row.id} className={row.anomaly ? 'bg-amber-950/15' : ''}>
                      <td className="p-2.5 text-zinc-500">{row.id}</td>
                      <td className="p-2.5 text-zinc-200">{row.name}</td>
                      <td className={`p-2.5 ${row.age === null ? 'text-rose-400 italic' : row.age === 150 ? 'text-amber-400 font-bold' : ''}`}>
                        {row.age === null ? 'NaN' : row.age}
                      </td>
                      <td className={`p-2.5 ${row.gender === 'male' || row.gender === 'MALE' ? 'text-amber-300' : ''}`}>
                        {row.gender}
                      </td>
                      <td className={`p-2.5 ${row.salary === null ? 'text-rose-400 italic' : ''}`}>
                        {row.salary === null ? 'NaN' : `$${Number(row.salary).toLocaleString()}`}
                      </td>
                      <td className="p-2.5 text-amber-400 text-[11px]">{row.anomaly || 'None'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-zinc-400">
              Traditional pipelines run rigid hardcoded scripts. In this architecture, the Profiling Agent inspects the dataset first.
            </p>
          </div>
        )}

        {/* Phase 2: Profiling Agent */}
        {pipelinePhase === 'profiled' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-purple-400" />
                Profiling Agent Statistical Metadata Output
              </span>
              <span className="text-xs text-purple-400 font-mono">Profile Complete</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-lg bg-zinc-950 p-3 border border-zinc-800">
                <span className="text-xs text-zinc-500 block">Total Ingested Rows</span>
                <span className="text-xl font-bold font-mono text-zinc-100">6</span>
                <span className="text-[11px] text-zinc-500 block">4 Columns</span>
              </div>
              <div className="rounded-lg bg-zinc-950 p-3 border border-zinc-800">
                <span className="text-xs text-zinc-500 block">Duplicates Detected</span>
                <span className="text-xl font-bold font-mono text-amber-400">1</span>
                <span className="text-[11px] text-zinc-500 block">Row #2 matching Row #1</span>
              </div>
              <div className="rounded-lg bg-zinc-950 p-3 border border-zinc-800">
                <span className="text-xs text-zinc-500 block">Missing Values</span>
                <span className="text-xl font-bold font-mono text-rose-400">2</span>
                <span className="text-[11px] text-zinc-500 block">1 Age, 1 Salary</span>
              </div>
              <div className="rounded-lg bg-zinc-950 p-3 border border-zinc-800">
                <span className="text-xs text-zinc-500 block">Outliers Detected</span>
                <span className="text-xl font-bold font-mono text-amber-400">1</span>
                <span className="text-[11px] text-zinc-500 block">Age = 150</span>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-xs font-mono space-y-1 text-zinc-300">
              <span className="text-zinc-500 block text-[11px]">Structured Profile Passed to Planning Agent:</span>
              <p>{"{"}</p>
              <p className="pl-4">"rows": 6, "columns": ["Name", "Age", "Gender", "Salary"],</p>
              <p className="pl-4">"duplicates_count": 1,</p>
              <p className="pl-4">"missing": {"{"} "Age": 1, "Salary": 1 {"}"},</p>
              <p className="pl-4">"outliers": [{"{"} "column": "Age", "value": 150, "reason": "exceeds human lifespan" {"}"}],</p>
              <p className="pl-4">"categorical_variants": {"{"} "Gender": ["M", "male", "MALE", "Female"] {"}"}</p>
              <p>{"}"}</p>
            </div>
          </div>
        )}

        {/* Phase 3: Planning Agent (LLM) */}
        {pipelinePhase === 'planned' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-purple-400" />
                Planning Agent Decisions (Strict JSON Schema)
              </span>
              <span className="text-xs text-emerald-400 font-mono">Schema Validated</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Controls to test alternatives */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3.5 space-y-3">
                <span className="text-xs font-semibold text-zinc-200 block">Agent Strategy Configuration:</span>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Deduplication:</span>
                    <button
                      onClick={() => setRemoveDuplicates(!removeDuplicates)}
                      className={`px-2 py-0.5 rounded font-mono text-xs border ${
                        removeDuplicates ? 'border-emerald-800 bg-emerald-950 text-emerald-300' : 'border-zinc-700 bg-zinc-900 text-zinc-400'
                      }`}
                    >
                      remove_duplicates: {String(removeDuplicates)}
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Missing Value Strategy:</span>
                    <select
                      value={missingStrategy}
                      onChange={(e) => setMissingStrategy(e.target.value as any)}
                      className="rounded bg-zinc-900 border border-zinc-700 px-2 py-1 text-xs text-zinc-200 focus:outline-none"
                    >
                      <option value="median">median imputation</option>
                      <option value="mean">mean imputation</option>
                      <option value="drop">drop rows</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Outlier Strategy:</span>
                    <select
                      value={outlierStrategy}
                      onChange={(e) => setOutlierStrategy(e.target.value as any)}
                      className="rounded bg-zinc-900 border border-zinc-700 px-2 py-1 text-xs text-zinc-200 focus:outline-none"
                    >
                      <option value="remove">remove row (Age 150)</option>
                      <option value="cap">cap to ceiling (65)</option>
                      <option value="keep">keep as-is</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Category Standardization:</span>
                    <button
                      onClick={() => setStandardizeCategories(!standardizeCategories)}
                      className={`px-2 py-0.5 rounded font-mono text-xs border ${
                        standardizeCategories ? 'border-emerald-800 bg-emerald-950 text-emerald-300' : 'border-zinc-700 bg-zinc-900 text-zinc-400'
                      }`}
                    >
                      standardize: {String(standardizeCategories)}
                    </button>
                  </div>
                </div>
              </div>

              {/* Generated JSON Plan */}
              <div className="rounded-lg border border-purple-900/40 bg-zinc-950 p-3.5 text-xs font-mono space-y-1.5 text-purple-300">
                <span className="text-zinc-500 block text-[11px]">Strict JSON Plan dispatched to Cleaning Agent:</span>
                <p className="text-zinc-400">{"{"}</p>
                <p className="pl-4 text-emerald-300">"remove_duplicates": {String(removeDuplicates)},</p>
                <p className="pl-4 text-emerald-300">"missing_strategy": "{missingStrategy}",</p>
                <p className="pl-4 text-emerald-300">"outlier_strategy": "{outlierStrategy}",</p>
                <p className="pl-4 text-emerald-300">"standardize_categories": {String(standardizeCategories)}</p>
                <p className="text-zinc-400">{"}"}</p>
                <p className="text-[11px] text-zinc-500 pt-2 border-t border-zinc-800/80">
                  Critical design choice: The downstream Cleaning Agent has zero creative license. It deterministically executes this plan.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Phase 4: Cleaned & Validated Dataset */}
        {pipelinePhase === 'cleaned' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Validation Agent Certified Clean Dataset
              </span>
              <span className="text-xs text-emerald-400 font-mono">Quality Score: 66.7% / 0 Issues Remaining</span>
            </div>

            <div className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-zinc-900/60 border-b border-zinc-800 text-zinc-400">
                  <tr>
                    <th className="p-2.5">ID</th>
                    <th className="p-2.5">Name</th>
                    <th className="p-2.5">Age</th>
                    <th className="p-2.5">Gender</th>
                    <th className="p-2.5">Salary</th>
                    <th className="p-2.5 text-emerald-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80 text-zinc-200">
                  {cleanedData.map((row) => (
                    <tr key={row.id} className="hover:bg-zinc-900/40">
                      <td className="p-2.5 text-zinc-500">{row.id}</td>
                      <td className="p-2.5 font-medium">{row.name}</td>
                      <td className="p-2.5 text-emerald-300">{row.age}</td>
                      <td className="p-2.5">{row.gender}</td>
                      <td className="p-2.5 text-emerald-300">${Number(row.salary).toLocaleString()}</td>
                      <td className="p-2.5 text-emerald-400 text-[11px]">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Validation Agent Report */}
            <div className="rounded-lg border border-emerald-900/40 bg-zinc-950 p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="space-y-0.5">
                <span className="text-zinc-200 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Validation Agent Audit: Passed
                </span>
                <span className="text-zinc-400 text-[11px]">
                  Original: 6 rows · Cleaned: {cleanedData.length} rows · Duplicates purged: 1 · Remaining issues: []
                </span>
              </div>
              <span className="font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800 shrink-0">
                Ready for downstream ML training
              </span>
            </div>
          </div>
        )}

        {/* Phase Stepper Actions */}
        <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-500 font-mono">
            {pipelinePhase === 'raw' && 'Next: Profiling Agent analyzes schema & anomalies'}
            {pipelinePhase === 'profiled' && 'Next: Planning Agent formulates JSON plan'}
            {pipelinePhase === 'planned' && 'Next: Cleaning Agent executes transformations'}
            {pipelinePhase === 'cleaned' && 'Pipeline execution completed successfully'}
          </span>

          {pipelinePhase !== 'cleaned' ? (
            <button
              onClick={handleNextPhase}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded bg-purple-600 hover:bg-purple-500 text-white transition"
            >
              <span>Next Pipeline Step</span>
              <Play className="w-3 h-3 fill-current" />
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="text-xs text-zinc-400 hover:text-zinc-200 transition"
            >
              Restart Simulation ↺
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
