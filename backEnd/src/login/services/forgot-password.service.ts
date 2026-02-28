import bcrypt from "bcrypt"
import { prisma } from "../../lib/prisma"
import { validateStrongPassword } from "../../lib/password-policy"

interface ForgotPasswordData {
  email: string
  oabNumber: string
  newPassword: string
}

const getNormalizedEmail = (email: string) => email.trim().toLowerCase()

export const ForgotPasswordService = async (data: ForgotPasswordData) => {
  const email = getNormalizedEmail(data.email || "")
  const oabNumber = (data.oabNumber || "").trim()
  const newPassword = data.newPassword || ""

  if (!email || !oabNumber || !newPassword) {
    throw new Error("Email, OAB e nova senha sao obrigatorios.")
  }

  const passwordError = validateStrongPassword(newPassword)
  if (passwordError) {
    throw new Error(passwordError)
  }

  const user = await prisma.user.findFirst({
    where: {
      email,
      oab: oabNumber,
    },
    select: {
      id: true,
    },
  })

  if (!user) {
    throw new Error("Nao foi possivel validar os dados informados.")
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10)

  await prisma.user.update({
    where: { id: user.id },
    data: { password: hashedPassword },
  })

  return { message: "Senha redefinida com sucesso." }
}
