const form = document.querySelector(".formulario-fale-conosco")
const masc = document.querySelector(".mascara-formulario")

function cliqueiNoBotao() {
    form.style.transition =" 2s left ease-in-out"
     form.style.left = "50%"
     form.style.transform ="translateX(-50%)"
     masc.style.visibility ="visible"
}


function cliqueiNaMascara(){

    form.style.transition ="2s  ease-in-out"
form.style.left ="-300px"
form.style.transform="translateX(0%)"
    masc.style.visibility = "hidden"
    masc.style.transition= "2s ease-in-out"
}
