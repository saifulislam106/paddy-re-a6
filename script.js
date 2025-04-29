const fetchPadsCategory = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => {
      data.categories.forEach((element) => {
        // console.log(element);
        const categoryContainer = document.getElementById("category");

        const div = document.createElement("div");
        div.className = `flex items-center gap-4  bg-white rounded-full  shadow-md px-4 py-2 hover:bg-blue-200 hover:border border-blue-400 transition-shadow duration-300 ease-in-out`;
        div.innerHTML = `
                <div><img class="w-10 h-10 object-cover rounded-lg" src=${element.category_icon} alt=""/></div>
                <h3>${element.category}</h3>
                `;

        categoryContainer.appendChild(div);
      });
    });
};

// breed: "Golden Retriever";
// category: "Dog";
// date_of_birth: "2023-01-15";
// gender: "Male";
// image: "https://i.ibb.co.com/p0w744T/pet-1.jpg";
// petId: 1;
// pet_details: "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.";
// pet_name: "Sunny";
// price: 1200;
// vaccinated_status: "Fully";
const fetchAllPads = () => {
  fetch(" https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => {
      data.pets.forEach((item, idx) => {
        console.log(item);
        const petContainer = document.getElementById("pet-container")
        const petsDiv = document.createElement("div");
        petsDiv.innerHTML =`
   
            <figure><img src=${item.image} alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${item.pet_name}</h2>
              <p>Breed: ${item.breed}</p>
              <p>Birth: ${item.date_of_birth}</p>
              <p>Gender: ${item.gender}</p>
              <p>Price: ${item.price}</p>
              
              
            </div>
       
        `
        petsDiv.className = `card w-96 bg-base-100 shadow-xl mx-auto my-4`;
        petContainer.appendChild(petsDiv);
      });
    });
};

fetchPadsCategory();
fetchAllPads();
