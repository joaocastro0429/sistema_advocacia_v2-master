import { prisma } from '../../lib/prisma'

export const getClients = async () => {
  try {
    const clients = await prisma.client.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    // Garantir que cpf_cnpj seja preenchido se cpf ou cnpj existir
    return clients.map(client => ({
      ...client,
      cpf_cnpj: client.cpf_cnpj || client.cpf || client.cnpj || null
    }))
  } catch (error) {
    throw new Error('Erro ao buscar usuários')
  }
}

