import { useState } from "react";
export const HomeComponent = () => {
  const [data, setData] = useState(0);
  return (
    <div style={{ width: "70%", marginTop: "3%" }}>
      <h1>Upcoming Certifications</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          border: "1px solid lightblue",
          justifyContent: "space-around",
          borderRadius: "2px",
          boxShadow: "0 0 5px 2px lightblue",
          background: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="Data-Analysis.png" alt="null" style={{ height: "50%" }} />
        </div>
        <div>
          <p style={{background:"#f5f5f5",color:"#958a91",borderRadius:"2px",padding:"2px"}}>CERTIFICATE | ATTEMPT 1</p>
          <p>DATA ANALYSIS</p>
          <p>CERTIFICATION</p>
          <p style={{background:"#cceeff",borderRadius:"10px",padding:"4px"}}>COMPLETED | 21 MAR 2022</p>
        </div>
        <div>
          <p>Exam Structure</p>
          <p>
            Round 1 <span style={{background:"#dfe6f2",borderRadius:"12px",padding:"5px"}}>MCQS</span> <span style={{background:"#dfe6f2",borderRadius:"12px",padding:"5px"}}>CODING</span>
          </p>
          <p>
            Round 2 <span style={{background:"#dfe6f2",borderRadius:"12px",padding:"5px"}}> PROJECT</span>
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{color:"#28a6ff",backgroundColor:"white",borderColor:"#28a6ff",border:"1px solid",padding:"7px",borderRadius:"15px",fontWeight:"600"}}>VIEW EXAM DETAILS</button>
        </div>
      </div>
      <h1>Continue Learning</h1>
      <h4 style={{marginLeft:"43%",color:"#0088ff"}}>View Module Details</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid lightblue",
            justifyContent: "space-around",
            borderRadius: "2px",
            boxShadow: "0 0 5px 2px lightblue",
            width: "65%",
            background: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <img
              src="Data Wrangling.png"
              alt="null"
              style={{ height: "30%", marginTop: "5%" }}
            />
            &nbsp;&nbsp;&nbsp;
            <div>
              <p>DATA WRANGLING & </p>
              <p> VISUALIZATION</p>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  src="https://en.pimg.jp/093/850/848/1/93850848.jpg"
                  alt="testS"
                  style={{
                    height: "2em",
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                />
                &nbsp;
                <p style={{ color: "skyblue", marginTop: "1%" }}>
                  Test Instructor
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ marginLeft: "40%", color: "skyblue" }}>
                  {data}/100
                </span>

                <span>
                  <label htmlFor="1st">Live Sessons</label>&nbsp;&nbsp;
                  <input
                    id="1st"
                    type="range"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                  />
                </span>
                <span style={{ marginLeft: "40%", color: "skyblue" }}>
                  {data}/100
                </span>

                <span>
                  <label htmlFor="1st">Assignments</label>&nbsp;&nbsp;
                  <input
                    id="1st"
                    type="range"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                  />
                </span>
                <span style={{ marginLeft: "40%", color: "skyblue" }}>
                  {data}/100
                </span>

                <span>
                  <label htmlFor="1st">MCQ Quiz </label>&nbsp;&nbsp;
                  <input
                    id="1st"
                    type="range"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                  />
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="vl"></div>
          <div style={{textAlign:"center"}}>
            <div>
              <p>Today Plan</p>
              <p>21 March , 2022</p>
            </div>
            <div>
              <p style={{ color: "#0088ff" }}>
                Data Transformation using Pandas - 3
              </p>
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <p style={{color:"#c7c7c7"}}>Daily FeedBack</p>
              <p style={{color:"#45c1f5",fontStyle:"italic"}}>opens at 07:30</p>
            </div>
            <button style={{backgroundColor:"#efefef",border:"transparent",padding:"10px",borderRadius:"15px",fontWeight:"600"}}>JOIN LIVE SESSON</button>
            <p style={{color:"#c7c7c7"}}>BEGINS AT 07:30 PM</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid lightblue",
            justifyContent: "space-around",
            borderRadius: "2px",
            boxShadow: "0 0 5px 2px lightblue",
            width: "30%",
            background: "white",
          }}
        >
          <div>
            <p>Progress Overview</p>
            <div style={{display:"flex",justifyContent:"space-between",border:"2px solid skyblue",borderRadius:"2px",padding:"5px",width:"150px"}}>
              <p>{data}%</p>
              <p>Overall Grade</p>
            </div><br/>
            <div style={{display:"flex",justifyContent:"space-between",border:"2px solid skyblue",borderRadius:"2px",padding:"5px",width:"150px"}}>
              <p>{data}%</p>
              <p>Attendence</p>
            </div>
            <h4 style={{color:"#0088ff"}}>VIEW PROGRESS DETAILS</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
