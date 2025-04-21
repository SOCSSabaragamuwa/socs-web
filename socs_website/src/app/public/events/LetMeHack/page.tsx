import Event from "@/components/events/event";

const images = [
  ["/events/LetMeHack/1.png", "/events/LetMeHack/2.png", "/events/LetMeHack/3.png"],
  ["/events/LetMeHack/4.png", "/events/LetMeHack/5.png", "/events/LetMeHack/6.png"],
  ["/events/LetMeHack/7.png", "/events/LetMeHack/8.png", "/events/LetMeHack/9.png"],
  ["/events/LetMeHack/10.png", "/events/LetMeHack/11.png", "/events/LetMeHack/12.png"],
  ["/events/LetMeHack/13.png", "/events/LetMeHack/14.png", "/events/LetMeHack/15.png"],
  ["/events/LetMeHack/16.png", "/events/LetMeHack/17.png", "/events/LetMeHack/18.png"],
  ["/events/LetMeHack/19.png", "/events/LetMeHack/20.png", "/events/LetMeHack/21.png"],
  ["/events/LetMeHack/22.png", "/events/LetMeHack/23.png", "/events/LetMeHack/24.png"],
  ["/events/LetMeHack/25.png", "/events/LetMeHack/26.png", "/events/LetMeHack/27.png"],
];

export default function LetMeHack() {
  return (
      <Event
          eventTitle={"Let Me Hack"}
          description={`Let Me Hack is an inter-university hackathon organized by the Society of Computer Sciences (SOCS), bringing together innovative minds to develop eco-friendly technological solutions. With sustainability as its core theme, the competition challenges participants to create impactful and sustainable tech-driven solutions. Having successfully conducted Let Me Hack V1.0 and V2.0, the event continues to foster creativity, collaboration, and problem-solving skills among university students, inspiring them to drive positive environmental change through technology.`}
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
