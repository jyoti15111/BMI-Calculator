import { useEffect, useState } from 'react'
import { PesosType } from '../ts/types'
import '../styles/Resultados.css'

interface ResultadosProps {
  titulo: string
  imc?: number
  rangPesoIdeal: [number, number]
  pesoActual?: number
  tipoPeso: PesosType
  rangoSobrePeso: number
  rangoObesidad: number
  tipo: 'pesoIdeal' | 'imc'
}

const Resultados = ({
  titulo,
  tipoPeso,
  imc,
  pesoActual,
  rangPesoIdeal,
  rangoSobrePeso,
  rangoObesidad,
  tipo
}: ResultadosProps): JSX.Element => {
  const [clase, setClase] = useState('')

  useEffect(() => {
    if (imc !== undefined && tipo === 'imc') {
      if (imc < 19.0) {
        setClase('bajo')
      } else if (imc > 19.0 && imc < 24.0) {
        setClase('normal')
      } else if (imc > 24.0 && imc < 29.0) {
        setClase('sobre-peso')
      } else if (imc > 29.0) {
        setClase('obesity')
      } 
      // else if (imc > 39.0) {
      //   setClase('obesity-morbida')
      // }
    }
  }, [imc, rangoSobrePeso, rangoObesidad])

  return (
    <section className='resultado'>
      <div className='container'>
        

        <section className='resultado__grafico'>
          <div className='resultado__linear'>
            <section className={`resultado__indice ${tipo === 'imc' ? clase : 'normal'}`}>
              <h4>{tipo === 'imc' ? 'Your BMI' : 'Peso ideal'}</h4>
              <p>
                {tipo === 'imc'
                  ? imc
                  : `${rangPesoIdeal[0]} ${tipoPeso} - ${rangPesoIdeal[1]} ${tipoPeso}`}
              </p>
              <span></span>
            </section>

            <div>
              <h4>under weight</h4>
              <p className='one'>
                <span>0.0 </span> <span className='resultado__dotted'></span>
              </p>
              <span className='resultado-bottom'>
                {rangPesoIdeal[0]} {tipoPeso}
              </span>
            </div>
            <div>
              <h4>normal weight
</h4>
              <p>
                <span>19.0</span>
                <span className='resultado__dotted'></span>
              </p>
              <span className='resultado-bottom'>
                {rangPesoIdeal[1]} {tipoPeso}
              </span>
            </div>
            <div>
              <h4>overweight</h4>
              <p>
                <span>24.0</span>
                <span className='resultado__dotted'></span>
              </p>
              <span className='resultado-bottom'>
                {rangoSobrePeso} {tipoPeso}
              </span>
            </div>
            <div>
              <h4>obesity</h4>
              <p>
                <span>29.0</span>
                <span className='resultado__dotted'></span>
              </p>
              <span className='resultado-bottom'>
                {rangoObesidad} {tipoPeso}
              </span>
            </div>
            
          </div>
        </section>

        <section className='resultado__informacion'>
          {tipo === 'imc' && (
            <div>
              <h4>Your personal BMI</h4>
              <p>{imc} BMI</p>
            </div>
          )}

          {tipo === 'imc' && (
            <div>
              <h4>Your ideal BMI</h4>
              {/* <p>
                {pesoActual} {tipoPeso}
              </p> */}
               <p>
                19-24
              </p>
            </div>
          )}

          <div>
            <h4>Your ideal weight range</h4>
            <p>
              {rangPesoIdeal[0]} {tipoPeso} - {rangPesoIdeal[1]} {tipoPeso}
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Resultados
