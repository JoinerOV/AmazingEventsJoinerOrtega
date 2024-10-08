// const data = {
//     currentDate: "2023-01-01",
//     events: [
//       {
//         _id: "639c723b992482e5f2834be9",
//         name: "Collectivities Party",
//         image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
//         date: "2022-12-12",
//         description:
//           "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
//         category: "Food Fair",
//         place: "Room A",
//         capacity: 45000,
//         assistance: 42756,
//         price: 5,
//         __v: 0,
//       },
//       {
//         _id: "639c723b992482e5f2834beb",
//         name: "Korean style",
//         image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
//         date: "2023-08-12",
//         description:
//           "Enjoy the best Korean dishes, with international chefs and awesome events.",
//         category: "Food Fair",
//         place: "Room A",
//         capacity: 45000,
//         price: 10,
//         __v: 0,
//         estimate: 42756,
//       },
//       {
//         _id: "639c723c992482e5f2834bed",
//         name: "Jurassic Park",
//         image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
//         date: "2022-11-02",
//         description:
//           "Let's go meet the biggest dinosaurs in the paleontology museum.",
//         category: "Museum",
//         place: "Field",
//         capacity: 82000,
//         price: 15,
//         __v: 0,
//         assistance: 65892,
//       },
//       {
//         _id: "639c723c992482e5f2834bef",
//         name: "Parisian Museum",
//         image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
//         date: "2023-11-02",
//         description:
//           "A unique tour in the city of lights, get to know one of the most iconic places.",
//         category: "Museum",
//         place: "Paris",
//         capacity: 8200,
//         estimate: 8200,
//         price: 3500,
//         __v: 0,
//       },
//       {
//         _id: "639c723c992482e5f2834bf1",
//         name: "Comicon",
//         image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
//         date: "2022-02-12",
//         description:
//           "For comic lovers, all your favourite characters gathered in one place.",
//         category: "Costume Party",
//         place: "Room C",
//         capacity: 120000,
//         assistance: 110000,
//         price: 54,
//         __v: 0,
//       },
//       {
//         _id: "639c723c992482e5f2834bf3",
//         name: "Halloween Night",
//         image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
//         date: "2023-02-12",
//         description: "Come with your scariest costume and win incredible prizes.",
//         category: "Costume Party",
//         place: "Room C",
//         capacity: 12000,
//         estimate: 9000,
//         price: 12,
//         __v: 0,
//       },
//       {
//         _id: "639c723c992482e5f2834bf5",
//         name: "Metallica in concert",
//         image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
//         date: "2023-01-22",
//         description: "The only concert of the most emblematic band in the world.",
//         category: "Music Concert",
//         place: "Room A",
//         capacity: 138000,
//         estimate: 138000,
//         price: 150,
//         __v: 0,
//       },
//       {
//         _id: "639c723c992482e5f2834bf7",
//         name: "Electronic Fest",
//         image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
//         date: "2022-01-22",
//         description:
//           "The best national and international DJs gathered in one place.",
//         category: "Music Concert",
//         place: "Room A",
//         capacity: 138000,
//         assistance: 110300,
//         price: 250,
//         __v: 0,
//       },
//       {
//         _id: "639c723d992482e5f2834bf9",
//         name: "10K for life",
//         image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
//         date: "2022-03-01",
//         description: "Come and exercise, improve your health and lifestyle.",
//         category: "Race",
//         place: "Soccer field",
//         capacity: 30000,
//         assistance: 25698,
//         price: 3,
//         __v: 0,
//       },
//       {
//         _id: "639c723d992482e5f2834bfb",
//         name: "15K NY",
//         image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
//         date: "2023-03-01",
//         description:
//           "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
//         category: "Race",
//         place: "New York",
//         capacity: 3000000,
//         price: 3,
//         __v: 0,
//         estimate: 2569800,
//       },
//       {
//         _id: "639c723d992482e5f2834bfd",
//         name: "School's book fair",
//         image: "https://i.postimg.cc/Sst763n6/book1.jpg",
//         date: "2023-10-15",
//         description: "Bring your unused school book and take the one you need.",
//         category: "Book Exchange",
//         place: "Room D1",
//         capacity: 150000,
//         estimate: 123286,
//         price: 1,
//         __v: 0,
//       },
//       {
//         _id: "639c723d992482e5f2834bff",
//         name: "Just for your kitchen",
//         image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
//         date: "2022-11-09",
//         description:
//           "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
//         category: "Book Exchange",
//         place: "Room D6",
//         capacity: 130000,
//         assistance: 90000,
//         price: 100,
//         __v: 0,
//       },
//       {
//         _id: "639c723d992482e5f2834c01",
//         name: "Batman",
//         image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
//         date: "2022-3-11",
//         description: "Come see Batman fight crime in Gotham City.",
//         category: "Cinema",
//         place: "Room D1",
//         capacity: 11000,
//         assistance: 9300,
//         price: 225,
//         __v: 0,
//       },
//       {
//         _id: "639c723d992482e5f2834c03",
//         name: "Avengers",
//         image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
//         date: "2023-10-15",
//         description:
//           "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
//         category: "Cinema",
//         place: "Room D1",
//         capacity: 9000,
//         estimate: 9000,
//         price: 250,
//         __v: 0,
//       },
//     ],
//   };
//   const containerIndex = document.querySelector("#divPastEvents")
//   console.log(containerIndex);
//   for (let i = 0; i < data.events.length; i++) {
//     if (data.events[i].date<data.currentDate) {
//       let cards = document.createElement("div")
//       cards.className = "col-md-3"
//       cards.innerHTML = `
//           <div class="card">
//           <img class="card-img-top p-2" src="${data.events[i].image}" alt="${data.events[i].name}">
//           <div class="card-body">
//               <h5 class="card-title">${data.events[i].name}</h5>
//               <p class="card-text">${data.events[i].description}</p>
//               <div class="d-flex flex-row justify-content-between">
//                   <p>${data.events[i].price}</p>
//                   <a href="./details.html?id=${data.events[i]._id}" class="btn btn-primary">Details</a>
//               </div>
//           </div>
//       </div> `
//       containerIndex.appendChild(cards)
//     }
 

