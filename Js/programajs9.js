//Función para remplazar las clases de acuerdo con el rango.
function eg(rangeTF, before, after){
  if(rangeTF == 0){
    before.classList.replace("blind", "seer");
    after.classList.replace("seer", "blind");
  }else if(rangeTF == 1){
    after.classList.replace("blind", "seer");
    before.classList.replace("seer", "blind");
  }
}

const idLong = [ "Defaul", "Literal", "Multilinea", "Restruct", "OPropaga", "Objeto", "Arrow", "Promise", "Class", "Modulo", "Generator", "Include", "Exponente", "OEntries", "OValues", "PadSE", "Comas", "Async", "Reposo", "PPropaga", "Finally", "Regex", "Flat", "Trim", "TCatch", "FEntries", "Symbol", ];
const idShort = [ "Def", "Lit", "Mlt", "Rst", "Ppg", "Obj", "Arr", "Prm", "Cls", "Mdl", "Gen", "Inc", "Exp", "OEn", "OVl", "Pad", "Com", "Asy", "Rpo", "Ppg", "Fnl", "Rgx", "Flt", "Trm", "TCh", "FEn", "Sym", ];

//ej1) Obtención de constantes para el switch, el span Before y el After.
const ej1BeforeDefault = document.getElementById("ejBeforeDefault");
const ej1AfterDefault = document.getElementById("ejAfterDefault");
let ej1DefRange = document.getElementById("ejDefault");
//ej1) Llamado a la función con las constantes del ejercicio 1 de Parametros por default.
ej1DefRange.addEventListener('change', () => {eg(ej1DefRange.valueAsNumber, ej1BeforeDefault, ej1AfterDefault)});

//ej2) Obtención de constantes para el switch, el span Before y el After.
const ej2BeforeLiteral = document.getElementById("ejBeforeLiteral");
const ej2AfterLiteral = document.getElementById("ejAfterLiteral");
let ej2LitRange = document.getElementById("ejLiteral");
//ej2) Llamado a la función con las constantes del ejercicio 2 de Template literals.
ej2LitRange.addEventListener('change', () => {eg(ej2LitRange.valueAsNumber, ej2BeforeLiteral, ej2AfterLiteral)});

//ej3) Obtención de constantes para el switch, el span Before y el After.
const ej3BeforeMultilinea = document.getElementById("ejBeforeMultilinea");
const ej3AfterMultilinea = document.getElementById("ejAfterMultilinea");
let ej3MltRange = document.getElementById("ejMultilinea");
//ej3) Llamado a la función con las constantes del ejercicio 3 de Template multilineas.
ej3MltRange.addEventListener('change', () => {eg(ej3MltRange.valueAsNumber, ej3BeforeMultilinea, ej3AfterMultilinea)});

//ej4) Obtención de constantes para el switch, el span Before y el After.
const ej4BeforeRestruct = document.getElementById("ejBeforeRestruct");
const ej4AfterRestruct = document.getElementById("ejAfterRestruct");
let ej4RstRange = document.getElementById("ejRestruct");
//ej4) Llamado a la función con las constantes del ejercicio 4 de Restructuración de elementos.
ej4RstRange.addEventListener('change', () => {eg(ej4RstRange.valueAsNumber, ej4BeforeRestruct, ej4AfterRestruct)});

//ej5) Obtención de constantes para el switch, el span Before y el After.
const ej5BeforeOPropaga = document.getElementById("ejBeforeOPropaga");
const ej5AfterOPropaga = document.getElementById("ejAfterOPropaga");
let ej5PpgRange = document.getElementById("ejOPropaga");
//ej5) Llamado a la función con las constantes del ejercicio 5 de Operador de programación.
ej5PpgRange.addEventListener('change', () => {eg(ej5PpgRange.valueAsNumber, ej5BeforeOPropaga, ej5AfterOPropaga)});

