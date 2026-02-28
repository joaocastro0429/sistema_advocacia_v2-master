import { RequestHandler } from "express"
import { ForgotPasswordService } from "../services/forgot-password.service"

export const forgotPasswordController: RequestHandler = async (req, res) => {
  try {
    const { email, oabNumber, newPassword } = req.body

    const result = await ForgotPasswordService({
      email,
      oabNumber,
      newPassword,
    })

    return res.status(200).json(result)
  } catch (error: any) {
    const message = error.message || "Erro ao redefinir senha."
    const normalizedMessage = String(message).toLowerCase()

    if (
      normalizedMessage.includes("obrigatorios") ||
      normalizedMessage.includes("senha") ||
      normalizedMessage.includes("maiuscula") ||
      normalizedMessage.includes("minuscula") ||
      normalizedMessage.includes("numero") ||
      normalizedMessage.includes("caractere")
    ) {
      return res.status(400).json({ message })
    }

    if (normalizedMessage.includes("validar os dados")) {
      return res.status(404).json({ message })
    }

    return res.status(500).json({ message })
  }
}
