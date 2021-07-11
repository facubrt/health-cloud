import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from '../components/Main/Main'
import Acerca from '../components/Main/Acerca'
import Configuraciones from '../components/Main/Configuraciones'
import Sidebar from '../components/Sidebar/Sidebar'


const Dashboard = () => {
    return (
        <Router>
            <Sidebar/>
            <div>
                <Route path="/" exact={true} component={Main}/>
                <Route path="/acerca" exact={true} component={Acerca}/>
                <Route path="/configuraciones" exact={true} component={Configuraciones}/>
            </div>
            {/* <Main/> */}
        </Router>
    )
}

export default Dashboard
