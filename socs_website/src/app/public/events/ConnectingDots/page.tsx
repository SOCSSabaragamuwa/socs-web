import Event from "@/components/events/event";

const images = [
    ["/events/ConnectingDots/1.png", "/events/ConnectingDots/2.png", "/events/ConnectingDots/3.png"],
    ["/events/ConnectingDots/4.png", "/events/ConnectingDots/5.png", "/events/ConnectingDots/6.png"],
    ["/events/ConnectingDots/7.png", "/events/ConnectingDots/8.png", "/events/ConnectingDots/9.png"],
    ["/events/ConnectingDots/10.png", "/events/ConnectingDots/11.png", "/events/ConnectingDots/12.png"],
    ["/events/ConnectingDots/13.png", "/events/ConnectingDots/14.png", "/events/ConnectingDots/15.png"],
    ["/events/ConnectingDots/16.png", "/events/ConnectingDots/17.png", "/events/ConnectingDots/18.png"],
    ["/events/ConnectingDots/19.png", "/events/ConnectingDots/20.png", "/events/ConnectingDots/21.png"],
    ["/events/ConnectingDots/22.png", "/events/ConnectingDots/23.png", "/events/ConnectingDots/24.png"],
    ["/events/ConnectingDots/25.png", "/events/ConnectingDots/26.png", "/events/ConnectingDots/27.png"],
];

export default function ConnectingDots() {
    return (
        <Event
            eventTitle={"Connecting Dots"}
            description={"Connecting Dots is an interactive awareness session bridging the gap between academia and the industry, offering valuable insights into the latest trends, emerging technologies, and career opportunities in the IT world. Through engaging discussions, expert talks, and fun activities, students gain a deeper understanding of the industry landscape while expanding their professional networks in an exciting and informative atmosphere."}
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