# Descrição do Projeto, Migração e Análise de Desempenho

## Descrição do Projeto

  O projeto consiste na construção de um **portfólio acadêmico interativo** para apresentação dos integrantes do grupo de trabalho **M2B**.

A aplicação reúne informações sobre cada participante, incluindo:

- Trajetória acadêmica  
- Áreas de interesse  
- Experiências recentes  
- Projetos desenvolvidos dentro e fora da universidade  

  O objetivo principal é fornecer um portfólio **visualmente organizado**, **intuitivo** e **fácil de navegar**, permitindo que qualquer visitante conheca o perfil de cada participante tranquilamente.

---

## Migração

  Inicialmente, o projeto foi construído utilizando **HTML, CSS e JavaScript puro**, com páginas separadas e sem um sistema de componentes reutilizáveis ou rotas dinâmicas.

Com a migração para **Next.js**, buscou-se:

- Modernizar a arquitetura do projeto  
- Aplicar boas práticas do ecossistema React  
- Melhorar a escalabilidade e organização do código  
- Facilitar manutenção e evolução futura  

### Estrutura com Next.js

  O Next.js oferece **roteamento baseado em pastas**, permitindo converter cada página do site para um arquivo React dentro da pasta `/app`. Elementos antes repetidos manualmente foram transformados em **componentes reutilizáveis**, reduzindo duplicação e tornando o desenvolvimento mais limpo e eficiente.

### Renderização Utilizada (SSG e CSR)

Foram utilizadas duas abordagens:

- **SSG (Static Site Generation)**  
  Aplicado em páginas estáticas, proporcionando carregamento rápido e excelente desempenho inicial.

- **CSR (Client-Side Rendering)**  
  Empregado em trechos que demandam interação e atualização dinâmica no navegador.

Essa combinação resultou em maior equilíbrio entre **performance**, **flexibilidade** e **experiência do usuário**.

### Estilização

A estilização migrou de CSS tradicional para **Tailwind CSS**, proporcionando:

- Visual padronizado  
- Alterações rápidas e fáceis  
- Layout consistente  
- Redução de código CSS redundante  

---

# Comparação das Métricas Antes e Depois da Migração

  A avaliação do Lighthouse nos ajudou a identificar o impacto da migração para Next.js tanto em pontos positivos quanto em novos desafios.

## Comparação Geral das Notas

| Categoria       | Antes (HTML puro) | Depois (Next.js – Página 2) | Diferença             |
|----------------|-------------------|------------------------------|-----------------------|
| Performance    | 82                | 79                           | Queda leve            |
| Accessibility  | 91                | 100                          | Grande melhora        |
| Best Practices | 100               | 96                           | Queda pequena         |
| SEO            | 90                | 90                           | Estável               |

  Mesmo com o pequeno impacto na performance, houve **melhora expressiva em acessibilidade**, reflexo direto da estrutura mais semântica proporcionada pelo Next.js. O SEO manteve-se estável, e a leve queda em Best Practices está relacionada ao maior uso de scripts.

---

## Comparação das Métricas de Carregamento

| Métrica                  | Antes | Depois | Diferença  |
|--------------------------|-------|--------|------------|
| First Contentful Paint   | 2.6 s | 2.3 s  | Melhorou   |
| Speed Index              | 2.6 s | 2.3 s  | Melhorou   |
| Total Blocking Time      | 80 ms | 270 ms | Piorou     |
| Largest Contentful Paint | 4.1 s | 4.1 s  | Igual      |
| Cumulative Layout Shift  | 0     | 0      | Igual      |

  Com Next.js, o FCP e o Speed Index **melhoraram**, evidenciando que o framework entrega conteúdo visível mais cedo.  
O LCP permaneceu estável, mostrando que o elemento principal da interface não foi prejudicado.  
O TBT piorou significativamente — consequência direta da etapa de hidratação do React e do maior volume de JavaScript.

---

# Insights e Diagnósticos Observados

### Antes da Migração

Os principais problemas eram:

- Requisições bloqueadoras  
- Falta de minificação de scripts  
- Longas tarefas JS (menos frequentes que após a migração)

### Depois da Migração

Foram identificados fatores comuns de aplicações React:

- **658 KB de JavaScript não utilizado**  
- **2.4 s de tempo de execução JS**  
- **3.9 s de carga na main-thread**  
- **40 MB processados na paginação**  
- **10 long tasks**  
- Foram detectadas sugestões importantes sobre otimização de imagens e payload  

Apesar disso, houve ganho estrutural e melhora significativa na acessibilidade.

---

# Influência das Estratégias de Renderização nos Resultados
---

## Impacto Positivo do CSR

Mesmo com CSR, o Next.js envia um HTML leve inicialmente, o que melhorou:

- **First Contentful Paint**
- **Speed Index**

A acessibilidade também foi beneficiada pela estrutura mais organizada e semântica do Next.js.

## Impacto Negativo do CSR

O CSR exige que o navegador:

1. Baixe o bundle JavaScript  
2. Execute o código  
3. Hidrate os componentes  

Isso gerou a:

- Aumento do Total Blocking Time  
- Crescimento das long tasks  
- Sobrecarga da main-thread  
- Bundle JS pesado  

O uso de imagens grandes ampliou esses efeitos.

## Métricas Estáveis

- **LCP igual**
- **CLS igual a 0**

Ou seja, o conteúdo principal e a estabilidade visual não foram afetados pela migração.

---

# Conclusão

A migração para Next.js trouxe benefícios como:

- Código mais organizado e modular  
- Acessibilidade máxima (100)  
- Estrutura moderna com suporte a SSG e CSR  
- Carregamento inicial mais rápido  

Por outro lado, aumentou a quantidade de JavaScript enviado ao cliente, impactando o Total Blocking Time e o trabalho da main-thread, mas é um comportamento comum em aplicações baseadas em React.

Para melhorar ainda mais o desempenho, para futuros passos vamos:

- Otimização de imagens  
- Compressão de payloads  
- Remoção de JavaScript não utilizado  
- Ampliação do uso de **SSG** em páginas estáticas  
- Lazy loading e code-splitting  
- Redução do bundle inicial  

A migração, de forma geral, foi **positiva**, elevando a qualidade de estrutura, a acessibilidade e a escalabilidade do projeto.

