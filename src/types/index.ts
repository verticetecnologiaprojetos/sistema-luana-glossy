export type ItemCategory = 
  | 'Leggings'
  | 'Tops'
  | 'Croppeds'
  | 'Bermudas e Shorts'
  | 'T-Shirts'
  | 'Regatas'
  | 'Macacões e Conjuntos';

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
}

export type LeadStatus = 
  | 'novo'
  | 'em_atendimento'
  | 'condicional_enviado'
  | 'venda_concluida'
  | 'aguardando_retorno';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  neighborhood?: string;
  city: string;
  sizeInterest?: ItemSize;
  status: LeadStatus;
  notes?: string;
  lastContact: string;
  cartItems?: string[];
  totalValue?: number;
}

export type PostType = 'comercial' | 'lifestyle' | 'apresentacao';

export interface ContentPost {
  id: string;
  title: string;
  type: PostType;
  productName: string;
  productColor: string;
  price?: number;
  caption: string;
  hashtags: string[];
  status: 'rascunho' | 'pronto' | 'publicado';
  syncToVip: boolean;
  scheduledFor?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'cliente' | 'glossy_ia' | 'luana_humano';
  text: string;
  timestamp: string;
  isHandoff?: boolean;
  handoffData?: {
    clientName?: string;
    product?: string;
    size?: string;
    address?: string;
    phone?: string;
  };
}
