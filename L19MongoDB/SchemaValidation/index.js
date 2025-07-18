const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");

async function main() {
    const uri = "mongodb://localhost:27017/library";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db();

        // Create collection with validation
        await db.createCollection("books", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["title", "author", "price"],
                    properties: {
                        title: {
                            bsonType: "string",
                            description: "must be a string and is required",
                            minLength: 2,
                            maxLength: 100
                        },
                        author: {
                            bsonType: "string",
                            description: "must be a string and is required",
                            pattern: "^[a-zA-Z ]+$"
                        },
                        price: {
                            bsonType: "number",
                            description: "must be a number and is required",
                            minimum: 0,
                            maximum: 1000
                        },
                        publishedDate: {
                            bsonType: "date",
                            description: "must be a valid date if provided"
                        },
                        inStock: {
                            bsonType: "bool",
                            description: "must be a boolean if provided"
                        }
                    }
                }
            },
            validationAction: "error",
            validationLevel: "strict"
        });

        console.log("Collection created with validation rules");

        // Test validation
        const books = db.collection("books");
        try {
            await books.insertOne({
                title: "Node.js Design Patterns",
                author: "Mario Casciaro",
                price: 39.99,
                publishedDate: new Date()
            });
            console.log("Valid document inserted");
        } catch (err) {
            console.error("Validation error:", err.message);
        }
    } finally {
        await client.close();
    }
}

main().catch(console.error);




