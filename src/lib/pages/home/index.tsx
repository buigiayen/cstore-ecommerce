import { Box, Flex } from '@chakra-ui/react';
import Banner from './components/banner';
import MenuHeader from './components/menu';
import Categories from './components/categories';
import Slay from './components/slay';
export const Home = () => {
  return (
    <Flex direction="column" as={'main'}>
      <Banner />
      <MenuHeader />
      <Categories title="Flash sale" />
      <Slay title='Điểm nhấn sức mạnh' />
      <Categories title="Hàng mới về" />
    </Flex>
  );
};
