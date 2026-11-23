import type { SkillGroup } from '../types/portfolio'

// Every item below is something you confirmed or listed on a resume.
// Cloud is worded as "concepts" on purpose: you told me you know Google Cloud
// concepts and have limited hands-on AWS, so the site does not claim more.
// Not included (not confirmed): FastAPI, SageMaker, Streamlit.
export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'C#', 'Java', 'C', 'C++', 'PHP', 'PowerShell'],
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'REST APIs', 'Laravel'],
  },
  {
    title: 'Data & Databases',
    skills: [
      'SQL',
      'PostgreSQL',
      'Microsoft SQL Server',
      'SQLite',
      'Power BI',
      'Data validation',
      'Query optimization',
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'LLMs',
      'Machine learning',
      'Deep learning',
      'NLP & sentiment analysis',
      'Anomaly detection',
      'Classification',
    ],
  },
  {
    title: 'Support & Operations',
    skills: [
      'Troubleshooting & debugging',
      'Root-cause analysis',
      'Issue reporting & escalation',
      'Technical documentation',
      'Customer service',
    ],
  },
  {
    title: 'Systems & Tools',
    skills: [
      'Windows',
      'Linux',
      'Microsoft 365',
      'Git',
      'GitHub',
      'Docker',
      'Postman',
      'Cloud concepts (Google Cloud, AWS)',
      'Printer & computer setup',
      'Network & router setup',
    ],
  },
]

// Shown separately so newly learned technologies are never presented as
// established expertise.
export const currentlyLearning: string[] = ['TypeScript', 'React']
