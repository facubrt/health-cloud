import React from 'react'
import Turno from './Turno'
import styled from 'styled-components'
import SortingBar from './SortingBar'
import TodosBtn from './TodosBtn'

const Container = styled.div`
    padding: 1rem;
`

const Turnos = ({data}) => {
    return (
        <Container>
            <SortingBar/>
            {data.map(turno => (
                turno.id <= 2 ? <Turno data={turno} key={turno.id}/> : ("")
            ))}
            {data.length > 2 ? <TodosBtn/> : ("")}
        </Container>
    )
}

export default Turnos
