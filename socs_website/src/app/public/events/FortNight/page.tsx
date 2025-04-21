import Event from "@/components/events/event";

const images = [
  ["/events/FortNight/1.png", "/events/FortNight/2.png", "/events/FortNight/3.png"],
  ["/events/FortNight/4.png", "/events/FortNight/5.png", "/events/FortNight/6.png"],
  ["/events/FortNight/7.png", "/events/FortNight/8.png", "/events/FortNight/9.png"],
  ["/events/FortNight/10.png", "/events/FortNight/11.png", "/events/FortNight/12.png"],
  ["/events/FortNight/13.png", "/events/FortNight/14.png", "/events/FortNight/15.png"],
  ["/events/FortNight/16.png", "/events/FortNight/17.png", "/events/FortNight/18.png"],
  ["/events/FortNight/19.png", "/events/FortNight/20.png", "/events/FortNight/21.png"],
  ["/events/FortNight/22.png", "/events/FortNight/23.png", "/events/FortNight/24.png"],
  ["/events/FortNight/25.png", "/events/FortNight/26.png", "/events/FortNight/27.png"],
];

export default function FortNight() {
  return (
      <Event
          eventTitle={"FortNight"}
          description={`Fortnight is a monthly knowledge-sharing event organized by the Society of Computer Sciences (SOCS) where students from the Faculty of Computing present insightful sessions on various tech-related topics. Designed to foster peer learning and intellectual engagement, the event also includes fun activities, creating an interactive and enjoyable environment. Fortnight serves as a platform for students to enhance their presentation skills, exchange knowledge, and stay updated with emerging trends in the field of computing.`}
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
