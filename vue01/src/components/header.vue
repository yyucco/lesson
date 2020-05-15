<template>
  <header>
    <h1>Sample App</h1>
    <div id="login">
      <div><a href="#">ログイン</a></div>
      <div><a href="#">新規登録</a></div>
    </div>
  </header>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  margin: 0 auto;;
  padding: 20px 40px;
  background-color: #42b983;
  display: flex;
  justify-content: space-between;
  align-items:center;
}
#login {
  display: flex;
  justify-content: flex-end;
}

</style>
