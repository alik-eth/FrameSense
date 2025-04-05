import { frames } from './frames';
import { Button } from 'frames.js/next';

const choices = ['rock', 'paper', 'scissors'] as const;
type Choice = typeof choices[number];

const getResult = (userChoice: Choice, computerChoice: Choice): string => {
  if (userChoice === computerChoice) return "It's a tie!";
  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  }
  return 'You lose!';
};

const handleRequest = frames(async (ctx) => {
  const userChoice = ctx.searchParams.choice as Choice;
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (userChoice) {
    const result = getResult(userChoice, computerChoice);
    return {
      image: (
        <div tw="flex flex-col items-center justify-center w-full h-full bg-black text-white">
          <div tw="text-4xl mb-4">Rock Paper Scissors</div>
          <div tw="text-2xl mb-2">Your choice: {userChoice}</div>
          <div tw="text-2xl mb-2">Computer's choice: {computerChoice}</div>
          <div tw="text-3xl font-bold">{result}</div>
        </div>
      ),
      buttons: [
        <Button key="play-again" action="post" target="/">
          Play Again
        </Button>,
      ],
    };
  }

  return {
    image: (
      <div tw="flex flex-col items-center justify-center w-full h-full bg-black text-white">
        <div tw="text-4xl mb-4">Rock Paper Scissors</div>
        <div tw="text-2xl">Choose your move!</div>
      </div>
    ),
    buttons: choices.map((choice) => (
      <Button key={choice} action="post" target={`/?choice=${choice}`}>
        {choice.charAt(0).toUpperCase() + choice.slice(1)}
      </Button>
    )),
  };
});

export const GET = handleRequest;
export const POST = handleRequest; 