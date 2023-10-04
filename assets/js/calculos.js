function areaCirculo(){
    var raioCirculo = parseFloat(document.getElementById('raioCirculo').value);
    var area = Math.PI * (raioCirculo*raioCirculo);
    document.getElementById('result').innerHTML = "<p>"+area.toFixed(2)+"</p> <i class='fa-solid fa-copy'></i>"
}
function areaCoroaCirculo(){
    var raioMaior = parseFloat(document.getElementById('raioMaior').value);
    var raioMenor = parseFloat(document.getElementById('raioMenor').value);
    var area = Math.PI *((raioMaior*2)-(raioMenor*2));
    document.getElementById('result').innerHTML = "<p>"+area.toFixed(2)+"</p> <i class='fa-solid fa-copy'></i>"
}
function areaPoligono(){
    var qntLados = parseFloat(document.getElementById('qntLados').value);
    var mddLado = parseFloat(document.getElementById('medida').value);
    var apotema = parseFloat(document.getElementById('apotema').value);
    var area = ((qntLados*mddLado) / 2) * apotema;
    document.getElementById('result').innerHTML = "<p>"+area.toFixed(2)+"</p> <i class='fa-solid fa-copy'></i>"
}
function areaQuadrado(){
    var lado = parseFloat(document.getElementById('lado').value);
    var area = lado*lado;
    document.getElementById('result').innerHTML = "<p>"+area.toFixed(2)+"</p> <i class='fa-solid fa-copy'></i>"
}
function areaRetangulo(){
    var altura = parseFloat(document.getElementById('h').value);
    var base = parseFloat(document.getElementById('b').value);
    var area = base*altura;
    document.getElementById('result').innerHTML = "<p>"+area.toFixed(2)+"</p> <i class='fa-solid fa-copy'></i>"
}
function areaSetor(){
    var angulo = parseFloat(document.getElementById('angCentral').value);
    var anguloEmRadianos = angulo * (Math.PI / 180);
    var raio = parseFloat(document.getElementById('raio').value);
    var area = (raio*raio*anguloEmRadianos) / 2;
    document.getElementById('result').innerHTML = "<p>"+area.toFixed(2)+"</p> <i class='fa-solid fa-copy'></i>"
}
function areaTrapezoide(){
    var bMaior = parseFloat(document.getElementById('bMaior').value);
    var bMenor = parseFloat(document.getElementById('bMenor').value);
    var h = parseFloat(document.getElementById('h').value);
    var area = ((bMenor+bMaior) * h) / 2;
    document.getElementById('result').innerHTML = "<p>"+area.toFixed(2)+"</p> <i class='fa-solid fa-copy'></i>"
}
function areaPiramide() {
    var raioMaior = parseFloat(document.getElementById('raioMaior').value);
    var raioMenor = parseFloat(document.getElementById('raioMenor').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var area = Math.PI * (raioMaior + raioMenor) * (raioMaior - raioMenor + Math.sqrt(Math.pow(altura, 2) + Math.pow(raioMaior - raioMenor, 2)));
    document.getElementById('result').innerHTML = "<p>"+area.toFixed(2)+"</p> <i class='fa-solid fa-copy'></i>"
}
function areaTriangulo(){
    var altura = parseFloat(document.getElementById('h').value);
    var base = parseFloat(document.getElementById('b').value);
    var area = (base*altura)/2;
    document.getElementById('result').innerHTML = "<p>"+area.toFixed(2)+"</p> <i class='fa-solid fa-copy'></i>"
}