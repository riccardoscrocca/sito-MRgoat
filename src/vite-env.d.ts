/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_TITLE: string
  readonly VITE_SITE_SUBTITLE: string
  readonly VITE_HERO_TITLE: string
  readonly VITE_HERO_SUBTITLE: string
  readonly VITE_HERO_DESCRIPTION: string
  readonly VITE_CTA_TEXT: string
  readonly VITE_TELEGRAM_URL: string
  readonly VITE_LOGO_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}