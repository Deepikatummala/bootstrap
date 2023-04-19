const taskContainer = document.querySelector(".task__container");
const globalStore = [];
console.log(taskContainer);
const generateNewCard = (taskData) =>  `
  <div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}>
    <div class="card">
      <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
  <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      <div class="card-body">
        <img class="card-img-top" src=${taskData.imageUrl} alt="...">
        <h5 class="card-title mt-3 fw-bold text-primary">${taskData.taskTitle}</h5>
          <p class="card-text">${taskData.taskDescription}</p>
        <a href="#" class="btn btn-primary">${taskData.taskType}</a>
      </div>
    </div>
    </div>
    `;

const loadInitialCardData = () => {
  // localstorage to get tasky card Data
const getCardData = localStorage.getItem("tasky");

  //convert to normal objects
const {cards} = JSON.parse(getCardData);


  //loop over array of task object to create HTML card , inject it to DOM.
cards.map((cardObject) => {
  taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));

  //update our globalstore.
globalStore.push(cardObject);

}

)

};

const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`,  //dollar and {} are used because it changes dynamically Date.now--changes values every sec.keyvalue palyers are placed inside the curly braces.
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdescription").value
  };



taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

globalStore.push(taskData);
localStorage.setItem("tasky",JSON.stringify({card:globalStore})); // anything stored inside local storage it wont disapper even if the page is refreshed.
//stringify takes object of objects and convert into array of object .it takes keyvalue players

};
