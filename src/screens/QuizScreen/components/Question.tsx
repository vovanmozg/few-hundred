import * as React from 'react';
import { Box } from 'native-base';
import { useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';
import { DEBUG } from 'app/contants';

type TProps = { text: string };

const classesStyles = {
  container: {
    fontSize: '1.2em',
  },
  code: {
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    padding: 5,
  },
  inlineCode: {
    backgroundColor: '#F0F0F0',
    whiteSpace: 'pre',
  },
};

function formatHtml(html: string): string {
  const count = (html.match('<code>') || []).length;

  let formattedHtml = '';

  if (count === 0) {
    formattedHtml = html;
  }

  if (count === 1) {
    if (html.search('\n<code>') >= 0) {
      // Если в вопросе код многострочный
      formattedHtml = html
        .replace('\n<code>', '<div class="code"><code>')
        .replace('</code>', '</code></div>');
    } else {
      // Если в вопросе инлайн код
      formattedHtml = html
        .replace('<code>', '<span class="inlineCode"><code> ')
        .replace('</code>', ' </code></span>');
    }
  }

  formattedHtml = formattedHtml.replace('\n', '<br />');

  if (count > 1) {
    throw Error;
  }

  return `<div class="container">${formattedHtml}</div>`;
}
export function Question({ text }: TProps) {
  const { width } = useWindowDimensions();
  const bg = DEBUG ? 'blue.400' : null;
  return (
    <Box bg={bg} p="2">
      <HTML
        source={{ html: formatHtml(text) }}
        classesStyles={classesStyles}
        contentWidth={width}
      />
    </Box>
  );
  // return <HTML source={{ html: buggyHtml }} contentWidth={width} />;
}
