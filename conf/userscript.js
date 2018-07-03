fetch("https://at.hs3.pl/api/now")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    whoisbtn = document
      .querySelector("#dokuwiki__header")
      .querySelector("ul.nav.navbar-nav")
      .querySelectorAll("li.level1 > a")[2];

    whoisbtn.innerHTML = `ktohakuje&nbsp;<span class="label label-default">${data.headcount}</span>`
    if (data.headcount > 0) {
      whoisbtn.innerHTML += `&nbsp;<span class="label label-success">open</span>`;
    } else {
      whoisbtn.innerHTML += `&nbsp;<span class="label label-danger">closed</span>`;
    }
  ,
  })
  .catch(function (error) {
    console.log(error)
    document.querySelector("#dokuwiki__header")
    .querySelector("ul.nav.navbar-nav")
    .querySelectorAll("li.level1 > a")[2]
    .innerHTML = "ktohakuje&nbsp;<span class="label label-warning">error</span>"
  })
