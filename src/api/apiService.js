import Factory from "../DAOs/factory.js";

class ApiService{
    constructor(){
        this.factory = Factory.factory();
    }
    
     createWord = async(word)=>{
        try {
            const data = await this.factory.wordService.createWord(word)
            return data
        } catch (error) {
            return error
        }
    }
    fetchWordsFromApi = async(number)=>{
        try {
            const data = await this.factory.wordService.fetchWordsFromApi(number)
            return data
        } catch (error) {
            return error
        }
    }

    getPhrase = async()=>{
        try {
            const data = await this.factory.wordService.getPhrase()
            return data
        } catch (error) {
            return error
        }
    }

    getRepetition = async()=>{
        try {
            const data = await this.factory.wordService.getRepetition()
            return data
        } catch (error) {
            return error
        }
    }
    deleteWord = async(word)=>{
        
            const data = await this.factory.wordService.deleteWord(word)
            return data
    }
    }
    export default ApiService