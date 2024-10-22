import React from 'react';

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
              <h3 className="text-white text-lg sm:text-xl font-medium">{name}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{role}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-2 sm:gap-4">
              {companies.map((company, index) => (
                <div 
                  key={index}
                  className="py-1 sm:py-2"
                >
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
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
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
      image: "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea01_damien.webp",
      linkedIn: "#",
      companies: [
        { name: "Entropy Builder", logo: "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea06_CentraleSupe%CC%81lec.svg" },
        { name: "EPFL", logo: "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea0b_EPFL.svg" }
      ]
    },
    {
      name: "Dr. Diana Mile",
      role: "Legal Advisor",
      image: "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9ff_diana.webp",
      linkedIn: "#",
      companies: [
        { name: "Kripteus", logo: "https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea45_kripteus.svg" }
      ]
    }
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