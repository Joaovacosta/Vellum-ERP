<h1>Documentação Individual — Painel Administrativo ERP </h1>

<hr>
- Nome do Projeto: Vellum ERP

- Segmento Escolhido: E-commerce

- Nome da Equipe: Mosqueteiros

- Nome dos Alunos:
 
 -Guilherme Ballestrim Sobreira N°06
 -Guilherme  Wallace Carturan Falcão N°08
 -Joao Vitor Alves da Costa N°11
 -John Wayne N°12
 -Lucas Silva Santos Costa N°17
 -Miguel Rosa Arantes N°21
 <hr>
 Introdução: Painel de Gestão para Loja de Moda Social de Luxo 

Hoje em dia, muitas lojas de roupas e ateliês de alfaiataria ainda sofrem com a falta de organização. É muito comum encontrar gestores que dependem de blocos de anotações para ajustes de peças ou várias planilhas de Excel que não conversam entre si para controlar o estoque.
Isso causa problemas sérios, como:
• Perda de dinheiro: Dificuldade em controlar o estoque de peças de alto valor agregado e fluxo de caixa.
• Perda de tempo: Horas gastas procurando o status de um pedido ou ordem de costura/alfaiataria.
• Desorganização: Não saber ao certo quais clientes VIPs estão ativos, quais peças precisam de reposição ou o status das entregas.
<hr>
• Introdução e Objetivo do Projeto

Este projeto apresenta o desenvolvimento do Painel Administrativo Web focado no setor de moda masculina de alto padrão, a Vellum. O objetivo central é modernizar a gestão da loja, substituindo processos manuais por um sistema digital centralizado, seguro e sofisticado.
Principais Metas:
• Centralização: Consolidar dados de clientes, pedidos, estoque e ajustes em um único lugar.
• Gestão Financeira: Controle ágil de faturamento diário, mensal e ticket médio.
• Atendimento VIP: Acesso imediato ao histórico de compras e preferências de medidas do cliente.
• Eficiência: Reduzir a burocracia logística para focar na experiência premium de compra do cliente.
<hr>
• Regra de Negócio - Funcionamento do Sistema 

O sistema foi concebido para ser a central de inteligência da butique. Ele integra as operações dos vendedores, da alfaiataria (ajustes) e da gerência em um fluxo contínuo. Desde o cadastro do cliente até o acompanhamento de uma entrega, todas as interações são registradas digitalmente, garantindo que a gestão tenha controle total sobre a operação de luxo.
<hr>
• Processos Principais 

A operação do sistema é dividida em três pilares fundamentais:

Gestão de Vendas e Clientes: Registro de novos clientes, histórico de compras e preferências. O sistema monitora a recorrência para facilitar o relacionamento VIP.

Controle de Estoque e Ajustes: Substituição das antigas ordens de serviço de papel. Os consultores podem atualizar o status de peças (Ex: "Pronto para Retirada" ou "Em Ajuste") em tempo real, evitando falhas na entrega de roupas sob medida.

Controle Administrativo e Financeiro: Monitoramento das vendas do dia, relatórios de faturamento anual e identificação de peças mais e menos vendidas para guiar as próximas coleções.
<hr>
• Usuários Envolvidos 

O painel oferece diferentes níveis de permissão para garantir a segurança dos dados da loja:

Administrador (Gestor):  Acesso total a relatórios financeiros, configurações do sistema, cadastro de equipe e visão global do estoque.

Consultor de Vendas:  Responsável pelo atendimento, cadastro de clientes, registro de vendas e verificação rápida de disponibilidade de peças.

Equipe de Alfaiataria/Logística:  Focada na atualização do status das peças que necessitam de ajustes e liberação para entrega.
<hr>
• Módulos do Sistema 

Nesta seção, detalhamos os módulos que compõem a interface do painel administrativo e a justificativa estratégica de cada um.

• Dashboard Principal 

Descrição: Painel visual com métricas vitais, como vendas de hoje, faturamento diário, novos clientes e total de produtos em estoque.

Justificativa: Centralizar os KPIs (Indicadores-Chave) para que o gestor tome decisões rápidas logo ao abrir o sistema.

• Gestão de Clientes e Pedidos 

Descrição: Listagem com dados dos compradores e o status exato de cada pedido (Entregue, Separado, Em Separação, Ajustes).

Justificativa: Garantir excelência logística e evitar atrasos na entrega de peças premium.

• Controle de Estoque 

Descrição: Módulo técnico para monitorar a quantidade de ternos, camisas, gravatas e sapatos, filtrados por tamanho e cor.

Justificativa: Evitar rupturas de estoque de produtos exclusivos e automatizar alertas de baixo estoque.

Gestão Financeira e Relatórios 

Descrição: Gráficos de vendas anuais, top produtos (mais e menos vendidos) e receitas detalhadas.

Justificativa: Orientar a saúde financeira da Vellum e guiar o time de compras/marketing sobre quais coleções estão performando melhor.

• Formulários 

Os formulários são a porta de entrada de dados do sistema. Desenvolvemos estruturas principais como: Cadastro de Cliente, Lançamento de Venda, Ordem de Ajuste e Configurações da Loja.
No cadastro de clientes, exigimos dados básicos (Nome, E-mail) para criar um perfil rápido. Na Ordem de Ajuste, incluímos campos técnicos (medidas, tipo de bainha, pence), garantindo que o alfaiate tenha dados precisos, eliminando os papéis perdidos pela loja. Por fim, o registro de vendas processa o valor e integra direto no painel de faturamento.

• Organização do CSS 

A organização do CSS foi pensada para manutenção a longo prazo. Dividimos o código: base.css (resets e fontes clássicas/serifadas), layout.css (estrutura da sidebar azul marinho e painéis principais), components.css (botões e cards de produtos) e responsive.css (adaptações para mobile).
Isso permite alterar o estilo de um card de produto sem quebrar o header da página.

• Metodologia BEM 

Aplicamos a metodologia BEM (Block, Element, Modifier). Exemplo: usamos .card-pedido para o bloco principal, .card-pedido__cliente para um elemento interno e .card-pedido--ajuste para o modificador que destaca visualmente que aquela peça está na alfaiataria. Isso mantém o código limpo e padronizado.

• Variáveis CSS 

No :root, definimos tokens para as cores da marca Vellum (o azul marinho profundo, o branco e os tons de cinza), além da tipografia elegante.
O benefício é o controle centralizado. Se a Vellum fizer um rebranding amanhã e o tom de azul mudar, basta alterar uma linha de código e a interface inteira se atualiza com consistência.

• Responsividade

Adotamos a estratégia Mobile-First. Utilizamos Media Queries para garantir que, em telas de celular, a barra lateral (sidebar) vire um menu hambúrguer e as extensas tabelas de estoque e pedidos se transformem em cards verticais. Isso garante que o sistema seja útil tanto no escritório do gerente quanto na mão do vendedor no meio do salão da loja.

• UX e UI 

Enquanto a UI (Interface) focou na estética premium — cores coloridas e tipografia elegante que remetem ao mercado de luxo —, a UX (Experiência) focou na agilidade. O objetivo foi garantir que um vendedor conclua uma venda ou verifique um estoque rapidamente, com botões claros e leitura fácil, mantendo o foco total na atenção ao cliente presencial.



