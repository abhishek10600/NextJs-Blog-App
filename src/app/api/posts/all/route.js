import { NextResponse } from "next/server";
import { connect } from "@/utils/dbConfig";
import Post from "@/models/Post";

connect();

export const GET = async (request) => {
    try {
        const posts = await Post.find();
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new NextResponse("Database error", { status: 500 })
    }
}