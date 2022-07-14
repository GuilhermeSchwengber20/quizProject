<template>
  <div class="container-app">
    <div class="container-quiz" v-if="mostrarQuiz == true">
      <div class="quiz-header">
        <h1> Quiz App</h1>
        <label @click="fecharModal"><i class="fa-solid fa-xmark close"></i></label>
      </div>  
      <div class="main-quiz" v-for="(element, index) in listaQuizHTML" :key="index" v-show="quiz">
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

</style>
