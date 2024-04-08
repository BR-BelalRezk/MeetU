"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!;
const apiKeySecret = process.env.STREAM_SECRET_KEY!;
export const tokenProvider = async () => {
  const user = await currentUser();
  if (!user) throw new Error("User is not logged in");
  if (!apiKey) throw new Error("Stream api key does not exist");
  if (!apiKeySecret) throw new Error("Stream api key secret does not exist");
  const streamClient = new StreamClient(apiKey, apiKeySecret);
  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issued = Math.floor(Date.now() / 1000) - 60;
  const token = streamClient.createToken(user.id, exp, issued);
  return token;
};
