import { NextResponse } from "next/server";
import { connect } from "@/utils/dbConfig";
import Post from "@/models/Post";

connect();

export const GET = async (request, { params }) => {
    const { id } = params;
    try {
        const post = await Post.findById(id);
        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 });
    }
}

//delete post
export const DELETE = async (request, { params }) => {
    const { id } = params;
    try {
        await Post.findByIdAndDelete(id);
        return new NextResponse("Blog Deleted successully", { status: 200 });

    } catch (error) {
        return new NextResponse("Database Error", { status: 500 })
    }
}