export const overviewData = [
  {
    title: "Objective",
    description:
      "The goal of this project was to build a Medicine Management Application with functionalities to list, search, filter, add, edit, and delete medicines using React and Redux Toolkit on the front end, and Django Rest Framework (DRF) on the back end. The application fetches data from the backend, manages global state with Redux, and updates the UI dynamically based on user interactions.",
    mainListItem: [
      {
        leadingListTitle: "",
        leadingListDescription: "",
        leadinglistItem: [{ itemTitle: "", itemDescription: "" }],
      },
    ],
  },

  {
    title: "Key Features Implemented",
    description: "",
    mainListItem: [
      {
        leadingListTitle: "Medicine Listing",
        leadingListDescription: "",
        leadinglistItem: [
          {
            itemTitle: "Description",
            itemDescription:
              "Display a list of medicines with details such as company name, category, medicine name, price, power/strength, creation time, and modification time.",
          },
        ],
      },

      {
        leadingListTitle: "Search Functionality",
        leadingListDescription: "",
        leadinglistItem: [
          {
            itemTitle: "Description",
            itemDescription:
              "Enabled users to search for medicines by medicineName with real-time filtering as they type.",
          },
        ],
      },

      {
        leadingListTitle: "Filter Form",
        leadingListDescription: "",
        leadinglistItem: [
          {
            itemTitle: "Description",
            itemDescription:
              "Provided a form to filter medicines by company || category || one price || price range OR, company && category OR, category && one price OR, category && price range OR, company && one price OR, company && price range OR, company && category && one price && price range.",
          },
        ],
      },

      {
        leadingListTitle: "Add Medicine",
        leadingListDescription: "",
        leadinglistItem: [
          {
            itemTitle: "Description",
            itemDescription: "Allowed users to add new medicines.",
          },
        ],
      },

      {
        leadingListTitle: "Edit Medicine",
        leadingListDescription: "",
        leadinglistItem: [
          {
            itemTitle: "Description",
            itemDescription: "Enabled users to edit existing medicine details.",
          },
        ],
      },

      {
        leadingListTitle: "Delete Medicine",
        leadingListDescription: "",
        leadinglistItem: [
          {
            itemTitle: "Description",
            itemDescription: "Allowed users to delete medicines.",
          },
        ],
      },

      {
        leadingListTitle: "Backend Integration",
        leadingListDescription: "",
        leadinglistItem: [
          {
            itemTitle: "Description",
            itemDescription:
              "Connected the frontend to the Django Rest Framework backend for CRUD operations.",
          },
        ],
      },
    ],
  },

  {
    title: "Technologies Used",
    description: "",
    mainListItem: [
      {
        leadingListTitle: "Frontend",
        leadingListDescription: "",
        leadinglistItem: [
          { itemTitle: "HTML/CSS", itemDescription: "" },
          { itemTitle: "Tailwind CSS", itemDescription: "" },
          { itemTitle: "JavaScript", itemDescription: "" },
          { itemTitle: "React", itemDescription: "" },
          { itemTitle: "React Redux", itemDescription: "" },
          { itemTitle: "Redux Toolkit", itemDescription: "" },
        ],
      },

      {
        leadingListTitle: "Backend",
        leadingListDescription: "",
        leadinglistItem: [
          { itemTitle: "Python", itemDescription: "" },
          { itemTitle: "Django", itemDescription: "" },
          { itemTitle: "Django Rest Framework", itemDescription: "" },
        ],
      },

      {
        leadingListTitle: "Database",
        leadingListDescription: "",
        leadinglistItem: [{ itemTitle: "SQLite", itemDescription: "" }],
      },

      {
        leadingListTitle: "Version Control",
        leadingListDescription: "",
        leadinglistItem: [
          { itemTitle: "Git", itemDescription: "" },
          { itemTitle: "GitHub", itemDescription: "" },
        ],
      },

      {
        leadingListTitle: "Other",
        leadingListDescription: "",
        leadinglistItem: [
          { itemTitle: "Axios and Fetch for API calls", itemDescription: "" },
          { itemTitle: "React Router for navigation", itemDescription: "" },
        ],
      },
    ],
  },

  {
    title: "Structuring Folders",
    description: "",
    mainListItem: [
      {
        leadingListTitle: "Frontend",
        leadingListDescription: "",
        leadinglistItem: [
          { itemTitle: "assets/", itemDescription: "Contains static files" },
          {
            itemTitle: "components/",
            itemDescription: "Contains reusable React components",
          },
          {
            itemTitle: "redux/",
            itemDescription: "Contains Redux reducers and store configuration",
          },
          { itemTitle: "pages/", itemDescription: "Contains page components" },
          {
            itemTitle: "routes/",
            itemDescription: "Contains React Router configuration",
          },
        ],
      },

      {
        leadingListTitle: "Backend",
        leadingListDescription: "",
        leadinglistItem: [
          { itemTitle: "models/", itemDescription: "Contains Django models" },
          {
            itemTitle: "serializers/",
            itemDescription: "Contains Django Rest Framework serializers",
          },
          {
            itemTitle: "views/",
            itemDescription:
              "Contains Django Rest Framework views for API endpoints",
          },
          {
            itemTitle: "urls/",
            itemDescription:
              "Contains URL configurations for routing API requests",
          },
        ],
      },
    ],
  },

  {
    title: "Coding Patterns",
    description: "",
    mainListItem: [
      {
        leadingListTitle: "Redux Toolkit",
        leadingListDescription:
          "Used to manage global state and handle asynchronous actions with createSlice and createAsyncThunk.",
        leadinglistItem: [],
      },

      {
        leadingListTitle: "Functional Components",
        leadingListDescription:
          "Employed React functional components with hooks (useState, useEffect, useDispatch, useSelector).",
        leadinglistItem: [],
      },

      {
        leadingListTitle: "Controlled Components",
        leadingListDescription:
          "Managed form inputs as controlled components to handle user inputs and form submissions.",
        leadinglistItem: [],
      },

      {
        leadingListTitle: "API Integration",
        leadingListDescription:
          "Used Axios for making HTTP requests to the backend API, handling responses, and updating the Redux store.",
        leadinglistItem: [],
      },
    ],
  },

  {
    title: "Algorithms/Data Structures",
    description: "",
    mainListItem: [
      {
        leadingListTitle: "Hash Map",
        leadingListDescription:
          "Utilized JavaScript objects (acting as hash maps) to efficiently store and access medicine data by key (e.g., medicine ID).",
        leadinglistItem: [],
      },

      {
        leadingListTitle: "Filtering and Searching",
        leadingListDescription:
          "Implemented filtering and searching algorithms to efficiently retrieve and display medicines based on user input and criteria.",
        leadinglistItem: [],
      },
    ],
  },

  {
    title: "Error Handling",
    description: "",
    mainListItem: [
      {
        leadingListTitle: "",
        leadingListDescription:
          "Implemented error handling in API calls to manage and display errors appropriately in the UI.",
        leadinglistItem: [],
      },

      {
        leadingListTitle: "",
        leadingListDescription:
          "Used try-catch blocks and Redux state to manage loading and error states for better user experience.",
        leadinglistItem: [],
      },
    ],
  },

  {
    title: "Time Optimization",
    description: "",
    mainListItem: [
      {
        leadingListTitle: "Hash Map",
        leadingListDescription:
          "Utilized JavaScript objects (acting as hash maps) to efficiently store and access medicine data by key (e.g., medicine ID).",
        leadinglistItem: [],
      },

      {
        leadingListTitle: "Client site rendering",
        leadingListDescription:
          "For the searching medicines used Redux state and store to fetch data immediately to reduced time.",
        leadinglistItem: [],
      },
    ],
  },

  {
    title: "Responsiveness",
    description: "",
    mainListItem: [
      {
        leadingListTitle: "",
        leadingListDescription:
          "Used Tailwind CSS to build a responsive layout that adapts to different screen sizes and devices.",
        leadinglistItem: [],
      },

      {
        leadingListTitle: "",
        leadingListDescription:
          "Ensured that all UI components are mobile-friendly and accessible on various devices.",
        leadinglistItem: [],
      },
    ],
  },

  {
    title: "Browser Compatibility",
    description: "",
    mainListItem: [
      {
        leadingListTitle: "",
        leadingListDescription:
          "Tested the application across different browsers (Chrome, Firefox, Edge) to ensure consistent performance and appearance.",
        leadinglistItem: [],
      },

      {
        leadingListTitle: "",
        leadingListDescription:
          "Used modern CSS techniques and JavaScript features that are widely supported across major browsers.",
        leadinglistItem: [],
      },
    ],
  },

  {
    title: "Conclusion",
    description:
      "This project successfully demonstrated the integration of a React frontend with a Django backend, managing global state with Redux Toolkit, and implementing essential CRUD functionalities. By following these steps, I have built a robust Medicine Management Application that supports listing, searching, filtering, adding, editing, and deleting medicines. The use of Redux Toolkit facilitated efficient state management, while React provided a dynamic and responsive user interface.",
    mainListItem: [],
  },
];
