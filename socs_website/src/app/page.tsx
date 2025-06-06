"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Committee_member_gallery from "@/components/committee_member_gallery";
import Footer from "@/components/footer";
import AnnouncementsSection from "@/components/sections/announcementSection";
import CollaborationsSection from "@/components/sections/CollaborationsSection";
import { Poppins } from "next/font/google";

const poppins4 = Poppins({ weight: "400", subsets: ["latin"] });
const poppins5 = Poppins({ weight: "500", subsets: ["latin"] });

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 300); // 600ms delay before transition starts

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar></Navbar>
      {/* Hero Section */}
      <section>
        <div className="relative flex items-center justify-center h-[700px] md:h-screen bg-black overflow-hidden">
          <div className="absolute inset-0 z-0 flex justify-center items-center">
            <Image
              src="/images/socs_with_head.png"
              alt="Robotic Head"
              width={600}
              height={500}
              className={`z-0 opacity-90 transform transition-transform duration-[1200ms] 
                        ${
                          isLoaded
                            ? "scale-[0.8] md:scale-[1.05] sm:scale-[0.9]"
                            : "scale-[0.6] md:scale-[0.75] sm:scale-[0.6]"
                        }`}
            />
          </div>
          <div className="z-0 flex space-x-4">
            <Image
              src="/images/robotic-head.png"
              alt="Robotic Head"
              width={500}
              height={500}
              className={`z-10 opacity-100 transform transition-transform duration-[1200ms] 
                        ${
                          isLoaded
                            ? "scale-[0.9] md:scale-[1.35] sm:scale-[1.1]"
                            : "scale-[1.0] md:scale-[1.6] sm:scale-[1.2]"
                        }`}
            />
            <div className="absolute bottom-10 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent blur-md"></div>
          </div>
        </div>
        <div className="z-10 text-center">
          <h1 className={`${poppins4.className} text-3xl sm:text-4xl md:text-6xl  tracking-tight`}>
            SOCIETY OF COMPUTER SCIENCES
          </h1>
          <p className={`${poppins4.className} text-l sm:text-xl md:text-2xl mt-4`}>
            Sabaragamuwa University of Sri Lanka
          </p>
          <p className={`${poppins4.className} mt-10 mx-auto max-w-5xl p-3 text-[12px] sm:text-[14px] md:text-[16px]`}>
            The Society of Computer Sciences - SOCS at Sabaragamuwa University
            of Sri Lanka is a leading student organization within the university
            and the Faculty of Computing, dedicated to enhancing knowledge,
            experience, and engagement in the field of computer science. The
            society actively organizes a variety of events, including workshops,
            hackathons, guest lectures, and networking sessions, providing
            students with hands-on learning opportunities and industry exposure.
          </p>
        </div>
      </section>

      {/* Announcements Section */}
      <AnnouncementsSection></AnnouncementsSection>

      {/* Executive Committee Section */}
      <section className="text-center pt-16 bg-black">
        <h2
          className={`${poppins5.className} text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-white`}
        >
          EXECUTIVE COMMITTEE
        </h2>
        <p className={`${poppins5.className} text-lg mb-12 text-gray-400`}>
          Year 2024 / 2025
        </p>
        <Committee_member_gallery />
      </section>

      <CollaborationsSection></CollaborationsSection>
      <div className="px-[30px] lg:px-[100px] md:px-[50px] pb-[100px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[
      { id: 1, img: "/images/ieee.png" },
      { id: 2, img: "/images/echonlabs.png" },
      { id: 3, img: "/images/taproit.png" }
    ].map((item) => (
      <div key={item.id} className="flex justify-center">
        <Image
          src={item.img}
          alt={`Collaborator ${item.id}`}
          width={250}
          height={250}
          className="w-[250px] h-[250px] object-cover"
        />
      </div>
    ))}
  </div>
</div>

      {/* Banner Section */}
      <section className="relative text-center" style={{ height: "500px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/home_banner.png)" }}
        ></div>
      </section>

      <Footer></Footer>
    </div>
  );
}
