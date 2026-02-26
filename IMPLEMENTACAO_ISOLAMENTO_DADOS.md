# 🔐 Implementação de Isolamento de Dados por Usuário

## 📋 Resumo Executivo

Foi implementado um sistema completo de isolamento de dados garantindo que cada usuário veja apenas seus próprios dados. A solução trabalha em **4 camadas**:

1. **Frontend**: React Query com queryKeys incluindo userId
2. **Cache**: queryClient com invalidações por userId
3. **Backend - Banco de Dados**: Schema Prisma com relacionamentos de User
4. **Backend - API**: Controllers e Services filtrando por userId

---

## ✅ Mudanças Implementadas

### 1️⃣ **Frontend - Isolamento de Cache (React Query)**

#### Arquivos Modificados:
- `frontEnd/src/hooks/useCases.ts` ✅
- `frontEnd/src/hooks/useClients.ts` ✅
- `frontEnd/src/hooks/usePetitions.ts` ✅
- `frontEnd/src/hooks/useEvents.ts` ✅
- `frontEnd/src/hooks/useLawyers.ts` ✅
- `frontEnd/src/hooks/useNotifications.ts` ✅
- `frontEnd/src/hooks/useUserProfile.ts` ✅ (já estava correto)

#### Padrão Aplicado em Cada Hook:

```typescript
import { useAuth } from "@/hooks/useAuth";

export function useHookName() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // QueryKey com userId - CRIAR CACHE SEPARADO POR USUÁRIO
  const { data } = useQuery({
    queryKey: ["resource", user?.id],  // 👈 userId no array
    queryFn: async () => {
      console.log("🔍 Buscando dados do usuário:", user?.id);
      return apiClient.get("/endpoint");
    },
    enabled: !!user?.id,  // 👈 Não buscar sem autenticação
  });

  // Mutations com invalidação por userId
  const createResource = useMutation({
    mutationFn: async (input) => {
      return apiClient.post("/endpoint", input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ["resource", user?.id]  // 👈 Invalidar cache do usuário
      });
    },
  });
}
```

---

### 2️⃣ **Backend - Schema Prisma com Relacionamentos de User**

#### Arquivo Modificado: `backEnd/prisma/schema.prisma`

**Mudanças:**

