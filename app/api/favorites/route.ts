import clientPromise from "@/db/mongodb";
import { ObjectId } from "mongodb";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { FavData } from "@/lib/types";
import { JOSEError, JWTClaimValidationFailed, JWTExpired } from "jose/errors";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function GET(req: NextRequest) {
  return NextResponse.json({ error: "Database not available" }, { status: 503 });
}

export async function PUT(req: NextRequest) {
  return NextResponse.json({ error: "Database not available" }, { status: 503 });
}
