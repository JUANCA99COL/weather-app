let cityResults = document.querySelector(".results")
let button = document.querySelector(".searchbtn")

button.addEventListener("click", () => {
  
    showResults = !showResults
  if (showResults === true) {
    cityResults.style.display = "inline-block"
  } else {
    cityResults.style.display = "none"
  }

  
})

let showResults = false