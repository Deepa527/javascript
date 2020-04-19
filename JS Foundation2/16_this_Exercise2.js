const character = {
    name: 'Simon',
    getCharacter() {
        return this.name;
    }
};
const giveMeTheCharacterNOW = character.getCharacter;

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW.bind(character)()); //this should return 'Simon' bud doesn't


//solution

// const character = {
//     name: 'Simon',
//     getCharacter() {
//       return this.name;
//     }
//   };
//   const giveMeTheCharacterNOW = character.getCharacter.bind(character);


//   console.log('?', giveMeTheCharacterNOW());