// import Vue from 'vue'
 
 const state = ()=>({
  answer:[]
})

 const mutations = {
  add(state,text){
    state.answer.push(text);
  }
}
// const actions = {
//   plusCount: ({commit}) => {
//     commit('CHANGE_COUNT');
//   }
// };
 
//   { step:1, attend:'お客様の情報を入力してください', question01:'man',question02:19910101 }
//   { step:2, attend:'以下にお答えください', question01:'yes',question02:'yes' },
//   { step:3, attend:'ご相談内容をご記入ください', question01:'' }


// const mutations = {
//   'CHANGE_COUNT' (state) {

//     if ( toggleman ) {
//       state.question01 = 'man';
//     } else if (togglewoman) {
//       state.question01 = 'woman';
//     }
//     // state.count = state.question01 + 1;
//   },
// };
 
// const actions = {
//   plusCount: ({commit}) => {
//     commit('CHANGE_COUNT');
//   }
// };
 
// const getters = {
//   currentCount: state => {
//     return state.question01;
//   }
// }
 
export default {
  state,
  mutations
}