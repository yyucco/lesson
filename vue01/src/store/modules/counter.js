// import Vue from 'vue'
 
const state = {
  question01: '',
  question02:{ y:'1967',m:'1',d:'1'},
  question03: '',
  question04: '',
  question05: '',
  question06: '',
};

const mutations = {
  addstep1(state,answertext){
    state.question01 = answertext.question01;
    state.question02.y = answertext.question02.y;
    state.question02.m = answertext.question02.m;
    state.question02.d = answertext.question02.d;
  },
  addstep2(state,answertext){
    state.question03 = answertext.question03;
    state.question04 = answertext.question04;
    state.question05 = answertext.question05;
  },
  addstep3(state,answertext){
    state.question06 = answertext.question06;
  }
};

 
export default {
  state,
  mutations
}