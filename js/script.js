

const quote = document.querySelector(".quote");
const btn = document.querySelector(".quotebtn");
function getdata() {
  fetch("https://corporatebs-generator.sameerkumar.website/")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = " ";
      quote.innerHTML = `<h2 class="bg-warning bg-gradient text-white text-center">Word</h2>
        <p class="ms-2 fs-4">${data.phrase}</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
btn.addEventListener("click", getdata);