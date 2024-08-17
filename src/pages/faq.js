import { useState, useRef } from "react";

const faqs = [
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework for building web applications.",
  },
  {
    question: "How does Tailwind CSS work?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
  },
  {
    question: "What is the purpose of getStaticProps?",
    answer: "getStaticProps is used to fetch data at build time in Next.js.",
  },
];

const Accordion = ({ question, answer, isOpen, toggleAccordion }) => {
  const contentRef = useRef(null);

  return (
    <div className="rounded-lg mb-4">
      <button
        className="w-full p-4 sm:p-5 md:p-6 text-left bg-black hover:bg-gray-900 border-t border-cyan-400"
        onClick={toggleAccordion}
      >
        <div className="flex justify-between items-center">
          <span className="font-semibold text-sm sm:text-base md:text-lg">
            {question}
          </span>
          <svg
            className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        <div className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 bg-black">
          <p className="text-sm sm:text-base md:text-lg">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const SearchBar = ({ searchTerm, handleSearch }) => (
  <div className="mb-6 sm:mb-8 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
    <input
      type="text"
      placeholder="Search for a Question"
      value={searchTerm}
      onChange={handleSearch}
      className="w-full p-2 sm:p-3 md:p-4 rounded-xl border border-cyan-400 bg-black hover:bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-white"
    />
  </div>
);

const ExpandCollapseAllButton = ({
  areAllExpanded,
  handleExpandCollapseAll,
}) => (
  <div className="flex justify-center md:justify-end mb-6">
    <button
      onClick={handleExpandCollapseAll}
      className="w-full md:w-32 text-sm sm:text-base md:text-lg px-4 py-2 mt-2 bg-white hover:bg-cyan-400 text-black hover:text-white font-semibold rounded-lg transition-all duration-300"
    >
      {areAllExpanded ? "Collapse All" : "Expand All"}
    </button>
  </div>
);

const FAQ = () => {
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = faqs.filter((faq) =>
      faq.question.toLowerCase().includes(searchValue)
    );
    setFilteredFaqs(filtered);
    setExpandedFaqs([]); // Collapse all on new search
  };

  const toggleAccordion = (index) => {
    setExpandedFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleExpandCollapseAll = () => {
    if (expandedFaqs.length === filteredFaqs.length) {
      setExpandedFaqs([]);
    } else {
      setExpandedFaqs(filteredFaqs.map((_, index) => index));
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-black">
      <h1 className="mb-6 sm:mb-8 font-bold text-2xl sm:text-3xl md:text-4xl text-center">
        <span className="text-cyan-400">F</span>requently{" "}
        <span className="text-cyan-400">A</span>sked{" "}
        <span className="text-cyan-400">Q</span>uestions
      </h1>

      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

      <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
        <ExpandCollapseAllButton
          areAllExpanded={expandedFaqs.length === filteredFaqs.length}
          handleExpandCollapseAll={handleExpandCollapseAll}
        />

        {filteredFaqs.length > 0 ? (
          filteredFaqs.map(({ question, answer }, i) => (
            <Accordion
              key={i}
              question={question}
              answer={answer}
              isOpen={expandedFaqs.includes(i)}
              toggleAccordion={() => toggleAccordion(i)}
            />
          ))
        ) : (
          <p className="text-center text-white">
            No questions found matching your query
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
