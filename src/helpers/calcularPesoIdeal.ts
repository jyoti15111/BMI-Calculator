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
  

  const rangoPesoIdeal: [number, number] = [0, 0]
  let rangoSobrePeso: number = 0
  
  var res = altura * 0.3048 ;

  
  var tes = feet * 0.0254;
  var height = res+tes;
  var lower = (18.5 * (height*height))/0.453592;
  var upper = (24.9 * (height*height))/0.453592;
  var test =  (29.0 * (height*height))/0.453592;
 

  let rangoObesidad: number = 0

  rangoPesoIdeal[0] = twoDecimales(lower);
  rangoPesoIdeal[1] =twoDecimales(upper);
  rangoSobrePeso = twoDecimales(test);
  

  return {
    rango: rangoPesoIdeal,
    rangoSobrePeso,
    rangoObesidad
  }
}

export default calcularPesoIdeal
