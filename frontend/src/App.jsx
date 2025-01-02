import { Box } from "@chakra-ui/react";
import Navbar from "./components/main/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/main/Footer";
import Register from "./pages/Register";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <Box>
        <Navbar zIndex={1} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
