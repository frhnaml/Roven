import { useState, useEffect } from 'react';
import { Box, Text, HStack, Image, Spinner } from '@chakra-ui/react';
import { useStore } from '../../Store/Review'; 

const logos = [
  { src: '/path/to/fimela-logo.png', alt: 'Fimela Logo' },
  { src: '/path/to/female-daily-logo.png', alt: 'Female Daily Logo' },
  { src: '/path/to/nova-logo.png', alt: 'Nova Logo' },
  { src: '/path/to/media-indonesia-logo.png', alt: 'Media Indonesia Logo' },
  { src: '/path/to/mix-logo.png', alt: 'Mix Logo' }
];

const ReviewShowcase = () => {
  const { reviews, isLoading, error, fetchReviews } = useStore();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    fetchReviews(); // Fetch reviews on component mount

    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 7000); // 7 seconds interval

    return () => clearInterval(interval);
  }, [fetchReviews, reviews.length]);

  if (isLoading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <Text color="red.500">Error: {error}</Text>;
  }

  return (
    <Box textAlign="center" py={10} px={5}>
      {reviews.length > 0 && (
        <>
          <Text fontSize="xl" fontStyle="italic" mb={2}>
            {`'${reviews[currentReviewIndex].comment}'`} {/* Display only the comment */}
          </Text>
          <Text fontSize="md" color="gray.500">
            {`User ID: ${reviews[currentReviewIndex].user_id}`} {/* Display the user_id */}
          </Text>
        </>
      )}

      <HStack justify="center" spacing={8} mt={10}>
        {logos.map((logo, index) => (
          <Image key={index} src={logo.src} alt={logo.alt} maxW="100px" opacity={0.8} />
        ))}
      </HStack>
    </Box>
  );
};

export default ReviewShowcase;
