"use client";
import Navbar from "@/components/navbar";
import ImageSlider from "@/components/cardSliderPage";
import Footer from "@/components/footer";
import {Poppins} from "next/font/google";
import EventNavbar from "@/components/events/eventsNavBar";
import {useEffect, useState} from "react";
import {supabase} from "@/services/supabaseClient";
import NewsCard from "@/components/cards/newsCard";

const poppins3 = Poppins({weight: "300", subsets: ["latin"]});

type EventProps = {
    eventTitle: string;
    description: string;
    images1: string[];
    images2: string[];
    images3: string[];
    images4: string[];
    images5: string[];
    images6: string[];
    images7: string[];
    images8: string[];
    images9: string[];
};

interface EventUpdate {
    id: string;
    title: string;
    description: string;
    image: string;
    event?: string;
}

function Event({eventTitle, images1,images2,images3,images4,images5,images6,images7,images8,images9, description}: EventProps) {
    const [eventUpdates, setEventUpdates] = useState<EventUpdate[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEventNews = async () => {
            const { data, error } = await supabase.from("events").select("*").eq("event", eventTitle);

            if (error) {
                console.error("Failed to fetch event updates:", error.message);
            } else {
                setEventUpdates(data || []);
            }
            setLoading(false);
        };

        fetchEventNews();
    }, [eventTitle]);

    return (
        <div className="bg-black text-white">
            <Navbar/>
            <div className="flex flex-col py-[100px] justify-center items-center relative">
                <h1 className={`${poppins3.className} absolute text-[100px] font-extrabold text-gray-300`}>
                    Events
                </h1>
            </div>

            <EventNavbar/>

            <div className="flex flex-col py-[100px] justify-center items-center relative">
                <h1 className={`${poppins3.className} text-center absolute text-[60px] font-extrabold text-gray-300`}>
                    {eventTitle}
                </h1>
            </div>

            <div className="grid grid-cols-6 grid-rows-2 gap-4  md:px-[100px]">
                <div>
                    <div className="col-span-2 col-start-1 row-start-2 hidden md:block">
                        <div className="col-start-2 row-start-1">
                            <ImageSlider images={images1}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col-span-2 col-start-1 row-start-2 hidden sm:block">
                        <div className="col-start-2 row-start-1">
                            <ImageSlider images={images2}/>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 row-start-2 hidden md:block">
                    <div className="col-span-2 col-start-1 row-start-2">
                        <div className="col-start-2 row-start-1">
                            <ImageSlider images={images3}/>
                        </div>
                    </div>
                </div>
                <div className="col-start-2 row-start-2 hidden sm:block">
                    <div className="col-span-2 col-start-1 row-start-2">
                        <div className="col-start-2 row-start-1">
                            <ImageSlider images={images4}/>
                        </div>
                    </div>
                </div>
                <div
                    className="col-span-6 sm:col-span-2 row-span-2 cols-start-2 sm:col-start-3 row-start-1 p-10 sm:p-0">
                    <div className="col-span-2 col-start-1 row-start-2">
                        <div className="col-start-2 row-start-1">
                            <ImageSlider images={images5}/>
                        </div>
                    </div>
                </div>
                <div className="col-start-5 row-start-1 hidden sm:block">
                    <div className="col-span-2 col-start-1 row-start-2">
                        <div className="col-start-2 row-start-1">
                            <ImageSlider images={images6}/>
                        </div>
                    </div>
                </div>
                <div className="col-start-6 row-start-1 hidden md:block">
                    <div className="col-span-2 col-start-1 row-start-2">
                        <div className="col-start-2 row-start-1">
                            <ImageSlider images={images7}/>
                        </div>
                    </div>
                </div>
                <div className="col-start-5 row-start-2 hidden sm:block">
                    <div className="col-span-2 col-start-1 row-start-2">
                        <div className="col-start-2 row-start-1">
                            <ImageSlider images={images8}/>
                        </div>
                    </div>
                </div>
                <div className="col-start-6 row-start-2 hidden md:block">
                    <div className="col-span-2 col-start-1 row-start-2">
                        <div className="col-start-2 row-start-1">
                            <ImageSlider images={images9}/>
                        </div>
                    </div>
                </div>
            </div>


            <p className="text-center text-lg mt-16 mx-10 sm:mx-20 md:mx-28">{description}</p>

            <div>
                <h2 className={`${poppins3.className} text-5xl font-semibold mb-4 text-white text-center py-[70px]`}>
                    UPDATES
                </h2>

                <div className="flex justify-center">
                    {loading ? (
                        <p className="text-white">Loading...</p>
                    ) : eventUpdates.length === 0 ? (
                        <p className="text-white text-lg italic">No updates available.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
                            {eventUpdates.map((item) => (
                                <NewsCard
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    imageSrc={item.image}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Event;
