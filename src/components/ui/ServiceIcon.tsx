const PATHS: Record<string, string> = {
  home: 'M4 11.5 12 4l8 7.5M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9',
  layout: 'M4 5h16v14H4zM4 10h16M9 10v9',
  compass: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM15 9l-2 6-6 2 2-6 6-2Z',
  lamp: 'M9 3h6l2 6H7l2-6ZM7 9h10l-3 5H10L7 9ZM12 14v4M8 21h8',
  sofa: 'M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M3 12h18v5a1 1 0 0 1-1 1h-1v2h-2v-2H7v2H5v-2H4a1 1 0 0 1-1-1Z',
  palette:
    'M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2a2 2 0 0 1 2-2h1a3 3 0 0 0 3-3c0-6-3.6-11-8-11Z M7.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  hammer: 'm14 6 4 4-2 2-4-4 2-2ZM3 21l8-8m1-1 3.5-3.5 3 3L15 15l-3-3Z',
  clipboard: 'M9 3h6v3H9zM6 6h12v15H6zM9 12h6M9 16h6',
  sparkles: 'M12 3v4M12 17v4M4 12h4M16 12h4M6.5 6.5l2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2',
  frame: 'M4 4h16v16H4zM8 8h8v8H8z',
}

export function ServiceIcon({ name, className = 'h-6 w-6' }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d={PATHS[name] ?? PATHS.home} />
    </svg>
  )
}
