import React from "react";
import { Poppins } from "next/font/google";

const poppins3 = Poppins({ weight: "300", subsets: ["latin"] });

interface NewsCardProps {
    title: string;
    description: string;
    imageSrc: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, imageSrc }) => {
    return (
        <div className="w-full max-w-[360px] h-[470px] rounded-[17px] overflow-hidden bg-gray-800 relative shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1">
            <div className="w-full h-2/3 relative rounded-t-[17px]">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover rounded-t-[17px]"
                />
            </div>
            <div className="w-full h-[1px] bg-gray-600"></div>
            <div className="w-full h-1/3 flex flex-col items-center justify-center p-4">
                <h2 className={`${poppins3.className} text-white text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 text-center`}>
                    {title}
                </h2>
                <div className="text-white text-sm md:text-base lg:text-lg text-center overflow-y-auto max-h-[150px] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
