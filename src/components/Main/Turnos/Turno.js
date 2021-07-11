import React from 'react'
import styled from 'styled-components'
import Image from '../../../assets/images/profilesm.png'

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid rgba(190,190,190,0.22);
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    transition: all ease-in-out 300ms;
    &:hover {
        /* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
        background-color: ${({ theme }) => theme.secondary};
    }
`

const Text = styled.h1`
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    margin: 0;
`

const Subtitle = styled(Text)`
    font-size: 0.8rem;
    color: #B2BFE1;
    margin-top: 2px;
`
const Fecha = styled(Text)`
    width: 15%;
`

const Profesional = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
`

const ProfesionalText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

const ProfesionalImg = styled.img`
    height: 35px;
    width: 35px;
`
const ProfesionalNombre = styled(Text)`
    font-size: 1rem;
`

const Centro = styled(Text)`
    width: 25%;
`
const Motivo = styled.div`
    width: 20%;
`
const Estado = styled.div`
    display: flex;
    align-items: center;
`
const Prioridad = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: ${props => props.color};
    margin-left: 1rem;
    position: absolute;
    right: 7rem;
`

const Turno = ({ data }) => {
    const { profesional, fecha, lugar, motivo, estado, prioridad } = data;

    return (
        <Container>
            <Fecha>
                <Text>{fecha.dia}</Text>
                <Subtitle>{fecha.ano}</Subtitle>
            </Fecha>
            <Profesional>
                <ProfesionalImg src={Image} />
                <ProfesionalText>
                    <ProfesionalNombre>{profesional.datos.nombre}</ProfesionalNombre>
                    <Subtitle>{profesional.datos.especialidad}</Subtitle>
                </ProfesionalText>
            </Profesional>
            
            <Centro>
                <Text>{lugar.centro}</Text>
                <Subtitle>{lugar.localidad}</Subtitle>
            </Centro>
            <Motivo>
                <Text>{motivo}</Text>
            </Motivo>
            <Estado>
                <Text>{estado}</Text>
                {(() => {
                    switch (prioridad) {
                        case 1: return <Prioridad color="#F17E7E" />;
                        case 2: return <Prioridad color="#FFD056" />;
                        case 3: return <Prioridad color="#75C282" />;
                        default: return <Prioridad color="#AAA5A5" />;
                    }
                })()}
            </Estado>

        </Container>
    )
}

export default Turno
