"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Pioneer {
  name: string;
  role: string;
  imageSrc: string;
}

// Static members for each year
const teamData: Record<number, Pioneer[]> = {
  2023: [
    {
      name: "Mr. V.S.A. Vidanage ",
      role: "President",
      imageSrc: "/pioneers/2023/president.png",
    },
    {
      name: "Mr. G.R.S.N. Wimalasooriya ",
      role: "Secretary",
      imageSrc: "/pioneers/2023/secretary.png",
    },
    {
      name: "Ms. P.M.A.K. Wijeratne",
      role: "Senior Treasurer",
      imageSrc: "/pioneers/2023/streasurer.png",
    },
    {
      name: "Mr. A.C. Kothalawala",
      role: "Treasurer",
      imageSrc: "/pioneers/2023/treasurer.png",
    },
    {
      name: "Mr. ABC Perera",
      role: "Mr. P.W.C.J. Senarathna",
      imageSrc: "/pioneers/2023/vp.png",
    },
    { name: "Mr. R.M.H.K. Ranasinghe",
      role: "Editor",
      imageSrc: "/pioneers/2023/editor.png" },
    {
      name: "Ms. A.M.R.M. Kularathne",
      role: "Vice Secretary",
      imageSrc: "/pioneers/2023/vs.png",
    },
  ],
  2022: [
    {
      name: "Mr. Bihan De Silva",
      role: "President",
      imageSrc: "/pioneers/2022/president.png",
    },
    {
      name: "Mr. Shavinda Wanigasekara",
      role: "Secretary",
      imageSrc: "/pioneers/2022/secretary.png",
    },
    {
      name: "Mr. P. Vigneshwaran",
      role: "Senior Treasurer",
      imageSrc: "/pioneers/2022/treasurer.png",
    },
    {
      name: " Mr. Ishan Randika",
      role: "Treasurer",
      imageSrc: "/pioneers/2022/treasurer.png",
    },
    {
      name: "Mr. Amila Silva",
      role: "Vice President",
      imageSrc: "/pioneers/2022/vp.png",
    },
    { name: "Mr. Aravinda Nawarathne",
      role: "Editor",
      imageSrc: "/pioneers/2022/editor.png" },
    {
      name: "Ms. Madhumini Kodithuwakku",
      role: "Vice Secretary",
      imageSrc: "/pioneers/2022/vs.png",
    },
  ],
  2021: [
    {
      name: "Mr. Nayanajith Priyasad",
      role: "President",
      imageSrc: "/pioneers/2021/president.png",
    },
    {
      name: "Mr. Sapthaka Arthasad",
      role: "Secretary",
      imageSrc: "/pioneers/2021/secretary.png",
    },
    {
      name: "Mr. Banujan Kuhaneswaran",
      role: "Senior Treasurer",
      imageSrc: "/pioneers/2021/treasurer.png",
    },
    {
      name: "Mr. Malindu Shamalka",
      role: "Treasurer",
      imageSrc: "/pioneers/2021/treasurer.png",
    },
    {
      name: "Mr. Yasiru Geevinda",
      role: "Vice President",
      imageSrc: "/pioneers/2021/vp.png",
    },
    {
      name: "Mr. Tharaka Dilruk",
      role: "Editor",
      imageSrc: "/pioneers/2021/editor.png",
    },
    {
      name: "Ms. Pasindi Weerathunge",
      role: "Vice Secretary",
      imageSrc: "/pioneers/2021/vs.png",
    },
  ],
};

// Available years
const years = [2023, 2022, 2021];

const PioneersGallery = () => {
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const selectedYear = years[selectedYearIndex];
  const currentMembers = teamData[selectedYear] || [];

  const handleNextYear = () => {
    if (selectedYearIndex > 0) {
      setSelectedYearIndex(selectedYearIndex - 1);
    }
  };

  const handlePrevYear = () => {
    if (selectedYearIndex < years.length - 1) {
      setSelectedYearIndex(selectedYearIndex + 1);
    }
  };

  return (
    <section className="py-7 bg-black text-white">
      {/* Year Selection with Arrows */}
      <div className="flex items-center justify-center mb-6">
        <button
          onClick={handlePrevYear}
          className="text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50"
          disabled={selectedYearIndex === years.length - 1}
        >
          ◀
        </button>
        <h2 className="text-2xl font-semibold mx-6">
          {selectedYear} / {selectedYear + 1}
        </h2>
        <button
          onClick={handleNextYear}
          className="text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50"
          disabled={selectedYearIndex === 0}
        >
          ▶
        </button>
      </div>

      {/* Members Grid */}
      <motion.div
        key={selectedYear}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 max-w-4xl">
            {currentMembers.slice(0, 4).map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-4 relative">
                  <Image
                    src={member.imageSrc}
                    alt=" "
                    width={192} // Updated width
                    height={192} // Updated height
                    className="rounded-full  object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl">{member.role}</h3>
                <p className="text-sm text-gray-300">{member.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Last 3 members centered */}
        <div className="flex justify-center mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {currentMembers.slice(4).map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-4 relative">
                  <Image
                    src={member.imageSrc}
                    alt=" "
                    width={192} // Updated width
                    height={192} // Updated height
                    className="rounded-full  object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">{member.role}</h3>
                <p className="text-sm text-gray-300">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PioneersGallery;
