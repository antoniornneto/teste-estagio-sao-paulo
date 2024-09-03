"use client";

import { useState } from "react";

const Teste5 = () => {
  const [text, setTexto] = useState("");
  const [invertedText, setInvertedText] = useState("");
  let texto = text;
  let textoInvertido: string = "";

  function inverterTexto() {
    for (let i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto[i];
    }

    setInvertedText(textoInvertido);
    setTimeout(() => {
      setInvertedText("");
    }, 10000);
  }

  return (
    <div className="space-y-4 py-4">
      <h1 className="text-xl">Atividade 5</h1>
      <div className="space-y-2">
        <p>
          Escreva um programa que inverta os caracteres de um string. <br />
          <br />
          IMPORTANTE: <br />
          a) Essa string pode ser informada através de qualquer entrada de sua
          preferência ou pode ser previamente definida no código; <br />
          b) Evite usar funções prontas, como, por exemplo, reverse;
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex gap-4">
          <input
            onChange={(e) => setTexto(e.target.value)}
            type="text"
            name="text"
            id="text"
            className="text-black rounded-lg px-2"
          />
          <button
            className="bg-slate-900 text-white rounded-xl px-4 py-2 hover:bg-slate-600"
            onClick={inverterTexto}
          >
            Inverter
          </button>
        </div>
        <div className="h-20">
          <p>Resultado:</p>
          <p className="text-3xl">{invertedText}</p>
        </div>
      </div>
    </div>
  );
};

export default Teste5;
