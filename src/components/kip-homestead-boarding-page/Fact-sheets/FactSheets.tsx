// import React from 'react'

// const FactSheets = () => {
//     const CardsData = [

//     ]
//   return (
//     <div>FactSheets</div>
//   )
// }

// export default FactSheets
import React from "react";

const FactSheets = () => {
  const cards = [
    {
      id: 1,
      title: "APCA-Boarding-your-Cat_2021_Final",
      imageUrl: "../images/download.svg",
      download: "../files/APCA-Boarding-your-Cat_2021_Final.pdf",
    },
    {
      id: 2,
      title: "APCA-Factsheet_CanineCough_2021",
      imageUrl: "../images/download.svg",
      download: "../files/APCA-Factsheet_CanineCough_2021.pdf",
    },
    {
      id: 3,
      title: "APCA-Cat-Flu_2021_Final",
      imageUrl: "../images/download.svg",
      download: "../files/APCA-Cat-Flu_2021_Final.pdf",
    },
    {
      id: 4,
      title: "APCA-Factsheet_Bloat_2021_Final",
      imageUrl: "../images/download.svg",
      download: "../files/APCA-Factsheet_Bloat_2021_Final.pdf",
    },
    {
      id: 5,
      title: "APCA-Boarding-your-Dog_2021_Final",
      imageUrl: "../images/download.svg",
      download: "../files/APCA-Boarding-your-Dog_2021_Final.pdf",
    },
  ];

  return (
    <div className="mb-12">
      <div className="pl-4 lg:pl-0  pt-[40px] pb-[40px] mt-[50px]">
        <h1 className="text-[16px] font-[400] mt-[20px]">Our Facts Sheets</h1>
      </div>
      <div className="card-container mb-[20px] items-center md:items-start gap-y-[20px] lg:gap-y-[0px] gap-x-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card flex flex-col pl-4 lg:p-0 lg:items-start max-w-[290x]"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              width={38}
              height={38}
              className="mb-[16px]"
            />
            <h2 className="text-[15px] mb-[5px]">{card.title}</h2>
            <a
              href={card.download}
              download={card.download}
              className="text-[#5f062f] text-[13px]"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactSheets;
