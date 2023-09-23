import { NextResponse } from "next/server";
import prisma from './../../../app/api/auth/[...nextauth]/lib/prisma'

export const GET = async () => {
  const comments = await prisma.comment.findMany()
  return NextResponse.json({
    message: "hello there",
  });
};
