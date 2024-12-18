import dotenv from 'dotenv'
dotenv.config()

export const clerkWebHook = async (req, res) => {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error("Webhook secret needed!");
        
    }
}