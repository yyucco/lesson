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
          <label v-for="( item, i ) in question01items" :key="i"><input type="radio" :value="item" v-model="question01">{{ item }}</label>
        </div><!-- question -->
        <div class="question">
          <p>-生年月日-</p>
          <label>
            <select v-model="selectedY">
              <option v-for="year in 34" :key="year" :value="1966 + year">
                <span v-if="year &lt; 23">{{ 1966 + year }} ( 昭和 {{ 41 + year }} )</span>
                <span v-else>{{ 1966 + year }} ( 平成 {{ year - 22 }} )</span>
                </option>
            </select>年
          </label>
          <label>
            <select v-model="selectedM">
              <option v-for="month in 12" :key="month" :value=" month">{{ month }}</option>
            </select>月
          </label>
          <label>
            <select v-model="selectedD">
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
  export default { 
    data(){
      return {
        question01items: [ '女性', '男性' ],
        question01: '',
        selectedY:'1967',
        selectedM:'1',
        selectedD:'1',
      } 
    },
    methods: {
      next() {  
        // const statetext = {
        //   question01:this.question01check,
        //   question02:{ y:this.selectedY, m:this.selectedM, d:this.selectedD}
        // };
        // this.$store.commit('add',statetext);  
        this.$router.push('/form2');
      }
    }
  }
</script>

<style scoped>
</style>
