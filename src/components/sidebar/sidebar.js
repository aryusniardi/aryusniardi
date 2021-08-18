import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './sidebar.elements'

const Sidebar = ({isOpen, toggle}) => {
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
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {page.map(p => (
                        <SidebarLink to={p.name} key={p.name}>
                            {p.title}
                        </SidebarLink>
                    ))}
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar