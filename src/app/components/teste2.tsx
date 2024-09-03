"use client";

import { useState } from "react";

const Teste2 = () => {
  const [checkNumber, setCheckNumber] = useState<any>();
  const [txtResult, setTxtResult] = useState<string>("");
  const trueFibonacci = `O número ${checkNumber} pertence a sequência de Fibonacci`;
  const falseFibonacci = `O número ${checkNumber} NÃO pertence a sequência de Fibonacci`;

  function sequenciaFibonacci(numero: number) {
    let a = 0;
    let b = 1;
    let proximo = a + b;
    1;

    if (numero === 0 || numero === 1) {
      return true;
    }

    while (proximo <= numero) {
      if (proximo === numero) {
        return true;
      }

      a = b;
      b = proximo;
      proximo = a + b;
    }

    return false;
  }

  function isFibonacci() {
    const convert = parseInt(checkNumber);
    const test = sequenciaFibonacci(convert);
    const result = test ? trueFibonacci : falseFibonacci;

    setTxtResult(result);
    setTimeout(() => {
      setTxtResult("");
    }, 3000);
  }

  return (
    <div className="space-y-4 py-4">
      <h1 className="text-xl">Atividade 2</h1>
      <p>
        Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo
        valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2,
        3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar
        onde, informado um número, ele calcule a sequência de Fibonacci e
        retorne uma mensagem avisando se o número informado pertence ou não a
        sequência. <br />
        IMPORTANTE: Esse número pode ser informado através de qualquer entrada
        de sua preferência ou pode ser previamente definido no código;
      </p>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2" htmlFor="number">
          Insira um numero:{" "}
          <input
            onChange={(e) => setCheckNumber(e.target.value)}
            type="number"
            name="number"
            id="number"
            className="text-black rounded-lg px-2 w-20"
          />
          <button
            className="bg-slate-900 text-white rounded-xl px-4 py-2 hover:bg-slate-600"
            onClick={isFibonacci}
          >
            Checar número
          </button>
        </label>
        <div className="h-3">{txtResult}</div>
      </div>
    </div>
  );
};

export default Teste2;
