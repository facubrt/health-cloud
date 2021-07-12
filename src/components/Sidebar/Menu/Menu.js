import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import MenuLink from './MenuLink'


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`
const StyledLink = styled(NavLink)`
    color: "#AAA5A5";
    border-left: 3px solid "transparent";
    width: 100%;
    text-decoration: none;
    padding: 0.8rem;
    //padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: 0.2s all ease-in-out;
    &:hover {
        background-color: rgba(0,0,0,0.1);
    }

  &.active {
    background-color: rgba(0,0,0,0.1);
    border-left: 3px solid ${props => props.theme.activeMenu};
  }
`

const Menu = () => {
    return (
        <Container>
            <StyledLink exact to= "/" activeClassName="active">
                <MenuLink title="Inicio" icon="home" page="/"/></StyledLink>
            <StyledLink exact to= "/turnos" activeClassName="active">
                <MenuLink title="Turnos" icon="list" page="/turnos"/></StyledLink>
            <StyledLink exact to= "/estudios" activeClassName="active">
                <MenuLink title="Estudios" icon="folder" page="/estudios"/></StyledLink>
            <StyledLink exact to="/acerca" activeClassName="active">
                <MenuLink title="Acerca de" icon="info" page="/acerca"/></StyledLink>
            <StyledLink exact to="configuraciones" activeClassName="active">
                <MenuLink title="Config." icon="settings" page="/configuraciones"/></StyledLink>
        </Container>
    )
}

export default Menu
