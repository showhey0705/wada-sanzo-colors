import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/colors";

const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 20000,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Only initialize MongoDB client if we have a valid URI
function initializeClient() {
  if (!process.env.MONGODB_URI) {
    console.warn("MONGODB_URI not defined. MongoDB features will be disabled.");
    // Return a rejected promise to indicate MongoDB is not available
    return Promise.reject(new Error("MongoDB not configured"));
  }
  
  try {
    client = new MongoClient(uri, options);
    return client.connect();
  } catch (error) {
    console.error("Failed to initialize MongoDB client:", error);
    // Return a rejected promise to maintain the Promise<MongoClient> type
    return Promise.reject(error);
  }
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = initializeClient();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = initializeClient();
}

export default clientPromise;
