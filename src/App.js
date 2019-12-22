import React from 'react';
import logo from './logo.svg';
import './App.css';

// core components
// import ScrollNavbar from "components/Navbars/ScrollNavbar.jsx";
// import DemoFooter from "components/Footers/DemoFooter.jsx";
//
// import Headers from "./SectionsSections/Headers.jsx";
// import Features from "./SectionsSections/Features.jsx";
// import Teams from "./SectionsSections/Teams.jsx";

// styles
import "/Users/newowner/Desktop/LAU/lau_client/src/assets/css/blk-design-system-pro-react.css"

// reactstrap components
import {
  Badge,
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
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import ScrollNavbar from "./components/ScrollNavbar"
import Header from "./components/Header"
import Main from "./components/Main"
import Features from "./components/Features"
import News from "./components/News"
import Team from "./components/Team"
import Trailer from "./components/Trailer"

function App() {
  return (
    <div className="App">
      {/* Add Navbar component */}
      <ScrollNavbar />

      {/* Header component with video and little apple series description goes here */}
      <Header />
      <Main />
      <Trailer />
      <Features />
      <News />
      <Team />
    </div>
  );
}

export default App;