//ej6) Obtención de constantes para el switch, el span Before y el After.
const ej6BeforeObjeto = document.getElementById("ejBeforeObjeto");
const ej6AfterObjeto = document.getElementById("ejAfterObjeto");
let ej6ObjRange = document.getElementById("ejObjeto");
//ej6) Llamado a la función con las constantes del ejercicio 6 de Propiedad de objetos.
ej6ObjRange.addEventListener('change', () => {eg(ej6ObjRange.valueAsNumber, ej6BeforeObjeto, ej6AfterObjeto)});

//ej7) Obtención de constantes para el switch, el span Before y el After.
const ej7BeforeArrow = document.getElementById("ejBeforeArrow");
const ej7AfterArrow = document.getElementById("ejAfterArrow");
let ej7ArrRange = document.getElementById("ejArrow");
//ej7) Llamado a la función con las constantes del ejercicio 7 de Funciones de flecha.
ej7ArrRange.addEventListener('change', () => {eg(ej7ArrRange.valueAsNumber, ej7BeforeArrow, ej7AfterArrow)});

//ej8) Obtención de constantes para el switch, el span Before y el After.
const ej8BeforePromise = document.getElementById("ejBeforePromise");
const ej8AfterPromise = document.getElementById("ejAfterPromise");
let ej8PrmRange = document.getElementById("ejPromise");
//ej8) Llamado a la función con las constantes del ejercicio 8 de Promesas.
ej8PrmRange.addEventListener('change', () => {eg(ej8PrmRange.valueAsNumber, ej8BeforePromise, ej8AfterPromise)});

//ej9) Obtención de constantes para el switch, el span Before y el After.
const ej9BeforeClass = document.getElementById("ejBeforeClass");
const ej9AfterClass = document.getElementById("ejAfterClass");
let ej9ClsRange = document.getElementById("ejClass");
//ej9) Llamado a la función con las constantes del ejercicio 9 de Clases.
ej9ClsRange.addEventListener('change', () => {eg(ej9ClsRange.valueAsNumber, ej9BeforeClass, ej9AfterClass)});

//ej10) Obtención de constantes para el switch, el span Before y el After.
const ej10BeforeModulo = document.getElementById("ejBeforeModulo");
const ej10AfterModulo = document.getElementById("ejAfterModulo");
let ej10MdlRange = document.getElementById("ejModulo");
//ej10) Llamado a la función con las constantes del ejercicio 10 de Módulos.
ej10MdlRange.addEventListener('change', () => {eg(ej10MdlRange.valueAsNumber, ej10BeforeModulo, ej10AfterModulo)});

//ej11) Obtención de constantes para el switch, el span Before y el After.
const ej11BeforeGenerator = document.getElementById("ejBeforeGenerator");
const ej11AfterGenerator = document.getElementById("ejAfterGenerator");
let ej11GenRange = document.getElementById("ejGenerator");
//ej11) Llamado a la función con las constantes del ejercicio 11 de Generadores.
ej11GenRange.addEventListener('change', () => {eg(ej11GenRange.valueAsNumber, ej11BeforeGenerator, ej11AfterGenerator)});

//ej12) Obtención de constantes para el switch, el span Before y el After.
const ej12BeforeInclude = document.getElementById("ejBeforeInclude");
const ej12AfterInclude = document.getElementById("ejAfterInclude");
let ej12IncRange = document.getElementById("ejInclude");
//ej12) Llamado a la función con las constantes del ejercicio 12 de Include.
ej12IncRange.addEventListener('change', () => {eg(ej12IncRange.valueAsNumber, ej12BeforeInclude, ej12AfterInclude)});

//ej13) Obtención de constantes para el switch, el span Before y el After.
const ej13BeforeExponente = document.getElementById("ejBeforeExponente");
const ej13AfterExponente = document.getElementById("ejAfterExponente");
let ej13ExpRange = document.getElementById("ejExponente");
//ej13) Llamado a la función con las constantes del ejercicio 13 de Operaciones con exponencial.
ej13ExpRange.addEventListener('change', () => {eg(ej13ExpRange.valueAsNumber, ej13BeforeExponente, ej13AfterExponente)});

