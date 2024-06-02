import PropTypes from "prop-types";

const FrameComponent = ({ className = "", frame12705, prop, ratedClasses }) => {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "8px",
        minWidth: "78px",
        textAlign: "center",
        fontSize: "14px",
        color: "#fff",
        fontFamily: "'Open Sans'",
      }}
      className={className}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 35px 0px 34px",
        }}
      >
        <img
          style={{ height: "34.1px", width: "34.1px", position: "relative" }}
          alt=""
          src={frame12705}
        />
      </div>
      <div style={{ alignSelf: "stretch", position: "relative" }}>
        <p style={{ margin: "0" }}>{prop}</p>
        <p style={{ margin: "0" }}>{ratedClasses}</p>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  frame12705: PropTypes.string,
  prop: PropTypes.string,
  ratedClasses: PropTypes.string,
};

export default FrameComponent;
