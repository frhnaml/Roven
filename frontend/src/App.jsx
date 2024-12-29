import { Box } from '@chakra-ui/react';
import Navbar from './components/main/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Wishlist from './pages/Wishlist';
import Items from './pages/Items';
import { useColorModeValue } from './components/ui/color-mode';

function App() {
  return (
    <Router>
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
