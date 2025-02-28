import { Box, Flex } from '@chakra-ui/react';

import { ColorModeButton } from '@/components/ui/color-mode';

export default function Header() {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      style={{ backgroundColor: 'black' }}
      css={{ '--color': '{colors.white}', '--font-size': '14px' }}
    >
      <Box
        style={{ textAlign: 'center', width: '100%' }}
        data-state="open"
        animationDuration="slow"
      >
        <label
          style={{
            fontSize: 'var(--font-size)',
            color: 'var(--color)',
          }}
          className="fw:14px"
        >
          Sale 50%! hàng giá trị từ 500k
        </label>
      </Box>
      <Box marginLeft="auto">
        <ColorModeButton type="button" />
      </Box>
    </Flex>
  );
}
