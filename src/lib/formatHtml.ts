export function formatHtml(html: string): string {
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

  formattedHtml = formattedHtml
    .split('\n')
    .map(text => `<p>${text}</p>`)
    .join('');

  if (count > 1) {
    throw Error;
  }

  return `<div class="container">${formattedHtml}</div>`;
}
