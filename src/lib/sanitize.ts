import sanitizeHtml from "sanitize-html";

// Allow safe HTML tags for blog content, strip everything dangerous
export function sanitizeBlogContent(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      "h1", "h2", "h3", "h4", "h5", "h6",
      "p", "br", "hr",
      "ul", "ol", "li",
      "strong", "em", "b", "i", "u", "s",
      "a", "img",
      "blockquote", "pre", "code",
      "table", "thead", "tbody", "tr", "th", "td",
      "span", "div",
      "input", "label",
      "iframe",
    ],
    allowedAttributes: {
      a: ["href", "title", "target", "rel"],
      img: ["src", "alt", "width", "height"],
      span: ["style"],
      td: ["colspan", "rowspan"],
      th: ["colspan", "rowspan"],
      code: ["class"],
      pre: ["class"],
      ul: ["data-type"],
      li: ["data-type", "data-checked"],
      input: ["type", "checked", "disabled"],
      div: ["data-type"],
      iframe: ["src", "width", "height", "frameborder", "allowfullscreen"],
    },
    allowedIframeHostnames: [
      "www.youtube.com", "youtube.com",
      "www.loom.com", "loom.com",
      "codepen.io",
      "codesandbox.io",
      "stackblitz.com",
      "figma.com", "www.figma.com",
    ],
    allowedSchemes: ["http", "https", "data"],
    allowedSchemesAppliedToAttributes: ["href", "src"],
    // Force all links to have safe rel attribute
    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs: {
          ...attribs,
          rel: "noopener noreferrer",
          target: attribs.target || "_blank",
        },
      }),
    },
  });
}

// Sanitize plain text fields (strip ALL html)
export function sanitizeText(text: string): string {
  return sanitizeHtml(text, {
    allowedTags: [],
    allowedAttributes: {},
  });
}
