export type ItemCategory = 
  | 'Leggings'
  | 'Tops'
  | 'Croppeds'
  | 'Bermudas e Shorts'
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

export interface VipGroupPost {
  id: string;
  type: 'spoiler' | 'enquete' | 'lancamento' | 'reposicao' | 'catalogo';
  title: string;
  text: string;
  mediaType: 'image' | 'video' | 'poll' | 'document';
  pollOptions?: string[];
  targetGroup: string;
  scheduledFor: string;
  status: 'pronto' | 'enviado';
}
