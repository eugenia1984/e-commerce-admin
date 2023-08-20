import mongoose from 'mongoose'

export function mongooseConncet() {
  const uri = process.env.MONGDB_URI
  
  if(mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise()
  } else {
    return mongoose.connection(uri)
  }
}