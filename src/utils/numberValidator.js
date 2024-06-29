
export const validateNumber = (number)=>{
    if (typeof number !== 'number' || !Number.isInteger(number)) {
        throw new Error('The value must be an integer number');
    }
}