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
    <div class="quiz-lista" v-if="modal == false">
      <div class="box-quiz" v-for="(element, index) in quizItens" :key="index">
        <div class="header-box">
          <label>{{element.title}}</label>
          <div class="progress"><label>0%</label></div>
        </div>
        <div class="content-nivel">
          <div class="content-text">
            <div>
                <label style="text-align: left;">Escolha um Nivel de Dificuldade:</label>
            </div>

          </div>
      </div>
        <div class="nivel-box">

          <label class="item-nivel" id="HTML">
            {{element.nivel.basico}}
            <i class="fa-solid fa-arrow-right icon" @click="modal = true"></i>
          </label>

          <label class="item-nivel">
            {{element.nivel.intermed}}
            <i class="fa-solid fa-arrow-right icon" @click="modal = true"></i>
          </label>
          <label class="item-nivel">
            {{element.nivel.expert}}
            <i class="fa-solid fa-arrow-right icon" @click="modal = true"></i>
          </label>
        </div>

        </div>
    </div>
    <ModalQuiz v-if="modal == true"></ModalQuiz>
  </div>
</template>
<script>
import ModalQuiz from "./components/ModalQuiz.vue";
  export default{
    components:{
      ModalQuiz
    },
    data(){
      return{
        quiz: false,
        nivelQuiz: false,
        modal: false,
        quizItens: [
          {
            title: "HTML",
            id: document.getElementById("HTML"),
            nivel: {
              basico: "HTML BASICO",               
              intermed: "HTML INTERMEDIARIO",
              expert: "HTML EXPERT",
              mostraNivel : false,
            }
          },
          {
            title: "CSS",
            nivel: {
              basico: "CSS BASICO",               
              intermed: "CSS INTERMEDIARIO",
              expert: "CSS EXPERT",
              mostraNivel : false,

            }
          },
          {
            title:"JavaScript",
            nivel: {
              basico: "JavaScript BASICO",               
              intermed: "JavaScript INTERMEDIARIO",
              expert: "JavaScript EXPERT",
              mostraNivel : false,

            }
          }
        ]
      }
    },
    methods:{
      abrirQuiz(){
        this.quiz = true;
        console.log("chamo funcao");
      },
      mostrarNivel(element){
        console.log(element.id)
        element.nivel.mostraNivel = true;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  width: 100%;
}
.box-quiz{
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  border-radius: 20px;
  border: 1px solid #fff;
  padding: 10px;
  height: auto;
}

.header-box{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
}

.content-text{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.nivel-box{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.item-nivel{
  margin-top: 10px;
  border: 1px solid #fff;
  padding: 5px;
  width: 100%;
  white-space: nowrap;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item-nivel:hover{
  background-color: #222;
  color: #fff;
  transition: 0.9s;
}
.icon:hover::before{
    content: "go quiz!";
}

</style>