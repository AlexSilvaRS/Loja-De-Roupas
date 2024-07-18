// Define a data para a qual estamos em contagem regressiva
var countDownDate = new Date("July 18, 2024 23:59:00").getTime();

// Atualiza a contagem regressiva a cada 1 segundo
var x = setInterval(function() {

  // Obtem a data e hora de hoje
  var now = new Date().getTime();

  // Encontra a distância entre agora e a data da contagem regressiva
  var distance = countDownDate - now;

  // Cálculos de tempo para dias, horas, minutos e segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exiba o resultado no elemento com id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Se a contagem regressiva acabar, escreva algum texto
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
