function receipe(data) {
  let container = document.getElementById("container");
  data.forEach((el) => {
    let div = document.createElement("div");
    div.classList = "card";
    let image = document.createElement("img");
    image.src = el.strMealThumb;
    let h3 = document.createElement("h3");
    h3.innerText = `Name : ${el.strMeal}`;
    div.append(image, h3);
    container.append(div);
  });
}

export default receipe;
