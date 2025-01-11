import mongoose, { Schema } from "mongoose";

const transaction= new Schema(
    {
        _id: {
            type: String,
            required: true,
        },
        school_id: {
            type: String,
            required: true,
        },
        trustee_id: {
            type: String,
            required: true,
        },
        gateway: {
            type: String,
            required: true,
        },
        order_amount: {
            type: Number,
            required: true,
        },
        custom_order_id: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);


export const Transaction = mongoose.model("Transaction", transaction)