//ej14) Obtención de constantes para el switch, el span Before y el After.
const ej14BeforeOEntries = document.getElementById("ejBeforeOEntries");
const ej14AfterOEntries = document.getElementById("ejAfterOEntries");
let ej14OEnRange = document.getElementById("ejOEntries");
//ej14) Llamado a la función con las constantes del ejercicio 14 de Object con entries.
ej14OEnRange.addEventListener('change', () => {eg(ej14OEnRange.valueAsNumber, ej14BeforeOEntries, ej14AfterOEntries)});

//ej15) Obtención de constantes para el switch, el span Before y el After.
const ej15BeforeOValues = document.getElementById("ejBeforeOValues");
const ej15AfterOValues = document.getElementById("ejAfterOValues");
let ej15OVlRange = document.getElementById("ejOValues");
//ej15) Llamado a la función con las constantes del ejercicio 15 de Object con values.
ej15OVlRange.addEventListener('change', () => {eg(ej15OVlRange.valueAsNumber, ej15BeforeOValues, ej15AfterOValues)});

//ej16) Obtención de constantes para el switch, el span Before y el After.
const ej16BeforePadSE = document.getElementById("ejBeforePadSE");
const ej16AfterPadSE = document.getElementById("ejAfterPadSE");
let ej16PadRange = document.getElementById("ejPadSE");
//ej16) Llamado a la función con las constantes del ejercicio 16 de padStart y padEnd.
ej16PadRange.addEventListener('change', () => {eg(ej16PadRange.valueAsNumber, ej16BeforePadSE, ej16AfterPadSE)});

//ej17) Obtención de constantes para el switch, el span Before y el After.
const ej17BeforeComas = document.getElementById("ejBeforeComas");
const ej17AfterComas = document.getElementById("ejAfterComas");
let ej17ComRange = document.getElementById("ejComas");
//ej17) Llamado a la función con las constantes del ejercicio 17 de Trailing commas.
ej17ComRange.addEventListener('change', () => {eg(ej17ComRange.valueAsNumber, ej17BeforeComas, ej17AfterComas)});

//ej18) Obtención de constantes para el switch, el span Before y el After.
const ej18BeforeAsync = document.getElementById("ejBeforeAsync");
const ej18AfterAsync = document.getElementById("ejAfterAsync");
let ej18AsyRange = document.getElementById("ejAsync");
//ej18) Llamado a la función con las constantes del ejercicio 18 de Trailing Async y Await.
ej18AsyRange.addEventListener('change', () => {eg(ej18AsyRange.valueAsNumber, ej18BeforeAsync, ej18AfterAsync)});

//ej19) Obtención de constantes para el switch, el span Before y el After.
const ej19BeforeReposo = document.getElementById("ejBeforeReposo");
const ej19AfterReposo = document.getElementById("ejAfterReposo");
let ej19RpoRange = document.getElementById("ejReposo");
//ej19) Llamado a la función con las constantes del ejercicio 19 de Operador de reposo.
ej19RpoRange.addEventListener('change', () => {eg(ej19RpoRange.valueAsNumber, ej19BeforeReposo, ej19AfterReposo)});

//ej20) Obtención de constantes para el switch, el span Before y el After.
const ej20BeforePPropaga = document.getElementById("ejBeforePPropaga");
const ej20AfterPPropaga = document.getElementById("ejAfterPPropaga");
let ej20PpgRange = document.getElementById("ejPPropaga");
//ej20) Llamado a la función con las constantes del ejercicio 20 de Propiedades de Ppropagación.
ej20PpgRange.addEventListener('change', () => {eg(ej20PpgRange.valueAsNumber, ej20BeforePPropaga, ej20AfterPPropaga)});

