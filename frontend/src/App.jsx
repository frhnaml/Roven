import { Box, HStack } from "@chakra-ui/react"

import { Button } from "./components/ui/button"
import Navbar from "./components/main/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
