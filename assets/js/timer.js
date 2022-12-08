/*-------------------------DATA----------------------*/
const div_data = document.getElementById("data")
const data = new Date()
const dia = data.getDate() < 10? "0" + data.getDate():data.getDate()
const mes = data.getMonth() < 10? "0" + data.getMonth():data.getMonth()
const dataFormatada = dia + "/" + mes + "/" + data.getFullYear()
div_data.innerHTML = dataFormatada

console.log(data.getMonth())

/*-------------------------RELOGIO-------------------*/
const relogio = document.getElementById("relogio")
const relogioF = () => {
    const data = new Date()

    const hora = data.getHours() < 10? "0" + getHours():data.getHours()

    const minutos = data.getMinutes() < 10? "0" + data.getMinutes():data.getMinutes()

    const segundos = data.getSeconds() < 10? "0" + data.getSeconds():data.getSeconds()

    const horas = hora + ":" + minutos + ":" + segundos
    relogio.innerHTML = horas

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}
const intervalo = setInterval(relogioF, 1000)

/*-------------------------TIMER---------------------*/
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")
const som_alarme = new Audio("alarme.mp3")

som_alarme.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click", () => {
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tmp_alarme.value * 1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)

    hora_alarme.innerHTML = "Hora do Alarme:" + dt_alarme.getHours() + ":" + dt_alarme.getMinutes() + ":" + dt_alarme.getSeconds()
})

btn_parar.addEventListener("click", () => {
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do Alarme:"
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause();
    som_alarme.currentTime = 0
})