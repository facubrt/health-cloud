import styled from 'styled-components'
import MenuLink from './MenuLink'

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Inicio" icon="home" active page="/health-cloud"/>
            <MenuLink title="Acerca de" icon="info" page="/health-cloud/acerca"/>
            <MenuLink title="Config." icon="settings" page="/health-cloud/configuraciones"/>
        </Container>
    )
}

export default Menu
