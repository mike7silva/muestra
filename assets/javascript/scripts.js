function DefinirApodo() {
    var nivel=parseInt(prompt('Nivel de Experiencia'));
    switch (true) {
      case nivel <= 10:
          console.log("Apodo=Aprendiz");
          document.getElementById("levelimage").src = "assets/img/aprendiz.png";
          document.getElementById("apodo").innerHTML = "Aprendiz :("
          break;
      case nivel>10&&nivel<=20:
          console.log("Apodo=Acróbata");
          document.getElementById("levelimage").src = "assets/img/acrobata.jpg";
          document.getElementById("apodo").innerHTML = "Acrobata :)"
          break;
      case nivel>20:
          console.log("Apodo=Ninja");
          document.getElementById("levelimage").src = "assets/img/ninja.jpg";
          document.getElementById("apodo").innerHTML = "Ninja!!!"
          break;
      default:
      brake;
    }
}

function fibonacci() {
  var cantidad=parseInt(prompt('Cuantos numeros quieres???'))
  var a=0;
  var b=1;
  var fib=1;
  var serie = [];
  for (var i = 0; i < cantidad; i ++) {
      console.log(a);
      serie.push(a);
        a=b;
        b=fib;
        fib=a+b;
  }
        document.getElementById("serie").innerHTML = (serie);
}

function palindrome () {
  var word = prompt('Ingresa tu frase :)');
  word = word.toLowerCase();
  word = word.replace(/\s/g, '');
  newWord = word.split('').reverse().join('');

  if (word == newWord) {
    console.log('Tienes un palindromo!')
    console.log('word: ', word);
    document.getElementById("Word").innerHTML = "Tu frase : "+word;
    document.getElementById("newWord").innerHTML = "Tienes un palíndromo!!! :"+newWord;
  } else {
    console.log('No es un palindromo!')
    console.log('newWord: ', newWord);
    document.getElementById("Word").innerHTML = "Tu frase : "+word;
    document.getElementById("newWord").innerHTML = "No hay palíndromo : "+newWord;
  }
}











  function piramide() {
    var floors = parseInt(prompt('¿De cuantos pisos será tu pirámide?'));
    var space = '';
    var bricks = '';
    for(var i = 0; i < floors; i++) {
      space = ' '.repeat(floors - i);
      bricks = bricks + '*';
      console.log(space + bricks + bricks);
      var div = document.getElementById('piramide');
      var pre = document.createElement('pre');
      div.appendChild(pre);
      pre.innerHTML = space + bricks + bricks;
    }
  }
