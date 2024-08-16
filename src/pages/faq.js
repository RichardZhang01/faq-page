import { useState } from "react";
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

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-900 rounded-lg mb-2">
      <button
        className="w-full p-4 text-left bg-gray-900 hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span className="font-semibold">{question}</span>
          <svg
            className={`stroke-cyan-400 w-6 h-6 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
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
      {isOpen && (
        <div className="p-4 bg-gray-800">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="p-8 bg-black">
      <h1 className="mb-8 font-bold text-4xl text-center">
        <span className="text-cyan-400">F</span>requently{" "}
        <span className="text-cyan-400">A</span>sked{" "}
        <span className="text-cyan-400">Q</span>uestions
      </h1>
      <div>
        {faqs.map(({ question, answer }, i) => (
          <Accordion question={question} answer={answer} key={i} />
        ))}
      </div>
    </div>
  );
}
