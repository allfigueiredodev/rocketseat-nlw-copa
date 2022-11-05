function createGame(player1, hour, player2) {
  return `
    <li>
    <img
        src="./assets/flags/${player1}.svg"
        alt="${player1}"
        width="50"
        height="50"
    />
    <strong>${hour}</strong>
    <img
        src="./assets/flags/${player2}.svg"
        alt="${player2}"
        width="50"
        height="50"
    />
    </li>
    `;
}

let delay = -0.4;

function createCard(date, day, game) {
    delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
    ${game}
    </ul>
    </div>
    `;
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("england", "21:00", "wales") +
      createGame("brazil", "14:00", "france")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("belgium", "21:00", "australia") +
      createGame("morocco", "14:00", "mexico")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("uruguay", "21:00", "usa") +
      createGame("qatar", "14:00", "spain")
  );
