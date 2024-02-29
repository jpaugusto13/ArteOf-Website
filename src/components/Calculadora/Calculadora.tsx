import { SubmitHandler, useForm } from "react-hook-form"

interface tecido {
  metros: number
  valor: number
}

interface IFormInput {
  largura: string
  altura: string
  tecidoObj: string
}

export default function Calculadora() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const valorImpressão = 5;

  const suedeObj : tecido = {
    metros: 1.6,
    valor: 7
  }
  
  const oxfordObj : tecido = {
    metros: 1.5,
    valor: 7
  }
  const helancaObj : tecido = {
    metros: 1.8,
    valor: 6
  }
  const tactelObj : tecido = {
    metros: 1.6,
    valor: 4.5
  }
  
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {

    const tecido : tecido = JSON.parse(data.tecidoObj);
    console.log(tecido);
    let impressao: number;
    let valorTecido: number;

    if(Number(data.largura) < tecido.metros) {
      console.log("Desenho vai deitado")
      impressao = Number(Number(data.largura.replace(",",".")) * Number(tecido.metros)) * Number(valorImpressão);
      valorTecido = Number(Number(data.largura.replace(",","."))) * Number(tecido.valor);
    } else {
      impressao = Number(Number(data.altura.replace(",",".")) * Number(tecido.metros)) * Number(valorImpressão);
      valorTecido = Number(Number(data.altura.replace(",","."))) * Number(tecido.valor);
    }
    console.log("Desenho vai em pé")
    console.log("Valor da impressão: R$ "+Number(impressao).toFixed(2).replace(".",","))
    console.log("Valor em tecido: R$ "+Number(valorTecido).toFixed(2).replace(".",","))
  console.log("\nValor total: R$ "+Number(Number(valorTecido) + Number(impressao)).toFixed(2).replace(".",","))
  }
  
  return (
    <form className="flex flex-col items-center rounded  p-2 border" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-32 flex flex-col">
        <label>Largura</label>
        <input type="text" className="rounded border-2" {...register("largura")} />
      </div>

      <div className="w-32 flex flex-col">
        <label>Altura</label>
        <input className="rounded border-2" {...register("altura")} />
      </div>

      <div>
        <label>Tecido: </label>
        <select {...register("tecidoObj")}>
          <option>Impressão</option>
          <option value={JSON.stringify(oxfordObj)}>Oxford</option>
          <option value={JSON.stringify(tactelObj)}>Tactel</option>
          <option value={JSON.stringify(suedeObj)}>Suede</option>
          <option value={JSON.stringify(helancaObj)}>Helanca</option>
        </select>
      </div>

      <div>
        <button className="rounded-md w-full p-1 px-3 bg-green-500 text-white">Calcular</button>
      </div>
    </form>
  )
}