const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */



 // using type to create the Type schema blocks
 //then using query to define a operation name with the right schema as its value
const typeDefs = gql`
  	type User{ 
  		id:ID!
  		username:String!
  	}

  		type Pet{
  			id:ID!
  			createdAt:String
  			name:String!
  			type:String!
  	}


  				input petInput{
  					name:String
  					type:String
  				}


  				input singlePetInput{
  					id:ID
  				}

  				input newPetInput{
  					name:String!
  					type:String!
  				}

  	type Query{
  		user:User!
  		pets(input:petInput):[Pet]!
  		apet(input:singlePetInput):Pet
  	}

  	type Mutation{
  		newPet(input:newPetInput):Pet!
  	}

`;

module.exports = typeDefs
