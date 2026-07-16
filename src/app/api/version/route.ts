import { NextResponse } from 'next/server';

/** GET /api/version — returns the latest published app version for update checks. */
export async function GET() {
  return NextResponse.json({
    latest: process.env.NEXT_PUBLIC_APP_VERSION ?? '1.0.2',
    downloadUrl:
      process.env.NEXT_PUBLIC_MACOS_DMG_URL ??
      'https://download.hemingway.md/hemingway-1.0.2.dmg',
  });
}
