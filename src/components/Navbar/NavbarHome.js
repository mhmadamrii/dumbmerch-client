import {  Nav, Navbar, } from "react-bootstrap";
import Logo from "../../assets/Logo.png";

const NavbarHome = () => {
    return(
        <>
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{width: '100%', border: '1 px solid red !important'}}>
            <a href="/homepage">
                <img src={Logo} style={{ width: '70px', marginLeft: '50px'}} alt="logo" />
            </a>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" bg="dark">
            <Nav className="me-auto"></Nav>
            <Nav style={{color: 'white', marginRight: '50px'}}>
                <Nav.Link href="/complain">Complain</Nav.Link>
                <Nav.Link href="/category">Category</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/product">Product</Nav.Link>
                <Nav.Link href="/">Logout</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
};

export default NavbarHome;