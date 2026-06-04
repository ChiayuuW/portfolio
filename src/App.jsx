import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPython,
  FaDatabase,
  FaChartLine,
  FaRobot,
  FaBrain,
  FaIndustry,
  FaCalculator,
} from "react-icons/fa";
import "./App.css";

const projects = [
  {
    title: "Intelligent Dock Scheduling System",
    subtitle: "Dynamic dock assignment simulation for manufacturing logistics.",
    description:
      "A scheduling simulation that analyzes truck flow, dock utilization, and waiting time in inbound logistics.",
    tech: ["Python", "Simulation", "Optimization", "Supply Chain"],
    github: "https://github.com/ChiayuuW",
    overview:
      "This project models inbound truck scheduling and dock assignment decisions in a manufacturing environment. It focuses on reducing waiting time, improving dock utilization, and supporting better operational visibility.",
    problem:
      "Inbound trucks often experience long waiting times because dock assignment depends on manual coordination, uncertain arrival times, dock availability, and material priority.",
    approach:
      "The simulation compares scheduling logic such as FCFS and dynamic priority assignment using truck ETA, dock availability, unloading time, and operational constraints.",
    results: [
      "Compared different dock scheduling strategies.",
      "Modeled truck waiting time and dock utilization.",
      "Designed a foundation for future RFID and warehouse system integration.",
    ],
  },
  {
    title: "Actuarial Reserve Analytics Platform",
    subtitle:
      "Interactive actuarial valuation and reinsurance analytics platform built with Python and Streamlit.",
    description:
      "A full-stack actuarial analytics platform for reserve valuation, mortality analysis, reinsurance modeling, and scenario testing.",
    tech: [
      "Python",
      "Streamlit",
      "Pandas",
      "Plotly",
      "Actuarial Modeling",
      "Analytics",
    ],
    github: "https://github.com/ChiayuuW/life-insurance-reserve-engine",
    liveDemo:
      "https://life-insurance-reserve-engine-buyc84aafnkwtvnvgco5fe.streamlit.app/",
    image: "/reserve-engine-demo.png",
    architectureImage: "/actuarial-platform-architecture.png",
    overview:
      "This project is an end-to-end actuarial analytics platform designed to support life insurance reserve valuation, mortality analysis, and reinsurance evaluation. The system combines actuarial calculation engines with interactive dashboards to help users analyze portfolio risk, policy-level valuation results, and assumption sensitivity in a more transparent and operationally efficient workflow.",
    problem:
      "Traditional actuarial valuation workflows are often fragmented across spreadsheets, legacy systems, and static reports, making reserve validation, scenario testing, and portfolio analysis difficult to scale and interpret. Business users and analysts may also struggle to visualize reserve movement, mortality trends, and reinsurance exposure in real time.",
    approach:
      "The platform was developed using Python, Pandas, and Streamlit to create a modular actuarial valuation pipeline integrated with interactive analytics dashboards. The system loads policy data, applies mortality assumptions, calculates reserves and expected claims, evaluates reinsurance exposure, and visualizes portfolio metrics through dynamic filtering and scenario analysis tools.",
    results: [
      "Built a reusable actuarial reserve valuation engine for life insurance products.",
      "Enabled interactive reserve, mortality, and reinsurance analytics through dashboard visualizations.",
      "Created policy-level drilldown functionality for detailed valuation review and validation.",
      "Implemented scenario testing for mortality shock, discount rate, and retention limit sensitivity analysis.",
      "Improved transparency and interpretability of actuarial calculations compared to spreadsheet-based workflows.",
      "Designed a scalable framework that can be extended for future actuarial pricing and valuation applications.",
    ],
  },
  {
    title: "Financial Time Series Forecasting",
    subtitle: "Exchange rate forecasting using statistical and machine learning methods.",
    description:
      "A forecasting pipeline for analyzing exchange rate trends and macroeconomic signals.",
    tech: ["Python", "SARIMA", "Forecasting", "Time Series"],
    github: "https://github.com/ChiayuuW/Exchange-Rate-Prediction",
    overview:
      "This project applies time series forecasting methods to exchange rate data, combining statistical modeling and predictive analytics.",
    problem:
      "Exchange rates are volatile and influenced by macroeconomic patterns, making it important to evaluate trend, seasonality, and forecast accuracy.",
    approach:
      "The project uses exploratory analysis, time series decomposition, SARIMA-style modeling, and forecast evaluation to estimate future movements.",
    results: [
      "Built a forecasting workflow for financial data.",
      "Analyzed historical movement and trend patterns.",
      "Compared model outputs for predictive performance.",
    ],
  },
  {
    title: "Power BI Dashboard Profolio",
    subtitle: "Power BI dashboards for data modeling, visualization, and storytelling.",
    description:
      "A collection of BI dashboards focused on turning raw data into clear business insights.",
    tech: ["Power BI", "Dashboard", "Data Modeling", "Analytics"],
    github: "https://github.com/ChiayuuW/Power-BI-Profolio",
    overview:
      "This project showcases interactive dashboards designed to communicate business performance, patterns, and key metrics.",
    problem:
      "Business users need clear and actionable dashboards instead of raw tables or disconnected reports.",
    approach:
      "The dashboards use data modeling, KPI design, visual storytelling, and interactive filtering to help users explore business questions.",
    results: [
      "Built interactive dashboards for business analysis.",
      "Practiced KPI design and visual storytelling.",
      "Improved communication of data-driven insights.",
    ],
  },
  {
    title: "Insurance Cross-Sell Prediction System",
    subtitle: "Machine learning project for insurance customer cross-sell prediction.",
    description:
      "An end-to-end ML project predicting whether health insurance customers may buy vehicle insurance.",
    tech: ["Python", "Machine Learning", "EDA", "Classification"],
    github: "https://github.com/ChiayuuW/Health-to-Vehicle-Insurance-Cross-Sell",
    overview:
      "This project analyzes customer data and builds classification models to predict cross-sell opportunities in insurance.",
    problem:
      "Insurance companies need to identify which customers are more likely to respond to cross-sell offers so marketing resources can be used more effectively.",
    approach:
      "The project includes EDA, feature analysis, model training, model comparison, and evaluation using classification metrics.",
    results: [
      "Built an end-to-end classification workflow.",
      "Compared multiple machine learning models.",
      "Identified important features related to customer response.",
    ],
  },
  {
    title: "AI-Powered Adaptive Learning Platform",
    subtitle: "Adaptive testing and LLM-based education support system.",
    description:
      "An education analytics system with adaptive testing, difficulty review, and automated remediation content.",
    tech: ["Python", "LLM", "Education", "Automation"],
    github: "https://github.com/ChiayuuW/Adaptive-Learning-Platform",
    overview:
      "This project supports personalized learning by adjusting question difficulty, reviewing student mastery, and generating remedial learning content.",
    problem:
      "Teachers need better tools to identify knowledge gaps and provide personalized learning materials efficiently.",
    approach:
      "The platform uses adaptive testing logic, teacher review workflows, and LLM-generated remediation content to support learning decisions.",
    results: [
      "Built adaptive testing and review workflows.",
      "Integrated LLM-generated remediation content.",
      "Supported personalized learning based on student performance.",
    ],
  },
  {
    title: "Medical Insights Dashboard",
    subtitle: "Healthcare analytics dashboard for medical data insights.",
    description:
      "A healthcare analytics dashboard designed to visualize medical trends, patient-level patterns, and operational insights.",
    tech: ["Python", "Streamlit", "Healthcare Analytics", "Dashboard"],
    github: "https://github.com/ChiayuuW/med-insights-dashboard",
    overview:
      "This project presents healthcare data through an interactive dashboard to support clearer medical data exploration and insight generation.",
    problem:
      "Healthcare data can be difficult to interpret when stored in static tables or disconnected reports.",
    approach:
      "The dashboard uses data cleaning, visualization, filtering, and analytical summaries to make healthcare patterns easier to understand.",
    results: [
      "Built an interactive healthcare analytics dashboard.",
      "Visualized medical trends and patient-level insights.",
      "Improved data interpretation through dashboard storytelling.",
    ],
  },
  {
    title: "A/B Testing Fast Food Marketing Campaign",
    subtitle: "Marketing experiment analysis using A/B testing.",
    description:
      "An A/B testing project analyzing fast food marketing campaign performance and promotion effectiveness.",
    tech: ["Python", "A/B Testing", "Statistics", "Marketing Analytics"],
    github: "https://github.com/ChiayuuW/A-B-Testing-Fast-Food-Marketing-Campaign",
    overview:
      "This project evaluates marketing campaign performance using statistical testing and data analysis.",
    problem:
      "Marketing teams need to know which campaign strategy performs better before scaling promotions.",
    approach:
      "The project compares campaign groups, analyzes performance metrics, and applies statistical testing to support data-driven marketing decisions.",
    results: [
      "Compared multiple campaign strategies.",
      "Applied A/B testing methodology.",
      "Generated insights for promotion effectiveness.",
    ],
  },
  {
    title: "Heart Disease Prediction",
    subtitle: "Machine learning classification project for heart disease risk.",
    description:
      "A machine learning project predicting heart disease risk using clinical and health-related features.",
    tech: ["Python", "Machine Learning", "Classification", "Healthcare"],
    github: "https://github.com/ChiayuuW/Heart-Disease-Prediction",
    overview:
      "This project uses machine learning classification models to predict potential heart disease risk from health-related variables.",
    problem:
      "Early identification of heart disease risk can help support preventive healthcare decisions.",
    approach:
      "The project includes EDA, feature preprocessing, classification modeling, and model evaluation.",
    results: [
      "Built a heart disease prediction workflow.",
      "Compared classification model performance.",
      "Identified important health-related risk features.",
    ],
  },
];

