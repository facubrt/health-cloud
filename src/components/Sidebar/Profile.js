import styled from 'styled-components'
import Image from '../../assets/images/profilelg.png'

const Container = styled.div`
    margin-top: 5rem;
    text-align: center;
`

const ProfileImg = styled.img`
    height: 5rem;
    margin: 1rem;
`

const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 400;
    color: ${({theme}) => theme.textColor}
`

const Profile = () => {
    return (
        <Container>
            <ProfileImg src={Image}/>
            <ProfileName>Facundo Barreto</ProfileName>

        </Container>
    )
}

export default Profile
