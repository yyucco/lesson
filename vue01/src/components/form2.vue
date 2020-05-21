<template>
  <form action="" >
    <div id="formWrap">
      <div id="formTitle">
        <p id="step">STEP2</p>
        <p>以下にお答えください</p>
      </div>
      <div id="formContent">
        <div class="question">
          <p>現在、生命保険に加入されていますか？</p>
          <label v-for="( item, i ) in  $definitions.itemsYesNo" :key="i"><input type="radio" :value="item" v-model="question[0]">{{ item }}</label>
        </div><!-- question -->
        <div class="question" v-if="question[0] === 'はい'">
          <p>現在、入院中ですか？</p>
          <label v-for="( item, i ) in  $definitions.itemsYesNo" :key="i"><input type="radio" :value="item" v-model="question[1]">{{ item }}</label>
        </div> 
        <!-- question -->
        <div class="question" v-if="question[1] === 'はい'">
          <p>過去5年以内に、入院したことはありますか？</p>
          <label v-for="( item, i ) in  $definitions.itemsYesNo" :key="i"><input type="radio" :value="item" v-model="question[2]">{{ item }}</label>
        </div> 
        <!-- question -->
      </div><!-- formContent -->
    </div><!-- formWrap -->

    <div id="formButton">
      <input type="button" @click="prev" value="前に戻る">  
      <input type="button" @click="next" value="次に進む">
    </div>
    
  </form>
</template>

<script>
  export default { 
    data(){
      return {
        question: [
          this.$store.getters.getState[1].question[0],
          this.$store.getters.getState[1].question[1],
          this.$store.getters.getState[1].question[2]
        ]
      } 
    },
    computed:{
      setData:function () {
       return {
         num:1,
         data:{
          question:[
            this.question[0], 
            this.question[1], 
            this.question[2]
          ]
         }
        }
      }
    },
    methods: {
      prev() {
        this.$store.commit('setQuestion',this.setData);  
        this.$router.push('/basicdate');
      },
      next() { 
        this.$store.commit('setQuestion',this.setData);  
        this.$router.push('/consultation');
      }
    }
  }
</script>

<style scoped>
</style>
