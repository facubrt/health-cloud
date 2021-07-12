import styled from 'styled-components'
import Profile from './Profile'
import Menu from './Menu/Menu'
import ToggleSwitch from './ToggleSwitch'


const Container = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    //width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Sidebar = () => {
    return (
        <Container className="w-100 d-flex">
            <Profile/>
            <Menu/>
            <ToggleSwitch/>
        </Container>
    )
}

export default Sidebar
