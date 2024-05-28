document.getElementById("open-modal").addEventListener("click", function(){
    document.getElementById("proposal-modal").classList.add("open")
});
document.getElementById("close-modal").addEventListener("click", function(){
    document.getElementById("proposal-modal").classList.remove("open")
});
window.addEventListener('keydown',(e) => {
    if (e.key === "Escape") {
        document.getElementById("proposal-modal").classList.remove("open")
    }
});
document.querySelector("#proposal-modal .modal-box").addEventListener("click", event => {
    event.isClickWithInModal = true;
});
document.getElementById("proposal-modal").addEventListener("click", event => {
    if (event.isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
});