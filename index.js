const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit-rating")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")


submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none"
  thanksContainer.classList.remove("hidden")
})
  rates.forEach((rate) => {
    rate.addEventListener("click", () => {
      rating.innerHTML = rate.innerHTML
    })
  })


