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
          <label v-for="( item, i ) in question01items" :key="i"><input type="radio" :value="item" v-model="answer.question01">{{ item }}</label>
        </div><!-- question -->
        <div class="question">
          <p>-生年月日-</p>
          <label>
            <select v-model="answer.question02.y">
              <option v-for="year in 34" :key="year" :value="1966 + year">
                <span v-if="year &lt; 23">{{ 1966 + year }} ( 昭和 {{ 41 + year }} )</span>
                <span v-else>{{ 1966 + year }} ( 平成 {{ year - 22 }} )</span>
                </option>
            </select>年
          </label>
      
          <label>
            <select v-model="answer.question02.m">
              <option v-for="month in 12" :key="month" :value=" month">{{ month }}</option>
            </select>月
          </label>
          <label>
            <select v-model="answer.question02.d">
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
        question01items: [ '女性', '男性' ]
      } 
    },
    computed: {
        ...mapState({
          answer: 'counter'
        })
      },
    methods: {
      next() {  
        const answertext = {
          question01:this.answer.question01,
          question02:{ 
            y:this.answer.question02.y, 
            m:this.answer.question02.m, 
            d:this.answer.question02.d
          }
        };
       this.$store.commit('addstep1', answertext);  
        this.$router.push('/form2');
      }
    }
  }
</script>

<style scoped>
</style>
