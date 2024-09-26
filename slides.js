let count = 1;
let maxCount = 7;
let intervalo = 5000;
let idIntervalo;
document.getElementById("proj1").checked = true;
function next() {
    console.log('Proximo')
    if (count < maxCount) {
        count++;
    } else {
        count = 1;
    }
    goProj(count);
    resetarIntervalo();
}
function prev() {
    console.log('Voltndo')
    if (count > 1) {
        count--;
    } else {
        count = maxCount;
    }
    goProj(count);
    resetarIntervalo();
}

function goProj(n) {
    document.getElementById("proj" + n).checked = true;
}
function resetarIntervalo() {
    clearInterval(idIntervalo)
    idIntervalo = setInterval(next, intervalo);
}
resetarIntervalo();