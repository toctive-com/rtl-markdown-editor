const md = window.markdownit({ breaks: true, linkify: true });
const preview = document.getElementById("preview"),
  editor = document.getElementById("editor");

/**
 * render markdown and save it in localStorage
 * then highlight the code within markdown
 * @param e - the event object
 */
function renderMarkdown(e) {
  const markdown = e.target.value;
  localStorage.setItem("markdown", markdown);

  const result = md.render(markdown);
  preview.innerHTML = result

  hljs.highlightAll();
}

editor.addEventListener("keyup", renderMarkdown)

// load markdown from localStorage
document.addEventListener("DOMContentLoaded", function () {
  const markdown = localStorage.getItem("markdown");
  if (markdown) {
    editor.value = markdown;
    renderMarkdown({ target: editor });
  }
});

