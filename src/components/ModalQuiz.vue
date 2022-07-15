<template>
  <div class="container-app">
    <div class="container-quiz" v-if="mostrarQuiz == true">
      <div class="quiz-header">
        <h1> Quiz App</h1>
        <label @click="fecharModal"><i class="fa-solid fa-xmark close"></i></label>
      </div>  
      <div class="quiz-main" v-for="(element, index) in listaQuizHTML" :key="index">
          <li>{{element.question}}</li>  
      </div>
      <div class="quiz-respostar" v-for="resposta in listaQuizHTML.suggestions" :key="resposta">
          <li>{{resposta.suggestion}}</li>
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
          <button @click="verVetor">Next</button>

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
    width: 100%;
    height: 92vh;
    background: #fff;
  }
</style>
