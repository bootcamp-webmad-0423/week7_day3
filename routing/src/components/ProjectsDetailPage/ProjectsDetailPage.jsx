import { Link, useParams } from "react-router-dom";
import projectsData from "./../../projects-data.json";

function ProjectsDetailPage() {

    const { project_id } = useParams()

    const selectedProject = projectsData.find(elm => elm._id === project_id)

    return (
        <div>
            <h2>Detalle de proyecto con ID {selectedProject.name} (año {selectedProject.year})</h2>
            <hr />
            <p>Detalles: {selectedProject.description}</p>
            <p>Usa las tecnologías {selectedProject.technologies}</p>
            <hr />
            <Link to="/proyectos">Volver al listado</Link>
        </div>
    );
}

export default ProjectsDetailPage;