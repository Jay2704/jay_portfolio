import umbcLogo from '../assets/UMBC.png'
import hpeLogo from '../assets/hpe.avif'
import ibmLogo from '../assets/IBM.svg'

export const experiences = [
  {
    id: '1',
    role: 'A.I. Researcher',
    company: 'University of Maryland, Baltimore County (UMBC)',
    location: 'Baltimore, MD',
    duration: 'May 2024 – Present',
    logo: umbcLogo,
    achievements: [
      'Worked in the Human Robot Interaction and Computer Vision lab with Dr. Ramana Vinjamuri on a Lie Detection research project.',
      'Collected EEG brain signal data from 25 subjects to analyze reactions when shown familiar vs unfamiliar stimuli.',
      'Trained a Deep Learning transformer model to detect the P300 brain signal for deception detection applications.',
      'Built a multimodal system combining EEG signals with facial expression video analysis, achieving 89% classification accuracy.',
      'Research paper based on this work is currently under peer review.',
    ],
  },
  {
    id: '2',
    role: 'Software Engineer',
    company: 'Hewlett Packard Enterprise',
    location: 'Bangalore, India',
    duration: 'Feb 2023 – Jul 2023',
    logo: hpeLogo,
    achievements: [
      'Contributed to cloud infrastructure automation by building scalable DevOps pipelines using Ansible and Jenkins.',
      'Reduced manual deployment effort by 40% and boosted delivery speed by 25%.',
      'Optimized application performance on AWS by configuring EC2, S3, and DynamoDB, resulting in 30% lower latency under peak load.',
      'Implemented infrastructure-as-code practices to ensure consistent, repeatable environments across teams.',
      'Gained hands-on experience in cloud-native development and CI/CD for delivering efficient, resilient systems.',
    ],
  },
  {
    id: '3',
    role: 'Software Engineer',
    company: 'IBM India',
    location: 'Bangalore, India',
    duration: 'Mar 2022 – Sep 2022',
    logo: ibmLogo,
    achievements: [
      'Developed a robust log assessment utility to streamline debugging in large-scale enterprise applications.',
      'Built support for over 1,000 log files with automated error sequence detection, keyword-based filtering, and stack trace isolation.',
      'Improved root cause analysis speed by 20%, enabling faster resolution of production issues.',
      'Enhanced observability by categorizing logs based on patterns and timestamps to identify recurring failures.',
      'Reduced manual analysis and supported smoother CI/CD workflows, improving developer productivity and system reliability.',
    ],
  },
]
