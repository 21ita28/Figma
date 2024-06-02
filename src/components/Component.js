import PropTypes from "prop-types";

const Component = ({ className = "" }) => {
  return (
    <section
      style={{
        alignSelf: "stretch",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "30px 7px",
        position: "relative",
        gap: "14px",
        textAlign: "center",
        fontSize: "24px",
        color: "#f5f5f5",
        fontFamily: "'Open Sans'",
      }}
      className={className}
    >
      <div
        style={{
          width: "304.5px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 17px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "42.2px 0px 0px",
            }}
          >
            <img
              style={{
                width: "31.5px",
                height: "5.6px",
                position: "relative",
                objectFit: "contain",
              }}
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </div>
          <h2
            style={{
              margin: "0",
              flex: "1",
              position: "relative",
              fontSize: "inherit",
              lineHeight: "30px",
              fontWeight: "400",
              fontFamily: "inherit",
              textShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
            }}
          >
            <p style={{ margin: "0" }}>{`Get Certified From `}</p>
            <p style={{ margin: "0" }}>{`India’s Biggest `}</p>
            <p style={{ margin: "0" }}>Beauty Platform</p>
          </h2>
        </div>
      </div>
      <img
        style={{
          width: "31.5px",
          height: "5.6px",
          position: "absolute",
          margin: "0",
          top: "72.2px",
          right: "24px",
        }}
        loading="lazy"
        alt=""
        src="/vector-4.svg"
      />
      <img
        style={{
          alignSelf: "stretch",
          position: "relative",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
          objectFit: "contain",
        }}
        loading="lazy"
        alt=""
        src="/image-676@2x.png"
      />
    </section>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
