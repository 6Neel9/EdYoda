function Navbar() {
  return (
    <div className="mainNav">
      <img
        src="https://community.edyoda.com/uploads/default/original/1X/89f2781288e7825748814e03fcde1337ca00e503.png"
        alt="logo"
        style={{ height: "3em", cursor: "pointer",marginLeft:"3%" }}
      />
      <div className="secNav">
        <p>Hi Text Learner!</p>&nbsp;&nbsp;
        <img
          src="https://en.pimg.jp/093/850/848/1/93850848.jpg"
          alt="test"
          style={{
            height: "2em",
            cursor: "pointer",
            borderRadius: "50%",
            marginTop: "7%",
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
