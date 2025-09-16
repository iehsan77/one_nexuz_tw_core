"use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

// Encrypt the payload and create a signed JWT
export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

// Decrypt the JWT and return the payload
export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session", error);
  }
}

// Create a new session and store it in cookies
export async function createSession(data) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ ...data, expiresAt });

  // Get cookies and set the session cookie
  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only secure in production
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

// Update an existing session with new data
export async function updateSession(data) {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) return null;

  const payload = await decrypt(session);
  if (!payload) return null;

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const updatedSession = await encrypt({ ...payload, ...data, expiresAt });

  // Update the session cookie
  cookieStore.set("session", updatedSession, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only secure in production
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

// Delete the session cookie
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session", { path: "/" });
}

// Get the session from cookies and decrypt it
export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) return null;

  return await decrypt(session);
}
