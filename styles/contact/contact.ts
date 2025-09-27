const buttons = document.querySelectorAll(".open-modal");
const modal = document.getElementById("modal") as HTMLElement;
const modalBody = document.getElementById("modal-body") as HTMLElement;
const goBack = document.querySelector(".goBackArrow") as HTMLElement;

buttons.forEach(btn => {
  btn.addEventListener("click", async () => {
    const modalType = btn.getAttribute("data-modal");
    const response = await fetch(`./modals/${modalType}.html`);
    const content = await response.text();

    modalBody.innerHTML = content;
    modal.classList.remove("hidden");
  });
});

goBack.addEventListener("click", () => {
  window.location.href="./index.html"
});


