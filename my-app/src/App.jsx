import React, { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("Do you love me? 😘");
  const [noPosition, setNoPosition] = useState({ left: 0, top: 0 });

  const handleYes = () => {
    setMessage("I knew it! ❤️- love you too😘");
  };

  const handleNo = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const buttonWidth = 100; // approx NO button width
    const buttonHeight = 50; // approx NO button height

    const newLeft = Math.random() * (windowWidth - buttonWidth);
    const newTop = Math.random() * (windowHeight - buttonHeight);

    setNoPosition({ left: newLeft, top: newTop });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #8e44ad, #5b2c6f)", // beautiful purple gradient
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "3vw", // responsive font
          maxFontSize: "48px",
          marginBottom: "2rem",
          textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        {message}
      </h1>
      <div style={{ position: "relative", height: "60px", width: "100%" }}>
        <button
          onClick={handleYes}
          style={{
            padding: "12px 28px",
            fontSize: "1rem",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            background: "#ff6b81",
            color: "#fff",
            marginRight: "20px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          YES
        </button>
        <button
          onMouseEnter={handleNo}
          style={{
            position: "fixed",
            left: noPosition.left + "px",
            top: noPosition.top + "px",
            padding: "12px 28px",
            fontSize: "1rem",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            background: "#ff4757",
            color: "#fff",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
            transition: "all 0.2s ease",
          }}
        >
          NO
        </button>
      </div>
    </div>
  );
};

export default App;
