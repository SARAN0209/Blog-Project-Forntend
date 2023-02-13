import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="p-3"
      >
        <Container>
          <Navbar.Brand
            style={{ fontFamily: "fantasy", fontSize: "30px",color:"chocolate" }}
            href="#home"
          >
            MY BLOG
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="m-auto"
              style={{
                fontFamily: "serif",
                fontSize: "25px",
                color: "pink",
              }}
            >
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
              {user?.result?._id && (
                <>
                  <Nav.Link as={Link} to="/addBlog">
                    ADD BLOG
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard">
                    DASHBOARD
                  </Nav.Link>
                </>
              )}
              {user?.result?._id ? (
                <Nav.Link onClick={() => handleLogout()}>LOGOUT</Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  LOGIN
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
          {user?.result?._id && (
            <div
              style={{
                fontFamily: "ui-monospace",
                fontSize: "25px",
              }}
              className="d-flex align-items-center"
            >
              {`${user?.result?.name}`}
            </div>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
