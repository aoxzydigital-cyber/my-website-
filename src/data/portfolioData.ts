import {
  CaseStudyData,
  EducationItem,
  ExperienceItem,
  CertificationItem,
  SkillCategory,
} from '../types.ts';

export const personalInfo = {
  name: 'Thamada Ashish',
  title: 'Aspiring AI Product Manager',
  tagline: 'Bridging deep learning architectures and product strategy to build transparent, evidence-backed AI systems.',
  location: 'Delhi, India',
  phone: '+91-8007513412',
  email: 'thamadashish.work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/thamada-ashish-09403342a',
  github: 'https://github.com/roomslabdesigns-collab',
  summary:
    'Recent M.Tech Computer Science and Engineering Graduate focused on building AI products from scratch by leveraging LLMs, RAG, agentic workflows, and AI coding technologies. Combining deep software engineering foundations with product discovery, user research, competitive intelligence, experimentation, and human-in-the-loop UX to formulate testable, high-impact solutions.',
  stats: [
    { label: 'End-to-End AI Products', value: '4', detail: 'Shipped from discovery to prototype' },
    { label: 'Held-Out ML Recall', value: '99.2%', detail: 'Fraud risk decision support system' },
    { label: 'Agentic Architectures', value: 'Multi-Agent', detail: 'LangGraph, Ollama & Gemini' },
    { label: 'Academic Foundation', value: 'M.Tech CSE', detail: 'Delhi Technological University' },
  ],
};

