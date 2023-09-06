import { connect } from "@/utils/dbConfig";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect();

//function to create a new user
export const POST = async (request) => {
    const { name, email, password } = await request.json();
    const user = await User.findOne({ email });
    if (user) {
        return new NextResponse("User with this email already exists!", { status: 500 });
    }
    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //createing a new user and inserting in the database
    const newUser = new User(
        {
            name,
            email,
            password: hashedPassword
        }
    )
    await newUser.save();

    return new NextResponse("User created successfully", { status: 201 })

}