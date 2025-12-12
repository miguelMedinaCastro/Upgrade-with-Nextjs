"use client";
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {

  const [selected, setSelected] = useState <"miguel" | "milena" | "bruno" | null > (null);
  const [show, setShow] = useState(false);

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

          
        <div className="mt-8 relative inline-block text-left">
          
          <button onClick={() => setShow(!show)} className="bg-red-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-red-600 transition-all">
            Conheça os integrantes do grupo
          </button>
          
          { show && (
            <div className=" absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <a href="#" onClick={() => { setSelected("miguel"); setShow(false) }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Miguel Medina </a>
              <a href="#" onClick={() => { setSelected("milena"); setShow(false) }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Milena Bueno </a>
              <a href="#" onClick={() => { setSelected("bruno"); setShow(false) }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Bruno dos Santos </a>
            </div>
          )}
        </div>
      </section>

      <div className="h-1 bg-linear-to-r from-transparent via-orange-300 to-transparent my-10"></div>

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
        projetos
}: {
  foto: string;
  objetivo: string;
  formacao: string;
  projetos: string;
}) {
  return (
    <div className="space-y-6">
      <section className="text-center">
        <div className="inline-block p-1 bg-linear-to-r from-blue-500 to-purple-500 shadow-lg">
          <Image src={foto} width={200} height={200} alt="foto" className="rounded-2xl object-cover w-[200px] h-[200px]" />
        </div>
      </section>

      <Bloco titulo="Objetivo" texto={objetivo} />
      <Bloco titulo="formação Acadêmica" texto={formacao} />
      <Bloco titulo="Projetos" texto={projetos}/>
    </div>
  )
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
