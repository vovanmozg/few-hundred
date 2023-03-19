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

// https://stackoverflow.com/questions/37684/how-to-replace-plain-urls-with-links
function insertLinks(str: string): string {
  const replacePattern1 =
    /(\b(https?|ftp):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gim;
  return str.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
}

export function formatHtml(html: string): string {
  const formattedHtml = replaceGraveAccent(replaceCode(insertLinks(html)))
    .split('\n')
    .map((text: string) => `<p>${text}</p>`)
    .join('');

  return `<div class="container">${formattedHtml}</div>`;
}
