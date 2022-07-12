<template>
  <div class="container-app">
    <div class="container-quiz" v-if="mostrarQuiz == true">
      <div class="quiz-header">
        <h1> Quiz App</h1>
        <label @click="fecharModal"><i class="fa-solid fa-xmark close"></i></label>
      </div>  
      <div class="main-quiz" v-for="(element, index) in this.$store.state.quizHTML" :key="index" v-show="quiz">
        <div class="box-questions">
          <h2>Question {{b}}/{{questions.length}}</h2>
          <label>{{element.question}}</label>
        </div>
        <div class="box-suggestions">
            <ul>
              <li v-for="(item, index) in element.suggestions" :key="index" :class="select ? check(item) : ''" @click="selectResponse(item)">{{item.suggestion}}</li>
            </ul>
        </div>
      </div>
      <div class="box-score" v-if="score_show">
        <h2>Sua pontuação é</h2>
        <label>{{score}} / {{questions.length}}</label>
        <div class="btn-restart">
          <button @click="restartQuiz">Restart <i class="fas fa-sync-alt"></i> </button>
        </div>
      </div>
      <div class="quiz-footer">
        <div class="box-button">
          <button @click="skipQuestion">Skip</button>
          <button @click="nextQuestion">Next</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      mostrarQuiz: true,
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
      a:0,
      b:1,
      select: false,
      score: 0,
      quiz: true,
      score_show: false,
    }
  },
  computed:{
    listaQuizHTML(){
      return this.$store.state.quizHTML;
    }
  },
  methods:{

    selectResponse(e){
      this.select = true;
      if(e.correct){
        this.score ++;
      }

    },
    check(status){
      if(status.correct){
        return 'correct';
      }else{
        return 'incorrect';
      }
    },
    
    nextQuestion(){

      if(this.questions.length -1 == this.a){
        this.score_show = true;
        this.quiz = false;
      }else{
        this.a++;
        this.b++;
        this.select = false;
      }


    },
    skipQuestion(){
      if(this.questions.length -1 == this.a){
        this.score_show = true;
        this.quiz = false;
      }else{
        this.a++;
        this.b++;
      }

    },
    restartQuiz(){
      Object.assign(this.$data, this.$options.data()); //reset data
    },
    fecharModal(){
      this.$emit("fecharModal");
    }
  },
  mounted(){
    
  }

}
</script>

<style>

.container-app{
  display: flex;
  width: 100%;
  height: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
}

.container-quiz{
    display: flex;
    width: 40%;
    height: 85%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    flex-flow: column;
    text-align: center;
    border: 1px solid #e7eae0;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.quiz-header
{
    display: flex;
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #e7eae0;
    justify-content: center;
    align-items: center;
    background-color: #e7eae0;
    border-radius: 10px 10px 0px 0px;
}
.close{
  position: relative;
  top: -30px;
  left: 170px;
  font-size: 1.2em;
  color: #f00;
}
.quiz-main{
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
    margin: auto;
}

.quiz-footer{
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    border-top: 1px solid #e7eae0;
    background-color: #e7eae0;
    border-radius: 0px 0px 10px;
}



.box-questions{
    margin-top: 20px;
}

.box-questions p{
    margin-top: 10px;
}

.box-suggestions{
    display: flex;
    width: 100%;
    justify-content: center;
    margin: auto;
}

ul{
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    flex-flow: column;
}

ul li{
    list-style: none;
    line-height: 2;
    border: 1px solid #cdd2d2;
    margin-bottom: 20px;
    border-radius: 15px;
}

li:hover{
    background-color: #cdd2d2;
}

.box-button{
    display: flex;
    width: 100%;
}

.box-button button{
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    color:#fff;
    font-size: 10px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    background-color: #767979;
}


li.correct{
    border: 1px solid rgba(74, 219, 74);
    background-color: rgba(74, 219, 74);
    color: #fff;
    font-weight: 600;
}

li.incorrect{
    border: 1px solid rgba(240, 117, 100);
    background-color: rgba(240, 117, 100);
    color: #fff;
    font-weight: 600;
}

.box-icone{
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
}

.box-score h2{
    margin-top: 40px;
}

.btn-restart{
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: 50px;
}


.btn-restart button{
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    color:#fff;
    font-size: 10px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    background-color: rgba(106, 120, 202);
}

</style>
