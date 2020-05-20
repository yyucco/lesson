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
          <label v-for="( item, i ) in $definitions.genderitems" :key="i"><input type="radio" :value="item" v-model="gender">{{ item }}</label>
        </div><!-- question -->
        <div class="question">
          <p>-生年月日-</p>
          <label>
            <select v-model="birathday.year">
              <option v-for="(beforeYear, index)  in 34" :key="beforeYear" :value="$definitions.seirekiYear(index)">
                <span >{{ $definitions.seirekiYear(index) }} ( {{ $definitions.warekiYear(index) }} )</span>
              </option> 
            </select>年
          </label>
      
          <label>
            <select v-model="birathday.month">
              <option v-for="month in 12" :key="month" :value=" month">{{ month }}</option>
            </select>月
          </label>
          <label>
            <select v-model="birathday.day">
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
        gender: this.$store.getters.getState[0].gender, 
        birathday:{ 
          year: this.$store.getters.getState[0].birathday.year,
          month: this.$store.getters.getState[0].birathday.month,
          day: this.$store.getters.getState[0].birathday.day
        }
      } 
    },
    computed:{
      setData:function () {
        return {
          num:0,
          data:{
            gender: this.gender, birathday:{ year:this.birathday.year, month:this.birathday.month, day:this.birathday.day }
          }
        }
      }
    },
    methods: {
      next: function () {
        this.$store.commit('setQuestion',this.setData);  
        this.$router.push('/question');
      }
    }
  }
</script>

<style scoped>
</style>
