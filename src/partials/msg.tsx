/** @jsx jsx */
/** @jsxFrag Fragment */
import { Fragment, jsx } from "https://deno.land/x/hono@v3.10.1/middleware.ts";

export const Msg = ({ msgs }: { msgs: string[] }) => {
  return (
    <>
      {msgs.map((msg, i) => (
        <div
          id={`msg-${msg}`}
          hx-preserve=""
          class="border p-2 shadow-md"
        >
          <label>
            <span class="text-gray-900">{msg}</span>
            <input
              name="cb"
              type="checkbox"
              class="ml-4"
            />
          </label>
        </div>
      ))}
    </>
  );
};
