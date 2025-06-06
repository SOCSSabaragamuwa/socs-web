"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {useEffect, useState} from "react";
import {supabase} from "@/services/supabaseClient";
import {Poppins} from "next/font/google";
import NewsCard from "@/components/cards/newsCard";

interface NewsItem {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    special: string;
}

const poppins3 = Poppins({weight: "300", subsets: ["latin"]});

export default function News() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showImage, setShowImage] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [specialNews, setSpecialNews] = useState<NewsItem[]>([]);
    const [regularNews, setRegularNews] = useState<NewsItem[]>([]);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const {data, error} = await supabase.from("news").select("*");

                if (error) throw error;

                const special = data.filter((news: NewsItem) => news.special === "yes");
                const regular = data.filter((news: NewsItem) => news.special !== "yes");

                setSpecialNews(special);
                setRegularNews(regular);

                setNewsItems(data || []);
            } catch (error) {
                console.error("Error fetching news data:", error);
            }
        };

        fetchNews();
    }, []);

    useEffect(() => {
        if (specialNews.length > 1 && !isHovered) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % specialNews.length);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [specialNews, isHovered]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(false);
            setFadeIn(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-black min-h-screen">
            <Navbar/>
            <section>
                <div className="text-center">
                    <h1 className={`${poppins3.className} text-white text-4xl md:text-7xl mt-16 mb-6 md:mb-10`}>
                        News
                    </h1>

                    {showImage && newsItems.length > 0 && (
                        <div className="flex justify-center mt-2 relative">
                            <img
                                src="/images/news.png"
                                alt="News Image"
                                className="w-auto max-w-full h-48 md:h-96"
                            />
                            <div
                                className="absolute inset-0 bottom-0 h-3/4 bg-gradient-to-t from-black to-transparent"/>
                        </div>
                    )}

                    <div
                        className={`flex justify-center mt-4 ${
                            showImage ? "mt-8" : "mt-2"
                        } transition-all duration-500 ${
                            fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    >
                        <div
                            className="w-full max-w-[1250px] h-[430px] flex flex-col md:flex-row relative rounded-lg mx-auto px-6"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Left Shape */}
                            <div
                                className="flex-1 flex items-center justify-center relative rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                                style={{
                                    flex: "3 1 0%",
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderColor: "white",
                                    background: "rgba(58, 58, 58, 0.6)",
                                }}
                            >
                                <div
                                    className="w-full h-full relative overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                                    {specialNews.length > 0 && (
                                        <img
                                            src={specialNews[currentIndex]?.imageSrc}
                                            alt={specialNews[currentIndex]?.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Right Shape */}
                            <div
                                className="flex-1 flex flex-col items-center justify-center relative rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
                                style={{
                                    flex: "1 1 0%",
                                    borderWidth: "0.5px",
                                    borderStyle: "solid",
                                    borderColor: "white",
                                    background: "rgba(58, 58, 58, 0.8)",
                                }}
                            >
                                <h2 className={`${poppins3.className} text-white text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 mt-4 md:mt-6`}>
                                    {specialNews[currentIndex]?.title}
                                </h2>
                                <div
                                    className={`${poppins3.className} text-white text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] mx-10 my-10 font-semibold tracking-wide leading-relaxed drop-shadow-md z-10 overflow-y-auto max-h-[100px] md:max-h-[200px]`}
                                >
                                    {specialNews[currentIndex]?.description}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dot Slider */}
                    <div className="flex justify-center mt-[100px] sm:mt-[50px]">
                        {specialNews.map((_, index) => (
                            <div
                                key={index}
                                className={`mx-1 cursor-pointer ${
                                    currentIndex === index
                                        ? "bg-white w-14 h-2"
                                        : "bg-gray-600 w-2 h-2"
                                } rounded-full transition-all duration-1000`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center mt-24">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
                            {regularNews.map((newsItem) => (
                                <NewsCard
                                    key={newsItem.id}
                                    title={newsItem.title}
                                    description={newsItem.description}
                                    imageSrc={newsItem.imageSrc}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}