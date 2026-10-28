const elementosFake = [
{id: 1, tagName: 'DIV', style: { color: 'blue', display: 'flex'}, classList: ['container','active']},
{id: 2, tagName: 'H1', style: { color: 'red', display: 'block'}, classList: ['title']},
{id: 3, tagName: 'BUTTON', style: { color: 'white', display: 'inline-block'}, classList: ['btn', 'btn-primary']},
{id: 4, tagName: 'LI', style: { color: 'black', display: 'list-item'}, classList: ['item-lista','pending']},
{id: 5, tagName: 'LI', style: { color: 'black', display: 'list-item'}, classList: ['item-lista','done']},
{id: 6, tagName: 'SECTION', style: { color: 'gray', display: 'grid'}, classList: ['main-section']},
{id: 7, tagName: 'P', style: { color: 'green', display: 'block'}, classList: ['text-content']},
{id: 8, tagName: 'SPAN', style: { color: 'yellow', display: 'inline'}, classList: ['highlight']},
{id: 9, tagName: 'LI', style: { color: 'black', display: 'list-item'}, classList: ['item-lista','pending']},
{id: 10, tagName: 'FOOTER', style: { color: 'white', display: 'flex'}, classList: ['footer-area']},
];

for (elementos of elementosFake) {
    elementos.style.backgroundColor = '#851dda';
}
console.log(elementosFake);

elementosFake.forEach((elemento) => {
    for (const propriedade in elemento) {
        if (propriedade === 'id')  {
            const numeroFormatado = String(elemento.id).padStart(2, '0');
            elemento.id = `ID-${numeroFormatado}`;
        }
    }
})

elementosFake.forEach((elemento) => {
    if (elemento.classList.splice('pending')) {
        const index = elemento.classList.indexOf('pending');
        elemento.classList.includes(index, 1);

        elemento.classList.push('done');
        elemento.classList.color = 'green';
    }
});

for (const elemento of elementosFake) {
    if (elemento.tagName === 'DIV') {
     elemento.tagName = 'SCTION';
     elemento.classList.push('converted');   
    }
}

const relatorioDeEstilos = [];

elementosFake.forEach((elemento) => {
    relatorioDeEstilos.push({
        id: elemento.id,
        tagName: elemento.tagName,
        style: elemento.style
    });
});