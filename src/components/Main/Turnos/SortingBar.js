import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    padding: 0.4rem 1rem;
    background-color: ${({ theme }) => theme.secondary};
    margin: 2rem 0;
    border-radius: 5px;
`

const Text = styled.h1`
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

const Fecha = styled(Text)`
    width: 15%;
`

const Profesional = styled(Text)`
    width: 20%;
`

const Centro = styled(Text)`
    width: 25%;
`

const Motivo = styled(Text)`
    width: 20%;
`

const Estado = styled(Text)`
    width: 15%;
`

const Prioridad = styled(Text)`
    
`

const SortingBar = () => {
    return (
        <Container>
            <Fecha>Fecha</Fecha>
            <Profesional>Profesional</Profesional>
            <Centro>Centro</Centro>
            <Motivo>Motivo</Motivo>
            <Estado>Estado</Estado>
            <Prioridad>Prioridad</Prioridad>
        </Container>
    )
}

export default SortingBar