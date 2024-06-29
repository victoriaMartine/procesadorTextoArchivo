import ApiService from "../api/apiService.js";
import ApiResponse from "../models/apiResponse.js";
import validateWord from "../middlewares/wordMiddleware.js";
import { validateNumber } from "../utils/numberValidator.js";

const service  = new ApiService();

class Controller{
    constructor(){}
 
    createWord = async (req = request, res= response)=>{
        try {
            const {word} = req.body;
            if(!word) throw new Error('data is missing');
            validateWord(word);
            // if(errors.length > 0) throw new Error(errors.join(','));
              service.createWord(word)
            res.status(200).send(new ApiResponse(true, "Word created succesfully",{word}));
        } catch (error) {
            res.status(422).send(new ApiResponse(false, error.message, null));
        }
    }

    fetchWordsFromApi= async (req = request, res= response)=>{
        try {
            const {number}=req.body;
            validateNumber(number);
            let data = await service.fetchWordsFromApi(number);
            res.status(200).send(new ApiResponse(true, `new words added: `, data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }
    getPhrase = async (req = request, res= response)=>{
        try {
          const data = await service.getPhrase();
          res.status(200).send(new ApiResponse(true, "Phrase", data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }
    getRepetition = async (req = request, res= response)=>{
        try {
            let data = await service.getRepetition();
            res.status(200).send(new ApiResponse(true, "Amount of times each word appeared: ", data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }
     deleteWord = async (req = request, res = response) => {
        try {
            const { word } = req.body;
            validateWord(word);
    
            const data = await service.deleteWord(word);
    
            res.status(200).send(new ApiResponse(true, `Word '${word}' deleted successfully`, data));
        } catch (error) {
            if (error.message === "word not found") {
                res.status(404).send(new ApiResponse(false, error.message, null));
            } else {
                res.status(422).send(new ApiResponse(false, `Invalid word`, null));
            }
        }
}
}
export default Controller;