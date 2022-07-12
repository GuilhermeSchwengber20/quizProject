import {createStore} from "vuex";


export default createStore ({
    state: {
        quizHTML:{
            questions: [
                {
                  question: 'Qual elemento do html serve para linkar um arquivo de scripts JavaScript',
                  suggestions:[
                    {suggestion: '<script>', correct: true},
                    {suggestion: '<link>'},
                    {suggestion: '<meta>'},
                    {suggestion: '<javascript>'},
                  ]
                },
               {
                  question: 'Qual a sintaxe correta para refenciar um arquivo css',
                  suggestions:[
                    {suggestion: '<script href="app.css">'},
                    {suggestion: '<link rel="stylesheet" src="app.css"', correct: true},
                    {suggestion: '<meta src="app.css">'},
                    {suggestion: '<link href="app.css">'},
                  ]
                },       {
                  question: 'Oque é JavaScript',
                  suggestions:[
                    {suggestion: 'Um framework'},
                    {suggestion: 'Uma linguagem de programação para estilização'},
                    {suggestion: 'Uma linguagem de programação', correct: true},
                    {suggestion: 'Linguagem de marcação'},
                  ]
                },       {
                  question: 'O que é HTML',
                  suggestions:[
                    {suggestion: 'Uma linguagem de marcação', correct: true},
                    {suggestion: 'Uma linguagem de estilização'},
                    {suggestion: 'Uma linguagem de programação'},
                    {suggestion: 'Uma biblioteca'},
                  ]
                },       {
                  question: 'Para que serve CSS',
                  suggestions:[
                    {suggestion: 'Para tornar a pagina dinamica'},
                    {suggestion: 'Para marcar elementos de uma pagina'},
                    {suggestion: 'COlocar imagens no HTML'},
                    {suggestion: 'Para estilizar elementos e paginas HTML', correct: true},
                  ]
                },
              ],
        }
    }
});
