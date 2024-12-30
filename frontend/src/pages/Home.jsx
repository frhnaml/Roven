import { Button } from '@/components/ui/button'
import { Container } from '@chakra-ui/react'
import React from 'react'

function Home() {
  return (
    <Container maxW="container.xl" py={12}>
      <Button>
        Mewing
      </Button>
    </Container>
  )
}

export default Home