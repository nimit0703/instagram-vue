import Story from "../classes/Story";

export default interface User {
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
  highlights:Object[];
}
