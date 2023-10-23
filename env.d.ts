/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_DISCORD_ID: string;
    readonly VITE_EMAIL: string;
    readonly VITE_GITHUB: string;
    readonly VITE_IMAGE_LINK: string;
    readonly VITE_LINKEDIN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}