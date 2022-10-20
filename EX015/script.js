function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Child
                img.setAttribute('src', 'crianca.jpg')
                genero = 'Male Child'
            } else if (idade >= 10 && idade < 18){
                //Young
                img.setAttribute('src', 'images/adolescente.jpg')
                genero = 'Male Young'
            } else if (idade >= 18 && idade < 60){
                //adult
                img.setAttribute('src', 'homem.jpg')
                genero = 'Male Adult '
            } else {
                //Old men
                img.setAttribute('src', 'oldmen.jpg')
                genero = 'Male lord'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Child
                img.setAttribute('src', 'criançaFem.webp')
                genero = 'Female Child'
            } else if (idade >=10 && idade <18) {
                //Young
                img.setAttribute('src', 'adolescenteFEM.jpg')
                genero = 'Female Young'
            } else if (idade >=18 && idade<60) {
                //Adult
                img.setAttribute('src', 'Mulher.jpg')
                genero = 'Female adult'
            } else {
                //Old woman
                img.setAttribute('src', 'senhora.jpg')
                genero = 'Female old'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detected ${genero} with ${idade} years old.`
        res.appendChild(img)
    }
}