import React from 'react';
import '../assets/navbar.css';




export default class Example extends React.Component {
    render() {
        return (
            <div>

                <div className='nav' style= {{backgroundcolor:'#ffffff;'}}>
                    <nav class="navbar navbar-expand-lg">
                        <a class="navbar-brand" href="#">Logo</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                            <form class="form-inline my-2 my-lg-0">
                                {/* <input class="form-control mr-sm-2" type="Buscar" placeholder="Buscar" aria-label="Buscar"/>
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                            </form>

                        <div class="collapse navbar-collapse nav-options-container" id="navbarSupportedContent">
                            <ul class="navbar-nav" style = {{color:'#000000;'}}>
                                
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Log in</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Sign in</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Carrito</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Favoritos</a>
                                </li>
                               
                        
                            </ul>
                        </div>
                    </nav>
                </div>

                </div>
                )
            }
            


            
    
           





/* import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    FormGroup,
    Label,
    Input,

} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className='nav-container'>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">LOGO</NavbarBrand>
                    <FormGroup className='buscador'>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Buscar" />
                    </FormGroup>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Log in</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Sign in</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Carrito</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Favoritos</NavLink>
                            </NavItem>



                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
} */}