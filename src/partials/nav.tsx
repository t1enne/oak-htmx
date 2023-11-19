/** @jsx jsx */
/** @jsxFrag Fragment */
import { jsx } from "https://deno.land/x/hono@v3.10.1/middleware.ts";

export const Nav = () => (
  <nav hx-boost="true">
    <ul class="flex justify-between gap-4 text-xl">
      <li class="mr-auto">
        <a href="/">
          <sl-button variant="primary" outline>
            Home
          </sl-button>
        </a>
      </li>
      <li>
        <a href="/first">
          <sl-button>first</sl-button>
        </a>
      </li>
      <li>
        <a href="/second">
          <sl-button>second</sl-button>
        </a>
      </li>
    </ul>
  </nav>
);
