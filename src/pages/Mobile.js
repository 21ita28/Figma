import Image1 from "../components/Image1";
import HeroText from "../components/HeroText";
import FrameComponent1 from "../components/FrameComponent1";
import Component1 from "../components/Component1";
import Component from "../components/Component";
import Footer from "../components/Footer";

const Mobile = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
    >
      <Image1 />
      <section
        style={{
          alignSelf: "stretch",
          backgroundColor: "#0f1014",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "20px 24px 30px",
          gap: "24px",
        }}
      >
        <HeroText />
        <FrameComponent1 />
      </section>
      <Component1 />
      <Component />
      <Footer />
    </div>
  );
};

export default Mobile;
