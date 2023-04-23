import { useState } from "react";
export const ModulePage = () => {
  const [selectedDiv, setSelectedDiv] = useState(1);
  const [url, setUrl] = useState("quiz3.png");

  const handleDivClick = (id) => {
    setSelectedDiv(id);
  };

  const divStyles = {
    display: "flex",
    cursor: "pointer",
  };

  return (
    <>
      <div
        className="module"
        style={{
          marginLeft: 0,
          width: "15%",
          background: "#e0e6f2",
          textAlign: "center",
        }}
      >
        <div
          style={{
            ...divStyles,
            backgroundColor: selectedDiv === 1 ? "#cbd3e1" : "#e0e6f2",
          }}
          onClick={() => {
            handleDivClick(1);
            setUrl("quiz3.png");
          }}
        >
          <img src="topic.svg" />
          &nbsp;&nbsp;
          <p>Python Loops</p>
        </div>
        <div
          style={{
            ...divStyles,
            backgroundColor: selectedDiv === 2 ? "#cbd3e1" : "#e0e6f2",
          }}
          onClick={() => {
            setUrl("quiz1.png");
            handleDivClick(2);
          }}
        >
          <img src="activeModuleQuiz.svg" />
          &nbsp;&nbsp;
          <p>Quiz-1 Data Types</p>
        </div>
        <div
          style={{
            ...divStyles,
            backgroundColor: selectedDiv === 3 ? "#cbd3e1" : "#e0e6f2",
          }}
          onClick={() => {
            handleDivClick(3);
            setUrl("quiz2s.png");
          }}
        >
          <img src="assignment.svg" />
          &nbsp;&nbsp;
          <p>Assignment-1:</p>
        </div>
        <span>Operators | Loops</span>
      </div>
      <div>
        <img src={url} style={{ width: "90%" }} />
      </div>
    </>
  );
};
