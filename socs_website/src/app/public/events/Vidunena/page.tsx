import Event from "@/components/events/event";

const images = [
    ["/events/Vidunena/1.png", "/events/Vidunena/2.png", "/events/Vidunena/3.png"],
    ["/events/Vidunena/4.png", "/events/Vidunena/5.png", "/events/Vidunena/6.png"],
    ["/events/Vidunena/7.png", "/events/Vidunena/8.png", "/events/Vidunena/9.png"],
    ["/events/Vidunena/10.png", "/events/Vidunena/11.png", "/events/Vidunena/12.png"],
    ["/events/Vidunena/13.png", "/events/Vidunena/14.png", "/events/Vidunena/15.png"],
    ["/events/Vidunena/16.png", "/events/Vidunena/17.png", "/events/Vidunena/18.png"],
    ["/events/Vidunena/19.png", "/events/Vidunena/20.png", "/events/Vidunena/21.png"],
    ["/events/Vidunena/22.png", "/events/Vidunena/23.png", "/events/Vidunena/24.png"],
    ["/events/Vidunena/25.png", "/events/Vidunena/26.png", "/events/Vidunena/27.png"],
];

const description = "Vidunena is a free online seminar series aimed at empowering Advanced Level ICT students with essential knowledge and resources for their exams. Conducted via Zoom and YouTube Live, the program provides expert-led sessions, practice question papers, and comprehensive tutorial materials—all at no cost—ensuring students receive the best guidance to excel in their ICT studies."
export default function Vidunana() {
    return (
        <Event
            eventTitle={"Vidunana"}
            description={description}
            images1={images[0]}
            images2={images[1]}
            images3={images[2]}
            images4={images[3]}
            images5={images[4]}
            images6={images[5]}
            images7={images[6]}
            images8={images[7]}
            images9={images[8]}/>

    );
}