import Post from "../classes/Post";
import UserInterface from "@/interfaces/User";
import _ from "lodash";
import { createStore } from "vuex";
import User from "../classes/User";
import Story from "../classes/Story";

const store = createStore({
  state: {
    thisUser: new User(
      1,
      "Nimit Trevadiya",
      "dark",
      "nimit@insta.com",
      "ab",
      "src/assets/user-profile.jpeg",
      [26, 27, 28, 29, 30, 31, 32, 33, 34],
      [2, 3, 4, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      true,
      []
    ),
    users: [
      new User(
        26,
        "Alice Johnson",
        "light",
        "alice@example.com",
        "password123",
        "https://picsum.photos/id/26/200/200",
        [1],
        [3],
        true,
        [new Story(1, 26, "https://picsum.photos/id/26/200/200")]
      ),
      new User(
        27,
        "Bob Smith",
        "light",
        "bob@example.com",
        "password123",
        "https://picsum.photos/id/27/200/200",
        [1],
        [3],
        true,
        [
          new Story(2, 27, "https://picsum.photos/id/27/200/200"),
          new Story(3, 27, "https://picsum.photos/id/45/200/200"),
        ]
      ),
      new User(
        28,
        "Eva Martinez",
        "light",
        "eva@example.com",
        "password123",
        "https://picsum.photos/id/28/200/200",
        [1],
        [3],
        true,
        [
          new Story(4, 28, "https://picsum.photos/id/28/200/200"),
          new Story(5, 28, "https://picsum.photos/id/242/200/200"),
        ]
      ),
      new User(
        29,
        "Michael Brown",
        "light",
        "michael@example.com",
        "password123",
        "https://picsum.photos/id/29/200/200",
        [1],
        [3],
        true,
        [
          new Story(6, 29, "https://picsum.photos/id/29/200/200"),
          new Story(7, 29, "https://picsum.photos/id/24/200/200"),
        ]
      ),
      new User(
        30,
        "Linda Davis",
        "light",
        "linda@example.com",
        "password123",
        "https://picsum.photos/id/30/200/200",
        [1],
        [3],
        true,
        [
          new Story(8, 30, "https://picsum.photos/id/1/200/200"),
          new Story(9, 30, "https://picsum.photos/id/1/200/200"),
        ]
      ),
      new User(
        31,
        "David Wilson",
        "light",
        "david@example.com",
        "password123",
        "https://picsum.photos/id/31/200/200",
        [1],
        [3],
        true,
        [new Story(10, 31, "https://picsum.photos/id/1/200/200")]
      ),
      new User(
        32,
        "Sophia Garcia",
        "light",
        "sophia@example.com",
        "password123",
        "https://picsum.photos/id/32/200/200",
        [1],
        [3],
        true,
        [new Story(11, 32, "https://picsum.photos/id/1/200/200")]
      ),
      new User(
        33,
        "James Lee",
        "light",
        "james@example.com",
        "password123",
        "https://picsum.photos/id/33/200/200",
        [1],
        [3],
        true,
        [new Story(12, 33, "https://picsum.photos/id/1/200/200")]
      ),
      new User(
        34,
        "Olivia Robinson",
        "light",
        "olivia@example.com",
        "password123",
        "https://picsum.photos/id/34/200/200",
        [1],
        [3],
        true,
        [new Story(13, 34, "https://picsum.photos/id/1/200/200")]
      ),
      new User(
        35,
        "William Martinez",
        "light",
        "william@example.com",
        "password123",
        "https://picsum.photos/id/35/200/200",
        [1],
        [3],
        true,
        [new Story(14, 35, "https://picsum.photos/id/1/200/200")]
      ),
      new User(
        1,
        "Nimit Trevadiya",
        "dark",
        "nimit@insta.com",
        "ab",
        "src/assets/user-profile.jpeg",
        [2, 3, 4, 5],
        [3, 4, 5, 6],
        true,
        [new Story(15, 1, "https://picsum.photos/id/1/200/200")]
      ),
      new User(
        2,
        "John Doe",
        "light",
        "john@example.com",
        "password123",
        "src/assets/user-profile.jpeg",
        [1],
        [3],
        true,
        [new Story(16, 2, "https://picsum.photos/id/1/200/200")]
      ),
      new User(
        3,
        "John Walker",
        "light",
        "john@example.com",
        "password123",
        "src/assets/user-profile.jpeg",
        [1],
        [3],
        true,
        [new Story(17, 3, "https://picsum.photos/id/1/200/200")]
      ),
      new User(
        4,
        "Kent Doe",
        "light",
        "john@example.com",
        "password123",
        "src/assets/user-profile.jpeg",
        [1],
        [3],
        true,
        [new Story(18, 4, "https://picsum.photos/id/1/200/200")]
      ),
      new User(
        5,
        "Clark Doe",
        "light",
        "john@example.com",
        "password123",
        "src/assets/user-profile.jpeg",
        [1],
        [3],
        true,
        [new Story(19, 5, "https://picsum.photos/id/1/200/200")]
      ),
    ],

    posts: [
      new Post(
        1,
        `https://picsum.photos/id/${1}/540/540`,
        1,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
      new Post(
        2,
        `https://picsum.photos/id/${2}/540/540`,
        4,
        [5, 3, 2, 1, 2],
        {},
        "captions"
      ),
      new Post(
        3,
        `https://picsum.photos/id/${3}/540/540`,
        4,
        [1, 3, 4, 5, 6, 2, 4, 3, 2, 2, 3, 7],
        {},
        "captions"
      ),
      new Post(
        4,
        `https://picsum.photos/id/${4}/540/540`,
        10,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
      new Post(
        5,
        `https://picsum.photos/id/${5}/540/540`,
        1,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
      new Post(
        6,
        `https://picsum.photos/id/${6}/540/540`,
        1,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
      new Post(
        7,
        `https://picsum.photos/id/${7}/540/540`,
        1,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
      new Post(
        8,
        `https://picsum.photos/id/${8}/540/540`,
        1,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
      new Post(
        9,
        `https://picsum.photos/id/${9}/540/540`,
        1,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
      new Post(
        10,
        `https://picsum.photos/id/${10}/540/540`,
        1,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
    ],
  },
  mutations: {
    likedPost(state, postId) {
      const likes = _.find(state.posts, (post) => post.id === postId)?.likes;
      likes?.push(state.thisUser.uid);
    },
    dislikedPost(state, postId) {
      const post = _.find(state.posts, { id: postId });
      if (post) {
        _.remove(post.likes, (like) => like === state.thisUser.uid);
      }
    },
    unfollow(state, id) {
      _.pull(state.thisUser.following, id);
    },
    follow(state, id: number) {
      state.thisUser.following.push(id);
    },
  },
  actions: {},
  getters: {
    getPostsByFollowing: (state) => () => {
      const followingIds = state.thisUser.following;
      const posts = _.filter(state.posts, (post) =>
        followingIds.includes(post.belongsTo)
      );
      return posts;
    },
    getUserById: (state) => (id: number) => {
      return _.find(state.users, (user) => user.uid === id);
    },
    getPostById: (state) => (id: number) => {
      return _.find(state.posts, (post) => post.id === id);
    },
    getUsersHavingStories: (state) => () => {
      return _.filter(state.users, (user) => user.hasStories);
    },
    getMypost: (state) => () => {
      return _.filter(
        state.posts,
        (post: Post) => post.belongsTo === state.thisUser.uid
      );
    },
    getPostsById: (state) => (id: number) => {
      return _.filter(state.posts, (post: Post) => post.belongsTo === id);
    },
  },
});

export default store;
