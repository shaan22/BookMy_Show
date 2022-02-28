import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div>
        <Navbar bg="dark" expand="lg" variant="dark" >
            <Container>
                <Navbar.Brand href="#">
                <img alt="bookmyshow" src="//in.bmscdn.com/webin/common/icons/logo.svg"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/movies">All Movies</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/register">
                        Login
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/register" >
                    Sign Up
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container fluid style={{background:"black", color:"white",height:"2rem"}}>
            <a href="/movies" alt="Events" style={{color:'white',marginLeft:'5em'}}>
                Movies
                </a>
        </Container>
    </div>
  );
}

export default Header;
