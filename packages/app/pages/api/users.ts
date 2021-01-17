import {prisma} from '@feedback-loop-inc/database'

export default async function handler(req, res) {
    const users = await prisma.user.findMany()

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(users))
}