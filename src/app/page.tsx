import Teste1 from "./components/teste1";
import Teste2 from "./components/teste2";
import Teste3 from "./components/teste3";
import Teste4 from "./components/teste4";
import Teste5 from "./components/teste5";

export default function Home() {
  return (
    <main className="space-y-10 p-10">
      <h1 className="text-3xl">Estágio - São Paulo (Prática)</h1>
      <div className="space-y-4">
        <Teste1 />
        <hr />
        <Teste2 />
        <hr />
        <Teste3 />
        <hr />
        <Teste4 />
        <hr />
        <Teste5 />
      </div>
    </main>
  );
}
