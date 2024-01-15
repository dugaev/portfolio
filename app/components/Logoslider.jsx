import Image from "next/image";
import React from "react";
import htmlLogo from "../../public/images/skills/html-5.svg";
import cssLogo from "../../public/images/skills/css-3.svg";
import jsLogo from "../../public/images/skills/javascript.svg";
import nextLogo from "../../public/images/skills/nextjs.svg";
import reactLogo from "../../public/images/skills/react.svg";
import reduxLogo from "../../public/images/skills/redux.svg";
import sassLogo from "../../public/images/skills/sass.svg";
import postgreLogo from "../../public/images/skills/postgresql.svg";
import storybookLogo from "../../public/images/skills/storybook-icon.svg";
import tailwindLogo from "../../public/images/skills/tailwindcss-icon.svg";
import vueLogo from "../../public/images/skills/vue.svg";
import tsLogo from "../../public/images/skills/typescript-icon.svg";
import viteLogo from "../../public/images/skills/vitejs.svg";
import Slider from "react-infinite-logo-slider";

const LogoSlider = () => {
  return (
    <Slider
      duration={23}
      width="150px"
      pauseOnHover={false}
      blurBorders={false}
      blurBoderColor={"#fff"}
    >
      <Slider.Slide>
        <Image src={htmlLogo} width={60} height={150} alt="htmlLogo" />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={cssLogo} width={60} height={150} alt="cssLogo" />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={jsLogo} width={60} height={150} alt="jsLogo" />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={nextLogo} width={90} height={150} alt="nextLogo" />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={reactLogo} width={60} height={150} alt="reactLogo" />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={reduxLogo} width={60} height={150} alt="reduxLogo" />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={sassLogo} width={60} height={150} alt="sassLogo" />
      </Slider.Slide>
      <Slider.Slide>
        <Image
          src={storybookLogo}
          width={60}
          height={150}
          alt="storybookLogo"
        />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={postgreLogo} width={60} height={150} alt="postgreLogo" />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={tailwindLogo} width={60} height={150} alt="tailwindLogo" />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={vueLogo} width={60} height={150} alt="vueLogo" />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={tsLogo} width={60} height={150} alt="tsLogo" />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={viteLogo} width={60} height={150} alt="viteLogo" />
      </Slider.Slide>
    </Slider>
  );
};

export default LogoSlider;
