const fetchPadsCategory = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => {
      data.categories.forEach((element) => {
        const categoryContainer = document.getElementById("category");
        const div = document.createElement("div");

        div.className = `flex items-center gap-4 bg-white rounded-full shadow-md px-4 py-2 hover:bg-blue-200 hover:border border-blue-400 transition-shadow duration-300 ease-in-out`;

        div.innerHTML = `
          <div><img class="w-10 h-10 object-cover rounded-lg" src="${element.category_icon}" alt=""/></div>
          <h3>${element.category}</h3>
        `;

        categoryContainer.appendChild(div);
      });
    });
};

const fetchSinglePats = (petId) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    .then((res) => res.json())
    .then((data) => {
      const pet = data.petData;
      const detailsContainer = document.getElementById("details-pets");

      // Clear previous modal content
      detailsContainer.innerHTML = "";

      const div = document.createElement("div");
      div.innerHTML = `
      <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle" open>
        <div class="modal-box">
          <h3 class="font-bold text-lg">${pet.pet_name}</h3>
          <img src="${pet.image}" class="w-full h-60 object-cover rounded-xl my-3" />
          <p><strong>Breed:</strong> ${pet.breed}</p>
          <p><strong>Birth:</strong> ${pet.date_of_birth}</p>
          <p><strong>Gender:</strong> ${pet.gender}</p>
          <p><strong>Vaccinated:</strong> ${pet.vaccinated_status}</p>
          <p><strong>Price:</strong> $${pet.price}</p>
          <p class="py-2">${pet.pet_details}</p>

          <div class="modal-action">
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      `;

      detailsContainer.appendChild(div);

      // Show modal (optional if <dialog open> used)
      const modal = document.getElementById("my_modal_5");
      if (modal) modal.showModal?.();
    });
};

const fetchAllPads = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => {
      const petContainer = document.getElementById("pet-container");

      data.pets.forEach((item) => {
        const petsDiv = document.createElement("div");
        petsDiv.className = `card py-5 bg-base-200 shadow-xl border-shadow mx-auto my-4`;

        petsDiv.innerHTML = `
          <figure>
            <img class="p-5 h-[280px] w-full object-cover rounded-[12px]" src="${item.image}" alt="${item.pet_name}" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${item.pet_name}</h2>
            <p class="flex items-center gap-2"><i class="fi fi-rr-apps"></i> Breed: ${item.breed}</p>
            <p class="flex items-center gap-2"><i class="fi fi-rr-calendar"></i> Birth: ${item.date_of_birth}</p>
            <p class="flex items-center gap-2"><i class="fi fi-rr-transgender"></i> Gender: ${item.gender}</p>
            <p class="flex items-center gap-2"><i class="fi fi-rr-dollar"></i> Price: $${item.price}</p>
            <br>
            <div class="flex items-center justify-between">
              <div class="btn"><i class="fi fi-rr-social-network"></i></div>
              <button class="btn">Adopt</button>
              <button class="btn details-btn">Details</button>
            </div>
          </div>
        `;

        petContainer.appendChild(petsDiv);

        // Attach event to details button
        petsDiv.querySelector(".details-btn").addEventListener("click", () => {
          fetchSinglePats(item.petId);
        });
      });
    });
};

// Initial fetch
fetchPadsCategory();
fetchAllPads();
