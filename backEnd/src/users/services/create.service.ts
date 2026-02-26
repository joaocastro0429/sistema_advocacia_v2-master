import { prisma } from '../../lib/prisma';
import bcrypt from 'bcrypt';

interface CreateUserProps {
    name: string;
    email: string;
    password: string;
}

export const createUserService = async ({ name, email, password}: CreateUserProps) => {
    try {
        console.log('📝 Iniciando criação de novo usuário:', { name, email });
        
        // Validar se email já existe
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            console.log('❌ Email já cadastrado:', email);
            throw new Error('Este email já está cadastrado');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        console.log('✅ Usuário criado com sucesso:', { id: user.id, email: user.email, name: user.name });
        return user;
    } catch (error) {
        console.error('❌ Erro ao criar usuário:', error);
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Error creating user');
    }
};
