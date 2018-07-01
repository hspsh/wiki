fetch("https://at.hs3.pl/api/now")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    whoisbtn = document
      .querySelector("#dokuwiki__header")
      .querySelector("ul.nav.navbar-nav")
      .querySelectorAll("li.level1 > a")[2];

    whoisbtn.innerHTML = "ktohakuje";

    if (data.headcount > 0) {
      whoisbtn.innerHTML += `&nbsp;<span class="label label-success">${
        data.headcount
      }&nbsp;hacker${data.headcount > 1 ? "s" : ""}</span>`;
    } else {
      whoisbtn.innerHTML += `&nbsp;<span class="label label-danger">closed</span>`;
    }
  });
