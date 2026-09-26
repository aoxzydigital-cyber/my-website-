export interface CaseStudyStep {
  stepNumber: number;
  title: string;
  description: string;
  details: string[];
  sampleData?: string;
}

export interface FrictionPoint {
  friction: string;
  rootCause: string;
  impact: string;
}

export interface BusinessImpactRow {
  metricOrCapability: string;
  before: string;
  after: string;
  reasoning: string;
}

export interface PromptTestCase {
  caseName: string;
  input: string;
  expectedOutput: string;
  whatBadResultReveals: string;
}

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  category: 'Agentic AI' | 'RAG & Search' | 'Machine Learning' | 'Data Systems';
  role: string;
  githubUrl: string;
  highlightSummary: string;
  headlineQuote: string;
  technologies: string[];
  metrics: { label: string; value: string; detail?: string }[];
  originalWorkflow: {
    overview: string;
    flowSteps: string[];
    coreProblem: string;
  };
  frictionPoints: FrictionPoint[];
  prerequisites: string[];
  workflowSteps: CaseStudyStep[];
  humanFallbackTriggers: string[];
  samplePrompt: {
    systemPrompt: string;
    sampleInput: string;
    sampleOutput: string;
  };
  promptTesting: PromptTestCase[];
  businessImpact: BusinessImpactRow[];
  productLoop: string[];
  risksAndTradeoffs: {
    risk: string;
    mitigation: string;
  }[];
  whatStaysHuman: {
    aiAutomates: string[];
    humanRetains: string[];
    governancePrinciple: string;
  };
  currentState: string[];
  nextBuild: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  location: string;
  highlights?: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  bullets: string[];
  type: 'academic' | 'freelance';
}

export interface CertificationItem {
  title: string;
  issuer: string;
  linkText: string;
  status: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
