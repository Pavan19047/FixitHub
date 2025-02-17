import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/HouseHoldRepairs.css";

function Household() {
  const navigate = useNavigate(); // Initialize navigation

  // Function to handle card clicks
  const handleCardClick = (category) => {
    navigate(`/workers/${category}`); // Navigate to WorkersList page with category
  };

  return (
    <div className="houserepairs">
      <h1 id="heading">Select Your Service: </h1>
      <div className="container">
        <div
          id="card-one"
          className="animation"
          onClick={() => handleCardClick("plumbers")}
        >
          <center>
            <img
              className="img-card"
              src="../images/plumber.avif"
              alt="Plumber"
            />
          </center>
          <h2 style={{ textAlign: "center", marginTop: 120 }}>Plumber</h2>
        </div>
        <div
          id="card-two"
          className="animation"
          onClick={() => handleCardClick("carpenters")}
        >
          <center>
            <img
              className="img-card"
              src="../images/carpenter.jpg"
              alt="Carpenter"
            />
          </center>
          <h2 style={{ textAlign: "center", marginTop: 120 }}>Carpenter</h2>
        </div>
        <div
          id="card-third"
          className="animation"
          onClick={() => handleCardClick("electricians")}
        >
          <center>
            <img
              className="img-card"
              src="../images/electrician.avif"
              alt="Electrician"
            />
          </center>
          <h2 style={{ textAlign: "center", marginTop: 120 }}>Electrician</h2>
        </div>
      </div>
    </div>
  );
}

export default Household;
