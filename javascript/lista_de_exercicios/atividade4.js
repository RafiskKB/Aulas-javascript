const usuario = [
    {nome:'Ana', ativo:true},
    {nome:'Beto',ativo:false},
    {nome:'Caio',ativo:true},
    {nome:'Duda',ativo:false}
];
 const produtos=[
    {nome:'teclado',preco:100},
    {nome:'mouse',preco:50}
 ];


   let produtosDescontados = produtos.map((produto) => {  
      produto.preco = produto.preco * 0.9
    })


    console.log(produtosDescontados);
    console.log(produtos);

    


