function clicar() {
    var main = window.document.getElementById('main')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.setAttribute('src', 'ozzy.png')
    main.innerHTML = "<div id='txt'><p>Oi, eu sou o osvaldinho e vim desejar um feliz aniversário para a pessoa mais incrivel e especial do mundo, que graças a ela, eu tenho um lar e muito amor, te amo muitão mamãe, e o papai também te ama muitão. Muitos  lambeijos em  você!</p></div>"
    main.appendChild(img)
}