/** @jsx jsx */
/** @jsxFrag Fragment */
import { Layout } from "../layout.tsx";
import { jsx } from "https://deno.land/x/hono@v3.10.1/middleware.ts";

export const First = () => (
  <Layout>
    <div class="grid grid-cols-2" x-data={`{ selected: false }`}>
      <div
        class="cards flex flex-col w-48 gap-4"
        hx-ext="sse"
        sse-connect="/server_messages"
        sse-swap="msgs"
      >
      </div>
    </div>
  </Layout>
);
