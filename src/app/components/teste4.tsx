interface Faturamento {
  [key: string]: any;
}

const Teste4 = () => {
  const faturamento: Faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const { ES, MG, Outros, RJ, SP } = faturamento;
  let arrayDeFaturamentos = [];
  arrayDeFaturamentos.push(ES, MG, Outros, RJ, SP);
  const faturamentoTotal = arrayDeFaturamentos.reduce(
    (acc: any, val: any) => acc + val,
    0
  );

  let percentuais: Faturamento = {};

  for (const estado in faturamento) {
    percentuais[estado] = (
      (faturamento[estado] / faturamentoTotal) *
      100
    ).toFixed(2);
  }

  return (
    <div className="space-y-4 py-4">
      <h1 className="text-xl">Atividade 4</h1>
      <div className="space-y-2">
        <p>
          Dado o valor de faturamento mensal de uma distribuidora, detalhado por
          estado: <br />• SP – R$67.836,43 <br />• RJ – R$36.678,66 <br />• MG –
          R$29.229,88 <br />• ES – R$27.165,48 <br />• Outros – R$19.849,53
        </p>
        <br />
        <p>
          Escreva um programa na linguagem que desejar onde calcule o percentual
          de representação que cada estado teve dentro do valor total mensal da
          distribuidora.{" "}
        </p>
        <h1>Resultado: </h1>
        <div className="italic">
          <p>SP: {percentuais.SP}%</p>
          <p>RJ: {percentuais.RJ}%</p>
          <p>MG: {percentuais.MG}%</p>
          <p>ES: {percentuais.ES}%</p>
          <p>Outros: {percentuais.Outros}%</p>
        </div>
      </div>
    </div>
  );
};

export default Teste4;
