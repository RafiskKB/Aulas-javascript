const elementosFake = [
{
tagName:'DIV',
style:{ color:'blue', display:'flex'},
classList:['container','active']
},
{
tagName:'H1',
style:{ color:'red', display:'block'},
classList: ['title']
},
{
tagName:'BUTTON',
style:{ color:'white', display:'inline-block'},
classList: ['btn', 'btn-primary']
}
];

for (const elemento of elementosFake) {
  console.log(`Tag encontrada: ${elemento.tagName}`);
}

for (const elemento of elementosFake) {
  if (elemento.style.color === 'blue') {
    console.log(`O elemento ${elemento.tagName} é azul`);
  }
}

elementosFake.forEach((elemento) => {
console.log(`tag: ${elemento.tagName}`);
});

elementosFake.forEach((elemento) => {
console.log(`tag: ${elemento.tagName} Quantidade de classes: ${elemento.classList.length}`);
  });

  elementosFake.forEach((elemento) => {
    const classes = elemento.classList.join(',');
    console.log(`tag: ${elemento.tagName} Quantidade de classes: ${elemento.classList.length} classes: ${classes}`);
  });