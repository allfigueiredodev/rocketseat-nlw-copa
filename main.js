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
  createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("usa", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudi-arabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("morocco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa-rica") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "south-korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("wales", "07:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "ecuador") +
      createGame("england", "16:00", "usa")
  );
