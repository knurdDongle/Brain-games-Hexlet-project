import readlineSync from 'readline-sync';

const rounds = 3;

const toPlay = (task, properties) => {
  console.log(`Welcome to the Brain Games!\n\n${task}\n`);
  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hi, my dear, ${userName}\n\nNow let's play!`);

  for (let i = 0; i < rounds; i += 1) {
    const { rightAnswer, question } = properties();
    console.log(question);
    const usersAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== usersAnswer) {
      console.log(`\nSorry, but "${usersAnswer}" is wrong answer =( While right answer was "${rightAnswer}". ${userName}, let's do it again!`);
      return;
    }
    console.log('Correct!\n');
  }
  console.log(`Congratulations, ${userName}! You are a clever one ;)`);
};

export default toPlay;
