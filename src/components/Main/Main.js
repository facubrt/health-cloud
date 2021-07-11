import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import NuevoTurnoBtn from './NuevoTurnoBtn'
import Turnos from './Turnos/Turnos'

import turnosData from '../../TurnosData.json'

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0.5rem 4rem;
`


const Main = () => {
    return (

        <Container>
            <Nav />
            <NuevoTurnoBtn />
            <Turnos title="Próximos" count={turnosData.proximos.length} data={turnosData.proximos}/>
            <Turnos title="Historial" count={turnosData.historial.length} data={turnosData.historial}/>
        </Container>
    )
}

export default Main
