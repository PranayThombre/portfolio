const projects = [
  {
    id: 1,
    title: "SkillYatra – EdTech Platform",
    logo: "/images/skillyatra.png",
    github: "https://github.com/PranayThombre/Skillyatra-an-edtech-website", 
    live: "https://skillyatra-an-edtech-website.vercel.app/", 
    tech: "MERN Stack | Tailwind CSS | JWT Authentication",
    description:
      "An EdTech platform designed to help students practice coding, track their learning journey, and access structured resources. It focuses on personalized progress tracking and a seamless learning experience.",
    features: [
      "User authentication with JWT (Signup/Login)",
      "Topic-wise video learning modules",
      "Progress tracking system",
      "Interactive and responsive UI with Tailwind CSS",
      "Backend APIs built with Express and MongoDB",
      "Scalable architecture with clean code practices",
    ],
  },

  {
    id: 2,
    title: "Shopping Cart Website",
    logo: "/images/shopping.png",
    github: "https://github.com/PranayThombre/reactShopingApp.git",
    live: "https://shopping-webapp-redux.netlify.app/",
    tech: "React JS | Redux | Tailwind CSS  ",
    description:
      "A modern and responsive shopping cart application built with React. It allows users to browse products, add items to the cart, adjust quantities, and see the total price dynamically.",
    features: [
      "Product listing with images, names, and prices",
      "Add to cart functionality with quantity management",
      "Remove items from cart",
      "Real-time total price calculation",
      "Fully responsive design using Tailwind CSS",
      "Reusable components and clean code structure",
    ],
  },

  {
    id: 3,
    title: "Random GIFS Generator",
    logo: "/images/random-gifs.png",
    github: "https://github.com/PranayThombre/Random-gifs-generator.git",
    live: "https://simple-random-gifs-generator.netlify.app",
    tech: "React JS | Tailwind CSS | CSS3",
    description:
      "A fun and interactive web app that fetches and displays random or category-based GIFs using the GIPHY API. ",
    features: [
      "Fetches random GIFs using GIPHY API",
      "User can select categories (e.g., Dog, Cat, Dance, etc.)",
      "Instant loading with loader animations",
      "Clean and responsive UI built with Tailwind CSS",
      "Responsive, and visually appealing",
    ],
  },

  {
    id: 4,
    title: "Simple Blog Website",
    logo: "/images/Simple-blog.png",
    github: "https://github.com/PranayThombre/simpleBlogSite.git",
    live: "https://simple-blogsite-reader.netlify.app",
    tech: "React JS | Tailwind CSS | CSS3",
    description:
      "A minimal and modern blog platform where users can browse and read blog posts. Built using React and Tailwind CSS, this app features dynamic routing, reusable components, and a simple UI with clean layouts.",
    features: [
      "Home page with list of blogs",
      "Individual blog post view with dynamic routing",
      "Responsive design with modern UI",
      "Reusable components for better structure",
      "Data fetching using custom hooks (axios)",
    ],
  },
];

export default projects;
