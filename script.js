function szamol() {
let F = document.getElementById('fogyasztás').value;
let V = document.getElementById('tank').value;
let UT = document.getElementById('ut').value;

let megtehetoUT = V * 100 / F;

document.getElementById('jel').innerHTML = "Az út megtehető tankolás nélkül"

if (megtehetoUT < UT) {
    document.getElementById('megoldas').innerHTML = "Az út során tankolni kell!";
} else {
    document.getElementById('megoldas').innerHTML = "Az út megtehető tankolás nélkül"
}
}