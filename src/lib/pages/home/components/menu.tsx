import { Box, Center, Container, Flex, Icon } from '@chakra-ui/react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaHouseChimneyWindow, FaComputer } from 'react-icons/fa6';
import { FaToolbox } from 'react-icons/fa';
import { SiStylelint } from 'react-icons/si';
import { BiAtom } from 'react-icons/bi';
import { GiWashingMachine } from 'react-icons/gi';

export default async function MenuHeader() {
  const Item = [
    {
      label: 'Hàng nước ngoài',
      value: 'Hang-nuoc-ngoai',
      icon: AiOutlineGlobal,
    },
    {
      label: 'Hàng trong nước',
      value: 'Hang-nuoc-ngoai',
      icon: FaHouseChimneyWindow,
    },
    {
      label: 'Phụ kiện',
      value: 'Hang-nuoc-ngoai',
      icon: FaToolbox,
    },
    {
      label: 'Thời trang',
      value: 'Hang-nuoc-ngoai',
      icon: SiStylelint,
    },
    {
      label: 'Công nghệ',
      value: 'Hang-nuoc-ngoai',
      icon: BiAtom,
    },
    {
      label: 'Thiết bị điện tử',
      value: 'Hang-nuoc-ngoai',
      icon: FaComputer,
    },
    {
      label: 'Đồ gia dụng',
      value: 'Hang-nuoc-ngoai',
      icon: GiWashingMachine,
    },
  ];
  return (
    <Container bg={'gray.50'} marginBottom={'10px'} borderTopRadius={'2xl'}>
      <Center>
        {Item.map((rs, index) => {
          return (
            <Box key={index} w="100%" p="4">
              <Flex align={'center'} direction="column">
                <rs.icon
                  size={'34px'}
                  style={{ marginBottom: '5px' }}
                ></rs.icon>
                <label style={{ fontWeight: 'normal', fontSize: '12px' }}>
                  {rs.label}
                </label>
              </Flex>
            </Box>
          );
        })}
      </Center>
    </Container>
  );
}
