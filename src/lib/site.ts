export const siteConfig = {
  name: 'Vitor Hugo',
  title: 'Vitor Hugo | Links Oficiais',
  description:
    'Links oficiais de Vitor Hugo — desenvolvedor full stack. Acesse portfólio, GitHub, Instagram, TikTok, YouTube e contato.',
  locale: 'pt_BR',
  language: 'pt-BR',
  author: 'Vitor Hugo César',
  keywords: [
    'Vitor Hugo',
    'vitorhcesar',
    'desenvolvedor full stack',
    'links',
    'portfólio',
    'GitHub',
    'Instagram',
    'TikTok',
    'YouTube',
    'desenvolvedor web',
    'desenvolvedor Brasil',
  ],
  url: import.meta.env.VITE_SITE_URL ?? 'https://links.vitorhcesar.dev',
  portfolioUrl:
    import.meta.env.VITE_PORTFOLIO_URL ?? 'https://www.vitorhcesar.com.br',
  ogImage: '/images/og-image.jpg',
  themeColor: '#020617',
  twitterHandle: '@vitorhcesar',
  github: 'https://github.com/vitorhcesar',
  githubHandle: 'vitorhcesar',
  instagram: 'https://instagram.com/vitorhugo.cesar',
  instagramHandle: 'vitorhugo.cesar',
  tiktok: 'https://tiktok.com/@vitorhugo.cesar',
  tiktokHandle: 'vitorhugo.cesar',
  youtube: 'https://www.youtube.com/channel/UCclIxi_q5k_I_En-TePw9KA',
  youtubeChannelId: 'UCclIxi_q5k_I_En-TePw9KA',
  linkedin: import.meta.env.VITE_LINKEDIN_URL as string | undefined,
  email: import.meta.env.VITE_CONTACT_EMAIL as string | undefined,
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined,
  storeUrl: 'https://loja.vitorhcesar.com.br',
  avatar: '/images/social-avatar.webp',
  rayticketsUrl: 'https://app.raytickets.com',
  planejaPostUrl: 'https://app.planejapost.com',
} as const

export type TLinkItemType =
  | 'portfolio'
  | 'github'
  | 'store'
  | 'instagram'
  | 'tiktok'
  | 'youtube'
  | 'linkedin'
  | 'whatsapp'
  | 'email'
  | 'project'

export interface ILinkItem {
  type: TLinkItemType
  label: string
  description: string
  href: string
  external: boolean
  avatar?: string
}

export function buildSocialLinks(): ILinkItem[] {
  const links: ILinkItem[] = []

  const whatsappNumber = siteConfig.whatsappNumber?.replace(/\D/g, '')
  if (whatsappNumber) {
    const text = encodeURIComponent(
      `Olá, ${siteConfig.author}! Encontrei seu contato através do seu site de links oficiais, gostaria de falar sobre um projeto.`,
    )
    links.push({
      type: 'whatsapp',
      label: 'WhatsApp',
      description: 'Fale comigo pelo WhatsApp',
      href: `https://wa.me/${whatsappNumber}?text=${text}`,
      external: true,
    })
  }

  links.push(
    {
      type: 'instagram',
      label: 'Instagram',
      description: `@${siteConfig.instagramHandle}`,
      href: siteConfig.instagram,
      external: true,
    },
    {
      type: 'tiktok',
      label: 'TikTok',
      description: `@${siteConfig.tiktokHandle}`,
      href: siteConfig.tiktok,
      external: true,
    },
    {
      type: 'youtube',
      label: 'YouTube',
      description: 'Canal no YouTube',
      href: siteConfig.youtube,
      external: true,
    },
    {
      type: 'github',
      label: 'GitHub',
      description: `@${siteConfig.githubHandle}`,
      href: siteConfig.github,
      external: true,
    },
  )

  if (siteConfig.linkedin) {
    links.push({
      type: 'linkedin',
      label: 'LinkedIn',
      description: 'Conecte-se comigo',
      href: siteConfig.linkedin,
      external: true,
    })
  }

  return links
}

export function buildCardLinks(): ILinkItem[] {
  const links: ILinkItem[] = [
    {
      type: 'store',
      label: 'Minha loja',
      description: new URL(siteConfig.storeUrl).hostname,
      href: siteConfig.storeUrl,
      external: true,
    },
    {
      type: 'portfolio',
      label: 'Meu Site',
      description: new URL(siteConfig.portfolioUrl).hostname,
      href: siteConfig.portfolioUrl,
      external: true,
      avatar: '/images/vh-avatar.png',
    },
    {
      type: 'project',
      label: 'PlanejaPost',
      description: 'Agende e publique conteúdo em 6 redes sociais',
      href: siteConfig.planejaPostUrl,
      external: true,
      avatar: '/images/planeja-post-avatar.png',
    },
    {
      type: 'project',
      label: 'RayTickets',
      description: 'Atendimento e vendas pelo WhatsApp com CRM e automações',
      href: siteConfig.rayticketsUrl,
      external: true,
      avatar: '/images/raytickets-avatar.png',
    },
  ]

  if (siteConfig.email) {
    links.push({
      type: 'email',
      label: 'E-mail',
      description: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
    })
  }

  return links
}

export function buildLinks(): ILinkItem[] {
  return [...buildSocialLinks(), ...buildCardLinks()]
}
