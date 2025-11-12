export const portfolio_data = {
  user_details: {
    first_name: "Ridwan",
    last_name: "Mustapha",
    bio: "I build practical, scalable web applications. From designing APIs to crafting intuitive interfaces, I focus on simplicity, clean code, and reliable performance using React, Node.js, and Express.",
    tag: "Ideas become tools. Concepts become code.",
    linkedin: "https://www.linkedin.com/in/ridwan-mustapha001",
    X: "https://x.com/MustaphaRidwanT?t=Dulet_9YQtuHxWvt0ofbqQ&s=09",
    email: "mailto:Mustapharid19@gmail.com",
    github: "https://github.com/Dev-musty",
    whatsapp: "https://wa.me/qr/XXQ44AKPAGVHJ1"
  },
  skills: {
    backend: {
      title:"Backend",
      tools: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "postgresSQL",
        "prisma",
        "Git",
      ],
    },
    frontend: {
      title:"Frontend",
      tools: ["Reactjs", "Typscript", "Javascript", "Tailwind"],
    },
  },
  project: {
    notification_system: {
      title: "Notifcation System",
      tags: "backend",
      stack: ['Nest.js','Docker','Typescript', 'Redis', 'RabitMQ'],
      short_description: "notification system that sends emails and push notifications using separate microservices, communicating asynchronously through a message queue (e.g., RabbitMQ or Kafka).",
      long_description: "",
      problem: "",
      solution: "",
      features: "",
      links: {
        live: "",
        github_repo: "",
      },
    },
    country_exchange_api: {
      title: "Country Exchange API",
      tags: "backend",
      stack: ['Javascript', 'mySQL'],
      short_description: "A RESTful API that fetches country data from an external API, stores it in a database, and provides CRUD operations.",
      long_description: "",
      problem: "",
      solution: "",
      features: "",
      links: {
        live: "",
        github_repo: "",
      },
    },
    tickect_generator: {
      title: "Ticket Generator",
      tags: "frontend",
      stack: [],
      short_description: "",
      long_description: "",
      problem: "",
      solution: "",
      features: "",
      links: {
        live: "",
        github_repo: "",
      },
    },
  },
};
