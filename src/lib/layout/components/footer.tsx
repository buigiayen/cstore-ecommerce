import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { BsFacebook, BsInstagram, BsX } from 'react-icons/bs';
import { FaTheaterMasks } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      bg={'black'}
      css={{ '--color': '{colors.white}' }}
      p={'30px'}
      mt={'10px'}
    >
      <Container>
        <Grid templateColumns="repeat(4, 1fr)" gap="2">
          <GridItem>
            <h1
              style={{
                color: 'var(--color)',
                fontSize: '18px',
                marginBottom: '10px',
              }}
            >
              CÔNG TY CỔ PHẦN CSHOP
            </h1>
            <p
              style={{
                color: 'var(--color)',
                fontSize: '12px',
              }}
            >
              Địa chỉ: 89 Đường Nam Kỳ Khởi Nghĩa, Quận 10, TP. Hồ Chí Minh
            </p>
            <p
              style={{
                color: 'var(--color)',
                fontSize: '12px',
              }}
            >
              Liên hệ: 0976543210
            </p>
            <p
              style={{
                color: 'var(--color)',
                fontSize: '12px',
              }}
            >
              MST: 456789123
            </p>
          </GridItem>
          <GridItem>
            <h1
              style={{
                color: 'var(--color)',
                fontSize: '18px',
                marginBottom: '10px',
              }}
            >
              Thương hiệu
            </h1>
          </GridItem>
          <GridItem>
            <h1
              style={{
                color: 'var(--color)',
                fontSize: '18px',
                marginBottom: '10px',
              }}
            >
              Hỗ trợ
            </h1>
            <p
              style={{
                color: 'var(--color)',
                fontSize: '14px',
                marginBottom: '10px',
              }}
            >
              Hỏi đáp
            </p>
            <p
              style={{
                color: 'var(--color)',
                fontSize: '14px',
                marginBottom: '10px',
              }}
            >
              Giới thiệu
            </p>
            <p
              style={{
                color: 'var(--color)',
                fontSize: '14px',
                marginBottom: '10px',
              }}
            >
              Kết nối
            </p>
          </GridItem>
          <GridItem>
            <h1
              style={{
                color: 'var(--color)',
                fontSize: '18px',
                marginBottom: '10px',
              }}
            >
              Phương thức thanh toán
            </h1>
            <Image src="https://canifa.com/assets/images/pay.svg"></Image>
            <br></br>
            <h1
              style={{
                color: 'var(--color)',
                fontSize: '18px',
                marginBottom: '10px',
              }}
            >
              Kết nối với chúng tôi
            </h1>
            <Flex gap={4}>
              <BsFacebook style={{ color: 'white', fontSize: '24px' }} />
              <BsInstagram style={{ color: 'white', fontSize: '24px' }} />
              <BsX style={{ color: 'white', fontSize: '24px' }} />
              <FaTheaterMasks style={{ color: 'white', fontSize: '24px' }} />
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Flex>
  );
};
