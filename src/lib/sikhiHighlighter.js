import { getHighlighter } from "shiki";

let highlighter;

export async function getShikiHighlighter() {
  if (!highlighter) {
    highlighter = await getHighlighter({
      theme: "vitesse-dark",
    });
  }
  return highlighter;
}

export async function highlightCode(code, lang) {
  const shikiHighlighter = await getShikiHighlighter();
  return shikiHighlighter.codeToHtml(code, { lang });
}
