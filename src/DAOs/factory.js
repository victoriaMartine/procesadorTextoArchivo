import {MODE} from "../config/config.js";
import Words from "./wordsDao.js";

class Factory{
    constructor(){}
   
    static factory = ()=>{
       if(MODE === "memory"){
          return{
           wordService:new Words(),
          };     
       }
    };
   }
   export default Factory