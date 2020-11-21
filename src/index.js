const express = require('express');

const app = express();

app.use(express.json());

/**
 * Métodos HTTP
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de Parametro
  * 
  * Query Params: Para filtrar e paginar os dados.
  * Route Params: Identificar recursos quando atualizar ou deletar.
  * Request Body: O Conteudo na hora de criar ou editar um recurso.
  */

app.get('/projects', (request, response) => {
    const {title, owner} = request.query;

    console.log(title, owner);

    return response.json(['Projeto1', 'Projeto2']);
});

app.post('/projects', (request, response) => {
    const {title, owner} = request.body;

    console.log(title);
    console.log(owner);

    return response.json(['Projet1','Projet2','Projet3']);
});

app.put('/projects/:id', (request, response) => {
    const {id} = request.params;

    console.log(id);

    return response.json(['Projet1','Projet2','Projet3']);
});

app.delete('/projects/:id', (request, response) => {


    return response.json(['Projet1','Projet2','Projet3']);
});

app.listen(3333, () => {
    console.log('🚀 Back-end started✔✔✔');
});

