# Sistema de Prioridade de Acesso de Veículos de Emergência

## 📚 Descrição:

Este projeto consiste na implementação de um circuito combinacional capaz de detectar a presença de veículos de emergência (ambulância, polícia e bombeiros) e decidir pela abertura automática de uma cancela.
A cancela será liberada sempre que pelo menos dois desses veículos forem detectados simultaneamente.

O projeto foi desenvolvido para atender aos requisitos da disciplina de Circuitos Lógicos Combinacionais.

🛠️ Componentes do Projeto
Entradas:

A → Ambulância detectada (0 = Não, 1 = Sim)

B → Polícia detectada (0 = Não, 1 = Sim)

C → Bombeiros detectados (0 = Não, 1 = Sim)

Saída:

S → Liberar a cancela (0 = Não, 1 = Sim)

🧠 Lógica do Sistema
O sistema libera a cancela (S = 1) se pelo menos dois dos três veículos forem detectados.

Expressão booleana inicial (forma canônica SOP):

𝑆
=
𝐴
′
𝐵
𝐶
+
𝐴
𝐵
′
𝐶
+
𝐴
𝐵
𝐶
′
+
𝐴
𝐵
𝐶
S=A 
′
 BC+AB 
′
 C+ABC 
′
 +ABC
Após a simplificação:

𝑆
=
𝐵
𝐶
+
𝐴
(
𝐵
⊕
𝐶
)
S=BC+A(B⊕C)
📈 Etapas do Projeto
Definição do problema e modelagem das entradas e saída.

Tabela-verdade completa do sistema.

Implementação inicial do circuito (SOP) no Logisim.

Simplificação da expressão booleana usando:

Teoremas booleanos

Mapa de Karnaugh

Construção do circuito otimizado baseado na expressão simplificada.

Validação:

Comparação das saídas do circuito original e do circuito otimizado.

🛠️ Ferramentas Utilizadas
Logisim — para simulação do circuito.

Microsoft Word — para criação da documentação.

Editor de Imagens — para diagramação dos circuitos.

🧪 Validação Final
A saída dos dois circuitos (original e otimizado) foi comparada e validada.

Ambos os circuitos respondem corretamente de acordo com a tabela-verdade.

👥 Equipe

Abelardo Andrade

Jullyana Melo

Guilherme Lage



📅 Entrega
Data limite de envio: 13 de Junho

Professoras Responsáveis:
Bruno Wisintainer — bruno.wisintainer@ulife.com.br
Vanessa Santos — vsantos2@ulife.com.br

🚀 Observação Final
Este projeto é totalmente baseado em circuitos combinacionais e atende aos requisitos acadêmicos, com foco em clareza, funcionalidade e aplicação prática.
