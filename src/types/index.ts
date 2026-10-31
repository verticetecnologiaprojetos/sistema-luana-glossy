export type ItemCategory = 
  | 'Leggings'
  | 'Tops'
  | 'Cropped e Peças Curtas'
  | 'Bermudas'
  | 'Camisetas'
  | 'Regatas'
  | 'Macacões';

export type ItemSize = 'PP' | 'P' | 'M' | 'G' | 'GG' | 'Único' | 'Não informado';

export interface InventoryItem {
  id: string;
  name: string;
  category: ItemCategory;
  subcategory: string;
  size: ItemSize;
  color: string;
  quantity: number;
  price: number;
  costPrice?: number;
  isBlackFriday?: boolean;
  isLimitedEdition?: boolean;
  isLastPiece?: boolean;
  notes?: string;
  imageUrl?: string;
}

// Sacolinha Condicional
export interface SacolinhaItem {
  itemId: string;
  name: string;
  size: ItemSize;
  color: string;
  price: number;
  status: 'em_prova' | 'comprado' | 'devolvido';
}

export interface SacolinhaCondicional {
  id: string;
  conversationId: string;
  contactName: string;
  contactPhone: string;
  neighborhood: string;
  items: SacolinhaItem[];
  totalValue: number;
  dispatchedAt: string;
  returnDeadline: string;
  status: 'ativa' | 'concluida' | 'cancelada';
  deliveryFee?: number;
}

// Padrão Vértice CRM Omnichannel
export type ConversationQueue = 'aguardando' | 'meus' | 'espera' | 'finalizados';
export type MessageSenderType = 'contact' | 'agent' | 'system' | 'bot';

export interface Message {
  id: string;
  conversationId: string;
  senderType: MessageSenderType;
  senderName?: string;
  content: string;
  mediaType?: 'text' | 'audio' | 'image' | 'document';
  mediaUrl?: string;
  fileName?: string;
  audioDuration?: string;
  status: 'sending' | 'sent' | 'delivered' | 'read';
  isInternalNote?: boolean;
  createdAt: string;
}

export interface Conversation {
  id: string;
  contactId: string;
  contactName: string;
  contactPhone: string;
  contactAvatar?: string;
  neighborhood: string;
  city: string;
  queue: ConversationQueue;
  assignedTo?: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  tags: string[];
  stage: 'Novo Lead' | 'Em Atendimento' | 'Condicional Enviado' | 'Venda Concluída' | 'Aguardando Retorno';
  dealValue?: number;
  condicionalItems?: string[];
  activeSacolinha?: SacolinhaCondicional;
  notes?: string;
}

export interface QuickReply {
  id: string;
  shortcut: string;
  title: string;
  content: string;
}

export interface ScheduledPost {
  id: string;
  title: string;
  format: 'comercial' | 'lifestyle' | 'apresentacao';
  productName: string;
  color: string;
  price: number;
  caption: string;
  hashtags: string[];
  imageUrl: string;
  scheduledDate: string;
  scheduledTime: string;
  status: 'rascunho' | 'aguardando_aprovacao' | 'agendado' | 'publicado';
  channels: {
    instagram: boolean;
    facebook: boolean;
    whatsappVip: boolean;
  };
}

export interface WhatsAppGroup {
  id: string;
  name: string;
  participantCount: number;
  isVip: boolean;
  inviteLink: string;
  lastActivity?: string;
}

export interface VipGroupPost {
  id: string;
  type: 'spoiler' | 'enquete' | 'promocao' | 'catalogo';
  title: string;
  text: string;
  mediaType: 'image' | 'video' | 'poll' | 'document';
  pollOptions?: string[];
  imageUrl?: string;
  targetGroupId: string;
  targetGroupName: string;
  scheduledFor: string;
  status: 'pronto' | 'enviado';
}

export interface LinktreeItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  badge?: string;
  type: 'whatsapp' | 'group' | 'pdf' | 'location' | 'link';
  active: boolean;
  isActive?: boolean;
  icon?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  role: string;
  storeName?: string;
  avatarUrl?: string;
  city: string;
  baseNeighborhood: string;
  pixKey: string;
  openRouterKey: string;
  instagramUser: string;
  defaultCondicionalHours: number;
}

export interface SupportTicket {
  id: string;
  protocol: string;
  type: 'bug' | 'melhoria' | 'duvida';
  title: string;
  description: string;
  status: 'aberto' | 'em_analise' | 'em_correcao' | 'resolvido';
  screenUrl: string;
  userName: string;
  userRole: string;
  createdAt: string;
  attachmentUrl?: string;
  response?: string;
}
