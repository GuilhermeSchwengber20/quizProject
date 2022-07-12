<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <h2>VUe<span>Quiz</span></h2>
      </div>
      <div class="navbar">
        <ul>
          <li>HOME</li>
          <li>VER QUIZ</li>
          <li>SOBRE NOS</li>
          <li>QUIZ FEITOS</li>
        </ul>
      </div>
    </div>
    <div class="quiz-lista">
      <div class="box-quiz">
        <label>HTML 0/10</label>
        &nbsp;
        <label @click="abrirQuiz">Ir Para o Quiz<i class="fa-solid fa-arrow-right"></i></label>
      </div>
      <div class="box-quiz">
        <label>CSS 0/10</label>
        &nbsp;
        <label>Ir Para o Quiz<i class="fa-solid fa-arrow-right"></i></label>
      </div>
      <div class="box-quiz">
        <label>JavaScript 0/10</label>
        &nbsp;
        <button @click="abrirQuiz">r Para o Quiz<i class="fa-solid fa-arrow-right"></i></button>
        <ModalQuiz v-if="this.quiz == true" v-on:fecharModal="quiz = false"></ModalQuiz>
      </div>
    </div>
  </div>
</template>
<script>
import ModalQuiz from './components/ModalQuiz.vue';
  export default{
    components:{
      ModalQuiz,
    },
    data(){
      return{
        quiz: false
      }
    },
    methods:{
      abrirQuiz(){
        this.quiz = true;
        console.log("chamo funcao");
      }
    }
  }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container{
  width: 100%;
  height: 100vh;
  background-color: #222;
}
.header{
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: #fff;
  background: rgb(0 0 0 / 79%);
  box-shadow: 0px 0px 10px  rgba(0,0,0,0.9);
}

.navbar ul{
  display: flex;
  flex-direction: row;
}
.navbar ul li{
  list-style: none;
  margin-right: 20px;
}

.quiz-lista{
  margin-top: 50px;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
}

.box-quiz{
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
  width: 240px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px rgba(0,0,0,0.5);
}
</style>