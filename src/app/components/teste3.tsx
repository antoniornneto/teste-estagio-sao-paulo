import database from "../../db/faturamento.json";
const faturamento = database.faturamento_diario;
const faturamentoDiario = faturamento;

let faturamentoArray: any = [];
faturamentoDiario.map((valor) => faturamentoArray.push(valor.faturamento));
const sortArray = faturamentoArray.sort((a: any, b: any) => a - b);
let sortArrayWithOut0: any = [];
sortArray.map((valor: number) =>
  valor == 0 ? sortArray.shift(0) : sortArrayWithOut0.push(valor)
);

const lowerValue = sortArrayWithOut0[0];
const highValue = sortArrayWithOut0[sortArrayWithOut0.length - 1];
const midValue =
  sortArrayWithOut0.reduce((acc: number, value: number) => acc + value, 0) /
  sortArrayWithOut0.length;

const Teste3 = () => {
  return (
    <div className="space-y-4 py-4">
      <h1 className="text-xl">Atividade 3</h1>
      <div className="space-y-5">
        <p>
          Dado um vetor que guarda o valor de faturamento diário de uma
          distribuidora, faça um programa, na linguagem que desejar, que calcule
          e retorne: <br />
        </p>
        <br />
        <p>
          • O menor valor de faturamento ocorrido em um dia do mês;
          <br />• O maior valor de faturamento ocorrido em um dia do mês; <br />
          • Número de dias no mês em que o valor de faturamento diário foi
          superior à média mensal.
          <br />
          <br />
          IMPORTANTE: <br />
          a) Usar o json ou xml disponível como fonte dos dados do faturamento
          mensal; <br />
          b) Podem existir dias sem faturamento, como nos finais de semana e
          feriados. Estes dias devem ser ignorados no cálculo da média;
        </p>
        <h1>Resultado: </h1>
        <div className="flex gap-10">
          <div>
            <h1>Vetor</h1>
            <div className="border-[1px] border-white w-72">
              <div>
                <div className="flex text-center w-full">
                  <p className="flex-1">Dia</p>
                  <p className="flex-1">Faturamento</p>
                </div>
              </div>
              <div>
                {faturamentoDiario.map((valor, index) => (
                  <div className="flex text-center w-full" key={index}>
                    <p className="flex-1 border-[1px] border-white">
                      {valor.dia}
                    </p>
                    <p className="flex-1 border-[1px] border-white">
                      {valor.faturamento}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center italic">
            <span>O menor faturamento é: {lowerValue}</span>
            <span>O maior faturamento é: {highValue}</span>
            <span>A média do faturamento é: {Math.round(midValue)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teste3;
