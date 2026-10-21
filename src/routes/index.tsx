import { LinkCard } from '#/components/LinkCard'
import { LinksBackground } from '#/components/LinksBackground'
import { SocialLinks } from '#/components/SocialLinks'
import { createPageMeta, createProfileJsonLd, jsonLdScript } from '#/lib/seo'
import { buildCardLinks, buildSocialLinks, siteConfig } from '#/lib/site'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => {
    const { meta, links } = createPageMeta({ path: '/' })

    return {
      meta,
      links,
      scripts: [jsonLdScript(createProfileJsonLd())],
    }
  },
  component: Home,
})

const socialLinks = buildSocialLinks()
const cardLinks = buildCardLinks()

function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center px-4 py-10 sm:px-6 sm:py-14">
      <LinksBackground />

      <div className="relative z-10 w-full max-w-md">
        <header className="profile-reveal flex flex-col items-center text-center">
          <div className="avatar-glow mb-5 size-24">
            <img
              src={siteConfig.avatar}
              alt={`Foto de perfil — ${siteConfig.name}`}
              width={96}
              height={96}
              className="size-24 rounded-full border-2 border-primary/30 object-cover"
            />
          </div>

          <SocialLinks links={socialLinks} />

          <p className="mb-2 mt-5 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            // Desenvolvedor Full Stack
          </p>

          <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            {siteConfig.name}
          </h1>

          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            Transformo ideias em{' '}
            <span className="font-semibold text-primary-light">produtos digitais.</span>
          </p>
        </header>

        <nav aria-label="Links" className="mt-8 flex flex-col gap-3">
          {cardLinks.map((link, index) => (
            <LinkCard key={link.type} link={link} index={index} />
          ))}
        </nav>

        <footer className="footer-reveal mt-10 text-center">
          <p className="text-xs text-muted/70">
            © {new Date().getFullYear()} {siteConfig.author}
          </p>
        </footer>
      </div>
    </main>
  )
}
