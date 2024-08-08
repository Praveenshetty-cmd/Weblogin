import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';
import logo from "./assets/italent.logo.png";
import Login from "./components/Login";
import UserRegister from "./components/UserRegister";
import HomePage from "./components/HomePage"; // Assume you have a HomePage component

// Component to handle conditional logo rendering based on path
const LogoWrapper = ({ children }) => {
  const location = useLocation();
  const showLogo = location.pathname === '/login' || location.pathname === '/register';

  return (
    <Flex minHeight="100vh" bg="gray.50">
      {showLogo && (
        <Box position="absolute" top={4} left={4}>
          <Image
            src={logo}
            alt="Website Logo"
            boxSize="150px"
            objectFit="contain"
          />
        </Box>
      )}
      {children}
    </Flex>
  );
};

const App = () => {
  const [cookies] = useCookies(['accessToken']);
  const isAuthenticated = !!cookies.accessToken;

  return (
    <Router>
      <LogoWrapper>
        <Flex align="center" justify="center" flex="1" padding={4}>
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Navigate to="/" />} />
                <Route path="/register" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<UserRegister />} />
              </>
            )}
          </Routes>
        </Flex>
      </LogoWrapper>
    </Router>
  );
};

export default App;
