
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
          <label v-for="( item, i ) in items" :key="i"><input type="checkbox" :value="item" v-model="checkNames" @click="checkbox">{{ item }}</label>
        </div><!-- question -->
        <div class="question">
          <p>-生年月日-</p>
          <label>
            <select>
              <option v-for="year in 34" :key="year" :value="1966 + year">
                <span v-if="year &lt; 23">{{ 1966 + year }} ( 昭和 {{ 41 + year }} )</span>
                <span v-else>{{ 1966 + year }} ( 平成 {{ year - 22 }} )</span>
                </option>
            </select>年
          </label>
          <label>
            <select>
              <option v-for="month in 12" :key="month" :value=" month">{{ month }}</option>
            </select>月
          </label>
          <label>
            <select>
              <option v-for="day in 31" :key="day" :value="day">{{ day }}</option>
            </select>日
          </label>
        </div><!-- question -->
      </div><!-- formContent -->
    </div><!-- formWrap -->

    <div id="formButton">
      <input type="button" @click="step1evnt" value="次に進む">
    </div>
    
  </form>
</template>

<script>
  export default { 
    data(){
      return {
        checkNames: [],
        items: [ '女性', '男性' ],
      } 
    },
    methods: {
      checkbox(){
        if (this.checkNames.length > 0){
           this.checkNames = [];
        }
      },
      step1evnt() {  
        const statetext = {
          step1:{
          question01:this.checkNames[0],
          question02:19910101 
          }
        };
        this.$store.commit('add',statetext);  
        this.$router.push('/form2');
      }
    }

  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  width: 60%;;
  display: inline-block;
  margin: 40px auto;
}
form #formWrap {
  border: 1px solid #42b983;
  margin-bottom: 20px;
}
form #formTitle {
  background-color: #c3e4d5;
  border-bottom: 1px solid #42b983;
  position: relative;
  padding: 20px;
}
form #step {
  background-color: #8cdce8;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
}  
form #formContent {
  padding: 20px ;
}
p {
  margin: 0;
}

</style>
