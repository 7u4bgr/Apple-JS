let sum=0

function Apple() {
    let apple = document.getElementById('apple').value;
    let kg = 3
    let cavab = Number(apple)*Number(kg)
    sum+=cavab
    console.log(apple,kg,cavab)
    document.getElementById('h1').innerHTML=cavab
}
function Banane() {
    let banane = document.getElementById('apple2').value;
    let kg = 0.80
    let cavab = Number(banane)*Number(kg)
    sum+=cavab
    console.log(banane,kg,cavab)
    document.getElementById('h2').innerHTML=cavab
}
function Orange() {
    let orange = document.getElementById('apple3').value;
    let kg = 1.2
    let cavab = Number(orange)*Number(kg)
    sum+=cavab
    console.log(orange,kg,cavab)
    document.getElementById('h3').innerHTML=cavab
}
function Pear() {
    let pear = document.getElementById('apple4').value;
    let kg = 0.35
    let cavab = Number(pear)*Number(kg)
    sum+=cavab
    console.log(pear,kg,cavab)
    document.getElementById('h4').innerHTML=cavab
}
function Kiwi() {
    let kiwi = document.getElementById('apple5').value;
    let kg = 0.49
    let cavab = Number(kiwi)*Number(kg)
    sum+=cavab
    console.log(kiwi,kg,cavab)
    document.getElementById('h5').innerHTML=cavab
}
function Carrot() {
    let carrot = document.getElementById('apple6').value;
    let kg = 1.43
    let cavab = Number(carrot)*Number(kg)
    sum+=cavab
    console.log(carrot,kg,cavab)
    document.getElementById('h6').innerHTML=cavab
}
function Onion() {
    let onion = document.getElementById('apple7').value;
    let kg = 0.22
    let cavab = Number(onion)*Number(kg)
    sum+=cavab
    console.log(onion,kg,cavab)
    document.getElementById('h7').innerHTML=cavab
}
function Potato() {
    let potato = document.getElementById('apple8').value;
    let kg = 1.89
    let cavab = Number(potato)*Number(kg)
    sum+=cavab
    console.log(potato,kg,cavab)
    document.getElementById('h8').innerHTML=cavab
}
function Corn() {
    let corn = document.getElementById('apple9').value;
    let kg = 0.32
    let cavab = Number(corn)*Number(kg)
    sum+=cavab
    console.log(corn,kg,cavab)
    document.getElementById('h9').innerHTML=cavab
}
function Sum() {
    document.getElementById('h10').innerHTML=sum
}




