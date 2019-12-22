import React from "react"
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


class Features extends React.Component {
  
    render() {
    return (
        <div className="section blogs-4">
              <Container fluid>
                <h1 className="title text-left" style={{
                  fontSize: "3.0625rem"
                }} >
                  WHAT TO EXPECT INSIDE <br />
                  THE LITTLE APPLE UNIVERSE
                </h1>
                <br />
                {/* Below is a circular element for each feature */}
                {/* <div data-animation="zooming"
                     class="card-blog card-background card"
                     data-animation="zooming">
                  <a>
                    <img 
                    style={{borderRadius: "100%",
                    height: "300px",
                    maxWidth: "300px",
                    objectFit: "cover"
                  }}
                    alt="test" 
                    class="img img-raised" 
                    src="https://www.kcrw.com/culture/shows/dont-at-me/the-dream-with-issa-rae/@@images/rectangular_image/page-header?v=1547579219.6" />
                  </a>
                  <br />
                  <div className="content-bottom">
                  <img alt="logo" 
                       src="/static/media/LAU_LOGO_White.a81444f0.png"
                       style={{
                         height: "100px",
                         width: "100px",
                         WebkitTransition: "all 2s ease",
                         MozTransition: "all 2s ease",
                         MsTransition: "all 2s ease",
                         transition: "all 2s ease"
                       }}
                  />
                  <br />
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <h3>The Series: Season 1</h3>
                          </a>
                        </div>
                </div> */}


                {/* Old code below */}
                <Row className="justify-content-center">
                  <Col lg="3">
                    <Card
                      className="card-blog card-background"
                      data-animation="zooming"
                    >
                      <div
                        className="full-background"
                        style={{
                          backgroundImage:
                            "url(" +
                            require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_pic1.png") +
                            ")"
                        }}
                      />
                      <CardBody>
                        <div className="content-bottom">
                          <h6 className="card-category">Little Apple</h6>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3">The Series (Season 1)</CardTitle>
                          </a>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="3">
                    <Card
                      className="card-blog card-background"
                      data-animation="zooming"
                    >
                      <div
                        className="full-background"
                        style={{
                          backgroundImage:
                            "url(" +
                            require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_Documentary.png") +
                            ")"
                        }}
                      />
                      <CardBody>
                        <div className="content-bottom">
                          <h6 className="card-category">Little Apple</h6>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3">The Documentary</CardTitle>
                          </a>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="3">
                    <Card
                      className="card-blog card-background"
                      data-animation="zooming"
                    >
                      <div
                        className="full-background"
                        style={{
                          backgroundImage:
                            "url(" +
                            require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_Making2.png") +                            ")"
                        }}
                      />
                      <CardBody>
                        <div className="content-bottom">
                          <h6 className="card-category">
                            Making Apple                          
                          </h6>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3">The Aftershow</CardTitle>
                          </a>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="3">
                    <Card
                      className="card-blog card-background"
                      data-animation="zooming"
                    >
                      <div
                        className="full-background"
                        style={{
                          backgroundImage:
                            "url(" + require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_Podcasts.png") + ")"
                        }}
                      />
                      <CardBody>
                        <div className="content-bottom">
                          <h6 className="card-category">Little Apple</h6>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3">
                                Podcasts
                            </CardTitle>
                          </a>
                        </div>
                      </CardBody>
                    </Card>
                    </Col>
                  
                </Row>
                {/* <Row className="justify-content-center">
                    <Col lg="3">
                    <Card
                      className="card-blog card-background"
                      data-animation="zooming"
                    >
                      <div
                        className="full-background"
                        style={{
                          backgroundImage:
                            "url(" + require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_Class.png") + ")"
                        }}
                      />
                      <CardBody>
                        <div className="content-bottom">
                          <h6 className="card-category">Little Apple</h6>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3">
                              Curriculum & Whitepapers
                            </CardTitle>
                          </a>
                        </div>
                      </CardBody>
                    </Card>
                    </Col>
                    <Col lg="3">
                    <Card
                      className="card-blog card-background"
                      data-animation="zooming"
                    >
                      <div
                        className="full-background"
                        style={{
                          backgroundImage:
                            "url(" + require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_Comic.jpg") + ")"
                        }}
                      />
                      <CardBody>
                        <div className="content-bottom">
                          <h6 className="card-category">Little Apple</h6>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3">
                              Comic Books & Posters
                            </CardTitle>
                          </a>
                        </div>
                      </CardBody>
                    </Card>
                    </Col>
                    {/* <Col lg="3"> */}
                    {/* <Card
                      className="card-blog card-background"
                      data-animation="zooming"
                    >
                      <div
                        className="full-background"
                        style={{
                          backgroundImage:
                            "url(" + require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_Podcasts.png") + ")"
                        }}
                      />
                      <CardBody>
                        <div className="content-bottom">
                          <h6 className="card-category">Little Apple</h6>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h3">
                                Podcasts
                            </CardTitle>
                          </a>
                        </div>
                      </CardBody>
                    </Card>
                    </Col> */}
        

              </Container>
            </div>
        )
    }
}

export default Features