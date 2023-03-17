import { AlturasType, GeneroType } from '../ts/types'
import twoDecimales from './twoDecimales'

interface calcularIMCProps {
  genero: GeneroType
  tipoAltura: AlturasType
  altura: number
  feet: number
}

type calcularIMCReturn = {
  rango: [number, number]
  rangoObesidad: number
  rangoSobrePeso: number
}

const calcularPesoIdeal = ({
  genero,
  altura,
  tipoAltura,
  feet
 
}: calcularIMCProps): calcularIMCReturn => {
  // CALCULAR RANGO DE PESO IDEAL A PARTIR DE LA ALTURA Y EDADES

  //const alturaM = tipoAltura === 'metro' ? altura : altura / 100 // Convertir metros a centimetros

  const rangoPesoIdeal: [number, number] = [0, 0]
  let rangoSobrePeso: number = 0
  // let rangoObesidad: number = 0
  var res = altura * 0.3048 ;
  console.log(res);
  
  var tes = feet * 0.0254;
  var height = res+tes;
  var lower = (18.5 * (height*height))/0.453592;
  var upper = (24.9 * (height*height))/0.453592;
  var test =  (29.0 * (height*height))/0.453592;
 

  let rangoObesidad: number = 0

  rangoPesoIdeal[0] = twoDecimales(lower);
  rangoPesoIdeal[1] =twoDecimales(upper);
  rangoSobrePeso = twoDecimales(test);
  /*
    IMC Rango de peso
    0,0 - 19,0 = under weight
    19,1 - 24,0 = normal weight

    24,1 - 29,0 = overweight
    29,1 - 38,9 = obesity
    39,0 + = extreme obesity
   */

  // Calcular rango de peso ideal min y max en kg segun edad
  // if (year < 18) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] = twoDecimales(19.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] = twoDecimales(24.0 * (alturaM * alturaM))
  //     rangooverweight = twoDecimales(29.0 * (alturaM * alturaM))
  //     rangoObesidad = twoDecimales(38.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] = twoDecimales(18.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] = twoDecimales(23.0 * (alturaM * alturaM))
  //     rangooverweight = twoDecimales(28.0 * (alturaM * alturaM))
  //     rangoObesidad = twoDecimales(38.9 * (alturaM * alturaM))
  //   }
  // } else if (year >= 18 && year <= 24) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] = twoDecimales(19.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] = twoDecimales(24.0 * (alturaM * alturaM))
  //     rangooverweight = twoDecimales(29.0 * (alturaM * alturaM))
  //     rangoObesidad = twoDecimales(38.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] = twoDecimales(18.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] = twoDecimales(23.0 * (alturaM * alturaM))
  //     rangooverweight = twoDecimales(28.0 * (alturaM * alturaM))
  //     rangoObesidad = twoDecimales(38.9 * (alturaM * alturaM))
  //   }
  // } else if (year >= 25 && year <= 34) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] = twoDecimales(20.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] = twoDecimales(25.0 * (alturaM * alturaM))
  //     rangooverweight = twoDecimales(30.0 * (alturaM * alturaM))
  //     rangoObesidad = twoDecimales(39.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] = twoDecimales(19.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] = twoDecimales(24.0 * (alturaM * alturaM))
  //     rangooverweight = twoDecimales(29.0 * (alturaM * alturaM))
  //     rangoObesidad = twoDecimales(39.9 * (alturaM * alturaM))
  //   }
  // } else if (year >= 35 && year <= 44) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] = twoDecimales(21.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] = twoDecimales(26.0 * (alturaM * alturaM))
  //     rangooverweight = twoDecimales(31.0 * (alturaM * alturaM))
  //     rangoObesidad = twoDecimales(40.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] = twoDecimales(20.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] = twoDecimales(25.0 * (alturaM * alturaM))
  //     rangooverweight = twoDecimales(30.0 * (alturaM * alturaM))
  //     rangoObesidad = twoDecimales(40.9 * (alturaM * alturaM))
  //   }
  // } else if (year >= 45 && year <= 54) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] = twoDecimales(22.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] = twoDecimales(27.0 * (alturaM * alturaM))
  //     rangooverweight = twoDecimales(32.0 * (alturaM * alturaM))
  //     rangoObesidad = twoDecimales(41.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] = twoDecimales(21.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] = twoDecimales(26.0 * (alturaM * alturaM))
  //     rangooverweight = twoDecimales(31.0 * (alturaM * alturaM))
  //     rangoObesidad = twoDecimales(41.9 * (alturaM * alturaM))
  //   }
  // } else if (year >= 55 && year <= 64) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] = twoDecimales(23.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] = twoDecimales(28.0 * (alturaM * alturaM))
  //     rangooverweight = twoDecimales(33.0 * (alturaM * alturaM))
  //     rangoObesidad = twoDecimales(42.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] = twoDecimales(22.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] = twoDecimales(27.0 * (alturaM * alturaM))
  //     rangooverweight = twoDecimales(32.0 * (alturaM * alturaM))
  //     rangoObesidad = twoDecimales(42.9 * (alturaM * alturaM))
  //   }
  // } else if (year >= 65) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] = twoDecimales(24.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] = twoDecimales(29.0 * (alturaM * alturaM))
  //     rangooverweight = twoDecimales(34.0 * (alturaM * alturaM))
  //     rangoObesidad = twoDecimales(43.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] = twoDecimales(23.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] = twoDecimales(28.0 * (alturaM * alturaM))
  //     rangooverweight = twoDecimales(33.0 * (alturaM * alturaM))
  //     rangoObesidad = twoDecimales(43.9 * (alturaM * alturaM))
  //   }
  // }

  return {
    rango: rangoPesoIdeal,
    rangoSobrePeso,
    rangoObesidad
  }
}

export default calcularPesoIdeal
