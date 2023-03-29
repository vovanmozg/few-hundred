function replaceCode(html: string): string {
  const count = (html.match('<code>') || []).length;

  let formattedHtml = '';

  if (count === 0) {
    formattedHtml = html;
  }

  if (count === 1) {
    if (html.search('\n<code>') >= 0) {
      // Если в вопросе код многострочный
      formattedHtml = html.replace('\n<code>', '```').replace('</code>', '```');
    } else {
      // Если в вопросе инлайн код
      formattedHtml = html.replace(/<code>/g, '` ').replace(/<\/code>/g, ' `');
    }
  }

  if (count > 1) {
    throw Error;
  }

  return formattedHtml;
}

function escape(html: string): string {
  return html
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceGraveAccent(str: string): string {
  const regex = /`(.*?)`/g;
  const regexThreeGraveAccent = /```((.|\n)*?)```/g;
  return str
    .replace(regexThreeGraveAccent, '<div class="code"><code>$1</code></div>')
    .replace(regex, '<span class="inlineCode"><code>$1</code></span>');
}

// https://stackoverflow.com/questions/37684/how-to-replace-plain-urls-with-links
function insertLinks(str: string): string {
  const replacePattern1 =
    /(\b(https?|ftp):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gim;
  return str.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
}

export function formatHtml(html: string): string {
  const formattedHtml = replaceGraveAccent(
    insertLinks(escape(replaceCode(html))),
  )
    .split('\n')
    .map((text: string) => `<p>${text}</p>`)
    .join('');

  return `<div class="container">${formattedHtml}</div>`;
}
