import React from 'react'

type Props = {
    text?: string
}

const ArrowButton = (props: Props) => {
    const { text = "Join the Beta Test" } = props;
  return (
    <div className='flex'>
      <a
        href="#"
        className="text-sm pr-1 pl-4 py-1 font-semibold text-[#040405] inset-bottom-dark bg-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-x-2"
      >
        {text} 
        <div className="w-[44px] h-[44px] bg-[#040405] text-white flex justify-center items-center rounded-lg">
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4688 6.50309L5.99883 2.03309L7.17717 0.854759L13.6588 7.33643L7.17717 13.8181L5.99883 12.6398L10.4688 8.16976H0.3255V6.50309H10.4688Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </a>
    </div>
  );
}

export default ArrowButton