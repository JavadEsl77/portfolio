import FlowBoard from "../../public/assets/projects/FlowBoard.jpg";
import Datami from "../../public/assets/projects/Datami.jpg";
import AsoCard from "../../public/assets/projects/AsoCard.jpg";
import portfolio from "../../public/assets/projects/portfolio.jpg";

export const HERO_CONTENT = `I began programming in 2015 and have 7 years of programming experience. Currently, I work as a front-end programmer. Additionally, I have a strong interest in design, and over the past year, I've successfully acquired front-end concepts and the ability to create dynamic user interfaces for web applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
        year: "Sep 2022 - Present",
        role: "Frontend Developer",
        company: "LifeWeb",
        description: "• Managing modules as a monorepo with an internal repository (Nexus) and applying SemVer." +
            "• Implementing a dedicated calendar and uploading the company's internal repository (nexus)." +
            "• Implementation of custom components in the form of reusable modules." +
            "• Improving the user interface by building a dynamic user interface and optimizing it to adapt to different page sizes." +
            "• Increasing page data processing speed and improving fetch requests in the system." +
            "• Implementation of a suitable framework for document writing using storyBook.",
        technologies: ["React", "JavaScript", "Typescript", "Axios", "Redux", "MaterialUi", "HighCharts", "SCRUM"],
    },
    {
        year: "Mar 2021- Sep 2022",
        role: "Android Developer",
        company: "LifeWeb",
        description: "• Instami (Instagram advertising platform) • Pixel application (a resource for high-quality visual images)" +
            "Taken from unsplash - preview",
        technologies: ["Kotlin", "JetpackCompose", "java", "androidStudio"],
    },
    {
        year: "Mar 2019 - Feb 2021",
        role: "Android Developer",
        company: "CodeAvaran",
        description: "• Nikan system of managing charitable institutions of the province • Helkoo Online laundry service application",
        technologies: ["Kotlin", "JetpackCompose", "java", "androidStudio"],
    },

];

export const PROJECTS = [
    {
        title: "datami",
        image: Datami,
        description:
            "Datami is a smart monitoring and analysis service in cyber space that analyzes online news and social media content by using artificial intelligence, data mining, text mining and statistical analysis.",
        technologies: ["React", "JavaScript", "Typescript", "Axios", "Redux", "Cypress", "MaterialUi", "HighCharts", "SCRUM"],
    },
    {
        title: "FlowBoard (Task Management Service)",
        image: FlowBoard,
        description:
            "Task management website and team projects on the network platform.",
        technologies: ["React", "JavaScript", "Typescript", "Axios", "Redux", "Cypress", "MaterialUi", "react DnD"],
    },
    {
        title: "Portfolio",
        image: portfolio,
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["Next.js", "React", "Tailwind", "FarmerMotion"],
    },
    {
        title: "AsoCard",
        image: AsoCard,
        description:
            "AsoCard is the first and most powerful system for providing smart business cards and other smart products based on NFC technology. You can use AsoCard products to introduce your business differently and uniquely to others or give valuable gifts to your friends and loved ones.",
        technologies: ["Next.js", "React", "Typescript", "MaterialUi", "swiper", "Emotion"],
    },
];

export const CONTACT = {
    address: "sabalan Jonobi, Tehran, Sablan",
    phoneNo: "+98",
    email: "javades755@gmail.com",
};
