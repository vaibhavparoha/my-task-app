import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <React.Fragment>
            <Navbar color="light">
                <NavbarBrand><b>My Task App</b>

                </NavbarBrand>
            </Navbar>
        </React.Fragment>
    )
}

export default Header;