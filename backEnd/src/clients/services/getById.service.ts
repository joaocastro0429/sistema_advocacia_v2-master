import{prisma} from '../../lib/prisma'

export const getClientById = async (id: string) => {
    const client = await prisma.client.findUnique({
      where: { id }
    })
    
    if (!client) {
      return null
    }
    
    // Garantir que cpf_cnpj seja preenchido se cpf ou cnpj existir
    return {
      ...client,
      cpf_cnpj: client.cpf_cnpj || client.cpf || client.cnpj || null
    }
  }