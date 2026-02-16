import { prisma } from '../../lib/prisma'
import bcrypt from 'bcrypt'

interface RegisterProps {
  email: string
  password: string
  name: string
  oabNumber: string
  specialty: string
}

export const Register = async ({
  email,
  password,
  name,
  oabNumber,
  specialty,
}: RegisterProps) => {
  const userExists = await prisma.user.findUnique({
    where: { email },
  })

  if (userExists) {
    throw new Error('User with this email already exists')
  }

  const lawyerExists = await prisma.lawyer.findUnique({
    where: { oabNumber },
  })

  if (lawyerExists) {
    throw new Error('Lawyer with this OAB number already exists')
  }

  const hashPassword = await bcrypt.hash(password, 10)

  // Use a transaction to ensure both user and lawyer are created, or neither.
  const result = await prisma.$transaction(async (tx) => {
    const newUser = await tx.user.create({
      data: {
        email,
        password: hashPassword,
        name,
        role: 'lawyer', // Assuming a 'lawyer' role exists
      },
    })

    const newLawyer = await tx.lawyer.create({
      data: {
        id: newUser.id, // Use the same ID as the user
        name,
        email,
        oabNumber,
        specialty,
      },
    })

    return { user: newUser, lawyer: newLawyer }
  })

  return {
    id: result.user.id,
    email: result.user.email,
    name: result.user.name,
  }
}