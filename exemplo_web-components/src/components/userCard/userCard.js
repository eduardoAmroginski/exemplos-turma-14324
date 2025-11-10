class UserCard extends HTMLElement {
  set data(user) {
    this.innerHTML = `
      <div class='card'>
        <div class='card-body text-center'>
          <h5 class='card-title'>${user.name}</h5>
          <p class='card-text'>${user.email}</p>
          <p class='text-muted'>${user.company.name}</p>
          <a href='mailto:${user.email}' class='btn btn-primary btn-sm'>Contato</a>
        </div>
      </div>`;
  }
}

customElements.define("user-card", UserCard);
