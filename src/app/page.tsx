'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import {
  MessageSquare,
  Users,
  CheckCircle2,
  Clock,
  Send,
  Mic,
  Lock,
  ShoppingBag,
  Sparkles,
  Layers,
  Settings,
  Search,
  Plus,
  PhoneCall,
  QrCode,
  ExternalLink,
  Share2,
  Moon,
  Sun,
  LogOut,
  ChevronRight,
  Filter,
  Check,
  Copy,
  FileText,
  RefreshCw,
  Play,
  Pause,
  Calendar,
  Truck,
  ArrowRight,
  TrendingUp,
  MapPin,
  Flame,
  FileCheck,
  MessageCircle,
  HelpCircle,
  BarChart3,
  Sliders,
  DollarSign,
  Tag,
  AlertCircle
} from 'lucide-react';

import {
  INITIAL_INVENTORY,
  INITIAL_CONVERSATIONS,
  INITIAL_MESSAGES,
  INITIAL_QUICK_REPLIES,
  INITIAL_SCHEDULED_POSTS,
  INITIAL_VIP_POSTS,
  LINKTREE_CONFIG,
  CATALOG_LINKS
} from '../data/initialData';

import {
  InventoryItem,
  Conversation,
  Message,
  QuickReply,
  ScheduledPost,
  VipGroupPost,
  ConversationQueue,
  ItemCategory,
  ItemSize
} from '../types';

