'use client';

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Users, 
  FileText, 
  MapPin, 
  ExternalLink, 
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { INITIAL_LINKTREE_ITEMS, INITIAL_USER_PROFILE } from '../../data/initialData';
import { LinktreeItem, UserProfile } from '../../types';

export default function PublicBioPage() {
  const [profile, setProfile] = useState<UserProfile>(INITIAL_USER_PROFILE);
  const [links, setLinks] = useState<LinktreeItem[]>(INITIAL_LINKTREE_ITEMS);

  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem('glossy_user_profile');
      if (savedProfile) setProfile(JSON.parse(savedProfile));
      const savedLinks = localStorage.getItem('glossy_linktree_items');
      if (savedLinks) setLinks(JSON.parse(savedLinks));
    } catch (e) {}
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'whatsapp': return <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />;
      case 'group': return <Users className="w-5 h-5 text-[#C87D6B] shrink-0" />;
      case 'pdf': return <FileText className="w-5 h-5 text-amber-600 shrink-0" />;
      case 'location': return <MapPin className="w-5 h-5 text-blue-600 shrink-0" />;
      default: return <ExternalLink className="w-5 h-5 text-zinc-600 shrink-0" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-zinc-900 flex flex-col items-center justify-between p-4 sm:p-6">
      
      {/* Container Central Estilo Bio */}
      <div className="w-full max-w-md mx-auto pt-6 pb-8 space-y-6">
        
        {/* Cabeçalho da Revendedora */}
        <div className="text-center space-y-3">
          {/* Logo Oficial da Marca */}
          <div className="flex justify-center mb-1">
            <img
              src="/brand/glossy-horizontal-preto.png"
              alt="Glossy Oficial"
              className="h-7 w-auto object-contain"
            />
          </div>

          {/* Avatar da Revendedora */}
          <div className="relative inline-block">
            <img
              src={profile.avatarUrl || '/brand/luana-frias.png'}
              alt={profile.name}
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-md"
            />
            <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold" title="Online no WhatsApp">
              ✓
            </span>
          </div>

          {/* Nome & Bio */}
          <div>
            <h1 className="font-serif font-bold text-lg tracking-wide uppercase text-zinc-900">
              {profile.name}
            </h1>
            <p className="text-xs font-semibold text-[#C87D6B] mt-0.5">
              @{profile.instagramUser || 'glossyluanaudia'} • {profile.city || 'Uberlândia - MG'}
            </p>
            <p className="text-xs text-zinc-600 mt-2 max-w-xs mx-auto leading-relaxed">
              Moda fitness de alto padrão com alta compressão e cós anatômico duplo. Atendimento personalizado e sacolinha condicional! ✨
            </p>
          </div>
        </div>

        {/* Lista de Links Oficiais */}
        <div className="space-y-3">
          {links.filter(item => item.active).map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-white border border-[#EFE7DE] shadow-xs hover:shadow-md hover:border-[#C87D6B] flex items-center gap-3.5 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0 border border-zinc-100 group-hover:scale-105 transition-transform">
                {getIcon(item.type)}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-xs font-bold text-zinc-900 group-hover:text-[#C87D6B] transition-colors truncate">
                    {item.title}
                  </h2>
                  {item.badge && (
                    <span className="text-[9px] px-2 py-0.5 rounded-full font-bold bg-[#FAF2EE] text-[#C87D6B] shrink-0">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-zinc-500 truncate mt-0.5 font-medium">
                  {item.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Bloco de Sacolinha Condicional */}
        <div className="p-4 rounded-2xl bg-white border border-[#EFE7DE] shadow-xs text-center space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-zinc-900">
            <ShoppingBag className="w-4 h-4 text-[#C87D6B]" />
            <span>Como funciona a Sacolinha Condicional?</span>
          </div>
          <p className="text-[11px] text-zinc-500 leading-relaxed max-w-xs mx-auto">
            1. Escolha suas peças no catálogo digital.<br />
            2. Enviamos sem custo até sua casa em Uberlândia.<br />
            3. Prove no seu espelho com calma durante 24 horas!
          </p>
        </div>

      </div>

      {/* Rodapé Oficial */}
      <footer className="text-center py-4 border-t border-[#EFE7DE] w-full max-w-md">
        <p className="text-[9px] uppercase tracking-widest text-zinc-400 font-semibold">
          GLOSSY BRASIL • REVENDAS AUTORIZADAS
        </p>
      </footer>

    </div>
  );
}
