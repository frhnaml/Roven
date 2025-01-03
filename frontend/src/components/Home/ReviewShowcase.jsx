import React, { useState, useEffect } from 'react';
import { Box, Text, HStack, Image } from '@chakra-ui/react';

const reviews = [
  "Konsep parfum Mine. dibuat simple dan playful. Dengan inovasi koleksi khusus layering ini, kami berharap agar pemakai menemukan wangi unik yang sesuai dengan gaya dan dapat merefleksikan identitasnya dengan mudah dan menyenangkan",
  "Review B: Customizable perfume with playful and elegant designs, allowing users to express themselves uniquely and easily.",
  "Review C: An innovative fragrance layering collection for a unique, stylish, and enjoyable scent experience."
];

const logos = [
  { src: '/path/to/fimela-logo.png', alt: 'Fimela Logo' },
  { src: '/path/to/female-daily-logo.png', alt: 'Female Daily Logo' },
  { src: '/path/to/nova-logo.png', alt: 'Nova Logo' },
  { src: '/path/to/media-indonesia-logo.png', alt: 'Media Indonesia Logo' },
  { src: '/path/to/mix-logo.png', alt: 'Mix Logo' }
];

const ReviewShowcase = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 7000); // 7 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <Box textAlign="center" py={10} px={5}>
      <Text fontSize="xl" fontStyle="italic" mb={10}>
        {`'${reviews[currentReviewIndex]}'`}
      </Text>

      <HStack justify="center" spacing={8} mt={10}>
        {logos.map((logo, index) => (
          <Image key={index} src={logo.src} alt={logo.alt} maxW="100px" opacity={0.8} />
        ))}
      </HStack>
    </Box>
  );
};

export default ReviewShowcase;
