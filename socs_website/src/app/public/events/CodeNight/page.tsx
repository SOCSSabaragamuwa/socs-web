import Event from "@/components/events/event";

const images = [
    ["/events/CodeNight/1.png", "/events/CodeNight/2.png", "/events/CodeNight/3.png"],
    ["/events/CodeNight/4.png", "/events/CodeNight/5.png", "/events/CodeNight/6.png"],
    ["/events/CodeNight/7.png", "/events/CodeNight/8.png", "/events/CodeNight/9.png"],
    ["/events/CodeNight/10.png", "/events/CodeNight/11.png", "/events/CodeNight/12.png"],
    ["/events/CodeNight/13.png", "/events/CodeNight/14.png", "/events/CodeNight/15.png"],
    ["/events/CodeNight/16.png", "/events/CodeNight/17.png", "/events/CodeNight/18.png"],
    ["/events/CodeNight/19.png", "/events/CodeNight/20.png", "/events/CodeNight/21.png"],
    ["/events/CodeNight/22.png", "/events/CodeNight/23.png", "/events/CodeNight/24.png"],
    ["/events/CodeNight/25.png", "/events/CodeNight/26.png", "/events/CodeNight/27.png"],
];

const description = `CodeNight is an intense overnight coding marathon designed exclusively for 2nd and 3rd-year undergraduates, challenging them to push their coding limits. Participants engage in algorithm battles and MVP-building tasks, solving real-world problems with innovative solutions. It’s not just a competition—it’s a test of endurance, creativity, and technical brilliance in an electrifying, collaborative environment.`

export default function CodeNight() {
    return (
        <Event
            eventTitle={"Code Night"}
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