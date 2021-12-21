// MIT License
// Copyright (c) 2021 Luis Espino

function heuristic(start, end) {
  var tiles_out = 0;
  for (var i = 0; i < start.length; i++) {
    if (!isNaN(parseInt(start[i])) || !isNaN(parseInt(end[i]))) {
      if (parseInt(start[i]) != parseInt(end[i])) {
        tiles_out++;
        console.log(parseInt(start[i]), parseInt(end[i]));
      }
    }
  }
  console.log("casillas fuera", tiles_out);
  return tiles_out;
}

function successors(n, e) {
  var suc = [];
  var posibles0 = [1, 3];
  var posibles1 = [0, 2, 4];
  var posibles2 = [1, 5];
  var posibles3 = [0, 4, 6];
  var posibles4 = [1, 3, 5, 7];
  var posibles5 = [2, 4, 8];
  var posibles6 = [3, 7];
  var posibles7 = [4, 6, 8];
  var posibles8 = [5, 7];
  vacio = n[0].indexOf("_");
  switch (vacio) {
    case 8:
      posibles8.forEach((element) => {
        let level = n[3] + 1;
        let child = swap(n[0], vacio, element);
        suc.push([
          child,
          heuristic(child, e) + level,
          inc(),
          level,
          draw(child),
        ]);
      });
      break;
    case 7:
      posibles7.forEach((element) => {
        let level = n[3] + 1;
        let child = swap(n[0], vacio, element);
        suc.push([
          child,
          heuristic(child, e) + level,
          inc(),
          level,
          draw(child),
        ]);
      });
      break;
    case 6:
      posibles6.forEach((element) => {
        let level = n[3] + 1;
        let child = swap(n[0], vacio, element);
        suc.push([
          child,
          heuristic(child, e) + level,
          inc(),
          level,
          draw(child),
        ]);
      });
      break;
    case 5:
      posibles5.forEach((element) => {
        let level = n[3] + 1;
        let child = swap(n[0], vacio, element);
        suc.push([
          child,
          heuristic(child, e) + level,
          inc(),
          level,
          draw(child),
        ]);
      });
      break;
    case 4:
      posibles4.forEach((element) => {
        let level = n[3] + 1;
        let child = swap(n[0], vacio, element);
        suc.push([
          child,
          heuristic(child, e) + level,
          inc(),
          level,
          draw(child),
        ]);
      });
      break;
    case 3:
      posibles3.forEach((element) => {
        let level = n[3] + 1;
        let child = swap(n[0], vacio, element);
        suc.push([
          child,
          heuristic(child, e) + level,
          inc(),
          level,
          draw(child),
        ]);
      });
      break;
    case 2:
      posibles2.forEach((element) => {
        let level = n[3] + 1;
        let child = swap(n[0], vacio, element);
        suc.push([
          child,
          heuristic(child, e) + level,
          inc(),
          level,
          draw(child),
        ]);
      });
      break;
    case 1:
      posibles1.forEach((element) => {
        let level = n[3] + 1;
        let child = swap(n[0], vacio, element);
        suc.push([
          child,
          heuristic(child, e) + level,
          inc(),
          level,
          draw(child),
        ]);
      });
      break;
    case 0:
      posibles0.forEach((element) => {
        let level = n[3] + 1;
        let child = swap(n[0], vacio, element);
        suc.push([
          child,
          heuristic(child, e) + level,
          inc(),
          level,
          draw(child),
        ]);
      });
      break;
    default:
      break;
  }
  return suc;
}

function bestfirst(start, end) {
  var cont = 0;
  var dot = "{";
  var list = [[start, heuristic(start, end), inc(), 0, draw(start)]];
  dot += list[0][2] + ' [label="' + list[0][4] + '"];';
  while (list.length > 0) {
    var current = list.shift();
    if (current[0] == end) {
      alert("Se encontró solución\n Nivel: " + current[3]);
      dot += "}";
      return dot;
    }
    var temp = successors(current, end);
    //temp.reverse();
    temp.forEach(
      (val) =>
        (dot +=
          val[2] +
          ' [label="' +
          val[4] +
          '"];' +
          current[2] +
          "--" +
          val[2] +
          ' [label="' +
          (val[1] - current[3] - 1) +
          "+" +
          (current[3] + 1) +
          '"] ;')
    );
    list = list.concat(temp);
    list = list.sort(function (a, b) {
      return a[1] - b[1];
    });
    cont++;
    if (cont > 100) {
      alert("The search is looped!");
      dot += "}";
      return dot;
    }
  }
  dot += "}";
  return dot;
}

var id = 1;
function inc() {
  return id++;
}

function revolver(text = "12345678_") {
  var posibles0 = [1, 3];
  var posibles1 = [0, 2, 4];
  var posibles2 = [1, 5];
  var posibles3 = [0, 4, 6];
  var posibles4 = [1, 3, 5, 7];
  var posibles5 = [2, 4, 8];
  var posibles6 = [3, 7];
  var posibles7 = [4, 6, 8];
  var posibles8 = [5, 7];
  vacio = text.indexOf("_");
  switch (vacio) {
    case 8:
      text = swap(
        text,
        vacio,
        posibles8[(posibles8.length * Math.random()) | 0]
      );
      break;
    case 7:
      text = swap(
        text,
        vacio,
        posibles7[(posibles7.length * Math.random()) | 0]
      );
      break;
    case 6:
      text = swap(
        text,
        vacio,
        posibles6[(posibles6.length * Math.random()) | 0]
      );
      break;
    case 5:
      text = swap(
        text,
        vacio,
        posibles5[(posibles5.length * Math.random()) | 0]
      );
      break;
    case 4:
      text = swap(
        text,
        vacio,
        posibles4[(posibles4.length * Math.random()) | 0]
      );
      break;
    case 3:
      text = swap(
        text,
        vacio,
        posibles3[(posibles3.length * Math.random()) | 0]
      );
      break;
    case 2:
      text = swap(
        text,
        vacio,
        posibles2[(posibles2.length * Math.random()) | 0]
      );
      break;
    case 1:
      text = swap(
        text,
        vacio,
        posibles1[(posibles1.length * Math.random()) | 0]
      );
      break;
    case 0:
      text = swap(
        text,
        vacio,
        posibles0[(posibles0.length * Math.random()) | 0]
      );
      break;
    default:
      break;
  }
  console.log(draw(text));
  return text;
}

function draw(text) {
  return (
    text.substring(0, 3) +
    "\n" +
    text.substring(3, 6) +
    "\n" +
    text.substring(6, 9) +
    "\n"
  );
}
function swap(text = "", index1, index2) {
  var char1 = text.charAt(index1);
  var char2 = text.charAt(index2);
  text = replaceAt(text, index1, char2);
  text = replaceAt(text, index2, char1);
  return text;
}

function replaceAt(text, index, replacement) {
  return (
    text.substr(0, index) +
    replacement +
    text.substr(index + replacement.length)
  );
}

function puzzle() {
  alert("8 PUZZLE\n César Juárez\n Universidad de San Carlos de Guatemala");
  var revolver_veces = 20;
  text = revolver();
  for (let index = 0; index < revolver_veces - 1; index++) {
    text = revolver(text);
  }
  alert(
    "TABLERO INICIAL DESPUÉS DE REVOLVER " +
      revolver_veces +
      " VECES\n" +
      draw(text)
  );
  nodes = text + " 12345678_";
  nodes = nodes.split(" ");
  console.log(nodes);
  return bestfirst(nodes[0], nodes[1]);
}