const experiences = [
  {
    date: "Feb 2026 - Present",
    type: "Full-Time",
    title: "Data Analyst",
    company: "Foxconn Industrial Internet",
    location: "Wisconsin, USA",
    summary: "Focused on manufacturing analytics and automation projects.",
    overview:
      "Worked on supply chain analytics, JIS logistics systems, RFID tracking, and warehouse automation concepts.",
    responsibilities: [
      "Designed JIS scheduling concepts.",
      "Mapped RFID material tracking workflows.",
      "Supported ASRS operational planning.",
      "Connected operational and IT system requirements.",
    ],
    tags: ["Supply Chain", "Automation", "RFID", "Analytics"],
  },
  {
    date: "Nov 2025 - Feb 2026",
    type: "Full-Time",
    title: "Data Analyst",
    company: "Aplus Consultant",
    location: "Taiwan",
    summary: "Worked on analytics and operational reporting projects.",
    overview: "Supported business analytics, reporting, and operational data workflows.",
    responsibilities: [
      "Built reporting dashboards.",
      "Performed operational data analysis.",
      "Supported consulting analytics projects.",
    ],
    tags: ["Analytics", "Dashboard", "SQL"],
  },
  {
    date: "Oct 2024 - Nov 2025",
    type: "Internship",
    title: "Data Science Intern",
    company: "MyEdMaster",
    location: "Remote",
    summary: "Built adaptive testing and LLM-powered learning workflows.",
    overview:
      "Designed adaptive testing algorithms and ML pipelines for personalized learning systems.",
    responsibilities: [
      "Processed 500+ test scenarios.",
      "Built LLM remediation generation system.",
      "Maintained ML tagging pipelines.",
      "Reduced learning time by 35%.",
    ],
    tags: ["Python", "LLM", "ML Pipeline"],
  },
  {
    date: "Jun 2024 - Aug 2024",
    type: "Internship",
    title: "Actuarial Intern",
    company: "BNP Paribas Cardif",
    location: "Taipei, Taiwan",
    summary: "Automated reinsurance premium modeling and actuarial workflows.",
    overview: "Built and optimized reinsurance premium models using Python and SQLite.",
    responsibilities: [
      "Processed 50,000+ policy records.",
      "Improved computational efficiency by 33%.",
      "Migrated FoxPro code to Python.",
      "Documented actuarial calculation logic.",
    ],
    tags: ["Python", "SQLite", "Actuarial Modeling"],
  },
];

