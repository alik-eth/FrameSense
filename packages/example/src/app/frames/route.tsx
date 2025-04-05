import { Button } from "frames.js/next";
import { frames } from "@/app/frames";

const handleRequest = frames(async (_ctx) => {
  return {
    target: "/result",
    image: "/../rps.png",
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button key="rock" action="post" target="/result">
        Rock
      </Button>,
      <Button key="paper" action="post" target="/result">
        Paper
      </Button>,
      <Button key="scissors" target="/result" action="post">
        Scissors
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;