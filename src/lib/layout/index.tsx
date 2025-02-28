'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { Footer } from './components/footer';
import Header from './components/header'

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto">
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
};
