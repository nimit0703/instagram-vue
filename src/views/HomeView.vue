<template>
  <div>
    <div class="d-flex align-items-stretch m-0">
      <div class="d-flex flex-column p-3 parent">
        <div
          :class="$screen.width > 650 ? 'ps-2 flex-grow-1' : null"
          class="storySection d-flex flex-column m-stories"
        >
          <StoriesCom></StoriesCom>
        </div>
        <div
          class="postSection d-flex flex-column overflow-hidden"
        >
          <PostCard
            v-for="post in posts"
            :post="post"
            :key="post.id"
            class="mt-3"
          ></PostCard>
        </div>
      </div>
      <div
        v-if="$screen.width > 650"
        class="right-sec border-start border-secondary"
      >
        <HomeSideSection />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "../stores/store";
import PostCard from "../components/common/cards/PostCard.vue";
import StoriesCom from "../components/story/StoriesCom.vue";
import HomeSideSection from "../components/pages/home/HomeSideSection.vue";
import Post from "../classes/Post";
export default {
  name: "HomeView",
  components: {
    PostCard,
    StoriesCom,
    HomeSideSection,
  },
  data() {
    return {
      posts: [] as Post[],
    };
  },
  created() {
    this.posts = store.getters.getPostsByFollowing;
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
.m-stories {
  margin: 10px 0 !important;
}
</style>
