import { prisma } from '@/app/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export async function POST(req: NextApiRequest, res:NextApiResponse) {
  const {name, username} = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    }
  })

  if (userExists) {
    return res.status(400).json({
      message: 'Username already taken.'
    })
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  return res.status(201).json(user)
}