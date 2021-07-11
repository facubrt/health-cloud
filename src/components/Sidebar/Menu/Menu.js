import styled from 'styled-components'
import MenuLink from './MenuLink'

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Inicio" icon="home"/>
            <MenuLink title="Acerca de" icon="info" active/>
            <MenuLink title="Config." icon="settings"/>
        </Container>
    )
}

export default Menu
