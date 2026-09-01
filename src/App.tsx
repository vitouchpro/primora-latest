import React from 'react'
import type { RouteRecord } from 'vite-react-ssg'
import { Layout } from './components/layout/Layout'
import { SERVICES } from './data/services'
import { PROJECTS } from './data/projects'
import { BLOG_POSTS } from './data/blog'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/components/layout/Layout.tsx',
    children: [
      { index: true, Component: React.lazy(() => import('./pages/Home')) },
      { path: 'about', Component: React.lazy(() => import('./pages/About')) },
      { path: 'services', Component: React.lazy(() => import('./pages/ServicesIndex')) },
      {
        path: 'services/:slug',
        Component: React.lazy(() => import('./pages/ServiceDetail')),
        getStaticPaths: () => SERVICES.map((s) => `services/${s.slug}`),
      },
      { path: 'projects', Component: React.lazy(() => import('./pages/ProjectsIndex')) },
      {
        path: 'projects/:slug',
        Component: React.lazy(() => import('./pages/ProjectDetail')),
        getStaticPaths: () => PROJECTS.map((p) => `projects/${p.slug}`),
      },
      { path: 'process', Component: React.lazy(() => import('./pages/Process')) },
      { path: 'team', Component: React.lazy(() => import('./pages/Team')) },
      { path: 'reviews', Component: React.lazy(() => import('./pages/Reviews')) },
      { path: 'blog', Component: React.lazy(() => import('./pages/BlogIndex')) },
      {
        path: 'blog/:slug',
        Component: React.lazy(() => import('./pages/BlogPost')),
        getStaticPaths: () => BLOG_POSTS.map((b) => `blog/${b.slug}`),
      },
      { path: 'contact', Component: React.lazy(() => import('./pages/Contact')) },
      { path: 'privacy-policy', Component: React.lazy(() => import('./pages/Privacy')) },
      { path: 'terms', Component: React.lazy(() => import('./pages/Terms')) },
      { path: '*', Component: React.lazy(() => import('./pages/NotFound')) },
    ],
  },
]
