import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "./pages.scss";

function Home() {
  return (
    <>
      <Header />
      <div className="notfound">
        <h1 className="notfound__title">404 Not Found</h1>
        <Link to="/">
          <button className="notfound__button">Go home</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
