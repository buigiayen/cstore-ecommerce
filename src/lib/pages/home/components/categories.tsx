import { Box, Button, Card, Container, Flex, Image } from '@chakra-ui/react';

export default function Categories({ title }: { title: string }) {
  return (
    <Container
      bg={'gray.50'}
      marginBottom={'10px'}
      padding={'15px'}
      borderTopRadius={'2xl'}
    >
      <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{title}</p>
      <Flex wrap="wrap" gap={4} justifyContent="center">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((r, index) => {
          return (
            <Card.Root key={index} width="120px" border="none">
              <Card.Body gap="2" padding={'0'}>
                <Image
                  src="https://placehold.co/120x120"
                  width={120}
                  height={120}
                />
                <Card.Description mt="2">
                  Áo body cho nữ cổ cao
                  <br></br>
                  <b> 120.000 đ</b>
                </Card.Description>
              </Card.Body>
            </Card.Root>
          );
        })}
      </Flex>{' '}
      <Flex justifyContent="center" mt="4">
        <a
          style={{
            fontWeight: 'bold',
            fontSize: '12px',
          }}
        >
          Xem thêm
        </a>
      </Flex>
    </Container>
  );
}
