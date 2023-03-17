import { AlturasType, GeneroType, PesosType } from '../ts/types'
import twoDecimales from './twoDecimales'

interface calcularIMCProps {
  genero: GeneroType
  tipoPeso: PesosType
  tipoAltura: AlturasType
  peso: number
  altura: number

  feet: number
}

type calcularIMCReturn = {
  imc: number
  peso: number
  rango: [number, number]
  rangoObesidad: number
 rangoSobrePeso:number
}

const calcularIMC = ({
  genero,
  peso,
  altura,
  tipoAltura,
  tipoPeso,

  feet
}: calcularIMCProps): calcularIMCReturn => {
  
  var res = altura * 0.3048 ;
 
  var tes = feet * 0.0254;
  var height = res+tes;
var weight = peso*0.453592;
var imc = weight/(height*height);
 
 
   const heights = +height / 3.28;
   const pesoKg = +peso / 2.2;
  
   
   var lower = (18.5 * (height*height))/0.453592;
   var upper = (24.9 * (height*height))/0.453592;
   var test =  (29.0 * (height*height))/0.453592;
  

   const alturaM = altura* 0.3048 +feet* 0.0254;

  const rangoPesoIdeal: [number, number] = [0, 0]
  let rangoSobrePeso: number = 0

  let rangoObesidad: number = 0
  
  rangoPesoIdeal[0] = twoDecimales(lower);
  rangoPesoIdeal[1] =twoDecimales(upper);
  rangoSobrePeso = twoDecimales(test);

  return {
    imc: twoDecimales(imc),
    peso: twoDecimales(pesoKg),
    rango: rangoPesoIdeal,
    rangoSobrePeso,
    rangoObesidad
  }
}

export default calcularIMC
