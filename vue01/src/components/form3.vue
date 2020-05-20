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
          <textarea v-model="consultation"></textarea>
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
        consultation: this.$store.getters.getState[2].consultation
      } 
    },
    computed:{
      setData:function () {
       return {
          num:2,
          data:{
            consultation:this.consultation
          }
        }
      }
    },
    methods: {
      prev() {
        this.$store.commit('setQuestion',this.setData);  
        this.$router.push('/question');
      },
      next: function () {
        this.$store.commit('setQuestion',this.setData);  
        this.$router.push('/confirmation');
      }
    }
  }
</script>

<style scoped>
</style>
