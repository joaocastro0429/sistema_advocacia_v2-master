# ⚡ Guia Rápido - Próximos Passos

## 1️⃣ EXECUTAR AGORA (5 min)

### Migração do Prisma
```bash
cd backEnd
npx prisma migrate dev --name add_userid_to_models
```

**Esperado:**
- Mensagem: "✓ Generated Prisma Client"
- Novas colunas: `user_id` em clients, processes, lawyers, appointments, petitions
- Arquivo gerado: `backEnd/prisma/migrations/[timestamp]_add_userid_to_models/`

**Se houver erro:**
- Verifique se PostgreSQL está rodando
- Verifique conexão em `.env`
- Tente: `npx prisma db push` (forçar sync)

---

## 2️⃣ PADRÃO PARA COPIAR/COLAR (5-10 min cada arquivo)

### Para TODOS os Controllers de GET/READ

**Antes:**
```typescript
export const getController: RequestHandler = async (req, res) => {
  try {
    const data = await GetService();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Erro' });
  }
}
```

**Depois:**
```typescript
export const getController: RequestHandler = async (req, res) => {
  try {
    const userId = (req as any).user?.id  // ← ADICIONE ESTA LINHA
    
    if (!userId) {  // ← ADICIONE ESTE BLOCO
      return res.status(401).json({ message: 'Usuário não autenticado' })
    }

    const data = await GetService(userId)  // ← PASSE userId
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Erro' });
  }
}
```

### Para TODOS os Services

**Antes:**
```typescript
export const GetService = async () => {
  const data = await prisma.model.findMany({
    // ...
  });
}
```

**Depois:**
```typescript
export const GetService = async (userId: string) => {  // ← ADICIONE PARAMETRO
  const data = await prisma.model.findMany({
    where: {  // ← ADICIONE ESTE BLOCO
      userId: userId
    },
    // ...
  });
}
```

---

## 3️⃣ ARQUIVOS A ATUALIZAR (Copiar padrão acima)

### Process
- [ ] `controllers/getById.ts` - Ler 1 processo
- [ ] `controllers/update.controller.ts` - Atualizar processo
- [ ] `controllers/delete.controller.ts` - Deletar processo
- [ ] `services/getById.service.ts` - Ler 1 processo
- [ ] `services/update.service.ts` - Atualizar processo
- [ ] `services/delete.service.ts` - Deletar processo

### Clients
- [ ] `controllers/getById.controller.ts` - Ler 1 cliente
- [ ] `controllers/update.controller.ts` - Atualizar cliente
- [ ] `controllers/delete.controller.ts` - Deletar cliente
- [ ] `services/getById.service.ts` - Ler 1 cliente
- [ ] `services/update.service.ts` - Atualizar cliente
- [ ] `services/delete.service.ts` - Deletar cliente

### Lawyers
- [ ] `controllers/get.controller.ts` - Listar advogados
- [ ] `controllers/create.controller.ts` - Criar advogado
- [ ] `controllers/getById.controller.ts` - Ler 1 advogado
- [ ] `controllers/update.controller.ts` - Atualizar advogado
- [ ] `controllers/delete.controller.ts` - Deletar advogado
- [ ] `services/get.service.ts` - Listar advogados
- [ ] `services/create.service.ts` - Criar advogado (adicionar userId)
- [ ] (... e assim por diante)

### Petitions, Appointments, etc
- [ ] (Mesmo padrão)

---

## 4️⃣ VALIDAÇÃO (5 min)

### Após completar, fazer este teste:

```bash
# Terminal 1: Rodar servidor
cd backEnd
npm run dev

# Terminal 2: Testar APIs
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"User A", "email":"a@test.com", "password":"123456"}'

# Resposta esperada: { id, token, ... }

# Guardar o token JWT da resposta, depois:
TOKEN_A="eyJ..."  # Colar token aqui

# Criar cliente com User A
curl -X POST http://localhost:3000/api/clients \
  -H "Authorization: Bearer $TOKEN_A" \
  -H "Content-Type: application/json" \
  -d '{"name":"Cliente A", "email":"client-a@test.com"}'

# Listar clientes (deve retornar o cliente que criou)
curl -X GET http://localhost:3000/api/clients \
  -H "Authorization: Bearer $TOKEN_A"

# Resposta esperada:
# [
#   {
#     "id": "...",
#     "name": "Cliente A",
#     "email": "client-a@test.com",
#     "userId": "user-a-id"  ← Verificar que userId está aqui
#   }
# ]
```

### Depois, registrar User B e testar isolamento:

```bash
# Registrar User B
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"User B", "email":"b@test.com", "password":"123456"}'

# Guardar token de User B
TOKEN_B="eyJ..."

# Listar clientes com User B (deve estar VAZIO)
curl -X GET http://localhost:3000/api/clients \
  -H "Authorization: Bearer $TOKEN_B"

# Resposta esperada: [] (array vazio)

# ✅ SE RETORNAR VAZIO = ISOLAMENTO FUNCIONANDO! ✅
```

---

## 5️⃣ FRONTEND - NÃO PRECISA ALTERAR

A lógica de frontend com React Query já está pronta e configurada!

Apenas verifique:
- ✅ Abra console do navegador (F12)
- ✅ Faça login como User A
- ✅ Veja logs: "📋 Buscando processos do usuário: user-a-id"
- ✅ Faça logout
- ✅ Faça login como User B
- ✅ Veja logs: "📋 Buscando processos do usuário: user-b-id"

---

## 6️⃣ CHECKLIST FINAL

- [ ] Migração Prisma executada
- [ ] 6 Controllers Process atualizados
- [ ] 6 Controllers Clients atualizados
- [ ] 5 Controllers Lawyers atualizados
- [ ] 5 Controllers Petitions atualizados
- [ ] 5 Controllers Appointments atualizados
- [ ] 6 Services Process atualizados
- [ ] 6 Services Clients atualizados
- [ ] 5 Services Lawyers atualizados
- [ ] 5 Services Petitions atualizados
- [ ] 5 Services Appointments atualizados
- [ ] Testar fluxo: User A → Create → Logout → User B → Verify Empty
- [ ] Testar fluxo: User B → Create → Verify in List → User A → Verify Not Visible

---

## ⏱️ Tempo Estimado Total

| Etapa | Tempo |
|-------|-------|
| 1. Migração Prisma | 5 min |
| 2. Atualizar Controllers | 20 min |
| 3. Atualizar Services | 20 min |
| 4. Testes Manual | 10 min |
| **TOTAL** | **~55 min** |

---

## 🆘 Se Algo Der Errado

### Erro: "P0002: Migration failed"
```bash
# Verificar status
npx prisma migrate status

# Reset dev (apaga tudo, cuidado!)
npx prisma migrate reset --force
```

### Erro: "Invalid JWT"
- Verifique se middleware de autenticação está setando `req.user`
- Verifique se JWT_SECRET está igual em criação e validação
- Verificar se token está sendo enviado em header: `Authorization: Bearer <token>`

### Erro: "userId não encontrado"
- Verificar se token contém `id` no payload
- Usar: `console.log((req as any).user)` para debugar

---

## 📞 Próximas Ações

Após concluir:
1. Commit no git com mensagem: "feat: add userId isolation to all endpoints"
2. Testar em staging se disponível
3. Deploy para produção
4. Monitorar logs de erro

---

**Tempo estimado para ler este guia:** 3 min  
**Tempo estimado para executar:** 1 hora  
**Dificuldade:** ⭐⭐☆☆☆ (Fácil - Copiar/Colar padrão)
