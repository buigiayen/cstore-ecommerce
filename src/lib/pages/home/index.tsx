
import {  Flex } from '@chakra-ui/react';
import Banner from './components/banner';
import MenuHeader from './components/menu';
export const Home = () => {
  return (
    <Flex
      direction="column"
      as={'main'}
    >
      <Banner />
      <MenuHeader />
    </Flex>
  );
};
