import { Router } from 'express';
import Controller from '../controller/wordsController.js';

const wordsRouter = Router()
const controller = new Controller();

wordsRouter.post('/', controller.createWord)
wordsRouter.post('/fetch', controller.fetchWordsFromApi)
wordsRouter.get('/getPhrase', controller.getPhrase)
wordsRouter.get('/getAll', controller.getRepetition)
wordsRouter.delete('/', controller.deleteWord)


export default wordsRouter;
