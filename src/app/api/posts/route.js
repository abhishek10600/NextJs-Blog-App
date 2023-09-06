import { NextResponse } from "next/server";
import { connect } from "@/utils/dbConfig";
import Post from "@/models/Post";

connect();

//get all posts by a particular user
export const GET = async (request) => {
    const url = new URL(request.url);
    const username = url.searchParams.get("username");
    try {
        const posts = await Post.find({ username });
        return new NextResponse(JSON.stringify(posts), { status: 200 })

    } catch (error) {
        return new NextResponse("Database error", { status: 500 })
    }
}

//create new post
export const POST = async (request) => {
    try {
        const { title, desc, content, username } = await request.json();
        const newPost = new Post({
            title,
            desc,
            content,
            username
        });
        await newPost.save();
        return new NextResponse("Post created successfully", { status: 201 })

    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}
