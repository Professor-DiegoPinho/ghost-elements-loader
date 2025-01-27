document.addEventListener('DOMContentLoaded', () => {
  const QTD_POSTS = 1;
  const container = document.querySelector(".container");
  const cardTemplate = document.querySelector("#card-template");
  for (let i = 0; i < QTD_POSTS; i++) {
    container.append(cardTemplate.content.cloneNode(true));
  }

  fetch("data.json")
    .then((response) => response.json())
    .then((posts) => {
      container.innerHTML = "";
      posts.forEach((post) => {
        const { title, details, coverImage, logoImage, link } = post;

        const div = cardTemplate.content.cloneNode(true);
        div.querySelector("#card-link").href = link;
        div.querySelector("#logo-img").src = logoImage;
        div.querySelector("#card-title").textContent = title;
        div.querySelector("#card-details").textContent = details;
        div.querySelector("#cover-img").src = coverImage;
        container.append(div);
      });
    });
})