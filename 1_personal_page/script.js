const htmlTagsDictionary = {
    // Estrutura Básica
    'html': 'Define o início de um documento HTML.',
    'head': 'Contém informações de metadados do documento.',
    'title': 'Define o título do documento exibido na aba ou barra de título do navegador.',
    'body': 'Contém o conteúdo visível do documento.',

    // Texto
    'p': 'Define um parágrafo de texto.',
    'h1': 'Define títulos de diferentes níveis.',
    'h2': 'Define títulos de diferentes níveis.',
    'h3': 'Define títulos de diferentes níveis.',
    'h4': 'Define títulos de diferentes níveis.',
    'h5': 'Define títulos de diferentes níveis.',
    'h6': 'Define títulos de diferentes níveis.',
    'a': 'Cria um link para outra página ou recurso.',
    'strong': 'Define um texto importante com ênfase forte.',
    'em': 'Define um texto enfatizado, normalmente exibido em itálico.',
    'span': 'Define uma pequena seção de texto.',

    // Listas
    'ul': 'Cria uma lista não ordenada.',
    'ol': 'Cria uma lista ordenada.',
    'li': 'Define um item de lista em listas ordenadas ou não ordenadas.',

    // Definições
    'dl': 'Cria uma lista de definição.',
    'dt': 'Define um termo ou item na lista de definição.',
    'dd': 'Define a descrição de um termo na lista de definição.',

    // Imagens e Mídia
    'img': 'Exibe uma imagem.',
    'audio': 'Incorpora um arquivo de áudio.',
    'video': 'Incorpora um arquivo de vídeo.',

    // Formulários e Entradas
    'form': 'Cria um formulário para entrada de dados.',
    'input': 'Cria um campo de entrada de dados.',
    'textarea': 'Cria uma área de texto multilinha.',
    'button': 'Cria um botão clicável.',
    'select': 'Cria uma lista suspensa de opções.',
    'option': 'Define uma opção em uma lista suspensa.',

    // Tabelas
    'table': 'Cria uma tabela.',
    'tr': 'Define uma linha em uma tabela.',
    'td': 'Define uma célula de dados em uma tabela.',
    'th': 'Define uma célula de cabeçalho em uma tabela.',

    // Componentes Estruturais
    'header': 'Define o cabeçalho da página ou seção.',
    'nav': 'Define um bloco de navegação.',
    'section': 'Define uma seção dentro do documento.',
    'article': 'Define um conteúdo independente, como um post de blog.',
    'aside': 'Define um conteúdo relacionado, geralmente exibido em barras laterais.',
    'footer': 'Define o rodapé da página ou seção.',
    'div': 'Define uma divisão ou seção genérica.',
    'main': 'Define o conteúdo principal da página.',

    // Mídia Incorporada
    'iframe': 'Incorpora um outro documento dentro da página.',
    'canvas': 'Cria uma área para gráficos desenháveis com JavaScript.',
    'svg': 'Cria gráficos vetoriais escaláveis.',

    // Recursos Externos
    'link': 'Define a ligação entre um documento e um recurso externo, como uma folha de estilos.',
    'script': 'Define um script embutido ou um link para um script externo.',
    'meta': 'Fornece metadados sobre o documento, como descrições e palavras-chave.',
};

function getTags() {
    tags = document.querySelectorAll("*");

    formattedTags = [];

    tags.forEach(tag => {
        tag = tag.localName;
        if (tag.includes(".")) {
            tag = tag.split(".")[0]
        }
        if (tag.includes("#")) {
            tag = tag.split("#")[0]
        }

        if (!formattedTags.includes(tag)) {
            formattedTags.push(tag)
        }
    });

    console.log(formattedTags);
    return formattedTags;
}

function renderTags(tags) {
    let listHTML = "<ul>";
    for (const tag of tags) {
        listHTML += `<li class="tagItem"><h3>${tag}:</h3><p>${htmlTagsDictionary[tag]}</p></li>`;
    }
    listHTML += "</ul>";

    return listHTML;
}
