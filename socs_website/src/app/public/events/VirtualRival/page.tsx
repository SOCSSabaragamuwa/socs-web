import Event from "@/components/events/event";


const images = [
    ["/events/VR/1.png", "/events/VR/2.png", "/events/VR/3.png"],
    ["/events/VR/4.png", "/events/VR/5.png", "/events/VR/6.png"],
    ["/events/VR/7.png", "/events/VR/8.png", "/events/VR/9.png"],
    ["/events/VR/10.png", "/events/VR/11.png", "/events/VR/12.png"],
    ["/events/VR/13.png", "/events/VR/14.png", "/events/VR/15.png"],
    ["/events/VR/16.png", "/events/VR/17.png", "/events/VR/18.png"],
    ["/events/VR/19.png", "/events/VR/20.png", "/events/VR/21.png"],
    ["/events/VR/22.png", "/events/VR/23.png", "/events/VR/24.png"],
    ["/events/VR/25.png", "/events/VR/26.png", "/events/VR/27.png"],
];

const description = `Virtual Rival (VR) is the ultimate gaming showdown where students battle it out across multiple platforms, from action-packed titles like Call of Duty to thrilling mobile games like PUBG, classic console fights in Mortal Kombat, and entertaining mini-games like Hill Climb. Whether competing solo or as a team, participants can showcase their skills, rise through the ranks, and claim exciting prizes in this electrifying university-wide gaming competition.`

export default function VirtualRival() {
    return (
        <Event
            eventTitle="Virtual Rival"
            description={description}
            images1={images[0]}
            images2={images[1]}
            images3={images[2]}
            images4={images[3]}
            images5={images[4]}
            images6={images[5]}
            images7={images[6]}
            images8={images[7]}
            images9={images[8]}
        />
    );
}