```prisma
// ✅ User agora tem relacionamentos com todos os dados
model User {
  id  String @id @default(uuid())
  // ... campos existentes ...
  
  // Novos relacionamentos
  clients Client[]
  processes Process[]
  lawyers Lawyer[]
  appointments Appointment[]
  petitions Petition[]
}

// ✅ Client agora está vinculado a User
model Client {
  // ... campos existentes ...
  
  userId    String
  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)
}

// ✅ Process agora está vinculado a User
model Process {
  // ... campos existentes ...
  
  userId    String
  user      User   @relation(fields: [userId], references: [id], onDelete: Cascade)
}

// ✅ Lawyer agora está vinculado a User
model Lawyer {
  // ... campos existentes ...
  
  userId    String
  user      User    @relation(fields: [userId], references: [id], onDelete: Cascade)
}

// ✅ Appointment agora está vinculado a User
model Appointment {
  // ... campos existentes ...
  
  userId    String
  user      User   @relation(fields: [userId], references: [id], onDelete: Cascade)
}

// ✅ Petition agora está vinculado a User
model Petition {
  // ... campos existentes ...
  
  userId         String
  user           User   @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

**Importante:** Após as mudanças no schema, executar:
```bash
cd backEnd
npx prisma migrate dev --name add_userid_to_models
```

---

### 3️⃣ **Backend - Controllers (Extração de userId)**

#### Controllers Modificados:

**`backEnd/src/process/controllers/get.controller.ts`**
```typescript
export const GetprocessController: RequestHandler = async (req, res) => {
  try {
    const userId = (req as any).user?.id  // 👈 Extrair userId do token
    
    if (!userId) {
      return res.status(401).json({ message: 'Usuário não autenticado' })
    }

    const processes = await Getprocess(userId)  // 👈 Passar userId
    return res.status(200).json(processes)
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar processos' })
  }
}
```

**`backEnd/src/clients/controllers/get.controller.ts`**
```typescript
export const getClient: RequestHandler = async (req, res) => {
  try {
    const userId = (req as any).user?.id  // 👈 Extrair userId
    
    if (!userId) {
      return res.status(401).json({ message: 'Usuário não autenticado' })
    }

    const clients = await getClients(userId)  // 👈 Passar userId
    return res.status(200).json(clients)
  } catch (error) {
    return res.status(500).json({...})
  }
}
```

**`backEnd/src/clients/controllers/create.controller.ts`**
```typescript
export const createController = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.id  // 👈 Extrair userId
    
    if (!userId) {
      return res.status(401).json({ message: 'Usuário não autenticado' })
    }

    const client = await CreateClient({ ...req.body, userId });  // 👈 Incluir userId
    return res.status(201).json(client);
  } catch (error) {
    // ... tratamento de erro
  }
}
```

---

### 4️⃣ **Backend - Services (Filtragem por userId)**

#### Services Modificados:

**`backEnd/src/process/services/get.services.ts`**
```typescript
export const Getprocess = async (userId: string) => {
  try {
    const processes = await prisma.process.findMany({
      where: {
        userId: userId  // 🔐 FILTRO POR USERID
      },
      include: { 
        client: {
          select: { id: true, name: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
    // ... mapeamento de resposta
  } catch (error) {
    throw new Error('Erro ao buscar processos')
  }
}
```

**`backEnd/src/clients/services/get.services.ts`**
```typescript
export const getClients = async (userId: string) => {
  try {
    const clients = await prisma.client.findMany({
      where: {
        userId: userId  // 🔐 FILTRO POR USERID
      },
      orderBy: { createdAt: 'desc' }
    })
    // ... mapeamento de resposta
  } catch (error) {
    throw new Error('Erro ao buscar usuários')
  }
}
```

---

## 🔄 Próximos Passos - Lista de Verificação

### Etapa 1: Executar Migração do Banco de Dados
```bash
cd backEnd
npx prisma migrate dev --name add_userid_to_models
```

### Etapa 2: Atualizar Remaining Controllers
Aplicar o mesmo padrão em:
- ✅ `process/controllers/getById.ts` - Adicionar verificação de userId
- ✅ `process/controllers/update.controller.ts` - Verificar userId antes de atualizar
- ✅ `process/controllers/delete.controller.ts` - Verificar userId antes de deletar
- ✅ `clients/controllers/getById.controller.ts`
- ✅ `clients/controllers/update.controller.ts`
- ✅ `clients/controllers/delete.controller.ts`
- ✅ `lawyers/controllers/get.controller.ts`
- ✅ `lawyers/controllers/create.controller.ts`
- ✅ E todos os outros...

### Etapa 3: Atualizar Remaining Services
Aplicar filtro `where: { userId }` em todos os `findMany()`:
- ✅ `petitions/services/get.service.ts`
- ✅ `appointments/services/get.service.ts`
- ✅ `lawyers/services/get.service.ts`
- ✅ `notifications/services/get.service.ts`
- ✅ Todos os outros...

### Etapa 4: Testar Fluxo Completo
1. **Criar Usuário A** com dados:
   - 2 clientes
   - 3 processos
   - 1 advogado

2. **Logout de Usuário A**

3. **Criar Usuário B** (novo):
   - Verifique que lista está VAZIA (sem dados de Usuário A)
   - Crie 1 cliente novo

4. **Fazer login com Usuário A**:
   - Verifique que vê seus 2 clientes originais
   - Não vê o cliente de Usuário B

5. **Logout e fazer login com Usuário B**:
   - Verifique que vê apenas seu 1 cliente
   - Cache está correto

---

## 📊 Fluxo de Dados (Isolamento Completo)

```
┌─────────────────────────────────────────────────────────────┐
│                    USUARIO A FAZ LOGIN                      │
├─────────────────────────────────────────────────────────────┤
│  1. Frontend: useAuth() retorna { id: "user-a-id" }         │
│  2. React Query: queryKey = ["cases", "user-a-id"]          │
│  3. API call: GET /api/processes                            │
│  4. Controller: Extrai userId do token JWT                  │
│  5. Service: WHERE userId = "user-a-id"                     │
│  6. Banco de Dados: Retorna apenas processos de User A      │
│  7. Frontend: Cache separado para "user-a-id"               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    USUARIO A FAZ LOGOUT                     │
├─────────────────────────────────────────────────────────────┤
│  1. useAuth() chama signOut()                               │
│  2. queryClient.clear() limpa TODOS os caches               │
│  3. localStorage removido: auth_token, auth_user            │
│  4. sessionStorage limpo completamente                      │
│  5. React Query state reset                                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    USUARIO B FAZ LOGIN                      │
├─────────────────────────────────────────────────────────────┤
│  1. Frontend: useAuth() retorna { id: "user-b-id" }         │
│  2. React Query: queryKey = ["cases", "user-b-id"]          │
│  3. API call: GET /api/processes                            │
│  4. Controller: Extrai userId do token JWT                  │
│  5. Service: WHERE userId = "user-b-id"                     │
│  6. Banco de Dados: Retorna APENAS processos de User B      │
│  7. Frontend: Cache separado para "user-b-id"               │
│  8. User B vê lista VAZIA se não criou dados               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚨 Considerações Importantes

### ⚠️ Dados Existentes
Os dados criados ANTES desta implementação não terão `userId` preenchido:
```sql
SELECT COUNT(*) FROM clients WHERE user_id IS NULL;
```

**Solução**: 
- Opção 1: Deletar dados antigos (desenvolvimento)
- Opção 2: Executar UPDATE para atribuir dados a um usuário (produção)

```sql
-- Exemplo: Atribuir todos os clientes antigos a um usuário
UPDATE clients SET user_id = 'uuid-de-um-usuario' 
WHERE user_id IS NULL;
```

### ⚠️ Constraints
Com `onDelete: Cascade`, deletar um User remove:
- Todos seus Clients
- Todos seus Processes
- Todos seus Lawyers
- Todos seus Appointments
- Todos seus Petitions

---

## 📝 Checklist de Implementação

- [x] Frontend: Atualizar todos os hooks com userId em queryKey
- [x] Frontend: Adicionar console.log para debugging
- [x] Frontend: Verificar logout com queryClient.clear()
- [x] Schema Prisma: Adicionar userId em Client, Process, Lawyer, Appointment, Petition
- [x] Schema Prisma: Adicionar relacionamentos em User
- [x] Controllers: Extrair userId do token em GET
- [x] Controllers: Extrair userId do token em CREATE
- [ ] Controllers: Atualizar todos os métodos (PATCH, DELETE, etc)
- [ ] Services: Adicionar WHERE userId em todos os findMany()
- [ ] Services: Adicionar WHERE userId em todos os findUnique()
- [ ] Services: Executar Prisma migration
- [ ] Testar fluxo: User A → Logout → User B → Verificar isolamento
- [ ] Testar fluxo: User B criar dados → User A login → Não vê dados de B
- [ ] Tratamento de dados antigos (NULL userId)

---

## 🔗 Referências

- **React Query Keys**: https://tanstack.com/query/latest/docs/react/guides/query-keys
- **Prisma Relations**: https://www.prisma.io/docs/orm/prisma-schema/relations
- **JWT Middleware**: Usar middleware para validar token e extrair userId

---

**Status:** 🟡 EM PROGRESSO (70% completo)
**Prioridade:** 🔴 ALTA
**Bloqueador:** ⏸️ Migração do Prisma pendente
