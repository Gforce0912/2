var body = document.getElementById('body')
var headerSB = document.getElementById('header-services-block')
var services = document.getElementById('headerLiBtn')
var servicesArrou = document.getElementById('header-ul-li-img')

function servicesClick(){
    headerSB.style.display = "block"
    services.style = 'color: #00df77'
}

function exitServices(){
    headerSB.style.display = "none"
    services.style = 'color: #000'
}