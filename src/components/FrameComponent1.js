import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        fontSize: "12px",
        color: "#fff",
        fontFamily: "'Open Sans'",
      }}
      className={className}
    >
      <div
        style={{
          borderRadius: "10px 10px 0px 0px",
          backgroundColor: "#e84d84",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "6px 61px",
          whiteSpace: "nowrap",
        }}
      >
        <b
          style={{
            position: "relative",
            lineHeight: "15px",
            textTransform: "uppercase",
          }}
        >
          Fill the form below to enquire
        </b>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          borderRadius: "0px 0px 10px 10px",
          backgroundColor: "#fff",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "10px",
          gap: "20px",
          zIndex: "1",
          marginTop: "-1px",
          fontSize: "12.8px",
          color: "#505050",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "11px",
            }}
          >
            <div
              style={{
                width: "108px",
                position: "relative",
                lineHeight: "16px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
              }}
            >
              *Enter your name
            </div>
            <div
              style={{
                alignSelf: "stretch",
                borderRadius: "4px",
                backgroundColor: "#fff",
                border: "1px solid #d9d9d9",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "5px 11px 7px",
              }}
            >
              <input
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontFamily: "'Open Sans'",
                  fontSize: "13.6px",
                  backgroundColor: "transparent",
                  height: "19px",
                  flex: "1",
                  position: "relative",
                  color: "#bfbfbf",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  minWidth: "170px",
                  padding: "0",
                }}
                placeholder="Eg. Aneesha Mehra"
                type="text"
              />
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "11px",
            }}
          >
            <div
              style={{
                width: "189px",
                position: "relative",
                lineHeight: "16px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
              }}
            >
              *Enter your WhatsApp Number
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "11px",
                fontSize: "13.6px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  border: "1px solid #d9d9d9",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "5px 12px 7px",
                  gap: "3.82px",
                }}
              >
                <div
                  style={{
                    height: "6.9px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    minWidth: "25px",
                    whiteSpace: "nowrap",
                  }}
                >
                  +91
                </div>
                <img
                  style={{
                    height: "6.9px",
                    width: "10.2px",
                    position: "relative",
                    minHeight: "7px",
                  }}
                  alt=""
                  src="/name-icon.svg"
                />
              </div>
              <div
                style={{
                  flex: "1",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  border: "1px solid #d9d9d9",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "5px 12px 7px",
                  minWidth: "107px",
                }}
              >
                <input
                  style={{
                    width: "107px",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    height: "19px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    fontFamily: "'Open Sans'",
                    fontSize: "13.6px",
                    color: "#bfbfbf",
                  }}
                  placeholder="Eg. 0000000000"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "11px",
            }}
          >
            <div
              style={{
                width: "145px",
                position: "relative",
                lineHeight: "16px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
              }}
            >
              *Select your profession
            </div>
            <div
              style={{
                alignSelf: "stretch",
                borderRadius: "4px",
                backgroundColor: "#fff",
                border: "1px solid #d9d9d9",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 12px 7px",
                whiteSpace: "nowrap",
                gap: "20px",
                fontSize: "13.6px",
                color: "#bfbfbf",
              }}
            >
              <div
                style={{
                  height: "12px",
                  position: "relative",
                  letterSpacing: "-0.1px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Choose the most relevant option
              </div>
              <img
                style={{
                  height: "12px",
                  width: "12px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: "0",
                  minHeight: "12px",
                }}
                alt=""
                src="/svg-5.svg"
              />
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "11px",
            }}
          >
            <div
              style={{
                width: "106px",
                position: "relative",
                lineHeight: "16px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
              }}
            >
              *Select your goal
            </div>
            <div
              style={{
                alignSelf: "stretch",
                borderRadius: "4px",
                backgroundColor: "#fff",
                border: "1px solid #d9d9d9",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 12px 7px",
                whiteSpace: "nowrap",
                gap: "20px",
                fontSize: "13.6px",
                color: "#bfbfbf",
              }}
            >
              <div
                style={{
                  height: "12px",
                  position: "relative",
                  letterSpacing: "-0.1px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Choose the most relevant option
              </div>
              <img
                style={{
                  height: "12px",
                  width: "12px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: "0",
                  minHeight: "12px",
                }}
                alt=""
                src="/svg-5.svg"
              />
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "11px",
            }}
          >
            <div
              style={{
                width: "102px",
                position: "relative",
                lineHeight: "16px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
              }}
            >
              *Select your city
            </div>
            <div
              style={{
                alignSelf: "stretch",
                borderRadius: "4px",
                backgroundColor: "#fff",
                border: "1px solid #d9d9d9",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 12px 7px",
                whiteSpace: "nowrap",
                gap: "20px",
                fontSize: "13.6px",
                color: "#bfbfbf",
              }}
            >
              <div
                style={{
                  height: "12px",
                  position: "relative",
                  letterSpacing: "-0.1px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Choose the most relevant option
              </div>
              <img
                style={{
                  height: "12px",
                  width: "12px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: "0",
                  minHeight: "12px",
                }}
                alt=""
                src="/svg-5.svg"
              />
            </div>
          </div>
        </div>
        <button
          style={{
            cursor: "pointer",
            border: "none",
            padding: "9px 20px",
            backgroundColor: "transparent",
            alignSelf: "stretch",
            borderRadius: "4px",
            background: "linear-gradient(90.32deg, #f56563, #e54988)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "0.1px 0px 0.9px",
              }}
            >
              <b
                style={{
                  position: "relative",
                  fontSize: "14px",
                  lineHeight: "17px",
                  fontWeight: "700",
                  fontFamily: "'Open Sans'",
                  color: "#fafafa",
                  textAlign: "center",
                  display: "inline-block",
                  minWidth: "45px",
                }}
              >
                Submit
              </b>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
