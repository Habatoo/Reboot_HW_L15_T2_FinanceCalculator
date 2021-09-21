function onButtonClicked() {

 let money = document.getElementById("money").value
 let interest = document.getElementById("interest").value
 let year = document.getElementById("year").value

 if (parseInt(money) < 50000) {
 alert("Внимание!\n \nМинимальная сумма на момент открытия 50 000 рублей.")
 }

 if (parseInt(year) <= 0) {
 alert("Внимание!\n \nНеверный формат данных. \nВведите положительное число.")
 }

 let sum = parseInt(money) + parseInt(money) * (parseFloat(interest) / 100) * parseInt(year)
 return sum

}