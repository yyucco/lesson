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
          <textarea v-model="question06"></textarea>
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
  export default { 
    data(){
      return {
        question06: '',
      } 
    },
    methods: {
      prev() {  
        this.$router.push('/');
      },
      next() {  
        this.$router.push('/form4');
      }
    }
  }
</script>

<style scoped>
</style>
