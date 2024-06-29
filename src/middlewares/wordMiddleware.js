const regex = /^[a-zA-Z0-9]*$/;
const validateWord = (word)=>{
    if (typeof word !== 'string' ||  word === "" || !regex.test(word)) {
        throw new Error('Please enter a valid word');
    }
}
export default validateWord;