//ej21) Obtención de constantes para el switch, el span Before y el After.
const ej21BeforeFinally = document.getElementById("ejBeforeFinally");
const ej21AfterFinally = document.getElementById("ejAfterFinally");
let ej21FnlRange = document.getElementById("ejFinally");
//ej21) Llamado a la función con las constantes del ejercicio 21 de Promise.finally.
ej21FnlRange.addEventListener('change', () => {eg(ej21FnlRange.valueAsNumber, ej21BeforeFinally, ej21AfterFinally)});

//ej22) Obtención de constantes para el switch, el span Before y el After.
const ej22BeforeRegex = document.getElementById("ejBeforeRegex");
const ej22AfterRegex = document.getElementById("ejAfterRegex");
let ej22RgxRange = document.getElementById("ejRegex");
//ej22) Llamado a la función con las constantes del ejercicio 22 de Regex.
ej22RgxRange.addEventListener('change', () => {eg(ej22RgxRange.valueAsNumber, ej22BeforeRegex, ej22AfterRegex)});

//ej23) Obtención de constantes para el switch, el span Before y el After.
const ej23BeforeFlat = document.getElementById("ejBeforeFlat");
const ej23AfterFlat = document.getElementById("ejAfterFlat");
let ej23FltRange = document.getElementById("ejFlat");
//ej23) Llamado a la función con las constantes del ejercicio 23 de array.prototype.flat().
ej23FltRange.addEventListener('change', () => {eg(ej23FltRange.valueAsNumber, ej23BeforeFlat, ej23AfterFlat)});

//ej24) Obtención de constantes para el switch, el span Before y el After.
const ej24BeforeFlatMap = document.getElementById("ejBeforeFlatMap");
const ej24AfterFlatMap = document.getElementById("ejAfterFlatMap");
let ej24FlMRange = document.getElementById("ejFlatMap");
//ej24) Llamado a la función con las constantes del ejercicio 24 de array.flatMap().
ej24FlMRange.addEventListener('change', () => {eg(ej24FlMRange.valueAsNumber, ej24BeforeFlatMap, ej24AfterFlatMap)});

//ej25) Obtención de constantes para el switch, el span Before y el After.
const ej25BeforeTrim = document.getElementById("ejBeforeTrim");
const ej25AfterTrim = document.getElementById("ejAfterTrim");
let ej25TrmRange = document.getElementById("ejTrim");
//ej25) Llamado a la función con las constantes del ejercicio 25 de String.trimStart()/End().
ej25TrmRange.addEventListener('change', () => {eg(ej25TrmRange.valueAsNumber, ej25BeforeTrim, ej25AfterTrim)});

//ej26) Obtención de constantes para el switch, el span Before y el After.
const ej26BeforeTCatch = document.getElementById("ejBeforeTCatch");
const ej26AfterTCatch = document.getElementById("ejAfterTCatch");
let ej26TChRange = document.getElementById("ejTCatch");
//ej26) Llamado a la función con las constantes del ejercicio 26 de Try/Catch.
ej26TChRange.addEventListener('change', () => {eg(ej26TChRange.valueAsNumber, ej26BeforeTCatch, ej26AfterTCatch)});

//ej27) Obtención de constantes para el switch, el span Before y el After.
const ej27BeforeFEntries = document.getElementById("ejBeforeFEntries");
const ej27AfterFEntries = document.getElementById("ejAfterFEntries");
let ej27FEnRange = document.getElementById("ejFEntries");
//ej27) Llamado a la función con las constantes del ejercicio 27 de Object.fromEntries().
ej27FEnRange.addEventListener('change', () => {eg(ej27FEnRange.valueAsNumber, ej27BeforeFEntries, ej27AfterFEntries)});

//ej28) Obtención de constantes para el switch, el span Before y el After.
const ej28BeforeSymbol = document.getElementById("ejBeforeSymbol");
const ej28AfterSymbol = document.getElementById("ejAfterSymbol");
let ej28SymRange = document.getElementById("ejSymbol");
//ej28) Llamado a la función con las constantes del ejercicio 28 de Symbol().
ej28SymRange.addEventListener('change', () => {eg(ej28SymRange.valueAsNumber, ej28BeforeSymbol, ej28AfterSymbol)});
