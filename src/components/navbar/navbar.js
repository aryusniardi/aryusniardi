import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineDribbble,
} from 'react-icons/ai'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    IconButton,
    MenuIcon
} from './navbar.elements'

const Navbar = ({toggle}) => {
    const social = [
        {
            name: 'Dribbble',
            link: 'https://dribbble.com/Aryusniardi',
            icon: <AiOutlineDribbble color="#EA4C89" />
        },
        {
            name: 'Github',
            link: 'https://github.com/aryusniardi',
            icon: <AiFillGithub color="#242424"/>
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/arief-rahman-y-7950b3151/',
            icon: <AiFillLinkedin color="#0A66C2"/>
        }
    ]

    const page = [
        {
            name: 'profile',
            title: 'Profile'
        },
        {
            name: 'portfolio',
            title: 'Portfolio'
        },
        {
            name: 'contact',
            title: 'Contact'
        }
    ]

    return (
        <React.Fragment>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/"><h1>Arief<span>.</span></h1></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {page.map(p => (
                            <NavItem key={p.name}>
                                <NavLinks to={p.name}>{p.title}</NavLinks>
                            </NavItem>
                        ))}
                    </NavMenu>
                    <MenuIcon>
                        {social.map(s => (
                            <NavItem key={s.name}>
                                <IconButton href={s.link}>
                                    {s.icon}
                                </IconButton>
                            </NavItem>
                        ))}
                    </MenuIcon>
                </NavbarContainer>
            </Nav>
        </React.Fragment>
    )
}

export default Navbar