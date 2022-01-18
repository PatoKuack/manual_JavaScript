let salario = 0

let casa = {
  nombre: "Downton Abbey",
  manutencion: 0
}

console.log("Visualizar oficios: servidumbreSiglo18()")

const servidumbreSiglo18 = () => {
  console.log("PUESTOS:")
  for(servidumbre of oficios){
    console.log(`${servidumbre.puesto}`)
  }
  // oficios.map(servidumbre => console.log(`${servidumbre.puesto}`))
}

console.log('¿Qué puesto quiere ocupar? (ejemplo: registro("Lacayo")')
const registro = solicitante => {
  if (!solicitante) return "Ingrese un oficio"
  const vacancia = oficios.find(comparado1 => comparado1.puesto === solicitante)
  if (!vacancia) {
    return "Ese oficio no esta en nuestra lista de vacantes."
  } else{
    const cupo = postulantes.find(comparado2 => comparado2.puesto === solicitante)
    if (!cupo){
      postulantes.push(vacancia)
      console.log("Se ha registrado su solicitud exitosamente.")
    } else {
      return "El oficio ya esta solicitado, intente otro."
    }
  }
    //return postulantes
  return lista()
}

const lista = () => postulantes

const paga = () => {
  let costo = 0
  /* //recorrer todos los oficios que esten dentro de postulantes { suma sus sueldos y agregalos a "costo"}
  for (oficios of postulantes){
    costo += oficios.sueldo
  } */
  postulantes.forEach(salario => (
    costo += salario.sueldo
  ))
  salario = costo
  return salario
}

const manutencionFinal = () => {
  paga()
  casa.manutencion = salario
  return `La casa ${casa.nombre} tendrá una manutención de ${casa.manutencion} libras.`
}

const nuevaManutencion = () => {
  transacciones.push(salario)
  // casa.manutencion = 0
  postulantes = []
  salario = 0
  return transacciones
}

// -------------------------------------------
const inputOficio = document.getElementById("InputCoupon");
//obtenemos el elemento en donde el usuario teclea el oficio que desea
const oficioValue = inputOficio.value;
//obtenemos el valor del elemento
const isOficioValid = function(oficio){
  return oficio.puesto === oficioValue;
}
const userOficio = oficios.find(isOficioValid);
//validamos si el oficio que escribió el usuario esta en la propiedad "puesto" de alguno de los objetos en la lista de cupones.
if (!userOficio) {
  alert("El oficio " + oficioValue + "no es válido");
}else {
  const sueldo = userOficio.sueldo;
  const respuesta = document.getElementById("respuestaId");
  respuesta.innerText = "El sueldo del oficio al que postula es de: $" + sueldo;
}
// -------------------------------------------

/*
  let salario = 0;

  let casa = {
    nombre: "Downton Abbey",
    manutencion: 0
  };

  console.log("Visualizar oficios: servidumbreSiglo18()");

  const servidumbreSiglo18 = () => {
    console.log("PUESTOS:");
    for(servidumbre of oficios){
      console.log(`${servidumbre.puesto}`);
    };
  };

  console.log('¿Qué puesto quiere ocupar? (ejemplo: registro("Lacayo")');
  const registro = solicitante => {
    if (!solicitante) return "Ingrese un oficio";
    const vacancia = oficios.find(comparado1 => comparado1.puesto === solicitante);
    if (!vacancia) {
      return "Ese oficio no esta en nuestra lista de vacantes.";
    } else{
      const cupo = postulantes.find(comparado2 => comparado2.puesto === solicitante);
      if (!cupo){
        postulantes.push(vacancia);
        console.log("Se ha registrado su solicitud exitosamente.");
      } else {
        return "El oficio ya esta solicitado, intente otro.";
      };
    }
    return lista();
  };

  const lista = () => postulantes;
  
  const paga = () => {
    let costo = 0;
    postulantes.forEach(salario => (
      costo += salario.sueldo
    ));
    salario = costo;
    return salario;
  };

  const manutencionFinal = () => {
    paga();
    casa.manutencion = salario;
    return `La casa ${casa.nombre} tendrá una manutención de ${casa.manutencion} libras.`;
  };
  
  const nuevaManutencion = () => {
    transacciones.push(salario);
    postulantes = [];
    salario = 0;
    return transacciones;
  };
*/