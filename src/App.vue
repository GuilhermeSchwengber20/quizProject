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
      <div class="box-quiz" v-for="(element, index) in quizItens" :key="index">
        <label>{{element.title}}</label>
        &nbsp;
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    components:{
    },
    data(){
      return{
        quiz: false,
        quizItens: [
          {
            title: "HTML"
          },
          {
            title: "CSS"
          },
          {
            title:"JavaScript"
          }
        ]
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