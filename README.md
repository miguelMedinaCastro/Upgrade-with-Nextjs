# Trabalho Final - Sistemas para Internet II 

## Introdução

Para avaliar os impactos da migração do portfólio acadêmico de **HTML/CSS/JavaScript puro** para **Next.js**, foram comparadas as métricas do Lighthouse antes e depois da mudança.  
Os resultados mostram tanto melhorias estruturais quanto alguns desafios introduzidos pelo uso de React e renderização no cliente.

---

## Comparação Geral das Notas

| Categoria       | Antes (HTML puro) | Depois (Next.js – Página 2) | Diferença         |
|----------------|-------------------|------------------------------|-------------------|
| Performance    | 82                | 79                           | Queda leve        |
| Accessibility  | 91                | 100                          | Melhora significativa |
| Best Practices | 100               | 96                           | Queda leve        |
| SEO            | 90                | 90                           | Estável           |

A performance caiu três pontos - esperado pela complexidade extra do React.  
A acessibilidade atingiu **100**, evidenciando como a estrutura moderna facilita boas práticas semânticas.  
SEO permaneceu estável e as Best Practices tiveram queda pequena devido ao aumento no uso de scripts.

---

## Comparação das Métricas de Carregamento

| Métrica                 | Antes | Depois | Diferença  |
|-------------------------|-------|--------|------------|
| First Contentful Paint  | 2.6 s | 2.3 s  | Melhorou   |
| Speed Index             | 2.6 s | 2.3 s  | Melhorou   |
| Total Blocking Time     | 80 ms | 270 ms | Piorou     |
| Largest Contentful Paint| 4.1 s | 4.1 s  | Igual      |
| Cumulative Layout Shift | 0     | 0      | Igual      |

O FCP e o Speed Index melhoraram, mostrando que o Next.js entrega conteúdo visível rapidamente.  
O LCP permaneceu idêntico, indicando que o principal elemento visual não sofreu impacto.  
O TBT aumentou bastante — consequência natural da hidratação do React e do maior volume de JavaScript.

---

## Insights e Diagnósticos Observados

### Antes da migração
Os principais problemas eram:

- Requisições bloqueadoras  
- Falta de minificação de scripts  
- Longas tarefas JavaScript (mas em menor quantidade)

### Depois da migração
Novos fatores apareceram, típicos de aplicações React:

- **Volume elevado de JavaScript não utilizado (658 KB)**
- **Tempo de execução JS maior (2.4 s)**
- **Main-thread ocupada por 3.9 s**
- **Paginação extremamente pesada (40 MB no total)**
- **10 long tasks registradas**
- **Sugestões de otimização de imagens e payload**

Mesmo com esses pontos, a estrutura geral ficou mais organizada, e isso se refletiu nas melhorias em acessibilidade e semântica.

---

# Influência das Escolhas de Renderização nos Resultados

O comportamento atual da aplicação indica grande dependência de **Client-Side Rendering (CSR)**, o que afeta diretamente as métricas do Lighthouse.  
Entretanto, algumas páginas foram renderizadas com **SSG (Static Site Generation)**, ajudando no desempenho inicial.

## Impacto Positivo do CSR
Mesmo com CSR, o Next.js envia um HTML inicial leve.  
Isso favorece:

- **FCP melhor**
- **Speed Index melhor**
- Melhor estrutura semântica (acessibilidade 100)

A arquitetura do Next.js também facilita boas práticas que elevaram o score total.

## Impacto Negativo do CSR

O CSR exige que o navegador:

1. Baixe o bundle JavaScript  
2. Execute o código  
3. Hidrate os componentes  

Isso aumentou:

- Total Blocking Time (TBT)
- Long tasks
- Trabalho da main-thread
- Volume de JavaScript carregado

O uso de imagens grandes intensifica ainda mais esses problemas.

## Métricas que se mantiveram estáveis

- **LCP igual**: elemento principal intacto  
- **CLS zero**: layout estável, sem mudanças bruscas de posição  

---

# Conclusão

A migração para Next.js trouxe:

- **Melhor organização do código**
- **Acessibilidade máxima (100)**
- **Entrega inicial de conteúdo mais rápida (FCP/Speed Index melhores)**
- **Estrutura moderna, usando SSG e CSR conforme a necessidade**

Por outro lado, a aplicação introduziu mais JavaScript, o que impactou:

- Total Blocking Time  
- Trabalho da main-thread  
- Long tasks  
- Bundle pesado  

Esses efeitos são comuns em migrações para frameworks modernos e podem ser reduzidos aplicando:

- Otimização e compressão de imagens  
- Redução de payload  
- Remoção de JavaScript não utilizado  
- Uso ampliado de **SSG** para páginas que não dependem de interatividade imediata  
- Divisão de bundles (code-splitting)  
- Lazy loading inteligente  

Assim, a migração foi positiva do ponto de vista estrutural, profissional e de acessibilidade, restando apenas ajustes de otimização para alcançar desempenho ideal.

