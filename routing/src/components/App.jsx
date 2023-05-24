import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation'
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import ErrorPage from './NotFoundPage/NotFoundPage';
import ProjectsDetailPage from './ProjectsDetailPage/ProjectsDetailPage';
import QueryStringExample from './QueryStringExample/QueryStringExample';

function App() {
  return (
    <div className="App">

      <Navigation />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sobre-mi' element={<AboutPage />} />
        <Route path='/proyectos' element={<ProjectsPage />} />

        <Route path='/proyectos/:project_id' element={<ProjectsDetailPage />} />
        <Route path='/querys' element={<QueryStringExample />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App;
