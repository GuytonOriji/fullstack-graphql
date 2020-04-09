/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_,{input},context){
      return  context.models.Pet.findMany(input)
    },
      apet(_,{input},context){
      return  context.models.Pet.findOne(input)
    },
    user(_,__,context){
      return  context.models.User.findOne()
    }
  },
  Mutation: {
    newPet(_,{input},context){
      return context.models.Pet.create(input)
    }
  },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  // User: {
    
  // }
}
