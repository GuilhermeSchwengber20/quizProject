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
      <div class="box-quiz-html" v-for="(element, index) in quizBox" :key="index">
        <div class="box-html-header">
          <label>{{element.nome}}</label>
          &nbsp;
          <div class="progress-bar">
            <label>0%</label>
          </div>
        </div>
        <div class="quiz-level">
          <label><span v-if="mostrarNivel == false">Visualizar</span><span v-else>Ocultar</span> Niveis do Quiz</label>
          <i class="fa-solid fa-angle-down" @click="mostrarNivel(element)"></i>
          <i class="fa-solid fa-angle-up" v-if="mostrarNivel == true" @click="mostrarNivel = false"></i>
        </div>
          <div class="selecionar-nivel" v-if="mostraNivel == true">
            <label class="nivel-item">HTML Basic</label>
            <label class="nivel-item">HTML Intermediario</label>
            <label class="nivel-item">HTML Expert</label>
          </div>
        <!-- <label @click="abrirQuiz">Ir Para o Quiz<i class="fa-solid fa-arrow-right"></i></label> -->
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
        mostraNivel: false,
        quizBox : [ 
            {
              nome: "HTML",
            },
            {
              nome: "CSS",
            }
        ]
      }
    },
    methods:{
      abrirQuiz(){
        this.quiz = true;
        console.log("chamo funcao");
      },
      mostrarNivel(){
        var teste = this.quizBox.findIndex("HTML");
        console.log(teste);
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

.box-quiz-html{
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
  width: 100%;
  height: auto;
  align-content: flex-end;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px rgba(0,0,0,0.5);
}

.box-html-header{
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 10px;
}

.quiz-level{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

.selecionar-nivel{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
}

.selecionar-nivel .nivel-item{
  padding: 5px;
  border: 1px solid #fff;
  width: auto;
  margin-top: 10px;
}


</style>