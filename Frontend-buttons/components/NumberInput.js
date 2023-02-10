import { useState } from 'react'

export default function NumberInput ({ value, max, min, softMin, softMax, step }) {
  const [isRed, setIsRed] = useState(false)
  const [isPlusDisabled, setIsPlusDisabled] = useState(false)
  const [isMinusDisabled, setIsMinusDisabled] = useState(false)

  const minus = (min, softMin) => {
    const input = document.getElementById('number')
    const actualValue = parseInt(input.value)

    // Verificar softMin
    if (actualValue - step <= softMin) {
      setIsRed(true)
    } else {
      setIsRed(false)
    }

    // Verificar límites
    if (actualValue - step < min) {
      input.value = min.toString()
    } else {
      input.value = (actualValue - step).toString()
    }

    // Deshabilitar botón
    if (parseInt(input.value) === min) {
      setIsMinusDisabled(true)
    } else {
      setIsMinusDisabled(false)
      setIsPlusDisabled(false)
    }
  }

  const plus = (max, softMax) => {
    const input = document.getElementById('number')
    const actualValue = parseInt(input.value)

    // Verificar softMax
    if (actualValue + step >= softMax) {
      setIsRed(true)
    } else {
      setIsRed(false)
    }

    // Verificar límites
    if (actualValue + step > max) {
      input.value = max.toString()
    } else {
      input.value = (actualValue + step).toString()
    }

    // Deshabilitar botón
    if (parseInt(input.value) === max) {
      setIsPlusDisabled(true)
    } else {
      setIsMinusDisabled(false)
      setIsPlusDisabled(false)
    }
  }

  const checkInput = () => {
    const input = document.getElementById('number')

    // Control de máximos y mínimos
    const value = input.value
    if (value >= softMax) {
      if (value >= max) {
        input.value = max
      }
      setIsRed(true)
    } else if (value <= softMin) {
      if (value <= min) {
        input.value = min
      }
      setIsRed(true)
    } else {
      setIsRed(false)
    }
  }

  const timer = () => {
    setTimeout(checkInput, 800)
  }

  const deleteLetters = () => {
    // Limpiar letras
    const input = document.getElementById('number')
    input.value = input.value.replace(/[^\d,]/g, '')
    timer()
  }

  return (
        <div className="flex flex-row justify-center items-center">
            <button id='button-minus' onClick={() => minus(min, softMin)} disabled={isMinusDisabled} className={isMinusDisabled ? 'font-eaves-ultra w-12 h-12 pt-px bg-neutral-900 text-white text-5xl rounded-lg mr-4 cursor-pointer' : 'font-eaves-ultra w-12 h-12 pt-px bg-red-600 text-white text-5xl rounded-lg mr-4 active:bg-red-900 hover:bg-red-300 cursor-pointer'}>-</button>
            <input type="text" id='number' onChange={deleteLetters} defaultValue={value} className={isRed ? 'font-eaves-regular text-center w-3/12 h-12 bg-red-300 text-red-900 text-2xl border-2 border-b-red-500 focus:border-red-500' : 'font-eaves-regular text-center text-neutral-900 w-3/12 h-12 bg-neutral-300 text-2xl border-2 border-b-neutral-900 focus:border-neutral-900'}></input>
            <button id='button-plus' onClick={() => plus(max, softMax)} disabled={isPlusDisabled} className={isPlusDisabled ? 'font-eaves-ultra w-12 h-12 pt-px bg-neutral-900 text-white text-5xl rounded-lg ml-4 cursor-pointer' : 'font-eaves-ultra w-12 h-12 pt-px bg-red-600 text-white text-5xl rounded-lg ml-4 active:bg-red-900 hover:bg-red-300 cursor-pointer'}>+</button>
        </div>
  )
}
