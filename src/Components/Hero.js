import React from "react";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";
import slide7 from "../assets/slide7.jpg";

import HeroSlider, { Overlay, ButtonsNav, Slide, Nav } from "hero-slider";

import Wrapper from "../Components/Wrapper/index";
import Title from "../Components/Title/index";
import Subtitle from "../Components/Subtitle/index";

function Hero() {
  return (
    <>
      <div className="heroSection mt-4">
        <HeroSlider
          height={"100vh"}
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
          <Slide
            label="Prophet's Mosque"
            background={{
              backgroundImage: slide1,
              backgroundAnimation: "zoom",
            }}
          >
            <Overlay>
              <Wrapper>
                <Title>Lorem Isum</Title>
                <Subtitle>
                  Sed dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                </Subtitle>
              </Wrapper>
            </Overlay>
          </Slide>

          <Slide
            label="Safina Travels"
            background={{
              backgroundImage: slide2,
              backgroundAnimation: "zoom",
            }}
          >
            <Overlay>
              <Wrapper>
                <Title>Safina Al Madina</Title>
                <Subtitle>
                  Travel & Tourism Agency located in Qila Ahmad Abad, District
                  Narowal, Punjab Pakistan. We Provide all Airline Tickets,
                  Services of UMRAH, Visa processing of Saudia Arabia and visit
                  Visas of multiple Countries.
                </Subtitle>
              </Wrapper>
            </Overlay>
          </Slide>

          <Slide
            label="Khana Kaaba"
            background={{
              backgroundImage: slide3,
              backgroundAnimation: "zoom",
            }}
          >
            <Overlay>
              <Wrapper>
                <Title>Lorem Amma</Title>
                <Subtitle>
                  Sed dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                </Subtitle>
              </Wrapper>
            </Overlay>
          </Slide>

          <Slide
            label="Roza e Rasool"
            background={{
              backgroundImage: slide4,
              backgroundAnimation: "zoom",
            }}
          >
            <Overlay>
              <Wrapper>
                <Title>Lorem Isum</Title>
                <Subtitle>
                  Sed dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                </Subtitle>
              </Wrapper>
            </Overlay>
          </Slide>

          <Slide
            label="Dubai - UAE"
            background={{
              backgroundImage: slide5,
              backgroundAnimation: "zoom",
            }}
          >
            <Overlay>
              <Wrapper>
                <Title>Lorem Isum</Title>
                <Subtitle>
                  Sed dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                </Subtitle>
              </Wrapper>
            </Overlay>
          </Slide>

          <Slide
            label="Bahrain"
            background={{
              backgroundImage: slide6,
              backgroundAnimation: "zoom",
            }}
          >
            <Overlay>
              <Wrapper>
                <Title>Lorem Isum</Title>
                <Subtitle>
                  Sed dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                </Subtitle>
              </Wrapper>
            </Overlay>
          </Slide>

          <Slide
            background={{
              backgroundImage: slide7,
              backgroundAnimation: "zoom",
            }}
          >
            <Overlay>
              <Wrapper>
                <Title>Lorem Isum</Title>
                <Subtitle>
                  Sed dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                </Subtitle>
              </Wrapper>
            </Overlay>
          </Slide>

          <ButtonsNav
            isNullAfterThreshold
            position={{
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
