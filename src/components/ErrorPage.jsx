import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ErrorPage = () => {
  const { data: post } = useSelector((state) => state.instrcutorpost);
  const nav = useNavigate();

  return (
    <div
      style={{
        marginTop: "10%",
        textAlign: "center",
      }}
    >
      <div>
        <h1>404 ERROR 🐈‍⬛</h1>

        <h1 style={{ color: "red" }}>Under Construction 👷🏻‍♂️</h1>
      </div>
      <button onClick={() => nav("/")}>Go Back 🔙</button>
      <br />
      <br />
      <br />
      <div>
        <img src={post.images[3]} alt="" style={{ height: "40vh" }} />
        <p>
          <strong>{post.title}</strong>
        </p>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
