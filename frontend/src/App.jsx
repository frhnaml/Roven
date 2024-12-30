import { Box} from "@chakra-ui/react"
import Navbar from "./components/main/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login";
import Footer from "./components/main/Footer";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
