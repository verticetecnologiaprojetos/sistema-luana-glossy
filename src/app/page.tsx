'use client';

import React, { useState, useMemo, useEffect } from 'react';
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
  AlertCircle,
  Paperclip,
  Smile,
  X,
  Trash2,
  Edit3,
  Download,
  Smartphone,
  CheckSquare,
  Square,
  Eye
} from 'lucide-react';

import {
  INITIAL_INVENTORY,
  INITIAL_CONVERSATIONS,
  INITIAL_MESSAGES,
  INITIAL_QUICK_REPLIES,
  INITIAL_SCHEDULED_POSTS,
  INITIAL_VIP_POSTS,
  INITIAL_WHATSAPP_GROUPS,
  INITIAL_LINKTREE_ITEMS,
  INITIAL_USER_PROFILE,
  UBERLANDIA_NEIGHBORHOODS,
  CATALOG_LINKS
} from '../data/initialData';

import {
  InventoryItem,
  Conversation,
  Message,
  QuickReply,
  ScheduledPost,
  VipGroupPost,
  WhatsAppGroup,
  LinktreeItem,
  UserProfile,
  SacolinhaCondicional,
  SacolinhaItem,
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
  // Tema Visual: Padrão Light Boutique (Alta Moda Feminina)
  // ----------------------------------------------------
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // ----------------------------------------------------
  // Navegação Lateral (Vertical Sidebar)
  // ----------------------------------------------------
  const [activeTab, setActiveTab] = useState<
    'overview' | 'crm' | 'inventory' | 'posts' | 'vip_group' | 'linktree' | 'connection' | 'settings'
  >('overview');

  // ----------------------------------------------------
  // Estados de Dados da Aplicação
  // ----------------------------------------------------
  const [inventory, setInventory] = useState<InventoryItem[]>(INITIAL_INVENTORY);
  const [conversations, setConversations] = useState<Conversation[]>(INITIAL_CONVERSATIONS);
  const [messages, setMessages] = useState<Record<string, Message[]>>(INITIAL_MESSAGES);
  const [scheduledPosts, setScheduledPosts] = useState<ScheduledPost[]>(INITIAL_SCHEDULED_POSTS);
  const [vipPosts, setVipPosts] = useState<VipGroupPost[]>(INITIAL_VIP_POSTS);
  const [whatsappGroups, setWhatsappGroups] = useState<WhatsAppGroup[]>(INITIAL_WHATSAPP_GROUPS);
  const [selectedGroupId, setSelectedGroupId] = useState<string>(INITIAL_WHATSAPP_GROUPS[0].id);
  const [linktreeItems, setLinktreeItems] = useState<LinktreeItem[]>(INITIAL_LINKTREE_ITEMS);
  const [userProfile, setUserProfile] = useState<UserProfile>(INITIAL_USER_PROFILE);
  const [neighborhoods, setNeighborhoods] = useState<string[]>(UBERLANDIA_NEIGHBORHOODS);

  // CRM Omnichannel States
  const [activeQueue, setActiveQueue] = useState<ConversationQueue>('meus');
  const [selectedConversationId, setSelectedConversationId] = useState<string>('conv-1');
  const [chatComposerText, setChatComposerText] = useState('');
  const [composerMode, setComposerMode] = useState<'client' | 'internal_note'>('client');
  const [showQuickReplies, setShowQuickReplies] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [crmSearchQuery, setCrmSearchQuery] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState<string | null>(null);

  // Modal: Montar Sacolinha Condicional
  const [isSacolinhaModalOpen, setIsSacolinhaModalOpen] = useState(false);
  const [sacolinhaSelectedClient, setSacolinhaSelectedClient] = useState('conv-1');
  const [sacolinhaSelectedNeighborhood, setSacolinhaSelectedNeighborhood] = useState('Morada da Colina');
  const [sacolinhaReturnHours, setSacolinhaReturnHours] = useState('24');
  const [sacolinhaSelectedItems, setSacolinhaSelectedItems] = useState<InventoryItem[]>([]);

  // Modal: Nova Peça de Estoque
  const [isNewItemModalOpen, setIsNewItemModalOpen] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<ItemCategory>('Leggings');
  const [newItemSubcategory, setNewItemSubcategory] = useState('Tradicional');
  const [newItemSize, setNewItemSize] = useState<ItemSize>('M');
  const [newItemColor, setNewItemColor] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('1');
  const [newItemPrice, setNewItemPrice] = useState('189.90');
  const [newItemCostPrice, setNewItemCostPrice] = useState('95.00');
  const [newItemIsBlackFriday, setNewItemIsBlackFriday] = useState(false);

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

  // Grupo VIP: Formulários de Disparo
  const [pollQuestion, setPollQuestion] = useState('Qual dessas tonalidades NÃO pode faltar no seu próximo pedido?');
  const [pollOptions, setPollOptions] = useState<string[]>([
    'Cookie & Café (Tons Terrosos)',
    'Barolo & Vinho (Chic)',
    'Croco & Bonsai (Verdes)',
    'Preto Cirrê (Acetinado)'
  ]);
  const [spoilerTitle, setSpoilerTitle] = useState('🚨 MENINAS, ELA CHEGOU! Nova Tonalidade Cookie!');
  const [spoilerText, setSpoilerText] = useState('Separamos pouquíssimas unidades para o estoque de Uberlândia! Quem quiser reservar antes de postarmos no feed oficial do Instagram, me chama no privado! 👇🏃‍♀️');
  const [promoText, setPromoText] = useState('PROMOÇÃO RELÂMPAGO NO GRUPO VIP: Leggings e Tops selecionados com 20% de desconto no Pix!');

  // Conexão WhatsApp UaZapi Real (https://fsdistribuidora.uazapi.com)
  const [isWhatsAppConnected, setIsWhatsAppConnected] = useState(false);
  const [isConnectingWhatsApp, setIsConnectingWhatsApp] = useState(false);
  const [realQrCode, setRealQrCode] = useState<string | null>(null);
  const [pairCode, setPairCode] = useState<string | null>(null);
  const [connectionPhone, setConnectionPhone] = useState('553493002424');
  const [uazapiStatus, setUazapiStatus] = useState<string>('disconnected');

  // Painel de Aprovação & Prévia de Conteúdo (In-App)
  const [selectedPreviewPost, setSelectedPreviewPost] = useState<ScheduledPost>(INITIAL_SCHEDULED_POSTS[0]);
  const [isPublishingPostId, setIsPublishingPostId] = useState<string | null>(null);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editingCaptionText, setEditingCaptionText] = useState<string>('');
  const [contentFilter, setContentFilter] = useState<'todos' | 'aguardando' | 'publicado'>('todos');

  // Toast / Feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Checar status real do UaZapi na inicialização
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await fetch('/api/whatsapp/status');
        const data = await res.json();
        if (data.success) {
          const isConnected = data.status === 'connected' || data.status === 'open';
          setIsWhatsAppConnected(isConnected);
          setUazapiStatus(data.status || 'disconnected');
        }
      } catch (e) {
        console.error('Erro ao consultar status UaZapi:', e);
      }
    };
    checkStatus();
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
      senderName: userProfile.name,
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
    showToast(isInternal ? 'Nota interna gravada com sucesso!' : 'Mensagem enviada com sucesso!');
  };

  // Simular envio de anexo (Imagem ou PDF)
  const handleAttachFile = (type: 'image' | 'document') => {
    const fileName = type === 'image' ? 'catalogo_cores_cookie.jpg' : 'Catalogo_Colecao_Sport_2026.pdf';
    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      conversationId: selectedConversationId,
      senderType: 'agent',
      senderName: userProfile.name,
      content: type === 'image' ? '📸 Foto enviada: Amostra da Legging Cookie M' : '📄 Documento enviado: Catálogo Coleção Sport 2026 (PDF)',
      mediaType: type,
      fileName,
      status: 'sent',
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => ({
      ...prev,
      [selectedConversationId]: [...(prev[selectedConversationId] || []), newMsg]
    }));
    showToast(`Arquivo "${fileName}" anexado e enviado!`);
  };

  // Simular gravação de áudio PTT
  const handleRecordAudio = () => {
    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      conversationId: selectedConversationId,
      senderType: 'agent',
      senderName: userProfile.name,
      content: 'Áudio com detalhes e orientações de prova da peça.',
      mediaType: 'audio',
      audioDuration: '0:18',
      status: 'sent',
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => ({
      ...prev,
      [selectedConversationId]: [...(prev[selectedConversationId] || []), newMsg]
    }));
    showToast('Áudio PTT gravado e enviado!');
  };

  // Aplicar resposta rápida
  const applyQuickReply = (qr: QuickReply) => {
    setChatComposerText(qr.content);
    setShowQuickReplies(false);
  };

  // Adicionar peça ao estoque (+1)
  const handleAddQuantity = (itemId: string) => {
    setInventory((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item))
    );
    showToast('Entrada de 1 peça registrada!');
  };

  // Baixa rápida de estoque por venda (-1)
  const handleStockSale = (itemId: string) => {
    setInventory((prev) =>
      prev.map((item) => {
        if (item.id === itemId && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
    showToast('Baixa de 1 peça registrada no estoque!');
  };

  // Cadastrar nova peça no estoque
  const handleCreateNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName || !newItemColor) {
      showToast('Por favor preencha o nome da peça e a cor.');
      return;
    }

    const newItem: InventoryItem = {
      id: `item-${Date.now()}`,
      name: newItemName,
      category: newItemCategory,
      subcategory: newItemSubcategory,
      size: newItemSize,
      color: newItemColor,
      quantity: parseInt(newItemQuantity, 10) || 1,
      price: parseFloat(newItemPrice) || 189.90,
      costPrice: parseFloat(newItemCostPrice) || 95.00,
      isBlackFriday: newItemIsBlackFriday
    };

    setInventory((prev) => [newItem, ...prev]);
    setIsNewItemModalOpen(false);
    setNewItemName('');
    setNewItemColor('');
    showToast(`Peça "${newItem.name} (${newItem.color})" cadastrada com sucesso!`);
  };

  // Montar e despachar sacolinha condicional
  const handleCreateSacolinha = () => {
    if (sacolinhaSelectedItems.length === 0) {
      showToast('Selecione pelo menos 1 peça para a sacolinha!');
      return;
    }

    const conv = conversations.find((c) => c.id === sacolinhaSelectedClient) || activeConversation;
    const items: SacolinhaItem[] = sacolinhaSelectedItems.map((item) => ({
      itemId: item.id,
      name: item.name,
      size: item.size,
      color: item.color,
      price: item.price,
      status: 'em_prova'
    }));

    const totalVal = items.reduce((sum, i) => sum + i.price, 0);

    const newSacolinha: SacolinhaCondicional = {
      id: `sac-${Date.now().toString().slice(-4)}`,
      conversationId: conv.id,
      contactName: conv.contactName,
      contactPhone: conv.contactPhone,
      neighborhood: sacolinhaSelectedNeighborhood,
      items,
      totalValue: totalVal,
      dispatchedAt: `Hoje às ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
      returnDeadline: `${sacolinhaReturnHours} horas após entrega`,
      status: 'ativa',
      deliveryFee: 0.00
    };

    // Atualiza conversa com a sacolinha ativa e estágio
    setConversations((prev) =>
      prev.map((c) =>
        c.id === conv.id
          ? {
              ...c,
              activeSacolinha: newSacolinha,
              stage: 'Condicional Enviado',
              dealValue: totalVal,
              lastMessage: `🛍️ Sacolinha #${newSacolinha.id} despachada com ${items.length} peças`,
              lastMessageTime: 'Agora'
            }
          : c
      )
    );

    // Registra nota interna na timeline
    const internalNote: Message = {
      id: `msg-${Date.now()}`,
      conversationId: conv.id,
      senderType: 'system',
      content: `🔒 NOTA INTERNA VÉRTICE: Sacolinha #${newSacolinha.id} montada e despachada para ${sacolinhaSelectedNeighborhood}. Itens: ${items.map((i) => `${i.name} ${i.color} (${i.size})`).join(', ')}. Valor total em prova: R$ ${totalVal.toFixed(2)}. Prazo de retorno: ${sacolinhaReturnHours}h.`,
      isInternalNote: true,
      status: 'read',
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Mensagem pronta para a cliente
    const clientMessage: Message = {
      id: `msg-${Date.now() + 1}`,
      conversationId: conv.id,
      senderType: 'agent',
      senderName: userProfile.name,
      content: `Oii ${conv.contactName}! ✨ Sua Sacolinha Condicional Glossy está pronta e a caminho do ${sacolinhaSelectedNeighborhood}! 🛍️\n\nPeças separadas com carinho:\n${items.map((i) => `• ${i.name} - ${i.color} (Tam ${i.size}) - R$ ${i.price.toFixed(2)}`).join('\n')}\n\nVocê tem ${sacolinhaReturnHours} horas para provar com calma em casa. Qualquer dúvida é só me chamar! 💖`,
      status: 'sent',
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => ({
      ...prev,
      [conv.id]: [...(prev[conv.id] || []), internalNote, clientMessage]
    }));

    setIsSacolinhaModalOpen(false);
    setSacolinhaSelectedItems([]);
    showToast(`Sacolinha #${newSacolinha.id} criada e despachada para ${conv.contactName}!`);
  };

  // Atualizar status de item da sacolinha (Comprado vs Devolvido)
  const handleUpdateSacolinhaItemStatus = (itemId: string, newStatus: 'comprado' | 'devolvido' | 'em_prova') => {
    if (!activeConversation.activeSacolinha) return;

    const updatedItems = activeConversation.activeSacolinha.items.map((item) =>
      item.itemId === itemId ? { ...item, status: newStatus } : item
    );

    const updatedSacolinha: SacolinhaCondicional = {
      ...activeConversation.activeSacolinha,
      items: updatedItems
    };

    setConversations((prev) =>
      prev.map((c) => (c.id === activeConversation.id ? { ...c, activeSacolinha: updatedSacolinha } : c))
    );

    showToast(`Peça marcada como: ${newStatus.toUpperCase()}`);
  };

  // Concluir venda da sacolinha
  const handleFinalizeSacolinha = () => {
    if (!activeConversation.activeSacolinha) return;

    const boughtItems = activeConversation.activeSacolinha.items.filter((i) => i.status === 'comprado');
    const returnedItems = activeConversation.activeSacolinha.items.filter((i) => i.status === 'devolvido');
    const finalAmount = boughtItems.reduce((sum, i) => sum + i.price, 0);

    // Baixa automática no estoque das peças compradas
    boughtItems.forEach((b) => {
      handleStockSale(b.itemId);
    });

    const noteMsg: Message = {
      id: `msg-${Date.now()}`,
      conversationId: activeConversation.id,
      senderType: 'system',
      content: `🔒 NOTA INTERNA VÉRTICE: Sacolinha #${activeConversation.activeSacolinha.id} finalizada! Venda concluída de ${boughtItems.length} peças (Total: R$ ${finalAmount.toFixed(2)}). Baixa realizada no estoque. Peças devolvidas: ${returnedItems.length}.`,
      isInternalNote: true,
      status: 'read',
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => ({
      ...prev,
      [activeConversation.id]: [...(prev[activeConversation.id] || []), noteMsg]
    }));

    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeConversation.id
          ? {
              ...c,
              stage: 'Venda Concluída',
              dealValue: finalAmount,
              activeSacolinha: undefined,
              lastMessage: `✅ Venda concluída: R$ ${finalAmount.toFixed(2)}`,
              lastMessageTime: 'Agora'
            }
          : c
      )
    );

    showToast(`Venda finalizada com sucesso! Total: R$ ${finalAmount.toFixed(2)}`);
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
      hashtags: ['#GlossyUberlandia', '#ModaFitness', '#LookDeTreino', '#Uberlandia'],
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
    showToast('Post programado com sucesso!');
  };

  // Disparo simulado no Grupo VIP
  const handleVipDrop = (type: string, title: string) => {
    const group = whatsappGroups.find((g) => g.id === selectedGroupId) || whatsappGroups[0];
    showToast(`Disparo de ${type} enviado com sucesso para o grupo: "${group.name}"!`);
  };

  // Gerar QR Code Real via UaZapi (fsdistribuidora.uazapi.com)
  const handleGenerateRealQr = async () => {
    setIsConnectingWhatsApp(true);
    setRealQrCode(null);
    setPairCode(null);
    try {
      const res = await fetch('/api/whatsapp/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: connectionPhone })
      });
      const data = await res.json();
      if (data.success && (data.qrcode || data.paircode)) {
        setRealQrCode(data.qrcode || null);
        setPairCode(data.paircode || null);
        setUazapiStatus('qrcode_pronto');
        showToast('QR Code oficial do UaZapi gerado com sucesso!');
      } else {
        showToast(data.message || 'Instância respondeu sem QR Code');
      }
    } catch (e) {
      showToast('Erro ao comunicar com a API do UaZapi');
    } finally {
      setIsConnectingWhatsApp(false);
    }
  };

  // Verificar Status Real no UaZapi
  const handleCheckWhatsAppStatus = async () => {
    try {
      const res = await fetch('/api/whatsapp/status');
      const data = await res.json();
      if (data.success) {
        const isConnected = data.status === 'connected' || data.status === 'open';
        setIsWhatsAppConnected(isConnected);
        setUazapiStatus(data.status || 'disconnected');
        if (isConnected) {
          setRealQrCode(null);
          showToast('✅ WhatsApp Conectado e Sincronizado ao CRM!');
        } else {
          showToast(`Status UaZapi: ${data.status || 'Desconectado'}`);
        }
      } else {
        showToast('Não foi possível obter o status da instância');
      }
    } catch (e) {
      showToast('Erro de conexão com UaZapi');
    }
  };

  // Desconectar Sessão WhatsApp Real
  const handleDisconnectWhatsApp = async () => {
    try {
      await fetch('/api/whatsapp/disconnect', { method: 'POST' });
      setIsWhatsAppConnected(false);
      setRealQrCode(null);
      setPairCode(null);
      setUazapiStatus('disconnected');
      showToast('Sessão do WhatsApp desconectada no UaZapi.');
    } catch (e) {
      showToast('Erro ao desconectar');
    }
  };

  // Aprovar Post e Disparar no n8n Tel System
  const handleApproveAndPublishPost = async (post: ScheduledPost) => {
    setIsPublishingPostId(post.id);
    try {
      const res = await fetch('/api/content/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postId: post.id,
          title: post.title,
          caption: post.caption,
          productName: post.productName,
          price: post.price,
          imageUrl: post.imageUrl,
          channels: post.channels
        })
      });
      const data = await res.json();
      if (data.success) {
        setScheduledPosts((prev) =>
          prev.map((p) => (p.id === post.id ? { ...p, status: 'publicado' as const } : p))
        );
        showToast('🚀 Aprovado! Post disparado para o n8n Tel System e publicado!');
      } else {
        showToast(`Erro no n8n: ${data.error || 'Falha no webhook'}`);
      }
    } catch (e) {
      showToast('Erro de comunicação com o webhook n8n');
    } finally {
      setIsPublishingPostId(null);
    }
  };

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      setIsAuthenticated(true);
      setLoginError('');
      showToast(`Bem-vinda, ${userProfile.name}!`);
    } else {
      setLoginError('Por favor preencha o e-mail e a senha.');
    }
  };

  // ----------------------------------------------------
  // TELA DE LOGIN (Autenticação Corporativa)
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-4 transition-colors ${
        isDarkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-[#FAF8F5] text-zinc-900'
      }`}>
        <div className={`w-full max-w-md p-8 rounded-3xl shadow-xl border transition-all ${
          isDarkMode ? 'bg-zinc-900/90 border-zinc-800' : 'bg-white border-[#EFE7DE]'
        }`}>
          {/* Logo Oficial Condensed Typography */}
          <div className="text-center mb-8">
            <img
              src={isDarkMode ? "/brand/glossy-horizontal-branco.png" : "/brand/glossy-horizontal-preto.png"}
              alt="Glossy Oficial"
              className="h-10 mx-auto mb-3 object-contain"
            />
            <p className="text-[10px] tracking-widest uppercase font-semibold text-zinc-400">
              UBERLÂNDIA • MODA FITNESS DE ALTO PADRÃO
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 text-xs rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-200">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-300 mb-1">
                E-mail ou Usuário
              </label>
              <input
                type="text"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl text-xs border focus:outline-none focus:ring-1 focus:ring-zinc-800 transition-all ${
                  isDarkMode
                    ? 'bg-zinc-800 border-zinc-700 text-white'
                    : 'bg-[#FAF8F5] border-[#EFE7DE] text-zinc-900'
                }`}
                placeholder="luana@glossyluanaudia.com.br"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-300 mb-1">
                Senha de Acesso
              </label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl text-xs border focus:outline-none focus:ring-1 focus:ring-zinc-800 transition-all ${
                  isDarkMode
                    ? 'bg-zinc-800 border-zinc-700 text-white'
                    : 'bg-[#FAF8F5] border-[#EFE7DE] text-zinc-900'
                }`}
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 shadow-md transition-all active:scale-[0.99]"
            >
              Acessar Painel de Gestão
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800 text-center">
            <button
              onClick={() => {
                setLoginEmail('luana@glossyluanaudia.com.br');
                setLoginPassword('Glossylu@24');
                setIsAuthenticated(true);
              }}
              className="text-xs font-semibold text-[#C87D6B] dark:text-[#E29578] hover:underline"
            >
              ⚡ Login Rápido: Entrar como Luana Frias
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
    <div className={`min-h-screen flex ${isDarkMode ? 'dark bg-zinc-950 text-zinc-100' : 'bg-[#FAF8F5] text-zinc-900'}`}>
      
      {/* Toast Notification Flutuante */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-900 text-white shadow-2xl border border-zinc-800 animate-slide-up text-xs font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* -------------------------------------------------- */}
      {/* 1. SIDEBAR VERTICAL (MENU LATERAL FIXO) */}
      {/* -------------------------------------------------- */}
      <aside className={`w-64 shrink-0 border-r flex flex-col justify-between transition-colors z-30 ${
        isDarkMode ? 'bg-zinc-900/90 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'
      }`}>
        
        {/* Topo do Menu Lateral */}
        <div className="p-5">
          
          {/* Logo Oficial Glossy */}
          <div className="mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center">
              <img
                src={isDarkMode ? "/brand/glossy-horizontal-branco.png" : "/brand/glossy-horizontal-preto.png"}
                alt="Glossy Oficial"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-[9px] uppercase tracking-wider font-semibold text-zinc-400 mt-1">
              Uberlândia • MG
            </p>
          </div>

          {/* Card do Usuário Logado */}
          <div className={`p-3 rounded-2xl border mb-5 flex items-center gap-3 ${
            isDarkMode ? 'bg-zinc-800/60 border-zinc-700/60' : 'bg-[#FAF8F5] border-[#EFE7DE]'
          }`}>
            <img
              src="/brand/luana-frias.png"
              alt="Luana Frias"
              className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#EFE7DE] shadow-xs"
            />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold truncate text-zinc-900 dark:text-white">
                {userProfile.name}
              </p>
              <p className="text-[10px] text-[#C87D6B] dark:text-[#E29578] font-medium truncate">
                {userProfile.role}
              </p>
            </div>
          </div>

          {/* Links de Navegação Lateral */}
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              <BarChart3 className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Visão Geral</span>
            </button>

            <button
              onClick={() => setActiveTab('crm')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'crm'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">CRM Omnichannel</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                activeTab === 'crm' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
              }`}>
                {conversations.filter(c => c.queue === 'aguardando').length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('inventory')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'inventory'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Estoque</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                activeTab === 'inventory' ? 'bg-white/20 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
              }`}>
                {stockMetrics.totalPieces}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('posts')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'posts'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Postagens</span>
            </button>

            <button
              onClick={() => setActiveTab('vip_group')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'vip_group'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Grupo VIP</span>
            </button>

            <button
              onClick={() => setActiveTab('linktree')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'linktree'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              <Share2 className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Linktree & Bio</span>
            </button>

            <button
              onClick={() => setActiveTab('connection')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'connection'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              <QrCode className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Conexão</span>
              <span className={`w-2 h-2 rounded-full ${isWhatsAppConnected ? 'bg-emerald-500' : 'bg-amber-400'}`} />
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'settings'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              <Settings className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">Configurações</span>
            </button>
          </nav>
        </div>

        {/* Rodapé da Barra Lateral */}
        <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 space-y-2">
          {/* Alternar Tema */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
              isDarkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-[#FAF8F5] text-zinc-700'
            }`}
          >
            <span className="flex items-center gap-2">
              {isDarkMode ? <Moon className="w-3.5 h-3.5 text-amber-400" /> : <Sun className="w-3.5 h-3.5 text-amber-600" />}
              {isDarkMode ? 'Modo Escuro' : 'Modo Claro'}
            </span>
            <span className="text-[10px] text-zinc-400">Alternar</span>
          </button>

          {/* Sair */}
          <button
            onClick={() => {
              setIsAuthenticated(false);
              showToast('Você saiu do sistema.');
            }}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sair do Sistema</span>
          </button>
        </div>
      </aside>

      {/* -------------------------------------------------- */}
      {/* 2. ÁREA DE CONTEÚDO PRINCIPAL (MAIN CONTENT) */}
      {/* -------------------------------------------------- */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Banner Superior Estilo E-commerce Glossy */}
        <div className="bg-zinc-900 text-white text-[11px] font-semibold py-1.5 px-6 text-center tracking-wide flex items-center justify-between shrink-0">
          <span className="hidden sm:inline text-zinc-400 text-[10px]">GLOSSY LUXURY FITNESS</span>
          <span className="mx-auto">4X S/ JUROS NO CARTÃO • ENTREGA RÁPIDA & SACOLINHA CONDICIONAL EM UBERLÂNDIA</span>
          <span className="hidden sm:inline text-zinc-400 text-[10px]">{userProfile.instagramUser}</span>
        </div>

        {/* Topbar */}
        <header className={`h-14 px-6 border-b flex items-center justify-between shrink-0 transition-colors ${
          isDarkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white/80 border-[#EFE7DE] backdrop-blur-md'
        }`}>
          <div>
            <h1 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              {activeTab === 'overview' && 'Visão Geral Operacional'}
              {activeTab === 'crm' && 'CRM Omnichannel • Atendimento & Vendas'}
              {activeTab === 'inventory' && 'Estoque Físico Uberlândia'}
              {activeTab === 'posts' && 'Postagens & Criação de Conteúdo'}
              {activeTab === 'vip_group' && 'Grupo VIP Select'}
              {activeTab === 'linktree' && 'Linktree & Bio Oficial'}
              {activeTab === 'connection' && 'Conexão WhatsApp'}
              {activeTab === 'settings' && 'Configurações do Sistema'}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
              isWhatsAppConnected
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200'
                : 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isWhatsAppConnected ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              {isWhatsAppConnected ? 'WhatsApp Conectado' : 'WhatsApp Desconectado'}
            </span>

            {activeTab === 'crm' && (
              <button
                onClick={() => setIsSacolinhaModalOpen(true)}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-[#C87D6B] hover:bg-[#b56d5c] shadow-sm flex items-center gap-1.5"
              >
                <Truck className="w-3.5 h-3.5" />
                <span>+ Montar Sacolinha</span>
              </button>
            )}

            {activeTab === 'inventory' && (
              <button
                onClick={() => setIsNewItemModalOpen(true)}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 shadow-sm flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Nova Peça / Entrada</span>
              </button>
            )}
          </div>
        </header>

        {/* Corpo do Conteúdo Dinâmico conforme a Aba */}
        <div className="flex-1 overflow-y-auto">

          {/* ============================================== */}
          {/* ABA 1: VISÃO GERAL (OVERVIEW) */}
          {/* ============================================== */}
          {activeTab === 'overview' && (
            <div className="p-6 space-y-6 max-w-6xl mx-auto">
              
              {/* Card de Boas-vindas Sofisticado */}
              <div className={`p-6 rounded-3xl border ${
                isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-sm'
              }`}>
                <div className="max-w-xl">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C87D6B] dark:text-[#E29578] block mb-1">
                    OPERAÇÃO OFICIAL • GLOSSY UBERLÂNDIA
                  </span>
                  <h2 className="text-xl font-serif font-bold text-zinc-900 dark:text-white">
                    Olá Luana, seu hub de vendas está pronto para a rotina de hoje!
                  </h2>
                  <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                    Você tem <strong>{stockMetrics.totalPieces} peças</strong> cadastradas no estoque, <strong>{conversations.filter(c => c.queue === 'aguardando').length} atendimentos</strong> na fila e 1 sacolinha condicional ativa no Morada da Colina.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => setActiveTab('crm')}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 shadow-sm"
                    >
                      Abrir CRM de Atendimento
                    </button>
                    <button
                      onClick={() => setIsSacolinhaModalOpen(true)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold border border-[#EFE7DE] hover:bg-[#FAF8F5] text-zinc-800 dark:text-zinc-200"
                    >
                      Montar Nova Sacolinha Condicional
                    </button>
                  </div>
                </div>
              </div>

              {/* Grid de 4 Cards de Métricas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'}`}>
                  <div className="flex items-center justify-between text-zinc-400 mb-2">
                    <span className="text-xs font-medium">Estoque Físico</span>
                    <ShoppingBag className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                    {stockMetrics.totalPieces} <span className="text-xs font-normal text-zinc-400">peças</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    Valor total: R$ {stockMetrics.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'}`}>
                  <div className="flex items-center justify-between text-zinc-400 mb-2">
                    <span className="text-xs font-medium">Sacolinhas em Prova</span>
                    <Truck className="w-4 h-4 text-[#C87D6B]" />
                  </div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                    1 <span className="text-xs font-normal text-zinc-400">condicional</span>
                  </div>
                  <p className="text-[11px] text-[#C87D6B] font-medium mt-1">
                    Camila Alencar (Morada da Colina)
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'}`}>
                  <div className="flex items-center justify-between text-zinc-400 mb-2">
                    <span className="text-xs font-medium">Fila de Espera</span>
                    <MessageSquare className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                    {conversations.filter(c => c.queue === 'aguardando').length} <span className="text-xs font-normal text-zinc-400">contatos</span>
                  </div>
                  <p className="text-[11px] text-amber-600 font-medium mt-1">
                    Aguardando primeira resposta
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'}`}>
                  <div className="flex items-center justify-between text-zinc-400 mb-2">
                    <span className="text-xs font-medium">Grupo VIP Select</span>
                    <Users className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                    1.042 <span className="text-xs font-normal text-zinc-400">membros</span>
                  </div>
                  <p className="text-[11px] text-emerald-600 font-medium mt-1">
                    Grupo silencioso de clientes
                  </p>
                </div>
              </div>

              {/* Destaque: Sacolinha Ativa em Detalhes */}
              <div className={`p-6 rounded-3xl border ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-sm'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#C87D6B]" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                      Sacolinha Condicional em Andamento
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                    Retorno previsto: Amanhã às 14:00
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] dark:bg-zinc-800/60 border border-[#EFE7DE] dark:border-zinc-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                      Camila Alencar • (34) 99124-5582
                    </h4>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Bairro: Morada da Colina • Entregue hoje às 11:00
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-zinc-600 dark:text-zinc-400">
                      <span className="px-2 py-0.5 rounded-md bg-white dark:bg-zinc-700 border">
                        Legging Cookie M (R$ 189,90) - Comprado
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-white dark:bg-zinc-700 border">
                        Top Live Acrópole M (R$ 129,90) - Comprado
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-white dark:bg-zinc-700 border">
                        Legging Café M (R$ 189,90) - Devolvido
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-zinc-400 block">Total em Peças:</span>
                    <span className="text-base font-bold text-zinc-900 dark:text-white block">
                      R$ 509,70
                    </span>
                    <button
                      onClick={() => {
                        setSelectedConversationId('conv-1');
                        setActiveTab('crm');
                      }}
                      className="mt-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#C87D6B] hover:underline"
                    >
                      Ver no Chat do CRM →
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ============================================== */}
          {/* ABA 2: CRM OMNICHANNEL (3 COLUNAS ESTRITAS) */}
          {/* ============================================== */}
          {activeTab === 'crm' && (
            <div className="h-[calc(100vh-6.5rem)] flex overflow-hidden">
              
              {/* COLUNA 1: FILAS (INBOX) */}
              <div className={`w-72 shrink-0 border-r flex flex-col transition-colors ${
                isDarkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-[#EFE7DE]'
              }`}>
                {/* Abas das 4 Filas Canônicas */}
                <div className="p-3 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-[10px] font-semibold">
                    <button
                      onClick={() => setActiveQueue('aguardando')}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeQueue === 'aguardando'
                          ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-xs font-bold'
                          : 'text-zinc-500'
                      }`}
                    >
                      Fila ({conversations.filter(c => c.queue === 'aguardando').length})
                    </button>
                    <button
                      onClick={() => setActiveQueue('meus')}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeQueue === 'meus'
                          ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-xs font-bold'
                          : 'text-zinc-500'
                      }`}
                    >
                      Meus ({conversations.filter(c => c.queue === 'meus').length})
                    </button>
                    <button
                      onClick={() => setActiveQueue('espera')}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeQueue === 'espera'
                          ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-xs font-bold'
                          : 'text-zinc-500'
                      }`}
                    >
                      Espera ({conversations.filter(c => c.queue === 'espera').length})
                    </button>
                    <button
                      onClick={() => setActiveQueue('finalizados')}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeQueue === 'finalizados'
                          ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-xs font-bold'
                          : 'text-zinc-500'
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
                      placeholder="Buscar contato ou bairro..."
                      value={crmSearchQuery}
                      onChange={(e) => setCrmSearchQuery(e.target.value)}
                      className={`w-full pl-8 pr-3 py-1.5 rounded-xl text-xs border focus:outline-none ${
                        isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-[#FAF8F5] border-[#EFE7DE]'
                      }`}
                    />
                  </div>
                </div>

                {/* Lista de Conversas */}
                <div className="flex-1 overflow-y-auto divide-y divide-zinc-100 dark:divide-zinc-800/60">
                  {filteredConversations.map((conv) => {
                    const isSelected = conv.id === selectedConversationId;
                    return (
                      <div
                        key={conv.id}
                        onClick={() => setSelectedConversationId(conv.id)}
                        className={`p-3.5 cursor-pointer transition-all ${
                          isSelected
                            ? isDarkMode
                              ? 'bg-zinc-800/80'
                              : 'bg-[#FAF8F5] border-l-4 border-zinc-900'
                            : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                            {conv.contactName}
                          </h4>
                          <span className="text-[10px] text-zinc-400">{conv.lastMessageTime}</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 truncate mb-1">
                          {conv.lastMessage}
                        </p>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-zinc-400">📍 {conv.neighborhood}</span>
                          {conv.activeSacolinha && (
                            <span className="px-1.5 py-0.5 rounded font-bold bg-[#FAF0ED] text-[#C87D6B]">
                              🛍️ Sacolinha
                            </span>
                          )}
                          {conv.unreadCount > 0 && (
                            <span className="w-4 h-4 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-[9px]">
                              {conv.unreadCount}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* COLUNA 2: TIMELINE DO CHAT ATIVO & COMPOSER */}
              <div className="flex-1 flex flex-col bg-[#FCFBF9] dark:bg-zinc-950">
                
                {/* Cabeçalho da Conversa */}
                <div className={`h-14 px-5 border-b flex items-center justify-between shrink-0 ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE]'
                }`}>
                  <div>
                    <h3 className="text-xs font-bold text-zinc-900 dark:text-white">
                      {activeConversation.contactName}
                    </h3>
                    <p className="text-[10px] text-zinc-400">
                      {activeConversation.contactPhone} • Bairro: {activeConversation.neighborhood}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsSacolinhaModalOpen(true)}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold text-[#C87D6B] bg-[#FAF0ED] hover:bg-[#F5E4DF] transition-all flex items-center gap-1"
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>Sacolinha Condicional</span>
                    </button>
                    <button
                      onClick={() => {
                        const newQ = activeConversation.queue === 'meus' ? 'espera' : 'meus';
                        setConversations(prev => prev.map(c => c.id === activeConversation.id ? { ...c, queue: newQ } : c));
                        showToast(`Movido para: ${newQ.toUpperCase()}`);
                      }}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50"
                    >
                      Alterar Fila
                    </button>
                  </div>
                </div>

                {/* Timeline de Mensagens */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {currentMessages.map((msg) => {
                    // Nota Interna (Fundo Amarelo Suave)
                    if (msg.isInternalNote) {
                      return (
                        <div
                          key={msg.id}
                          className="p-3 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E] text-xs shadow-xs max-w-lg mx-auto"
                        >
                          <div className="flex items-center gap-1.5 font-bold mb-1 text-[10px]">
                            <Lock className="w-3 h-3" />
                            <span>NOTA INTERNA (VISÍVEL APENAS PARA A EQUIPE)</span>
                          </div>
                          <p className="leading-relaxed whitespace-pre-wrap">{msg.content.replace('🔒 NOTA INTERNA VÉRTICE: ', '')}</p>
                          <span className="text-[9px] text-[#B45309] mt-1 block text-right">
                            {msg.createdAt} • Gravado internamente
                          </span>
                        </div>
                      );
                    }

                    // Mensagem de Áudio PTT
                    if (msg.mediaType === 'audio') {
                      const isPlaying = isPlayingAudio === msg.id;
                      return (
                        <div
                          key={msg.id}
                          className={`flex ${msg.senderType === 'agent' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`p-3 rounded-2xl max-w-xs flex items-center gap-3 shadow-xs ${
                            msg.senderType === 'agent'
                              ? 'bg-zinc-900 text-white rounded-tr-none'
                              : 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-tl-none border border-[#EFE7DE]'
                          }`}>
                            <button
                              onClick={() => setIsPlayingAudio(isPlaying ? null : msg.id)}
                              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                                msg.senderType === 'agent' ? 'bg-white text-zinc-900' : 'bg-zinc-900 text-white'
                              }`}
                            >
                              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                            </button>
                            <div className="flex-1">
                              <div className="flex items-center gap-1 h-4">
                                {[40, 70, 90, 50, 80, 100, 60, 40, 85, 95, 30, 60].map((h, i) => (
                                  <span
                                    key={i}
                                    style={{ height: `${h}%` }}
                                    className={`w-1 rounded-full ${
                                      isPlaying
                                        ? 'animate-pulse bg-emerald-400'
                                        : msg.senderType === 'agent'
                                        ? 'bg-zinc-400'
                                        : 'bg-zinc-400'
                                    }`}
                                  />
                                ))}
                              </div>
                              <div className="flex items-center justify-between mt-1 text-[9px] opacity-70">
                                <span>{msg.audioDuration || '0:18'}</span>
                                <span>{msg.createdAt}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    // Anexos (Imagem ou PDF)
                    if (msg.mediaType === 'image' || msg.mediaType === 'document') {
                      return (
                        <div
                          key={msg.id}
                          className={`flex ${msg.senderType === 'agent' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`p-3 rounded-2xl max-w-sm text-xs shadow-xs ${
                            msg.senderType === 'agent'
                              ? 'bg-zinc-900 text-white rounded-tr-none'
                              : 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-tl-none border border-[#EFE7DE]'
                          }`}>
                            <div className="flex items-center gap-2 mb-1">
                              {msg.mediaType === 'image' ? <Sparkles className="w-4 h-4 text-amber-300" /> : <FileText className="w-4 h-4 text-rose-300" />}
                              <span className="font-bold text-[11px]">{msg.fileName}</span>
                            </div>
                            <p className="text-[11px] opacity-90">{msg.content}</p>
                            <span className="text-[9px] opacity-70 mt-1 block text-right">{msg.createdAt}</span>
                          </div>
                        </div>
                      );
                    }

                    // Mensagens Padrão
                    const isAgent = msg.senderType === 'agent';
                    return (
                      <div
                        key={msg.id}
                        className={`flex ${isAgent ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-md p-3.5 rounded-2xl text-xs leading-relaxed shadow-xs ${
                            isAgent
                              ? 'bg-zinc-900 text-white rounded-tr-none dark:bg-zinc-100 dark:text-zinc-900'
                              : 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-tl-none border border-[#EFE7DE] dark:border-zinc-700'
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                          <div className={`flex items-center justify-end gap-1 mt-1 text-[9px] ${
                            isAgent ? 'text-zinc-400 dark:text-zinc-500' : 'text-zinc-400'
                          }`}>
                            <span>{msg.createdAt}</span>
                            {isAgent && <Check className="w-3 h-3 text-emerald-400" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Composer e Ferramentas */}
                <div className={`p-4 border-t relative transition-colors ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE]'
                }`}>
                  
                  {/* Popover de Respostas Rápidas com atalho "/" */}
                  {showQuickReplies && (
                    <div className={`absolute bottom-full left-4 right-4 mb-2 p-3 rounded-2xl border shadow-xl z-20 max-h-56 overflow-y-auto ${
                      isDarkMode ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-[#EFE7DE]'
                    }`}>
                      <div className="flex items-center justify-between mb-2 pb-1 border-b border-zinc-100 dark:border-zinc-800">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                          RESPOSTAS RÁPIDAS
                        </span>
                        <button onClick={() => setShowQuickReplies(false)} className="text-[10px] text-zinc-400">
                          Fechar (Esc)
                        </button>
                      </div>
                      <div className="space-y-1">
                        {INITIAL_QUICK_REPLIES.map((qr) => (
                          <div
                            key={qr.id}
                            onClick={() => applyQuickReply(qr)}
                            className="p-2 rounded-xl text-xs hover:bg-[#FAF8F5] dark:hover:bg-zinc-800 cursor-pointer"
                          >
                            <div className="flex items-center justify-between font-bold text-zinc-900 dark:text-white">
                              <span>{qr.title}</span>
                              <code className="text-[10px] text-[#C87D6B]">{qr.shortcut}</code>
                            </div>
                            <p className="text-[11px] text-zinc-500 truncate mt-0.5">{qr.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Popover de Emojis */}
                  {showEmojiPicker && (
                    <div className={`absolute bottom-full left-4 mb-2 p-2 rounded-2xl border shadow-xl z-20 flex gap-2 ${
                      isDarkMode ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-[#EFE7DE]'
                    }`}>
                      {['✨', '🛍️', '🤎', '💖', '😍', '🦩', '🙌', '✔', '📍', '👇'].map((emoji) => (
                        <button
                          key={emoji}
                          onClick={() => {
                            setChatComposerText((prev) => prev + emoji);
                            setShowEmojiPicker(false);
                          }}
                          className="w-8 h-8 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center text-sm"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Modo Alternância: Mensagem WhatsApp vs Nota Interna */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 p-0.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-[10px] font-semibold">
                      <button
                        onClick={() => setComposerMode('client')}
                        className={`px-3 py-1 rounded-lg transition-all ${
                          composerMode === 'client'
                            ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-xs font-bold'
                            : 'text-zinc-500'
                        }`}
                      >
                        Mensagem WhatsApp
                      </button>
                      <button
                        onClick={() => setComposerMode('internal_note')}
                        className={`px-3 py-1 rounded-lg flex items-center gap-1 transition-all ${
                          composerMode === 'internal_note'
                            ? 'bg-[#FEF3C7] text-[#92400E] font-bold shadow-xs'
                            : 'text-zinc-500'
                        }`}
                      >
                        <Lock className="w-3 h-3" />
                        <span>Nota Interna</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setShowQuickReplies(!showQuickReplies)}
                        className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                      >
                        Atalhos (/)
                      </button>
                    </div>
                  </div>

                  {/* Input do Chat e Botões de Ferramentas */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                      title="Inserir Emoji"
                    >
                      <Smile className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleAttachFile('image')}
                      className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                      title="Anexar Imagem"
                    >
                      <Paperclip className="w-4 h-4" />
                    </button>

                    <button
                      onClick={handleRecordAudio}
                      className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                      title="Gravar Áudio PTT"
                    >
                      <Mic className="w-4 h-4" />
                    </button>

                    <input
                      type="text"
                      placeholder={
                        composerMode === 'internal_note'
                          ? 'Escreva uma anotação privada (visível apenas para a equipe)...'
                          : 'Digite sua mensagem para a cliente...'
                      }
                      value={chatComposerText}
                      onChange={(e) => {
                        setChatComposerText(e.target.value);
                        if (e.target.value.endsWith('/')) setShowQuickReplies(true);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSendMessage();
                      }}
                      className={`flex-1 px-4 py-2 rounded-xl text-xs border focus:outline-none ${
                        composerMode === 'internal_note'
                          ? 'bg-[#FFFBEB] border-[#FDE68A] text-[#92400E]'
                          : isDarkMode
                          ? 'bg-zinc-800 border-zinc-700 text-white'
                          : 'bg-[#FAF8F5] border-[#EFE7DE] text-zinc-900'
                      }`}
                    />

                    <button
                      onClick={handleSendMessage}
                      className={`p-2.5 rounded-xl text-white transition-all ${
                        composerMode === 'internal_note'
                          ? 'bg-amber-600 hover:bg-amber-700'
                          : 'bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900'
                      }`}
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

              {/* COLUNA 3: PERFIL DO CONTATO & GESTÃO DA SACOLINHA */}
              <div className={`w-80 shrink-0 border-l flex flex-col p-5 overflow-y-auto transition-colors ${
                isDarkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-[#EFE7DE]'
              }`}>
                {/* Perfil Header */}
                <div className="text-center pb-4 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="w-14 h-14 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-sm mx-auto mb-2">
                    {activeConversation.contactName.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="text-xs font-bold text-zinc-900 dark:text-white">
                    {activeConversation.contactName}
                  </h3>
                  <p className="text-xs text-[#C87D6B] font-semibold mt-0.5">
                    {activeConversation.contactPhone}
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    📍 {activeConversation.neighborhood} • Uberlândia
                  </p>
                </div>

                {/* GESTÃO DA SACOLINHA CONDICIONAL ATIVA */}
                <div className="py-4 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      Sacolinha Condicional
                    </span>
                    {activeConversation.activeSacolinha && (
                      <span className="text-[10px] font-bold text-[#C87D6B]">
                        #{activeConversation.activeSacolinha.id}
                      </span>
                    )}
                  </div>

                  {activeConversation.activeSacolinha ? (
                    <div className="p-3.5 rounded-2xl bg-[#FAF8F5] dark:bg-zinc-800/50 border border-[#EFE7DE] dark:border-zinc-700 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-500">Valor em Prova:</span>
                        <strong className="text-zinc-900 dark:text-white">
                          R$ {activeConversation.activeSacolinha.totalValue.toFixed(2)}
                        </strong>
                      </div>

                      <div className="text-[10px] text-zinc-400">
                        Prazo: {activeConversation.activeSacolinha.returnDeadline}
                      </div>

                      {/* Lista de Peças com botões Comprado / Devolvido */}
                      <div className="space-y-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-700">
                        {activeConversation.activeSacolinha.items.map((item) => (
                          <div key={item.itemId} className="p-2 rounded-xl bg-white dark:bg-zinc-800 border text-xs">
                            <div className="flex items-center justify-between font-bold mb-1">
                              <span>{item.name} ({item.size})</span>
                              <span>R$ {item.price.toFixed(2)}</span>
                            </div>
                            <div className="text-[10px] text-zinc-400 mb-1.5">Cor: {item.color}</div>

                            <div className="flex gap-1">
                              <button
                                onClick={() => handleUpdateSacolinhaItemStatus(item.itemId, 'comprado')}
                                className={`flex-1 py-1 rounded text-[10px] font-bold transition-all ${
                                  item.status === 'comprado'
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300'
                                }`}
                              >
                                ✓ Comprou
                              </button>
                              <button
                                onClick={() => handleUpdateSacolinhaItemStatus(item.itemId, 'devolvido')}
                                className={`flex-1 py-1 rounded text-[10px] font-bold transition-all ${
                                  item.status === 'devolvido'
                                    ? 'bg-rose-600 text-white'
                                    : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300'
                                }`}
                              >
                                ✕ Devolveu
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={handleFinalizeSacolinha}
                        className="w-full py-2 rounded-xl text-xs font-bold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 transition-all"
                      >
                        Concluir Venda & Baixar Estoque
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-xs text-zinc-400 mb-3">Nenhuma sacolinha ativa para este contato.</p>
                      <button
                        onClick={() => {
                          setSacolinhaSelectedClient(activeConversation.id);
                          setSacolinhaSelectedNeighborhood(activeConversation.neighborhood);
                          setIsSacolinhaModalOpen(true);
                        }}
                        className="w-full py-2 rounded-xl text-xs font-semibold text-white bg-[#C87D6B] hover:bg-[#b56d5c]"
                      >
                        + Montar Sacolinha Condicional
                      </button>
                    </div>
                  )}
                </div>

                {/* Tags do Lead */}
                <div className="py-4 border-b border-zinc-100 dark:border-zinc-800">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                    Tags de Segmentação
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeConversation.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FAF8F5] text-zinc-700 border border-[#EFE7DE]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Anotações do Contato */}
                <div className="py-4">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                    Anotações Operacionais
                  </span>
                  <p className="text-xs text-zinc-500 leading-relaxed bg-[#FAF8F5] dark:bg-zinc-800/50 p-3 rounded-xl border border-[#EFE7DE]">
                    {activeConversation.notes || 'Sem anotações registradas.'}
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* ============================================== */}
          {/* ABA 3: ESTOQUE (INVENTÁRIO & ENTRADA DE PEÇAS) */}
          {/* ============================================== */}
          {activeTab === 'inventory' && (
            <div className="p-6 space-y-6 max-w-6xl mx-auto">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-serif font-bold text-zinc-900 dark:text-white">
                    Estoque Físico Uberlândia
                  </h2>
                  <p className="text-xs text-zinc-500">
                    Controle de peças em tempo real com baixa por venda e separação para condicionais.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsNewItemModalOpen(true)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Adicionar Peça / Entrada</span>
                  </button>
                </div>
              </div>

              {/* Barra de Filtros e Busca */}
              <div className={`p-4 rounded-2xl border flex flex-wrap items-center gap-3 ${
                isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'
              }`}>
                <div className="relative flex-1 min-w-[220px]">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Buscar por peça, modelo ou cor..."
                    value={inventorySearch}
                    onChange={(e) => setInventorySearch(e.target.value)}
                    className={`w-full pl-8 pr-3 py-2 rounded-xl text-xs border focus:outline-none ${
                      isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-[#FAF8F5] border-[#EFE7DE]'
                    }`}
                  />
                </div>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`px-3 py-2 rounded-xl text-xs border focus:outline-none ${
                    isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-[#FAF8F5] border-[#EFE7DE]'
                  }`}
                >
                  <option value="Todas">Todas as Categorias</option>
                  <option value="Leggings">Leggings</option>
                  <option value="Tops">Tops</option>
                  <option value="Croppeds">Croppeds</option>
                  <option value="Bermudas e Shorts">Bermudas e Shorts</option>
                  <option value="Camisetas">Camisetas</option>
                  <option value="Regatas">Regatas</option>
                  <option value="Macacões">Macacões</option>
                </select>

                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className={`px-3 py-2 rounded-xl text-xs border focus:outline-none ${
                    isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-[#FAF8F5] border-[#EFE7DE]'
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

                <button
                  onClick={() => setOnlyBlackFriday(!onlyBlackFriday)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    onlyBlackFriday
                      ? 'bg-amber-400 text-amber-950 font-bold'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  {onlyBlackFriday ? '✓ Apenas Black Friday' : 'Filtrar Black Friday'}
                </button>
              </div>

              {/* Grid de Itens de Estoque */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredInventory.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                      isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FAF8F5] dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-[#EFE7DE]">
                          Tam: {item.size}
                        </span>
                        {item.isBlackFriday && (
                          <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800">
                            Black Friday
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
                        <span className="text-[10px] text-zinc-400 block">Quantidade:</span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <button
                            onClick={() => handleStockSale(item.id)}
                            disabled={item.quantity === 0}
                            className="w-5 h-5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 flex items-center justify-center font-bold text-xs disabled:opacity-30"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold px-1">{item.quantity}</span>
                          <button
                            onClick={() => handleAddQuantity(item.id)}
                            className="w-5 h-5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 flex items-center justify-center font-bold text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold text-zinc-900 dark:text-white block">
                          R$ {item.price.toFixed(2)}
                        </span>
                        <span className="text-[9px] text-zinc-400">
                          Custo: R$ {(item.costPrice || 95).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ============================================== */}
          {/* ABA 4: PAINEL DE APROVAÇÃO & PRÉVIA DE CONTEÚDO */}
          {/* ============================================== */}
          {activeTab === 'posts' && (
            <div className="p-6 space-y-6 max-w-7xl mx-auto">
              
              {/* Cabeçalho do Painel */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-xl font-serif font-bold text-zinc-900 dark:text-white">
                      Painel de Aprovação & Pré-visualização de Conteúdo
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      n8n Tel System Ativo
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500">
                    Aprove os criativos gerados com fotos reais do Lookbook, ajuste legendas e dispare direto no Instagram (@glossyluanaudia) e Grupo VIP via n8n.
                  </p>
                </div>

                {/* Filtros de Pipeline */}
                <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800/80 p-1 rounded-2xl">
                  <button
                    onClick={() => setContentFilter('todos')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      contentFilter === 'todos'
                        ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    Todos ({scheduledPosts.length})
                  </button>
                  <button
                    onClick={() => setContentFilter('aguardando')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      contentFilter === 'aguardando'
                        ? 'bg-amber-500 text-white shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    Aguardando ({scheduledPosts.filter(p => p.status === 'aguardando_aprovacao').length})
                  </button>
                  <button
                    onClick={() => setContentFilter('publicado')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      contentFilter === 'publicado'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    Publicados ({scheduledPosts.filter(p => p.status === 'publicado').length})
                  </button>
                </div>
              </div>

              {/* Grid Principal: Fila de Aprovação (Esquerda) + Mockup Feed Ao Vivo (Direita) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Coluna Esquerda: Cards de Aprovação */}
                <div className="lg:col-span-7 space-y-4">
                  
                  {scheduledPosts
                    .filter((p) => {
                      if (contentFilter === 'aguardando') return p.status === 'aguardando_aprovacao';
                      if (contentFilter === 'publicado') return p.status === 'publicado';
                      return true;
                    })
                    .map((post) => {
                      const isSelected = selectedPreviewPost.id === post.id;
                      const isPublishing = isPublishingPostId === post.id;
                      const isEditing = editingPostId === post.id;

                      return (
                        <div
                          key={post.id}
                          className={`p-5 rounded-3xl border transition-all ${
                            isSelected
                              ? 'border-zinc-900 dark:border-white ring-2 ring-zinc-900/10 shadow-md'
                              : 'border-[#EFE7DE] dark:border-zinc-800 shadow-xs'
                          } ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}
                        >
                          {/* Topo do Card: Imagem Real + Metadados + Status */}
                          <div className="flex gap-4">
                            <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
                              <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                              <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-black/70 text-white">
                                {post.color}
                              </span>
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[#C87D6B] dark:text-[#E29578]">
                                  {post.format === 'comercial' && '1. Comercial (Preço Visível)'}
                                  {post.format === 'lifestyle' && '2. Lifestyle (Benefícios Tecido)'}
                                  {post.format === 'apresentacao' && '3. Detalhes & Cós Anatômico'}
                                </span>

                                {post.status === 'publicado' ? (
                                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                                    <CheckCircle2 className="w-3 h-3" />
                                    Publicado no Feed
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                                    <Clock className="w-3 h-3" />
                                    Aguardando Aprovação
                                  </span>
                                )}
                              </div>

                              <h3 className="text-sm font-bold text-zinc-900 dark:text-white truncate">
                                {post.title}
                              </h3>

                              <div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
                                <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                                  R$ {post.price.toFixed(2)}
                                </span>
                                <span>•</span>
                                <span>Uberlândia: Pronta-entrega / Condicional</span>
                              </div>

                              <div className="flex flex-wrap gap-1 mt-2">
                                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                                  Cós anatômico duplo
                                </span>
                                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                                  Zero transparência
                                </span>
                                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                                  Poliamida acetinada
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Caixa de Legenda: Leitura ou Edição Inline */}
                          <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                            {isEditing ? (
                              <div className="space-y-2">
                                <label className="block text-[11px] font-bold text-zinc-700 dark:text-zinc-300">
                                  Editar Legenda antes de Disparar:
                                </label>
                                <textarea
                                  rows={5}
                                  value={editingCaptionText}
                                  onChange={(e) => setEditingCaptionText(e.target.value)}
                                  className="w-full p-3 rounded-2xl text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none leading-relaxed"
                                />
                                <div className="flex justify-end gap-2">
                                  <button
                                    onClick={() => setEditingPostId(null)}
                                    className="px-3 py-1 rounded-xl text-xs text-zinc-500 hover:bg-zinc-100"
                                  >
                                    Cancelar
                                  </button>
                                  <button
                                    onClick={() => {
                                      setScheduledPosts(prev => prev.map(p => p.id === post.id ? { ...p, caption: editingCaptionText } : p));
                                      if (selectedPreviewPost.id === post.id) {
                                        setSelectedPreviewPost(prev => ({ ...prev, caption: editingCaptionText }));
                                      }
                                      setEditingPostId(null);
                                      showToast('Legenda atualizada!');
                                    }}
                                    className="px-3 py-1 rounded-xl text-xs font-bold text-white bg-zinc-900 hover:bg-zinc-800"
                                  >
                                    Salvar Alterações
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <p className="text-xs text-zinc-600 dark:text-zinc-300 line-clamp-3 leading-relaxed whitespace-pre-line font-normal">
                                  {post.caption}
                                </p>
                                <div className="flex items-center justify-between mt-2">
                                  <div className="flex gap-1.5">
                                    <span className="text-[10px] text-zinc-400">Canais:</span>
                                    <span className="text-[10px] font-semibold text-zinc-600 dark:text-zinc-300">Instagram • Facebook • Grupo VIP</span>
                                  </div>
                                  <button
                                    onClick={() => {
                                      setEditingPostId(post.id);
                                      setEditingCaptionText(post.caption);
                                    }}
                                    className="text-[11px] font-semibold text-[#C87D6B] hover:underline flex items-center gap-1"
                                  >
                                    <Edit3 className="w-3 h-3" />
                                    Ajustar Legenda
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Barra de Ações: Aprovar & Disparar no n8n | Prévia no Feed | Copiar */}
                          <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-2">
                            <button
                              onClick={() => setSelectedPreviewPost(post)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                                isSelected
                                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200'
                              }`}
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>{isSelected ? 'Exibindo no Feed' : 'Ver Prévia no Feed'}</span>
                            </button>

                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  navigator.clipboard.writeText(post.caption);
                                  showToast('Legenda copiada para a área de transferência!');
                                }}
                                className="px-3 py-1.5 rounded-xl text-xs font-semibold border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 flex items-center gap-1.5"
                                title="Copiar Legenda"
                              >
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copiar</span>
                              </button>

                              {post.status === 'publicado' ? (
                                <button
                                  disabled
                                  className="px-4 py-1.5 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 flex items-center gap-1.5 cursor-default"
                                >
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Publicado via n8n</span>
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleApproveAndPublishPost(post)}
                                  disabled={isPublishing}
                                  className="px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 shadow-sm flex items-center gap-1.5 transition-all"
                                >
                                  {isPublishing ? (
                                    <>
                                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                      <span>Disparando no n8n...</span>
                                    </>
                                  ) : (
                                    <>
                                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                                      <span>Aprovar & Disparar no n8n</span>
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          </div>

                        </div>
                      );
                    })}

                  {/* Formulário Compacto para Criar Nova Postagem com IA & Peça do Estoque */}
                  <div className={`p-6 rounded-3xl border mt-6 ${
                    isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'
                  }`}>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                      <Plus className="w-4 h-4 text-[#C87D6B]" />
                      Gerar Nova Sugestão de Post do Estoque
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 mb-1">
                          Peça do Estoque Físico:
                        </label>
                        <select
                          value={newPostProduct}
                          onChange={(e) => {
                            const val = e.target.value;
                            setNewPostProduct(val);
                            const item = inventory.find(i => `${i.name} - ${i.color}` === val);
                            if (item) setNewPostPrice(item.price.toString());
                          }}
                          className={`w-full px-3 py-2 rounded-xl text-xs border focus:outline-none ${
                            isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-[#FAF8F5] border-[#EFE7DE]'
                          }`}
                        >
                          {inventory.slice(0, 15).map((item) => (
                            <option key={item.id} value={`${item.name} - ${item.color}`}>
                              {item.name} - {item.color} (Tam {item.size} • R$ {item.price})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 mb-1">
                          Formato de Postagem:
                        </label>
                        <select
                          value={newPostFormat}
                          onChange={(e) => setNewPostFormat(e.target.value as any)}
                          className={`w-full px-3 py-2 rounded-xl text-xs border focus:outline-none ${
                            isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-[#FAF8F5] border-[#EFE7DE]'
                          }`}
                        >
                          <option value="comercial">1. Comercial (Foco em Venda & Preço Visível)</option>
                          <option value="lifestyle">2. Lifestyle (Benefícios & Estética Feminina)</option>
                          <option value="apresentacao">3. Detalhes (Cós Anatômico & Zero Transparência)</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 mb-1">
                        Legenda Estruturada:
                      </label>
                      <textarea
                        rows={4}
                        value={newPostCaption}
                        onChange={(e) => setNewPostCaption(e.target.value)}
                        className={`w-full p-3 rounded-2xl text-xs border focus:outline-none leading-relaxed ${
                          isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-[#FAF8F5] border-[#EFE7DE]'
                        }`}
                      />
                    </div>

                    <button
                      onClick={handleSchedulePost}
                      className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 shadow-sm"
                    >
                      Adicionar à Fila de Aprovação
                    </button>
                  </div>

                </div>

                {/* Coluna Direita: Mockup do Feed Instagram Ao Vivo */}
                <div className="lg:col-span-5 sticky top-6 flex flex-col items-center">
                  <div className="w-full flex items-center justify-between mb-2 px-1">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      Prévia Oficial no Instagram Feed
                    </span>
                    <span className="text-[10px] font-medium text-[#C87D6B]">
                      @glossyluanaudia
                    </span>
                  </div>

                  {/* Smartphone Frame */}
                  <div className={`w-full max-w-sm rounded-[36px] border-4 border-zinc-800 dark:border-zinc-700 shadow-2xl overflow-hidden ${
                    isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'
                  }`}>
                    
                    {/* Instagram Header */}
                    <div className="px-4 py-3 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src="/brand/luana-frias.png"
                          alt="Luana Frias"
                          className="w-8 h-8 rounded-full object-cover border border-[#EFE7DE] shadow-2xs"
                        />
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="font-bold text-xs">glossyluanaudia</span>
                            <span className="w-3 h-3 rounded-full bg-blue-500 text-white text-[8px] flex items-center justify-center font-bold">✓</span>
                          </div>
                          <p className="text-[9px] text-zinc-400">Uberlândia, Minas Gerais</p>
                        </div>
                      </div>
                      <span className="text-zinc-400 font-bold tracking-widest text-xs">•••</span>
                    </div>

                    {/* Foto Real da Peça em Alta Resolução */}
                    <div className="aspect-square bg-zinc-950 relative overflow-hidden group">
                      <img
                        src={selectedPreviewPost.imageUrl}
                        alt={selectedPreviewPost.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Selo Glossy Discreto sobre a Foto */}
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white text-[9px] font-serif tracking-widest uppercase">
                        GLOSSY UBERLÂNDIA
                      </div>

                      {selectedPreviewPost.format === 'comercial' && (
                        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/95 text-zinc-900 text-xs font-bold shadow-md">
                          R$ {selectedPreviewPost.price.toFixed(2)}
                        </div>
                      )}
                    </div>

                    {/* Instagram Interactions Bar */}
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-sm">❤️</span>
                          <span className="text-sm">💬</span>
                          <span className="text-sm">✈️</span>
                        </div>
                        <span className="text-sm">🏷️</span>
                      </div>

                      <p className="text-[11px] font-bold mb-1">
                        482 curtidas
                      </p>

                      {/* Legenda do Post */}
                      <div className="text-xs space-y-1">
                        <p className="text-[11px] leading-relaxed line-clamp-6">
                          <strong className="mr-1.5 font-bold">glossyluanaudia</strong>
                          {selectedPreviewPost.caption}
                        </p>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {selectedPreviewPost.hashtags.map((h, i) => (
                            <span key={i} className="text-[10px] text-blue-600 dark:text-blue-400 font-medium">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-[9px] text-zinc-400 uppercase tracking-wider mt-3">
                        HÁ 2 HORAS • UBERLÂNDIA
                      </p>
                    </div>

                    {/* Banner Informativo n8n */}
                    <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800/80 border-t border-zinc-200 dark:border-zinc-700 text-center">
                      <p className="text-[10px] text-zinc-500 font-medium">
                        ⚡ Disparo via n8n Tel System & Espelhamento no Grupo VIP
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ============================================== */}
          {/* ABA 5: GRUPO VIP (SELETOR DE GRUPO & DISPAROS) */}
          {/* ============================================== */}
          {activeTab === 'vip_group' && (
            <div className="p-6 space-y-6 max-w-5xl mx-auto">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-serif font-bold text-zinc-900 dark:text-white">
                    Gestão de Disparos no Grupo VIP
                  </h2>
                  <p className="text-xs text-zinc-500">
                    Selecione o grupo do WhatsApp para enviar enquetes, spoilers e promoções.
                  </p>
                </div>
              </div>

              {/* Seletor do Grupo WhatsApp Conectado */}
              <div className={`p-5 rounded-3xl border ${
                isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'
              }`}>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  Selecione o Grupo do WhatsApp de Destino:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {whatsappGroups.map((grp) => (
                    <div
                      key={grp.id}
                      onClick={() => setSelectedGroupId(grp.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        selectedGroupId === grp.id
                          ? 'border-zinc-900 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                          : 'border-[#EFE7DE] hover:border-zinc-300'
                      }`}
                    >
                      <h4 className="text-xs font-bold truncate">{grp.name}</h4>
                      <p className="text-[10px] opacity-70 mt-0.5">{grp.participantCount} membros</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* As 3 Ferramentas de Disparo */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* 1. Enquete Interativa */}
                <div className={`p-5 rounded-3xl border flex flex-col justify-between ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'
                }`}>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C87D6B] block mb-2">
                      1. Enquete Interativa
                    </span>
                    <label className="block text-xs font-semibold mb-1">Pergunta:</label>
                    <textarea
                      rows={2}
                      value={pollQuestion}
                      onChange={(e) => setPollQuestion(e.target.value)}
                      className="w-full p-2 rounded-xl text-xs border mb-3 focus:outline-none"
                    />

                    <label className="block text-xs font-semibold mb-1">Opções:</label>
                    <div className="space-y-1 mb-4">
                      {pollOptions.map((opt, i) => (
                        <input
                          key={i}
                          type="text"
                          value={opt}
                          onChange={(e) => {
                            const newOpts = [...pollOptions];
                            newOpts[i] = e.target.value;
                            setPollOptions(newOpts);
                          }}
                          className="w-full px-2.5 py-1 rounded-lg text-xs border focus:outline-none"
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleVipDrop('Enquete Interativa', pollQuestion)}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900"
                  >
                    Disparar Enquete no Grupo
                  </button>
                </div>

                {/* 2. Spoiler Exclusivo */}
                <div className={`p-5 rounded-3xl border flex flex-col justify-between ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'
                }`}>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C87D6B] block mb-2">
                      2. Spoiler Antecipado
                    </span>
                    <label className="block text-xs font-semibold mb-1">Título do Spoiler:</label>
                    <input
                      type="text"
                      value={spoilerTitle}
                      onChange={(e) => setSpoilerTitle(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-xl text-xs border mb-3 focus:outline-none"
                    />

                    <label className="block text-xs font-semibold mb-1">Mensagem:</label>
                    <textarea
                      rows={5}
                      value={spoilerText}
                      onChange={(e) => setSpoilerText(e.target.value)}
                      className="w-full p-2 rounded-xl text-xs border mb-4 focus:outline-none leading-relaxed"
                    />
                  </div>

                  <button
                    onClick={() => handleVipDrop('Spoiler Exclusivo', spoilerTitle)}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900"
                  >
                    Disparar Spoiler no Grupo
                  </button>
                </div>

                {/* 3. Promoções da Semana */}
                <div className={`p-5 rounded-3xl border flex flex-col justify-between ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'
                }`}>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C87D6B] block mb-2">
                      3. Promoções da Semana
                    </span>
                    <label className="block text-xs font-semibold mb-1">Mensagem da Oferta:</label>
                    <textarea
                      rows={8}
                      value={promoText}
                      onChange={(e) => setPromoText(e.target.value)}
                      className="w-full p-2 rounded-xl text-xs border mb-4 focus:outline-none leading-relaxed"
                    />
                  </div>

                  <button
                    onClick={() => handleVipDrop('Promoções da Semana', 'Lote Especial')}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#C87D6B] hover:bg-[#b56d5c]"
                  >
                    Disparar Promoções no Grupo
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* ============================================== */}
          {/* ABA 6: LINKTREE & BIO OFICIAL */}
          {/* ============================================== */}
          {activeTab === 'linktree' && (
            <div className="p-6 space-y-6 max-w-5xl mx-auto">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-serif font-bold text-zinc-900 dark:text-white">
                    Linktree & Bio Oficial (Padrão Glossy)
                  </h2>
                  <p className="text-xs text-zinc-500">
                    Links diretos para atendimento WhatsApp, Grupo VIP e PDFs de cada coleção individual.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Mockup Smartphone Padrão Glossy Boutique */}
                <div className="lg:col-span-6 flex flex-col items-center">
                  <div className="w-full max-w-xs rounded-[40px] border-8 border-zinc-800 p-4 shadow-2xl bg-[#FAF8F5] text-zinc-900">
                    
                    <div className="text-center pt-2 pb-4">
                      {/* Logo Oficial Glossy */}
                      <img
                        src="/brand/glossy-horizontal-preto.png"
                        alt="Glossy Oficial"
                        className="h-6 mx-auto mb-3 object-contain"
                      />

                      {/* Foto Real de Luana Frias */}
                      <img
                        src="/brand/luana-frias.png"
                        alt="Luana Frias"
                        className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-white shadow-md mb-2.5"
                      />

                      <h3 className="font-serif font-bold text-sm tracking-wide uppercase text-zinc-900">
                        LUANA FRIAS
                      </h3>
                      <p className="text-[11px] font-semibold text-[#C87D6B]">
                        @glossyluanaudia
                      </p>
                      <p className="text-[10px] text-zinc-500 mt-1 max-w-[220px] mx-auto leading-relaxed">
                        Moda fitness de luxo, alta compressão & cós anatômico. Atendimento exclusivo e condicional em Uberlândia! ✨
                      </p>
                    </div>

                    <div className="space-y-2 pb-6">
                      {linktreeItems.map((item) => (
                        <a
                          key={item.id}
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="block p-3 rounded-2xl bg-white border border-[#EFE7DE] text-zinc-900 shadow-2xs hover:shadow-sm hover:border-[#C87D6B] text-center transition-all group"
                        >
                          <span className="text-xs font-bold block text-zinc-900 group-hover:text-[#C87D6B] transition-colors">
                            {item.title}
                          </span>
                          <span className="text-[9px] text-zinc-500 block mt-0.5 font-medium">
                            {item.subtitle}
                          </span>
                        </a>
                      ))}
                    </div>

                    <div className="text-center pb-2">
                      <p className="text-[8px] uppercase tracking-widest text-zinc-400 font-semibold">
                        GLOSSY BRASIL • REVENDAS AUTORIZADAS
                      </p>
                    </div>

                  </div>
                </div>

                {/* Editor dos Links do Linktree */}
                <div className={`lg:col-span-6 p-6 rounded-3xl border ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'
                }`}>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-3">
                    Personalizar Botões do Linktree
                  </h3>

                  <div className="space-y-3">
                    {linktreeItems.map((item, idx) => (
                      <div key={item.id} className="p-3 rounded-2xl border text-xs flex items-center justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) => {
                              const newItems = [...linktreeItems];
                              newItems[idx].title = e.target.value;
                              setLinktreeItems(newItems);
                            }}
                            className="w-full font-bold bg-transparent border-b focus:outline-none mb-1 text-xs"
                          />
                          <input
                            type="text"
                            value={item.subtitle}
                            onChange={(e) => {
                              const newItems = [...linktreeItems];
                              newItems[idx].subtitle = e.target.value;
                              setLinktreeItems(newItems);
                            }}
                            className="w-full text-[10px] text-zinc-400 bg-transparent focus:outline-none"
                          />
                        </div>

                        <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">
                          {item.type.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => showToast('Configurações do Linktree salvas!')}
                    className="w-full mt-4 py-2.5 rounded-xl text-xs font-bold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900"
                  >
                    Salvar Alterações da Bio
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* ============================================== */}
          {/* ABA 7: CONEXÃO WHATSAPP OFICIAL (UAZAPI) */}
          {/* ============================================== */}
          {activeTab === 'connection' && (
            <div className="p-8 max-w-2xl mx-auto space-y-6">
              
              <div className="text-center">
                <h2 className="text-xl font-serif font-bold text-zinc-900 dark:text-white">
                  Conexão WhatsApp Oficial • UaZapi
                </h2>
                <p className="text-xs text-zinc-500 mt-1">
                  Pareie o WhatsApp comercial oficial da Luana Frias (+55 34 9300-2424) para receber mensagens no CRM Omnichannel e enviar sacolinhas condicionais.
                </p>
              </div>

              {/* Card de Dados da Instância Oficial */}
              <div className={`p-4 rounded-2xl border text-xs flex items-center justify-between ${
                isDarkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div className="space-y-0.5">
                  <p className="font-semibold text-zinc-700 dark:text-zinc-300">
                    Instância: <span className="font-bold text-zinc-900 dark:text-white">Luana Glossy</span>
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Servidor: <span className="font-mono">https://fsdistribuidora.uazapi.com</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    isWhatsAppConnected
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isWhatsAppConnected ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                    {isWhatsAppConnected ? 'Conectado' : (uazapiStatus === 'qrcode_pronto' ? 'Aguardando Leitura' : 'Desconectado')}
                  </span>
                </div>
              </div>

              {isWhatsAppConnected ? (
                /* Estado Conectado */
                <div className={`p-8 rounded-3xl border text-center ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-sm'
                }`}>
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    WhatsApp Conectado com Sucesso!
                  </h3>
                  <p className="text-sm font-semibold text-[#C87D6B] mt-1">
                    +55 (34) 99300-2424 / +55 (34) 9300-2424 • Luana Frias
                  </p>
                  <p className="text-xs text-zinc-400 mt-2 max-w-md mx-auto">
                    Sessão ativa e sincronizada diretamente com o CRM Omnichannel e com as notificações de sacolinha condicional.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleCheckWhatsAppStatus}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Verificar Status em Tempo Real</span>
                    </button>
                    <button
                      onClick={handleDisconnectWhatsApp}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold text-rose-600 border border-rose-200 hover:bg-rose-50 flex items-center gap-1.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Desconectar Aparelho</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Estado Desconectado ou com QR Code Gerado */
                <div className={`p-8 rounded-3xl border ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-sm'
                }`}>
                  {realQrCode ? (
                    <div className="text-center space-y-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C87D6B] block">
                        QR Code Oficial Gerado pelo UaZapi
                      </span>

                      {/* Imagem Real do QR Code Base64 retornado pelo UaZapi */}
                      <div className="w-64 h-64 mx-auto bg-white p-3 rounded-2xl shadow-md border border-zinc-200 flex items-center justify-center">
                        <img
                          src={realQrCode}
                          alt="QR Code WhatsApp UaZapi"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {pairCode && (
                        <div className="p-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-xl border max-w-xs mx-auto">
                          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                            Código de Pareamento por Telefone:
                          </p>
                          <p className="text-base font-mono font-bold tracking-widest text-zinc-900 dark:text-white mt-0.5">
                            {pairCode}
                          </p>
                        </div>
                      )}

                      <div className="text-xs text-zinc-500 space-y-1 max-w-sm mx-auto">
                        <p>1. Abra o WhatsApp no celular comercial da Luana</p>
                        <p>2. Toque em <strong>Aparelhos Conectados</strong> &gt; <strong>Conectar um aparelho</strong></p>
                        <p>3. Aponte a câmera para o QR Code acima</p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                        <button
                          onClick={handleCheckWhatsAppStatus}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md flex items-center justify-center gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Já Conectei • Verificar Conexão</span>
                        </button>
                        <button
                          onClick={handleGenerateRealQr}
                          disabled={isConnectingWhatsApp}
                          className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 flex items-center justify-center gap-1.5"
                        >
                          <RefreshCw className={`w-3.5 h-3.5 ${isConnectingWhatsApp ? 'animate-spin' : ''}`} />
                          <span>Atualizar QR Code</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center mx-auto mb-2">
                        <QrCode className="w-8 h-8" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                        Nenhum Aparelho Pareado no UaZapi
                      </h3>
                      
                      <p className="text-xs text-zinc-500 max-w-md mx-auto">
                        Gere o QR Code oficial da instância UaZapi para conectar o número da Luana Frias (+55 34 9300-2424) e começar a receber as mensagens no CRM.
                      </p>

                      <div className="max-w-xs mx-auto text-left mb-2">
                        <label className="block text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 mb-1">
                          Telefone da Instância:
                        </label>
                        <input
                          type="text"
                          value={connectionPhone}
                          onChange={(e) => setConnectionPhone(e.target.value)}
                          placeholder="553493002424"
                          className={`w-full px-3 py-2 rounded-xl text-xs border focus:outline-none ${
                            isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-white border-zinc-300'
                          }`}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                        <button
                          onClick={handleGenerateRealQr}
                          disabled={isConnectingWhatsApp}
                          className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 shadow-md flex items-center justify-center gap-2"
                        >
                          {isConnectingWhatsApp ? (
                            <>
                              <RefreshCw className="w-4 h-4 animate-spin" />
                              <span>Gerando QR Code no Servidor...</span>
                            </>
                          ) : (
                            <>
                              <QrCode className="w-4 h-4" />
                              <span>Gerar QR Code Oficial UaZapi</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={handleCheckWhatsAppStatus}
                          className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs font-semibold border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 flex items-center justify-center gap-1.5"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>Verificar Status Atual</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

          {/* ============================================== */}
          {/* ABA 8: CONFIGURAÇÕES & PERFIL DE USUÁRIO */}
          {/* ============================================== */}
          {activeTab === 'settings' && (
            <div className="p-6 space-y-6 max-w-4xl mx-auto">
              
              <div>
                <h2 className="text-lg font-serif font-bold text-zinc-900 dark:text-white">
                  Configurações do Sistema
                </h2>
                <p className="text-xs text-zinc-500">
                  Gerenciamento de perfil do usuário, parâmetros da operação em Uberlândia e integrações.
                </p>
              </div>

              {/* Perfil de Usuário */}
              <div className={`p-6 rounded-3xl border ${
                isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'
              }`}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
                  Perfil de Usuário (Luana Frias)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1">Nome Completo</label>
                    <input
                      type="text"
                      value={userProfile.name}
                      onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl text-xs border focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Telefone Comercial</label>
                    <input
                      type="text"
                      value={userProfile.phone}
                      onChange={(e) => setUserProfile({ ...userProfile, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl text-xs border focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">E-mail</label>
                    <input
                      type="email"
                      value={userProfile.email}
                      onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl text-xs border focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Chave Pix Oficial</label>
                    <input
                      type="text"
                      value={userProfile.pixKey}
                      onChange={(e) => setUserProfile({ ...userProfile, pixKey: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl text-xs border focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  onClick={() => showToast('Perfil atualizado com sucesso!')}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-zinc-900 hover:bg-zinc-800"
                >
                  Salvar Perfil
                </button>
              </div>

              {/* Parâmetros da Operação Uberlândia */}
              <div className={`p-6 rounded-3xl border ${
                isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EFE7DE] shadow-xs'
              }`}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-2">
                  Bairros Atendidos em Uberlândia
                </h3>
                <p className="text-xs text-zinc-500 mb-4">
                  Bairros habilitados para entrega rápida e rota de sacolinhas condicionais:
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {neighborhoods.map((bairro, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs bg-[#FAF8F5] border border-[#EFE7DE] text-zinc-700 flex items-center gap-1.5"
                    >
                      <span>📍 {bairro}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      </main>

      {/* ============================================== */}
      {/* MODAL 1: MONTAR SACOLINHA CONDICIONAL */}
      {/* ============================================== */}
      {isSacolinhaModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className={`w-full max-w-2xl max-h-[90vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden ${
            isDarkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-[#EFE7DE] text-zinc-900'
          }`}>
            <div className="p-5 border-b flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold">Montar Sacolinha Condicional</h3>
                <p className="text-xs text-zinc-400">Selecione o contato, o bairro e as peças do estoque para prova.</p>
              </div>
              <button onClick={() => setIsSacolinhaModalOpen(false)} className="p-1 text-zinc-400 hover:text-zinc-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1">Cliente</label>
                  <select
                    value={sacolinhaSelectedClient}
                    onChange={(e) => setSacolinhaSelectedClient(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs border focus:outline-none bg-transparent"
                  >
                    {conversations.map((c) => (
                      <option key={c.id} value={c.id} className="text-zinc-900">
                        {c.contactName} ({c.neighborhood})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Bairro em Uberlândia</label>
                  <select
                    value={sacolinhaSelectedNeighborhood}
                    onChange={(e) => setSacolinhaSelectedNeighborhood(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs border focus:outline-none bg-transparent"
                  >
                    {neighborhoods.map((n) => (
                      <option key={n} value={n} className="text-zinc-900">
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seleção de Peças do Estoque */}
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Selecione as Peças para Prova ({sacolinhaSelectedItems.length} selecionadas):
                </label>
                <div className="max-h-48 overflow-y-auto border rounded-xl divide-y p-1">
                  {inventory.filter(i => i.quantity > 0).map((item) => {
                    const isSelected = sacolinhaSelectedItems.some((s) => s.id === item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          if (isSelected) {
                            setSacolinhaSelectedItems(sacolinhaSelectedItems.filter((s) => s.id !== item.id));
                          } else {
                            if (sacolinhaSelectedItems.length >= 4) {
                              showToast('Máximo de 4 peças recomendado por sacolinha!');
                              return;
                            }
                            setSacolinhaSelectedItems([...sacolinhaSelectedItems, item]);
                          }
                        }}
                        className={`p-2 rounded-lg cursor-pointer flex items-center justify-between text-xs transition-all ${
                          isSelected ? 'bg-[#FAF0ED] font-bold text-[#C87D6B]' : 'hover:bg-zinc-50 dark:hover:bg-zinc-800'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input type="checkbox" checked={isSelected} readOnly />
                          <span>{item.name} - {item.color} (Tam {item.size})</span>
                        </div>
                        <span>R$ {item.price.toFixed(2)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Resumo da Sacolinha */}
              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] dark:bg-zinc-800/60 border text-xs">
                <div className="flex items-center justify-between font-bold">
                  <span>Valor Total da Sacolinha:</span>
                  <span className="text-sm">
                    R$ {sacolinhaSelectedItems.reduce((sum, i) => sum + i.price, 0).toFixed(2)}
                  </span>
                </div>
                <p className="text-[10px] text-zinc-400 mt-1">
                  Ao despachar, uma nota interna será salva no CRM e a mensagem formatada será enviada para a cliente.
                </p>
              </div>
            </div>

            <div className="p-4 border-t flex justify-end gap-2">
              <button
                onClick={() => setIsSacolinhaModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold border"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreateSacolinha}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-zinc-900 hover:bg-zinc-800"
              >
                Despachar Sacolinha Condicional
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================== */}
      {/* MODAL 2: NOVA PEÇA DE ESTOQUE */}
      {/* ============================================== */}
      {isNewItemModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className={`w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden ${
            isDarkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-[#EFE7DE] text-zinc-900'
          }`}>
            <div className="p-5 border-b flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold">Cadastrar Nova Peça no Estoque</h3>
                <p className="text-xs text-zinc-400">Insira as informações da peça recebida para pronta-entrega.</p>
              </div>
              <button onClick={() => setIsNewItemModalOpen(false)} className="p-1 text-zinc-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateNewItem} className="p-5 space-y-3">
              <div>
                <label className="block text-xs font-semibold mb-1">Nome da Peça</label>
                <input
                  type="text"
                  placeholder="Ex: Legging Tradicional, Top Live, Macacão Longo"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs border focus:outline-none bg-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1">Categoria</label>
                  <select
                    value={newItemCategory}
                    onChange={(e) => setNewItemCategory(e.target.value as ItemCategory)}
                    className="w-full px-3 py-2 rounded-xl text-xs border focus:outline-none bg-transparent text-zinc-900 dark:text-white"
                  >
                    <option value="Leggings">Leggings</option>
                    <option value="Tops">Tops</option>
                    <option value="Croppeds">Croppeds</option>
                    <option value="Bermudas e Shorts">Bermudas e Shorts</option>
                    <option value="Camisetas">Camisetas</option>
                    <option value="Regatas">Regatas</option>
                    <option value="Macacões">Macacões</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Tamanho</label>
                  <select
                    value={newItemSize}
                    onChange={(e) => setNewItemSize(e.target.value as ItemSize)}
                    className="w-full px-3 py-2 rounded-xl text-xs border focus:outline-none bg-transparent text-zinc-900 dark:text-white"
                  >
                    <option value="PP">PP</option>
                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                    <option value="GG">GG</option>
                    <option value="Único">Único</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1">Cor da Peça</label>
                  <input
                    type="text"
                    placeholder="Ex: Cookie, Barolo, Preto Cirrê"
                    value={newItemColor}
                    onChange={(e) => setNewItemColor(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs border focus:outline-none bg-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Quantidade</label>
                  <input
                    type="number"
                    min="1"
                    value={newItemQuantity}
                    onChange={(e) => setNewItemQuantity(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs border focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1">Preço de Venda (R$)</label>
                  <input
                    type="text"
                    value={newItemPrice}
                    onChange={(e) => setNewItemPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs border focus:outline-none bg-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Preço de Custo (R$)</label>
                  <input
                    type="text"
                    value={newItemCostPrice}
                    onChange={(e) => setNewItemCostPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs border focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="bf-check"
                  checked={newItemIsBlackFriday}
                  onChange={(e) => setNewItemIsBlackFriday(e.target.checked)}
                />
                <label htmlFor="bf-check" className="text-xs font-semibold cursor-pointer">
                  Peça em Lote Promocional / Black Friday
                </label>
              </div>

              <div className="pt-3 border-t flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewItemModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold border"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-zinc-900 hover:bg-zinc-800"
                >
                  Cadastrar Peça
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
