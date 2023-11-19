/** @jsx jsx */
/** @jsxFrag Fragment */
import { Layout } from "../layout.tsx";
import { jsx } from "https://deno.land/x/hono@v3.10.1/middleware.ts";

interface Props {
}

export const Second = (props: Props) => (
  <Layout>
    <h1>Hello from second!</h1>
  </Layout>
);
