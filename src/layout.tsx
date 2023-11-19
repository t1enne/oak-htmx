/** @jsx jsx */
/** @jsxFrag Fragment */
import { jsx } from "https://deno.land/x/hono@v3.10.1/middleware.ts";
import { Nav } from "./partials/nav.tsx";

export const Layout = (props) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>oak-htmx-twind-stack</title>
        <link rel="stylesheet" type="text/css" href="public/main.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/themes/light.css"
        />
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/shoelace-autoloader.js"
        >
        </script>
        <script src="https://unpkg.com/htmx.org@1.9.8/dist/htmx.min.js">
        </script>
        <script src="https://unpkg.com/htmx.org/dist/ext/sse.js"></script>

        <script src=" https://cdn.jsdelivr.net/npm/morphdom@2.7.1/dist/morphdom-umd.min.js ">
        </script>
        <script src="https://unpkg.com/htmx.org/dist/ext/morphdom-swap.js">
        </script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
        >
        </script>
      </head>
      <body class="p-4">
        <Nav />
        <main class="pt-6">
          {props.children}
        </main>
      </body>
    </html>
  );
};
