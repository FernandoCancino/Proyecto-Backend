import mongoose from "mongoose";

const productCollection = "products";

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export const ProductModel = mongoose.model(productCollection, productSchema);