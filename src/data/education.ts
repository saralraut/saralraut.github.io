import type { Education } from '../types/portfolio'

// From your resume (newest first). Delete a `gpa` line to hide that GPA.
export const education: Education[] = [
  {
    id: 'fanshawe',
    institution: 'Fanshawe College',
    program: 'Graduate Certificate, Artificial Intelligence & Machine Learning',
    period: 'Jan 2024 – Apr 2025',
    gpa: '4.10',
    highlights: [
      'Coursework: Machine Learning & Deep Learning, Data Mining & Visualization, and Machine Learning Security, including feature evaluation, anomaly detection, and classification techniques.',
    ],
  },
  {
    id: 'northampton',
    institution: 'Nami College, University of Northampton',
    program: 'Bachelor of Computer Science, Software Engineering',
    period: 'Jan 2018 – Nov 2021',
    gpa: '4.0',
  },
]
