import { Link } from "react-router-dom";

const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif";

function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/proyectos">Ir a mis proyectos</Link>
            <hr />
            <img src={imgURL} alt="home gif" className="page-img" />
        </div>
    )
}

export default HomePage;