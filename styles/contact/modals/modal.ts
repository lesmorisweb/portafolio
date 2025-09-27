
document.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");

  if (!modal) return;

  if ((e.target as HTMLElement).id === "modal") {
    modal.classList.add("hidden");
  }
});