function Navbar({ currentPage, setCurrentPage, setSelectedProject }) {
  const goToPage = (page, sectionId) => {
    setSelectedProject(null);
    setCurrentPage(page);

    if (sectionId) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToContact = () => {
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => goToPage("home", "about")}>
        Chia-Yu Wei
      </div>

      <div className="nav-links">
        <button
          className={currentPage === "home" ? "active" : ""}
          onClick={() => goToPage("home", "about")}
        >
          About
        </button>
        <button
          className={currentPage === "experience" ? "active" : ""}
          onClick={() => goToPage("experience")}
        >
          Experience
        </button>
        <button
          className={currentPage === "projects" ? "active" : ""}
          onClick={() => goToPage("projects")}
        >
          Projects
        </button>
        <button onClick={() => goToPage("home", "skills")}>Skills</button>
        <button onClick={goToContact}>Contact</button>
      </div>
    </nav>
  );
}

function ProjectDetail({ project, onBack }) {
  return (
    <div className="project-detail-page">
      <button className="back-button" onClick={onBack}>
        ← Back to Projects
      </button>

      <section className="project-hero">
        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>

        <div className="project-detail-tags">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="project-detail-section">
        <h2>Project Overview</h2>
        <p>{project.overview}</p>

        {project.architectureImage && (
          <div className="overview-architecture-wrapper">
            <img
              src={project.architectureImage}
              alt={`${project.title} architecture`}
              className="overview-architecture-image"
            />
          </div>
        )}
      </section>

      <section className="project-detail-grid">
        <div>
          <h2>Problem</h2>
          <p>{project.problem}</p>
        </div>

        <div>
          <h2>Approach</h2>
          <p>{project.approach}</p>
        </div>
      </section>

      {project.image && (
        <section className="project-screenshot-section">
          <h2>Project Preview</h2>

          <a
            href={project.liveDemo || project.github}
            target="_blank"
            rel="noreferrer"
            className="project-preview-link"
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="project-screenshot"
            />
          </a>
        </section>
      )}

      <section className="project-impact-list-section">
        <h2>Platform Capabilities & Business Impact</h2>

        <div className="impact-list">
          <div className="impact-list-item">
            <h3>Interactive Reserve Analytics</h3>
            <p>
              Provides dynamic reserve analysis through interactive dashboards,
              supporting clearer portfolio monitoring and policy-level valuation review.
            </p>
          </div>

          <div className="impact-list-item">
            <h3>Scenario & Sensitivity Testing</h3>
            <p>
              Supports mortality shock, discount rate, and retention limit sensitivity
              analysis to evaluate reserve movement under different actuarial assumptions.
            </p>
          </div>

          <div className="impact-list-item">
            <h3>Reinsurance Exposure Review</h3>
            <p>
              Visualizes reinsurance impact and exposure patterns, helping users assess
              retained risk, ceded amounts, and portfolio-level protection structure.
            </p>
          </div>

          <div className="impact-list-item">
            <h3>Operational Efficiency</h3>
            <p>
              Consolidates calculation logic, analytics, and visualization into one
              platform, reducing reliance on fragmented spreadsheet-based workflows.
            </p>
          </div>

          <div className="impact-list-item">
            <h3>Decision Support</h3>
            <p>
              Improves interpretability of actuarial outputs through structured reporting,
              visual analytics, and policy-level drilldown capabilities.
            </p>
          </div>
        </div>
      </section>

      <div className="project-links">
        <a
          className="github-project-link"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          View Project on GitHub →
        </a>
      </div>
    </div>
  );
}

