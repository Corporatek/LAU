import React from "react"
import {
    Button,
    UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Collapse,
    NavbarToggler,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
  } from "reactstrap";

class ScrollNavbar extends React.Component {
    state = {
        navbarColor: "navbar-transparent"
    }
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    componentDidMount() {
        window.addEventListener("scroll", this.changeNavbarColor)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.changeNavbarColor)
    }
    changeNavbarColor = () => {
        if (
            document.documentElement.scrollTop > 299 ||
            document.body.scrollTop > 299
        ) {
            this.setState({
                navbarColor: "bg-info"
            })
        } else if (
            document.documentElement.scrollTop < 300 ||
            document.body.scrollTop < 300
        ) {
            this.setState({
                navbarColor: "navbar-transparent"
            })
        }
    }
    render() {
        return (
            <Navbar className="fixed-top" expand="lg" id="navbar-scroll" color="orchid">
                <Container>
                <div className="navbar-translate">
                    <NavbarBrand href="#home" onClick={e => e.preventDefault()}>
                    <div 
                    className="logo"
                    style={{float: "left"}}
                    >
                    <img
                            alt="..."
                            className="img"
                            src={require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_LOGO_White.png")}
                            width="45"
                            height="45"
                            style={{margin: "5px 15px"}}
                          />
                    </div>
                   <div
                   style={{
                       verticalAlign: "middle",
                       display: "inline-block",
                       textAlign: "left",
                       border: "5px",
                       marginTop: "14px"

                }}
                   >
                   
                    Little Apple Universe
                    </div>
                    </NavbarBrand>
                    
                    <NavbarToggler onClick={this.toggle}>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </NavbarToggler>
                    </div>

                    <Nav navbar-right className="justify-content-end">
                        <NavItem>
                            <NavLink href="#" style={{color: "white"}}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" style={{color: "white"}}>Features</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" style={{color: "white"}}>News</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" style={{color: "white"}}>Team</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink disabled href="#">Disabled Link</NavLink>
                        </NavItem> */}
                    
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default ScrollNavbar