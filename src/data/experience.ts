import type { Experience } from '../types/portfolio'

// Newest first. Wording is based on the bullets that appear in BOTH of your
// resumes, plus the IT-reporting point from your message. Two bullets that
// only appear in the IT-tailored resume are left out until you confirm them
// (see the notes in the Phase 5 summary).
export const experience: Experience[] = [
  {
    id: 'amj-campbell',
    title: 'Customer Service & Operations Coordinator',
    organization: 'AMJ Campbell',
    location: 'Calgary, AB',
    period: 'Jan 2026 – Present',
    responsibilities: [
      'Resolve delivery inquiries and service issues for retail partners including Williams Sonoma, Pottery Barn, West Elm, and Article, handling high daily volumes of phone and email requests from customers, warehouse staff, and drivers.',
      'Track issues from first report to resolution, keep accurate records, and follow up with stakeholders in a detail-heavy, deadline-driven environment.',
      'Report recurring problems with the CMS and other work software to the IT manager and IT support team.',
      'Use Microsoft 365 (Outlook, Excel) daily to process orders, update shipping quotes, prepare delivery manifests, and track operations.',
      'Train new employees on tools, processes, and daily workflows.',
    ],
    technologies: ['Microsoft 365', 'Outlook', 'Excel'],
  },
  {
    id: 'awiskaar',
    title: 'Full Stack Developer',
    organization: 'Awiskaar Solutions Pvt. Ltd.',
    location: 'Nepal',
    period: 'Dec 2021 – Jan 2023',
    responsibilities: [
      'Designed and built full-stack features and REST APIs using JavaScript and SQL, working closely with product and QA teams to meet release goals and reduce rework.',
      'Wrote technical documentation to support handoffs, deployments, and troubleshooting across teams.',
    ],
    accomplishments: [
      'Optimized backend logic and SQL queries, reducing page load times by about 30–40% and improving application stability.',
    ],
    technologies: ['JavaScript', 'SQL', 'REST APIs'],
  },
  {
    id: 'cloud-factory',
    title: 'Data Mapper',
    organization: 'Cloud Factory',
    location: 'Nepal',
    period: 'Aug 2020 – Nov 2021',
    responsibilities: [
      'Investigated data inconsistencies and ran validation and quality checks on large datasets to keep downstream processes accurate.',
      'Performed root-cause analysis on recurring data errors and applied corrective actions to prevent them from returning.',
      'Documented findings and resolutions, collaborating with QA and project teams to improve dataset quality and consistency.',
      'Prepared clear, detailed issue reports for technical and non-technical stakeholders to support timely decisions.',
    ],
  },
]
