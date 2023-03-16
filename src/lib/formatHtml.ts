function getIndicesOf(searchStr: string, str: string) {
  const searchStrLen = searchStr.length;
  if (searchStrLen === 0) {
    return [];
  }
  let startIndex = 0,
    index;
  const indices = [];

  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
}

function replaceCode(html: string): string {
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
        .replace(/<code>/g, '<span class="inlineCode"><code> ')
        .replace(/<\/code>/g, ' </code></span>');
    }
  }

  if (count > 1) {
    throw Error;
  }

  return formattedHtml;
}

function replaceGraveAccent(str: string): string {
  const regex = /`(.*?)`/g;
  return str.replace(regex, '<span class="inlineCode"><code>$1</code></span>');
}

export function formatHtml(html: string): string {
  const formattedHtml = replaceGraveAccent(replaceCode(html))
    .split('\n')
    .map((text: string) => `<p>${text}</p>`)
    .join('');

  return `<div class="container">${formattedHtml}</div>`;
}
