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
          <p>{{ this.$store.getters.getState[0].gender }}</p>
        </div><!-- question -->
        <div class="question">
          <p>-生年月日-</p>
          <p>
            {{ this.$store.getters.getState[0].birathday.year }}年
            {{ this.$store.getters.getState[0].birathday.month }}月
            {{ this.$store.getters.getState[0].birathday.day }}日
          </p>
        </div><!-- question -->
        <div class="question">
          <p>-現在、生命保険に加入されていますか？-</p>
          <p>{{ this.$store.getters.getState[1].question[0] }}</p>
        </div><!-- question -->
        <div class="question">
          <p>-現在、入院中ですか？-</p>
          <p>{{ this.$store.getters.getState[1].question[1] }}</p>
        </div><!-- question -->
        <div class="question">
          <p>-過去5年以内に、入院したことはありますか？-</p>
          <p>{{ this.$store.getters.getState[1].question[2] }}</p>
        </div><!-- question -->
        <div class="question">
          <p>-ご相談内容-</p>
          <p>{{ this.$store.getters.getState[2].consultation }}</p>
        </div><!-- question -->
      </div><!-- formContent -->
    </div><!-- formWrap -->

    <div id="formButton">
      <input type="button" @click="prev" value="前に戻る">  
      <input type="submit" @click="submit" value="送信">
    </div>
    
  </form>
</template>

<script>
  export default { 

    methods: {
      prev() {  
        this.$router.push('/consultation');
      },
      submit() { 
      
      }
    }
  }
</script>

<style scoped>
</style>
