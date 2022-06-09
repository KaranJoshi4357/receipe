import navbar from "../components/navbar.js";
import "../styles/navbar.css";
import "../styles/receipe.css";
import axios from "axios";
import receipe from "../components/receipes.js";
let navDiv = document.getElementById("navbar");
navDiv.innerHTML = navbar();

async function fetchData() {
  let data = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );

  console.log(data.data.meals);
  receipe(data.data.meals);
}

fetchData();
