"use client";
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {

  const [selected, setSelected] = useState<"miguel" | "milena" | "bruno" | null>(null);


  return (
    <div className="relative min-h-screen py-10">
    <main className="relative container mx-auto max-w-2xl py-8 px-4 z-10 space-y-8">
        <section className="text-center">
            <div className="mb-4">
            <a href="/" className="fixed top-4 left-4 z-50">
              <button className="bg-gray-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-600 transition-all">
                Voltar para Home
              </button>
            </a>
          </div>
          <h1 className="flex justify-center items-center gap-4 text-5xl md:text-6xl font-extrabold text-gray-900">
            <a href="./portfolio">
              <span>M2B</span>
            </a>
          </h1>

          
   <div className="mt-8 space-y-4">
  <p className="text-lg text-white/80 text-center">
    Selecione um integrante para ver o perfil:
  </p>

  <div className="flex flex-wrap justify-center gap-4">

    {/* Miguel */}
    <button
      onClick={() => setSelected("miguel")}
      className={`py-2 px-6 rounded-full shadow-md font-semibold transition-all duration-300
        ${
          selected === "miguel"
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-white text-gray-800 border border-gray-300 hover:bg-red-500 hover:text-white"
        }`}
    >
      Miguel Medina
    </button>

    {/* Milena */}
    <button
      onClick={() => setSelected("milena")}
      className={`py-2 px-6 rounded-full shadow-md font-semibold transition-all duration-300
        ${
          selected === "milena"
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-white text-gray-800 border border-gray-300 hover:bg-red-500 hover:text-white"
        }`}
    >
      Milena Bueno
    </button>

    {/* Bruno */}
    <button
      onClick={() => setSelected("bruno")}
      className={`py-2 px-6 rounded-full shadow-md font-semibold transition-all duration-300
        ${
          selected === "bruno"
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-white text-gray-800 border border-gray-300 hover:bg-red-500 hover:text-white"
        }`}
    >
      Bruno dos Santos
    </button>

  </div>
</div>

      </section>

      {selected === "miguel" && (
        <Perfil 
          foto="/ft_miguel_medina.jpeg"
          objetivo={`Sou desenvolvedor Back-End, tenho aprendido bastante com projetos acadêmicos e pessoais. Além disso, atualmente estou estudando conceitos de baixo nível, como assembly ARM64/VHDL juntamente atuando em conjunto na manutenção do cluster`}
          formacao={`FURG - Sistemas de Informação\n Previsão de conclusão: dez/2026\n 6º semestre\n`}
          projetos={`
               • Bolsa de Pesquisa (Cluster Tuco-Tuco) (Mai/25 - Atual) - 
                 Atuação na manutenção e desenvolvimento de um ambiente em cluster, com foco em administração, configuração e suporte a sistemas distribuídos. 
               • Bolsa de Pesquisa BovDB (Set/24 - Fev/25) - 
                 Utilização de algoritmos para otimização da extração de dados e análise de correlações no banco
                 BovDB, visando prever momentos adequados para compra e venda de ações. 
               • Chat (Python) - 
                  Aplicação para praticar conceitos de Redes de Computadores, incluindo comunicação clienteservidor e troca de mensagens em tempo real. 
               • Sistema de Arquivos (C) - 
                  Construído e implementado em um ambiente FAT. 
               • Monitor de Sistema Gráfico (C) -  
                  Inspirado no MSI Afterburner, aplicação para monitoramento de CPU, memória e disco em tempo real. 
               • Simulador de Cache - 
                  Projeto de estudo de arquitetura de computadores.
            `}
        github="https://github.com/miguelMedinaCastro"
        linkedin="https://www.linkedin.com/in/miguel-medina-1a0b641a0/"
          />
      )}

      {selected === "milena" && (
        <Perfil
            foto="/ft_milena_bueno.jpeg"
            objetivo={`Olá! Sou Milena Bueno e tenho interesse nas áreas de cibersegurança e redes de computadores. Atualmente, estou em processo de desenvolvimento acadêmico e prático nessas áreas, buscando consolidar uma base sólida por meio de estudos e certificações voltadas à solução de desafios reais no campo da tecnologia.`}
            formacao={`FURG - Sistemas de Informação\n Previsão de conclusão: dez/2026\n 6º semestre\n`}
            projetos={`
               • Bolsa de Pesquisa LACNIC (Agos/25 - Atual) -
                Utilização de algoritmos para extração de dados e análise de dados relacionados ao roteamento BGP, visando compreender o comportamento da internet e suas instabilidades. 
                • Bolsa de IC - Caracterização do uso de técnicas de engenharia de tráfego - (Jun/2025 - Agosto/2025)
                    Análise de tabelas de roteamento BGP, com foco compreender as técnicas de engenharia de tráfego e estabilidade da internet.
            `}
            github="https://github.com/milenarbueno"
            linkedin="https://www.linkedin.com/in/milena-bueno-yar1ora0/"
          />
      )}

      {selected === "bruno" && (
        <Perfil
            foto="/ft_bruno_dos_santos.png"
            objetivo={`Sou desenvolvedor Back-End com foco em DevOps, atualmente bolsista no 
                     cluster Tuco-Tuco 
                    atuando na atualização e automação dos sistemas Linux utilizados nele.`}
            formacao={`FURG - Sistemas de Informação\n Previsão de conclusão: dez/2027\n 6º semestre\n`}
            projetos={`
                • Simulador de Sistema de Arquivos (C) — implementação de operações de leitura, escrita e alocação em um ambiente FAT.
                      • Controlador de Uso de CPU e Memória — inspirado no SLURM, para monitorar e gerenciar recursos do sistema.
                      • Chat Online (Python) — aplicação cliente-servidor para troca de mensagens em tempo real.
                      • Automação de Cluster Linux — scripts para atualização e manutenção de nós do cluster Tuco-Tuco.
            `}
            github="https://github.com/bixbite2"
            linkedin= "https://github.com/miguelMedinaCastro"
          />
      )}

      
    </main>
    </div>
  );
}

function Perfil({
        foto,
        objetivo,
        formacao,
        projetos,
        github,
        linkedin
}: {
  foto: string;
  objetivo: string;
  formacao: string;
  projetos: string;
  github: string;
  linkedin: string;
}) {
  return (
    <div className="space-y-6">
      <section className="text-center">
        <div className="inline-block p-1 bg-linear-to-r from-blue-500 to-purple-500 shadow-lg">
          <Image src={foto} width={200} height={200} alt="foto" className="rounded-2xl object-cover w-[200px] h-[200px]" />
        </div>
      </section>

      <Bloco titulo="Objetivo" texto={objetivo} />
      <Bloco titulo="Formação Acadêmica" texto={formacao} />
      <Bloco titulo="Projetos" texto={projetos}/>
    <div className="flex justify-center gap-6 mt-6">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-900 rounded-full hover:scale-110 transition"
        >
          <Image src="/giticon.png" alt="GitHub" width={38} height={38} />
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-900 rounded-full hover:scale-110 transition"
        >
          <Image src="/link2.png" alt="LinkedIn" width={38} height={8} />
        </a>
      </div>
    </div>
  );
}

function Bloco({ titulo, texto }: {titulo: string; texto: string}) {
  return (
    <section className="bg-linear-to-br from-white to-gray-50 border border-gray-300 rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold  mb-3">
          {titulo}
        </h3>
        <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
      </div>
      <p className="text-base whitespace-pre-line leading-relaxed">
        {texto}
      </p>
    </section>
  )  
}
