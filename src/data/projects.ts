import heatmap from '../assets/images/animal-species-heatmap.jpg'
import type { Project } from '../types/portfolio'

// Everything here comes from your resumes and your messages. No results,
// metrics, screenshots or repo links are invented. To grow a project:
//   - add repoUrl / demoUrl when you have them
//   - add `highlights` (verified bullets) and/or `details` (problem, approach,
//     implementation, results, lessons) to give it a "View Details" page
//   - add `image: { src, alt }` once you have a real screenshot
export const projects: Project[] = [
  {
    slug: 'energy-market-time-series-analytics',
    title: 'Energy Market Time-Series Analytics',
    category: 'Data Analytics',
    year: '2026',
    summary:
      'An end-to-end analysis of Alberta electricity market behavior: pricing dynamics, anomalies, and volatility.',
    tags: ['SQL', 'SQLite', 'Power BI'],
    highlights: [
      'Built an end-to-end analytics project using SQL and Power BI to analyze Alberta electricity market behavior across 48K+ hourly records, focusing on pricing dynamics, anomalies, and volatility.',
      'Designed KPI-driven dashboards and produced concise, presentation-ready summaries to communicate technical findings to non-technical stakeholders.',
    ],
  },
  {
    slug: 'animal-species-classification',
    title: 'Animal Species Classification',
    category: 'AI / ML',
    summary:
      'My first deep dive into deep learning with PyTorch: classifying animal species from a small subset of the iNaturalist 2021 mini dataset.',
    tags: ['Python', 'PyTorch', 'ResNet-18', 'SmoothGradCAM++'],
    repoUrl: 'https://github.com/saralraut/Pytorch_Deep_Learning',
    postUrl:
      'https://www.linkedin.com/posts/saralraut_deeplearning-pytorch-ai-activity-7248149625189138433-46C1',
    // A real output from the project (the SmoothGradCAM++ heatmap from your post).
    image: {
      src: heatmap,
      alt: 'SmoothGradCAM++ heatmap over a photo of a pale, elongated animal on a rocky surface. Warm red and yellow areas mark where the model focused, mostly to the right of the animal and along the bottom edge.',
      caption:
        'SmoothGradCAM++ heatmap: the colored overlay shows which parts of the image the model considered important for its prediction.',
      width: 624,
      height: 418,
    },
    // Written from your LinkedIn post. The post gives no accuracy figures, so
    // none are shown. Add them to `results` if you have them.
    details: {
      problem:
        'Classify animal species from images, using a subset of the iNaturalist 2021 mini dataset: just 550 images across 11 classes. It was my first deep dive into deep learning with PyTorch.',
      approach:
        'I started with ResNet-18 and compared it against ResNet-50 and ResNet-101. ResNet-18 gave the best balance between performance and overfitting on such a small dataset, while the deeper models overfit.',
      implementation:
        'Built in PyTorch and trained on Google Colab, whose resource limits meant optimizing both training time and model efficiency. Data augmentation (flips, rotations, and color adjustments) helped stretch the small dataset, and SmoothGradCAM++ heatmaps showed which parts of each image the model relied on for its prediction.',
      results:
        'ResNet-18 generalized better than ResNet-50 and ResNet-101 on this limited data. With only 550 images across 11 classes, the dataset itself limited how well any of the models could generalize.',
      lessons:
        'The quality and quantity of the dataset are critical. However good the model is, if the dataset is not diverse or large enough it will struggle to generalize. A good dataset is the foundation of a good model.',
    },
  },
  {
    slug: 'reddit-sentiment-trends-analysis',
    title: 'Reddit Sentiment & Trends Analysis',
    category: 'Data Analytics',
    year: '2024–2025',
    summary:
      'Automated data pipelines and reporting for NLP-driven sentiment and trend analysis of Reddit data.',
    tags: ['Python', 'Reddit API', 'NLP', 'Power BI'],
    highlights: [
      'Built automated data extraction pipelines using Python and Reddit APIs, cleaning and transforming large datasets for NLP-driven sentiment analysis.',
      'Automated reporting workflows to reduce manual analysis time and improve timeliness and accuracy of insights.',
    ],
  },
  {
    slug: 'full-stack-e-commerce-platform',
    title: 'Full Stack E-Commerce Platform',
    category: 'Full Stack',
    year: '2021',
    summary: 'A full-stack e-commerce web application, built as my capstone project.',
    tags: ['PHP', 'Laravel', 'SQL', 'JavaScript'],
    highlights: [
      'Built a full-stack e-commerce web application, implementing automated data validation and reporting features to reduce manual errors in order processing.',
      'Performed full-cycle testing and debugging and created documentation to support maintenance and onboarding.',
    ],
  },
]
