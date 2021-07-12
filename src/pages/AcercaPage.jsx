import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
`

const Acerca = () => {
    return (
        <div className="d-flex">
            <div className="row g-0 w-100">
            <Title className="mt-4 mx-2">{"Acerca de"}</Title>
                <div className="card mt-4 bg-transparent border-info">
                    <div className="card-body">
                        <h5 className="card-title">Health Cloud</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Realizado con React</h6>
                        <p className="card-text">version 1.0.0 2021 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Acerca
