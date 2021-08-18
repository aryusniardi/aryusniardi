import React from 'react'
import {
    ProfileContainer,
    ProfileDescription,
    ProfilePicture,
    Description,
    PictureName,
    Picture,
    PicturePDF
} from './profile.elements'
import {
    Header,
    Container
} from '../elements'
import image from '../../images/Arief.png'

const Profile = () => {
    return (
        <ProfileContainer>
            <Header>Profile</Header>
            <Container>
                <ProfileDescription>
                    <Description>
                        I am a Informatics Engineer Student at Politeknik TEDC Bandung.
                        I love every aspect of software development, but when it comes to Code.
                        <br/>
                        <q>Things are just getting more interesting</q>.
                    </Description>
                </ProfileDescription>
                <ProfilePicture>
                    <Picture src={image}/>
                    <PictureName><span>Arief</span> Rahman Y</PictureName>
                    <PicturePDF href="https://drive.google.com/uc?export=download&id=1Ery7raHeuBwzRXHsFBDZNtuDlrEm_wUs" target="_blank" download>Download CV</PicturePDF>
                </ProfilePicture>
            </Container>
        </ProfileContainer>
    )
}

export default Profile