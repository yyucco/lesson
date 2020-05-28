<template>
  <div>
   <label>Title<br><input type="text" v-model="dammyTitle"></label>
    <br>
    <label>Detail<br><textarea v-model="dammyDetail"></textarea></label>
    <br>
    <button @click="$emit('submit')">{{buttonText}}</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
 computed: {
    dammyTitle: {
      get() {
        return this.title;
      },
      set(value) {
        this.$emit("update:title", value);
      }
    },
    dammyDetail: {
      get() {
        return this.detail;
      },
      set(value) {
        this.$emit("update:detail", value);
      }
    },
    buttonText() {
      return this.edit ? "edit" : "add";
    }
  }
}
</script>