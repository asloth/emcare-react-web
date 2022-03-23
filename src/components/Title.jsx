import { Heading, Container, Text } from '@chakra-ui/react';

export function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={'3xl'} padding={'5'}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          <Text as={'span'} color={'purple.400'}>
            Pacientes
          </Text>
        </Heading>
      </Container>
    </>
  );
}
