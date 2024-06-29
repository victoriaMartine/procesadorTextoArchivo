import axios from "axios"
import fs from 'fs/promises'
const archive =  'data.json'
class Words{
    constructor(){
    //    this.words = []
    }

    readFile = async (archive) =>{
        try {
            const wordsData = await fs.readFile(archive, 'utf-8')
            const wordsDataJSON = JSON.parse(wordsData)
            return wordsDataJSON;
        } catch (error) {
            console.log(`There was an error while trying to read the file... ${error}`)
        }
    }
   writeFile = async (archive, txt) =>{
    try {
        await fs.writeFile(archive, JSON.stringify(txt,null,'\t'))
    } catch(err) {
        console.error("unable to write file");
    }
   }
    createWord =  async(word)=>{
        try {
            const words = await this.readFile(archive)
            words.push(word)
            await this.writeFile(archive, words);
            console.log('word created succesfully!!')
            
        } catch (error) {
            console.log(error)
        }
        
    }

    fetchWordsFromApi = async (number)=>{
        const url = `https://texto.deno.dev/palabras?cantidad=${number}`;
        const response = await axios.get(url);
        const newWords = response.data.palabras;
        const results = response.data;
        const words = await this.readFile(archive)
        try {

            words.push(...newWords)
            await this.writeFile(archive, words)
            return results;
        } catch (error) {
            console.log(error)
            return error;
        }   
    }

    getPhrase = async()=>{
        const words = await this.readFile(archive)
        const phrase = {
            phrase: words.join(' ')
        }
        return phrase ;
    }
    getRepetition = async ()=>{
    const wordCount = {};
    const words = await this.readFile(archive)
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    return wordCount;
  
  }
  deleteWord = async(word)=>{
    let words = await this.readFile(archive)
    let undeletedWords = words.filter((w) =>w !== word )
    if(undeletedWords.length === words.length){
        throw new Error("word not found")
    }
    words = undeletedWords;
    await this.writeFile(archive, words)
    return word ;
}
    }export default Words;