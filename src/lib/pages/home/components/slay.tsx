import { Box, Button, Card, Container, Flex, Image } from '@chakra-ui/react';

export default function Slay({ title }: { title: string }) {
  return (
    <Container marginBottom={'10px'}>
      <Flex>
        <Box flex="1">
          <Image src="https://placehold.co/1120x350" alt="Image description" />
        </Box>
        <Box flex="1" justifyItems={'center'} padding={'10px'}>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '26px',
            }}
          >
            {title}
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the <b>1500s</b>, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Button>Xem thêm</Button>
        </Box>
      </Flex>
    </Container>
  );
}
