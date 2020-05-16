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
          <label v-for="( item, i ) in itemsYesNo" :key="i"><input type="radio" :value="item" v-model="answer.question03">{{ item }}</label>
        </div><!-- question -->
        <div class="question" v-if="answer.question03 === 'はい'">
          <p>現在、入院中ですか？</p>
          <label v-for="( item, i ) in itemsYesNo" :key="i"><input type="radio" :value="item" v-model="answer.question04">{{ item }}</label>
        </div> 
        <!-- question -->
        <div class="question" v-if="answer.question04 === 'はい'">
          <p>過去5年以内に、入院したことはありますか？</p>
          <label v-for="( item, i ) in itemsYesNo" :key="i"><input type="radio" :value="item" v-model="answer.question05">{{ item }}</label>
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
  import { mapState } from 'vuex'

  export default { 
    data(){
      return {
        itemsYesNo: [ 'はい', 'いいえ' ]
      } 
    },
    computed: {
      ...mapState({
        answer: 'counter'
      })
    },
    methods: {
      prev() {  
        let answertext = {
          question03:this.answer.question03,
          question04:this.answer.question04,
          question05:this.answer.question05
        };
       this.$store.commit('addstep2', answertext); 
        this.$router.push('/');
      },
      next() { 
        let answertext = {
          question03:this.answer.question03,
          question04:this.answer.question04,
          question05:this.answer.question05
        };
       this.$store.commit('addstep2', answertext); 
        this.$router.push('/form3');
      }
    }
  }
</script>

<style scoped>
</style>
