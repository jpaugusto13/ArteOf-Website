export default function Estampas() {
  return (
    <main className="flex flex-col gap-2 p-2">
      <div className="flex w-full">
        <h1 className="flex text-2xl border-b-1">Estampas ArteOf</h1>
      </div>
      
      <div className="grid grid-cols-4 gap-5">
        <img className="rounded-2xl shadow-lg brightness-110" width={200} src="../../public/fotos/01.jpg" alt="estampa"/>
        <img className="" width={200} src="../../public/fotos/02.jpg" alt="estampa"/>
        <img width={200} src="../../public/fotos/03.jpg" alt="estampa"/>
        <img width={200} src="../../public/fotos/04.jpg" alt="estampa"/>
        <img width={200} src="../../public/fotos/05.jpg" alt="estampa"/>
        <img width={200} src="../../public/fotos/06.jpg" alt="estampa"/>
        <img width={200} src="../../public/fotos/07.jpg" alt="estampa"/>
      </div>
    </main>
  )
}