import { createCategory } from "./crearcategories.js";

export function pintarCardPage(arrayData) {
  const url1 = 'https://aulamindhub.github.io/amazing-api/events.json';
  let page = document.title;
  let containerIndex = document.querySelector(
    page === "Home" ? "#containerIndex" :
    page === "Past Events" ? "#divPastEvents" :
    "#divUpcomingsEvents"
  );
  
  // Limpia la sección antes de pintar
  containerIndex.innerHTML = "";
  
  function pintarCard(array) {
    array.forEach((element) => {
      let card = document.createElement("div");
      card.className = "col-md-3";
      card.innerHTML = `
      <div class="card">
        <img class="card-img-top p-2" src="${element.image}" alt="${element.name}">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.description}</p>
          <div class="d-flex flex-row justify-content-between">
            <p>$${element.price}</p>
            ${ page == "Home" ? `<a href="pages/details.html?id=${element._id}" class="btn btn-dark">Details</a>` : 
            `<a href="details.html?id=${element._id}" class="btn btn-dark">Details</a>` }
          </div>
        </div>
      </div>`;
      containerIndex.appendChild(card);
      });
    }
  
  function crearCard(array, currentDate) {
    const arrayUpcomingEvents = array.filter(evento => evento.date > currentDate);
    const arrayPastEvents = array.filter(evento => evento.date < currentDate);
    containerIndex.innerHTML = "";
    if (page === "Home") {
      if (array.length === 0) {
        containerIndex.innerHTML = "<p>No se ha encontrado ninguna coincidencia.</p>";
        return;
      } else {
        pintarCard(array);
      }
    } else if (page === "Past Events") {
      if (arrayPastEvents.length === 0) {
        containerIndex.innerHTML = "<p>No se ha encontrado ninguna coincidencia.</p>";
        return;
      } else {
        pintarCard(arrayPastEvents);
      }
    } else {
      if (arrayUpcomingEvents.length === 0) {
        containerIndex.innerHTML = "<p>No se ha encontrado ninguna coincidencia.</p>";
        return;
      } else {
        pintarCard(arrayUpcomingEvents);
      }
    }
  }

  fetch(url1)
    .then((response) => response.json())
    .then((data) => {
      let dataEvents = data.events;
      if (arrayData){
        crearCard(arrayData, data.currentDate);
      }else{
        crearCard(dataEvents, data.currentDate);
        createCategory(dataEvents);
      }
    })
    .catch(error => console.log(error));
}