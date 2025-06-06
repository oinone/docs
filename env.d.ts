/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WELCOME_WEBSITE_URL: string;
  // Add other environment variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
