import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { title, caption, hashtags, type, syncToVip, targetAccount = '@glossyluanaudia' } = await req.json();

    // Simulação do endpoint de disparo para a Meta Graph API do Instagram e UAZAPI WhatsApp Group
    const simulatedResponse = {
      success: true,
      instagramPostId: `ig_${Date.now()}`,
      account: targetAccount,
      type: type,
      syncedToVipGroup: syncToVip,
      vipMessageId: syncToVip ? `vip_msg_${Date.now()}` : null,
      publishedAt: new Date().toISOString(),
      message: syncToVip 
        ? 'Publicação enviada para o Instagram @glossyluanaudia e espelhada com sucesso no Grupo VIP de WhatsApp!' 
        : 'Publicação enviada com sucesso para o Instagram @glossyluanaudia!',
    };

    return NextResponse.json(simulatedResponse);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao publicar conteúdo' }, { status: 500 });
  }
}
