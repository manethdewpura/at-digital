import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

function FAQCard({ question, answer, className = "" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`rounded-[8px] bg-primary/10 ${className}`}
    >
      {/* Question Header */}
      <div
        className="flex items-center justify-between p-[20px] cursor-pointer hover:bg-primary/20 transition-colors duration-200"
        onClick={toggleExpanded}
      >
        <h3 className={`text-[18px] font-semibold flex-1 pr-[16px] transition-colors duration-200 ${
          isExpanded ? "text-primary" : "text-text"
        }`}>
          {question}
        </h3>
        <button
          className="flex items-center justify-center w-[32px] h-[32px] duration-200 flex-shrink-0"
          aria-label={isExpanded ? "Collapse answer" : "Expand answer"}
        >
          {isExpanded ? (
            <HiMinus className="w-[32px] h-[32px]" />
          ) : (
            <HiPlus className="w-[32px] h-[32px]" />
          )}
        </button>
      </div>

      {/* Answer Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-[20px] pb-[20px] pt-0">
          <div className="border-t border-gray-100 pt-[16px]">
            <p className="text-[16px] text-text-light leading-[24px]">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQCard;
