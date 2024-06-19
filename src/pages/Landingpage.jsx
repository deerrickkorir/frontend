import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.pinimg.com/564x/f9/25/4b/f9254b358dfdc0db63b99705b644f21d.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "brown" }}>CarCare Connect</h1>
      <nav style={{ padding: "80px" }}>
        <ul>
          <li>
            <Link to="/catalogue">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default LandingPage;