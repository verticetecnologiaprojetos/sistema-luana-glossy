'use client';

import React, { useState, useMemo } from 'react';
import {
  ShoppingBag,
  Sparkles,
  Layers,
  Users,
  Camera,
  Gift,
  FolderOpen,
  Settings,
  Search,
  Plus,
  Send,
  Bot,
  User,
  CheckCircle2,
  Clock,
  AlertCircle,
  Truck,
  TrendingUp,
  Tag,
  DollarSign,
  Share2,
  ExternalLink,
  RefreshCw,
  PhoneCall,
  Key,
  ShieldCheck,
  Award,
} from 'lucide-react';
import {
  INITIAL_INVENTORY,
  INITIAL_LEADS,
  INITIAL_POSTS,
  CATALOG_LINKS,
} from '@/data/initialData';
import {
  InventoryItem,
  Lead,
  ContentPost,
  ChatMessage,
  ItemCategory,
  ItemSize,
  PostType,
} from '@/types';

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'inventory' | 'crm' | 'agent' | 'content' | 'loyalty' | 'catalogs' | 'settings'
  >('overview');

  // Estados de dados
  const [inventory, setInventory] = useState<InventoryItem[]>(INITIAL_INVENTORY);
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [posts, setPosts] = useState<ContentPost[]>(INITIAL_POSTS);

  // Filtros de Estoque
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [selectedSize, setSelectedSize] = useState<string>('Todos');
  const [showBlackFridayOnly, setShowBlackFridayOnly] = useState(false);

  // Chat do Agente IA
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'glossy_ia',
      text: 'Oii! Seja muito bem-vinda à Glossy Uberlândia! ✨🤎 Eu sou a Glossy, assistente virtual da Luana (@glossyluanaudia).\n\nTrabalhamos com moda fitness premium com cós alto que NÃO enrola e tecido acetinado com ZERO transparência.\n\nQual peça você procura hoje e qual o seu tamanho (P, M, G)? 🛍️',
      timestamp: '14:30',
    },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [openRouterKey, setOpenRouterKey] = useState('');

  // Criador de Post
  const [selectedPostType, setSelectedPostType] = useState<PostType>('comercial');
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [customCaption, setCustomCaption] = useState(INITIAL_POSTS[0].caption);
  const [syncToVipToggle, setSyncToVipToggle] = useState(true);
  const [publishSuccessMessage, setPublishSuccessMessage] = useState<string | null>(null);

  // Sorteio
  const [raffleWinner, setRaffleWinner] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  // Modais simples
  const [condicionalModalItem, setCondicionalModalItem] = useState<InventoryItem | null>(null);
  const [condicionalClientName, setCondicionalClientName] = useState('');
  const [condicionalNeighborhood, setCondicionalNeighborhood] = useState('Morada da Colina');

  // Estatísticas calculadas
  const stats = useMemo(() => {
    const totalPieces = inventory.reduce((acc, item) => acc + item.quantity, 0);
    const totalValue = inventory.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const bfPieces = inventory
      .filter((item) => item.isBlackFriday)
      .reduce((acc, item) => acc + item.quantity, 0);
    const lowStockItems = inventory.filter((item) => item.quantity <= 1).length;
    return { totalPieces, totalValue, bfPieces, lowStockItems };
  }, [inventory]);

  // Filtro de inventário
  const filteredInventory = useMemo(() => {
    return inventory.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
      const matchesSize = selectedSize === 'Todos' || item.size === selectedSize;
      const matchesBF = !showBlackFridayOnly || item.isBlackFriday;
      return matchesSearch && matchesCategory && matchesSize && matchesBF;
    });
  }, [inventory, searchTerm, selectedCategory, selectedSize, showBlackFridayOnly]);

  // Ações de Estoque
  const handleQuantityChange = (id: string, delta: number) => {
    setInventory((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRegisterSale = (item: InventoryItem) => {
    if (item.quantity <= 0) return;
    handleQuantityChange(item.id, -1);
    const newLead: Lead = {
      id: `lead-venda-${Date.now()}`,
      name: 'Cliente Balcão / WhatsApp',
      phone: '(34) 99300-2424',
      neighborhood: 'Uberlândia',
      city: 'Uberlândia',
      sizeInterest: item.size,
      status: 'venda_concluida',
      notes: `Venda direta registrada: ${item.name} (${item.color} - ${item.size}).`,
      lastContact: 'Agora',
      cartItems: [`${item.name} ${item.color}`],
      totalValue: item.price,
    };
    setLeads((prev) => [newLead, ...prev]);
  };

  const handleConfirmCondicional = () => {
    if (!condicionalModalItem || condicionalModalItem.quantity <= 0) return;
    handleQuantityChange(condicionalModalItem.id, -1);
    const newLead: Lead = {
      id: `cond-${Date.now()}`,
      name: condicionalClientName || 'Cliente Condicional',
      phone: '(34) 99300-2424',
      neighborhood: condicionalNeighborhood,
      city: 'Uberlândia',
      sizeInterest: condicionalModalItem.size,
      status: 'condicional_enviado',
      notes: `Malinha condicional com ${condicionalModalItem.name} (${condicionalModalItem.color} - ${condicionalModalItem.size}) enviada para ${condicionalNeighborhood}.`,
      lastContact: 'Agora',
      cartItems: [`${condicionalModalItem.name} ${condicionalModalItem.color}`],
      totalValue: condicionalModalItem.price,
    };
    setLeads((prev) => [newLead, ...prev]);
    setCondicionalModalItem(null);
    setCondicionalClientName('');
  };

  // Enviar mensagem no chat da IA
  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || chatInput;
    if (!textToSend.trim() || isChatLoading) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'cliente',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatMessages((prev) => [...prev, userMsg]);
    if (!customText) setChatInput('');
    setIsChatLoading(true);

    try {
      const res = await fetch('/api/agent/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: chatMessages,
          apiKey: openRouterKey,
        }),
      });
      const data = await res.json();

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'glossy_ia',
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isHandoff: data.isHandoff,
        handoffData: data.handoffData,
      };
      setChatMessages((prev) => [...prev, aiMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'glossy_ia',
        text: 'Desculpe, ocorreu uma instabilidade rápida. Pode repetir, por favor? ✨',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setChatMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Publicar post
  const handlePublishPost = async () => {
    setPublishSuccessMessage(null);
    try {
      const res = await fetch('/api/instagram/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `Post ${selectedPostType.toUpperCase()}`,
          caption: customCaption,
          hashtags: ['#GlossyUberlandia', '#ModaFitness', '#RevendedoraOficial'],
          type: selectedPostType,
          syncToVip: syncToVipToggle,
        }),
      });
      const data = await res.json();
      setPublishSuccessMessage(data.message);

      const newPost: ContentPost = {
        id: `post-${Date.now()}`,
        title: `Post ${selectedPostType.toUpperCase()}`,
        type: selectedPostType,
        productName: inventory[selectedProductIndex]?.name || 'Peça Glossy',
        productColor: inventory[selectedProductIndex]?.color || 'Cores',
        price: inventory[selectedProductIndex]?.price,
        caption: customCaption,
        hashtags: ['#GlossyUberlandia', '#ModaFitness'],
        status: 'publicado',
        syncToVip: syncToVipToggle,
      };
      setPosts((prev) => [newPost, ...prev]);
    } catch (err) {
      console.error(err);
    }
  };

  // Girar Sorteio
  const handleSpinRaffle = () => {
    setIsSpinning(true);
    setRaffleWinner(null);
    setTimeout(() => {
      const candidates = [
        'Camila Alencar (Morada da Colina)',
        'Dra. Fernanda Resende (Granja Marileusa)',
        'Patrícia Borges (Santa Mônica)',
        'Juliana Castro (Jardim Karaíba)',
        'Renata Silveira (Altamira)',
        'Mariana Freitas (Centro Uberlândia)',
      ];
      const winner = candidates[Math.floor(Math.random() * candidates.length)];
      setRaffleWinner(winner);
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Topbar Luxury */}
      <header className="border-b border-rose-950/40 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-600 via-rose-500 to-amber-300 p-0.5 shadow-lg shadow-rose-950/50">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-serif font-black text-xl tracking-wider text-rose-300">G</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-rose-200 via-rose-300 to-amber-200 bg-clip-text text-transparent">
                  GLOSSY LUANA
                </h1>
                <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                  Uberlândia
                </span>
              </div>
              <p className="text-xs text-slate-400">Sistema Centralizado de Gestão, CRM & Automação IA</p>
            </div>
          </div>

          {/* Status Pills */}
          <div className="hidden lg:flex items-center space-x-3 text-xs">
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>WhatsApp Comercial: (34) 99300-2424</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Instagram: @glossyluanaudia (Pendente senha)</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
              <Bot className="w-3.5 h-3.5" />
              <span>Glossy IA: Ativa (Simulador / OpenRouter)</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'overview', label: 'Visão Geral', icon: TrendingUp },
            { id: 'inventory', label: 'Estoque Real', icon: Layers, badge: `${stats.totalPieces} pcs` },
            { id: 'crm', label: 'CRM & Pedidos', icon: Users, badge: `${leads.length}` },
            { id: 'agent', label: 'Agente IA WhatsApp', icon: Bot, highlight: true },
            { id: 'content', label: 'Criador Instagram & VIP', icon: Camera },
            { id: 'loyalty', label: 'Clube VIP & Sorteios', icon: Gift },
            { id: 'catalogs', label: 'Catálogos & Drive', icon: FolderOpen },
            { id: 'settings', label: 'Integrações & Homologação', icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-950/50'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${tab.highlight && !isActive ? 'text-rose-400' : ''}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`ml-1.5 px-1.5 py-0.5 text-[10px] font-semibold rounded-full ${
                      isActive ? 'bg-rose-700 text-rose-100' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* TAB 1: VISÃO GERAL */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Total de Peças em Estoque</p>
                    <p className="text-3xl font-extrabold text-white mt-2">{stats.totalPieces}</p>
                    <p className="text-xs text-rose-400 mt-1">Físico em Uberlândia</p>
                  </div>
                  <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400">
                    <Layers className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Valor Estimado do Estoque</p>
                    <p className="text-3xl font-extrabold text-white mt-2">
                      R$ {stats.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                    <p className="text-xs text-emerald-400 mt-1">Preço de Venda Final</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <DollarSign className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Lote Black Friday / Promoção</p>
                    <p className="text-3xl font-extrabold text-amber-300 mt-2">{stats.bfPieces} peças</p>
                    <p className="text-xs text-amber-400 mt-1">Prontas para Queima</p>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                    <Tag className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-medium text-slate-400">Atendimentos no Funil CRM</p>
                    <p className="text-3xl font-extrabold text-white mt-2">{leads.length}</p>
                    <p className="text-xs text-slate-400 mt-1">Clientes ativas em Uberlândia</p>
                  </div>
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions & Reposição Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-slate-900 border border-rose-900/30 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-rose-400" />
                  <h3 className="text-base font-bold text-white">Próximo Pedido Quinzenal de Goiânia</h3>
                </div>
                <p className="text-xs text-slate-400 max-w-2xl">
                  {stats.lowStockItems} itens estão com apenas 1 peça em estoque. Use o sistema para registrar pedidos de reposição rápida das cores permanentes (Café, Cookie, Preta e Acrópole) sem risco de desabastecimento.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveTab('inventory')}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-rose-600 hover:bg-rose-500 text-white transition-all shadow-md shadow-rose-950/40"
                >
                  Conferir Peças em Alerta
                </button>
                <button
                  onClick={() => setActiveTab('agent')}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-rose-300 border border-rose-500/20 transition-all"
                >
                  Testar Agente WhatsApp
                </button>
              </div>
            </div>

            {/* Grid: Leads Recentes e Postagens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card Leads Recentes */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <Users className="w-4 h-4 text-rose-400" />
                    <span>Últimos Atendimentos & Condicionais</span>
                  </h4>
                  <button
                    onClick={() => setActiveTab('crm')}
                    className="text-xs text-rose-400 hover:underline"
                  >
                    Ver todos no CRM →
                  </button>
                </div>
                <div className="space-y-3">
                  {leads.slice(0, 3).map((lead) => (
                    <div
                      key={lead.id}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="text-xs font-bold text-slate-200">{lead.name}</p>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                              lead.status === 'condicional_enviado'
                                ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                                : lead.status === 'venda_concluida'
                                ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {lead.status === 'condicional_enviado'
                              ? 'Condicional Enviado'
                              : lead.status === 'venda_concluida'
                              ? 'Venda Concluída'
                              : 'Em Atendimento'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">
                          {lead.neighborhood} • Tamanho {lead.sizeInterest}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-rose-300">
                          R$ {lead.totalValue?.toFixed(2) || '0.00'}
                        </p>
                        <p className="text-[10px] text-slate-500">{lead.lastContact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Publicações Ativas */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <Camera className="w-4 h-4 text-rose-400" />
                    <span>Fluxo de Conteúdo para Redes Sociais</span>
                  </h4>
                  <button
                    onClick={() => setActiveTab('content')}
                    className="text-xs text-rose-400 hover:underline"
                  >
                    Novo Post com IA →
                  </button>
                </div>
                <div className="space-y-3">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between"
                    >
                      <div className="max-w-[70%]">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-wider ${
                              post.type === 'comercial'
                                ? 'bg-emerald-500/10 text-emerald-400'
                                : post.type === 'lifestyle'
                                ? 'bg-amber-500/10 text-amber-400'
                                : 'bg-rose-500/10 text-rose-400'
                            }`}
                          >
                            {post.type}
                          </span>
                          <p className="text-xs font-semibold text-slate-200 truncate">{post.title}</p>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-1">{post.caption}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {post.status === 'publicado' ? 'Publicado' : 'Pronto'}
                        </span>
                        {post.syncToVip && (
                          <p className="text-[10px] text-rose-300 mt-1">✓ Sincronizado VIP</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CONTROLE DE ESTOQUE REAL */}
        {activeTab === 'inventory' && (
          <div className="space-y-6">
            {/* Header com Filtros */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center space-x-2">
                    <Layers className="w-5 h-5 text-rose-400" />
                    <span>Inventário Físico Completo — Uberlândia</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Controle de peças em tempo real: Leggings, Tops, Croppeds, Bermudas, T-Shirts, Regatas e Macacões.
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Buscar peça, cor ou modelo..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 w-64"
                    />
                  </div>
                </div>
              </div>

              {/* Filtros em linha */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/60">
                <span className="text-xs font-medium text-slate-400 mr-2">Categoria:</span>
                {[
                  'Todas',
                  'Leggings',
                  'Tops',
                  'Croppeds',
                  'Bermudas e Shorts',
                  'T-Shirts',
                  'Regatas',
                  'Macacões e Conjuntos',
                ].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-rose-500 text-white'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}

                <span className="text-xs font-medium text-slate-400 ml-4 mr-2">Tamanho:</span>
                {['Todos', 'PP', 'P', 'M', 'G', 'GG', 'Único'].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      selectedSize === sz
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {sz}
                  </button>
                ))}

                <button
                  onClick={() => setShowBlackFridayOnly(!showBlackFridayOnly)}
                  className={`ml-auto px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                    showBlackFridayOnly
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-slate-950 text-amber-400 border border-amber-500/30'
                  }`}
                >
                  <Tag className="w-3.5 h-3.5" />
                  <span>Filtrar Black Friday ({stats.bfPieces})</span>
                </button>
              </div>
            </div>

            {/* Tabela de Estoque */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4">Peça / Modelo</th>
                      <th className="py-3 px-4">Categoria</th>
                      <th className="py-3 px-4">Tamanho</th>
                      <th className="py-3 px-4">Cor</th>
                      <th className="py-3 px-4 text-center">Quantidade</th>
                      <th className="py-3 px-4">Preço Venda</th>
                      <th className="py-3 px-4">Status / Destaque</th>
                      <th className="py-3 px-4 text-right">Ações Rápidas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredInventory.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-4 font-semibold text-white">
                          {item.name}
                          {item.notes && (
                            <span className="block text-[10px] font-normal text-slate-400">
                              {item.notes}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-slate-400">{item.category}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded bg-slate-800 font-bold text-slate-200">
                            {item.size}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-200 font-medium">{item.color}</td>
                        <td className="py-3 px-4 text-center">
                          <div className="inline-flex items-center space-x-2 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
                            <button
                              onClick={() => handleQuantityChange(item.id, -1)}
                              className="text-slate-400 hover:text-rose-400 text-sm font-bold w-4 h-4 flex items-center justify-center"
                            >
                              -
                            </button>
                            <span
                              className={`font-bold ${
                                item.quantity === 0
                                  ? 'text-rose-400'
                                  : item.quantity === 1
                                  ? 'text-amber-300'
                                  : 'text-white'
                              }`}
                            >
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.id, 1)}
                              className="text-slate-400 hover:text-emerald-400 text-sm font-bold w-4 h-4 flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-bold text-rose-300">
                          R$ {item.price.toFixed(2)}
                        </td>
                        <td className="py-3 px-4">
                          {item.isBlackFriday && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 mr-1.5">
                              Black Friday 🔥
                            </span>
                          )}
                          {item.isLimitedEdition && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-rose-500/10 text-rose-300 border border-rose-500/20 mr-1.5">
                              Ed. Limitada
                            </span>
                          )}
                          {item.isLastPiece && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                              Última Peça
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <button
                            disabled={item.quantity <= 0}
                            onClick={() => handleRegisterSale(item)}
                            className="px-2.5 py-1 rounded text-[11px] font-semibold bg-emerald-600/80 hover:bg-emerald-500 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            title="Dar baixa por venda realizada"
                          >
                            Vender
                          </button>
                          <button
                            disabled={item.quantity <= 0}
                            onClick={() => setCondicionalModalItem(item)}
                            className="px-2.5 py-1 rounded text-[11px] font-semibold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            title="Separar malinha condicional para cliente"
                          >
                            Condicional
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal de Condicional */}
            {condicionalModalItem && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-base font-bold text-white flex items-center space-x-2">
                      <Truck className="w-5 h-5 text-amber-400" />
                      <span>Separar Malinha Condicional</span>
                    </h4>
                    <button
                      onClick={() => setCondicionalModalItem(null)}
                      className="text-slate-400 hover:text-white text-sm"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                    <p className="font-semibold text-rose-300">
                      {condicionalModalItem.name} — {condicionalModalItem.color} ({condicionalModalItem.size})
                    </p>
                    <p className="text-slate-400">Valor da peça: R$ {condicionalModalItem.price.toFixed(2)}</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Nome da Cliente:
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Dra. Juliana"
                        value={condicionalClientName}
                        onChange={(e) => setCondicionalClientName(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-rose-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Bairro em Uberlândia:
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Morada da Colina, Granja Marileusa..."
                        value={condicionalNeighborhood}
                        onChange={(e) => setCondicionalNeighborhood(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-rose-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2 pt-2">
                    <button
                      onClick={() => setCondicionalModalItem(null)}
                      className="px-4 py-2 text-xs font-medium rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleConfirmCondicional}
                      className="px-4 py-2 text-xs font-bold rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950"
                    >
                      Confirmar Saída Condicional
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: CRM & PEDIDOS */}
        {activeTab === 'crm' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center space-x-2">
                  <Users className="w-5 h-5 text-rose-400" />
                  <span>Funil de Clientes & Vendas — Uberlândia</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Acompanhamento de ponta a ponta: do primeiro contato com a IA até a entrega da malinha condicional e pagamento.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs text-slate-400">Canal de Contato:</span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                  WhatsApp Oficial: (34) 99300-2424
                </span>
              </div>
            </div>

            {/* Kanban Columns */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { status: 'novo', title: '1. Novo Contato / IA Triando', color: 'border-slate-800 text-slate-400' },
                { status: 'em_atendimento', title: '2. Em Atendimento', color: 'border-blue-500/30 text-blue-400' },
                { status: 'condicional_enviado', title: '3. Condicional Enviado', color: 'border-amber-500/30 text-amber-400' },
                { status: 'venda_concluida', title: '4. Venda Concluída 🎉', color: 'border-emerald-500/30 text-emerald-400' },
              ].map((col) => {
                const colLeads = leads.filter((l) => l.status === col.status);
                return (
                  <div key={col.status} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <h4 className={`text-xs font-bold uppercase tracking-wider ${col.color}`}>
                        {col.title}
                      </h4>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-950 text-slate-300">
                        {colLeads.length}
                      </span>
                    </div>

                    <div className="space-y-3 flex-1">
                      {colLeads.map((lead) => (
                        <div
                          key={lead.id}
                          className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2 hover:border-rose-500/40 transition-all shadow-sm"
                        >
                          <div className="flex justify-between items-start">
                            <h5 className="text-xs font-bold text-white">{lead.name}</h5>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-rose-300 font-bold">
                              Tam {lead.sizeInterest}
                            </span>
                          </div>

                          <p className="text-[11px] text-slate-400 flex items-center space-x-1">
                            <span>📍 {lead.neighborhood}</span>
                          </p>

                          {lead.notes && (
                            <p className="text-[11px] text-slate-300 bg-slate-900/60 p-2 rounded-lg border border-slate-800/50">
                              {lead.notes}
                            </p>
                          )}

                          <div className="flex items-center justify-between pt-1 border-t border-slate-900 text-[10px]">
                            <span className="font-semibold text-rose-300">
                              R$ {lead.totalValue?.toFixed(2) || '0.00'}
                            </span>
                            <span className="text-slate-500">{lead.lastContact}</span>
                          </div>
                        </div>
                      ))}

                      {colLeads.length === 0 && (
                        <div className="text-center py-8 text-xs text-slate-600">
                          Nenhum cliente nesta etapa
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: AGENTE IA WHATSAPP ("GLOSSY") */}
        {activeTab === 'agent' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Simulador WhatsApp (8 colunas) */}
              <div className="lg:col-span-7 flex flex-col h-[700px] rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
                {/* Header de WhatsApp */}
                <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 p-0.5">
                        <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                          <Bot className="w-5 h-5 text-rose-300" />
                        </div>
                      </div>
                      <span className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900 absolute bottom-0 right-0"></span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center space-x-1.5">
                        <span>Glossy • IA Pré-Atendimento</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        WhatsApp Comercial Oficial: (34) 99300-2424 • Luana Frias
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Simulador Ativo
                    </span>
                  </div>
                </div>

                {/* Balões de Conversa */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'cliente' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3.5 rounded-2xl text-xs space-y-1.5 shadow-md ${
                          msg.sender === 'cliente'
                            ? 'bg-rose-600 text-white rounded-br-none'
                            : 'bg-slate-900 text-slate-100 border border-slate-800 rounded-bl-none'
                        }`}
                      >
                        <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>

                        {/* Card Especial de Transbordo se houver */}
                        {msg.isHandoff && (
                          <div className="mt-2 p-3 rounded-xl bg-slate-950/90 border border-amber-500/40 text-[11px] space-y-1">
                            <p className="font-bold text-amber-300 flex items-center space-x-1">
                              <PhoneCall className="w-3.5 h-3.5" />
                              <span>TRANSBORDO REALIZADO PARA LUANA FRIAS</span>
                            </p>
                            <p className="text-slate-300">
                              A cliente foi pré-qualificada e a ficha foi enviada para o WhatsApp comercial (34) 99300-2424.
                            </p>
                          </div>
                        )}

                        <div className="text-[10px] text-right opacity-70 flex justify-end items-center space-x-1">
                          <span>{msg.timestamp}</span>
                          {msg.sender === 'cliente' && <span>✓✓</span>}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isChatLoading && (
                    <div className="flex justify-start">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-rose-300 flex items-center space-x-2">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Glossy está digitando e consultando o estoque...</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sugestões Rápidas de Teste */}
                <div className="p-2 bg-slate-900/60 border-t border-slate-800/60 flex items-center space-x-1.5 overflow-x-auto text-[11px]">
                  <span className="text-slate-400 whitespace-nowrap text-[10px] px-2 font-medium">Testar:</span>
                  {[
                    'Tem legging M preta?',
                    'Quais cores tem no tamanho P?',
                    'Vocês entregam condicional?',
                    'Tem promoção de Black Friday?',
                    'Me manda o catálogo',
                  ].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => handleSendMessage(preset)}
                      className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap border border-slate-700/50"
                    >
                      {preset}
                    </button>
                  ))}
                </div>

                {/* Input de Mensagem */}
                <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Digite como uma cliente do WhatsApp de Uberlândia..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={isChatLoading || !chatInput.trim()}
                    className="p-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white disabled:opacity-40 transition-all shadow-md shadow-rose-950/40"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Configurações & Parâmetros do Agente (5 colunas) */}
              <div className="lg:col-span-5 space-y-4">
                {/* Status da Chave OpenRouter */}
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <Key className="w-4 h-4 text-amber-400" />
                    <span>Conexão OpenRouter (Requisito da Cliente)</span>
                  </h4>
                  <p className="text-xs text-slate-400">
                    A cliente ainda não forneceu a chave da conta OpenRouter. O sistema está operando no modo simulador de alta precisão com os dados reais de estoque.
                  </p>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-medium text-slate-300">
                      Chave API OpenRouter (quando Luana/Marcus fornecerem):
                    </label>
                    <input
                      type="password"
                      placeholder="sk-or-v1-xxxxxxxx..."
                      value={openRouterKey}
                      onChange={(e) => setOpenRouterKey(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400 font-mono"
                    />
                    <p className="text-[10px] text-slate-500">
                      A chave será salva diretamente no seu navegador para chamadas aos modelos Claude 3.5 ou Gemini 2.0.
                    </p>
                  </div>
                </div>

                {/* Diretrizes Operacionais do Agente */}
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-rose-400" />
                    <span>Regras e Guardrails Calibrados</span>
                  </h4>

                  <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                    <li><strong className="text-rose-300">Identificação de Tamanho:</strong> Sempre pergunta a numeração da cliente logo no início.</li>
                    <li><strong className="text-rose-300">Consulta de Estoque Real:</strong> Jamais inventa cores que Luana não tenha em Uberlândia.</li>
                    <li><strong className="text-rose-300">Oferecimento de Condicional:</strong> Lembra que em Uberlândia a cliente pode provar em casa sem taxa.</li>
                    <li><strong className="text-rose-300">Handoff Estruturado:</strong> Monta resumo detalhado e passa o fechamento para a Luana.</li>
                  </ul>
                </div>

                {/* Dados da Linha WhatsApp */}
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Destino do Transbordo Comercial
                  </h4>
                  <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div>
                      <p className="font-bold text-white">Luana Frias (Comercial)</p>
                      <p className="text-[11px] text-emerald-400 font-mono">+55 34 99300-2424</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                      Confirmado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: CRIADOR DE CONTEÚDO INSTAGRAM & GRUPO VIP */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center space-x-2">
                    <Camera className="w-5 h-5 text-rose-400" />
                    <span>Automação de Conteúdo — Instagram @glossyluanaudia & Grupo VIP</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Gere publicações com base nas fotos do fornecedor e espelhe sincronizadamente no Grupo VIP de WhatsApp.
                  </p>
                </div>
              </div>

              {/* Seletor dos 3 Formatos Contratados no Escopo */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {[
                  {
                    id: 'comercial',
                    title: '1. Formato Comercial',
                    desc: 'Preço em destaque, foco em conversão imediata e chamada para condicional/WhatsApp.',
                  },
                  {
                    id: 'lifestyle',
                    title: '2. Formato Lifestyle / Instrutivo',
                    desc: 'Uso no dia a dia, tecnologia do tecido (zero transparência), sem preços diretos.',
                  },
                  {
                    id: 'apresentacao',
                    title: '3. Formato Apresentação do Produto',
                    desc: 'Detalhes de costura, cós duplo anatômico, cores permanentes e edições exclusivas.',
                  },
                ].map((fmt) => (
                  <button
                    key={fmt.id}
                    onClick={() => {
                      setSelectedPostType(fmt.id as any);
                      const postRef = INITIAL_POSTS.find((p) => p.type === fmt.id);
                      if (postRef) setCustomCaption(postRef.caption);
                    }}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      selectedPostType === fmt.id
                        ? 'bg-rose-500/15 border-rose-500 text-white shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <p className="text-xs font-bold text-rose-300">{fmt.title}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{fmt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Editor de Post e Pré-visualização */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Formulário do Post (7 colunas) */}
              <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
                <h4 className="text-sm font-bold text-white">Editar Texto da Publicação</h4>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Selecionar Peça do Estoque para Base do Post:
                  </label>
                  <select
                    value={selectedProductIndex}
                    onChange={(e) => {
                      const idx = Number(e.target.value);
                      setSelectedProductIndex(idx);
                      const prod = inventory[idx];
                      if (prod) {
                        setCustomCaption(
                          `A clássica ${prod.name} na cor ${prod.color} acabou de chegar para pronta-entrega em Uberlândia! ✨🤎\n\nCós anatômico duplo que NÃO enrola, toque aveludado e zero transparência.\n\nDisponível no tamanho ${prod.size}! Quer provar no condicional sem compromisso? Clique no link da bio e fale comigo! 🛍️`
                        );
                      }
                    }}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-rose-500"
                  >
                    {inventory.slice(0, 30).map((item, idx) => (
                      <option key={item.id} value={idx}>
                        {item.name} — {item.color} ({item.size}) - R$ {item.price.toFixed(2)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Legenda Gerada com IA (Copy Comercial):
                  </label>
                  <textarea
                    rows={8}
                    value={customCaption}
                    onChange={(e) => setCustomCaption(e.target.value)}
                    className="w-full p-3 text-xs rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-rose-500 leading-relaxed font-sans"
                  />
                </div>

                {/* Sincronização com o Grupo VIP */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white flex items-center space-x-1.5">
                      <span>Espelhar no Grupo VIP de WhatsApp</span>
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-rose-500/10 text-rose-300">
                        Automação Ativa
                      </span>
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Envia simultaneamente o anúncio e o link para as clientes VIP de Uberlândia.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={syncToVipToggle}
                    onChange={(e) => setSyncToVipToggle(e.target.checked)}
                    className="w-4 h-4 rounded text-rose-500 bg-slate-900 border-slate-700"
                  />
                </div>

                {publishSuccessMessage && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>{publishSuccessMessage}</span>
                  </div>
                )}

                <div className="flex justify-end space-x-3 pt-2">
                  <button
                    onClick={handlePublishPost}
                    className="px-5 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white shadow-lg shadow-rose-950/50 flex items-center space-x-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Publicar no Instagram & Disparar no VIP</span>
                  </button>
                </div>
              </div>

              {/* Pré-visualização Estilo Instagram (5 colunas) */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Pré-visualização do Feed Instagram
                </h4>

                <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl max-w-sm mx-auto">
                  {/* Instagram Header */}
                  <div className="p-3 flex items-center justify-between border-b border-slate-900">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 p-0.5">
                        <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-[10px] font-bold text-rose-300">
                          G
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">glossyluanaudia</p>
                        <p className="text-[9px] text-slate-400">Uberlândia, MG</p>
                      </div>
                    </div>
                    <span className="text-slate-500 text-xs">•••</span>
                  </div>

                  {/* Mockup de Imagem */}
                  <div className="h-64 bg-gradient-to-br from-slate-900 via-rose-950/40 to-slate-900 flex flex-col items-center justify-center p-6 text-center border-b border-slate-900">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500 text-white shadow-md">
                      {selectedPostType.toUpperCase()}
                    </span>
                    <h5 className="text-base font-serif font-black text-rose-200 mt-3">
                      {inventory[selectedProductIndex]?.name || 'Legging Tradicional'}
                    </h5>
                    <p className="text-xs text-amber-300 mt-1 font-medium">
                      Cor: {inventory[selectedProductIndex]?.color || 'Cookie'}
                    </p>
                    <p className="text-xl font-extrabold text-white mt-2">
                      R$ {inventory[selectedProductIndex]?.price.toFixed(2) || '189.90'}
                    </p>
                    <span className="text-[10px] text-slate-400 mt-2">Pronta-Entrega em Uberlândia</span>
                  </div>

                  {/* Ações do Post */}
                  <div className="p-3 space-y-2">
                    <div className="flex items-center justify-between text-slate-300 text-xs">
                      <div className="flex items-center space-x-3">
                        <span>❤️ 84 curtidas</span>
                        <span>💬 12 comentários</span>
                      </div>
                      <span>🔖</span>
                    </div>

                    <p className="text-[11px] text-slate-300 line-clamp-3 leading-relaxed">
                      <strong className="text-white mr-1.5">glossyluanaudia</strong>
                      {customCaption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: CLUBE VIP & SORTEIOS */}
        {activeTab === 'loyalty' && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center space-x-2">
                    <Gift className="w-5 h-5 text-rose-400" />
                    <span>Clube VIP & Sorteador de Brindes da Marca</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Dinâmica de fidelização conforme alinhado no Kick-off: sorteio de mimos (pochetes e blusas da marca) para clientes cadastradas.
                  </p>
                </div>

                <button
                  onClick={handleSpinRaffle}
                  disabled={isSpinning}
                  className="px-5 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-sans shadow-lg shadow-amber-950/40 flex items-center space-x-2"
                >
                  <Award className="w-4 h-4" />
                  <span>{isSpinning ? 'Sorteando...' : 'Realizar Sorteio do Mês'}</span>
                </button>
              </div>

              {/* Resultado do Sorteio */}
              {raffleWinner && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-slate-900 border border-amber-500/40 text-center space-y-2">
                  <p className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                    🎉 CLIENTE CONTEMPLADA NO SORTEIO VIP 🎉
                  </p>
                  <h4 className="text-2xl font-black text-white">{raffleWinner}</h4>
                  <p className="text-xs text-slate-300">
                    Prêmio: <strong>Pochete Exclusiva Glossy + Mimo Especial de Outubro</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Grid de Brindes e Participantes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Brindes Mapeados */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                <h4 className="text-sm font-bold text-white">Brindes Disponíveis para Ações (Luana Frias)</h4>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Pochete Oficial Glossy com Logomarca</p>
                      <p className="text-[11px] text-slate-400">Acessório adquirido para campanha de fidelidade</p>
                    </div>
                    <span className="text-xs font-bold text-amber-300">1 unidade</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Blusas Edição Especial (Ação Promocional)</p>
                      <p className="text-[11px] text-slate-400">2 blusas exclusivas da marca para presentes de clientes</p>
                    </div>
                    <span className="text-xs font-bold text-amber-300">2 unidades</span>
                  </div>
                </div>
              </div>

              {/* Regras do Programa de Indicação */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                <h4 className="text-sm font-bold text-white">Programa de Indicação de Amigas</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Para cada amiga de Uberlândia indicada que comprar uma peça no atendimento da Glossy IA, a cliente indicadora acumula <strong>10% de desconto</strong> na próxima compra e ganha 1 cupom extra para o sorteio da pochete.
                </p>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                  💡 Mensagem automática configurada para ser disparada pelo WhatsApp ao fechar a compra.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: CATÁLOGOS & DRIVE */}
        {activeTab === 'catalogs' && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center space-x-2">
                  <FolderOpen className="w-5 h-5 text-rose-400" />
                  <span>Central de Catálogos & Google Drive do Fornecedor</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Acesse os catálogos completos da Glossy para consulta rápida e envio de referências às clientes.
                </p>
              </div>

              <a
                href="https://drive.google.com/drive/folders/1LR8hW--sAJ76wngBoYibTNy9lPReYEbV"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-bold rounded-xl bg-rose-600 hover:bg-rose-500 text-white flex items-center space-x-2 shadow-md shadow-rose-950/40"
              >
                <span>Abrir Google Drive Oficial de Revendas</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Lista de Catálogos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CATALOG_LINKS.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-3 hover:border-rose-500/40 transition-all"
                >
                  <div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 font-semibold">
                      PDF Oficial
                    </span>
                    <h5 className="text-xs font-bold text-white mt-2">{cat.name}</h5>
                    <p className="text-[11px] text-slate-400">Tamanho: {cat.size}</p>
                  </div>
                  <a
                    href={cat.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center space-x-1"
                  >
                    <span>Acessar no Drive</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: INTEGRAÇÕES & HOMOLOGAÇÃO */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <Settings className="w-5 h-5 text-rose-400" />
                <span>Status de Integrações & Requisitos da Cliente</span>
              </h3>
              <p className="text-xs text-slate-400">
                Acompanhamento transparente das credenciais e etapas pendentes para a homologação final.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* WhatsApp */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    WhatsApp Comercial
                  </h4>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-300">
                    100% Configurado
                  </span>
                </div>
                <p className="text-base font-bold text-white">(34) 99300-2424</p>
                <p className="text-xs text-slate-400">
                  Linha separada pela Luana e validada para atendimento exclusivo e triagem com a IA.
                </p>
              </div>

              {/* Estoque */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Inventário Físico
                  </h4>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-300">
                    100% Catalogado
                  </span>
                </div>
                <p className="text-base font-bold text-white">{stats.totalPieces} peças registradas</p>
                <p className="text-xs text-slate-400">
                  Todas as categorias, cores, tamanhos e lote de Black Friday inseridos no sistema.
                </p>
              </div>

              {/* Instagram */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Instagram Oficial
                  </h4>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300">
                    Aguardando Senha
                  </span>
                </div>
                <p className="text-base font-bold text-white">@glossyluanaudia</p>
                <p className="text-xs text-slate-400">
                  E-mail comercial informado: <code>glossyluanaudia@gmail.com</code>. Falta a senha de acesso para autorização da Meta Graph API de postagens.
                </p>
              </div>

              {/* OpenRouter */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Conta OpenRouter (LLM)
                  </h4>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300">
                    Aguardando Criação
                  </span>
                </div>
                <p className="text-base font-bold text-white">openrouter.ai</p>
                <p className="text-xs text-slate-400">
                  Necessário cadastro da conta pela cliente e inserção de créditos (ex: US$ 5 ou 10) para ativação do modelo de IA em produção no WhatsApp.
                </p>
              </div>
            </div>

            {/* Checklist de Homologação */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-rose-400" />
                <span>Roteiro para a 1ª Reunião de Homologação com a Luana</span>
              </h4>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start space-x-3">
                  <span className="font-bold text-rose-400">1.</span>
                  <div>
                    <strong className="text-white">Demonstração do Painel de Estoque:</strong> Mostrar como Luana pode dar baixa em vendas com 1 clique e separar a malinha de condicional por bairro de Uberlândia.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start space-x-3">
                  <span className="font-bold text-rose-400">2.</span>
                  <div>
                    <strong className="text-white">Simulação ao Vivo da Glossy IA:</strong> Testar o atendimento receptivo no WhatsApp, envio de catálogo por tamanho e handoff estruturado para o telefone dela.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start space-x-3">
                  <span className="font-bold text-rose-400">3.</span>
                  <div>
                    <strong className="text-white">Demonstração do Gerador de Postagens nos 3 Formatos:</strong> Mostrar a criação de posts (Comercial, Lifestyle e Apresentação) e a sincronização simultânea com o Grupo VIP.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start space-x-3">
                  <span className="font-bold text-rose-400">4.</span>
                  <div>
                    <strong className="text-white">Entrega das 2 Pendências Restantes:</strong> Inserir a senha do Instagram e a chave OpenRouter para virar a chave final para o Onboarding e Manual de Uso.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-4 bg-slate-950 text-center text-xs text-slate-500">
        Sistema Luana Glossy • Desenvolvido pela Vértice Tecnologia (Mateus Ferreira & Lucas Ricardo da Silva) • 2026
      </footer>
    </div>
  );
}
