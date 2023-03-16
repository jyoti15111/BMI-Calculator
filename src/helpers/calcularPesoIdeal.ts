import { AlturasType, GeneroType } from '../ts/types'
import twoDecimales from './twoDecimales'

interface calcularIMCProps {
  genero: GeneroType
  tipoAltura: AlturasType
  altura: number
  year: number
}

type calcularIMCReturn = {
  rango: [number, number]
  rangoobesity: number
  rangooverweight: number
}

const calcularPesoIdeal = ({
  genero,
  altura,
  tipoAltura,
  year
}: calcularIMCProps): calcularIMCReturn => {
  // CALCULAR RANGO DE PESO IDEAL A PARTIR DE LA ALTURA Y EDADES

  const alturaM = tipoAltura === 'metro' ? altura : altura / 100 // Convertir metros a centimetros

  const rangoPesoIdeal: [number, number] = [0, 0]
  let rangooverweight: number = 0
  let rangoobesity: number = 0

  /*
    IMC Rango de peso
    0,0 - 19,0 = under weight
    19,1 - 24,0 = normal weight

    24,1 - 29,0 = overweight
    29,1 - 38,9 = obesity
    39,0 + = extreme obesity
   */

  // Calcular rango de peso ideal min y max en kg segun edad
  if (year < 18) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] = twoDecimales(19.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] = twoDecimales(24.0 * (alturaM * alturaM))
      rangooverweight = twoDecimales(29.0 * (alturaM * alturaM))
      rangoobesity = twoDecimales(38.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] = twoDecimales(18.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] = twoDecimales(23.0 * (alturaM * alturaM))
      rangooverweight = twoDecimales(28.0 * (alturaM * alturaM))
      rangoobesity = twoDecimales(38.9 * (alturaM * alturaM))
    }
  } else if (year >= 18 && year <= 24) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] = twoDecimales(19.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] = twoDecimales(24.0 * (alturaM * alturaM))
      rangooverweight = twoDecimales(29.0 * (alturaM * alturaM))
      rangoobesity = twoDecimales(38.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] = twoDecimales(18.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] = twoDecimales(23.0 * (alturaM * alturaM))
      rangooverweight = twoDecimales(28.0 * (alturaM * alturaM))
      rangoobesity = twoDecimales(38.9 * (alturaM * alturaM))
    }
  } else if (year >= 25 && year <= 34) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] = twoDecimales(20.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] = twoDecimales(25.0 * (alturaM * alturaM))
      rangooverweight = twoDecimales(30.0 * (alturaM * alturaM))
      rangoobesity = twoDecimales(39.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] = twoDecimales(19.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] = twoDecimales(24.0 * (alturaM * alturaM))
      rangooverweight = twoDecimales(29.0 * (alturaM * alturaM))
      rangoobesity = twoDecimales(39.9 * (alturaM * alturaM))
    }
  } else if (year >= 35 && year <= 44) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] = twoDecimales(21.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] = twoDecimales(26.0 * (alturaM * alturaM))
      rangooverweight = twoDecimales(31.0 * (alturaM * alturaM))
      rangoobesity = twoDecimales(40.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] = twoDecimales(20.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] = twoDecimales(25.0 * (alturaM * alturaM))
      rangooverweight = twoDecimales(30.0 * (alturaM * alturaM))
      rangoobesity = twoDecimales(40.9 * (alturaM * alturaM))
    }
  } else if (year >= 45 && year <= 54) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] = twoDecimales(22.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] = twoDecimales(27.0 * (alturaM * alturaM))
      rangooverweight = twoDecimales(32.0 * (alturaM * alturaM))
      rangoobesity = twoDecimales(41.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] = twoDecimales(21.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] = twoDecimales(26.0 * (alturaM * alturaM))
      rangooverweight = twoDecimales(31.0 * (alturaM * alturaM))
      rangoobesity = twoDecimales(41.9 * (alturaM * alturaM))
    }
  } else if (year >= 55 && year <= 64) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] = twoDecimales(23.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] = twoDecimales(28.0 * (alturaM * alturaM))
      rangooverweight = twoDecimales(33.0 * (alturaM * alturaM))
      rangoobesity = twoDecimales(42.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] = twoDecimales(22.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] = twoDecimales(27.0 * (alturaM * alturaM))
      rangooverweight = twoDecimales(32.0 * (alturaM * alturaM))
      rangoobesity = twoDecimales(42.9 * (alturaM * alturaM))
    }
  } else if (year >= 65) {
    if (genero === 'hombre') {
      rangoPesoIdeal[0] = twoDecimales(24.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] = twoDecimales(29.0 * (alturaM * alturaM))
      rangooverweight = twoDecimales(34.0 * (alturaM * alturaM))
      rangoobesity = twoDecimales(43.9 * (alturaM * alturaM))
    } else {
      rangoPesoIdeal[0] = twoDecimales(23.0 * (alturaM * alturaM))
      rangoPesoIdeal[1] = twoDecimales(28.0 * (alturaM * alturaM))
      rangooverweight = twoDecimales(33.0 * (alturaM * alturaM))
      rangoobesity = twoDecimales(43.9 * (alturaM * alturaM))
    }
  }

  return {
    rango: rangoPesoIdeal,
    rangooverweight,
    rangoobesity
  }
}

export default calcularPesoIdeal
