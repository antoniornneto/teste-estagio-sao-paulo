const text = `Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0; Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } Imprimir(SOMA); \
Ao final do processamento, qual será o valor da variável SOMA?`;
const code = `
    const index = 13;
    let k = 0;
    let sum = 0;

    while (k < index) {
    k = k + 1;
    sum = sum + k;
  }`;

const Teste1 = () => {
  const index = 13;
  let k = 0;
  let sum = 0;

  while (k < index) {
    k = k + 1;
    sum = sum + k;
  }
  return (
    <div className="space-y-4 py-4">
      <h1 className="text-xl">Atividade 1</h1>
      <p>
        Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0.{" "}
        {`Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } Imprimir(SOMA).`}
        <br />
        <br />
        {`Ao final do processamento, qual será o valor da variável SOMA?`}
      </p>
      <h1>Resultado: </h1>
      <div className="flex flex-col gap-4 italic">
        <h3>Código:</h3>
        <code className="bg-gray-600 p-2 rounded-lg">{code}</code>
        <p>Resposta: {sum}</p>
      </div>
    </div>
  );
};

export default Teste1;
