import React from 'react';
import { Box, useColorMode } from 'native-base';
import { useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';
import { bg } from 'app/debug';
import { formatHtml } from 'app/lib/formatHtml';
import { classesStyles, tagsStyles } from 'app/theme/formatHtmlStyles';

type TProps = { text: string };

export function Explanation({ text }: TProps) {
  const { width } = useWindowDimensions();
  const { colorMode } = useColorMode();

  return (
    <Box bg={bg('blue.400')} p="2">
      <HTML
        source={{ html: formatHtml(text) }}
        classesStyles={classesStyles(colorMode)}
        tagsStyles={tagsStyles}
        contentWidth={width}
      />
    </Box>
  );
}
