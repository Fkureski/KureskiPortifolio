import CoinMachine from '../assets/CoinMachine.png';
import DataAnalytics from '../assets/DataAnalytics.png';
import DataEngineeringStudies from '../assets/DataEngineeringStudies.png';
import StreamingPipeline from '../assets/streaming_pipeline.png';

export const projectsData = [
  {
    id: 4,
    title: 'News Data Hub with AI',
    description: 'A real-time data monitoring pipeline using Clean Architecture. It integrates Apache Kafka for decoupled messaging, Pandas/Pydantic for ETL, local Llama 3 (via Ollama) for Generative AI, and PostgreSQL. Deployed via Docker with CI/CD pipelines on Azure.',
    techStack: ['Python', 'Kafka', 'Llama 3', 'PostgreSQL', 'Docker', 'Azure'],
    image: StreamingPipeline,
    link: 'https://github.com/Fkureski/News-Intelligence-Hub'
  },
  {
    id: 1,
    title: 'First Project Soda Machine | College Project',
    description: 'My first Python project is a vending machine simulator that lets users buy drinks with cash or Pix, while managing stock, payments, and change, with an admin mode for control and monitoring.',
    techStack: ['Python'],
    image: CoinMachine,
    link: 'https://github.com/Fkureski/MaquinaMoedeira'
  },
  {
    id: 2,
    title: 'Data Analytics | College Project',
    description: 'This project analyzes ENEM 2016 data using Python, exploring patterns and insights through data analysis techniques such as data cleaning, visualization, and interpretation.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook'],
    image: DataAnalytics,
    link: 'https://github.com/Fkureski/DataAnalyticsENEM2016'
  },
  {
    id: 3,
    title: 'Data Engineering | LinkedIn Learning Course',
    description: 'This project is a collection of studies and practical exercises focused on data engineering concepts, including data pipelines, ETL processes, data modeling, and tools used for handling and transforming data.',
    techStack: ['Python', 'SQL', 'Apache Airflow', 'Docker'],
    image: DataEngineeringStudies,
    link: 'https://github.com/Fkureski/DataEngineerStudies'
  }
];
