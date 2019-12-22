import React from "react"
import classnames from "classnames"
import {
    Button,
    UncontrolledCollapse,
    Label,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
  } from "reactstrap";
  
  class Trailer extends React.Component {
      state = {}
      render() {
        return (
          <>
            <div>
            <Container>
              <br/>
              <br/>
              <iframe width="975" height="548" src="https://www.youtube.com/embed/1ur9V-kEIXA?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Container>
            </div>
          </>
        );
      }
    }

  export default Trailer