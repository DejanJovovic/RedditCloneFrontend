import { CommunityModel } from "../community/community-response";

export class PostModel{
    id!:number;
    title!:string;
    karma!:number
    community?:CommunityModel;

    text!:string;


}
export class PostMod{
    title!:string;
    text!:string;


}