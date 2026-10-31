import { NextResponse } from 'next/server';

const UAZAPI_SERVER = 'https://fsdistribuidora.uazapi.com';
const INSTANCE_TOKEN = '72722d0e-4d1f-4691-896a-5982e5edc88b';

export async function GET() {
  try {
    const response = await fetch(`${UAZAPI_SERVER}/instance/status`, {
      method: 'GET',
      headers: {
        'token': INSTANCE_TOKEN
      },
      cache: 'no-store'
    });

    const data = await response.json();
    const inst = data.instance || {};

    const isConnected = inst.status === 'open' || inst.status === 'connected';

    return NextResponse.json({
      success: true,
      status: inst.status || 'disconnected',
      connected: isConnected,
      name: inst.name || 'Luana Glossy',
      phone: inst.owner || '+55 34 99300-2424',
      profilePicUrl: inst.profilePicUrl || null
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Erro ao consultar status da UaZapi' },
      { status: 500 }
    );
  }
}
