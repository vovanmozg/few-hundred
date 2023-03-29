function replaceCode(html: string): string {
  // Not supported nested <code> tags
  return html
    .replace(/\n<code>((.|\n)*?)<\/code>/g, '```$1```')
    .replace(/<code>((.|\n)*?)<\/code>/g, '`$1`');
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
  const withoutCodeTags = replaceCode(html);
  const escaped = escape(withoutCodeTags);
  const withLinks = insertLinks(escaped);
  const formattedHtml = replaceGraveAccent(withLinks)
    .split('\n')
    .map((text: string) => `<p>${text}</p>`)
    .join('');

  return `<div class="container">${formattedHtml}</div>`;
}
