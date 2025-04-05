import { createFrames } from "frames.js/next";
import { adMiddleware } from "./middleware/ad";

export const frames = createFrames({
  basePath: "/frames",
  middleware: [
    adMiddleware({
      adId: "1234567890",
    }),
  ]
});