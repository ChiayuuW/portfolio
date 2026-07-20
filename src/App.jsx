import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPython,
  FaDatabase,
  FaRobot,
  FaBrain,
  FaIndustry,
  FaCalculator,
  FaLaptopCode,
} from "react-icons/fa";
import "./App.css";
const assetPath = (fileName) =>
  `${import.meta.env.BASE_URL}${fileName}`;

const projects = [
  {
    title: "Dock Scheduling Optimization Simulator",
    subtitle:
      "Interactive operations simulation for inbound logistics, dock assignment, and truck queue optimization.",
    description:
      "A decision-support simulator that compares FCFS, Dynamic Priority, and DAP-style dock scheduling strategies under real-time truck flow and dock capacity constraints.",
    tech: [
      "Python",
      "Discrete-Event Simulation",
      "Operations Research",
      "Scheduling Algorithms",
      "HTML Canvas",
      "Logistics Analytics",
    ],
    liveDemo: assetPath("Simulation.html"),
    image: assetPath("dock-simulation-preview.png"),
    overview:
      "This project is an interactive dock scheduling optimization simulator designed to evaluate inbound truck flow, dock assignment decisions, queue behavior, and operational bottlenecks in a warehouse environment. The system combines Python-based scheduling algorithms with an HTML simulation interface to compare scheduling strategies and visualize how different dispatching rules affect truck wait time, dock utilization, and throughput.",
    problem:
      "Inbound logistics operations often face dock congestion, long truck waiting times, uneven dock utilization, and limited visibility into how scheduling decisions affect warehouse throughput. Manual first-come-first-served assignment may be simple, but it does not account for urgency, work-order timing, travel uncertainty, driver confirmation delays, or real-time dock availability.",
    problemCards: [
      {
        value: "2 hrs",
        label: "Average truck unloading cycle time",
      },
      {
        value: "Manual Coordination",
        label: "Driver–operator communication delays",
      },
      {
        value: "Limited Visibility",
        label: "No real-time view of dock status and truck queue",
      },
    ],
    approach:
      "The simulator implements multiple dock scheduling strategies, including FCFS arrival-based assignment, dynamic priority scoring, and high-priority look-ahead logic. The dynamic scheduler ranks trucks using urgency, accumulated waiting time, arrival distance, and hard wait-time caps.",
    approachCards: [
      { value: "FCFS", label: "Baseline first-come-first-served scheduling" },
      { value: "Dynamic", label: "Priority scoring and queue re-ranking" },
      { value: "DAP", label: "High-priority look-ahead dispatching" },
    ],
    impactTitle: "Simulation Capabilities & Operational Value",
    results: [
      {
        heading: "Operational Bottleneck Identification",
        points: [
          "Visualized congestion points caused by dock shortages, travel delays, and unloading constraints.",
          "Provided decision support for warehouse capacity planning and dock expansion scenarios."
        ],
      },
      {
        heading: "Dynamic Priority Dispatching",
        points: [
          "Implemented a scoring algorithm using urgency, waiting-time aging, arrival-distance penalty, and hard wait-time caps.",
          "Allowed the system to continuously re-rank eligible trucks as operational conditions changed.",
        ],
      },
      {
        heading: "Event-Driven Warehouse Simulation",
        points: [
          "Modeled realistic dock assignment events including three-pallet remaining triggers, dock-free triggers, driver confirmation, and fallback handling.",
          "Added safety logic to prevent multiple trucks from being assigned to the same dock at the same time.",
        ],
      },
      {
        heading: "Interactive Decision-Support Interface",
        points: [
          "Built an HTML Canvas simulation UI with selectable dock capacity, scheduling mode, playback speed, and real-time operational metrics.",
          "Visualized truck states including on-road, waiting, unloading, completed, and high-priority vehicles.",
        ],
      },
    ],
  },
  {
    title: "Actuarial Reserve Analytics Platform",
    subtitle:
      "Interactive actuarial valuation and reinsurance analytics platform built with Python and Streamlit.",
    description:
      "A full-stack actuarial analytics platform for reserve valuation, mortality analysis, reinsurance modeling, and scenario testing.",
    tech: ["Python", "Streamlit", "Pandas", "Plotly", "Actuarial Modeling", "Analytics"],
    github: "https://github.com/ChiayuuW/life-insurance-reserve-engine",
    liveDemo:
      "https://life-insurance-reserve-engine-buyc84aafnkwtvnvgco5fe.streamlit.app/",
    image: assetPath("reserve-engine-demo.png"),
    architectureImage: assetPath("actuarial-platform-architecture.png"),
    overview:
      "This project is an end-to-end actuarial analytics platform designed to support life insurance reserve valuation, mortality analysis, and reinsurance evaluation. The system combines actuarial calculation engines with interactive dashboards to help users analyze portfolio risk, policy-level valuation results, and assumption sensitivity in a more transparent and operationally efficient workflow.",
    problem:
      "Traditional actuarial valuation workflows are often fragmented across spreadsheets, legacy systems, and static reports, making reserve validation, scenario testing, and portfolio analysis difficult to scale and interpret.",
    problemCards: [
      { value: "Policy-Level", label: "Reserve and valuation review" },
      { value: "Manual", label: "Spreadsheet-heavy workflow challenge" },
      { value: "Limited", label: "Scenario testing visibility" },
    ],
    approach:
      "The platform was developed using Python, Pandas, and Streamlit to create a modular actuarial valuation pipeline integrated with interactive analytics dashboards.",
    approachCards: [
      { value: "Reserve", label: "Reusable valuation engine" },
      { value: "Scenario", label: "Mortality, discount rate, and retention testing" },
      { value: "Dashboard", label: "Interactive actuarial analytics interface" },
    ],
    impactTitle: "Platform Capabilities & Business Impact",
    results: [
      "Built a reusable actuarial reserve valuation engine for life insurance products.",
      "Enabled interactive reserve, mortality, and reinsurance analytics through dashboard visualizations.",
      "Created policy-level drilldown functionality for detailed valuation review and validation.",
      "Implemented scenario testing for mortality shock, discount rate, and retention limit sensitivity analysis.",
      "Improved transparency and interpretability of actuarial calculations compared to spreadsheet-based workflows.",
    ],
  },
  {
    title: "Financial Time Series Forecasting",
    subtitle:
      "Hybrid SARIMA-XGBoost framework for forecasting USD/CAD exchange rate movements.",
    description:
      "Developed a hybrid forecasting framework combining time series analysis and machine learning to model exchange rate dynamics using macroeconomic indicators.",
    tech: [
      "Python",
      "SARIMA",
      "XGBoost",
      "Random Forest",
      "Time Series Analysis",
      "Forecasting",
      "Financial Analytics",
      "Feature Engineering",
    ],
    technicalScope: [
      "ACF Analysis",
      "PACF Analysis",
      "ADF Stationarity Testing",
      "Seasonal Decomposition",
      "Feature Engineering",
      "SARIMA",
      "Random Forest",
      "XGBoost",
      "RMSE Evaluation",
      "Residual Modeling",
    ],
    github: "https://github.com/ChiayuuW/Exchange-Rate-Prediction",
    overview:
      "This project investigates the macroeconomic drivers of the USD/CAD exchange rate and develops a hybrid forecasting framework that combines traditional time series modeling with machine learning. Using monthly economic data from 2005–2023, the project evaluates how interest rate differentials, inflation, GDP growth, and oil price spreads influence currency movements.",
    problem:
      "Exchange rates are influenced by complex interactions between macroeconomic conditions, monetary policy, commodity prices, and market sentiment. Traditional forecasting models often capture trend and seasonality well but may struggle with nonlinear economic shocks.",
    problemCards: [
      { value: "2005–2023", label: "Monthly economic data analyzed" },
      { value: "4", label: "Macroeconomic drivers evaluated" },
      { value: "USD/CAD", label: "Exchange rate forecasting target" },
    ],
    approach:
      "Applied stationarity testing, ACF/PACF analysis, seasonal decomposition, SARIMA modeling, Random Forest, XGBoost, and hybrid residual modeling to compare forecasting performance across statistical and machine learning methods.",
    approachCards: [
      { value: "SARIMA", label: "Trend and seasonality modeling" },
      { value: "ML", label: "Residual nonlinear pattern learning" },
      { value: "RMSE", label: "Forecast accuracy evaluation" },
    ],
    previewTitle: "Model Results Preview",
    previewImages: [
      assetPath("exchange-forecast.png"),
      assetPath("exchange-ml.png"),
      assetPath("exchange-hybrid.png"),
    ],
    impactTitle: "Key Findings & Business Insights",
    results: [
      {
        heading: "Macroeconomic Driver Discovery",
        points: [
          "Identified GDP differential as the strongest predictor of USD/CAD exchange rate movements.",
          "Evaluated how interest rates, inflation, and oil prices contribute to exchange rate fluctuations.",
        ],
      },
      {
        heading: "Hybrid Forecasting Framework",
        points: [
          "Developed a two-stage SARIMA + Machine Learning forecasting architecture.",
          "Combined statistical trend modeling with nonlinear residual correction.",
        ],
      },
      {
        heading: "Model Performance Evaluation",
        points: [
          "Hybrid XGBoost achieved the lowest evaluation RMSE of 0.04123.",
          "Outperformed standalone Random Forest and XGBoost models.",
        ],
      },
      {
        heading: "Forecasting Under Realistic Conditions",
        points: [
          "Tested forecasting performance using predicted future macroeconomic indicators.",
          "Demonstrated how input uncertainty affects long-horizon forecast accuracy.",
        ],
      },
    ],
  },
  {
    title: "Power BI Dashboard Portfolio",
    subtitle: "Power BI dashboards for business reporting, KPI tracking, and data storytelling.",
    description:
      "A collection of Power BI dashboards covering sales analytics, survey insights, and insurance customer analysis.",
    tech: ["Power BI", "DAX", "Power Query", "Data Visualization"],
    github: "https://github.com/ChiayuuW/Power-BI-Profolio",
    previewImages: [
      assetPath("powerbi-sales-dashboard.png"),
      assetPath("powerbi-survey-dashboard.png"),
      assetPath("powerbi-insurance-dashboard.png"),
    ],
    overview:
      "This project is a Power BI dashboard portfolio focused on transforming raw business data into interactive reports, KPI summaries, and decision-ready visual insights.",
    problem:
      "Business users often need clear and interactive dashboards to monitor performance, understand customer behavior, and identify operational trends.",
    problemCards: [
      { value: "Sales", label: "Business performance dashboard" },
      { value: "Survey", label: "User response and demographic insights" },
      { value: "Insurance", label: "Customer analytics dashboard" },
    ],
    approach:
      "Each dashboard was built using Power BI with structured data preparation, Power Query transformation, DAX-based calculated measures, interactive filters, and report layouts designed for business users.",
    approachCards: [
      { value: "DAX", label: "Business metric calculations" },
      { value: "Power Query", label: "Data cleaning and transformation" },
      { value: "KPI", label: "Interactive reporting design" },
    ],
    impactTitle: "Dashboard Capabilities & Business Value",
    results: [
      "Built multiple Power BI dashboards across sales, survey, and insurance business use cases.",
      "Applied Power Query for data cleaning and transformation.",
      "Created DAX measures and KPI calculations for business reporting.",
      "Designed interactive report pages with slicers, filters, and visual storytelling.",
    ],
  },
  {
    title: "AI-Powered Adaptive Learning Platform",
    subtitle: "Streamlit-based adaptive learning system with LLM-generated remediation support.",
    description:
      "An AI education platform that identifies student knowledge gaps, adapts review workflows, and generates personalized remediation content.",
    tech: ["Python", "Streamlit", "LLM", "Education Analytics"],
    github: "https://github.com/ChiayuuW/Adaptive-Learning-Platform",
    liveDemo:
      "https://adaptive-learning-platform-kflvrjw6gz4ukmksaeewpm.streamlit.app/",
    image: assetPath("adaptive-learning-preview.png"),
    architectureImage: assetPath("adaptive-learning-architecture.png"),
    overview:
      "This project is an AI-powered adaptive learning platform designed to support personalized education through knowledge-gap identification, adaptive review logic, and LLM-generated remediation content.",
    problem:
      "Traditional learning workflows often rely on static practice questions and manual teacher review, making it difficult to quickly identify specific student weaknesses and provide personalized remediation at scale.",
    problemCards: [
      { value: "500+", label: "Learning scenarios processed" },
      { value: "35%", label: "Reduction in learning time" },
      { value: "3 sec", label: "Average LLM response time" },
    ],
    approach:
      "The platform combines adaptive testing logic, performance review workflows, PostgreSQL-driven learning analytics, and LLM-assisted content generation.",
    approachCards: [
      { value: "Adaptive", label: "Dynamic difficulty adjustment" },
      { value: "LLM", label: "Personalized remediation generation" },
      { value: "Analytics", label: "Real-time student performance tracking" },
    ],
    impactTitle: "Results & Impact",
    results: [
      {
        heading: "Personalized Learning Experience",
        points: [
          "Dynamically adjusted question difficulty based on student performance trends and historical attempts.",
          "Reduced unnecessary repetitive practice by focusing on knowledge-gap targeting.",
        ],
      },
      {
        heading: "Real-Time Learning Analytics",
        points: [
          "Built a PostgreSQL-driven analytics pipeline to continuously track student accuracy, attempts-until-correct, and difficulty mismatch patterns.",
          "Enabled automatic recalibration of question difficulty using live student performance data.",
        ],
      },
      {
        heading: "AI-Assisted Content Management",
        points: [
          "Automated topic and difficulty tagging using SentenceTransformer embeddings and feature-engineered classification models.",
          "Reduced manual teacher labeling workload for newly added questions.",
        ],
      },
      {
        heading: "Production-Style System Architecture",
        points: [
          "Deployed the application using Streamlit Community Cloud and Neon PostgreSQL.",
          "Enabled persistent cloud-based student progress tracking and analytics updates.",
        ],
      },
    ],
  },
  {
    title: "U.S. Drug Demand Intelligence Dashboard",
    subtitle:
      "Healthcare analytics platform for Medicaid drug utilization, state-level demand intelligence, and quarterly demand forecasting.",
    description:
      "An interactive healthcare analytics dashboard that analyzes Medicaid outpatient drug utilization, spending exposure, state-level demand, and forecasted drug category growth.",
    tech: [
      "Python",
      "Pandas",
      "Prophet",
      "Matplotlib",
      "Supabase",
      "Parquet",
      "Healthcare Analytics",
      "Forecasting"
    ],
    github: "https://github.com/ChiayuuW/med-insights-dashboard",
    liveDemo: "https://med-insights-noir.lovable.app/",
    overview:
      "This project is a healthcare market intelligence dashboard built to analyze U.S. Medicaid outpatient drug utilization. It transforms public SDUD data into interactive insights covering national demand trends, state-level utilization, Medicaid spending exposure, drug category growth, and next-quarter demand forecasts.",
    problem:
      "Healthcare and pharmaceutical stakeholders often need to understand drug demand patterns across states, categories, and time periods, but public Medicaid utilization data is large, fragmented, and difficult to interpret directly from raw files.",
    problemCards: [
      { value: "2020–2024", label: "Medicaid drug utilization data analyzed" },
      { value: "State-Level", label: "Demand intelligence across U.S. markets" },
      { value: "Forecasting", label: "Next-quarter drug category growth signals" },
    ],
    approach:
      "The platform ingests and cleans Medicaid SDUD data, maps drugs into therapeutic categories, calculates utilization and spending metrics, and applies Prophet forecasting to generate quarterly demand signals by drug category.",
    approachCards: [
      { value: "SDUD", label: "Medicaid drug utilization data pipeline" },
      { value: "Prophet", label: "Quarterly demand forecasting model" },
      { value: "Dashboard", label: "Interactive market intelligence interface" },
    ],
    previewTitle: "Dashboard Preview",

    previewImages: [
      assetPath("med-market-overview.png"),
      assetPath("med-state-intelligence.png"),
      assetPath("med-demand-forecast.png"),
    ],
    impactTitle: "Healthcare Analytics & Business Value",
    results: [
      {
        heading: "Market Demand Intelligence",
        points: [
          "Built an interactive dashboard to monitor total units reimbursed, prescription volume, and Medicaid spending.",
          "Helped users understand national and state-level drug demand patterns from raw Medicaid utilization data."
        ]
      },
      {
        heading: "State-Level Prioritization",
        points: [
          "Identified top states by drug utilization to support market focus and resource allocation.",
          "Enabled comparison of state-level demand across selected drug categories and years."
        ]
      },
      {
        heading: "Drug Category Growth Analysis",
        points: [
          "Grouped products into major therapeutic categories such as Diabetes, Cardiovascular, Hypertension, Antibiotics, Mental Health, and Pain Management.",
          "Calculated year-over-year growth by category to surface demand changes over time."
        ]
      },
      {
        heading: "Forecast-Driven Planning",
        points: [
          "Built Prophet-based quarterly forecasts for drug categories.",
          "Generated next-quarter growth signals to support inventory planning, market strategy, and demand monitoring."
        ]
      }
    ]
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
    summary:
      "Focused on manufacturing analytics, warehouse automation, and operational intelligence initiatives.",
    overview:
      "Supported manufacturing analytics and operational automation initiatives focused on warehouse systems, logistics visibility, RFID-enabled material tracking, and JIS-related workflows within a smart manufacturing environment.",
    businessContext:
      "The role focused on improving operational visibility, warehouse coordination, and material flow management across manufacturing logistics and automation systems.",
    contributions: [
      "Designed JIS scheduling and warehouse operation workflow concepts.",
      "Mapped RFID tracking architecture for pallet-level material visibility.",
      "Supported ASRS operational planning and warehouse automation discussions.",
      "Coordinated operational requirements between business teams, IT, and external vendors.",
    ],
    technicalScope: [
      "RFID Tracking Systems",
      "Warehouse Automation",
      "Operational Analytics",
      "Supply Chain Process Mapping",
      "ASRS Planning",
      "JIS Logistics",
      "Dock Scheduling",
    ],
    impact: [
      "Improved operational visibility discussions for warehouse automation initiatives.",
      "Supported alignment between operational workflows and technical implementation requirements.",
      "Contributed to planning discussions for scalable logistics and warehouse intelligence systems.",
    ],
    tags: ["Supply Chain", "Automation", "Simulation", "Operational Analytics", "Python", "Operation Optimization"],
  },
  {
    date: "Nov 2025 - Feb 2026",
    type: "Full-Time",
    title: "Data Analyst",
    company: "Aplus Consultant",
    location: "United States",
    summary:
      "Supported consulting analytics projects, operational reporting, and business data analysis workflows.",
    overview:
      "Worked on analytics and operational reporting initiatives supporting consulting projects related to business operations, reporting automation, and data-driven decision-making.",
    businessContext:
      "The role involved supporting consulting engagements through data analysis, reporting workflows, and business intelligence support.",
    contributions: [
      "Built operational reporting dashboards and analytical summaries.",
      "Performed business and operational data analysis across consulting projects.",
      "Supported reporting automation and KPI tracking workflows.",
      "Collaborated with cross-functional stakeholders to improve reporting visibility.",
    ],
    technicalScope: [
      "Business Analytics",
      "Dashboard Reporting",
      "Data Visualization",
      "SQL",
      "Operational Reporting",
      "KPI Analysis",
    ],
    impact: [
      "Improved accessibility of operational reporting and analytical insights.",
      "Supported data-driven decision-making through reporting standardization.",
      "Enhanced visibility of operational metrics for consulting stakeholders.",
    ],
    tags: ["Analytics", "Dashboard", "Python", "SQL", "Business Intelligence"],
  },
  {
    date: "Oct 2024 - Nov 2025",
    type: "Internship",
    title: "Data Science Intern",
    company: "MyEdMaster",
    location: "Remote",
    summary:
      "Built adaptive testing systems and LLM-powered educational analytics workflows.",
    overview:
      "Designed adaptive learning workflows, machine learning pipelines, and LLM-powered remediation systems to support personalized education.",
    businessContext:
      "The internship focused on improving learning efficiency and educational personalization through adaptive testing logic and AI-assisted remediation.",
    contributions: [
      "Designed adaptive testing algorithms processing 500+ learning scenarios.",
      "Built LLM-powered remediation generation workflows for personalized learning support.",
      "Developed machine learning pipelines for automated content tagging and classification.",
      "Supported workflow optimization reducing learning time by approximately 35%.",
    ],
    technicalScope: [
      "Python",
      "Machine Learning Pipelines",
      "LLM Integration",
      "Educational Analytics",
      "Adaptive Testing",
      "Data Processing",
    ],
    impact: [
      "Improved personalization and scalability of learning workflows.",
      "Reduced manual effort required for remediation content generation.",
      "Enhanced student learning efficiency through automated knowledge-gap analysis.",
    ],
    tags: ["Python", "LLM", "Machine Learning", "Educational Analytics"],
  },
  {
    date: "Jun 2024 - Aug 2024",
    type: "Internship",
    title: "Actuarial Intern",
    company: "BNP Paribas Cardif",
    location: "Taipei, Taiwan",
    summary:
      "Automated actuarial and reinsurance analytics workflows using Python and SQLite.",
    overview:
      "Supported the actuarial reinsurance team in automating policy valuation and reinsurance reporting processes across life insurance products. Developed Python-based analytical workflows to process large-scale policy data, implement treaty-specific actuarial calculations, and improve reporting efficiency for reserve and reinsurance analysis.",
    businessContext:
      "The actuarial reinsurance team was responsible for producing monthly reserve and reinsurance reporting for tens of thousands of active life insurance policies. The existing workflow relied on legacy FoxPro programs that were difficult to maintain, required significant manual effort, and created challenges when reinsurance treaty conditions changed. The team needed a more scalable and maintainable solution to support actuarial valuation and reporting requirements.",
    contributions: [
      "Developed Python-based actuarial processing pipelines to evaluate 50,000+ life insurance policies and generate policy-level outputs used in reserve and reinsurance reporting.",
      "Translated actuarial treaty requirements into calculation rules, including retention limits, ceded amounts, and issue-year-specific reinsurance conditions.",
      "Automated reserve-related calculations and reinsurance premium computations previously handled through legacy systems.",
      "Built Excel-based validation frameworks to reconcile calculated outputs against actuarial assumptions and existing reporting results.",
      "Developed reusable reporting modules to generate monthly reserve, premium, and reinsurance reporting outputs directly from policy-level data."
    ],
    technicalScope: [
      "Python",
      "SQLite",
      "Actuarial Modeling",
      "Reserve Analytics",
      "Reinsurance Modeling",
      "Data Processing",
      "Workflow Automation",
    ],
    impact: [
      "Reduced actuarial processing runtime by approximately 33% compared to legacy FoxPro workflows.",
      "Enabled efficient processing of more than 50,000 policy records through automated Python workflows.",
      "Minimized manual intervention and improved consistency of actuarial reporting outputs.",
      "Created a more flexible calculation framework that could be updated when reinsurance treaty conditions changed."
    ],
    tags: ["Python", "SQLite", "Excel", "Actuarial Modeling", "Reinsurance Analytics"],
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
        <button className={currentPage === "home" ? "active" : ""} onClick={() => goToPage("home", "about")}>About</button>
        <button className={currentPage === "experience" ? "active" : ""} onClick={() => goToPage("experience")}>Experience</button>
        <button className={currentPage === "projects" ? "active" : ""} onClick={() => goToPage("projects")}>Projects</button>
        <button onClick={() => goToPage("home", "skills")}>Skills</button>
        <button onClick={goToContact}>Contact</button>
      </div>
    </nav>
  );
}

