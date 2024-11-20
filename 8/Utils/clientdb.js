import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = 'mongodb+srv://fidanmusali05:8VnXKMKYX81EaRg2@first.6vujl.mongodb.net/?retryWrites=true&w=majority&appName=first'

 export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})
