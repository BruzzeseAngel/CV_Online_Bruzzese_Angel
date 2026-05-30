console.log("JavaScript está funcionando correctamente");

const botonIrArriba = document.querySelector("#btn-ir_arriba");

botonIrArriba.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});