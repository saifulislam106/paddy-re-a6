const fetchPadsCategory = ()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then(res => res.json())
        .then(data => {
            data.categories.forEach(element => {
                console.log(element);
                const categoryContainer = document.getElementById("category")

                const div = document.createElement("div")
                div.className=`flex items-center gap-4  bg-white rounded-full  shadow-md px-4 py-2 hover:bg-blue-200 hover:border border-blue-400 transition-shadow duration-300 ease-in-out`
                div.innerHTML= `
                <div><img class="w-10 h-10 object-cover rounded-lg" src=${element.category_icon} alt=""/></div>
                <h3>${element.category}</h3>
                `
                
                categoryContainer.appendChild(div)
            });
        }
        );
}

fetchPadsCategory();