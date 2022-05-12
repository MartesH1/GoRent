const lnopen = document.getElementById("ln");
const ln1open = document.getElementById("ln1");
const ln2open = document.getElementById("ln2");
const ln3open = document.getElementById("ln3");
const modal = document.getElementById("modal");
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const btnClose = document.getElementById("modal-close");
const btnClose1 = document.getElementById("modal-close1");
const btnClose2 = document.getElementById("modal-close2");
const btnClose3 = document.getElementById("modal-close3");

lnopen.addEventListener("click", () => {
    modal.classList.add("show");
});

btnClose.addEventListener("click", () => {
    modal.classList.remove("show");
});

ln1open.addEventListener("click", () => {
    modal1.classList.add("show");
});

btnClose1.addEventListener("click", () => {
    modal1.classList.remove("show");
});

ln2open.addEventListener("click", () => {
    modal2.classList.add("show");
});

btnClose2.addEventListener("click", () => {
    modal2.classList.remove("show");
});

ln3open.addEventListener("click", () => {
    modal3.classList.add("show");
});

btnClose3.addEventListener("click", () => {
    modal3.classList.remove("show");
});
