import Event from "@/components/events/event";

const images = [
    ["/events/TechTalk/1.png", "/events/TechTalk/2.png", "/events/TechTalk/3.png"],
    ["/events/TechTalk/4.png", "/events/TechTalk/5.png", "/events/TechTalk/6.png"],
    ["/events/TechTalk/7.png", "/events/TechTalk/8.png", "/events/TechTalk/9.png"],
    ["/events/TechTalk/10.png", "/events/TechTalk/11.png", "/events/TechTalk/12.png"],
    ["/events/TechTalk/13.png", "/events/TechTalk/14.png", "/events/TechTalk/15.png"],
    ["/events/TechTalk/16.png", "/events/TechTalk/17.png", "/events/TechTalk/18.png"],
    ["/events/TechTalk/19.png", "/events/TechTalk/20.png", "/events/TechTalk/21.png"],
    ["/events/TechTalk/22.png", "/events/TechTalk/23.png", "/events/TechTalk/24.png"],
    ["/events/TechTalk/25.png", "/events/TechTalk/26.png", "/events/TechTalk/27.png"],
];

export default function ConnectingDots() {
    return (
        <Event
            eventTitle={"TechTalk"}
            description={"TechTalk is an engaging awareness session designed to enlighten university students about the evolving IT industry, emerging technologies, and diverse career paths. Delivered by seasoned professionals or partnering companies from the tech world, each session offers firsthand insights, real-world experiences, and practical advice, helping students align their academic journey with future industry demands through meaningful collaboration and conversation."}
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