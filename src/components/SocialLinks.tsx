import { GithubIcon } from '#/components/icons/GithubIcon'
import { InstagramIcon } from '#/components/icons/InstagramIcon'
import { LinkedInIcon } from '#/components/icons/LinkedInIcon'
import { TikTokIcon } from '#/components/icons/TikTokIcon'
import { YouTubeIcon } from '#/components/icons/YouTubeIcon'
import { cn } from '#/lib/cn'
import type { ILinkItem, TLinkItemType } from '#/lib/site'
import type { CSSProperties, ReactNode } from 'react'

const socialIconClass: Partial<Record<TLinkItemType, string>> = {
  github: 'hover:border-white/40 hover:bg-white/10 hover:text-white',
  instagram:
    'hover:border-[#E4405F]/50 hover:bg-[#E4405F]/15 hover:text-[#F77737]',
  tiktok: 'hover:border-white/40 hover:bg-white/10 hover:text-white',
  youtube:
    'hover:border-[#FF0000]/45 hover:bg-[#FF0000]/15 hover:text-[#FF4444]',
  linkedin:
    'hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/15 hover:text-[#378FE9]',
  whatsapp:
    'hover:border-[#25D366]/50 hover:bg-[#25D366]/15 hover:text-[#25D366]',
}

function getSocialIcon(type: TLinkItemType): ReactNode {
  switch (type) {
    case 'github':
      return <GithubIcon />
    case 'instagram':
      return <InstagramIcon />
    case 'tiktok':
      return <TikTokIcon />
    case 'youtube':
      return <YouTubeIcon />
    case 'linkedin':
      return <LinkedInIcon />
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.54 0 .2 5.34.2 11.9c0 2.1.55 4.15 1.6 5.96L.1 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.49-8.42ZM12.1 21.78h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.85 9.85 0 0 1-1.52-5.24c0-5.46 4.44-9.9 9.91-9.9a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7c0 5.46-4.45 9.9-9.91 9.9Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.2-.24-.58-.49-.5-.66-.51h-.56c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.47s1.06 2.87 1.2 3.07c.15.2 2.08 3.17 5.03 4.44.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.56-.35Z" />
        </svg>
      )
    default:
      return null
  }
}

function SocialLinkButton({ link, index }: { link: ILinkItem; index: number }) {
  const icon = getSocialIcon(link.type)
  if (!icon) return null

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.label} — ${link.description}`}
      className={cn(
        'social-link link-reveal flex size-11 items-center justify-center rounded-full border border-white/15',
        'bg-white/5 text-muted backdrop-blur-sm',
        'transition-colors duration-200',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light',
        '[&_svg]:size-5',
        socialIconClass[link.type],
      )}
      style={{ '--reveal-delay': `${200 + index * 60}ms` } as CSSProperties}
    >
      {icon}
    </a>
  )
}

export function SocialLinks({ links }: { links: ILinkItem[] }) {
  if (links.length === 0) return null

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-3"
      aria-label="Redes sociais"
    >
      {links.map((link, index) => (
        <SocialLinkButton key={link.type} link={link} index={index} />
      ))}
    </div>
  )
}
