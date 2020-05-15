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
          <label v-for="( item, i ) in itemsYesNo" :key="i"><input type="radio" :value="item" v-model="question03">{{ item }}</label>
        </div><!-- question -->
        <div class="question" v-if="this.question03 === 'はい'">
          <p>現在、入院中ですか？</p>
          <label v-for="( item, i ) in itemsYesNo" :key="i"><input type="radio" :value="item" v-model="question04">{{ item }}</label>
        </div> 
        <!-- question -->
        <div class="question" v-if="this.question04 === 'はい'">
          <p>過去5年以内に、入院したことはありますか？</p>
          <label v-for="( item, i ) in itemsYesNo" :key="i"><input type="radio" :value="item" v-model="question05">{{ item }}</label>
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
        itemsYesNo: [ 'はい', 'いいえ' ],
        question03: '',
        question04: '',
        question05: '',
      } 
    },
    methods: {
      prev() {  
        this.$router.push('/');
      },
      next() {  
        this.$router.push('/form3');
      }
    }
  }
</script>

<style scoped>
</style>
