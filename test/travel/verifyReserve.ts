import * as readline from 'readline';

const flys = [
  {
    n: 1,
    start: "Belém",
    destiny: "São Paulo",
    date: "01/06/2025",
    time: "11:20:00-AM",
    assents: [1, 5, 8, 10, 26, 32],
    price: "R$ 1050.00",
  },
  {
    n: 2,
    start: "Belém",
    destiny: "São Paulo",
    date: "02/06/2025",
    time: "01:40:00-PM",
    assents: [5, 6, 7, 14, 30, 31, 33],
    price: "R$ 950.00",
  },
  {
    n: 3,
    start: "Belém",
    destiny: "Maranhão",
    date: "04/10/2025",
    time: "10:30:00-PM",
    assents: [5, 6, 15, 17, 22, 27, 30, 34],
    price: "R$ 1200.00",
  },
  {
    n: 4,
    start: "Belém",
    destiny: "Maranhão",
    date: "04/10/2025",
    time: "8:30:00-PM",
    assents: [1, 17, 30],
    price: "R$ 800.00",
  },
  {
    n: 5,
    start: "Belém",
    destiny: "Brasília",
    date: "15/07/2025",
    time: "04:15:00-AM",
    assents: [6, 14, 15, 16, 17, 20, 25, 27, 28, 30, 32, 33],
    price: "R$ 1560.00",
  },
  {
    n: 6,
    start: "Belém",
    destiny: "Brasília",
    date: "14/07/2025",
    time: "09:45:00-AM",
    assents: [],
    price: "R$ 1000.00",
  },
];

function Ask(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question(question, response => {
      rl.close();
      resolve(response.trim());
    });
  });
}

function sendEmail(name: string, email: string) {
  console.log(
    `\n--- Email Confirmation ---\n` +
    `From: flyenterprise@mail.com\n` +
    `To: ${email}\n\n` +
    `Hello, ${name}! We are happy to say that your reservation has been completed!\n`
  );
}

export async function ReserveFly(start: string, destiny: string): Promise<string> {
  const result = flys.filter(f => f.start === start && f.destiny === destiny);

  if (result.length === 0) {
    return "There are no available flights for these locations.";
  }

  console.log("\nAvailable flights:");
  result.forEach(f => {
    console.log(`Flight Number: ${f.n} | Date: ${f.date} | Time: ${f.time} | Price: ${f.price}`);
  });

  const flightChoice = Number(await Ask("Choose a flight by number: "));
  const chosenFly = result.find(f => f.n === flightChoice);

  if (!chosenFly) {
    return "Invalid flight number selected.";
  }

  if (chosenFly.assents.length === 0) {
    return "No available seats on this flight.";
  }

  console.log(`\nAvailable seats: ${chosenFly.assents.join(', ')}`);
  const chosenAssent = Number(await Ask("Choose your seat number: "));

  if (!chosenFly.assents.includes(chosenAssent)) {
    return "This seat is not available.";
  }

  const name = await Ask("Your Name: ");
  const email = await Ask("Your Email: ");

  sendEmail(name, email);

  return `Seat ${chosenAssent} reserved on flight ${chosenFly.n}!`;
}

async function main() {
  try {
    const startPoint = await Ask("Your start point: ");
    const destinyPoint = await Ask("Your destiny point: ");
    const resultMessage = await ReserveFly(startPoint, destinyPoint);
    console.log("\n" + resultMessage);
  } catch (error) {
    console.error("An unexpected error occurred:", (error as Error).message);
  }
}

main();