export default function Home() {
  // ----------------------------------------------------
  // Autenticação & Sessão
  // ----------------------------------------------------
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [loginEmail, setLoginEmail] = useState('luana@glossyluanaudia.com.br');
  const [loginPassword, setLoginPassword] = useState('Glossylu@24');
  const [loginError, setLoginError] = useState('');

  // ----------------------------------------------------
  // Tema Visual: Padrão Light Boutique (Delicado e Feminino) com Toggle Dark
  // ----------------------------------------------------
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // ----------------------------------------------------
  // Navegação Lateral (Vertical Sidebar)
  // ----------------------------------------------------
  const [activeTab, setActiveTab] = useState<
    'overview' | 'crm' | 'inventory' | 'posts' | 'vip_group' | 'linktree' | 'channels' | 'loyalty'
  >('overview');

  // ----------------------------------------------------
  // Estados de Dados (Estoque, CRM, Postagens, etc.)
  // ----------------------------------------------------
  const [inventory, setInventory] = useState<InventoryItem[]>(INITIAL_INVENTORY);
  const [conversations, setConversations] = useState<Conversation[]>(INITIAL_CONVERSATIONS);
  const [messages, setMessages] = useState<Record<string, Message[]>>(INITIAL_MESSAGES);
  const [scheduledPosts, setScheduledPosts] = useState<ScheduledPost[]>(INITIAL_SCHEDULED_POSTS);
  const [vipPosts, setVipPosts] = useState<VipGroupPost[]>(INITIAL_VIP_POSTS);

  // CRM Omnichannel States
  const [activeQueue, setActiveQueue] = useState<ConversationQueue>('meus');
  const [selectedConversationId, setSelectedConversationId] = useState<string>('conv-1');
  const [chatComposerText, setChatComposerText] = useState('');
  const [composerMode, setComposerMode] = useState<'client' | 'internal_note'>('client');
  const [showQuickReplies, setShowQuickReplies] = useState(false);
  const [crmSearchQuery, setCrmSearchQuery] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState<string | null>(null);

  // Filtros de Estoque
  const [inventorySearch, setInventorySearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [selectedSize, setSelectedSize] = useState<string>('Todos');
  const [onlyBlackFriday, setOnlyBlackFriday] = useState<boolean>(false);

  // Criador de Postagens (Painel tipo Daiane)
  const [newPostFormat, setNewPostFormat] = useState<'comercial' | 'lifestyle' | 'apresentacao'>('comercial');
  const [newPostProduct, setNewPostProduct] = useState(inventory[2].name + ' - ' + inventory[2].color);
  const [newPostPrice, setNewPostPrice] = useState(inventory[2].price.toString());
  const [newPostCaption, setNewPostCaption] = useState(INITIAL_SCHEDULED_POSTS[0].caption);
  const [postSuccessNotice, setPostSuccessNotice] = useState<string | null>(null);

  // QR Code WhatsApp Timer
  const [qrSecondsLeft, setQrSecondsLeft] = useState(45);
  const [isQrConnected, setIsQrConnected] = useState(true);

  // Toast / Feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Timer para o QR code
  useEffect(() => {
    const timer = setInterval(() => {
      setQrSecondsLeft((prev) => (prev > 1 ? prev - 1 : 45));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Conversa ativa selecionada
  const activeConversation = useMemo(() => {
    return conversations.find((c) => c.id === selectedConversationId) || conversations[0];
  }, [conversations, selectedConversationId]);

  // Mensagens da conversa ativa
  const currentMessages = useMemo(() => {
    return messages[selectedConversationId] || [];
  }, [messages, selectedConversationId]);

  // Conversas filtradas por fila e busca
  const filteredConversations = useMemo(() => {
    return conversations.filter((c) => {
      const matchesQueue = c.queue === activeQueue;
      const matchesSearch =
        c.contactName.toLowerCase().includes(crmSearchQuery.toLowerCase()) ||
        c.neighborhood.toLowerCase().includes(crmSearchQuery.toLowerCase()) ||
        c.contactPhone.includes(crmSearchQuery);
      return matchesQueue && matchesSearch;
    });
  }, [conversations, activeQueue, crmSearchQuery]);

  // Estoque filtrado
  const filteredInventory = useMemo(() => {
    return inventory.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(inventorySearch.toLowerCase()) ||
        item.color.toLowerCase().includes(inventorySearch.toLowerCase()) ||
        item.subcategory.toLowerCase().includes(inventorySearch.toLowerCase());

      const matchCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
      const matchSize = selectedSize === 'Todos' || item.size === selectedSize;
      const matchBf = onlyBlackFriday ? item.isBlackFriday : true;

      return matchSearch && matchCategory && matchSize && matchBf;
    });
  }, [inventory, inventorySearch, selectedCategory, selectedSize, onlyBlackFriday]);

  // Métricas de estoque
  const stockMetrics = useMemo(() => {
    const totalPieces = inventory.reduce((sum, item) => sum + item.quantity, 0);
    const totalValue = inventory.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const bfPieces = inventory
      .filter((i) => i.isBlackFriday)
      .reduce((sum, item) => sum + item.quantity, 0);
    return { totalPieces, totalValue, bfPieces };
  }, [inventory]);

  // Enviar mensagem ou Nota Interna no CRM
  const handleSendMessage = () => {
    if (!chatComposerText.trim()) return;

    const isInternal = composerMode === 'internal_note';
    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      conversationId: selectedConversationId,
      senderType: isInternal ? 'system' : 'agent',
      senderName: 'Luana Frias',
      content: isInternal
        ? `🔒 NOTA INTERNA VÉRTICE: ${chatComposerText.trim()}`
        : chatComposerText.trim(),
      isInternalNote: isInternal,
      status: 'sent',
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => ({
      ...prev,
      [selectedConversationId]: [...(prev[selectedConversationId] || []), newMsg]
    }));

    // Atualiza última mensagem na conversa
    setConversations((prev) =>
      prev.map((c) =>
        c.id === selectedConversationId
          ? {
              ...c,
              lastMessage: isInternal ? '🔒 Nota interna adicionada' : chatComposerText.trim(),
              lastMessageTime: 'Agora'
            }
          : c
      )
    );

    setChatComposerText('');
    showToast(isInternal ? 'Nota interna salva com sucesso!' : 'Mensagem enviada via WhatsApp!');
  };

  // Aplicar resposta rápida
  const applyQuickReply = (qr: QuickReply) => {
    setChatComposerText(qr.content);
    setShowQuickReplies(false);
  };

  // Baixa rápida de estoque por venda
  const handleStockSale = (itemId: string) => {
    setInventory((prev) =>
      prev.map((item) => {
        if (item.id === itemId && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
    showToast('Baixa de 1 unidade registrada no estoque com sucesso!');
  };

  // Agendar Post
  const handleSchedulePost = () => {
    const newPost: ScheduledPost = {
      id: `sp-${Date.now()}`,
      title: `${newPostProduct} (${newPostFormat.toUpperCase()})`,
      format: newPostFormat,
      productName: newPostProduct,
      color: 'Conforme modelo selecionado',
      price: parseFloat(newPostPrice) || 189.90,
      caption: newPostCaption,
      hashtags: ['#GlossyByLuanaFrias', '#ModaFitness', '#Uberlandia', '#TreinoComEstilo'],
      imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80',
      scheduledDate: '2026-11-03',
      scheduledTime: '15:00',
      status: 'agendado',
      channels: {
        instagram: true,
        facebook: true,
        whatsappVip: true
      }
    };
    setScheduledPosts((prev) => [newPost, ...prev]);
    showToast('Post agendado e enfileirado para o n8n com sucesso!');
  };

  // Disparo simulado no Grupo VIP
  const handleVipDrop = (type: string) => {
    showToast(`Disparo de ${type} enviado com sucesso para o Grupo VIP Select da Luana!`);
  };

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      setIsAuthenticated(true);
      setLoginError('');
      showToast('Bem-vinda, Luana! Sessão iniciada com sucesso.');
    } else {
      setLoginError('Por favor preencha o e-mail e a senha.');
    }
  };

  // ----------------------------------------------------
  // TELA DE LOGIN (Garantia de Padrão e Autenticação)
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-4 transition-colors ${
        isDarkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-gradient-to-br from-[#faf8f6] via-[#f7f2ed] to-[#f4ebe1] text-zinc-900'
      }`}>
        <div className={`w-full max-w-md p-8 rounded-3xl shadow-2xl border transition-all ${
          isDarkMode ? 'bg-zinc-900/90 border-zinc-800' : 'bg-white/95 border-amber-100/80'
        }`}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-400 via-rose-500 to-amber-400 text-white shadow-lg shadow-rose-500/20 mb-4 text-3xl">
              🦩
            </div>
            <h1 className="text-2xl font-serif font-bold tracking-tight text-zinc-900 dark:text-white">
              GLOSSY
            </h1>
            <p className="text-xs tracking-widest uppercase font-semibold text-rose-600 dark:text-rose-400 mt-0.5">
              BY LUANA FRIAS • UBERLÂNDIA
            </p>
            <p className="text-xs text-zinc-500 mt-2">
              Painel Integrado de Gestão & CRM Omnichannel • Vértice Tecnologia
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 text-xs rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-200">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                E-mail ou Usuário
              </label>
              <input
                type="text"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all ${
                  isDarkMode
                    ? 'bg-zinc-800 border-zinc-700 text-white'
                    : 'bg-zinc-50/70 border-zinc-200 text-zinc-900'
                }`}
                placeholder="luana@glossyluanaudia.com.br"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Senha de Acesso
              </label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all ${
                  isDarkMode
                    ? 'bg-zinc-800 border-zinc-700 text-white'
                    : 'bg-zinc-50/70 border-zinc-200 text-zinc-900'
                }`}
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 hover:from-rose-600 hover:to-amber-600 shadow-md shadow-rose-500/25 transition-all transform active:scale-[0.99]"
            >
              Acessar Painel Oficial
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800 text-center">
            <button
              onClick={() => {
                setLoginEmail('luana@glossyluanaudia.com.br');
                setLoginPassword('Glossylu@24');
                setIsAuthenticated(true);
              }}
              className="text-xs font-medium text-rose-600 dark:text-rose-400 hover:underline"
            >
              ⚡ Login Rápido: Entrar como Luana Frias (Uberlândia)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // LAYOUT PRINCIPAL: MENU LATERAL (VERTICAL SIDEBAR) + ÁREA DE CONTEÚDO
  // ----------------------------------------------------
  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'dark bg-zinc-950 text-zinc-100' : 'bg-[#faf8f6] text-zinc-900'}`}>
      
      {/* Toast Notification Flutuante */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-900/95 text-white shadow-2xl backdrop-blur-md border border-zinc-800 animate-slide-up text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* -------------------------------------------------- */}
      {/* 1. SIDEBAR VERTICAL (MENU LATERAL FIXO) */}
      {/* -------------------------------------------------- */}
      <aside className={`w-72 shrink-0 border-r flex flex-col justify-between transition-colors z-30 ${
        isDarkMode ? 'bg-zinc-900/90 border-zinc-800' : 'bg-white border-rose-100/70 shadow-sm'
      }`}>
        
        {/* Topo do Menu Lateral */}
        <div className="p-5">
          {/* Logo Brand Oficial com Flamingo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-400 via-rose-500 to-amber-400 flex items-center justify-center text-white shadow-md shadow-rose-500/20 text-2xl shrink-0">
              🦩
            </div>
            <div>
              <h2 className="font-serif font-black text-lg tracking-wider text-zinc-900 dark:text-white leading-none">
                GLOSSY
              </h2>
              <p className="text-[10px] uppercase font-bold tracking-widest text-rose-600 dark:text-rose-400 mt-0.5">
                BY LUANA FRIAS
              </p>
              <span className="text-[9px] text-zinc-400 font-medium">Uberlândia • MG</span>
            </div>
          </div>

          {/* Card do Usuário Logado (Foto da Luana) */}
          <div className={`p-3 rounded-2xl border mb-6 flex items-center gap-3 ${
            isDarkMode ? 'bg-zinc-800/60 border-zinc-700/60' : 'bg-rose-50/50 border-rose-100'
          }`}>
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-rose-300 dark:border-rose-500/50 shrink-0">
              <Image
                src="/luana.png"
                alt="Luana Frias"
                fill
                className="object-cover"
                priority
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold truncate text-zinc-900 dark:text-white">
                Luana Frias
              </p>
              <p className="text-[10px] text-rose-600 dark:text-rose-400 font-medium truncate">
                Revendedora Master
              </p>
              <p className="text-[9px] text-zinc-400 truncate">
                +55 (34) 99300-2424
              </p>
            </div>
          </div>

          {/* Links do Menu Vertical */}
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/20'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-rose-50/70 dark:hover:bg-zinc-800/60'
              }`}
            >
              <BarChart3 className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Visão Geral & Métricas</span>
            </button>

            <button
              onClick={() => setActiveTab('crm')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'crm'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/20'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-rose-50/70 dark:hover:bg-zinc-800/60'
              }`}
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">CRM Omnichannel</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                activeTab === 'crm' ? 'bg-white/20 text-white' : 'bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400'
              }`}>
                {conversations.filter(c => c.queue === 'aguardando').length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('inventory')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'inventory'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/20'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-rose-50/70 dark:hover:bg-zinc-800/60'
              }`}
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Estoque Revisado (7 Pág.)</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                activeTab === 'inventory' ? 'bg-white/20 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
              }`}>
                {stockMetrics.totalPieces}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('posts')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'posts'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/20'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-rose-50/70 dark:hover:bg-zinc-800/60'
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Postagens & n8n</span>
            </button>

            <button
              onClick={() => setActiveTab('vip_group')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'vip_group'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/20'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-rose-50/70 dark:hover:bg-zinc-800/60'
              }`}
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Grupo VIP Select</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </button>

            <button
              onClick={() => setActiveTab('linktree')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'linktree'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/20'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-rose-50/70 dark:hover:bg-zinc-800/60'
              }`}
            >
              <Share2 className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Linktree & Perfil</span>
            </button>

            <button
              onClick={() => setActiveTab('channels')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'channels'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/20'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-rose-50/70 dark:hover:bg-zinc-800/60'
              }`}
            >
              <QrCode className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Canais & QR Code</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </button>

            <button
              onClick={() => setActiveTab('loyalty')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'loyalty'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/20'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-rose-50/70 dark:hover:bg-zinc-800/60'
              }`}
            >
              <Flame className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Clube VIP & Sorteios</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400">
                Em breve
              </span>
            </button>
          </nav>
        </div>

        {/* Rodapé do Menu Lateral */}
        <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 space-y-2">
          {/* Theme Toggle (Light / Dark) */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
              isDarkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-rose-50 text-rose-800'
            }`}
          >
            <span className="flex items-center gap-2">
              {isDarkMode ? <Moon className="w-3.5 h-3.5 text-amber-400" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
              {isDarkMode ? 'Modo Escuro Ativo' : 'Modo Claro Luxo'}
            </span>
            <span className="text-[10px] text-zinc-400">Alternar</span>
          </button>

          {/* Sair do Sistema */}
          <button
            onClick={() => {
              setIsAuthenticated(false);
              showToast('Você saiu do sistema.');
            }}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-zinc-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-zinc-800 transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sair da Conta</span>
          </button>
        </div>
      </aside>

      {/* -------------------------------------------------- */}
      {/* 2. ÁREA DE CONTEÚDO PRINCIPAL (MAIN CONTENT) */}
      {/* -------------------------------------------------- */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Topbar Superior */}
        <header className={`h-16 px-6 border-b flex items-center justify-between shrink-0 transition-colors ${
          isDarkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white/80 border-rose-100/60 backdrop-blur-md'
        }`}>
          <div>
            <h1 className="text-sm font-bold text-zinc-900 dark:text-white capitalize">
              {activeTab === 'overview' && 'Painel de Controle Executivo'}
              {activeTab === 'crm' && 'CRM Omnichannel • Padrão Vértice 3 Colunas'}
              {activeTab === 'inventory' && 'Estoque Físico Revisado • Uberlândia (7 Páginas)'}
              {activeTab === 'posts' && 'Criador de Conteúdo & Postagens • Painel tipo Daiane'}
              {activeTab === 'vip_group' && 'Grupo VIP Select • Modelo Renata Sousa'}
              {activeTab === 'linktree' && 'Gerador de Linktree & Foto de Perfil Glossy'}
              {activeTab === 'channels' && 'Conexão de Canais • WhatsApp Web Oficial'}
              {activeTab === 'loyalty' && 'Clube de Fidelidade & Sorteios'}
            </h1>
            <p className="text-[11px] text-zinc-400">
              Operação Uberlândia • Luana Frias & Marcus Zago
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              WhatsApp Oficial Conectado
            </span>

            <a
              href="https://instagram.com/glossyluanaudia"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1"
            >
              @glossyluanaudia
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </header>

        {/* Corpo do Conteúdo Dinâmico conforme a Aba */}
        <div className="flex-1 overflow-y-auto">

          {/* ============================================== */}
          {/* ABA 1: VISÃO GERAL & MÉTRICAS (OVERVIEW) */}
          {/* ============================================== */}
          {activeTab === 'overview' && (
            <div className="p-6 space-y-6 max-w-7xl mx-auto">
              {/* Banner de Boas-vindas Delicado e Elegante */}
              <div className={`p-6 rounded-3xl border relative overflow-hidden ${
                isDarkMode
                  ? 'bg-gradient-to-r from-zinc-900 via-zinc-900 to-rose-950/40 border-zinc-800'
                  : 'bg-gradient-to-r from-rose-50/80 via-amber-50/60 to-white border-rose-100 shadow-sm'
              }`}>
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 mb-3">
                    ✨ OPERAÇÃO OFICIAL ATIVA • UBERLÂNDIA
                  </div>
                  <h2 className="text-xl font-serif font-bold text-zinc-900 dark:text-white">
                    Olá Luana, tudo pronto para acelerar as vendas da Glossy hoje!
                  </h2>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    Seu ecossistema está integrado com o WhatsApp oficial <strong>(34) 99300-2424</strong>, o estoque físico de 112 peças revisadas, o agendador de postagens da Daiane e o Grupo VIP Select.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveTab('crm')}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-rose-500 hover:bg-rose-600 shadow-md shadow-rose-500/20 transition-all"
                    >
                      Abrir CRM Omnichannel ({conversations.filter(c => c.queue === 'aguardando').length} na Fila)
                    </button>
                    <button
                      onClick={() => setActiveTab('inventory')}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        isDarkMode
                          ? 'border-zinc-700 hover:bg-zinc-800 text-zinc-300'
                          : 'border-rose-200 hover:bg-rose-50 text-rose-800'
                      }`}
                    >
                      Consultar Estoque (112 Peças)
                    </button>
                  </div>
                </div>
              </div>

              {/* Grid de 4 Cards de Métricas Principais */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100/70 shadow-sm'}`}>
                  <div className="flex items-center justify-between text-zinc-400 mb-3">
                    <span className="text-xs font-medium">Estoque Físico UDI</span>
                    <ShoppingBag className="w-4 h-4 text-rose-500" />
                  </div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                    {stockMetrics.totalPieces} <span className="text-xs font-normal text-zinc-400">peças</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    Avaliado em R$ {stockMetrics.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100/70 shadow-sm'}`}>
                  <div className="flex items-center justify-between text-zinc-400 mb-3">
                    <span className="text-xs font-medium">Condicionais Ativas</span>
                    <Truck className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                    1 <span className="text-xs font-normal text-zinc-400">malinha</span>
                  </div>
                  <p className="text-[11px] text-amber-600 dark:text-amber-400 font-medium mt-1">
                    Camila Alencar • R$ 509,70 em prova
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100/70 shadow-sm'}`}>
                  <div className="flex items-center justify-between text-zinc-400 mb-3">
                    <span className="text-xs font-medium">Membros Grupo VIP</span>
                    <Users className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                    1.042 <span className="text-xs font-normal text-zinc-400">clientes</span>
                  </div>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                    Grupo silencioso de alta conversão
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100/70 shadow-sm'}`}>
                  <div className="flex items-center justify-between text-zinc-400 mb-3">
                    <span className="text-xs font-medium">Posts Programados</span>
                    <Calendar className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                    3 <span className="text-xs font-normal text-zinc-400">esta semana</span>
                  </div>
                  <p className="text-[11px] text-purple-600 dark:text-purple-400 font-medium mt-1">
                    Feed + Stories + Espelho VIP
                  </p>
                </div>
              </div>

              {/* Destaques Rápidos: Condicional em Aberto & Últimas Peças */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Card 1: Condicional Ativa no Morada da Colina */}
                <div className={`p-6 rounded-3xl border ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100/70 shadow-sm'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-rose-500" />
                      <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                        Malinha Condicional em Análise
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400">
                      Retorno: Amanhã às 14h
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                        alt="Camila Alencar"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-900 dark:text-white">Camila Alencar</p>
                      <p className="text-[11px] text-zinc-500">Bairro: Morada da Colina • Uberlândia</p>
                    </div>
                  </div>

                  <p className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                    Peças na Malinha:
                  </p>
                  <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 mb-4">
                    <li className="flex items-center justify-between">
                      <span>• Legging Tradicional M (Cookie)</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">R$ 189,90</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>• Legging Tradicional M (Café)</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">R$ 189,90</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>• Top Live M (Acrópole)</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">R$ 129,90</span>
                    </li>
                  </ul>

                  <button
                    onClick={() => {
                      setSelectedConversationId('conv-1');
                      setActiveTab('crm');
                    }}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Abrir Chat com Camila no CRM</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card 2: Peças Exclusivas / Últimas Unidades */}
                <div className={`p-6 rounded-3xl border ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100/70 shadow-sm'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-amber-500" />
                      <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                        Peças Raras & Última Unidade
                      </h3>
                    </div>
                    <span className="text-[11px] text-zinc-400">Pronta-Entrega</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60">
                      <div>
                        <p className="text-xs font-bold text-zinc-900 dark:text-white">Legging Wave M</p>
                        <p className="text-[11px] text-zinc-500">Cor: Amarelo-manteiga • Peça Única</p>
                      </div>
                      <span className="text-xs font-bold text-rose-600 dark:text-rose-400">R$ 219,90</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60">
                      <div>
                        <p className="text-xs font-bold text-zinc-900 dark:text-white">Macacão Longo M</p>
                        <p className="text-[11px] text-zinc-500">Cor: Barolo Acetinado • Peça Única</p>
                      </div>
                      <span className="text-xs font-bold text-rose-600 dark:text-rose-400">R$ 279,90</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60">
                      <div>
                        <p className="text-xs font-bold text-zinc-900 dark:text-white">Conjunto Gaia BF (Casaco M + Short P)</p>
                        <p className="text-[11px] text-zinc-500">Cor: Cocada • Lote Black Friday</p>
                      </div>
                      <span className="text-xs font-bold text-rose-600 dark:text-rose-400">R$ 299,90</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveTab('inventory')}
                    className="w-full mt-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Ver Tabela Completa de Estoque</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* ============================================== */}
          {/* ABA 2: CRM OMNICHANNEL (PADRÃO VÉRTICE 3 COLUNAS) */}
          {/* ============================================== */}
          {activeTab === 'crm' && (
            <div className="h-[calc(100vh-4rem)] flex overflow-hidden">
              
              {/* COLUNA 1: FILAS DE ATENDIMENTO (INBOX) */}
              <div className={`w-80 shrink-0 border-r flex flex-col transition-colors ${
                isDarkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-rose-100/70'
              }`}>
                {/* Abas das 4 Filas Canônicas */}
                <div className="p-3 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-[11px] font-semibold">
                    <button
                      onClick={() => setActiveQueue('aguardando')}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeQueue === 'aguardando'
                          ? 'bg-white dark:bg-zinc-700 text-rose-600 dark:text-rose-400 shadow-sm'
                          : 'text-zinc-500 hover:text-zinc-800'
                      }`}
                    >
                      Fila ({conversations.filter(c => c.queue === 'aguardando').length})
                    </button>
                    <button
                      onClick={() => setActiveQueue('meus')}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeQueue === 'meus'
                          ? 'bg-white dark:bg-zinc-700 text-rose-600 dark:text-rose-400 shadow-sm'
                          : 'text-zinc-500 hover:text-zinc-800'
                      }`}
                    >
                      Meus ({conversations.filter(c => c.queue === 'meus').length})
                    </button>
                    <button
                      onClick={() => setActiveQueue('espera')}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeQueue === 'espera'
                          ? 'bg-white dark:bg-zinc-700 text-rose-600 dark:text-rose-400 shadow-sm'
                          : 'text-zinc-500 hover:text-zinc-800'
                      }`}
                    >
                      Espera ({conversations.filter(c => c.queue === 'espera').length})
                    </button>
                    <button
                      onClick={() => setActiveQueue('finalizados')}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeQueue === 'finalizados'
                          ? 'bg-white dark:bg-zinc-700 text-rose-600 dark:text-rose-400 shadow-sm'
                          : 'text-zinc-500 hover:text-zinc-800'
                      }`}
                    >
                      Feitos ({conversations.filter(c => c.queue === 'finalizados').length})
                    </button>
                  </div>

                  {/* Campo de Busca Rápida */}
                  <div className="relative mt-2.5">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="Buscar por nome, fone ou bairro..."
                      value={crmSearchQuery}
                      onChange={(e) => setCrmSearchQuery(e.target.value)}
                      className={`w-full pl-8 pr-3 py-1.5 rounded-xl text-xs border focus:outline-none focus:ring-1 focus:ring-rose-500 ${
                        isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-zinc-50 border-zinc-200'
                      }`}
                    />
                  </div>
                </div>

                {/* Lista de Conversas da Fila */}
                <div className="flex-1 overflow-y-auto divide-y divide-zinc-100 dark:divide-zinc-800/60">
                  {filteredConversations.length === 0 ? (
                    <div className="p-8 text-center text-xs text-zinc-400">
                      Nenhuma conversa nesta fila.
                    </div>
                  ) : (
                    filteredConversations.map((conv) => {
                      const isSelected = conv.id === selectedConversationId;
                      return (
                        <div
                          key={conv.id}
                          onClick={() => setSelectedConversationId(conv.id)}
                          className={`p-3.5 cursor-pointer transition-all flex items-start gap-3 ${
                            isSelected
                              ? isDarkMode
                                ? 'bg-zinc-800/80'
                                : 'bg-rose-50/70 border-l-4 border-rose-500'
                              : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/30'
                          }`}
                        >
                          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                            {conv.contactAvatar ? (
                              <Image
                                src={conv.contactAvatar}
                                alt={conv.contactName}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-rose-200 text-rose-700 flex items-center justify-center font-bold text-xs">
                                {conv.contactName.charAt(0)}
                              </div>
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between mb-0.5">
                              <h4 className="text-xs font-bold truncate text-zinc-900 dark:text-white">
                                {conv.contactName}
                              </h4>
                              <span className="text-[10px] text-zinc-400 shrink-0">
                                {conv.lastMessageTime}
                              </span>
                            </div>

                            <p className="text-[11px] text-zinc-500 truncate mb-1">
                              {conv.lastMessage}
                            </p>

                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                                📍 {conv.neighborhood}
                              </span>
                              {conv.unreadCount > 0 && (
                                <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-rose-500 text-white">
                                  {conv.unreadCount}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* COLUNA 2: TIMELINE DO CHAT ATIVO COM NOTAS INTERNAS & PTT AUDIO */}
              <div className="flex-1 flex flex-col bg-zinc-50/50 dark:bg-zinc-950/40">
                
                {/* Header da Conversa Ativa */}
                <div className={`h-16 px-5 border-b flex items-center justify-between shrink-0 transition-colors ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100/70'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative">
                      {activeConversation.contactAvatar && (
                        <Image
                          src={activeConversation.contactAvatar}
                          alt={activeConversation.contactName}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                        {activeConversation.contactName}
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                          WhatsApp Online
                        </span>
                      </h3>
                      <p className="text-[10px] text-zinc-400">
                        {activeConversation.contactPhone} • {activeConversation.neighborhood}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium text-zinc-500">
                      Etapa: <strong className="text-rose-600 dark:text-rose-400">{activeConversation.stage}</strong>
                    </span>
                    <button
                      onClick={() => {
                        const newQueue = activeConversation.queue === 'meus' ? 'espera' : 'meus';
                        setConversations(prev => prev.map(c => c.id === activeConversation.id ? { ...c, queue: newQueue } : c));
                        showToast(`Movido para a fila: ${newQueue.toUpperCase()}`);
                      }}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    >
                      Alterar Fila
                    </button>
                  </div>
                </div>

                {/* Área de Mensagens (Timeline) */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {currentMessages.map((msg) => {
                    // Renderização de NOTA INTERNA VÉRTICE (Amarelo Suave com Cadeado)
                    if (msg.isInternalNote) {
                      return (
                        <div
                          key={msg.id}
                          className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs shadow-sm max-w-xl mx-auto"
                        >
                          <div className="flex items-center gap-1.5 font-bold mb-1 text-[11px] text-amber-800 dark:text-amber-300">
                            <Lock className="w-3.5 h-3.5" />
                            <span>NOTA INTERNA VÉRTICE (NÃO ENVIADO AO CLIENTE)</span>
                          </div>
                          <p className="leading-relaxed whitespace-pre-wrap">{msg.content.replace('🔒 NOTA INTERNA VÉRTICE: ', '')}</p>
                          <span className="text-[10px] text-amber-700/70 dark:text-amber-400 mt-1.5 block text-right">
                            {msg.createdAt} • Gravado internamente
                          </span>
                        </div>
                      );
                    }

                    // Renderização de Áudio PTT (Simulador Player)
                    if (msg.mediaType === 'audio') {
                      const isPlaying = isPlayingAudio === msg.id;
                      return (
                        <div
                          key={msg.id}
                          className={`flex ${msg.senderType === 'agent' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`p-3 rounded-2xl max-w-xs sm:max-w-sm flex items-center gap-3 shadow-sm ${
                            msg.senderType === 'agent'
                              ? 'bg-rose-500 text-white rounded-tr-none'
                              : 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-tl-none border border-zinc-200 dark:border-zinc-700'
                          }`}>
                            <button
                              onClick={() => setIsPlayingAudio(isPlaying ? null : msg.id)}
                              className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform active:scale-95 ${
                                msg.senderType === 'agent'
                                  ? 'bg-white text-rose-600'
                                  : 'bg-rose-500 text-white'
                              }`}
                            >
                              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                            </button>
                            <div className="flex-1">
                              <div className="flex items-center gap-1 h-5">
                                {[40, 70, 90, 50, 80, 100, 60, 40, 85, 95, 30, 60, 80, 45].map((h, i) => (
                                  <span
                                    key={i}
                                    style={{ height: `${h}%` }}
                                    className={`w-1 rounded-full ${
                                      isPlaying
                                        ? 'animate-pulse bg-white'
                                        : msg.senderType === 'agent'
                                        ? 'bg-white/60'
                                        : 'bg-zinc-400'
                                    }`}
                                  />
                                ))}
                              </div>
                              <div className="flex items-center justify-between mt-1 text-[10px] opacity-80">
                                <span>{msg.audioDuration || '0:22'}</span>
                                <span>{msg.createdAt}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    // Mensagens Padrão de Texto
                    const isAgent = msg.senderType === 'agent';
                    return (
                      <div
                        key={msg.id}
                        className={`flex ${isAgent ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-md p-3.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
                            isAgent
                              ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-tr-none'
                              : 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-tl-none border border-zinc-200/80 dark:border-zinc-700'
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                          <div
                            className={`flex items-center justify-end gap-1 mt-1.5 text-[10px] ${
                              isAgent ? 'text-rose-100' : 'text-zinc-400'
                            }`}
                          >
                            <span>{msg.createdAt}</span>
                            {isAgent && <Check className="w-3 h-3 text-rose-200" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Composer e Controle de Respostas Rápidas */}
                <div className={`p-4 border-t relative transition-colors ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100/70'
                }`}>
                  
                  {/* Popover de Respostas Rápidas com atalho "/" */}
                  {showQuickReplies && (
                    <div className={`absolute bottom-full left-4 right-4 mb-2 p-3 rounded-2xl border shadow-xl z-20 max-h-60 overflow-y-auto ${
                      isDarkMode ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-rose-200'
                    }`}>
                      <div className="flex items-center justify-between mb-2 pb-1 border-b border-zinc-100 dark:border-zinc-800">
                        <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400">
                          ⚡ RESPOSTAS RÁPIDAS DA GLOSSY
                        </span>
                        <button
                          onClick={() => setShowQuickReplies(false)}
                          className="text-[10px] text-zinc-400 hover:text-zinc-600"
                        >
                          Fechar (Esc)
                        </button>
                      </div>
                      <div className="space-y-1">
                        {INITIAL_QUICK_REPLIES.map((qr) => (
                          <div
                            key={qr.id}
                            onClick={() => applyQuickReply(qr)}
                            className="p-2 rounded-xl text-xs hover:bg-rose-50 dark:hover:bg-zinc-800 cursor-pointer transition-all"
                          >
                            <div className="flex items-center justify-between font-bold text-zinc-800 dark:text-zinc-200">
                              <span>{qr.title}</span>
                              <code className="text-[10px] font-mono text-rose-600 dark:text-rose-400">
                                {qr.shortcut}
                              </code>
                            </div>
                            <p className="text-[11px] text-zinc-500 truncate mt-0.5">
                              {qr.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Barra de Alternância: Modo Mensagem Cliente vs Nota Interna */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-[11px] font-semibold">
                      <button
                        onClick={() => setComposerMode('client')}
                        className={`px-3 py-1 rounded-lg transition-all ${
                          composerMode === 'client'
                            ? 'bg-white dark:bg-zinc-700 text-rose-600 dark:text-rose-400 shadow-sm'
                            : 'text-zinc-500 hover:text-zinc-800'
                        }`}
                      >
                        Mensagem WhatsApp
                      </button>
                      <button
                        onClick={() => setComposerMode('internal_note')}
                        className={`px-3 py-1 rounded-lg flex items-center gap-1 transition-all ${
                          composerMode === 'internal_note'
                            ? 'bg-amber-400 text-amber-950 font-bold shadow-sm'
                            : 'text-zinc-500 hover:text-zinc-800'
                        }`}
                      >
                        <Lock className="w-3 h-3" />
                        <span>Nota Interna (Amarela)</span>
                      </button>
                    </div>

                    <button
                      onClick={() => setShowQuickReplies(!showQuickReplies)}
                      className="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1"
                    >
                      <span>Usar Atalhos (/)</span>
                    </button>
                  </div>

                  {/* Input e Ações */}
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder={
                        composerMode === 'internal_note'
                          ? 'Escreva uma anotação interna (visível apenas para equipe Luana/Vértice)...'
                          : 'Digite sua mensagem para a cliente (ou digite / para atalhos)...'
                      }
                      value={chatComposerText}
                      onChange={(e) => {
                        setChatComposerText(e.target.value);
                        if (e.target.value.endsWith('/')) {
                          setShowQuickReplies(true);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSendMessage();
                      }}
                      className={`flex-1 px-4 py-2.5 rounded-2xl text-xs border focus:outline-none focus:ring-2 transition-all ${
                        composerMode === 'internal_note'
                          ? 'bg-amber-50/80 border-amber-300 text-amber-950 focus:ring-amber-500'
                          : isDarkMode
                          ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-rose-500'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:ring-rose-500'
                      }`}
                    />

                    <button
                      onClick={handleSendMessage}
                      className={`p-2.5 rounded-2xl text-white transition-all transform active:scale-95 shadow-md ${
                        composerMode === 'internal_note'
                          ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/20 text-amber-950'
                          : 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20'
                      }`}
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

              {/* COLUNA 3: PERFIL DO CONTATO, LOCALIZAÇÃO & CONDICIONAIS */}
              <div className={`w-80 shrink-0 border-l flex flex-col p-5 overflow-y-auto transition-colors ${
                isDarkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-rose-100/70'
              }`}>
                {/* Perfil Header */}
                <div className="text-center pb-5 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border-2 border-rose-300">
                    {activeConversation.contactAvatar && (
                      <Image
                        src={activeConversation.contactAvatar}
                        alt={activeConversation.contactName}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {activeConversation.contactName}
                  </h3>
                  <p className="text-xs text-rose-600 dark:text-rose-400 font-medium">
                    {activeConversation.contactPhone}
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    📍 {activeConversation.neighborhood} • {activeConversation.city}
                  </p>
                </div>

                {/* Tags do Lead */}
                <div className="py-4 border-b border-zinc-100 dark:border-zinc-800">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                    Tags de Perfil
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeConversation.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 dark:bg-zinc-800 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Malinha Condicional Vinculada */}
                <div className="py-4 border-b border-zinc-100 dark:border-zinc-800">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                    Malinha Condicional
                  </span>
                  {activeConversation.condicionalItems && activeConversation.condicionalItems.length > 0 ? (
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-300 text-xs">
                        <div className="font-bold flex items-center justify-between mb-1">
                          <span>3 Peças em Prova</span>
                          <span className="text-rose-600 dark:text-rose-400">R$ 509,70</span>
                        </div>
                        <ul className="text-[11px] space-y-1 text-amber-800 dark:text-amber-400">
                          {activeConversation.condicionalItems.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => {
                          showToast('Venda registrada e baixa concluída no estoque!');
                        }}
                        className="w-full py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm"
                      >
                        Concluir Venda da Malinha
                      </button>
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-400">Nenhuma condicional ativa no momento.</p>
                  )}
                </div>

                {/* Observações Internas */}
                <div className="py-4">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                    Anotações Operacionais
                  </span>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-xl border border-zinc-100 dark:border-zinc-700">
                    {activeConversation.notes || 'Sem anotações no momento.'}
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* ============================================== */}
          {/* ABA 3: ESTOQUE REVISADO (7 PÁGINAS COMPLETAS) */}
          {/* ============================================== */}
          {activeTab === 'inventory' && (
            <div className="p-6 space-y-6 max-w-7xl mx-auto">
              
              {/* Header com Estatísticas e Filtros */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-serif font-bold text-zinc-900 dark:text-white">
                    Inventário Físico Uberlândia (Estoque Revisado)
                  </h2>
                  <p className="text-xs text-zinc-500">
                    Sincronizado 100% com o PDF de 7 páginas enviado em 28/10/2026.
                  </p>
                </div>

                {/* Métricas Rápidas */}
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-zinc-800 border border-rose-100 dark:border-zinc-700 text-xs">
                    <span className="text-zinc-400">Total Peças:</span>{' '}
                    <strong className="text-rose-600 dark:text-rose-400">{stockMetrics.totalPieces}</strong>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-zinc-800 border border-amber-100 dark:border-zinc-700 text-xs">
                    <span className="text-zinc-400">Black Friday:</span>{' '}
                    <strong className="text-amber-600 dark:text-amber-400">{stockMetrics.bfPieces}</strong>
                  </div>
                </div>
              </div>

              {/* Barra de Filtros e Busca */}
              <div className={`p-4 rounded-2xl border flex flex-wrap items-center gap-3 ${
                isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100/70 shadow-sm'
              }`}>
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Buscar por peça, cor ou categoria (ex: Cookie, Barolo, Live)..."
                    value={inventorySearch}
                    onChange={(e) => setInventorySearch(e.target.value)}
                    className={`w-full pl-8 pr-3 py-2 rounded-xl text-xs border focus:outline-none focus:ring-1 focus:ring-rose-500 ${
                      isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-zinc-50 border-zinc-200'
                    }`}
                  />
                </div>

                {/* Filtro por Categoria */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`px-3 py-2 rounded-xl text-xs border focus:outline-none ${
                    isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-800'
                  }`}
                >
                  <option value="Todas">Todas as Categorias</option>
                  <option value="Leggings">Leggings</option>
                  <option value="Tops">Tops</option>
                  <option value="Croppeds">Croppeds</option>
                  <option value="Bermudas e Shorts">Bermudas e Shorts</option>
                  <option value="Camisetas">Camisetas / T-Shirts</option>
                  <option value="Regatas">Regatas</option>
                  <option value="Macacões">Macacões e Conjuntos</option>
                </select>

                {/* Filtro por Tamanho */}
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className={`px-3 py-2 rounded-xl text-xs border focus:outline-none ${
                    isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-800'
                  }`}
                >
                  <option value="Todos">Todos os Tamanhos</option>
                  <option value="PP">PP</option>
                  <option value="P">P</option>
                  <option value="M">M</option>
                  <option value="G">G</option>
                  <option value="GG">GG</option>
                  <option value="Único">Único</option>
                </select>

                {/* Toggle Black Friday */}
                <button
                  onClick={() => setOnlyBlackFriday(!onlyBlackFriday)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    onlyBlackFriday
                      ? 'bg-amber-500 text-amber-950 font-bold'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  {onlyBlackFriday ? '✓ Apenas Black Friday' : 'Filtrar Black Friday'}
                </button>
              </div>

              {/* Grid de Cards de Estoque */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredInventory.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border transition-all hover:shadow-md flex flex-col justify-between ${
                      isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100/70 shadow-sm'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 dark:bg-zinc-800 text-rose-600 dark:text-rose-400">
                          Tam: {item.size}
                        </span>
                        {item.isBlackFriday && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-400">
                            Black Friday
                          </span>
                        )}
                        {item.isLastPiece && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-rose-500 text-white">
                            Última Peça
                          </span>
                        )}
                      </div>

                      <h4 className="text-xs font-bold text-zinc-900 dark:text-white">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-zinc-500 mt-0.5">
                        Cor: <strong className="text-zinc-700 dark:text-zinc-300">{item.color}</strong>
                      </p>
                      <p className="text-[10px] text-zinc-400">
                        {item.category} • {item.subcategory}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-zinc-400 block">Estoque:</span>
                        <span className={`text-xs font-bold ${item.quantity > 0 ? 'text-zinc-900 dark:text-white' : 'text-rose-500'}`}>
                          {item.quantity} unid.
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold text-rose-600 dark:text-rose-400 block">
                          R$ {item.price.toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleStockSale(item.id)}
                          disabled={item.quantity === 0}
                          className="mt-1 px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white bg-rose-500 hover:bg-rose-600 disabled:opacity-40 transition-all"
                        >
                          Baixa (-1)
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ============================================== */}
          {/* ABA 4: POSTAGENS & AUTOMAÇÃO n8n (PAINEL TIPO DAIANE) */}
          {/* ============================================== */}
          {activeTab === 'posts' && (
            <div className="p-6 space-y-6 max-w-7xl mx-auto">
              
              {/* Header Explicativo da Solução Canônica */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-serif font-bold text-zinc-900 dark:text-white">
                    Central de Postagens & Automação de Conteúdo
                  </h2>
                  <p className="text-xs text-zinc-500">
                    Painel intuitivo tipo Daiane com os 3 formatos de postagem e espelhamento no Grupo VIP.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Fluxo n8n + Meta Graph API Ativo
                  </span>
                </div>
              </div>

              {/* Comparativo Visual dos 2 Caminhos de Automação */}
              <div className={`p-5 rounded-3xl border ${
                isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100 shadow-sm'
              }`}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-3">
                  Arquitetura de Publicação: Escolha o Seu Caminho
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Caminho A */}
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-zinc-900 dark:text-white">
                        Caminho A: Painel Web Direto (Aplicação)
                      </span>
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400">
                        Manual & Visual
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">
                      A Luana seleciona a peça da grade, ajusta o preço, confere o preview idêntico ao Instagram e clica em &quot;Agendar Post&quot;.
                    </p>
                  </div>

                  {/* Caminho B */}
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-zinc-900 dark:text-white">
                        Caminho B: Fluxo Canônico Vértice n8n
                      </span>
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                        100% Automático
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">
                      O robô n8n gera os criativos com IA, envia no WhatsApp da Luana com botões <code className="text-rose-500">/postar</code> ou <code className="text-rose-500">/agendar</code>. Ao aprovar, publica no feed da <strong>@glossyluanaudia</strong> e espelha no Grupo VIP.
                    </p>
                  </div>
                </div>
              </div>

              {/* Criador de Post: Formulário Elegante + Prévia Real do Instagram */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Coluna Esquerda: Formulário Tipo Daiane (7 colunas) */}
                <div className={`lg:col-span-7 p-6 rounded-3xl border ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100/70 shadow-sm'
                }`}>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-4">
                    1. Selecione o Formato Contratual da Postagem
                  </h3>

                  {/* 3 Botões de Formatos */}
                  <div className="grid grid-cols-3 gap-2.5 mb-5">
                    <button
                      onClick={() => {
                        setNewPostFormat('comercial');
                        setNewPostCaption(INITIAL_SCHEDULED_POSTS[0].caption);
                      }}
                      className={`p-3 rounded-2xl text-left border transition-all ${
                        newPostFormat === 'comercial'
                          ? 'border-rose-500 bg-rose-50/70 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 shadow-sm'
                          : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300'
                      }`}
                    >
                      <span className="block text-xs font-bold">1. Comercial</span>
                      <span className="text-[10px] text-zinc-500">Com preço e venda direta</span>
                    </button>

                    <button
                      onClick={() => {
                        setNewPostFormat('lifestyle');
                        setNewPostCaption(INITIAL_SCHEDULED_POSTS[1].caption);
                      }}
                      className={`p-3 rounded-2xl text-left border transition-all ${
                        newPostFormat === 'lifestyle'
                          ? 'border-rose-500 bg-rose-50/70 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 shadow-sm'
                          : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300'
                      }`}
                    >
                      <span className="block text-xs font-bold">2. Lifestyle</span>
                      <span className="text-[10px] text-zinc-500">Sem preço • Benefícios</span>
                    </button>

                    <button
                      onClick={() => {
                        setNewPostFormat('apresentacao');
                        setNewPostCaption(INITIAL_SCHEDULED_POSTS[2].caption);
                      }}
                      className={`p-3 rounded-2xl text-left border transition-all ${
                        newPostFormat === 'apresentacao'
                          ? 'border-rose-500 bg-rose-50/70 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 shadow-sm'
                          : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300'
                      }`}
                    >
                      <span className="block text-xs font-bold">3. Detalhes</span>
                      <span className="text-[10px] text-zinc-500">Cós anatômico & costura</span>
                    </button>
                  </div>

                  {/* Campos do Produto */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Peça do Estoque Físico
                      </label>
                      <select
                        value={newPostProduct}
                        onChange={(e) => setNewPostProduct(e.target.value)}
                        className={`w-full px-3 py-2 rounded-xl text-xs border focus:outline-none ${
                          isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-zinc-50 border-zinc-200'
                        }`}
                      >
                        {inventory.slice(0, 15).map((item) => (
                          <option key={item.id} value={`${item.name} - ${item.color} (${item.size})`}>
                            {item.name} - {item.color} ({item.size})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Preço Sugerido (R$)
                      </label>
                      <input
                        type="text"
                        value={newPostPrice}
                        onChange={(e) => setNewPostPrice(e.target.value)}
                        className={`w-full px-3 py-2 rounded-xl text-xs border focus:outline-none ${
                          isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-zinc-50 border-zinc-200'
                        }`}
                        placeholder="189.90"
                      />
                    </div>
                  </div>

                  {/* Legenda Estruturada */}
                  <div className="mb-5">
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                      Texto da Legenda & Chamada para Ação
                    </label>
                    <textarea
                      rows={6}
                      value={newPostCaption}
                      onChange={(e) => setNewPostCaption(e.target.value)}
                      className={`w-full p-3 rounded-2xl text-xs border focus:outline-none leading-relaxed ${
                        isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-zinc-50 border-zinc-200'
                      }`}
                    />
                  </div>

                  {/* Botão de Agendamento */}
                  <button
                    onClick={handleSchedulePost}
                    className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 shadow-md shadow-rose-500/25 transition-all"
                  >
                    🚀 Agendar Publicação para @glossyluanaudia & Espelhar no Grupo VIP
                  </button>
                </div>

                {/* Coluna Direita: Pré-visualização Real no Instagram (5 colunas) */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Prévia Oficial no Instagram
                  </span>

                  <div className={`w-full max-w-sm rounded-3xl border shadow-xl overflow-hidden ${
                    isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'
                  }`}>
                    {/* Header do Mock Instagram */}
                    <div className="p-3 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden relative border border-rose-300">
                          <Image src="/luana.png" alt="Luana" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-zinc-900 dark:text-white leading-none">
                            glossyluanaudia
                          </p>
                          <span className="text-[10px] text-zinc-400">Uberlândia, Minas Gerais</span>
                        </div>
                      </div>
                      <span className="text-zinc-400 font-bold">•••</span>
                    </div>

                    {/* Imagem do Mock */}
                    <div className="relative aspect-square w-full bg-zinc-100 dark:bg-zinc-800">
                      <Image
                        src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80"
                        alt="Peça Glossy"
                        fill
                        className="object-cover"
                      />
                      {newPostFormat === 'comercial' && (
                        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-md text-white text-xs font-bold">
                          R$ {newPostPrice}
                        </div>
                      )}
                    </div>

                    {/* Ações e Legenda */}
                    <div className="p-3 text-xs">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3 text-rose-500 font-bold">
                          <span>❤️ 142</span>
                          <span>💬 18</span>
                          <span>↗️</span>
                        </div>
                        <span>🔖</span>
                      </div>

                      <p className="text-[11px] text-zinc-700 dark:text-zinc-300 leading-relaxed line-clamp-4">
                        <strong className="text-zinc-900 dark:text-white font-bold mr-1">glossyluanaudia</strong>
                        {newPostCaption}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Quadro de Postagens Agendadas */}
              <div className={`p-6 rounded-3xl border ${
                isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100/70 shadow-sm'
              }`}>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-4">
                  Quadro Semanal de Postagens Agendadas
                </h3>

                <div className="space-y-3">
                  {scheduledPosts.map((post) => (
                    <div
                      key={post.id}
                      className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-700 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
                          <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-xs font-bold text-zinc-900 dark:text-white">
                              {post.title}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400">
                              {post.format}
                            </span>
                          </div>
                          <p className="text-[11px] text-zinc-500">
                            Programado para: {post.scheduledDate} às {post.scheduledTime}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                          ✓ {post.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* ============================================== */}
          {/* ABA 5: GRUPO VIP SELECT (INSPIRADO NA RENATA SOUSA) */}
          {/* ============================================== */}
          {activeTab === 'vip_group' && (
            <div className="p-6 space-y-6 max-w-7xl mx-auto">
              
              {/* Header do Grupo VIP */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-serif font-bold text-zinc-900 dark:text-white">
                    Automação do Grupo VIP Select (Silencioso)
                  </h2>
                  <p className="text-xs text-zinc-500">
                    Estratégia de alta conversão: apenas as administradoras postam spoilers, enquetes e aberturas de condicional.
                  </p>
                </div>

                <a
                  href="https://chat.whatsapp.com/JotyAslBsLJKfqfqAJe5wG"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Acessar Link Oficial do Grupo</span>
                </a>
              </div>

              {/* Grid dos 3 Modelos Prontos para Disparo */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* 1. Spoiler Imediato */}
                <div className={`p-5 rounded-3xl border flex flex-col justify-between ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100 shadow-sm'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                        🚨 SPOILER EXCLUSIVO
                      </span>
                      <span className="text-[10px] text-zinc-400">Alta Urgência</span>
                    </div>
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-white mb-2">
                      Cor Cookie Chegou em Uberlândia
                    </h4>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed bg-zinc-50 dark:bg-zinc-800 p-3 rounded-xl mb-4 whitespace-pre-wrap">
                      {INITIAL_VIP_POSTS[0].text}
                    </p>
                  </div>
                  <button
                    onClick={() => handleVipDrop('Spoiler Exclusivo')}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-rose-500 hover:bg-rose-600 shadow-md shadow-rose-500/20 transition-all"
                  >
                    Disparar Spoiler no Grupo VIP
                  </button>
                </div>

                {/* 2. Enquete Interativa */}
                <div className={`p-5 rounded-3xl border flex flex-col justify-between ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100 shadow-sm'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        📊 ENQUETE INTERATIVA
                      </span>
                      <span className="text-[10px] text-zinc-400">Engajamento</span>
                    </div>
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-white mb-2">
                      Qual sua cor favorita para o próximo pedido?
                    </h4>
                    <div className="space-y-1.5 mb-4">
                      {INITIAL_VIP_POSTS[1].pollOptions?.map((opt, i) => (
                        <div key={i} className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-[11px] text-zinc-700 dark:text-zinc-300">
                          🔘 {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => handleVipDrop('Enquete Interativa')}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 shadow-md shadow-amber-500/20 transition-all text-amber-950"
                  >
                    Criar Enquete no Grupo VIP
                  </button>
                </div>

                {/* 3. Abertura de Condicionais */}
                <div className={`p-5 rounded-3xl border flex flex-col justify-between ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100 shadow-sm'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        🛍️ CONDICIONAIS DA SEMANA
                      </span>
                      <span className="text-[10px] text-zinc-400">Fechamento</span>
                    </div>
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-white mb-2">
                      Agenda de Malinhas Aberta
                    </h4>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed bg-zinc-50 dark:bg-zinc-800 p-3 rounded-xl mb-4 whitespace-pre-wrap">
                      {INITIAL_VIP_POSTS[2].text}
                    </p>
                  </div>
                  <button
                    onClick={() => handleVipDrop('Aviso de Condicionais')}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all"
                  >
                    Abrir Vagas de Condicionais
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* ============================================== */}
          {/* ABA 6: LINKTREE & FOTO DE PERFIL GLOSSY */}
          {/* ============================================== */}
          {activeTab === 'linktree' && (
            <div className="p-6 space-y-6 max-w-7xl mx-auto">
              
              {/* Header */}
              <div>
                <h2 className="text-lg font-serif font-bold text-zinc-900 dark:text-white">
                  Gerador de Linktree & Identidade Visual Glossy
                </h2>
                <p className="text-xs text-zinc-500">
                  Página de links oficiais da Luana e fotos de perfil padronizadas no modelo Glossy By Renata Sousa.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Coluna Esquerda: Mockup Smartphone Linktree (6 colunas) */}
                <div className="lg:col-span-6 flex flex-col items-center">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                    Simulador do Linktree Oficial (@glossyluanaudia)
                  </span>

                  {/* Smartphone Frame */}
                  <div className="w-full max-w-sm rounded-[40px] border-4 border-zinc-800 p-4 shadow-2xl bg-gradient-to-b from-[#f9f4ef] via-white to-[#f5ede4] text-zinc-900">
                    
                    {/* Header do Perfil */}
                    <div className="text-center pt-4 pb-6">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-rose-400 shadow-lg">
                        <Image src="/luana.png" alt="Luana Frias" fill className="object-cover" />
                      </div>
                      <h3 className="font-serif font-bold text-base tracking-wide text-zinc-900">
                        {LINKTREE_CONFIG.title}
                      </h3>
                      <p className="text-[11px] font-semibold text-rose-600 mt-0.5">
                        {LINKTREE_CONFIG.subtitle}
                      </p>
                      <p className="text-[10px] text-zinc-500 mt-2 px-4 leading-relaxed">
                        {LINKTREE_CONFIG.bio}
                      </p>
                    </div>

                    {/* Botões do Linktree */}
                    <div className="space-y-3 pb-6">
                      {LINKTREE_CONFIG.buttons.map((btn) => (
                        <a
                          key={btn.id}
                          href={btn.url}
                          target="_blank"
                          rel="noreferrer"
                          className="block p-3.5 rounded-2xl bg-white border border-rose-100 shadow-sm hover:shadow-md transition-all text-center group"
                        >
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-rose-500">
                              {btn.badge}
                            </span>
                            <ExternalLink className="w-3 h-3 text-zinc-300 group-hover:text-rose-500" />
                          </div>
                          <span className="text-xs font-bold text-zinc-900 block">
                            {btn.title}
                          </span>
                          <span className="text-[10px] text-zinc-500 block mt-0.5">
                            {btn.subtitle}
                          </span>
                        </a>
                      ))}
                    </div>

                    <div className="text-center pb-2">
                      <span className="text-[9px] font-medium text-zinc-400">
                        Powered by Vértice Tecnologia
                      </span>
                    </div>

                  </div>
                </div>

                {/* Coluna Direita: Gerador de Fotos de Perfil Glossy (6 colunas) */}
                <div className={`lg:col-span-6 p-6 rounded-3xl border ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100 shadow-sm'
                }`}>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-2">
                    Fotos de Perfil Padrão Glossy (Identidade Oficial)
                  </h3>
                  <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                    A marca Glossy utiliza o flamingo com paletas de fundo contrastantes. Escolha a sua preferida para usar no Instagram e WhatsApp:
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Opção 1: Degradê Arco-íris Oficial */}
                    <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 text-center">
                      <div className="w-16 h-16 rounded-full mx-auto mb-2 bg-gradient-to-tr from-amber-400 via-rose-500 to-fuchsia-600 flex items-center justify-center text-white text-3xl shadow-lg">
                        🦩
                      </div>
                      <span className="text-xs font-bold text-zinc-900 dark:text-white block">Degradê Oficial</span>
                      <span className="text-[10px] text-zinc-400">Padrão Matriz Glossy</span>
                    </div>

                    {/* Opção 2: Rosa Chiclete */}
                    <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 text-center">
                      <div className="w-16 h-16 rounded-full mx-auto mb-2 bg-rose-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-rose-500/20">
                        🦩
                      </div>
                      <span className="text-xs font-bold text-zinc-900 dark:text-white block">Rosa Glossy</span>
                      <span className="text-[10px] text-zinc-400">Delicado & Feminino</span>
                    </div>

                    {/* Opção 3: Preto Acetinado Luxo */}
                    <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 text-center">
                      <div className="w-16 h-16 rounded-full mx-auto mb-2 bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white text-3xl shadow-lg">
                        🦩
                      </div>
                      <span className="text-xs font-bold text-zinc-900 dark:text-white block">Preto Cirrê Luxo</span>
                      <span className="text-[10px] text-zinc-400">Sofisticação</span>
                    </div>

                    {/* Opção 4: Foto da Luana com Moldura */}
                    <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 text-center">
                      <div className="relative w-16 h-16 rounded-full mx-auto mb-2 border-2 border-rose-500 overflow-hidden shadow-lg">
                        <Image src="/luana.png" alt="Luana" fill className="object-cover" />
                      </div>
                      <span className="text-xs font-bold text-zinc-900 dark:text-white block">Luana Frias</span>
                      <span className="text-[10px] text-zinc-400">Foto Pessoal Humanizada</span>
                    </div>
                  </div>

                  <button
                    onClick={() => showToast('Foto de perfil salva e enviada para o seu dispositivo!')}
                    className="w-full mt-6 py-2.5 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 transition-all"
                  >
                    Exportar Conjunto de Imagens para o WhatsApp
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* ============================================== */}
          {/* ABA 7: CANAIS & WHATSAPP QR CODE */}
          {/* ============================================== */}
          {activeTab === 'channels' && (
            <div className="p-6 space-y-6 max-w-4xl mx-auto">
              
              <div className="text-center max-w-xl mx-auto">
                <h2 className="text-lg font-serif font-bold text-zinc-900 dark:text-white">
                  Conexão Oficial WhatsApp Web
                </h2>
                <p className="text-xs text-zinc-500 mt-1">
                  Mantenha o seu número comercial conectado de forma transparente e amigável, sem necessidade de servidores técnicos complexos.
                </p>
              </div>

              {/* Card Central Amigável Estilo WhatsApp Web */}
              <div className={`p-8 rounded-3xl border shadow-xl max-w-md mx-auto text-center ${
                isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-rose-100'
              }`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  Número Oficial: +55 (34) 99300-2424
                </div>

                {/* QR Code Simulado Dinâmico */}
                <div className="relative w-56 h-56 mx-auto bg-zinc-100 dark:bg-zinc-800 rounded-3xl p-4 flex items-center justify-center border-2 border-dashed border-zinc-300 dark:border-zinc-700 shadow-inner mb-6">
                  <QrCode className="w-40 h-40 text-zinc-800 dark:text-zinc-200" />
                  <div className="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-zinc-900/80 backdrop-blur-xs rounded-3xl">
                    <div className="text-center">
                      <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-1" />
                      <span className="text-xs font-bold text-zinc-900 dark:text-white">
                        Sessão Ativa & Conectada
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                  Aparelho da Luana sincronizado. As mensagens recebidas dos clientes de Uberlândia chegam instantaneamente na coluna de atendimento do CRM.
                </p>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setQrSecondsLeft(45);
                      showToast('Sessão revalidada com sucesso!');
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-semibold border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  >
                    Revalidar Conexão ({qrSecondsLeft}s)
                  </button>
                  <button
                    onClick={() => showToast('Testando canal... Mensagem de teste enviada para Luana!')}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-rose-500 hover:bg-rose-600 shadow-sm"
                  >
                    Testar Disparo WhatsApp
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* ============================================== */}
          {/* ABA 8: CLUBE VIP & FIDELIDADE */}
          {/* ============================================== */}
          {activeTab === 'loyalty' && (
            <div className="p-8 max-w-2xl mx-auto text-center space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto text-3xl">
                🎁
              </div>
              <h2 className="text-xl font-serif font-bold text-zinc-900 dark:text-white">
                Clube de Fidelidade & Sorteios VIP
              </h2>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-400">
                Módulo em Construção • Fase 2
              </span>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-md mx-auto">
                Este módulo incluirá o acúmulo de pontos a cada compra de peças em Uberlândia, brindes automáticos para clientes fiéis e a roleta de prêmios para sorteios semanais no Grupo VIP Select.
              </p>
              <button
                onClick={() => setActiveTab('overview')}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 hover:bg-rose-50"
              >
                Voltar à Visão Geral
              </button>
            </div>
          )}

        </div>
      </main>

    </div>
  );
}
