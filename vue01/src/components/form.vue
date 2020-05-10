
<template>
  <form action="" id="step1">
    <div id="formWrap">
      <div id="formTitle">
        <p id="step">STEP1</p>
        <p>以下にお答えください</p>
      </div>
      <div id="formContent">
        <div class="question">
          <p>-性別-</p>
          <label><input type="checkbox" name="man">男性</label>
          <label><input type="checkbox" name="woman">女性</label>
        </div><!-- question -->
        <div class="question">
          <p>-生年月日-{{ years }}</p>
          <label>
            <!-- <select v-for="year in years">
              <option value="{{ year.seireki }}">{{ year.seireki }}</option>
            </select>年 -->
          </label>
        </div><!-- question -->
      </div><!-- formContent -->
    </div><!-- formWrap -->

    <div id="formButton">
      <button>前に戻る</button>
      <button>次に進む</button>
    </div>
    
  </form>
</template>

<script>

  export default {
   data:{
    years:[]
  },

  methods: {
    yearSelect () {
       const  years = [];
      for (let i = 1; i < 33; i++ ) {
        let seirekiNum = 1967;
        let wareki = '昭和';
        let warekiNum = 42; 
        seirekiNum += 1;
        warekiNum += 1;
        if ( warekiNum > 63 ) {
          wareki = '平成';
          warekiNum = 0;
          warekiNum += 1;
        }
      this.years.push( {'seireki':seirekiNum, 'warekiName':wareki,wareki:warekiNum });
      
      }
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
