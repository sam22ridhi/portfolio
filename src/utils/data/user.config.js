import ResumePDF from "./sam.pdf";
import default_avatar from "../../assets/images/baseImages/default_avatar.svg";
import jio from ".././../assets/images/data/jio.png";
import nanavati from ".././../assets/images/data/nanavati.jpg";

const user = {
    firstName: "Samridhi Raj",
    lastName: "Sinha",
    userImage: default_avatar,
    resume: ResumePDF,
    email: "samridhiraj04@gmail.com",
    linkedIn: "in/samridhi-raj-sinha-a96520217/",
    gitHub: "sam22ridhi",
    phone: "+91 9390870780",
    aboutMe: {
        intro: "I'm a Computer Engineering student from Mumbai, India.",
        description:
            "I have a passion for leveraging AI and software development to solve complex problems. My expertise spans Machine Learning, Artificial Intelligence, Web Development, and Software Engineering.",
        outro: "Outside of work, I enjoy creating impactful projects and contributing to meaningful initiatives.",
    },
	experiences: [
		    {
        organization: "Indian Institute of Technology Gandhinagar",
        organizationPicture: iit, // Add logo if available
        isCurrent: false,
        startDate: "May 2025",
        endDate: "July 2025",
        positions: [
            {
                positionName: "Research Intern",
                startDate: "May 2025",
                endDate: "July 2025",
                isPresent: false,
                description:
                    "Developed an evaluation framework for Project EKΛ, India's 120B-parameter multilingual foundation model. Automated benchmarking pipelines for Indic tasks including code, reasoning, and world knowledge.",
            },
        ],
    },
		
    {
        organization: "Nanavati Max Institute of Cancer Care",
        organizationPicture: nanavati,
        isCurrent: true,
        startDate: "September 2024",
        endDate: null,
        positions: [
            {
                positionName: "AI & ML Research Intern",
                startDate: "September 2024",
                endDate: "Present",
                isPresent: true,
                description:
                    "Contoured tumor bed volumes on pre- and post-operative CT scans under radiation oncologist guidance with <1mm variance. Built a 3D U-Net with hybrid loss (BCE+Dice+Focal), achieving 0.908 DSC and 1.19mm HD95. Co-authoring research paper on AI-driven breast tumor bed estimation for radiotherapy planning.",
            },
        ],
    },
    {
        organization: "ResoluteAI Software",
        organizationPicture: resolute, // Add logo if available
        isCurrent: false,
        startDate: "November 2024",
        endDate: "February 2025",
        positions: [
            {
                positionName: "AI Engineer Intern",
                startDate: "November 2024",
                endDate: "February 2025",
                isPresent: false,
                description:
                    "Automated GitHub codebase documentation using CrewAI/LangChain agents, reducing manual effort by 50% with RAG-enhanced context. Developed a LinkedIn analytics platform with a FastAPI backend and a React & TypeScript dashboard for real-time social media insights.",
            },
        ],
    },

    {
        organization: "Jio Platforms Limited (JPL)",
        organizationPicture: jio,
        isCurrent: false,
        startDate: "May 2024",
        endDate: "July 2024",
        positions: [
            {
                positionName: "AI & ML Engineer Intern",
                startDate: "May 2024",
                endDate: "July 2024",
                isPresent: false,
                description:
                    "Built an automatic annotator tool using Python, FastAPI, and spaCy, improving data processing by 30%. Designed a low-code, multi-agent system with CrewAI, reducing development time by 40%.",
            },
        ],
    },
],
    projects: [
        {
            projectName: "MindMate: AI Powered Mental Health Assistant",
            description:
                "Developed an AI-powered mental health assistant using LangChain and Google Gemini API, enabling therapeutic conversations with dynamic personas.",
            madeWith: ["LangChain", "Streamlit", "SQLite"],
            link: "https://huggingface.co/spaces/samiee2213/mindmate",
        },
        {
            projectName: "RAGE: Retrieval Augmented Generation Engine",
            description:
                "Built a RAG system for efficient, context-aware document processing and semantic search using LangChain, OpenAI, and FAISS.",
            madeWith: ["LangChain", "OpenAI", "FAISS"],
            link: "https://huggingface.co/spaces/2ss2/R.A.G.E",
        },
        {
            projectName: "SpectraVIT: Melanoma Classification",
            description:
                "Authored research on a novel hybrid model combining Fourier and Wavelet transforms with ViT for melanoma classification, achieving 92%+ accuracy.",
            madeWith: ["PyTorch", "Wavelet Transforms", "Fourier Transforms"],
            link: "https://github.com/sam22ridhi/SpectraVIT",
        },
        {
            projectName: "TraffiTrack: Drug Trafficking Detection System",
            description:
                "Developed a real-time AI-powered system for detecting drug trafficking on chat platforms like Telegram and Twitter.",
            madeWith: ["Streamlit", "Python", "Web Scraping"],
            link: "https://huggingface.co/spaces/samiee2213/traffitrack",
        },
    ],
    skills: [
        {
            name: "Programming Languages",
            values: ["Python", "C++", "Java", "JavaScript", "SQL", "HTML", "CSS"],
        },
        {
            name: "Machine Learning Frameworks",
            values: ["Langchain", "Keras", "PyTorch", "TensorFlow", "Scikit-Learn", "FastAPI"],
        },
        {
            name: "Tools/IDE Proficiency",
            values: ["Docker", "GitHub Desktop", "Microsoft Office", "VSCode", "Power BI"],
        },
    ],
    extracurricularActivities: [
        "IEEE Society Technical Subhead (23-24): Led research, app development, and workshops.",
        "Developed the official website for Sattva cultural festival (22-23).",
        "Volunteered at Children’s Aid Society, Mankhurd, teaching girls aged 5-12.",
        "Placed 4th in Circa’s Hack CodeQuest AI Hackathon for a carbon footprint tracker AI app.",
    ],
};

export default user;
