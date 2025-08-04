import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/colors";

const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 20000,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// MongoDB接続を初期化する関数
function initializeClient(): Promise<MongoClient> {
  if (!process.env.MONGODB_URI) {
    console.warn("MONGODB_URI not defined. MongoDB features will be disabled.");
    // MongoDBが設定されていない場合は拒否されたPromiseを返す
    return Promise.reject(new Error("MongoDB not configured"));
  }
  
  try {
    client = new MongoClient(uri, options);
    return client.connect().catch((error) => {
      console.error("MongoDB connection failed:", error);
      // 接続に失敗した場合も拒否されたPromiseを返す
      return Promise.reject(new Error("MongoDB connection failed"));
    });
  } catch (error) {
    console.error("Failed to initialize MongoDB client:", error);
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