export const caseStudies: CaseStudyData[] = [
  {
    id: 'aivista',
    title: 'AIVista — AI Search Revenue Agent',
    subtitle: 'Autonomous Brand Intelligence & Revenue Opportunity Discovery',
    category: 'Agentic AI',
    role: 'AI Product Management & Full-Stack Prototyping',
    githubUrl: 'https://github.com/roomslabdesigns-collab/AIVista',
    headlineQuote:
      'Google is no longer the only place customers search. AIVista helps companies understand whether AI search recommends them — and what to do when it doesn’t.',
    highlightSummary:
      'An agentic AI product that investigates how a company brand appears across AI-powered search (ChatGPT, Claude, Gemini), analyzes competitors and cited sources, diagnoses visibility gaps, and converts findings into actionable revenue experiments.',
    technologies: ['Gemini API', 'React', 'TypeScript', 'Node.js', 'Express', 'Firebase Firestore', 'Agentic AI'],
    metrics: [
      { label: 'Investigation Workflow', value: 'Automated', detail: '6-step autonomous pipeline' },
      { label: 'Query Generation', value: 'AI-Generated', detail: 'High-intent realistic customer journeys' },
      { label: 'Decision Output', value: 'Actionable Experiments', detail: 'Beyond vanity visibility metrics' },
    ],
    originalWorkflow: {
      overview:
        'Customers increasingly rely on AI assistants (ChatGPT, Claude, Gemini) to research products and make purchasing decisions. Today, discovering if AI recommends a company requires manually typing dozens of queries, recording answers in sprawling spreadsheets, inspecting citations, and guessing why competitors won.',
      flowSteps: [
        'Manual Query Conception (guessing customer search phrasing)',
        'Copy-Pasting across multiple AI assistants',
        'Manual spreadsheet logging of brand mentions and competitors',
        'Subjective interpretation with no automated experiment generation',
      ],
      coreProblem:
        'The problem is not simply collecting AI responses. The real problem is turning those responses into actionable product and revenue opportunities.',
    },
    frictionPoints: [
      {
        friction: 'AI visibility is difficult to measure',
        rootCause: 'AI search results change depending on query, model, and context',
        impact: "Companies don't have a consistent view of how visible their brand is",
      },
      {
        friction: 'Manual query research is slow',
        rootCause: 'Teams must manually think of dozens of customer-intent questions',
        impact: 'Important customer journeys can be missed',
      },
      {
        friction: 'Competitor analysis is fragmented',
        rootCause: 'Competitors, mentions, rankings, and citations have to be compared manually',
        impact: 'Hard to understand why competitors are being recommended',
      },
      {
        friction: 'Citation analysis is time-consuming',
        rootCause: 'Teams need to inspect which websites and sources AI models rely on',
        impact: 'Content and authority gaps remain hidden',
      },
      {
        friction: "Insights don't automatically become actions",
        rootCause: 'Analytics tools often stop at reporting visibility',
        impact: "Teams know there is a problem but don't know what experiment to run",
      },
    ],
    prerequisites: [
      'A reliable website investigation layer: understands products, category, positioning, and key pages.',
      'A structured query-generation strategy: queries represent realistic customer intent rather than random prompts.',
      'Consistent AI-search evaluation: results captured across multiple AI assistants and normalized.',
      'Reliable citation and competitor extraction: distinguishes brand mentions, rivals, and cited domains.',
      'A clear connection between visibility and business impact: outputs concrete hypotheses to test.',
    ],
    workflowSteps: [
      {
        stepNumber: 1,
        title: 'Investigate',
        description: 'Autonomous crawler and entity extractor parses company website',
        details: [
          'Extracts product positioning, category, and target customer personas',
          'Catalogs key features, pricing tiers, and high-value landing pages',
          'Prepares context foundation for customer intent simulation',
        ],
      },
      {
        stepNumber: 2,
        title: 'Generate',
        description: 'Synthesizes realistic high-intent customer purchase queries',
        details: [
          'Generates category-level queries (e.g., "Best CRM for mid-market companies")',
          'Produces integration-specific queries (e.g., "Which CRM integrates with Gmail and Slack?")',
          'Simulates competitive comparison queries (e.g., "Relay CRM vs HubSpot for mid-market")',
        ],
      },
      {
        stepNumber: 3,
        title: 'Test',
        description: 'Dispatches queries across multi-model AI search engines',
        details: [
          'Records brand mentions and competitor brand presence',
          'Measures position/ranking and primary recommendation frequency',
          'Extracts all hyperlinked and referenced citations',
        ],
      },
      {
        stepNumber: 4,
        title: 'Analyze',
        description: 'Normalizes and correlates response data across models',
        details: [
          'Calculates relative visibility against tier-1 competitors',
          'Identifies recurrent third-party authority domains (e.g., G2, Forbes, Capterra)',
          'Flags missing citations where competitors are systematically cited',
        ],
      },
      {
        stepNumber: 5,
        title: 'Diagnose',
        description: 'Connects empirical search evidence to underlying root causes',
        details: [
          'Traces Low AI Visibility -> Competitor Frequency -> Stronger Citation Presence',
          'Identifies gaps where the brand lacks coverage for high-intent workflows',
          'Maps specific content and authority opportunities',
        ],
      },
      {
        stepNumber: 6,
        title: 'Recommend & Experiment',
        description: 'Converts diagnosis into an executable growth experiment',
        details: [
          'Visibility Gap -> Evidence -> Recommendation -> Experiment -> Measure Impact',
          'Generates content brief targeting missing cited authority platforms',
          'Sets measurable hypothesis with before/after re-indexing tracking',
        ],
      },
    ],
    humanFallbackTriggers: [
      'Low-confidence website extraction: Important product information is surfaced for human confirmation rather than silently guessed.',
      'Ambiguous AI responses: Responses that cannot reliably distinguish brand or competitor context are flagged for human review.',
      'Unclear recommendation: If evidence does not statistically support a strong action, the system surfaces raw evidence without forcing a speculative recommendation.',
      'Experiment approval: Recommended business experiments require human product-manager approval before execution.',
      'Unexpected AI/search provider failure: Records failure state transparently rather than presenting incomplete data as authoritative.',
    ],
    samplePrompt: {
      systemPrompt: `You are an AI search visibility analyst.
Given:
1. A company website analysis
2. A customer-intent query
3. An AI search response

Extract only information supported by the response.
Identify:
1. Whether the target company is mentioned
2. Which competitors are mentioned
3. Whether the target company is recommended
4. Which sources are cited
5. Which competitors appear more prominently
6. Potential visibility gaps

Do not infer information that is not present.
Return structured JSON:
{
  "brand_mentioned": true | false,
  "brand_recommended": true | false,
  "competitors": string[],
  "citations": string[],
  "visibility_signal": "positive" | "neutral" | "negative",
  "evidence": string[],
  "potential_gap": string | null
}`,
      sampleInput: `Query: "Best CRM for mid-market companies"
AI Response: "HubSpot and Salesforce are commonly recommended for mid-market businesses seeking advanced automation. Relay CRM is also mentioned as an emerging option with Gmail integration."
Citations: hubspot.com, salesforce.com, g2.com`,
      sampleOutput: `{
  "brand_mentioned": true,
  "brand_recommended": false,
  "competitors": ["HubSpot", "Salesforce"],
  "citations": ["hubspot.com", "salesforce.com", "g2.com"],
  "visibility_signal": "negative",
  "evidence": [
    "Relay CRM was mentioned but was not among the primary recommendations."
  ],
  "potential_gap": "Weak recommendation presence compared with competitors."
}`,
    },
    promptTesting: [
      {
        caseName: 'Clear Recommendation',
        input: 'Brand clearly recommended as top choice with key citations',
        expectedOutput: 'Brand identified and recommendation captured accurately',
        whatBadResultReveals: 'Extraction logic is missing obvious positive signals',
      },
      {
        caseName: 'Not Mentioned',
        input: 'AI response contains only competitor mentions and reviews',
        expectedOutput: 'brand_mentioned: false, competitors extracted',
        whatBadResultReveals: 'Model is hallucinating brand visibility or false positives',
      },
      {
        caseName: 'Ambiguous Context',
        input: 'Brand name appears in footer or unrelated context',
        expectedOutput: 'Flagged for review; visibility_signal neutral/negative',
        whatBadResultReveals: 'Model treats incidental mentions as genuine product recommendations',
      },
      {
        caseName: 'Multiple Competitors',
        input: 'Several competing brands listed with distinct feature comparisons',
        expectedOutput: 'All relevant competitors extracted and ranked',
        whatBadResultReveals: 'Competitor extraction is truncated or biased to first mention',
      },
      {
        caseName: 'Missing Citations',
        input: 'Response contains recommendations but zero citation links',
        expectedOutput: 'Empty citation list with explicit citation gap note',
        whatBadResultReveals: 'Model is inventing or hallucinating reference sources',
      },
    ],
    businessImpact: [
      {
        metricOrCapability: 'AI visibility analysis',
        before: 'Manual spreadsheet testing (days)',
        after: 'Automated agentic investigation (minutes)',
        reasoning: 'Autonomous agent orchestrates end-to-end multi-assistant runs',
      },
      {
        metricOrCapability: 'Query generation',
        before: 'Manually brainstormed prompts',
        after: 'Contextual AI-generated queries',
        reasoning: 'Queries reflect authentic customer purchase intent and personas',
      },
      {
        metricOrCapability: 'Competitor analysis',
        before: 'Manual ad-hoc comparison',
        after: 'Automated entity & ranking extraction',
        reasoning: 'Standardized extraction captures presence across all responses',
      },
      {
        metricOrCapability: 'Citation analysis',
        before: 'Manual browser link inspection',
        after: 'Systematic source citation mapping',
        reasoning: 'Identifies third-party domain authority gaps automatically',
      },
      {
        metricOrCapability: 'Recommendation creation',
        before: 'Vague manual interpretation',
        after: 'Evidence-backed growth experiments',
        reasoning: 'Direct linkage from empirical gap to testable roadmap experiment',
      },
    ],
    productLoop: [
      'Website Crawl & Entity Ingestion',
      'Autonomous Customer Query Simulation',
      'Multi-Assistant Search Execution',
      'Competitor & Citation Gap Diagnosis',
      'Actionable Experiment Recommendation',
      'Human-in-the-Loop Approval',
      'Impact Measurement & Repeat Loop',
    ],
    risksAndTradeoffs: [
      {
        risk: 'AI search results are non-deterministic across runs',
        mitigation:
          'Evaluates multiple queries across different model providers over time rather than treating a single response as definitive truth.',
      },
      {
        risk: 'AI-generated recommendations may be speculative or weak',
        mitigation:
          'Every proposed experiment is programmatically tied to underlying evidence, competitor presence, and citation gap metrics.',
      },
      {
        risk: 'Dependency on AI search provider data quality and rate limits',
        mitigation:
          'Graceful degradation when providers fail, surfacing query coverage confidence levels to the product manager.',
      },
    ],
    whatStaysHuman: {
      aiAutomates: [
        'Website crawling and entity extraction',
        'Customer intent query generation',
        'Multi-model response collection and citation parsing',
        'Competitor visibility ranking and gap diagnosis',
        'Initial experiment hypothesis synthesis',
      ],
      humanRetains: [
        'Strategic prioritization of company messaging and positioning',
        'Final approval and go/no-go on growth experiments',
        'Resource allocation for content, PR, and SEO initiatives',
        'Adjudication of flagged ambiguous responses',
      ],
      governancePrinciple:
        'AIVista is strictly a decision-support copilot, never an autonomous agent making unapproved marketing or product commitments.',
    },
    currentState: [
      'Website investigation & automated crawling module',
      'Product and category understanding parser',
      'Customer query generation engine',
      'Multi-assistant search investigation workflow',
      'Competitor & citation gap diagnostic view',
      'Evidence and findings interface with human approval gate',
    ],
    nextBuild: [
      'Connect production live search APIs with headless browser fallback',
      'Add persistent investigation history and trend charting',
      'Workspace multi-tenancy and team collaboration',
      'Automated recurring test schedules and drift alerts',
      'Direct integration with CMS (Webflow, WordPress) for experiment publishing',
    ],
  },
  {
    id: 'insightai',
    title: 'InsightAI — Product Feedback Intelligence Engine',
    subtitle: 'RAG-Powered Unstructured Customer Feedback Synthesizer',
    category: 'RAG & Search',
    role: 'AI Product Management & Architecture Design',
    githubUrl: 'https://github.com/roomslabdesigns-collab/insiteAI',
    headlineQuote:
      'Customer feedback is everywhere. Product decisions shouldn’t depend on manually reading all of it.',
    highlightSummary:
      'A RAG-powered product intelligence system that transforms unstructured customer feedback from tickets, reviews, and surveys into evidence-backed insights, product opportunities, and prioritized recommendations.',
    technologies: ['RAG Pipeline', 'Semantic Search', 'Vector Database', 'LLM Enrichment', 'Gemini API', 'Python'],
    metrics: [
      { label: 'Feedback Ingestion', value: 'Multi-Channel', detail: 'Tickets, surveys, reviews, chats' },
      { label: 'Prioritization Formula', value: 'Impact + Revenue', detail: 'Combined with issue severity' },
      { label: 'Traceability', value: '100% Evidence-Grounded', detail: 'Linked directly to raw customer quotes' },
    ],
    originalWorkflow: {
      overview:
        'Product teams receive feedback from Zendesk, App Store reviews, Typeform surveys, Gong sales calls, and Intercom chats. PMs spend dozens of hours reading fragments, leading to confirmation bias where loudest customers dictate roadmaps.',
      flowSteps: [
        'Feedback dumped in disjointed silos without metadata synchronization',
        'Manual keyword searches in spreadsheets (missing semantic equivalents)',
        'Unsubstantiated PM summaries lacking traceable customer proof',
        'Subjective roadmap debates without revenue or churn context',
      ],
      coreProblem:
        'Instead of asking the product manager to read thousands of feedback records, InsightAI lets them ask natural-language questions and inspect the empirical evidence behind the answer.',
    },
    frictionPoints: [
      {
        friction: 'Feedback is scattered across disconnected tools',
        rootCause: 'Data originates in support, CRM, app stores, and NPS forms',
        impact: "Product teams don't have a single unified voice-of-customer view",
      },
      {
        friction: 'Large volumes are impossible to analyze manually',
        rootCause: 'Reading thousands of comments does not scale with user growth',
        impact: 'Critical customer churn signals and emerging bugs are missed',
      },
      {
        friction: 'Similar problems appear under wildly different wording',
        rootCause: 'Customers use informal colloquial phrasing rather than product jargon',
        impact: 'Keyword searches fail to cluster related recurring themes',
      },
      {
        friction: 'Synthesized insights lack verifiable evidence',
        rootCause: 'Summaries are drafted without traceable customer citation links',
        impact: 'Engineering and leadership dispute the validity of proposed fixes',
      },
      {
        friction: 'Feature prioritization remains subjective',
        rootCause: 'Impact, severity, customer ARR, and frequency are evaluated in isolation',
        impact: 'Teams struggle with roadmap alignment and resource trade-offs',
      },
    ],
    prerequisites: [
      'Clean and structured feedback: Deduplication, normalization, and metadata tagging.',
      'Enriched customer context: Linking segment, pricing plan, ARR tier, and churn risk.',
      'Dense semantic vector embeddings: Translating diverse customer vernacular into unified latent space.',
      'Reliable grounded RAG knowledge base: Strict retrieval grounding preventing generative hallucinations.',
      'Transparent opportunity scoring: Mathematical prioritization combining frequency, revenue, and severity.',
    ],
    workflowSteps: [
      {
        stepNumber: 1,
        title: 'Ingest',
        description: 'Multi-source pipeline ingesting raw customer feedback streams',
        details: ['Collects App Store reviews, Zendesk tickets, NPS responses, and sales call transcripts', 'Preserves source provenance and ingestion timestamps'],
      },
      {
        stepNumber: 2,
        title: 'Clean & Normalize',
        description: 'Standardizes disparate text schemas into uniform records',
        details: ['Deduplicates bot spam and repeated tickets', 'Normalizes unicode and prepares structured customer metadata tags'],
      },
      {
        stepNumber: 3,
        title: 'LLM Enrichment',
        description: 'Extracts deep semantic metadata per feedback entry',
        details: ['Classifies sentiment (positive, neutral, negative)', 'Tags product area, problem severity, customer segment, and churn signals'],
      },
      {
        stepNumber: 4,
        title: 'Embed & Store',
        description: 'Generates vector embeddings stored in high-performance index',
        details: ['Encodes customer prose into vector representations', 'Enables hybrid search (semantic similarity + metadata filter constraints)'],
      },
      {
        stepNumber: 5,
        title: 'Retrieve',
        description: 'Retrieves semantically relevant feedback for PM natural inquiries',
        details: ['Converts PM question into query embedding', 'Applies similarity threshold cutoffs to filter out noisy, weakly-correlated records'],
      },
      {
        stepNumber: 6,
        title: 'Generate Grounded Answer',
        description: 'Synthesizes evidence-grounded findings via LLM reasoning',
        details: ['Assembles retrieved snippets into strict context envelope', 'Mandates explicit citations to customer feedback identifiers'],
      },
      {
        stepNumber: 7,
        title: 'Convert into Prioritized Opportunity',
        description: 'Translates validated themes into ranked product initiatives',
        details: ['Computes Priority Score = Impact + Revenue Exposure + Severity Rating', 'Provides actionable roadmap recommendation with confidence level'],
      },
    ],
    humanFallbackTriggers: [
      'Insufficient relevant feedback: The system explicitly states when evidence is lacking rather than fabricating a confident response.',
      'Conflicting feedback: Opposing customer experiences are presented side-by-side rather than silently averaged out.',
      'Low-confidence classification: Ambiguous sentiment or severity tags are flagged for human validation.',
      'High-impact roadmap bets: Significant product or architectural recommendations remain subject to PM and executive review.',
      'Weak evidence warnings: Opportunities without sufficient customer frequency are tagged as exploratory hypotheses.',
    ],
    samplePrompt: {
      systemPrompt: `You are a product feedback intelligence assistant.
You are given:
1. A product manager's question
2. Relevant customer feedback retrieved from a vector database
3. Customer and product metadata

Answer the question using ONLY the retrieved feedback.
Identify:
1. The main recurring problems
2. Relevant product areas
3. Customer segments affected
4. Severity of the problems
5. Supporting evidence
6. Potential product opportunities

Do not invent customer feedback or unsupported conclusions.
If the retrieved feedback does not provide enough evidence, clearly state that there is insufficient evidence.
Return valid JSON:
{
  "insight": string,
  "themes": string[],
  "affected_segments": string[],
  "severity": "low" | "medium" | "high" | "critical",
  "evidence": string[],
  "opportunity": string,
  "confidence": "high" | "medium" | "low"
}`,
      sampleInput: `User Question: "What are customers complaining about in the onboarding experience?"
Retrieved Feedback:
1. "Setup took almost an hour and I wasn't sure what to do next."
2. "The onboarding screens are confusing."
3. "I couldn't understand how to connect my account."
4. "Too many steps before I could use the product."
5. "The setup instructions weren't clear."`,
      sampleOutput: `{
  "insight": "Customers are experiencing friction during onboarding, mainly around setup complexity and unclear instructions.",
  "themes": ["Setup Complexity", "Ambiguous UI Instructions", "Account Linking Friction"],
  "affected_segments": ["Self-serve SMB", "Free Trialists"],
  "severity": "high",
  "evidence": [
    "5 relevant feedback items cite setup difficulty, confusing UI, or unclear instructions."
  ],
  "opportunity": "Simplify the onboarding flow into a 3-step guided wizard with automated account connection verification.",
  "confidence": "high"
}`,
    },
    promptTesting: [
      {
        caseName: 'Clear Single-Theme Signal',
        input: 'Multiple consistent complaints regarding specific checkout error',
        expectedOutput: 'High confidence theme with exact quotes and high severity',
        whatBadResultReveals: 'Retrieval or synthesis is missing obvious recurring patterns',
      },
      {
        caseName: 'Diverse Phrasing',
        input: 'Users describe same onboarding latency with colloquial terminology',
        expectedOutput: 'Unified onboarding friction cluster with semantic grouping',
        whatBadResultReveals: 'Keyword-only bias; vector embedding space is failing to cluster',
      },
      {
        caseName: 'Low-Signal / Outlier',
        input: 'Only one weakly related review mentioning unrelated feature',
        expectedOutput: 'Low confidence score with insufficient evidence disclosure',
        whatBadResultReveals: 'System over-generalizes isolated edge complaints into product mandates',
      },
      {
        caseName: 'Contradictory Feedback',
        input: 'Enterprise users love deep customization; SMBs find it overwhelming',
        expectedOutput: 'Surfaces both perspectives split by customer segment',
        whatBadResultReveals: 'Model averages out conflicting signals and conceals segment nuance',
      },
      {
        caseName: 'Irrelevant Query',
        input: 'PM asks about feature never mentioned in feedback database',
        expectedOutput: 'Explicit declaration: "Insufficient evidence in database"',
        whatBadResultReveals: 'Model hallucinates user feedback to satisfy user query',
      },
    ],
    businessImpact: [
      {
        metricOrCapability: 'Feedback analysis',
        before: 'Manual reading of ticket dumps (weeks)',
        after: 'Real-time AI-assisted semantic synthesis (seconds)',
        reasoning: 'Vector search indexes across thousands of disparate comments',
      },
      {
        metricOrCapability: 'Theme discovery',
        before: 'Manual tagging and spreadsheet grouping',
        after: 'Automated clustering across language variations',
        reasoning: 'Dense semantic representations capture synonyms effortlessly',
      },
      {
        metricOrCapability: 'Product inquiries',
        before: 'Cross-functional meetings & ticket requests',
        after: 'Direct natural-language Q&A for PMs',
        reasoning: 'On-demand conversational retrieval with evidence grounding',
      },
      {
        metricOrCapability: 'Evidence validation',
        before: 'Anecdotal impressions and loudest voices',
        after: 'Traceable customer quote citations',
        reasoning: 'Direct lineage to customer segment, ARR, and frequency',
      },
      {
        metricOrCapability: 'Roadmap prioritization',
        before: 'Subjective stakeholder debate',
        after: 'Formulaic Priority Score (Impact + Revenue + Severity)',
        reasoning: 'Objective data-backed justification for engineering investment',
      },
    ],
    productLoop: [
      'Multi-Source Feedback Ingestion',
      'LLM Semantic Enrichment & Tagging',
      'Vector Embedding & Indexing',
      'PM Natural Language Inquiry',
      'Grounded Evidence Retrieval',
      'Priority Opportunity Scoring',
      'Roadmap Alignment & Outcome Tracking',
    ],
    risksAndTradeoffs: [
      {
        risk: 'RAG retrieves irrelevant or weakly aligned feedback',
        mitigation:
          'Enforce strict cosine similarity thresholds and fallback to explicit insufficient evidence warnings.',
      },
      {
        risk: 'LLM over-generalizes isolated complaints into false major trends',
        mitigation:
          'Always display raw feedback frequency count, unique customer accounts, and revenue impact alongside findings.',
      },
      {
        risk: 'Negative feedback bias distorts product direction',
        mitigation:
          'Normalize sentiment by pairing qualitative comments with quantitative usage data and positive NPS responses.',
      },
    ],
    whatStaysHuman: {
      aiAutomates: [
        'Data cleaning, text normalization, and deduplication',
        'Entity, theme, sentiment, and severity tagging',
        'Embedding generation and vector similarity search',
        'Cross-channel synthesis and evidence clustering',
        'Priority score calculation based on business parameters',
      ],
      humanRetains: [
        'Product strategy and company vision alignment',
        'Final go/no-go decisions on roadmap trade-offs',
        'Customer interview follow-ups for nuanced qualitative discovery',
        'Engineering feasibility and resource allocation constraints',
      ],
      governancePrinciple:
        'InsightAI assists with evidence synthesis and prioritization, but the product manager remains accountable for all product commitments.',
    },
    currentState: [
      'Multi-format feedback ingestion parser',
      'LLM enrichment for sentiment, theme, and severity classification',
      'Vector embeddings and semantic retrieval pipeline',
      'Evidence-grounded synthesis generator',
      'Interactive PM inquiry console with source citation drawer',
      'Impact and revenue-weighted prioritization scoring module',
    ],
    nextBuild: [
      'Live bi-directional webhooks for Zendesk, Jira, and Slack',
      'Automated churn-risk anomaly detection and alert notifications',
      'Longitudinal trend analysis to track problem recurrence post-release',
      'Segment cohort comparison matrix (Enterprise vs Mid-Market vs SMB)',
      'Automated Jira ticket generation with linked customer evidence quotes',
    ],
  },
  {
    id: 'fraud-platform',
    title: 'AI Fraud & Risk Intelligence Platform',
    subtitle: 'Human-in-the-Loop ML Decision Support System',
    category: 'Machine Learning',
    role: 'ML Product Architecture & Decision Support Design',
    githubUrl: 'https://github.com/roomslabdesigns-collab/fraud-risk-platform',
    headlineQuote:
      'Fraud teams can’t investigate every transaction. This system helps them decide what deserves attention first — without letting AI make the final call.',
    highlightSummary:
      'A fraud-risk decision-support system that scores transactions using supervised machine learning (XGBoost), explains score factors via SHAP, prioritizes human review based on analyst capacity, and logs analyst verdicts for auditability.',
    technologies: ['Python', 'XGBoost', 'SHAP Explainability', 'FastAPI', 'Streamlit', 'SQLite', 'Pandas', 'Plotly'],
    metrics: [
      { label: 'Recall on Test Split', value: '99.20%', detail: '89,459 held-out transaction rows' },
      { label: 'PR-AUC Score', value: '0.9898', detail: 'Precision-Recall Area Under Curve' },
      { label: 'False Positive Rate', value: '0.31%', detail: 'Preserves analyst investigation capacity' },
      { label: 'Core Rule', value: 'Zero Auto-Blocks', detail: 'Strict human-in-the-loop governance' },
    ],
    originalWorkflow: {
      overview:
        'Payment platforms process millions of transactions daily, far exceeding analyst investigation capacity. Traditional ML systems output raw probability floats that black-box algorithms cannot explain, resulting in either analyst alert fatigue or missed sophisticated fraud rings.',
      flowSteps: [
        'Raw transaction stream enters legacy rule engine',
        'Uncalibrated probability scores trigger chaotic alerts',
        'Analysts blindly guess why a transaction was flagged',
        'Model predictions overwrite human outcomes, corrupting feedback loops',
      ],
      coreProblem:
        'The system never automatically blocks a transaction or declares a transaction fraudulent. Instead: Risk Prediction -> Prioritization -> Explanation -> Investigation -> Human Decision -> Feedback -> Monitoring.',
    },
    frictionPoints: [
      {
        friction: 'Too many transactions to review',
        rootCause: 'Transaction volume vastly exceeds human analyst bandwidth',
        impact: 'Analysts cannot review everything, leading to missed incidents',
      },
      {
        friction: 'Raw ML probabilities are difficult to act on',
        rootCause: 'A probability float (e.g. 0.73) does not dictate operational priority',
        impact: 'Review queues become unmanageable and inconsistently handled',
      },
      {
        friction: 'Black-box predictions reduce trust',
        rootCause: 'Complex gradient boosted trees conceal individual decision factors',
        impact: 'Analysts either dismiss valid warnings or over-trust flawed predictions',
      },
      {
        friction: 'Model predictions and human outcomes are mixed together',
        rootCause: 'Systems overwrite model score with manual verdict in the same field',
        impact: 'Impossible to evaluate true ground truth vs model historical performance',
      },
      {
        friction: 'Model performance drifts over time',
        rootCause: 'Fraudster attack patterns and consumer seasonal habits change constantly',
        impact: 'Previously reliable models silently degrade without early warning',
      },
      {
        friction: 'Analyst feedback is selection-biased',
        rootCause: 'Analysts only review high-risk queue items, leaving unreviewed data unverified',
        impact: 'Feedback metrics are biased towards flagged cases',
      },
    ],
    prerequisites: [
      'Historical transaction database with verified fraud labels.',
      'Robust feature engineering transforming raw transaction metadata into behavioral signals.',
      'Evaluation prioritized on Recall and PR-AUC rather than misleading raw accuracy.',
      'Local explainability layer (SHAP values) for every individual scored transaction.',
      'Decoupled monitoring tracking data quality, feature drift, and prediction drift independently.',
    ],
    workflowSteps: [
      {
        stepNumber: 1,
        title: 'ML Risk Prediction',
        description: 'Supervised XGBoost model computes calibrated statistical risk probability',
        details: [
          'Processes tabular feature vectors (velocity, geolocation delta, amount ratios, device fingerprint)',
          'Outputs statistical estimate (not a definitive fraud assertion)',
        ],
      },
      {
        stepNumber: 2,
        title: 'Product Decision & Tiering',
        description: 'Transforms statistical probability into product-facing risk score and priority band',
        details: [
          'Maps probability to standardized 0–100 Risk Score',
          'Assigns High / Medium / Low priority bands calibrated by analyst daily queue capacity simulation',
          'Filters low-risk noise away from human investigation queues',
        ],
      },
      {
        stepNumber: 3,
        title: 'SHAP Explainability Layer',
        description: 'Calculates exact local feature contributions per transaction',
        details: [
          'Identifies top factors increasing risk (e.g., rapid velocity spike, foreign IP)',
          'Identifies factors decreasing risk (e.g., 5-year verified account history)',
          'Explains model behavior clearly without claiming empirical proof of intent',
        ],
      },
      {
        stepNumber: 4,
        title: 'Human Review & Verdict',
        description: 'Analyst conducts human investigation and logs authoritative outcome',
        details: [
          'Analyst reviews transaction context, user history, and SHAP drivers',
          'Records definitive verdict: Confirmed Fraud | Legitimate | Inconclusive',
          'Saves review outcome to append-only audit trail without altering model score',
        ],
      },
      {
        stepNumber: 5,
        title: 'Decoupled Monitoring & Drift',
        description: 'Monitors ongoing system health across independent signal vectors',
        details: [
          'Tracks data quality (missing schema attributes, format invalidity)',
          'Tracks prediction drift (shifts in risk score distributions over time)',
          'Tracks analyst feedback signals to identify potential concept drift',
        ],
      },
    ],
    humanFallbackTriggers: [
      'Every final transaction outcome requires human action; zero automated account freezes or blocks.',
      'System never declares a transaction definitively fraudulent — only flags risk levels.',
      'Analysts can choose Confirmed Fraud, Legitimate, or Inconclusive when context is ambiguous.',
      'Model explanations explicitly communicate model statistical tendencies, not real-world intent.',
      'Feedback-derived metrics are treated as signals from reviewed cohorts, not unbiased ground truth.',
    ],
    samplePrompt: {
      systemPrompt: `System Architecture — 3 Deliberate Decision Layers:
Layer 1: ML Prediction (Statistical probability via XGBoost)
Layer 2: Product Decision (0-100 Score & Priority bands derived from analyst capacity simulation)
Layer 3: Human Decision (Analyst verdict logged to append-only audit trail)

Explainability via TreeSHAP (Local feature contribution breakdown):
f(x) = E[f(x)] + SUM(SHAP_i)
Where each SHAP value quantifies how feature_i pushed the score above or below baseline.`,
      sampleInput: `Transaction #84912
Amount: $4,250.00 | Normal Avg: $120.00
Velocity: 6 transactions / 10 minutes
IP Geolocation: Lagos, Nigeria | Card Billing: Chicago, USA
Device Fingerprint: Unrecognized Android Emulator`,
      sampleOutput: `Risk Score: 87 / 100 | Priority: HIGH (Urgent Investigation Queue)
SHAP Explanations:
+ Velocity (6 txns/10m): +28.4 pts
+ Geolocation mismatch (Distance > 5,000 miles): +24.1 pts
+ Amount anomaly (35x historic avg): +19.2 pts
- Account age (> 3 years): -6.5 pts
Status: Awaiting Human Investigation`,
    },
    promptTesting: [
      {
        caseName: 'High Velocity / New Device',
        input: 'Rapid succession of transactions from new foreign IP',
        expectedOutput: 'High Priority (Score > 80), flagged for immediate queue review',
        whatBadResultReveals: 'Velocity feature weights insufficient in feature engineering',
      },
      {
        caseName: 'High Amount / Long Established User',
        input: 'Single large purchase by 10-year verified customer with 2FA enabled',
        expectedOutput: 'Medium Priority with clear positive historical mitigating SHAP factors',
        whatBadResultReveals: 'Model over-indexes on absolute transaction amount without user tenure context',
      },
      {
        caseName: 'Near-Threshold Edge Case',
        input: 'Score lands exactly on High/Medium band boundary (Score 70)',
        expectedOutput: 'Surfaced with borderline indicator to prompt closer scrutiny',
        whatBadResultReveals: 'Threshold rounding error causing misclassification in queue allocation',
      },
      {
        caseName: 'Novel Attack Vector',
        input: 'Zero velocity anomaly but novel pattern in merchant MCC code',
        expectedOutput: 'Flagged by secondary anomaly threshold; sent to human review',
        whatBadResultReveals: 'Blind reliance on standard features leaves new patterns unmonitored',
      },
    ],
    businessImpact: [
      {
        metricOrCapability: 'Transaction prioritization',
        before: 'Analysts browse chronologically or raw probabilities',
        after: 'Calibrated 0-100 risk score and priority bands',
        reasoning: 'Thresholds calibrated to human team daily review capacity',
      },
      {
        metricOrCapability: 'Risk interpretation',
        before: 'Black-box score with zero explanation',
        after: 'Feature-level SHAP explanation waterfall',
        reasoning: 'Analysts immediately understand the top positive & negative risk drivers',
      },
      {
        metricOrCapability: 'Investigation workflow',
        before: 'Ad-hoc Slack messages and manual notes',
        after: 'Standardized 3-tier verdict (Confirmed, Legitimate, Inconclusive)',
        reasoning: 'Decouples ML prediction from human decision for clean data loops',
      },
      {
        metricOrCapability: 'Auditability',
        before: 'Overwritten scores with lost historical state',
        after: 'Immutable append-only audit trail and feedback log',
        reasoning: 'Full compliance with financial regulatory inspection standards',
      },
      {
        metricOrCapability: 'Model monitoring',
        before: 'Offline evaluation alone every 6 months',
        after: 'Independent tracking of data quality, drift, and feedback',
        reasoning: 'Identifies distribution shifts before customer experience is degraded',
      },
    ],
    productLoop: [
      'Real-Time Transaction Stream Ingestion',
      'Behavioral Feature Engineering & Scaling',
      'XGBoost Risk Probability Scoring',
      'Analyst Capacity-Calibrated Band Allocation',
      'SHAP Explainability Waterfall Generation',
      'Human Review & Verdict Logging',
      'Append-Only Feedback & Audit Trail',
      'Continuous Drift Monitoring & Recalibration',
    ],
    risksAndTradeoffs: [
      {
        risk: 'False positives overwhelm human analyst capacity',
        mitigation:
          'Operating thresholds are derived from team capacity simulations rather than an arbitrary 0.5 model threshold.',
      },
      {
        risk: 'Missing subtle or emerging fraud patterns',
        mitigation:
          'Evaluation optimizes for Recall (99.20%) and PR-AUC (0.9898) rather than accuracy, accepting low FPR (0.31%).',
      },
      {
        risk: 'Analysts over-trusting SHAP explanations as absolute proof',
        mitigation:
          'UI training and visual cues explicitly frame SHAP as "what influenced the algorithm" rather than proof of criminal intent.',
      },
      {
        risk: 'Selection bias in analyst feedback data',
        mitigation:
          'Feedback metrics are kept strictly separate from held-out test splits and never treated as an unbiased general accuracy measurement.',
      },
    ],
    whatStaysHuman: {
      aiAutomates: [
        'High-dimensional feature transformation and scoring',
        'Capacity-calibrated queue prioritization',
        'SHAP feature contribution mathematical calculations',
        'Statistical drift and data quality telemetry tracking',
      ],
      humanRetains: [
        'Deep customer context and qualitative investigation',
        'Final verdict: Confirmed Fraud, Legitimate, or Inconclusive',
        'Adjusting queue priority thresholds when team headcount changes',
        'Deciding when to trigger formal model retraining cycles',
      ],
      governancePrinciple:
        'AI predicts risk and explains its own reasoning. Humans investigate and hold ultimate authority over transaction outcomes.',
    },
    currentState: [
      'Supervised XGBoost fraud risk model trained and validated',
      '0–100 standardized risk score calculation engine',
      'Analyst queue priority band allocation',
      'Local SHAP explainability waterfall component',
      'Human investigation console with 3-tier verdict buttons',
      'Append-only SQLite audit log and telemetry recorder',
      'FastAPI backend with Streamlit/Plotly interface (runs locally on 8GB RAM, no GPU required)',
    ],
    nextBuild: [
      'Enterprise role-based access control (RBAC) and SSO',
      'Production model registry (MLflow / Vertex AI) for automated versioning',
      'Distributed stream ingestion via Kafka / Apache Flink',
      'Graph neural network integration for syndicate/ring detection',
      'Automated SOC2 compliance reporting and encryption key rotation',
    ],
  },
  {
    id: 'agentic-data-pipeline',
    title: 'Agentic AI Data Quality Platform',
    subtitle: 'Autonomous Multi-Agent Cleaning & Quality Reporting Engine',
    category: 'Data Systems',
    role: 'Agentic AI Product Management & Workflow Engineering',
    githubUrl: 'https://github.com/roomslabdesigns-collab/agentic-data-cleaning-pipeline',
    headlineQuote:
      'What if cleaning a dataset wasn’t a collection of preprocessing rules, but a system that could decide what the dataset needed?',
    highlightSummary:
      'A multi-agent data cleaning system that automates the journey from raw structured data to a validated, report-ready dataset. Employs a Planning Agent to decide transformations, a Cleaning Agent to execute, a Validation Agent to audit, and a Report Agent to export.',
    technologies: ['LangGraph', 'Python', 'Pandas', 'Ollama', 'SQLite', 'Multi-Agent Systems', 'Structured JSON'],
    metrics: [
      { label: 'Data Sources Supported', value: 'CSV, Excel, SQLite', detail: 'Unified structured ingestion' },
      { label: 'Architecture Principle', value: 'Separation of Powers', detail: 'Planning decoupled from execution' },
      { label: 'Validation Layer', value: 'Post-Clean Audit', detail: 'Prevents corrupted transformations' },
      { label: 'Quality Reporting', value: 'JSON & CSV', detail: 'Automated reproducible audit reports' },
    ],
    originalWorkflow: {
      overview:
        'Data cleaning in enterprise analytics is typically a brittle sequence of hardcoded pandas scripts. A data scientist loads a CSV, manually looks for nulls, writes custom imputation rules, runs the script, and hopes nothing broke. When the next dataset arrives with slightly different columns or categorical variants ("M", "male", "MALE"), the entire pipeline crashes or corrupts downstream models.',
      flowSteps: [
        'Manual inspection in Jupyter Notebooks',
        'Handcrafting static cleaning rules per dataset',
        'Running preprocessing blindly',
        'Discovering errors only after analytics reports fail',
      ],
      coreProblem:
        'The cleaning logic is usually fixed before the system understands the actual problems in the dataset. This platform separates decision-making (Planning) from execution (Cleaning).',
    },
    frictionPoints: [
      {
        friction: 'Fixed cleaning rules are applied indiscriminately',
        rootCause: 'Cleaning scripts are written before dataset profile is understood',
        impact: 'The same hardcoded strategy is forced even when the data demands different treatment',
      },
      {
        friction: 'Manual data profiling is repetitive and tedious',
        rootCause: 'Data engineers must repeatedly inspect missing values, duplicates, and distributions',
        impact: 'Valuable engineering hours are lost to repetitive exploratory boilerplate',
      },
      {
        friction: 'Cleaning and decision-making are tightly coupled',
        rootCause: 'Single monolith functions decide both what should happen and execute it',
        impact: 'Modifying a cleaning rule requires modifying core execution code',
      },
      {
        friction: 'Different input formats require divergent ingestion',
        rootCause: 'CSV, Excel, and SQLite each demand separate boilerplate loaders',
        impact: 'Engineers spend time wrestling with ingestion before cleaning can start',
      },
      {
        friction: 'Validation only happens as an afterthought',
        rootCause: 'Pipelines assume successful code execution equates to clean data',
        impact: 'Subtle data corruptions and catastrophic outliers slip into production models',
      },
    ],
    prerequisites: [
      'A reliable automated dataset profiler generating statistical metadata prior to planning.',
      'A structured cleaning plan represented in valid schema-constrained JSON.',
      'Dedicated post-cleaning validation agent checking domain invariants.',
      'Format-agnostic ingestion supporting CSV, Excel spreadsheets, and SQL tables.',
      'Reproducible quality scoring exportable in JSON and CSV formats.',
    ],
    workflowSteps: [
      {
        stepNumber: 1,
        title: 'Data Ingestion',
        description: 'Unified loader accepts CSV, Excel, or SQLite database connections',
        details: ['Normalizes encoding and column headers', 'Instantiates shared pipeline state across LangGraph agents'],
      },
      {
        stepNumber: 2,
        title: 'Profiling Agent',
        description: 'Analyzes raw dataset structure and generates quality profile',
        details: [
          'Calculates row/column counts, inferring data types (numeric, datetime, categorical)',
          'Measures missing value ratios, duplicate counts, and statistical anomalies',
          'Packages profile into structured state payload',
        ],
      },
      {
        stepNumber: 3,
        title: 'Planning Agent (LLM)',
        description: 'Evaluates profile and outputs structured transformation plan in strict JSON',
        details: [
          'Decides missing value strategy (e.g. median imputation vs drop)',
          'Determines outlier handling (e.g. remove invalid age values > 120)',
          'Selects categorical standardization (e.g. unifying "M", "male", "MALE")',
        ],
      },
      {
        stepNumber: 4,
        title: 'Cleaning Agent',
        description: 'Executes the plan with zero discretionary deviations',
        details: [
          'Strictly executes operations defined in the Planning Agent JSON',
          'Does not invent new rules independently; maintains architectural boundaries',
        ],
      },
      {
        stepNumber: 5,
        title: 'Validation Agent',
        description: 'Independent auditor checks cleaned dataset for remaining anomalies',
        details: [
          'Verifies schema invariants and checks that no invalid outliers persist',
          'Confirms that transformations did not introduce unexpected nulls or loss of integrity',
        ],
      },
      {
        stepNumber: 6,
        title: 'Report Agent',
        description: 'Synthesizes quality metrics and exports audit artifacts',
        details: [
          'Computes overall dataset quality score',
          'Compiles detailed transformation log with remaining validation notes',
          'Exports audit report to downloadable JSON and CSV artifacts',
        ],
      },
    ],
    humanFallbackTriggers: [
      'High row loss warning: If the planned operations would drop more than 20% of dataset records, the pipeline halts for human sign-off.',
      'Ambiguous column semantics: When column purpose cannot be deduced from header or values, prompt user before dropping.',
      'Critical validation failure: If the Validation Agent flags lingering anomalies after execution, execution terminates with error summary.',
      'Configurable transformation thresholds: High-risk operations (e.g., irreversible deduplication on financial records) require explicit human consent.',
    ],
    samplePrompt: {
      systemPrompt: `Planning Agent System Prompt:
You are a data cleaning expert.
Based on the dataset profile below, return ONLY valid JSON.

Schema:
{
  "remove_duplicates": boolean,
  "missing_strategy": "median" | "mean" | "mode" | "drop" | "none",
  "outlier_strategy": "remove" | "cap" | "none",
  "standardize_categories": boolean
}

Constraint: Do not include conversational markdown, greetings, or explanations outside the JSON object.`,
      sampleInput: `Dataset Profile:
Rows: 6 | Columns: 4 (Name, Age, Gender, Salary)
Duplicates: 1 duplicate row detected (John, 25, M, 50000)
Missing Values: Age (1 missing / Sarah), Salary (1 missing / Alice)
Outliers Detected: Age = 150 (Mike, 150, male, 70000)
Categorical Variants: Gender contains ['M', 'male', 'MALE', 'Female']`,
      sampleOutput: `{
  "remove_duplicates": true,
  "missing_strategy": "median",
  "outlier_strategy": "remove",
  "standardize_categories": true
}`,
    },
    promptTesting: [
      {
        caseName: 'Dirty Demo Dataset',
        input: '6 rows with 1 duplicate, 2 missing values, 1 age outlier (150), mixed gender labels',
        expectedOutput: 'Cleaned 4 pristine rows, outlier removed, gender standardized, quality score computed',
        whatBadResultReveals: 'Agent execution failed to chain operations in correct sequence',
      },
      {
        caseName: 'Already Clean Dataset',
        input: 'Fully populated tabular data with zero duplicates or nulls',
        expectedOutput: 'Planning agent outputs no-op flags; preserves original data intact',
        whatBadResultReveals: 'Model aggressively mutates valid data when no transformation is warranted',
      },
      {
        caseName: 'Skewed Outlier Distribution',
        input: 'Continuous metric with extreme right-skew (e.g. startup valuations)',
        expectedOutput: 'Planning agent recognizes log-normal distribution; avoids false outlier purge',
        whatBadResultReveals: 'Generic z-score threshold erroneously deletes legitimate high-value rows',
      },
      {
        caseName: 'Malformed Input CSV',
        input: 'Inconsistent delimiter (commas mixed with semicolons)',
        expectedOutput: 'Ingestion agent catches parsing error and requests user specification',
        whatBadResultReveals: 'Pipeline crashes with unhandled trace rather than structured recovery',
      },
    ],
    businessImpact: [
      {
        metricOrCapability: 'Dataset inspection',
        before: 'Manual profiling in Jupyter (30-60 min)',
        after: 'Automated Profiling Agent (< 5 sec)',
        reasoning: 'Instantly computes statistics, types, and anomaly flags',
      },
      {
        metricOrCapability: 'Cleaning decisions',
        before: 'Hardcoded ad-hoc python scripts',
        after: 'LLM-generated contextual cleaning plan',
        reasoning: 'Plan adapts to unique dataset anomalies rather than one-size-fits-all',
      },
      {
        metricOrCapability: 'Cleaning execution',
        before: 'Manually defined fragile scripts',
        after: 'Plan-driven deterministic Cleaning Agent',
        reasoning: 'Separates reasoning from execution for testability and stability',
      },
      {
        metricOrCapability: 'Validation',
        before: 'Manual eyeball checks or skipped',
        after: 'Dedicated Validation Agent audit',
        reasoning: 'Guarantees transformations preserved data integrity before export',
      },
      {
        metricOrCapability: 'Reporting',
        before: 'No reproducible audit trail',
        after: 'Automated JSON/CSV quality reports',
        reasoning: 'Provides full provenance for enterprise governance and compliance',
      },
    ],
    productLoop: [
      'Multi-Format Data Ingestion (CSV / Excel / SQLite)',
      'Autonomous Statistical Profiling',
      'LLM Plan Synthesis (Strict JSON Schema)',
      'Plan-Driven Execution by Cleaning Agent',
      'Independent Validation Audit',
      'Quality Score & Report Artifact Generation',
    ],
    risksAndTradeoffs: [
      {
        risk: 'LLM may generate an unsuitable or hallucinated cleaning plan',
        mitigation:
          'Plan output is strictly schema-constrained via JSON mode, and the cleaned data must pass through the independent Validation Agent.',
      },
      {
        risk: 'Aggressive outlier removal causes accidental information loss',
        mitigation:
          'Trade-off: current prototype removes extreme physical impossibilities (e.g. Age = 150). Production version will feature configurable retention guardrails.',
      },
      {
        risk: 'Quality score formula may be oversimplified',
        mitigation:
          'Future iterations will blend multi-dimensional metrics (completeness, validity, uniqueness, consistency) rather than row retention alone.',
      },
    ],
    whatStaysHuman: {
      aiAutomates: [
        'Statistical profiling and type inference',
        'Cleaning strategy proposal generation',
        'Execution of standardized sanitization functions',
        'Automated post-clean validation checks and reporting',
      ],
      humanRetains: [
        'Domain-specific business rule definitions (e.g. allowed salary ranges)',
        'Sign-off on operations that drop rows exceeding threshold',
        'Deciding final downstream analytical or ML consumption',
      ],
      governancePrinciple:
        'The Planning Agent decides what should happen, the Cleaning Agent decides how to execute, and the human signs off on high-impact data mutations.',
    },
    currentState: [
      'CSV, Excel, and SQLite unified ingestion module',
      'Profiling Agent analyzing statistical distributions and anomalies',
      'LLM Planning Agent generating schema-validated JSON plans',
      'Deterministic Cleaning Agent applying planned operations',
      'Validation Agent verifying integrity and schema consistency',
      'Report Agent exporting comprehensive JSON/CSV summaries',
      'LangGraph multi-agent state orchestration',
    ],
    nextBuild: [
      'Interactive Streamlit UI with drag-and-drop file upload',
      'PostgreSQL & Snowflake live warehouse connectors',
      'Human-in-the-loop transformation review wizard',
      'More advanced LLM-based entity resolution for messy categorical strings',
      'Docker containerized microservice with REST API endpoints',
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: 'Delhi Technological University (DTU), Delhi',
    degree: 'M.Tech in Computer Science and Engineering',
    period: '2024 – 2026',
    cgpa: '7.51 CGPA',
    location: 'Delhi, India',
    highlights: [
      'Focused on Agentic AI architectures, Deep Learning, and Advanced Computer Networks',
      'Conducted lab sessions as Teaching Assistant for Object-Oriented Programming and Networking',
      'Built multi-agent LLM systems and RAG pipelines for real-world decision-support workflows',
    ],
  },
  {
    institution: 'S. B. Jain Institute of Technology, Management & Research, Nagpur',
    degree: 'B.E in Computer Science and Engineering',
    period: '2018 – 2021',
    cgpa: '8.81 CGPA',
    location: 'Nagpur, Maharashtra, India',
    highlights: [
      'Graduated with First Class with Distinction (8.81 CGPA)',
      'Strong core foundations in Data Structures, Algorithms, Operating Systems, Database Management Systems, and Machine Learning',
      'Led technical student seminars and programming problem-solving workshops',
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: 'Teaching Assistant',
    organization: 'Delhi Technological University (DTU)',
    period: 'Aug 2024 – Jun 2026',
    location: 'Delhi, India',
    type: 'academic',
    bullets: [
      'Conducted practical laboratory sessions for Object-Oriented Programming (OOP) and Computer Networks for M.Tech and B.Tech cohorts.',
      'Guided students through programming exercises, networking implementations, debugging, and technical problem-solving.',
      'Mentored students during hands-on project work, strengthening technical communication, leadership, and structured problem breakdown.',
    ],
  },
  {
    role: 'Digital Marketing & Strategy (Freelance)',
    organization: 'Self-Employed',
    period: 'Aug 2021 – Sept 2023',
    location: 'Remote',
    type: 'freelance',
    bullets: [
      'Partnered with 3 small e-commerce brands to build and strengthen their digital presence across social and customer marketing channels.',
      'Created 100+ social creatives and marketing assets; managed end-to-end execution across creative design, copywriting, content planning, and email campaigns.',
      'Planned and executed 20+ promotional campaigns, including customer follow-ups, email outreach, and social content to support brand engagement and sales.',
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: 'IBM AI Product Manager',
    issuer: 'IBM',
    linkText: 'Verify Credential',
    status: 'Verified',
  },
  {
    title: 'IBM Product Manager',
    issuer: 'IBM',
    linkText: 'Verify Credential',
    status: 'Verified',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    linkText: 'Verify Credential',
    status: 'Verified',
  },
  {
    title: 'AWS Fundamental Specialization',
    issuer: 'Amazon Web Services',
    linkText: 'Verify Credential',
    status: 'Verified',
  },
  {
    title: 'IBM Machine Learning Certificate',
    issuer: 'IBM',
    linkText: 'Verify Credential',
    status: 'Verified',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Product Management',
    skills: [
      'Product Discovery',
      'Product Strategy',
      'User Research',
      'PRDs & Specs',
      'User Stories',
      'Roadmapping',
      'Prioritization Frameworks',
      'MVP Development',
      'Experimentation & A/B Testing',
      'Competitive Intelligence',
      'UX Thinking',
      'Agile/Scrum',
      'Cross-functional Collaboration',
    ],
  },
  {
    category: 'AI Concepts',
    skills: [
      'Large Language Models (LLMs)',
      'Generative AI',
      'RAG (Retrieval-Augmented Generation)',
      'Agentic AI',
      'Multi-Agent Systems',
      'Prompt Engineering',
      'Context Engineering',
      'Explainable AI (SHAP)',
      'AI Workflows & Guardrails',
      'Data Pipelines',
    ],
  },
  {
    category: 'AI Frameworks & Tools',
    skills: [
      'LangGraph',
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'XGBoost',
      'Ollama',
      'Gemini API',
      'Claude Code',
      'Cursor',
      'Replit',
      'Jira',
      'Figma',
      'Google Analytics',
    ],
  },
  {
    category: 'AI Product Development',
    skills: [
      'Rapid Prototyping',
      'Vibe Coding',
      'Human-in-the-Loop Design',
      'AI Workflow Architecture',
      'End-to-End AI Product Delivery',
      'Decision Support Systems',
    ],
  },
  {
    category: 'Technical & Infrastructure',
    skills: [
      'Python',
      'TypeScript / JavaScript',
      'React',
      'Node.js & Express',
      'FastAPI',
      'C++ & C',
      'SQL & SQLite',
      'Vector Databases',
      'REST APIs',
      'Git & GitHub',
      'Feature Engineering',
      'Deep Learning',
    ],
  },
  {
    category: 'Cloud & Data',
    skills: [
      'Amazon Web Services (AWS)',
      'Firebase Firestore',
      'Data Analysis (Pandas, NumPy)',
      'Product Analytics',
      'ML Workflows & Drift Monitoring',
    ],
  },
];

export const productPhilosophyPillars = [
  {
    number: '01',
    title: 'Start With the Problem, Not the Model',
    description:
      'Not every problem needs AI. I first understand the user, the decision they are trying to make, and where the existing workflow breaks. Then I decide whether the right solution is deterministic logic, ML, RAG, or an agentic workflow.',
  },
  {
    number: '02',
    title: 'AI Should Assist, Not Hide the Decision',
    description:
      'I design AI products so users can understand what the system found, why it reached a conclusion, and when they need to step in. For high-impact decisions, the AI supports the workflow while the human remains accountable for the final call.',
  },
  {
    number: '03',
    title: 'Evidence Before Confidence',
    description:
      'An AI-generated answer is only useful when the user can understand where it came from. I prefer systems that connect insights to evidence — customer feedback, search results, citations, model factors, or other underlying data.',
  },
  {
    number: '04',
    title: 'Separate Thinking From Doing',
    description:
      'When building agentic systems, I like separating the decision layer from the execution layer. The AI can determine what should happen, while a controlled system determines how it happens.',
  },
];