function HomePage({ setCurrentPage }) {
  const fullText = "Turning Data Into Operational Insights";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(timer);
      }
    }, 70);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="intro">Hi, I am Chia-Yu Wei</p>
          <h1>{displayText}</h1>

          <p className="hero-description">
            Data Science • ML Engineering • Operational Analytics
            <br />
            Passionate Data Scientist & Analytics Professional experienced in
            building data-driven solutions for operational intelligence,
            automation, machine learning, and business decision-making across
            manufacturing, insurance, education, and logistics systems.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => setCurrentPage("projects")}>
              View Projects
            </button>
            <a href="/resume.pdf" className="secondary-btn" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">
            <img src="/profile.jpg" alt="Chia-Yu Wei" />
          </div>

          <div className="status-card">
            <p>Focus Area</p>
            <h3>AI + Operations Intelligence</h3>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div>
          <h2>About Me</h2>
          <p>
            I am a Statistics graduate with experience in data science,
            manufacturing automation, supply chain analytics, and actuarial
            modeling. My work focuses on building practical systems that improve
            decision-making, operational efficiency, and process visibility.
          </p>
          <p>
            I enjoy solving problems that connect data, business logic, and
            real-world operations, especially in warehouse automation, logistics
            scheduling, insurance modeling, and AI-assisted education systems.
          </p>
        </div>

        <div className="education-card">
          <h3>Education</h3>
          <div className="education-item">
            <h4>Michigan State University</h4>
            <p>Master of Science in Statistics</p>
          </div>
          <div className="education-item">
            <h4>National Sun Yat-sen University</h4>
            <p>Bachelor of Science in Applied Mathematics</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-header">
              <FaPython className="skill-icon" />
              <h3>Programming & Analytics</h3>
            </div>
            <p>
              Python, SQL, SQL, Power BI, JavaScript, HTML, Excel
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <FaBrain className="skill-icon" />
              <h3>AI & Machine Learning</h3>
            </div>
            <p>
              Machine Learning, LLM Integration,
              Predictive Modeling, Time Series,
              Classification, Simulation
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <FaRobot className="skill-icon" />
              <h3>Operations Intelligence</h3>
            </div>
            <p>
              JIS Logistics, Warehouse Automation,
              RFID Tracking, ASRS Planning,
              Operational Analytics
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <FaDatabase className="skill-icon" />
              <h3>Data & Visualization</h3>
            </div>
            <p>
              Dashboard Design, EDA,
              KPI Analytics, Reporting Automation,
              Data Storytelling
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <FaIndustry className="skill-icon" />
              <h3>Industrial Systems</h3>
            </div>
            <p>
              Dock Scheduling, Supply Chain Analytics,
              Material Flow, Production Systems,
              Inventory Operations
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <FaCalculator className="skill-icon" />
              <h3>Actuarial & Statistical Modeling</h3>
            </div>
            <p>
              Actuarial Modeling, Risk Analytics,
              Forecasting, Statistical Analysis,
              Reserve Modeling
            </p>
          </div>
        </div>
      </section>

    </>
  );
}

