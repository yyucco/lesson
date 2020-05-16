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
          <p>{{ answer.question01 }}</p>
        </div><!-- question -->
        <div class="question">
          <p>-生年月日-</p>
          <p>{{ answer.question02.y }}年{{ answer.question02.m }}月{{ answer.question02.d }}日</p>
        </div><!-- question -->
        <div class="question">
          <p>-現在、生命保険に加入されていますか？-</p>
          <p>{{ answer.question03 }}</p>
        </div><!-- question -->
        <div class="question">
          <p>-現在、入院中ですか？-</p>
          <p>{{ answer.question04 }}</p>
        </div><!-- question -->
        <div class="question">
          <p>-過去5年以内に、入院したことはありますか？-</p>
          <p>{{ answer.question05 }}</p>
        </div><!-- question -->
        <div class="question">
          <p>-ご相談内容-</p>
          <p>{{ answer.question06 }}</p>
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
        answer: 'counter'
      })
    },
    methods: {
      prev() {  
        this.$router.push('/form3');
      },
      next() { 
      
      }
    }
  }
</script>

<style scoped>
</style>
