import Highlight from "./Highlight";
import Story from "./Story";

export default class User {
  uid: number;
  name: string;
  theme: string;
  email: string;
  password: string;
  profile_img: string;
  followers: number[];
  following: number[];
  userName :string ;
  hasStories:boolean;
  stories:Story[];
  highlights:Highlight[]=[];
  constructor(
    uid: number,
    name: string,
    theme: string,
    email: string,
    password: string,
    profile_img: string,
    followers: number[],
    following: number[],
    hasStories:boolean,
    stories:Story[]
  ) {
    this.uid = uid;
    this.name = name;
    this.theme = theme;
    this.email = email;
    this.password = password;
    this.profile_img = profile_img;
    this.followers = followers;
    this.following = following;
    this.userName = this.name.replace(" ","_").toLowerCase();
    this.hasStories = hasStories;
    this.stories = stories;
  }
  addNewHighlight(highlight:Highlight){
    this.highlights.push(highlight);
  }
}
