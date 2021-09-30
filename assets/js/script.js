
var inicio = "Bienvenido a servicios UTP";
function Inicio(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(inicio));
}


var division = "La Universidad Tecnologica de Puebla cuenta con esta innovadora ingenieria, en la que podras realizar"
+ " con exito tus proyectos soñados";
function Division(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(division));
}


var programas = "Contamos con dos" 
+ "especialidades, Desarrollo de software en multiplataforma, e Infraestructura de redes digitales";
function Bienvenida(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(programas));
}


var servicios = "la Universidad Tecnologica de Puebla cuenta con diferentes servicios, entre ellos están"
+ "servicios escolares, departamento de actividades deportivas y culturales, y servicios medicos.";
function Servicios(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(servicios));
}