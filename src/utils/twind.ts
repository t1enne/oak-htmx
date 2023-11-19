import { JSXNode } from "https://deno.land/x/hono@v3.10.1/jsx/index.ts";
import { extract, install } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";

install({
  presets: [
    presetTailwind(),
    {
      theme: {
        fontFamily: {
          sans: ["Helvetica", "sans-serif"],
          serif: ["Times", "serif"],
        },
      },
    },
  ],
});

export const withStyles = async (jsxNode: JSXNode) => {
  const { html, css } = extract(await jsxNode.toString());
  return html.replace("</head>", `<style data-twind>${css}</style></head>`);
};
