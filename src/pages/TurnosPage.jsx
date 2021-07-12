import React from 'react'
import Turnos from '../components/Main/Turnos/Turnos'
import styled from 'styled-components'

import turnosData from '../TurnosData.json'


const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
`
const Subtitle = styled.h1`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.textColor};
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
`

const TurnosCount = styled.div`
    margin-left: 1rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.headerNumber};
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`

const Main = () => {
    return (

        <div className="my-4 d-flex">
            <div className="row g-0 w-100">
            <Title className="mt-4 mx-2">{"Todos tus turnos"}</Title>
            <div className="card bg-transparent border-info my-4 d-flex">
                <div className="row g-0 w-100 mx-2">
                    <div className="col align-self-center">
                        <Subtitle className="mt-4 mx-2">{"Próximos"}<TurnosCount>{turnosData.proximos.length}</TurnosCount>
                        </Subtitle>
                    </div>
                </div>
                <Turnos className="mb-2" data={turnosData.proximos} />
                </div>
                <div className="card bg-transparent border-info my-4 d-flex">
                <div className="row g-0 w-100 mx-2">
                
                    <div className="col align-self-center">
                    <Subtitle className="mt-4 mx-2">{"Historial"}<TurnosCount>{turnosData.historial.length}</TurnosCount></Subtitle>
                       
                    </div>
                </div>
                <Turnos data={turnosData.historial} />
            </div>
            </div>
        </div>
    )
}

export default Main
