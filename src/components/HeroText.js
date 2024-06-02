import PropTypes from "prop-types";

const HeroText = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "7.1px",
        textAlign: "left",
        fontSize: "24px",
        color: "#fff",
        fontFamily: "'Open Sans'",
      }}
      className={className}
    >
      <h2
        style={{
          margin: "0",
          alignSelf: "stretch",
          position: "relative",
          fontSize: "inherit",
          lineHeight: "30px",
          fontWeight: "400",
          fontFamily: "inherit",
          textShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
        }}
      >
        <p style={{ margin: "0" }}>Professional Online</p>
        <p style={{ margin: "0" }}>Makeup Course</p>
      </h2>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "0px 67px 0px 0px",
          gap: "10px",
          fontSize: "12px",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            borderRadius: "5px",
            backgroundColor: "rgba(255, 255, 255, 0.14)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "5.1px 11px",
            gap: "7px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: "9px",
                height: "12.1px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/svg.svg"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.8px 0px 0.2px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "13px",
                  display: "inline-block",
                  minWidth: "128px",
                }}
              >
                Certification Programme
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: "13px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "4px",
            textAlign: "right",
            color: "#f7c852",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: "11px",
                height: "10.6px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/svg-1.svg"
            />
          </div>
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                padding: "0.3px 0px 0.7px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "15px",
                  display: "inline-block",
                  minWidth: "68px",
                }}
              >
                Rated 4.85/5
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "295px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
          fontSize: "14px",
          color: "#d2d2d2",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: "14px",
                height: "14px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
              loading="lazy"
              alt=""
              src="/svg-2.svg"
            />
          </div>
          <div style={{ flex: "1", position: "relative", lineHeight: "17px" }}>
            India’s No.1 Online Makeup Course
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: "14px",
                height: "14px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
              loading="lazy"
              alt=""
              src="/svg-2.svg"
            />
          </div>
          <div style={{ flex: "1", position: "relative", lineHeight: "17px" }}>
            Learn by LIVE Do-it-Together Classes
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: "14px",
                height: "14px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
              loading="lazy"
              alt=""
              src="/svg-2.svg"
            />
          </div>
          <div style={{ flex: "1", position: "relative", lineHeight: "17px" }}>
            Unlimited Practise Session to master skills
          </div>
        </div>
      </div>
    </div>
  );
};

HeroText.propTypes = {
  className: PropTypes.string,
};

export default HeroText;
