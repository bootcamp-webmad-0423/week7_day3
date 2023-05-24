import { Link } from "react-router-dom";
import projectsData from "./../../projects-data.json"
import { useEffect, useState } from "react";

function ProjectsPage() {

    const [projects, setProjects] = useState([])

    useEffect(() => {                            // Fase de montaje
        console.log('el componente ya está completamente montado')
        // axios.get('la_url_de_la_api')        // Supuesta llamada de AJAX para actualizar los datos en el estado
        setProjects(projectsData)
    }, [])

    return (
        <div>
            <h2>Projects</h2>
            {projects.map((project) => {
                return (
                    <div key={project._id} className="Project">
                        <h3>{project.name}</h3>
                        <p>{project.technologies}</p>
                        <Link to={`/proyectos/${project._id}`}>Ver detalles</Link>
                    </div>
                )
            })}
        </div>
    );
}

export default ProjectsPage;