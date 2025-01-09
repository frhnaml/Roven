import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import Banner from "@/components/ProductList/Banner";
import PerfumeCard from "@/components/ProductList/PerfumeCard"; // Import the PerfumeCard component

// Import images
import Perfume1 from "../assets/PERFUME FEMININ/Perfume 1.jpg";
import Perfume2 from "../assets/PERFUME FEMININ/Perfume 2.jpg";
import Perfume3 from "../assets/PERFUME FEMININ/Perfume 3.jpg";
import Perfume4 from "../assets/PERFUME FEMININ/Perfume 4.jpg";
import Perfume5 from "../assets/PERFUME FEMININ/Perfume 5.jpg";
import Perfume6 from "../assets/PERFUME FEMININ/Perfume 8.jpg";
import Perfume7 from "../assets/PERFUME FEMININ/Perfume 15.jpg";

// Perfume data
const perfumes = [
  { name: "Perfume 1", image: Perfume1 },
  { name: "Perfume 2", image: Perfume2 },
  { name: "Perfume 3", image: Perfume3 },
  { name: "Perfume 4", image: Perfume4 },
  { name: "Perfume 5", image: Perfume5 },
  { name: "Perfume 6", image: Perfume6 },
  { name: "Perfume 7", image: Perfume7 },
];

function ProductList() {
  return (
    <Box>
      {/* Banner Component */}
      <Banner />

      {/* Perfume Cards */}
      <SimpleGrid columns={[1, 2, 3, 4]} gapX={2} mt={10} px={2}>
        {perfumes.map((perfume, index) => (
          <PerfumeCard 
            key={index} 
            name={perfume.name} 
            image={perfume.image} 
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ProductList;
