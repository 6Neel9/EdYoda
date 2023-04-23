import Navbar from "./Navbar";
import { useState } from "react";
import { FaHome,FaChalkboardTeacher } from "react-icons/fa";
import { IoCaretUpSharp, IoCaretDownSharp } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../store/instructorSlice";




export const Home = ({children}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseEnter1 = () => {
    setIsHovering1(true);
  };
  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handleMouseLeave1 = () => {
    setIsHovering1(false);
  };
  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div style={{ color: "white", background: "#15294b" }}>
        <div
          className="sticky"
          style={{
            display: "flex",
            marginLeft: "5%",
            cursor: "pointer",
            height:"55px"
          }}
        >
          <span onClick={() => setState(!state)} style={{ marginTop: 17 }}>
            DS031221 {state ? <IoCaretUpSharp /> : <IoCaretDownSharp />}
          </span>

          <p style={{ marginLeft: "2%" }}>Data Scientist Program</p>
        </div>
        {state ? (
          <>
            <p
              style={{
                marginLeft: "5%",
                fontSize: "80%",
              }}
            >
              Select Program
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "20%",
                marginLeft: "7%",
                fontSize: "80%",
              }}
              className="diff"
            >
              <p>ECRD</p>
              <p>FSR222222</p>
              <p>DS261121</p>
              <p
                style={{
                  background: "white",
                  color: "black",
                  borderRadius: "2px",
                  padding: "4px",
                }}
              >
                DS031221
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ background: "#15294b", height: "100vh",width:"5.5%" }}>
          <div
            style={{
              padding: "10%",
              color: "white",
              fontSize: 10,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
            }}
            className="sider"
          >
            <span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={()=>navigate('/')}
            >
              <FaHome size="25" color={isHovering ? "black" : "white"} />
              Home
            </span>
            <span
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              onClick={()=>navigate('/modules')}
            >
              <ImBooks size="25" color={isHovering1 ? "black" : "white"} />
              Modules
            </span>{" "}
            <span
              onMouseLeave={handleMouseLeave2}
              onMouseEnter={handleMouseEnter2}
              onClick={()=>navigate('/instructors')}
            >
              <FaChalkboardTeacher size="20" color={isHovering2 ? "black" : "white"} />
              Instructors
            </span>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",width:"95%",backgroundColor:"#f2f6ff"}}>
            {children}
        </div>
      </div>
    </div>
  );
};


Home.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};