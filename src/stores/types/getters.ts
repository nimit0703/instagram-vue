import _ from "lodash";
import Post from "../../classes/Post";

const getters = {
  getPostsByFollowing: (state: any) => {
    const followingIds = state.thisUser.following;
    const posts = _.filter(state.posts, (post) =>
      followingIds.includes(post.belongsTo)
    );
    return posts;
  },
  getUserById: (state: any) => (id: number) => {
    const user = _.find(state.users, (user) => user.uid === id)
    console.log("getUserById",user,id)
    return user;
  },
  getPostById: (state: any) => (id: number) => {
    return _.find(state.posts, (post) => post.id === id);
  },
  getUsersHavingStories: (state: any) => () => {
    return _.filter(state.users, (user) => user.hasStories);
  },
  getMypost: (state: any) => () => {
    return _.filter(
      state.posts,
      (post: Post) => post.belongsTo === state.thisUser.uid
    );
  },
  getPostsById: (state: any) => (id: number) => {
    return _.filter(state.posts, (post: Post) => post.belongsTo === id);
  },
};

// comment added


export default getters;
