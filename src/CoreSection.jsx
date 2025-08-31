import React, { useState, useMemo } from "react";
import Header from "./components/Header";
// import { FaReact } from "react-icons/fa";
import { FaReact, FaJs, FaGithub, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTypescript, SiCplusplus, SiNextdotjs, SiThealgorithms } from "react-icons/si";
import { LuBadgeCheck } from "react-icons/lu";

const CoreSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllCards, setShowAllCards] = useState(false);

 const cardsData = [
  {
    title: "JavaScript",
    description: "Advance",
    category: "frontend",
    subcategory: "javascript",
    metric: "3.4M",
    icon: <FaJs size={32} />,
  },
  {
    title: "HTML",
    description: "Advance",
    category: "frontend",
    subcategory: "html",
    metric: "2.7M",
    icon: <FaHtml5  size={32} />,
  },
  {
    title: "CSS",
    description: "Advance",
    category: "frontend",
    subcategory: "css",
    metric: "2.7M",
    icon: <FaCss3Alt  size={32} />,
  },
  {
    title: "React",
    description: "Intermediate",
    category: "frontend",
    subcategory: "react",
    metric: "1.0M",
    icon: <FaReact  size={32} />,
  },
  {
    title: "SQL",
    description: "Intermediate",
    category: "backend",
    subcategory: "sql",
    metric: "180K",
    icon: <SiMysql  size={32} />,
  },
  {
    title: "Data Structures & Algorithms",
    description: "Intermediate",
    category: "Extra",
    subcategory: "dsa",
    metric: "1.0M",
    icon:<SiThealgorithms size={32}/>, 
  },
  {
    title: "Version Control (Git)",
    description: "Intermediate",
    category: "Extra",
    subcategory: "git",
    metric: "1.0M",
    icon: <FaGithub  size={32} />,
  },
  {
    title: "Node.js",
    description: "Intermediate",
    category: "backend",
    subcategory: "node",
    metric: "243.2K",
    icon: <FaNodeJs  size={32} />,
  },
  {
    title: "MongoDB",
    description: "Intermediate",
    category: "backend",
    subcategory: "mongodb",
    metric: "200K",
    icon: <SiMongodb  size={32} />,
  },
  {
    title: "TypeScript",
    description: "Intermediate",
    category: "frontend",
    subcategory: "typescript",
    metric: "318.2K",
    icon: <SiTypescript  size={32} />,
  },
  {
    title: "Python",
    description: "Beginner",
    category: "core-language",
    subcategory: "python",
    metric: "150.1K",
    icon: <FaPython  size={32} />,
  },
  {
    title: "C++",
    description: "Intermediate",
    category: "core-language",
    subcategory: "cpp",
    metric: "120.5K",
    icon: <SiCplusplus  size={32} />,
  },
  {
    title: "Java",
    description: "Beginner",
    category: "core-language",
    subcategory: "java",
    metric: "110.2K",
    icon: <FaJava  size={32} />,
  },
  {
    title: "Next.js",
    description: "Intermediate",
    category: "frontend",
    subcategory: "nextjs",
    metric: "116.5K",
    icon: <SiNextdotjs  size={32} />,
  },
];

  const filteredCards = useMemo(() => {
    return cardsData.filter((card) => {
      const matchesFilter =
        activeFilter === "all" ||
        card.subcategory.split(" ").includes(activeFilter) ||
        card.category === activeFilter;

      const matchesSearch =
        searchQuery.trim() === "" ||
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.subcategory.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setShowAllCards(false); 
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowAllCards(false);
  };

  const filterButtons = [
    { label: "All", filter: "all" },
    { label: "Database", filter: "database" },
    { label: "Frontend", filter: "frontend" },
    { label: "Backend", filter: "backend" },
    { label: "Core Language", filter: "core-language" },
    { label: "Extra", filter: "extra" },
  ];

  const displayedCards = useMemo(() => {
    return showAllCards ? filteredCards : filteredCards.slice(0, 9); // Display 9 cards for 3 rows
  }, [filteredCards, showAllCards]);

  const hasMoreCards = filteredCards.length > 9; // Check if there are more than 9 cards

  return (
    // <div className="p-6 md:p-10 lg:p-16  min-h-screen text-gray-800 font-inter mt-20">
    //   <div className="max-w-7xl mx-auto">
    //     {/* Header with Logo, Filters and Search */}
    //     <div className="md:flex-row justify-between items-start md:items-center mb-8 gap-4">
    //       <Header
    //         as="h1"
    //         className="text-[20px] md:text-[30px] mb-20 text-center"
    //       >
    //         {"{ Core Skills }"}
    //       </Header>
    //       <div className="flex justify-between items-center space-x-4 flex-wrap mx-15">
    //         <div className="flex flex-wrap gap-2 md:gap-4 overflow-x-auto p-1 no-scrollbar">
    //           {filterButtons.map((button) => (
    //             <button
    //               key={button.filter}
    //               onClick={() => handleFilterClick(button.filter)}
    //               className={`text-sm  px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
    //                 activeFilter === button.filter
    //                   ? "bg-gray-400 text-gray-900"
    //                   : "bg-gray-200 hover:bg-gray-300"
    //               }`}
    //             >
    //               {button.label}
    //             </button>
    //           ))}
    //         </div>
    //         <div className="relative w-full md:w-auto md:min-w-[300px] mt-4 md:mt-0">
    //           <input
    //             id="search-input"
    //             type="text"
    //             placeholder="What are you looking for?"
    //             value={searchQuery}
    //             onChange={handleSearchChange}
    //             className="w-full bg-gray-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
    //           />
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth="1.5"
    //             stroke="currentColor"
    //             className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    //             />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Cards Grid */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-15">
    //       {displayedCards.map((card, index) => (
    //         <div
    //           key={index}
    //           className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col justify-between hover:border-gray-300 transition-colors cursor-pointer h-52"
    //         >
    //           <div className="flex items-center justify-between mb-13">
    //             <div className="w-12 h-12 flex items-center justify-center rounded-lg">
    //               {card.icon}
    //             </div>
    //             <div className="flex items-center space-x-2">
    //               <span className="text-sm font-medium text-gray-500">
    //                 {card.metric}
    //               </span>
    //               <div className="w-6 h-6 flex items-center justify-center rounded-full">
    //                <LuBadgeCheck />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex-grow">
    //             <h3 className="text-xl font-semiBold mb-1">{card.title}</h3>
    //             <p className="text-sm text-gray-500">{card.description}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* "Show More" button */}
    //     {hasMoreCards && (
    //       <div className="mt-8 flex justify-center">
    //         <button
    //           onClick={() => setShowAllCards(!showAllCards)}
    //           className="bg-gray-200 hover:bg-gray-300 py-2 px-6 rounded-lg cursor-pointer transition-colors"
    //         >
    //           {showAllCards ? "Show Less..." : "Show More..."}
    //         </button>
    //       </div>
    //     )}
    //   </div>
    // </div>
     <div className="p-6 md:p-10 lg:p-16 min-h-screen text-gray-800 font-inter mt-0 sm:mt-20 mx-15">
      {/* <script src="https://cdn.tailwindcss.com"></script> */}
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl mb-20 text-center">
          {"{ Core Skills }"}
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 px-6 md:px-0">
          <div className="flex flex-wrap gap-2 md:gap-4 overflow-x-auto p-1">
            {filterButtons.map((button) => (
              <button
                key={button.filter}
                onClick={() => handleFilterClick(button.filter)}
                className={`text-sm px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === button.filter
                    ? "bg-gray-400 text-gray-900"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-auto md:min-w-[300px] mt-4 md:mt-0">
            <input
              id="search-input"
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-gray-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-0">
          {displayedCards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col justify-between hover:border-gray-300 transition-colors cursor-pointer h-52"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg">
                  {card.icon}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-500">
                    {card.metric}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full">
                    <LuBadgeCheck />
                  </div>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl  mb-1">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {hasMoreCards && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAllCards(!showAllCards)}
              className="bg-gray-200 hover:bg-gray-300 py-2 px-6 rounded-lg cursor-pointer transition-colors"
            >
              {showAllCards ? "Show Less..." : "Show More..."}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoreSection;
