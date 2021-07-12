import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding: 0.3rem;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
`

const Span = styled.span`
    font-size: 1.2rem;
    margin-right: 1rem;
`

const Title = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    margin:0;
    padding:0;
`

const MenuLink = ({ title, icon, page }) => {
    
    return (
        <Container>
            <Span className="iconify" data-inline="false" data-icon={`feather:${icon}`}></Span>
            <Title>{title}</Title>
        </Container>
    )
}

export default MenuLink
