import React from 'react'
import Turno from './Turno'
import styled from 'styled-components'
import SortingBar from './SortingBar'
import TodosBtn from './TodosBtn'

const Title = styled.h1`
    font-weight: 300;
    color: ${({theme}) => theme.textColor};
    font-size: 1.3rem;
    display: flex;
    align-items: center;
`

const TurnosCount = styled.div`
    margin-left: 1rem;
    font-size: 1rem;
    background-color: ${({theme}) => theme.header};
    color: ${({theme}) => theme.headerNumber};
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
` 
const Container = styled.div`
    padding: 1rem;
`

const Turnos = ({title, data, count}) => {
    return (
        <Container>
            <Title>{title}<TurnosCount>{count}</TurnosCount></Title>
            <SortingBar/>
            {data.map(turno => (
                <Turno data={turno} key={turno.id}/>
            ))}
            {data.length > 1 ? <TodosBtn title={title}/> : ("")}
        </Container>
    )
}

export default Turnos
