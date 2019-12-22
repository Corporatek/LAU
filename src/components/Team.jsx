import React from "react"

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Table,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    Carousel,
    CarouselItem
  } from "reactstrap";

class Team extends React.Component {
    render() {
        return (
            <div className="team-5">
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title" style={{fontSize: "3.0625rem"}}>The Little Apple Universe Team</h2>
                  <h4 className="description">
                    {/* This is the paragraph where you can write more details about
                    your team. Keep you user engaged by providing meaningful
                    information. */}
                    The Little Apple team is comprised of multi-talented individuals that play pivotal roles in 
                    bringing the vision for the series and universe to fruition. Below you can find some of the prominent people that acted in,
                    wrote, directed produced, designed and software developed the Little Apple Universe experience.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Card className="card-profile profile-bg">
                    <CardHeader
                      style={{
                        backgroundImage:
                          "url(" + require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/ben-konfrst.jpg") + ")"
                      }}
                    >
                      <div className="card-avatar">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/Lau_riley.jpg")}
                          />
                        </a>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <CardTitle tag="h3">Riley S. Wilson</CardTitle>
                      <h6 className="category text-primary">Executive Producer, Writer, Director</h6>
                      <p className="card-description">
                      Writer, Director and Executive Producer, Riley S. Wilson originally began official 
                      work on Little Apple in 2015. A year later, the project is in finals for Sundance's 
                      Episodic Lab. After not receiving the appointment, he began work to self-produce the 
                      project...{" "}
                      <a
                              href="https://www.essence.com/videos/milan-williams-little-apple-black-superhero-we-see-you-sis/"
                              onClick={e => e.preventDefault()}
                            >
                              Read More
                            </a>
                      </p>
                    </CardBody>
                    
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile profile-bg">
                    <CardHeader
                      style={{
                        backgroundImage:
                          "url(" + require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/ben-konfrst.jpg") + ")"
                      }}
                    >
                      <div className="card-avatar">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/Lau_milan.jpg")}
                          />
                        </a>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <CardTitle tag="h3">Milan Williams</CardTitle>
                      <h6 className="category text-primary">Actress - "Apple"</h6>
                      <p className="card-description">
                      Milan Williams has a strong passion for the arts. She has been acting professionally 
                      since the age of 6 and has starred in national commercials, off- Broadway performances, 
                      voiceovers, short films, live screen play readings and more. When Milan is not acting, 
                      she enjoys...
                      <a
                              href="https://www.essence.com/videos/milan-williams-little-apple-black-superhero-we-see-you-sis/"
                              onClick={e => e.preventDefault()}
                            >
                              Read More
                            </a>
                      </p>
                    </CardBody>
                    
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile profile-bg">
                    <CardHeader
                      style={{
                        backgroundImage:
                          "url(" +
                          require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/ben-konfrst.jpg") +
                          ")"
                      }}
                    >
                      <div className="card-avatar">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/lau_lisa.jpg")}
                          />
                        </a>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <CardTitle tag="h3">Lisa Cortés</CardTitle>
                      <h6 className="category text-primary">Executive Producer</h6>
                      <p className="card-description">
                      CEO of Cortés Films, is a producer and director.  She was the Executive Producer 
                      of the Academy Award® and Sundance winning film, Precious. Her productions have 
                      received over 70 international awards...
                      <a
                              href="https://www.essence.com/videos/milan-williams-little-apple-black-superhero-we-see-you-sis/"
                              onClick={e => e.preventDefault()}
                            >
                              Read More
                            </a>
                      </p>
                    </CardBody>
                   
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile profile-bg">
                    <CardHeader
                      style={{
                        backgroundImage:
                          "url(" + require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/ben-konfrst.jpg") + ")"
                      }}
                    >
                      <div className="card-avatar">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/olivia.jpg")}
                          />
                        </a>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <CardTitle tag="h3">Milan Williams</CardTitle>
                      <h6 className="category text-primary">Writer</h6>
                      <p className="card-description">
                      Milan Williams has a strong passion for the arts. She has been acting professionally 
                      since the age of 6 and has starred in national commercials, off- Broadway performances, 
                      voiceovers, short films, live screen play readings and more. When Milan is not acting, 
                      she enjoys...
                      <a
                              href="https://www.essence.com/videos/milan-williams-little-apple-black-superhero-we-see-you-sis/"
                              onClick={e => e.preventDefault()}
                            >
                              Read More
                            </a>
                      </p>
                    </CardBody>
                    
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile profile-bg">
                    <CardHeader
                      style={{
                        backgroundImage:
                          "url(" +
                          require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/ben-konfrst.jpg") +
                          ")"
                      }}
                    >
                      <div className="card-avatar">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/lau_lisa.jpg")}
                          />
                        </a>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <CardTitle tag="h3">Lisa Cortés</CardTitle>
                      <h6 className="category text-primary">Executive Producer</h6>
                      <p className="card-description">
                      CEO of Cortés Films, is a producer and director.  She was the Executive Producer 
                      of the Academy Award® and Sundance winning film, Precious. Her productions have 
                      received over 70 international awards...
                      <a
                              href="https://www.essence.com/videos/milan-williams-little-apple-black-superhero-we-see-you-sis/"
                              onClick={e => e.preventDefault()}
                            >
                              Read More
                            </a>
                      </p>
                    </CardBody>
                   
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile profile-bg">
                    <CardHeader
                      style={{
                        backgroundImage:
                          "url(" + require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/ben-konfrst.jpg") + ")"
                      }}
                    >
                      <div className="card-avatar">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/olivia.jpg")}
                          />
                        </a>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <CardTitle tag="h3">Milan Williams</CardTitle>
                      <h6 className="category text-primary">Writer</h6>
                      <p className="card-description">
                      Milan Williams has a strong passion for the arts. She has been acting professionally 
                      since the age of 6 and has starred in national commercials, off- Broadway performances, 
                      voiceovers, short films, live screen play readings and more. When Milan is not acting, 
                      she enjoys...
                      <a
                              href="https://www.essence.com/videos/milan-williams-little-apple-black-superhero-we-see-you-sis/"
                              onClick={e => e.preventDefault()}
                            >
                              Read More
                            </a>
                      </p>
                    </CardBody>
                    
                  </Card>
                </Col>
              </Row>
          </div>
        )
    }
}

export default Team