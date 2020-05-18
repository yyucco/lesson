<template>
  <form action="" >
    <div id="formWrap">
      <div id="formTitle">
        <p id="step">STEP3</p>
        <p>以下の内容をご確認ください。</p>
      </div>
      <div id="formContent">
        <div class="question">
          <p>-性別-</p>
          <p>{{ state.step1.gender }}</p>
        </div><!-- question -->
        <div class="question">
          <p>-生年月日-</p>
          <p>{{ state.step1.birathday.year }}年{{ state.step1.birathday.month }}月{{ state.step1.birathday.day }}日</p>
        </div><!-- question -->
        <div class="question">
          <p>-現在、生命保険に加入されていますか？-</p>
          <p>{{ state.step2.question01 }}</p>
        </div><!-- question -->
        <div class="question">
          <p>-現在、入院中ですか？-</p>
          <p>{{ state.step2.question02 }}</p>
        </div><!-- question -->
        <div class="question">
          <p>-過去5年以内に、入院したことはありますか？-</p>
          <p>{{ state.step2.question03 }}</p>
        </div><!-- question -->
        <div class="question">
          <p>-ご相談内容-</p>
          <p>{{ state.step3.consultation }}</p>
        </div><!-- question -->
      </div><!-- formContent -->
    </div><!-- formWrap -->

    <div id="formButton">
      <input type="button" @click="prev" value="前に戻る">  
      <input type="button" @click="next" value="送信">
    </div>
    
  </form>
</template>

<script>
  import { mapState } from 'vuex'

  export default { 
    computed: {
      ...mapState({
          state: 'form'
      })
    },
    methods: {
      prev() {  
        this.$router.push('/step3');
      },
      next() { 
      
      }
    }
  }
</script>

<style scoped>
</style>
