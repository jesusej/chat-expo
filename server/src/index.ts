import { Elysia, t } from "elysia";

const app = new Elysia()
  .ws("/chat", {
    body: t.Object({
      message: t.String(),
    }),
    query: t.Object({
      id: t.Integer({ maximum: 9999, minimum: 0 }),
    }),
    message(ws, { message }) {
      const { id } = ws.data.query;

      ws.send({
        id,
        message,
        time: Date.now(),
      });
    },
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