//   }

//       // Agrupar eventos por categoría y obtener categorías únicas
// function getUniqueCategories(events) {
//   const categories = new Set(); // Usamos un Set para asegurar que las categorías sean únicas

//   events.forEach(event => {
//       categories.add(event.category);
//   });

//   return Array.from(categories); // Convertir el Set a un Array
// }

// // Crear checkboxes dinámicamente para cada categoría única
// function createCategoryFilters(categories) {
//   const filterContainer = document.querySelector('.container-filter');

//   categories.forEach(category => {
//       const filterDiv = document.createElement('div');
//       filterDiv.className = 'form-check form-check-inline';

//       const checkbox = document.createElement('input');
//       checkbox.className = 'form-check-input';
//       checkbox.type = 'checkbox';
//       checkbox.id = `category-${category}`;
//       checkbox.value = category;

//       const label = document.createElement('label');
//       label.className = 'form-check-label';
//       label.setAttribute('for', checkbox.id);
//       label.textContent = category;

//       filterDiv.appendChild(checkbox);
//       filterDiv.appendChild(label);
//       filterContainer.appendChild(filterDiv);
//   });

//   // Añadir un event listener a los checkboxes
//   document.querySelectorAll('.form-check-input').forEach(checkbox => {
//       checkbox.addEventListener('change', filterEvents);
//   });
// }
// /////////////////////////////////
// // Ejecutar funciones para agrupar categorías y crear filtros
// const categories = getUniqueCategories(data.events);
// createCategoryFilters(categories);

// function filterEvents() {
//   const selectedCategories = Array.from(document.querySelectorAll('.form-check-input:checked'))
//       .map(checkbox => checkbox.value);

//   // Mostrar u ocultar las tarjetas de eventos según las categorías seleccionadas
//   document.querySelectorAll('#divPastEvents .card').forEach(card => {
//       const cardCategory = data.events.find(event => event.image === card.querySelector('img').src).category;
//       if (selectedCategories.length === 0 || selectedCategories.includes(cardCategory)) {
//           card.style.display = 'block';
//       } else {
//           card.style.display = 'none';
//       }
//   });
// }
// ///////////////////////////////////////////
// // Normalizar texto para comparación
// function normalizeText(text) {
//   return text.toLowerCase().trim();
// }

// // Función para realizar la búsqueda
// function searchEvents() {
//   const query = normalizeText(document.querySelector('input.form-control').value);
//   const cards = document.querySelectorAll('#divPastEvents .card');
//   let found = false;

//   cards.forEach(card => {
//       const title = normalizeText(card.querySelector('.card-title').textContent);
//       const description = normalizeText(card.querySelector('.card-text').textContent);

//       if (title.includes(query) || description.includes(query)) {
//           card.style.display = 'block';
//           found = true;
//       } else {
//           card.style.display = 'none';
//       }
//   });

//   // Mostrar mensaje si no se encuentran resultados
//   const noSeEncontroMensaje = document.querySelector('#noSeEncontroMensaje');
//   if (!found) {
//     noSeEncontroMensaje.style.display = 'block';
//   } else {
//     noSeEncontroMensaje.style.display = 'none';
//   }
// }

// // Añadir event listener al campo de búsqueda
// document.querySelector('input.form-control').addEventListener('input', searchEvents);
// document.getElementById('search-button').addEventListener('click', (event) => {
//   event.preventDefault();
//   searchEvents();
// });
// ////////////////////////////////////////
// // Combina las dos funciones
// function filterEvents() {
//   const selectedCategories = Array.from(document.querySelectorAll('.form-check-input:checked'))
//       .map(checkbox => checkbox.value);

//   const query = normalizeText(document.querySelector('input.form-control').value);
//   let found = false;

//   document.querySelectorAll('#divPastEvents .card').forEach(card => {
//       const cardCategory = data.events.find(event => event.image === card.querySelector('img').src).category;
//       const title = normalizeText(card.querySelector('.card-title').textContent);
//       const description = normalizeText(card.querySelector('.card-text').textContent);

//       const categoryMatches = selectedCategories.length === 0 || selectedCategories.includes(cardCategory);
//       const searchMatches = title.includes(query) || description.includes(query);

//       if (categoryMatches && searchMatches) {
//           card.style.display = 'block';
//           found = true;
//       } else {
//           card.style.display = 'none';
//       }
//   });

//   // Mostrar mensaje si no se encuentran resultados
//   const noSeEncontroMensaje = document.querySelector('#noSeEncontroMensaje');
//   if (!found) {
//     noSeEncontroMensaje.style.display = 'block';
//   } else {
//     noSeEncontroMensaje.style.display = 'none';
//   }
// }

import { pintarCardPage } from "../modules/creacionCards.js";
import { applyFilters } from "../modules/filtro.js";

pintarCardPage();

document.getElementById("category").addEventListener("change", applyFilters);
document.getElementById("search-button").addEventListener("click", function (event) {
  event.preventDefault();
  applyFilters();
});