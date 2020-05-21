const state = [
  { gender: '', birathday: { year:1967, month:1, day:1 } },
  { question:['','','' ] },
  { consultation: ''}
]

const mutations = {
  setQuestion (state,setData) {
      state[setData.num] = setData.data;
  }
}

const getters = {	
    getState: state => {	
      return state;	
    }	
  }
  
export default {
  state,
  mutations,
  getters
}