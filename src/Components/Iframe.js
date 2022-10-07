import React from "react";
//import animation
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4773.056753067698!2d74.76142040592799!3d32.22952943494635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f1fe473b7aeabd0!2sSafina%20al%20Madina!5e0!3m2!1sen!2s!4v1662801666046!5m2!1sen!2s" width="1280" height="720" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

function iframe(props) {
  return (
    <div className="map-responsive">
      <AnimationOnScroll
        animateOnce={true}
        duration={3}
        animateIn="animate__fadeIn"
      >
        <div dangerouslySetInnerHTML={{ __html: Iframe }} />
      </AnimationOnScroll>
    </div>
  );
}

export default iframe;
