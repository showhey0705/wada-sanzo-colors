import {
  createOrGetUser,
  exchangeGoogleAuthCode,
  verifyAppleIdToken,
  verifyGoogleIdToken,
} from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function POST(req: NextRequest) {
  try {
    return NextResponse.json(
      { error: "Authentication not available - database required" },
      { status: 503 }
    );
  } catch (err) {
    console.error("Auth failed:", err);

    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}
