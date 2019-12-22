import React from "react"
import { Button, Container } from "reactstrap";
// import classnames from "classnames"

class Header extends React.Component {
    scrollPage = e => {
      e.preventDefault();
    //   document.getElementById("pricing").scrollIntoView();
    };

render() {
    return (
    <div className="header header-4">
        <div className="header-wrapper">
        <div className="page-header header-video header-filter">
            <div className="overlay" />
                <video
                autoPlay="autoplay"
                loop="loop"
                muted="muted"
                playsInline="playsinline"
                >
                    <source
                        src="https://vici-intern-test.s3.amazonaws.com/1573325154442.mp4"
                        type="video/mp4"
                    />
                </video>
                <Container className="text-left">
                <a>
                <img alt="logo" 
                     class="center"
                     src={require("/Users/newowner/Desktop/LAU/lau_client/src/assets/img/LAU_LOGO_White.png")}
                     style={{
                         height: "200px",
                         display: "block",
                         marginLeft: "auto",
                         marginRight: "auto",
                         width: "200px"
                     }}
                />
                </a>
                <br />
                <br />
                <div className="video-text">
                    <h1 
                    className="description"
                    style={{
                        fontSize: "64px",
                        textAlign: "left"
                }}
                    >
                    A digital space to experience Afrofuturism 
                    </h1>
                    <br />
                    <Button
                        className="btn-simple btn-neutral"
                        color="primary"
                        href="#register"
                        size="lg"
                        onClick={e => e.preventDefault()}
                        style={{fontSize: "1.875rem"}}
                        >
                        Join The Universe
                    </Button>
                </div>
                </Container>
            </div>
        </div>
        </div>
    )}
}

export default Header