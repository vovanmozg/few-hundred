import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';

type TProps = { text: string };

function formatHtml(html: string): string {
  return html.replace('\n', '<br />');
}
export function Question({ text }: TProps) {
  const { width } = useWindowDimensions();
  return <HTML source={{ html: formatHtml(text) }} contentWidth={width} />;
  // return <HTML source={{ html: buggyHtml }} contentWidth={width} />;
}
