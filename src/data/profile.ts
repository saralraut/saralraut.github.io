import type { Profile } from '../types/portfolio'

// Text below is taken from your project brief. Links are intentionally empty
// until you provide them. The UI hides any link that is not set.
export const profile: Profile = {
  name: 'Saral Raut',
  headline: 'I build, explore and understand technology.',
  intro:
    'I am a technology-oriented professional with a background in software development and postgraduate education in Artificial Intelligence and Machine Learning. I enjoy solving practical problems, exploring data, and understanding how technology can improve the way businesses operate.',
  // Built only from facts in your messages and resumes. Edit freely: this is
  // your voice, and nothing here is rendered anywhere else.
  about: [
    'I came to Canada looking for a new perspective, on work and on life: to grow beyond the classroom and learn from how people here build their lives.',
    'My interest in AI and machine learning starts with data, the foundation these fields stand on. That curiosity runs through my background in data validation, full-stack development, and a Graduate Certificate in AI & Machine Learning from Fanshawe College.',
    'Today I work in customer service and operations in Calgary, and I am looking to bring a mix of technical and people skills to a role in technical support, IT support, data analytics, or software. Outside work I love music, exercise, meditation, and philosophy, and I share some of that through videos.',
  ],
  openTo: ['Technical Support', 'IT Support', 'Data Analytics', 'Software & AI/ML'],
  location: 'Calgary, Alberta, Canada',
  resumePath: 'resume.pdf',
  resumeDownloadName: 'Saral_Raut_Resume.pdf',
  links: {
    github: 'https://github.com/saralraut',
    linkedin: 'https://www.linkedin.com/in/saralraut/',
    email: 'saral.raut17@gmail.com',
  },
}