function ExperiencePage({ selectedExperience, setSelectedExperience }) {
  return (
    <section id="experience" className="section">
      <h2>Experiences</h2>

      <div className="vertical-timeline">
        {experiences.map((exp, index) => (
          <div className="vertical-timeline-item" key={index}>
            <div className="timeline-date">{exp.date}</div>

            <button
              className="timeline-experience-card"
              onClick={() => setSelectedExperience(exp)}
            >
              <div className="timeline-card-top">
                <span className="experience-type">{exp.type}</span>
                <span className="open-icon">↗</span>
              </div>

              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.summary}</p>

              <div className="experience-tags">
                {exp.tags.slice(0, 3).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </button>
          </div>
        ))}
      </div>

      {selectedExperience && (
        <div className="modal-overlay" onClick={() => setSelectedExperience(null)}>
          <div className="experience-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedExperience(null)}>
              ×
            </button>

            <span className="experience-type">{selectedExperience.type}</span>
            <h3>{selectedExperience.title}</h3>
            <h4>{selectedExperience.company}</h4>

            <div className="modal-meta">
              <span>{selectedExperience.date}</span>
              <span>{selectedExperience.location}</span>
            </div>

            <div className="modal-section">
              <h5>Overview</h5>
              <p>{selectedExperience.overview}</p>
            </div>

            <div className="modal-section">
              <h5>Key Responsibilities</h5>
              <ul>
                {selectedExperience.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="experience-tags">
              {selectedExperience.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectsPage({ showMore, setShowMore, setSelectedProject }) {
  const visibleProjects = showMore ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="section">
      <div className="section-title-row">
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <button
            className="project-card"
            key={project.title}
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-list">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <span className="project-card-action">View Details →</span>
          </button>
        ))}
      </div>

      {projects.length > 6 && (
        <div className="view-more-wrapper">
          <button onClick={() => setShowMore(!showMore)} className="view-more">
            {showMore ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <h2>Contact Me</h2>
      <p>
        Let's connect! I am open to opportunities in data science, analytics, automation, and actuarial analytics.
      </p>

      <div className="contact-links">
        <a href="mailto:chiayuwei16@gmail.com">
          <FaEnvelope /> Email
        </a>
        <a href="https://github.com/ChiayuuW" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/chia-yu-wei"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showMore, setShowMore] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedProject={setSelectedProject}
      />

      <main className="main-content">
        {selectedProject ? (
          <ProjectDetail
            project={selectedProject}
            onBack={() => {
              setSelectedProject(null);
              setCurrentPage("projects");
            }}
          />
        ) : (
          <>
            {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
            {currentPage === "experience" && (
              <ExperiencePage
                selectedExperience={selectedExperience}
                setSelectedExperience={setSelectedExperience}
              />
            )}
            {currentPage === "projects" && (
              <ProjectsPage
                showMore={showMore}
                setShowMore={setShowMore}
                setSelectedProject={setSelectedProject}
              />
            )}
          </>
        )}

        <ContactSection />
      </main>
    </div>
  );
}

export default App;
