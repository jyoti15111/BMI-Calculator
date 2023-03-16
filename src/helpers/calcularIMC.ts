import { AlturasType, GeneroType, PesosType } from '../ts/types'
import twoDecimales from './twoDecimales'

interface calcularIMCProps {
  genero: GeneroType
  tipoPeso: PesosType
  tipoAltura: AlturasType
  peso: number
  altura: number
  year: number
  feet: number
}

type calcularIMCReturn = {
  imc: number
  peso: number
  rango: [number, number]
  rangoobesity: number
  rangooverweight: number
}

const calcularIMC = ({
  genero,
  peso,
  altura,
  tipoAltura,
  tipoPeso,
  year,
  feet
}: calcularIMCProps): calcularIMCReturn => {
  //  console.log(tipoPeso);
  //  console.log(altura+'.'+feet);
  var res = altura * 0.3048 ;
  console.log(res);
  var tes = feet * 0.0254;
  var height = res+tes;
var weight = peso*0.453592;
var imc = weight/(height*height);
  console.log(weight);
  // var height = altura+'.'+feet;
   const heights = +height / 3.28;
   const pesoKg = +peso / 2.2;
  //  const imc = pesoKg / (heights * heights);
   console.log(imc);
   var lower = (18.5 * (height*height))/0.453592;
   var upper = (24.9 * (height*height))/0.453592;
   console.log(lower);
   console.log(upper);
//    BMI = 703 × 	
// mass (lbs)
// height2 (in)

  //  console.log(weight);
  //  console.log(heights);
  // const pesoKg = peso * 0.453592  // Convertir libras a kilogramos
  // const alturaM = tipoAltura === 'metro' ? altura : altura / 100 // Convertir metros a centimetros
  // console.log(tipoAltura);
  //  console.log(pesoKg);21ft × 0.3048 + 23in × 0.0254
  //  console.log(feet);
   const alturaM = altura* 0.3048 +feet* 0.0254;
  //  console.log(alturaM);
  // const imc = pesoKg / (alturaM * alturaM) // Calcular IMC
// console.log(imc);
  const rangoPesoIdeal: [number, number] = [0, 0]
  let rangooverweight: number = 0
  let rangoobesity: number = 0
  rangoPesoIdeal[0] = twoDecimales(lower);
  rangoPesoIdeal[1] =twoDecimales(upper);
  /*
    IMC Rango de peso
    0,0 - 19,0 = under weight
    19,1 - 24,0 = normal weight

    24,1 - 29,0 = overweight
    29,1 - 38,9 = obesity
    39,0 + = extreme obesity
   */

  // Calcular rango de peso ideal min y max en kg de acuerdo a la edad
  // if (year < 18) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((19.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(19.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((24.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(24.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((29.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(29.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((38.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(38.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((18.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(18.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((23.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(23.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((28.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(28.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((37.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(37.9 * (alturaM * alturaM))
  //   }
  // } else if (year >= 18 && year <= 24) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((19.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(19.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((24.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(24.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((29.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(29.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((38.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(38.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((18.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(18.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((23.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(23.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((28.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(28.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((37.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(37.9 * (alturaM * alturaM))
  //   }
  // } else if (year >= 25 && year <= 34) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((20.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(20.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((25.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(25.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((30.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(30.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((39.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(39.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((19.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(19.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((24.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(24.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((29.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(29.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((38.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(38.9 * (alturaM * alturaM))
  //   }
  // } else if (year >= 35 && year <= 44) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((21.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(21.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((26.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(26.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((31.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(31.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((40.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(40.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((20.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(20.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((25.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(25.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((30.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(30.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((39.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(39.9 * (alturaM * alturaM))
  //   }
  // } else if (year >= 45 && year <= 54) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((22.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(22.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((27.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(27.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((32.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(32.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((41.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(41.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((21.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(21.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((26.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(26.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((31.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(31.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((40.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(40.9 * (alturaM * alturaM))
  //   }
  // } else if (year >= 55 && year <= 64) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((23.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(23.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((28.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(28.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((33.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(33.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((42.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(42.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((22.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(22.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((27.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(27.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((32.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(32.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((41.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(41.9 * (alturaM * alturaM))
  //   }
  // } else if (year >= 65 && year <= 74) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((24.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(24.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((29.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(29.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((34.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(34.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((43.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(43.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((23.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(23.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((28.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(28.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((33.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(33.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((42.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(42.9 * (alturaM * alturaM))
  //   }
  // } else if (year >= 75) {
  //   if (genero === 'hombre') {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((25.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(25.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((30.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(30.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((35.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(35.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((44.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(44.9 * (alturaM * alturaM))
  //   } else {
  //     rangoPesoIdeal[0] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((24.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(24.0 * (alturaM * alturaM))
  //     rangoPesoIdeal[1] =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((29.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(29.0 * (alturaM * alturaM))
  //     rangooverweight =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((34.0 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(34.0 * (alturaM * alturaM))
  //     rangoobesity =
  //       tipoPeso === 'lb'
  //         ? twoDecimales((43.9 * (alturaM * alturaM)) / 0.453592)
  //         : twoDecimales(43.9 * (alturaM * alturaM))
  //   }
  // }
console.log(rangoPesoIdeal);
  return {
    imc: twoDecimales(imc),
    peso: twoDecimales(pesoKg),
    rango: rangoPesoIdeal,
    rangooverweight,
    rangoobesity
  }
}

export default calcularIMC
