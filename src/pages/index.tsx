/** @jsx jsx */
/** @jsxFrag Fragment */

import { Layout } from "../layout.tsx";
import { jsx } from "https://deno.land/x/hono@v3.10.1/middleware.ts";

interface Props {
  messages: string[];
}

export const Index = (props: Props) => (
  <Layout>
    <h1 class="font-sans">Hello OAK!</h1>
    <ul>
      {props.messages?.map((message) => {
        return <li>{message}!!</li>;
      })}
    </ul>
  </Layout>
);
