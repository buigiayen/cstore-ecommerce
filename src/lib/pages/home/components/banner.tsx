import { Flex, Image } from '@chakra-ui/react';

export default function Banner () {
  return (
    <Flex as="header" width="full" justifyContent="center">
      <Image src="https://placehold.co/2000x600"></Image>
    </Flex>
  );
};
