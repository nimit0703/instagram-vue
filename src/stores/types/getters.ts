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
    const user = _.find(state.users, (user) => user.uid === id);
    console.log("getUserById", user, id);
    return user;
  },
  getPostById: (state: any) => (id: number) => {
    return _.find(state.posts, (post) => post.id === id);
  },
  getUsersHavingStories: (state:any) => () => {
    const usersHavingStories = _.filter(state.users, (user) => user.hasStories);
    console.log("_____________________________________________________________________")
    console.log("allusers",usersHavingStories)
    const currentUserIndex = _.findIndex(
      usersHavingStories,
      (user) => user.uid === state.thisUser.uid
      );
      if (currentUserIndex !== -1) {
        usersHavingStories.splice(currentUserIndex, 1);
      }
      console.log("allusers without thisUSer",usersHavingStories)
      console.log("_____________________________________________________________________")

    return usersHavingStories;
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
