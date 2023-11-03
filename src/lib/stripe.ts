import { env } from "process";
import Stripe from "stripe";
const apiKey = env.STRIPE_API_KEY_SECRET as string
export const stripe = new Stripe(apiKey, {
  apiVersion: "2023-10-16",
})