import "../../components/userCard/userCard.js";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const list = document.getElementById("user-list");
    users.forEach((user) => {
      const card = document.createElement("user-card");
      card.data = user;
      list.appendChild(card);
    });
  });
