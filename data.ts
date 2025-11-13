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
    whatsapp: "https://wa.me/qr/XXQ44AKPAGVHJ1",
  },
  skills: {
    backend: {
      title: "Backend",
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
      title: "Frontend",
      tools: ["Reactjs", "Typscript", "Javascript", "Tailwind"],
    },
  },
  project: {
    notification_system: {
      title: "Notifcation System (Collaborator)",
      tags: "backend",
      stack: ["Nest.js", "Docker", "Typescript", "Redis", "RabitMQ"],
      short_description:
        "notification system that sends emails and push notifications using separate microservices, communicating asynchronously through a message queue (e.g., RabbitMQ or Kafka).",
      long_description: "",
      problem: "",
      solution: "",
      features: [
        "Get user notifcation prefrences from user service",
        "Api gateway routes the user request to appropriate queue",
        "email service gets the user details from email queue and calls a template service and send to the user",
      ],
      live_link: "",
      github_repo: "",
    },
    country_exchange_api: {
      title: "Country Exchange API",
      tags: "backend",
      stack: ["Javascript", "mySQL"],
      short_description:
        "A RESTful API that fetches country data from an external API, stores it in a database, and provides CRUD operations.",
      long_description: "",
      problem: "",
      solution: "",
      features: [
        "Fetches country data from restcountries.com.",
        "Fetches exchange rates from open.er-api.com.",
        "Caches the data in a MySQL database.",
        "Refresh the data from the external APIs",
        "Get all countries with filtering and sorting",
        "Get a single country by name,Delete a country by name.",
        "Get the status of the database (total countries and last refresh time).",
        "Get a summary image of the data.",
      ],
      live_link: "",
      github_repo:
        "https://github.com/Dev-musty/Country-Currency-and-Exchange-API",
    },
    task_management_AI: {
      title: "Task management AI",
      tags: "backend",
      stack: ["Typescript", "Mastra"],
      short_description:
        "A multi-user task management system where project managers assign tasks to team members, members view and complete their assigned tasks, and project managers can monitor all assigned tasks and track team progress through real-time completion status updates.",
      long_description: "",
      problem: "",
      solution: "",
      features: [
        "AI-Powered Analysis: Leverages Google Gemini 2.5 Flash for intelligent Professional but friendly responses,Clear confirmations and Celebrate completions",
        "Team progress tracking: Task assigners (e.g. product manager) can track task completion status and gets overview of team progress.",
        "Natural Conversation: Chat naturally with the agent to get repository information",
        "Memory System: Maintains conversation context using LibSQL storage and lowdb to persist task,assigner,assignee and due date.",
        "Agent-to-Agent Protocol: Supports A2A (Agent-to-Agent) communication via JSON-RPC 2.0",
        "Observability: Built-in AI tracing and monitoring.",
      ],
      live_link: "",
      github_repo:
        "https://github.com/Dev-musty/Multi-User-Task-Management-System",
    },
  },
};
