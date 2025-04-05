import { Button } from "frames.js/next";
import { frames } from "@/app/frames";

const handleRequest = frames(async (_ctx) => {
  return {
    target: "/result",
    image: (
      <div
        style={{
          alignItems: "center",
          background: "black",
          backgroundSize: "100% 100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          height: "100%",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
          }}
        >
          Choose your weapon
        </div>
      </div>
    ),
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