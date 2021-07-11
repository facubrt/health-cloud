import styled from 'styled-components'
import MenuLink from './MenuLink'

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Inicio" icon="home" active page="/"/>
            <MenuLink title="Acerca de" icon="info" page="/acerca"/>
            <MenuLink title="Config." icon="settings" page="/configuraciones"/>
        </Container>
    )
}

export default Menu
