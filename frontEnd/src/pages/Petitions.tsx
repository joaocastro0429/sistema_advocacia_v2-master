import { useState, useEffect } from "react";
import { Plus, Search, Pencil, Trash2, FileText, Printer } from "lucide-react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePetitions, PetitionInput } from "@/hooks/usePetitions";
import { useClients } from "@/hooks/useClients";
import { useAuth } from "@/hooks/useAuth";

// Helper function to translate PetitionType for display
const translatePetitionType = (type: string) => {
  switch (type) {
    case "INITIAL_PETITION":
      return "Petição Inicial";
    case "PETITION":
      return "Petição";
    case "RECOURSE":
      return "Recurso";
    case "EVIDENCE":
      return "Evidência";
    case "OTHER":
      return "Outros";
    default:
      return type;
  }
};

// Helper function to translate PetitionStatus for display
const translatePetitionStatus = (status: string) => {
  switch (status) {
    case "DRAFT":
      return "Rascunho";
    case "PENDING":
      return "Pendente";
    case "SUBMITTED":
      return "Submetida";
    case "APPROVED":
      return "Aprovada";
    case "REJECTED":
      return "Rejeitada";
    default:
      return status;
  }
};


export default function Petitions() {
  const { petitions, isLoading, createPetition, updatePetition, deletePetition } = usePetitions();
  const { clients } = useClients();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth() as any;
  
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: "",
    process_number: "",
    client_id: "",
    type: "INITIAL_PETITION",
    status: "DRAFT",
    enderecamento: "",
    reu: "",
    fatos: "",
    fundamentos: "",
    pedidos: "",
    valor_causa: null as number | null,
    local: "",
  });

  const filteredPetitions = petitions?.filter(
    (p) =>
      p.title?.toLowerCase().includes(search.toLowerCase()) ||
      p.process_number?.includes(search) ||
      p.client_name?.toLowerCase().includes(search.toLowerCase())
  ) || [];

  useEffect(() => {
    const openPetitionId = (location.state as { openPetitionId?: string } | null)?.openPetitionId;
    if (!openPetitionId || !petitions?.length) return;

    const petitionItem = petitions.find((p) => p.id === openPetitionId);
    if (petitionItem) {
      handleOpenDialog(petitionItem);
      // Limpa o state para não reabrir o modal ao navegar
      navigate("/petitions", { replace: true, state: {} });
    }
  }, [location.state, petitions, navigate]);

  const handleOpenDialog = (petition?: any) => {
    if (petition) {
      setEditingId(petition.id);
      const client = clients?.find(c => c.name === petition.client_name);
      setFormData({
        title: petition.title,
        process_number: petition.process_number || "",
        client_id: client?.id || "",
        type: petition.type,
        status: petition.status,
        // New fields with fallbacks
        enderecamento: (petition as any).enderecamento || "",
        reu: (petition as any).reu || "",
        fatos: petition.content_summary || (petition as any).fatos || "",
        fundamentos: (petition as any).fundamentos || "",
        pedidos: (petition as any).pedidos || "",
        valor_causa: (petition as any).valor_causa || null,
        local: (petition as any).local || "",
      });
    } else {
      setEditingId(null);
      setFormData({
        title: "",
        process_number: "",
        client_id: "",
        type: "INITIAL_PETITION",
        status: "DRAFT",
        enderecamento: "",
        reu: "",
        fatos: "",
        fundamentos: "",
        pedidos: "",
        valor_causa: null,
        local: "",
      });
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const client = clients?.find(c => c.id === formData.client_id);
      const submissionData = {
        ...formData,
        client_name: client?.name || "", // For compatibility
        content_summary: formData.fatos, // Map to old field
      };
      if (editingId) {
        await updatePetition.mutateAsync({ id: editingId, ...submissionData });
      } else {
        await createPetition.mutateAsync(submissionData);
      }
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Erro ao salvar petição:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Deseja excluir este rascunho de petição?")) {
      await deletePetition.mutateAsync(id);
    }
  };

  const handleGeneratePdf = (petition: any) => {
    // Lógica para gerar PDF. Requer a instalação de 'jspdf'. Ex: npm install jspdf
    const doc = new jsPDF();
    const client = clients?.find(c => c.id === petition.client_id || c.name === petition.client_name);
    const advogado = user;

    let y = 20;
    const addText = (text: string, size = 12, style = 'normal', indent = 20) => {
      if (!text || text.trim() === "") return;
      doc.setFontSize(size);
      doc.setFont('times', style);
      const splitText = doc.splitTextToSize(text, 170);
      doc.text(splitText, indent, y);
      y += (splitText.length * 5) + 5;
    };

    addText(petition.enderecamento || "Endereçamento não informado.", 12, 'bold');
    y += 10;

    const autorText = `Autor: ${client?.name || 'Cliente não informado'}, CPF/CNPJ nº ${client?.cpf_cnpj || 'não informado'}.`;
    const reuText = `Réu: ${petition.reu || 'Réu não informado.'}`;
    addText(autorText, 12, 'normal');
    addText(reuText, 12, 'normal');
    y += 10;

    addText(petition.title, 14, 'bold', 80);
    y += 5;

    addText("I - DOS FATOS", 12, 'bold');
    addText(petition.fatos || petition.content_summary || "Fatos não informados.", 12, 'normal');
    y += 5;

    addText("II - DO DIREITO", 12, 'bold');
    addText(petition.fundamentos || "Fundamentos não informados.", 12, 'normal');
    y += 5;

    addText("III - DOS PEDIDOS", 12, 'bold');
    addText(petition.pedidos || "Pedidos não informados.", 12, 'normal');
    y += 10;

    const valorCausa = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(petition.valor_causa || 0);
    addText(`Valor da causa: ${valorCausa}`, 12, 'normal');
    y += 15;

    addText("Termos em que, pede deferimento.", 12, 'normal');
    y += 10;
    const local = petition.local || 'Local não informado';
    const data = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
    addText(`${local}, ${data}.`, 12, 'normal');
    y += 15;
    addText(advogado?.name || "Nome do Advogado", 12, 'bold', 80);
    addText(`OAB/UF ${advogado?.oabNumber || "N/A"}`, 12, 'normal', 80);

    doc.save(`${petition.title.replace(/ /g, '_') || 'peticao'}.pdf`);
  };

  const handlePrint = (petition: any) => {
    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      // A lógica para montar o HTML para impressão seria similar à do PDF,
      // buscando os dados do 'petition', 'client' e 'user'.
      printWindow.document.write(`<html><head><title>Imprimir Petição</title></head><body><h1>${petition.title}</h1><p>Conteúdo da petição aqui...</p></body></html>`);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">Petições</h1>
          <p className="text-muted-foreground">Gerencie suas petições processuais e rascunhos</p>
        </div>
        <Button 
          onClick={() => handleOpenDialog()} 
          className="shadow-sm bg-[#1e293b] text-[#fbbf24] hover:bg-[#334155]"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nova Petição
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por título, processo ou cliente..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 bg-white shadow-sm"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center text-muted-foreground italic">Carregando petições...</div>
        ) : filteredPetitions.length === 0 ? (
          <div className="p-16 text-center">
            <FileText className="w-12 h-12 mx-auto text-slate-200 mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-1">Nenhuma petição encontrada</h3>
            <p className="text-muted-foreground text-sm mb-6">Comece redigindo sua primeira petição jurídica.</p>
            {!search && <Button onClick={() => handleOpenDialog()} variant="outline">Criar Petição</Button>}
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="font-bold text-slate-700">Título / Peça</TableHead>
                <TableHead className="font-bold text-slate-700">Processo / Cliente</TableHead>
                <TableHead className="font-bold text-slate-700">Tipo</TableHead>
                <TableHead className="font-bold text-slate-700">Status</TableHead>
                <TableHead className="w-[100px] text-right font-bold text-slate-700 px-6">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPetitions.map((petition) => (
                <TableRow key={petition.id} className="hover:bg-slate-50/50 transition-colors">
                  <TableCell className="font-semibold text-slate-900">{petition.title}</TableCell>
                  <TableCell className="text-sm">
                    <div className="flex flex-col">
                      <span className="text-slate-600 font-mono text-xs">{petition.process_number || "N/A"}</span>
                      <span className="text-slate-400 text-xs">{petition.client_name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                      {translatePetitionType(petition.type)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      translatePetitionStatus(petition.status) === "Aprovada" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                    }`}>
                      {translatePetitionStatus(petition.status)}
                    </span>
                  </TableCell>
                  <TableCell className="px-6">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" onClick={() => handleGeneratePdf(petition)} className="h-8 w-8 text-slate-400 hover:text-red-500" title="Gerar PDF">
                        <FileText className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handlePrint(petition)} className="h-8 w-8 text-slate-400 hover:text-blue-500" title="Imprimir">
                        <Printer className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleOpenDialog(petition)} className="h-8 w-8 text-slate-400 hover:text-primary">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(petition.id)} className="h-8 w-8 text-slate-400 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl border-none">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{editingId ? "Editar Petição" : "Nova Petição"}</DialogTitle>
            <DialogDescription>Preencha os dados básicos para gerar ou organizar sua peça jurídica.</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            <div className="space-y-4">
              
              {/* Título e Processo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="font-bold text-slate-700">Título da Peça *</Label>
                  <Input id="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="process" className="font-bold text-slate-700">Número do Processo</Label>
                  <Input id="process" value={formData.process_number || ""} onChange={(e) => setFormData({ ...formData, process_number: e.target.value })} />
                </div>
              </div>

              {/* Endereçamento */}
              <div className="space-y-2">
                <Label htmlFor="enderecamento" className="font-bold text-slate-700">Endereçamento</Label>
                <Input id="enderecamento" placeholder="Ex: EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA..." value={formData.enderecamento} onChange={(e) => setFormData({ ...formData, enderecamento: e.target.value })} />
              </div>

              {/* Partes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Autor (Cliente) *</Label>
                  <Select value={formData.client_id} onValueChange={(value) => setFormData({ ...formData, client_id: value })} required>
                    <SelectTrigger><SelectValue placeholder="Selecione o cliente" /></SelectTrigger>
                    <SelectContent>
                      {clients?.map((client) => (
                        <SelectItem key={client.id} value={client.id}>{client.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reu" className="font-bold text-slate-700">Réu *</Label>
                  <Input id="reu" placeholder="Nome completo do réu" value={formData.reu} onChange={(e) => setFormData({ ...formData, reu: e.target.value })} required />
                </div>
              </div>

              {/* Fatos */}
              <div className="space-y-2">
                <Label htmlFor="fatos" className="font-bold text-slate-700">Fatos</Label>
                <Textarea id="fatos" placeholder="Narração clara e cronológica do conflito..." value={formData.fatos} onChange={(e) => setFormData({ ...formData, fatos: e.target.value })} rows={5} />
              </div>

              {/* Fundamentos */}
              <div className="space-y-2">
                <Label htmlFor="fundamentos" className="font-bold text-slate-700">Fundamentos Jurídicos</Label>
                <Textarea id="fundamentos" placeholder="Explicação das leis, doutrinas e jurisprudências..." value={formData.fundamentos} onChange={(e) => setFormData({ ...formData, fundamentos: e.target.value })} rows={5} />
              </div>

              {/* Pedidos */}
              <div className="space-y-2">
                <Label htmlFor="pedidos" className="font-bold text-slate-700">Pedidos e Requerimentos</Label>
                <Textarea id="pedidos" placeholder="O que se espera do juiz (ex: indenização, citação do réu...)" value={formData.pedidos} onChange={(e) => setFormData({ ...formData, pedidos: e.target.value })} rows={5} />
              </div>

              {/* Valor da Causa e Local */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="valor_causa" className="font-bold text-slate-700">Valor da Causa (R$)</Label>
                  <Input id="valor_causa" type="number" placeholder="1000.00" value={formData.valor_causa ?? ""} onChange={(e) => setFormData({ ...formData, valor_causa: e.target.value ? parseFloat(e.target.value) : null })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="local" className="font-bold text-slate-700">Local do Fechamento</Label>
                  <Input id="local" placeholder="Ex: São Paulo" value={formData.local} onChange={(e) => setFormData({ ...formData, local: e.target.value })} />
                </div>
              </div>

              {/* Tipo e Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Tipo de Peça</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="INITIAL_PETITION">Petição Inicial</SelectItem>
                      <SelectItem value="PETITION">Petição</SelectItem>
                      <SelectItem value="RECOURSE">Recurso</SelectItem>
                      <SelectItem value="EVIDENCE">Evidência</SelectItem>
                      <SelectItem value="OTHER">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="font-bold text-slate-700">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DRAFT">Rascunho</SelectItem>
                      <SelectItem value="PENDING">Pendente</SelectItem>
                      <SelectItem value="SUBMITTED">Submetida</SelectItem>
                      <SelectItem value="APPROVED">Aprovada</SelectItem>
                      <SelectItem value="REJECTED">Rejeitada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <DialogFooter className="gap-2">
              <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" className="px-8 shadow-md bg-[#1e293b] text-[#fbbf24] hover:bg-slate-800">
                {editingId ? "Salvar Alterações" : "Criar Petição"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}