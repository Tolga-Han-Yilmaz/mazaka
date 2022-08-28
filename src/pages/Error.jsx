import error from "../assets/404.jpeg";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <img className="w-100" src={error} alt="" />
      <div className="text-center">
        <button onClick={() => navigate("/")} className="btn btn-danger ">
          Anasayfa
        </button>
      </div>
    </div>
  );
};

export default Error;
