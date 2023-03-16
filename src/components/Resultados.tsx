import { useEffect, useState } from 'react'
import { PesosType } from '../ts/types'
import '../styles/Resultados.css'

interface ResultadosProps {
  titulo: string
  imc?: number
  rangPesoIdeal: [number, number]
  pesoActual?: number
  tipoPeso: PesosType
  rangooverweight: number
  rangoobesity: number
  tipo: 'pesoIdeal' | 'imc'
}

const Resultados = ({
  titulo,
  tipoPeso,
  imc,
  pesoActual,
  rangPesoIdeal,
  rangooverweight,
  rangoobesity,
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
      } else if (imc > 29.0 && imc < 39.0) {
        setClase('obesity')
      } else if (imc > 39.0) {
        setClase('obesity-morbida')
      }
    }
  }, [imc, rangooverweight, rangoobesity])

  return (
    <section className='resultado'>
      <div className='container'>
        <h2 className='titulo'>{titulo}</h2>

        <section className='resultado__grafico'>
          <div className='resultado__linear'>
            <section className={`resultado__indice ${tipo === 'imc' ? clase : 'normal'}`}>
              <h2>{tipo === 'imc' ? 'YOUR BMI' : 'Peso ideal'}</h2>
              <p>
                {tipo === 'imc'
                  ? imc
                  : `${rangPesoIdeal[0]} ${tipoPeso} - ${rangPesoIdeal[1]} ${tipoPeso}`}
              </p>
              <span></span>
            </section>

            <div>
              <h3>under weight</h3>
              <p className='one'>
                <span>0.0 </span> <span className='resultado__dotted'></span>
              </p>
              <span className='resultado-bottom'>
                {rangPesoIdeal[0]} {tipoPeso}
              </span>
            </div>
            <div>
              <h3>normal weight
</h3>
              <p>
                <span>19.0</span>
                <span className='resultado__dotted'></span>
              </p>
              <span className='resultado-bottom'>
                {rangPesoIdeal[1]} {tipoPeso}
              </span>
            </div>
            <div>
              <h3>overweight</h3>
              <p>
                <span>24.0</span>
                <span className='resultado__dotted'></span>
              </p>
              <span className='resultado-bottom'>
                {rangooverweight} {tipoPeso}
              </span>
            </div>
            <div>
              <h3>obesity</h3>
              <p>
                <span>29.0</span>
                <span className='resultado__dotted'></span>
              </p>
              <span className='resultado-bottom'>
                {rangoobesity} {tipoPeso}
              </span>
            </div>
            <div>
              <h3>extreme obesity</h3>
              <p>
                <span>39.0</span>
                <span className='resultado__dotted'></span>
                <span>+</span>
              </p>
            </div>
          </div>
        </section>

        <section className='resultado__informacion'>
          {tipo === 'imc' && (
            <div>
              <h2>Your personal BMI</h2>
              <p>{imc} BMI</p>
            </div>
          )}

          {tipo === 'imc' && (
            <div>
              <h2>Your ideal BMI</h2>
              {/* <p>
                {pesoActual} {tipoPeso}
              </p> */}
               <p>
                19-24
              </p>
            </div>
          )}

          <div>
            <h2>Your ideal weight range</h2>
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
