import React from "react";

const AdvisorCard = ({ name, role, image, companies, linkedIn }) => {
  return (
    <div className="bg-[#17181D] rounded-2xl p-4 sm:p-6 flex flex-col  border border-[#292934] w-[400px] mx-auto">
      <div className="flex items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover self-start"
          />
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="text-white text-lg sm:text-xl font-medium">
                {name}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">{role}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-2 sm:gap-4">
              {companies.map((company, index) => (
                <div key={index} className="py-1 sm:py-2">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-5 sm:h-6"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 self-start ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="none"
          >
            <path
              fill="#fff"
              d="M5.634 2.874c-1.13 0-2.048.916-2.048 2.046s.916 2.068 2.046 2.068S7.68 6.05 7.68 4.92c0-1.13-.916-2.046-2.046-2.046Zm9.99 5.424c-1.72 0-2.704.9-3.175 1.794h-.05V8.539H9.01V19.92h3.53v-5.634c0-1.485.113-2.92 1.95-2.92 1.811 0 1.838 1.693 1.838 3.014v5.54h3.53V13.67c0-3.059-.657-5.37-4.234-5.37Zm-11.757.24v11.383h3.534V8.54H3.867Z"
              opacity=".64"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const AdvisorsSection = () => {
  const advisors = [
    {
      name: "Dr. Damien Challet",
      role: "Scientific Advisor & Mentor",
      image:
        "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea01_damien.webp",
      linkedIn: "#",
      companies: [
        {
          name: "Entropy Builder",
          logo: "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea06_CentraleSupe%CC%81lec.svg",
        },
        {
          name: "EPFL",
          logo: "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea0b_EPFL.svg",
        },
      ],
    },
    {
      name: "Dr. Diana Mile",
      role: "Legal Advisor",
      image:
        "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9ff_diana.webp",
      linkedIn: "#",
      companies: [
        {
          name: "Kripteus",
          logo: "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea45_kripteus.svg",
        },
      ],
    },
  ];

  return (
    <div className="py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium text-center mb-8 sm:mb-16">
          Advisors
        </h2>
        {/* <div className="flex md:flex-row sm:flex-col flex-row items-center justify-center gap-6 flex-wrap  px-12 xl:px-48">
  {advisors.map((advisor, index) => (
    <AdvisorCard key={index} {...advisor} />
  ))}
</div> */}
        <div className="flex md:flex-row lg:flex-row xl:flex-row flex-col items-center justify-center gap-6 flex-wrap px-12 xl:px-48">
          {advisors.map((advisor, index) => (
            <AdvisorCard key={index} {...advisor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisorsSection;
