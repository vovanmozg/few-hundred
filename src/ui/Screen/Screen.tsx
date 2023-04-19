import React from 'react';
import { Box } from 'native-base';
import { useHomeScreenStyles } from 'app/screens/HomeScreen/HomeScreen.styles';

export function Screen({ children }) {
  const styles = useHomeScreenStyles();

  return (
    <Box h="100%" w="100%" bg={styles.bg}>
      {children}
    </Box>
  );
}
