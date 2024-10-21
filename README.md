# Funcoes-Param-Heroi

Este código é a continuação do Desafio de projeto Nível e fase do Herói, mais simplificado usando funções e parâmetros [^1].

![Heroina-Nalva](https://github.com/user-attachments/assets/18a74200-09a2-4d2f-b658-21473fc07669)

# Construção das Funções:

1. Função para Classificar o Herói:
   - Essa função irá receber o nome do herói e a XP como parâmetros.
   - Verificamos o nível e a fase com base na XP usando condições `if`.
   - Dependendo do nível alcançado, exibimos uma imagem e uma mensagem personalizada.

2. Função para Atualizar Imagem e Mensagem:
   - Recebe o nome do herói, a fase e o nível como parâmetros.
   - Atualiza a imagem e a mensagem no HTML de acordo com o nível e a fase.

3. Função para Exibir Mensagem de Erro (caso não alcance nenhum nível):
   - Exibe uma imagem e uma mensagem de erro, caso o XP não se enquadre em nenhuma fase.

# Explicação do Código:

1. Função `classificarHeroi()`:
   - Lê os valores do nome e XP inseridos pelo usuário.
   - Compara o valor de XP com os critérios estabelecidos usando `if` e `else if` para definir o nível e a fase.
   - Chama a função `atualizarInterface()` ou `mostrarErro()` para exibir a mensagem e imagem correta.

2. Função `atualizarInterface()`:
   - Recebe o nome, nível, fase, e o caminho da imagem como parâmetros.
   - Atualiza o texto da mensagem e a imagem de acordo com o nível e a fase alcançados.

3. Função `mostrarErro()`:
   - Exibe uma mensagem e uma imagem de erro, caso o XP não se encaixe em nenhuma das fases.

## Fluxo para o Usuário:
- O usuário insere o nome e o XP.
- O sistema classifica o herói ou vilão em um dos três níveis (Ferro, Ouro, Radiante, Imortal) com uma imagem correspondente.
- Se o XP não corresponder a nenhum critério, uma mensagem e imagem de erro serão exibidas.

[^1]: Bootcamp GFT Start #6, professor Expert Felipe Aguiar (DIO).
