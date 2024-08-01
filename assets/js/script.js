const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const data = document.getElementById('data');
const mes = document.getElementById('mes');
const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];
const year = document.getElementById('year');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let y = dateToday.getFullYear();
    let ms = meses[dateToday.getMonth()];
    let dt = dateToday.getDate();
    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let ss = dateToday.getSeconds();

    if (dt < 10) dt = '0' + dt;
    if (hr < 10) hr = '0' + hr;
    if (mn < 10) mn = '0' + mn;
    if (ss < 10) ss = '0' + ss;

    year.textContent= y;
    mes.textContent = ms;
    data.textContent = dt;
    horas.textContent = hr;
    minutos.textContent = mn;
    segundos.textContent = ss;
})
