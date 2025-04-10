/* eslint-disable @typescript-eslint/no-unused-vars */
import { FramesMiddleware } from "frames.js/types";
import { isFrameDefinition } from "frames.js/utils";
import { redirect } from "frames.js/core";

export const adMiddleware = ({ adId }: { adId: string }): FramesMiddleware<undefined, { adId: string }> => async (ctx, next) => {
  const adDismissed = ctx.url.searchParams.get("ad_dismissed") === "true";
  const adPath = ctx.url.pathname === "/frames";
  const response = await next();
  if (isFrameDefinition(response) && (adPath && !adDismissed)) {
    const isViewAd = ctx.url.searchParams.get("view_ad") === "true";
    if (isViewAd) {
      return redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ", response);
    } else {
      const adUrl = new URL(ctx.url);
      adUrl.searchParams.set("view_ad", "true");
      const adDismissedUrl = new URL(ctx.url);
      adDismissedUrl.searchParams.set("ad_dismissed", "true");
      response.image = "/../rps-ad.png";
      response.imageOptions = {
        aspectRatio: "1:1",
      };
      response.buttons = [
        {
          label: "Learn More",
          action: "post_redirect",
          target: adUrl.toString(),
        },
        {
          label: "Dismiss",
          action: "post",
          target: adDismissedUrl.toString(),
        },
      ];
    }
  }
  return response;
}; 