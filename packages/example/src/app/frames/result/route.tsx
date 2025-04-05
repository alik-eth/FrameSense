/* eslint-disable react/jsx-key */
import { frames } from "@/app/frames";
import { Button } from "frames.js/next";

const handleRequest = frames(async (ctx) => {
  const rand = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  const userChoice = choices[(Number(ctx.pressedButton?.index) || 1) - 1];
  const computerChoice = choices[rand];
  let msg = "";

  if (userChoice === computerChoice) {
    msg = "draw";
  }

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    msg = "You win";
  }

  if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    msg = "You lose";
  }

  return {
    action: "/",
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
            display: "flex",
          }}
        >
          {userChoice} vs {computerChoice}
        </div>

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
          {msg}
        </div>
      </div>
    ),
    buttons: [<Button action="post">Play again</Button>],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;