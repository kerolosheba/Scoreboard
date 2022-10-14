let scrr1 = 0
let scrr2 = 0

function hscore1() {
    scrr1 += 1
    document.getElementById("home-scr").textContent = scrr1
}

function hscore2() {
    scrr1 += 2
    document.getElementById("home-scr").textContent = scrr1
}

function hscore3() {
    scrr1 += 3
    document.getElementById("home-scr").textContent = scrr1
}

function gscore1() {
    scrr2 += 1
    document.getElementById("guest-scr").textContent = scrr2
}

function gscore2() {
    scrr2 += 2
    document.getElementById("guest-scr").textContent = scrr2
}

function gscore3() {
    scrr2 += 3
    document.getElementById("guest-scr").textContent = scrr2
}

function reset() {
    scrr2 = 0
    scrr1 = 0
    document.getElementById("guest-scr").textContent = scrr2
    document.getElementById("home-scr").textContent = scrr1
}