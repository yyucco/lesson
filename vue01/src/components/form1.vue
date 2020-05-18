<template>
  <form action="" >
    <div id="formWrap">
      <div id="formTitle">
        <p id="step">STEP1</p>
        <p>お客様の情報を入力してください</p>
      </div>
      <div id="formContent">
        <div class="question">
          <p>-性別-</p>
          <label v-for="( item, i ) in genderitems" :key="i"><input type="radio" :value="item" v-model="state.step1.gender">{{ item }}</label>
        </div><!-- question -->
        <div class="question">
          <p>-生年月日-</p>
          <label>
            <select v-model="state.step1.birathday.year">
              <option v-for="year in 34" :key="year" :value="1966 + year">
                <span v-if="year &lt; 23">{{ 1966 + year }} ( 昭和 {{ 41 + year }} )</span>
                <span v-else>{{ 1966 + year }} ( 平成 {{ year - 22 }} )</span>
                </option>
            </select>年
          </label>
      
          <label>
            <select v-model="state.step1.birathday.month">
              <option v-for="month in 12" :key="month" :value=" month">{{ month }}</option>
            </select>月
          </label>
          <label>
            <select v-model="state.step1.birathday.day">
              <option v-for="day in 31" :key="day" :value="day">{{ day }}</option>
            </select>日
          </label>
        </div><!-- question -->
      </div><!-- formContent -->
    </div><!-- formWrap -->

    <div id="formButton">
      <input type="button" @click="next" value="次に進む">
    </div>
    
  </form>
</template>

<script>
  import { mapState } from 'vuex'
 
  export default { 
    data(){
      return {
        genderitems: [ '女性', '男性' ]
      } 
    },
    computed: {
        ...mapState({
          state: 'counter'
        })
      },
    methods: {
      next() {  

      //  this.$store.commit('setQuestion');  
        this.$router.push('/step2');
      }
    }
  }
</script>

<style scoped>
</style>
