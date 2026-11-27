function connectSearch(){
    var search = document.getElementById("searchBox").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>display(data));
}
function display(data){
    var oldContent = document.getElementById("displayArea");
    oldContent.textContent = "";

    for(var i=0; i<data.meals.length; i=i+1){
        if(i<=5){
            var cardDiv = document.createElement("div");
            cardDiv.classList.add("mealCard");
            cardDiv.innerHTML = `<b>${data.meals[i].strMeal}</b><br>
            <p>Category: ${data.meals[i].strCategory}</p>
            <img src="${data.meals[i].strMealThumb}" alt="Food Img">`;
            oldContent.appendChild(cardDiv);
        }
    }
}