function InsightSection({ title, text, cards }) {
  if (!text) return null;

  return (
    <section className="insight-section">
      <h2>{title}</h2>
      <p>{text}</p>

      {cards && (
        <div className="metric-grid">
          {cards.map((card) => (
            <div className="metric-card" key={`${card.value}-${card.label}`}>
              <h3>{card.value}</h3>
              <p>{card.label}</p>
            </div>
          ))}
        </div>
      )}
    </section>
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

        {project.liveDemo && (
          <p className="live-demo-text">
            Try Live Demo Here:{" "}
            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="live-demo-link">
              Live Demo
            </a>
          </p>
        )}

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

      <InsightSection title="Problem Statement" text={project.problem} cards={project.problemCards} />

      <InsightSection title="Solution Approach" text={project.approach} cards={project.approachCards} />

      {project.technicalScope && (
        <section className="project-detail-section">
          <h2>Technical Components</h2>

          <div className="experience-tags">
            {project.technicalScope.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      )}

      {project.previewImages && (
        <section className="dashboard-preview-section">
          <h2>{project.previewTitle || "Dashboard Preview"}</h2>

          <div className="dashboard-preview-grid">
            {project.previewImages.map((image, index) => (
              <a href={image} target="_blank" rel="noreferrer" key={image}>
                <img
                  src={image}
                  alt={`${project.title} preview ${index + 1}`}
                  className="dashboard-preview-image"
                />
              </a>
            ))}
          </div>
        </section>
      )}

      {project.image && (
        <section className="project-screenshot-section">
          <h2>Project Preview</h2>

          <a href={project.liveDemo || project.github} target="_blank" rel="noreferrer" className="project-preview-link">
            <img src={project.image} alt={`${project.title} preview`} className="project-screenshot" />
          </a>
        </section>
      )}

      {project.results && (
        <section className="project-impact-list-section">
          <h2>{project.impactTitle || "Results / Impact"}</h2>

          <div className="impact-list">
            {project.results.map((item) => {
              if (typeof item === "string") {
                return (
                  <div className="impact-list-item" key={item}>
                    <p>{item}</p>
                  </div>
                );
              }

              return (
                <div className="impact-list-item" key={item.heading}>
                  <h3>{item.heading}</h3>

                  <ul className="impact-sub-list">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <div className="project-links">
        {project.github && (
          <a className="github-project-link" href={project.github} target="_blank" rel="noreferrer">
            View Project on GitHub →
          </a>
        )}

        {project.liveDemo && (
          <a className="github-project-link" href={project.liveDemo} target="_blank" rel="noreferrer">
            View Live Demo →
          </a>
        )}
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

      if (index === fullText.length) clearInterval(timer);
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
            Passionate Data Scientist & Analytics Professional experienced in building data-driven solutions for operational intelligence, automation, machine learning, and business decision-making across manufacturing, insurance, education, and logistics systems.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => setCurrentPage("projects")}>
              View Projects
            </button>
            <a
              href={assetPath("resume.pdf")}
              className="secondary-btn"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">
            <img
              src={assetPath("profile.jpg")}
              alt="Chia-Yu Wei"
            />
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
            I am a Statistics graduate with experience in data science, manufacturing automation, supply chain analytics, and actuarial modeling. My work focuses on building practical systems that improve decision-making, operational efficiency, and process visibility.
          </p>
          <p>
            I enjoy solving problems that connect data, business logic, and real-world operations, especially in warehouse automation, logistics scheduling, insurance modeling, and AI-assisted education systems.
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
            <p>Python, SQL, Power BI, JavaScript, HTML, Excel</p>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <FaBrain className="skill-icon" />
              <h3>AI & Machine Learning</h3>
            </div>
            <p>Machine Learning, LLM Integration, Predictive Modeling, Time Series, Classification, Simulation</p>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <FaRobot className="skill-icon" />
              <h3>Operations Intelligence</h3>
            </div>
            <p>JIS Logistics, Warehouse Automation, RFID Tracking, ASRS Planning, Operational Analytics</p>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <FaDatabase className="skill-icon" />
              <h3>Data & Visualization</h3>
            </div>
            <p>Dashboard Design, EDA, KPI Analytics, Reporting Automation, Data Storytelling</p>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <FaIndustry className="skill-icon" />
              <h3>Industrial Systems</h3>
            </div>
            <p>Dock Scheduling, Supply Chain Analytics, Material Flow, Production Systems, Inventory Operations</p>
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <FaCalculator className="skill-icon" />
              <h3>Actuarial & Statistical Modeling</h3>
            </div>
            <p>Actuarial Modeling, Risk Analytics, Forecasting, Statistical Analysis, Reserve Modeling</p>
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
        {experiences.map((exp) => (
          <div className="vertical-timeline-item" key={`${exp.company}-${exp.title}`}>
            <div className="timeline-date">{exp.date}</div>

            <button className="timeline-experience-card" onClick={() => setSelectedExperience(exp)}>
              <div className="timeline-card-top">
                <span className="experience-type">{exp.type}</span>
                <span className="open-icon">↗</span>
              </div>

              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.summary}</p>

              <div className="experience-tags">
                {exp.tags.map((tag) => (
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

            <div className="modal-company-row">
              <span>{selectedExperience.location}</span>
              <span>•</span>
              <span>{selectedExperience.date}</span>
            </div>

            <div className="modal-section">
              <h5>Role Overview</h5>
              <p>{selectedExperience.overview}</p>
            </div>

            <div className="modal-section">
              <h5>Business Context</h5>
              <p>{selectedExperience.businessContext}</p>
            </div>

            <div className="modal-section">
              <h5>Key Contributions</h5>
              <ul>
                {selectedExperience.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h5>Technical Scope</h5>
              <div className="experience-tags">
                {selectedExperience.technicalScope.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="modal-section">
              <h5>Operational Impact</h5>
              <ul>
                {selectedExperience.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
        {visibleProjects.map((project) => {
          const coverImage =
            project.image || project.previewImages?.[0];

          return (
            <button
              className={`project-card ${
                coverImage
                  ? "project-card-with-image"
                  : "project-card-compact"
              }`}
              key={project.title}
              onClick={() => setSelectedProject(project)}
            >
              {coverImage && (
                <img
                  src={coverImage}
                  alt={`${project.title} preview`}
                  className="project-card-image"
                />
              )}

              <div className="project-card-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <span className="project-card-action">
                  View Details →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {projects.length > 6 && (
        <div className="view-more-wrapper">
          <button
            onClick={() => setShowMore(!showMore)}
            className="view-more"
          >
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
        Let's connect! I am open to opportunities and collaborations in Data Science, AI, Operational Analytics, and Business Intelligence.
      </p>

      <div className="contact-links">
        <a href="mailto:chiayuwei16@gmail.com">
          <FaEnvelope /> Email
        </a>
        <a href="https://github.com/ChiayuuW" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/chia-yu-wei" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://share.streamlit.io/user/chiayuuw" target="_blank" rel="noreferrer">
          <FaLaptopCode /> Live Apps
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
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} setSelectedProject={setSelectedProject} />

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
              <ExperiencePage selectedExperience={selectedExperience} setSelectedExperience={setSelectedExperience} />
            )}
            {currentPage === "projects" && (
              <ProjectsPage showMore={showMore} setShowMore={setShowMore} setSelectedProject={setSelectedProject} />
            )}
          </>
        )}

        <ContactSection />
      </main>
    </div>
  );
}

export default App;