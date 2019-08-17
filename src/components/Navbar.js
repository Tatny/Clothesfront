import React from 'react';
import '../assets/navbar.css';




export default class Example extends React.Component {
    render() {
        return (
            <div>

                <div className='nav' style= {{backgroundcolor:'#ffffff'}}>
                    <nav className="navbar navbar-expand-lg">
                        <p className="navbar-brand"  >Breaking Barries</p>
                        {/* <img src="../img/space + design.png" alt=""/> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                            <form className="form-inline my-2 my-lg-0">
                                {/* <input className="form-control mr-sm-2" type="Buscar" placeholder="Buscar" aria-label="Buscar"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                            </form>

                        <div className="collapse navbar-collapse nav-options-container" id="navbarSupportedContent">
                            <ul className="navbar-nav" style = {{color:'#000000'}}>
                                
                                <li className="nav-item">
                                    <p className="nav-link" >Log in</p>
                                </li>

                                <li className="nav-item">
                                    <p className="nav-link" >Sign in</p>
                                </li>

                                <li className="nav-item">
                                    <p className="nav-link" >Carrito</p>
                                </li>

                                <li className="nav-item">
                                    <p className="nav-link" >Favoritos</p>
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