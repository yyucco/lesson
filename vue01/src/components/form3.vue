<template>
  <form action="" >
    <div id="formWrap">
      <div id="formTitle">
        <p id="step">STEP3</p>
        <p>ご相談内容をご記入ください</p>
      </div>
      <div id="formContent">
        <div class="question">
          <p>-ご相談内容-</p>
          <textarea v-model="answer.question06"></textarea>
        </div><!-- question -->
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
    computed: {
      ...mapState({
        answer: 'counter'
      })
    },
    methods: {
      prev() {  
        const answertext = {
          question06:this.answer.question06
        };
        this.$store.commit('addstep3', answertext); 
        this.$router.push('/form2');
      },
      next() { 
        const answertext = {
          question06:this.answer.question06
        };
        this.$store.commit('addstep3', answertext); 
        this.$router.push('/form4');
      }
    }
  }
</script>

<style scoped>
</style>
