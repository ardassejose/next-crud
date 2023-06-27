import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {
    const clientes = [
        new Cliente('Anália', 51, '1'),
        new Cliente('Caio', 22, '2'),
        new Cliente('Thor', 6, '3'),
        new Cliente('Raphael', 54, '4'),
        new Cliente('Víctor', 23, '5'),
        new Cliente('Mariana', 19, '6'),
        new Cliente('André', 17, '7'),
        new Cliente('Walter', 49, '8'),
        new Cliente('Pedro', 22, '9'),
        new Cliente('Arthur', 24, '10')
    ]

    function clienteSelecionado(cliente: Cliente) {
        console.log(cliente.nome)
    }
    
    return (
    <div
      className={`
        flex h-screen flex-col items-center justify-center 
        font-bold text-3xl text-black 
        bg-gradient-to-br from-blue-100 from-10% via-cyan-200 via-30% to-purple-300 to-90%
      `}
    >
          <Layout titulo="Cadastro Simples">
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}></Tabela>
          </Layout>
    </div>
  );
}
