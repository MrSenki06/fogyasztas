// -----------------------------------------------------
// 1. megoldás
let szamolas1 = function() {
    let F = document.getElementById('fogyasztas1').value;
    let V = document.getElementById('tank1').value;
    let Ut = document.getElementById('ut1').value;
  
    let megtehetoUt = V * 100 / F;
  
    if (megtehetoUt < Ut) {
      document.getElementById('megoldas1').innerHTML = "Az út során tankolni kell!";
    } else {
      document.getElementById('megoldas1').innerHTML = "Az út megtehető tankolás nélkül."
    }
  
    return false;
  }
  
  // -----------------------------------------------------
  // 2. megoldás
  let szamolas2 = function(e) {
    e.preventDefault();
    
    let F = document.getElementById('fogyasztas2').value;
    let V = document.getElementById('tank2').value;
    let Ut = document.getElementById('ut2').value;
  
    let megtehetoUt = V * 100 / F;
  
    if (megtehetoUt < Ut) {
      document.getElementById('megoldas2').innerHTML = "Az út során tankolni kell!";
    } else {
      document.getElementById('megoldas2').innerHTML = "Az út megtehető tankolás nélkül."
    }
  }
  document.getElementById('szamolas2').addEventListener('click', szamolas2);
  
  // -----------------------------------------------------
  // 3. megoldás
  let szamolas3 = function() {
    let F = document.getElementById('fogyasztas3').value;
    let V = document.getElementById('tank3').value;
    let Ut = document.getElementById('ut3').value;
  
    let megtehetoUt = V * 100 / F;
  
    if (megtehetoUt < Ut) {
      document.getElementById('megoldas3').innerHTML = "Az út során tankolni kell!";
    } else {
      document.getElementById('megoldas3').innerHTML = "Az út megtehető tankolás nélkül."
    }
  }
  document.getElementById('szamolas3').addEventListener('click', szamolas3);
  // -----------------------------------------------------