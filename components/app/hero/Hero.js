"use client";
import HeroSlider, { Overlay, ButtonsNav, Slide, Nav } from "hero-slider";
import Wrapper from "@/components/app/hero/Wrapper/index";
import Title from "@/components/app/hero/Title/index";
import Subtitle from "@/components/app/hero/Subtitle/index";

const slideData = [
  {
    label: "Prophet's Mosque",
    title: "Al-Masjid an-Nabawī",
    subtitle:
      " The mosque is located at the heart of Medina, and is a major site of pilgrimage that falls under the purview of the Custodian of the Two Holy Mosques.",
    backgroundImage: "slide1.jpg",
  },
  {
    label: "Safina Travels",
    title: "Safina Al Madina",
    subtitle:
      "Travel & Tourism Agency located in Qila Ahmad Abad, District Narowal, Punjab Pakistan. We Provide all Airline Tickets, Services of UMRAH, Visa processing of Saudia Arabia and visit Visas of multiple Countries.",
    backgroundImage: "slide2.jpg",
  },
  {
    label: "Khana Kaaba",
    title: "House of Allah",
    subtitle:
      "Thousands of Muslims from around the world make the journey to the Kaaba every year to pray and seek spiritual purification. It holds immense significance and serves as a symbol of unity.",
    backgroundImage: "slide3.jpg",
  },
  {
    label: "Roza e Rasool",
    title: "Prophet's Mosque",
    subtitle:
      "The Roza-e-Rasool is the burial place of Prophet Muhammad, the founder of Islam. It is a place of pilgrimage and is visited by millions of Muslims every year.",
    backgroundImage: "slide4.jpg",
  },
  {
    label: "Dubai - UAE",
    title: "United Arab Emirates",
    subtitle:
      "It is one of the most popular destinations in the Middle East, attracting millions of visitors each year. Dubai is renowned for its iconic architecture, such as the Burj Khalifa",
    backgroundImage: "slide5.jpg",
  },
  {
    label: "Bahrain",
    title: "Bahrain",
    subtitle:
      "Bahrain has a rich history, with evidence of human settlement dating back to ancient times. It has been ruled by various empires and dynasties throughout history, including the Persian Empire, and the Arab caliphates",
    backgroundImage: "slide6.jpg",
  },
  {
    label: "Book a Trip",
    title: "Plan a Trip",
    subtitle:
      "If you are looking to customize your trip, you have come to the right place! We understand that everyone has unique preferences and requirements when it comes to travel, and we are here to assist you in creating the perfect itinerary.",
    backgroundImage: "slide7.jpg",
  },
];

function Hero() {
  return (
    <>
      <div className="heroSection mt-4">
        <HeroSlider
          height={"100vh"}
          width={"100%"}
          autoplay
          animations={{
            slidingAnimation: "fade",
          }}
          controller={{
            initialSlide: 1,
            slidingDuration: 700,
            slidingDelay: 150,
            onSliding: (nextSlide) =>
              console.debug("onSliding(nextSlide): ", nextSlide),
            onBeforeSliding: (previousSlide, nextSlide) =>
              console.debug(
                "onBeforeSliding(previousSlide, nextSlide): ",
                previousSlide,
                nextSlide
              ),
            onAfterSliding: (nextSlide) =>
              console.debug("onAfterSliding(nextSlide): ", nextSlide),
          }}
        >
          {slideData.map((slide, index) => (
            <Slide
              key={index}
              label={slide.label}
              background={{
                backgroundImage: `/assets/hero/${slide.backgroundImage}`,
                backgroundAnimation: "zoom",
              }}
            >
              <Overlay>
                <Wrapper>
                  <Title>{slide.title}</Title>
                  <Subtitle>{slide.subtitle}</Subtitle>
                </Wrapper>
              </Overlay>
            </Slide>
          ))}

          <ButtonsNav
            isNullAfterThreshold
            position={{
              width: "100vw",
              top: 0,
              left: "0%",
              transform: "translateX(0%)",
            }}
          />
          <Nav />
        </HeroSlider>
      </div>
    </>
  );
}

export default Hero;
