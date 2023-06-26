import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div
      className={`
        flex h-screen flex-col items-center justify-center 
        font-bold text-3xl text-black 
        bg-gradient-to-br from-blue-100 from-10% via-cyan-200 via-30% to-purple-300 to-90%
      `}
    >
          <Layout titulo="Cadastro Simples">
            <span>Conteúdo</span>
          </Layout>
    </div>
  );
}
