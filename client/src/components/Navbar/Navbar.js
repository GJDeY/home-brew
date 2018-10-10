import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Navigation extends React.Component {

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Home Brew 🍻</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/profile">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/signup">Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div >
        );
    }
}

export default Navigation;