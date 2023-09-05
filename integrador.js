alert("Bienvenidos al Chifa Madan Tusan, esta es su cuennta ");
var entrada=parseInt(prompt("¿Cuanto cuesta la entrada?"));
console.log("la entrada cuesta", entrada);
var segundo=parseInt(prompt("¿Cuanto cuesta el segundo"));
console.log("El segundo cuesta", segundo);
var postre=parseInt(prompt("¿Cuanto cuesta el postre?"));
console.log("El postre cuesta", postre);
var total=entrada+segundo+postre;
var IGV=(total*18/100)+total;
console.log("La cuenta total cuesta", total);
console.log("El IGV más el total sale", IGV);
console.log("Madam Tusan agradece su visita, vuelva pronto");
var presupuesto=parseInt(prompt("¿Cuantos dinero trajo al restaurante?"));
console.log( "su vuelto es de", (presupuesto-IGV))



