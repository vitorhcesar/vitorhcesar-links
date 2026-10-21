import { GithubIcon } from '#/components/icons/GithubIcon'
import { cn } from '#/lib/cn'
import type { ILinkItem, TLinkItemType } from '#/lib/site'
import { siteConfig } from '#/lib/site'
import {
    ArrowRight,
    ExternalLink,
    Globe,
    Mail,
    ShoppingBag,
} from 'lucide-react'
import type { CSSProperties, ReactNode } from 'react'
import { useState } from 'react'

function getLinkIcon(type: TLinkItemType): ReactNode {
  switch (type) {
    case 'portfolio':
      return <Globe className="size-5" aria-hidden="true" />
    case 'project':
      return <Globe className="size-5" aria-hidden="true" />
    case 'github':
      return <GithubIcon />
    case 'store':
      return <ShoppingBag className="size-5" aria-hidden="true" />
    case 'email':
      return <Mail className="size-5" aria-hidden="true" />
  }
}

function getLinkAvatarSrc(link: ILinkItem): string {
  if (link.avatar) return link.avatar
  if (link.type === 'store') {
    return new URL('/favicon-32x32.png', siteConfig.storeUrl).href
  }
  return siteConfig.avatar
}

function LinkAvatar({ link }: { link: ILinkItem }) {
  const [useFallback, setUseFallback] = useState(false)
  const icon = getLinkIcon(link.type)

  if (useFallback) {
    return (
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
    )
  }

  return (
    <img
      src={getLinkAvatarSrc(link)}
      alt=""
      width={48}
      height={48}
      loading="lazy"
      decoding="async"
      className={cn(
        'size-12 shrink-0 rounded-xl bg-white/5',
        link.type === 'store' ? 'object-contain p-2' : 'object-cover',
      )}
      onError={() => setUseFallback(true)}
    />
  )
}

export function LinkCard({ link, index }: { link: ILinkItem; index: number }) {
  const icon = getLinkIcon(link.type)

  return (
    <a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      className={cn(
        'link-card link-reveal group flex items-center gap-4 rounded-2xl border border-white/15 p-5',
        'hover:border-primary/35',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light',
      )}
      style={{ '--reveal-delay': `${120 + index * 80}ms` } as CSSProperties}
    >
      <LinkAvatar key={link.href} link={link} />
      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-2 text-sm font-semibold text-white">
          <span className="text-primary-light [&_svg]:size-4">{icon}</span>
          {link.label}
        </p>
        <p className="truncate text-sm text-muted">{link.description}</p>
      </div>
      {link.external ? (
        <ExternalLink
          className="size-4 shrink-0 text-muted transition-colors group-hover:text-primary-light"
          aria-hidden="true"
        />
      ) : (
        <ArrowRight
          className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary-light"
          aria-hidden="true"
        />
      )}
    </a>
  )
}
