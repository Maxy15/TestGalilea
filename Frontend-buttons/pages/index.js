import Head from 'next/head';
import NumberInput from './../components/NumberInput';

export default function Home() {
  return (
    <div className='bg-red-50'>
      <Head>
        <title>Botones</title>
      </Head>
      <div className='flex flex-col items-center justify-center'>
        <h1 className="font-bold text-5xl text-center mt-28 mb-10 font-eaves-bold">Botones incrementales</h1>
        <ul className="mb-10 w-4/12 space-y-2 list-disc font-eaves-regular text-lg list-inside">
          <li>Usa los botones + y - para aumentar o disminuir el valor del cuadrado de abajo</li>
          <li>El cuadrado y su valor se pondrán rojos si estás cerca o en los límites del rango disponible</li>
          <li>Los botones serán deshabilitados y se volverán negros si los límites son alcanzados</li>
        </ul>
      </div>
      <div>
        <NumberInput value={7} max={15} min={4} softMin={6} softMax={13} step={1}></NumberInput>
      </div>
      <footer className="bg-red-600 text-white h-8 mt-80 font-light text-sm">
        <h3 className="text-center font-eaves-regular pt-1.5">Creado por Max Yáñez - Todos los derechos reservados ®</h3>
      </footer>
    </div>
  )
}
