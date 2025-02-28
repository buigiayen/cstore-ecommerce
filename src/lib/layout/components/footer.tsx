import { Box, Flex, Grid, GridItem, Image, Link, Text } from '@chakra-ui/react';

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
      <Grid templateColumns="repeat(6, 1fr)" gap="6">
        <GridItem colSpan={2}>
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
        <GridItem colSpan={1}>
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
        <GridItem colSpan={1}>
          <h1
            style={{
              color: 'var(--color)',
              fontSize: '18px',
              marginBottom: '10px',
            }}
          >
            Hỗ trợ
          </h1>
        </GridItem>
        <GridItem colSpan={4}>
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
        </GridItem>
      </Grid>
    </Flex>
  );
};
