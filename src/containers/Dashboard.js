import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TurnosPage from '../pages/TurnosPage'
import AcercaPage from '../pages/AcercaPage'
import ConfiguracionesPage from '../pages/ConfiguracionesPage'
import Sidebar from '../components/Sidebar/Sidebar'
import InicioPage from '../pages/InicioPage'
import EstudiosPage from '../pages/EstudiosPage'


const Dashboard = () => {
    return (
        <Router>
            <section className="d-flex h-100">
                <div className="row g-0 w-100">
                    <div className="col-lg-2 d-flex">
                        <Sidebar />
                    </div>
                    <div className="col-lg-10 d-flex">
                        <div className="w-100 mx-4">
                            <Route path="/" exact={true} component={InicioPage} />
                            <Route path="/turnos" exact={true} component={TurnosPage} />
                            <Route path="/estudios" exact={true} component={EstudiosPage} />
                            <Route path="/acerca" exact={true} component={AcercaPage} />
                            <Route path="/configuraciones" exact={true} component={ConfiguracionesPage} />
                        </div>
                    </div>
                </div>
            </section>
        </Router>
    )
}

export default Dashboard
