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
      "span", "div", "mark",
      "input", "label",
      "iframe",
    ],
    allowedAttributes: {
      a: ["href", "title", "target", "rel", "class"],
      img: ["src", "alt", "width", "height"],
      span: ["style", "class"],
      mark: ["data-color", "style"],
      h1: ["style", "class"],
      h2: ["style", "class"],
      h3: ["style", "class"],
      h4: ["style", "class"],
      p: ["style", "class"],
      table: ["data-border", "data-border-weight", "data-border-style", "data-border-color", "data-cell-padding"],
      td: ["colspan", "rowspan", "style"],
      th: ["colspan", "rowspan", "style"],
      code: ["class"],
      pre: ["class"],
      ul: ["data-type"],
      li: ["data-type", "data-checked"],
      input: ["type", "checked", "disabled"],
      div: ["data-type", "data-callout-type", "data-toggle-block", "data-open", "data-layout", "class"],
      iframe: ["src", "width", "height", "frameborder", "allowfullscreen"],
    },
    allowedStyles: {
      "*": {
        "color": [/^#[0-9a-fA-F]{3,8}$/, /^rgb\(/, /^rgba\(/],
        "background-color": [/^#[0-9a-fA-F]{3,8}$/, /^rgb\(/, /^rgba\(/],
        "background": [/^#[0-9a-fA-F]{3,8}$/, /^rgb\(/, /^rgba\(/],
        "text-align": [/^(left|center|right|justify)$/],
        "font-size": [/^\d+px$/],
        "font-family": [/.+/],
      },
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
