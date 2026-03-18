export const projects = [
  {
    id: 1,
    title: "AI Powered Document Search - RAG Query Service",
    category: "Backend | AI | API",
    desc: "A backend service designed to perform Retrieval-Augmented Generation (RAG).",
    longDesc: "This is a backend service designed to perform Retrieval-Augmented Generation (RAG). It ingests documents, breaks them into manageable chunks, embeds them using an OpenRouter embedding model, and stores them in a vector database. The service exposes an API endpoint that answers user questions by retrieving relevant context from the stored documents and generating a response.",
    problem: "",
    solution: "",
    features: [
      "Document Ingestion: Upload and process text documents.",
      "Chunking: Intelligent splitting of documents into context-aware chunks.",
      "Embedding: Uses OpenRouter models to generate vector embeddings for text chunks.",
      "Vector Storage: Integration with vector databases (Pinecone/ChromaDB) for efficient similarity search.",
      "RAG Search: Answers user queries by retrieving relevant document chunks and using an LLM to generate accurate responses."

    ],
    tech: ["NestJS", "OpenRouter", "Pinecone", "Typescript"],
    link: "#",
    github: "https://github.com/Dev-musty/AI-Powered-Document-Search-RAG-Query-Service"
  },
  {
    id: 2,
    title: "Wallet Service",
    category: "Backend | API",
    desc: "A backend wallet service that allows users to deposit money,transfer money and manage transactions.",
    longDesc: "A backend wallet service that allows users to deposit money using Paystack, manage wallet balances, view transaction history, and transfer funds to other users. It supports authentication via Google Sign-In (JWT) and a robust API Key system for service-to-service access.",
    problem: "",
    solution: "",
    features: [
      "Authentication: Google Sign-In (JWT) for users.",
      "Wallet Management: Wallet creation per user,Deposits via Paystack with idempotency key for transaction tracking,Wallet-to-wallet transfers,Balance and transaction history checks.",
      "API Key System: Generate API keys for service access,Permission-based access (deposit, transfer, read),Key expiration (1H, 1D, 1M, 1Y) and rollover,Limit of 5 active keys per user.",
      "Payments: Paystack integration for deposits,Mandatory Webhook handling for transaction verification.",
    ],
    tech: ["NestJS", "Paystack", "typescript", "PostgreSQL"],
    link: "#",
    github: "https://github.com/Dev-musty/Wallet-service"
  },
  {
    id: 3,
    title: "Multi-User Task Management System",
    category: "AI",
    desc: "A team task management system AI agent that allows users to create and manage tasks.",
    longDesc: "This agent allows tasks to be assigned tasks to team members, team members can see their assigned tasks, mark tasks complete when done with them and the assigner can see all tasks they've assigned, track completion status and gets overview of team progress.",
    problem: "",
    solution: "",
    features: [
      "AI-Powered Analysis: Leverages Google Gemini 2.5 Flash for intelligent Professional but friendly responses,Clear confirmations and Celebrate completions",
      "Team progress tracking: Task assigners (e.g. product manager) can track task completion status and gets overview of team progress.",
      "Natural Conversation: Chat naturally with the agent to get repository information",
      "Memory System: Maintains conversation context using LibSQL storage and lowdb to persist task,assigner,assignee and due date.",
      "Agent-to-Agent Protocol: Supports A2A (Agent-to-Agent) communication via JSON-RPC 2.0"
    ],
    tech: ["Mastra AI", "Typescript"],
    link: "#",
    github: "https://github.com/Dev-musty/Multi-User-Task-Management-System"
  },
  {
    id: 4,
    title: "Country Currency and Exchange API",
    category: "Backend | API",
    desc: "A RESTful API that fetches country data from an external API, stores it in a database, and provides CRUD operations.",
    longDesc: "A RESTful API that fetches country data from an external API, stores it in a database, and provides CRUD operations.",
    problem: "",
    solution: "",
    features: [
      "Fetches country data from restcountries.com",
      "Fetches exchange rates from exchangerate-api.com",
      "Caches the data in a MySQL database.",
      "Provides endpoints to:",
      "Refresh the data from the external APIs.",
      "Get all countries with filtering and sorting.[Get a single country by name, Delete a country by name, Get the status of the database (total countries and last refresh time), Get a summary image of the data]."
    ],
    tech: ["Node.js", "Express.js", "mySQL", "Typescript"],
    link: "#",
    github: "https://github.com/Dev-musty/Country-Currency-and-Exchange-API"
  },
  // {
  //     id: 5,
  //     title: "Portfolio v1",
  //     category: "Frontend",
  //     desc: "Previous iteration of the personal portfolio site.",
  //     longDesc: "The initial portfolio site built to showcase frontend skills. It focused on simple CSS animations and clean semantic HTML.",
  //     problem: "Need for a personal digital presence.",
  //   solution: "A lightweight, static site deployed on Render.",
  //   features: [
  //     "Responsive Layout",
  //     "Custom CSS Animations",
  //     "Semantic HTML Structure",
  //     "Fast Static Delivery"
  //   ],
  //   tech: ["HTML", "SCSS", "JS"],
  //   link: "https://mustapha-ridwan.onrender.com/",
  //   github: "#"
  // }
];
