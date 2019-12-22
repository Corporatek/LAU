import React from "react"
import classnames from "classnames"

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Table,
    Container,
    Row,
    Col
  } from "reactstrap";

  class News extends React.Component {
      render(){
          return(
          <div style={{width: "100%"}}>
          <div className="blogs-5">
            {/* <Container> */}
              <Row>
                <Col className="ml-auto mr-auto" >
                  <h2 className="title" style={{textAlign: "left", marginLeft: "15px", fontSize: "3.0625rem"}}>IN THE NEWS</h2>
                  <Row>
                    <Col lg="4" md="6">
                      <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_CNN.png")}
                            />
                          </a>
                        </div>
                        <CardBody>
                          <CardTitle tag="h4" style={{fontSize: "23px"}}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                            WATCH: 'LITTLE APPLE' HAS GIVEN US THE BLACK GIRL SUPERHERO WE NEED                            </a>
                          </CardTitle>
                          <p className="card-description" style={{fontSize: "20px", color:  "white"}}>
                          ESSENCE was invited to a screening at Harlem’s historical 
                          Schomburg Center during the Black Comic Book Festival and
                         in just three short episodes, it was clear: Apple is the superhero
                          we have been waiting for. And what’s better, Milan Williams is 
                          the little piece of Black girl magic we didn’t know we were missing....{" "}
                          </p>
                          <CardFooter>
                            <div className="author">
                              <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_CNN_Circle.png")}
                              />
                              <span className="ml-1">Mike John</span>
                            </div>
                            <div className="stats stats-right">
                              <i className="tim-icons icon-watch-time" /> 5 min
                              read
                            </div>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_ESSENCE_logo.jpg")}
                            />
                          </a>
                        </div>
                        <CardBody>
                          <CardTitle tag="h4" style={{textTransform: "uppercase"}}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                            Greta Thunberg isn't alone. Meet some other young activists who are leading the environmentalist fight                             
                            </a>
                            
                          </CardTitle>
                          <p className="card-description">
                          Greta Thunberg got the world's attention. Around the globe, young people 
                          are sounding the alarm on climate change and environmental issues by 
                          organizing rallies and confronting policymakers. Meet five others who are 
                          leading the fight.
..{" "}
                          </p>
                          <CardFooter>
                            <div className="author">
                              <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_ESSENCE_logo.jpg")}
                              />
                              <span className="ml-1">Jona Zmud</span>
                            </div>
                            <div className="stats stats-right">
                              <i className="tim-icons icon-watch-time" /> 5 min
                              read
                            </div>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" xs="12">
                      <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_classroom.png")}
                              style={{borderRadius: "100%",
                                      // height: "300px",
                                      maxWidth: "400px",
                                      objectFit: "cover"}}
                            />
                          </a>
                        </div>
                        <CardBody>
                          
                          <CardTitle tag="h4">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                            5 VALID REASONS WHY ‘LITTLE APPLE’ IS THE BEST WEB SERIES SINCE ‘AWKWARD BLACK GIRL’                            </a>
                          </CardTitle>
                          <p className="card-description">
                          There aren’t many things in life more intriguing than a young Black 
                          girl having super powers and using them to fight all types of oppression.
..{" "}
                          </p>
                          <CardFooter>
                            <div className="author">
                              <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_GG.png")}
                              />
                              <span className="ml-1">GlobalGrind</span>
                            </div>
                            <div className="stats stats-right">
                              <i className="tim-icons icon-heart-2" /> 2.4K
                            </div>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            {/* </Container> */}
          </div>

          </div>
          )
      }
  }

export default News