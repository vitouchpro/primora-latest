import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { SITE } from './src/data/site.ts'
import { SERVICES } from './src/data/services.ts'
import { PROJECTS } from './src/data/projects.ts'
import { BLOG_POSTS } from './src/data/blog.ts'

const STATIC_PAGES = ['/', '/about', '/services', '/projects', '/process', '/team', '/reviews', '/blog', '/contact']

function allRoutes(): string[] {
  return [
    ...STATIC_PAGES,
    ...SERVICES.map((s) => `/services/${s.slug}`),
    ...PROJECTS.map((p) => `/projects/${p.slug}`),
    ...BLOG_POSTS.map((b) => `/blog/${b.slug}`),
  ]
}

async function writeSitemap(dir: string) {
  const urls = allRoutes()
    .map(
      (route) =>
        `  <url><loc>${SITE.url}${route}</loc><changefreq>weekly</changefreq><priority>${route === '/' ? '1.0' : '0.7'}</priority></url>`,
    )
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  await writeFile(path.join(dir, 'sitemap.xml'), xml, 'utf-8')
}

async function writeRobots(dir: string) {
  const txt = `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`
  await writeFile(path.join(dir, 'robots.txt'), txt, 'utf-8')
}

// GEO: a plain-language summary for AI answer engines / LLM crawlers that
// support the emerging llms.txt convention.
async function writeLlmsTxt(dir: string) {
  const txt = `# ${SITE.fullName}

> ${SITE.description}

- Location: ${SITE.address}
- Service area: ${SITE.serviceAreas.join(', ')}, ${SITE.city}
- Phone: ${SITE.phone}
- Email: ${SITE.email}
- Website: ${SITE.url}

## Services
${SERVICES.map((s) => `- [${s.title}](${SITE.url}/services/${s.slug}): ${s.summary}`).join('\n')}

## Recent projects
${PROJECTS.slice(0, 6)
  .map((p) => `- [${p.title}](${SITE.url}/projects/${p.slug}): ${p.summary}`)
  .join('\n')}

## Key pages
- [About](${SITE.url}/about)
- [Our Process](${SITE.url}/process)
- [Team](${SITE.url}/team)
- [Reviews](${SITE.url}/reviews)
- [Blog](${SITE.url}/blog)
- [Contact](${SITE.url}/contact)
`
  await writeFile(path.join(dir, 'llms.txt'), txt, 'utf-8')
}

// Not wrapped in vite's `defineConfig` because its UserConfig type doesn't
// know about `ssgOptions` (a vite-react-ssg extension); vite-react-ssg reads
// it directly from this plain config object at build time.
// https://vite.dev/config/
export default {
  plugins: [react(), tailwindcss()],
  ssgOptions: {
    formatting: 'none',
    onFinished: async (dir: string) => {
      await Promise.all([writeSitemap(dir), writeRobots(dir), writeLlmsTxt(dir)])
    },
  },
}
