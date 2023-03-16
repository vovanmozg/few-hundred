import * as React from 'react';
import { Box } from 'native-base';
import { useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';
import { bg } from 'app/debug';
import { formatHtml } from 'app/lib/formatHtml';
import { classesStyles, tagsStyles } from 'app/lib/formatHtmlStyles';

type TProps = { text: string };

export function Explanation({ text }: TProps) {
  const { width } = useWindowDimensions();

  return (
    <Box bg={bg('blue.400')} p="2">
      <HTML
        source={{ html: formatHtml(text) }}
        classesStyles={classesStyles}
        tagsStyles={tagsStyles}
        contentWidth={width}
      />
    </Box>
  );
}
