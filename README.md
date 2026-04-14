# Projeto To-Do List

Este repositório contém uma aplicação simples de lista de tarefas em HTML, CSS e JavaScript.

## Arquivos do projeto

- `index.html` - página principal da aplicação.
- `style.css` - estilos de layout, prioridade das tarefas e estados concluídos.
- `script.js` - lógica para criar e gerenciar tarefas na interface.

## O que já está implementado

- Adição de tarefas a partir de um campo de texto.
- Seleção de prioridade para cada tarefa: alta, média ou baixa.
- Inserção de data e hora de criação da tarefa.
- Botão para marcar tarefas como concluídas.
- Estilo visual diferenciado por prioridade e status de conclusão.

## Estado atual

- `style.css` e `script.js` estão implementados com as funcionalidades básicas.
- `index.html` ainda precisa ser preenchido com a estrutura HTML da aplicação.
- Não há persistência de dados salva no navegador ainda.

## Como completar o projeto

1. Criar o formulário em `index.html` com:
   - Um campo de entrada de texto para a tarefa.
   - Um seletor de prioridade (`high`, `medium`, `low`).
   - Um botão para adicionar a tarefa.
   - Uma lista (`<ul>` ou `<ol>`) para exibir as tarefas.
2. Referenciar `style.css` e `script.js` em `index.html`.
3. Abrir `index.html` no navegador para testar a aplicação.

## Sugestões de melhorias

1. Adicionar `localStorage` para salvar tarefas entre recargas de página.
2. Criar botões para editar e remover tarefas.
3. Implementar filtragem e ordenação por prioridade ou status concluído.
4. Adicionar validação de entrada para evitar tarefas vazias e mostrar mensagens de erro.
5. Tornar a interface responsiva para celular e tablet.
6. Ajustar os caminhos de `style.css` e `script.js` caso os arquivos sejam movidos para as pastas `css/` e `js/`.

## Tarefas pendentes (para preencher)

- [ ] Criar a estrutura HTML completa em `index.html` com formulário e lista de tarefas.
- [ ] Configurar `localStorage` em `script.js` para carregar e salvar tarefas.
- [ ] Adicionar funcionalidade de edição de tarefa.
- [ ] Adicionar funcionalidade de exclusão de tarefa.
- [ ] Implementar filtros por prioridade e por estado concluído.
- [ ] Melhorar a validação do formulário e as mensagens exibidas ao usuário.
- [ ] Ajustar o layout para ser responsivo e funcionar em dispositivos móveis.
