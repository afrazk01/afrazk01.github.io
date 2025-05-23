/* Personal Portfolio Content */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Afraz Khan",
  title: "Hi all, I'm Afraz",
  subTitle: emoji(
    "An AI Engineer with a focus on developing and deploying scalable AI solutions. Skilled in Python, TensorFlow, PyTorch, and scikit-learn, with expertise in data processing, model optimization, and predictive modeling. [cite: 1, 2]"
  ),
  resumeLink: "https://drive.google.com/uc?export=download&id=1Jj1Do5-HRqcLy_MFpX2WuCEx8_8VUW5j", // Add your resume link here
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/afrazk01",
  linkedin: "https://linkedin.com/in/afraz-k-a40b82242",
  gmail: "afrazkhan1407@gmail.com",
  location: "Lahore, Pakistan",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop and deploy scalable AI solutions"),
    emoji("⚡ Design and implement machine learning models for actionable insights"),
    emoji("⚡ Architect robust data preprocessing pipelines"),
    emoji(
      "⚡ Optimize model performance through rigorous testing and refinement"
    ),
  ],

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "tensorflow",
      imageSrc: require("./assets/images/tensorflow.png"), // Add your own image path
    },
    {
      skillName: "pytorch",
      imageSrc : require("./assets/images/pytorch.png"), // Add your own image path
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-brain",
    },
    {
      skillName: "computer-vision",
      fontAwesomeClassname: "fas fa-eye",
    },
    {
      skillName: "nlp",
      fontAwesomeClassname: "fas fa-language",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Punjab",
      logo: require("./assets/images/up_logo.png"), // Add your university logo
      subHeader: "Computer Science",
      duration: "November 2020 - June 2024",
      desc: "CGPA: 3.8/4.0",
      descBullets: [],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI/ML Development",
      progressPercentage: "90%",
    },
    {
      Stack: "Data Processing & Engineering",
      progressPercentage: "85%",
    },
    {
      Stack: "Backend Development",
      progressPercentage: "75%",
    },
  ],
  displayCodersrank: false,
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Engineer",
      company: "Ace Money Transfer",
      companylogo: require("./assets/images/ace.png"), // Add company logo
      date: "July 2024 - March 2025",
      desc: "Design and implement machine learning models that deliver actionable insights for critical business operations.",
      descBullets: [
        "Architect robust data preprocessing pipelines handling complex financial transaction datasets",
        "Drive cross-functional collaboration to align AI solutions with strategic business initiatives",
        "Optimize model performance through rigorous testing and innovative refinement techniques",
      ],
    },
    {
      role: "AI Intern",
      company: "Rev9 Solutions",
      companylogo: require("./assets/images/rev9_solutions_logo.jpeg"), // Add company logo
      date: "March 2024 - May 2024",
      desc: "Engineered machine learning models to address specific client business challenges and transformed raw data into structured formats suitable for model training and validation. [cite: 4]",
      descBullets: [
        "Conducted comprehensive model evaluation to ensure quality, reliability, and performance. [cite: 4]",
        "Partnered with senior AI engineers to integrate solutions into production environments. [cite: 4]",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: true,
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OF THE PROJECTS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/rr.png"), 
      projectName: "Intellectus: Hybrid Knowledge Retrieval Platform",
      projectDesc: "Architected and deployed a dual-module information retrieval system combining graph-based and semantic search capabilities that increased query accuracy by 40% over traditional methods. [cite: 5]",
      footerLink: [],
    },
    {
      image: require("./assets/images/rr.png"),
      projectName: "KYC - Know Your Customer",
      projectDesc: "Designed and implemented a comprehensive KYC solution that reduced operational costs by €40,000 annually while streamlining customer registration processes. [cite: 9]",
      footerLink: [],
    },
    {
      image: require("./assets/images/rr.png"),
      projectName: "Doc Detector and Classifier",
      projectDesc: "Developed a high-efficiency document analysis system that processes multiple identity document types with 98% field detection accuracy. [cite: 12]",
      footerLink: [],
    },
  ],
  display: true,
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "My Certifications and some of the cool stuff that I have done!",

  achievementsCards: [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle: "DeepLearning.AI",
      image: require("./assets/images/sup.png"), // Add certificate image
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [{ name: "View Certificate", url: "" }],
    },
    {
      title: "Advanced Learning Algorithms",
      subtitle: "DeepLearning.AI",
      image: require("./assets/images/advance.png"), // Add certificate image
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [{ name: "View Certificate", url: "" }],
    },
    {
      title: "Python for Data Science, AI & Development",
      subtitle: "IBM",
      image: require("./assets/images/py.png"), // Add certificate image
      imageAlt: "IBM Logo",
      footerLink: [{ name: "View Certificate", url: "" }],
    },
    {
      title: "Version Control",
      subtitle: "Meta",
      image: require("./assets/images/version.png"), // Add certificate image
      imageAlt: "Meta Logo",
      footerLink: [{ name: "View Certificate", url: "" }],
    },
    {
      title: "Programming for Everybody",
      subtitle: "Coursera",
      image: require("./assets/images/pye.png"), // Add certificate image
      imageAlt: "Coursera Logo",
      footerLink: [{ name: "View Certificate", url: "" }],
    },
  ],
  display: true,
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With a love for developing cool stuff, I enjoy writing and sharing what I have learned.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false,
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false,
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false,
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "03486465743",
  email_address: "afrazkhan1407@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false,
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};