// src/mocks/handlers.js
import { rest } from "msw";
export const handlers = [
  rest.get("any-url", (_, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
];
