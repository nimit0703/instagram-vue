<template>
  <div class="searchpage">
    <SearchCom></SearchCom>
  </div>
</template>

<script lang="ts">
import store from "../stores/store";
import SearchCom from "../components/pages/search/SearchCom.vue";

export default {
  components: {
    SearchCom,
  },
  created() {
    store.state.showLoder = true;
  },
  mounted() {
    setTimeout(() => {
      store.state.showLoder = false;
    }, 200);
  },
};
</script>
<style scoped>
.searchpage {
  display: flex;
  width: 70vw;
  justify-content: center;
  margin: auto;
}
</style>
