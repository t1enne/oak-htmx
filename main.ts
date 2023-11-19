import {
  Application,
  Router,
  ServerSentEvent,
} from "https://deno.land/x/oak/mod.ts";
import { jsx } from "https://deno.land/x/hono@v3.10.1/middleware.ts";
import { Index } from "./src/pages/index.tsx";
import { First } from "./src/pages/first.tsx";
import { Second } from "./src/pages/second.tsx";
import { Msg } from "./src/partials/msg.tsx";

const router = new Router();

router.get("/", async (ctx) => {
  ctx.response.body = await jsx(Index, { messages: ["1", "2"] }).toString();
});

router.get("/first", async (ctx) => {
  ctx.response.body = await jsx(First, {}).toString();
});

router.get("/second", async (ctx) => {
  ctx.response.body = await jsx(Second, {}).toString();
});

router.get("/api/messages", async (ctx) => {
  let messages: string[];

  const r = Math.random();
  if (r <= 0.5) {
    messages = ["1", "2", "3", "4", "5"];
  } else {
    messages = ["2", "4", "1", "3", "5"];
  }
  const jsxMsg = await jsx(Msg, { msgs: messages }).toString();
  ctx.response.body = jsxMsg;
});

router.get("/server_messages", (ctx) => {
  let intervalId = 0;
  const target = ctx.sendEvents();

  let messages: string[];

  intervalId = setInterval(() => {
    const r = Math.random();
    if (r <= 0.5) {
      messages = ["1", "2", "3", "4", "5"];
    } else {
      messages = ["2", "4", "1", "3", "5"];
    }
    const jsxMsg = jsx(Msg, { msgs: messages }).toString();
    const sseEvent = new ServerSentEvent("msgs", jsxMsg);
    target.dispatchEvent(sseEvent);
    // target.dispatchMessage(jsxMsg);
  }, 2500);

  target.addEventListener("close", (evt) => {
    console.log("CLOSING SSE");
    clearInterval(intervalId);
  });
});
// router.get("/ws", (ctx) => {
//   if (!ctx.isUpgradable) {
//     ctx.throw(501);
//   }
//   let count = 0;
//   let intervalId: number;
//   const ws = ctx.upgrade();
//   ws.onopen = () => {
//     console.log("Connection established", ws);
//     if (ws.readyState !== ws.OPEN) {
//       console.log("Connection not yet open");
//       return;
//     }
//     intervalId = setInterval(async () => {
//       ws.send(await jsx(Msg, { msg: `Count  ${count}` }).toString());
//       count++;
//     }, 500);
//   };
//   ws.onclose = () => {
//     clearInterval(intervalId);
//     console.log("Connection closed");
//   };
//   ws.onmessage = async (m: MessageEvent<string>) => {
//     const data = JSON.parse(m.data);
//     console.log(`Got `, data);
//     ws.send(await jsx(Msg, { msg: `Got ${data["chat_message"]}` }).toString());
//   };
//   ws.onclose = () => console.log("Disconncted from client");
// });

const app = new Application({
  logErrors: false,
});
app.addEventListener("error", (err) => {
  console.error(err.error);
});
app.use(router.routes());
app.use(router.allowedMethods());
// Serving A Static Folder Here.
app.use(async (ctx, next) => {
  await ctx.send({
    root: `${Deno.cwd()}/src`,
  });
  next();
});

await app.listen({ port: 8000 });
