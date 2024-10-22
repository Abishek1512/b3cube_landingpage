"use client";

import PropTypes from "prop-types";

function FaqCard({title, content, index, isOpen, toggleAccordion, styles, renderHtmlContent=false}) {
  return (
    <div className={`mb-2 transition-all duration-500 overflow-hidden`}>
      {/* Accordion Header */}
      <div className={`${styles.faqbg}`}>
        <div className="flex flex-col transition-all duration-500">
          <div className="flex justify-between items-center z-10 text-lg font-bold p-6 relative cursor-pointer w-full" onClick={() => toggleAccordion(index)}>
            <h2 className="text-white w-10/12">{title}</h2>
            <span className="rounded-[6px] flex justify-center items-center w-[30px] h-[30px] transition-all duration-500">
              {isOpen ? (
                <div className="rounded-[6px] bg-white bg-opacity-20 w-full h-full flex justify-center items-center transition-all duration-500 opacity-100">
                  <div className="bg-white w-3 h-[1.5px]"></div>
                  <div className="bg-white w-3 h-[1.5px] absolute transform transition-transform duration-500 rotate-180"></div>
                </div>
              ) : (
                <div className="transition-all duration-500 opacity-100 bg-white bg-opacity-0 w-full h-full flex justify-center items-center">
                  <div className="bg-white w-3 h-[1.5px]"></div>
                  <div className="bg-white w-3 h-[1.5px] absolute transform transition-transform duration-500 rotate-90"></div>
                </div>
              )}
            </span>
          </div>

          {/* Accordion Content */}
          <div
            className={`text-[#b7b8be] text-lg mb-0 leading-[1.6] transition-all duration-500 ${
              isOpen ? "opacity-100 max-h-[1500px]" : "opacity-0 max-h-0"
            }`}
          >
            {renderHtmlContent ? <>{content}</> :<p
              className="pb-6 pl-6 pr-6"
              dangerouslySetInnerHTML={{__html: content}}
            ></p>}
          </div>
        </div>
      </div>
    </div>
  );
}

// Define PropTypes for the component to ensure the correct data is passed
FaqCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
};

export default FaqCard;
