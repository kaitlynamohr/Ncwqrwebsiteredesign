import { Outlet, useLocation } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { useEffect } from 'react';

export function Root() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.replace('#', '');
    let cancelled = false;
    const timeoutIds: ReturnType<typeof setTimeout>[] = [];

    const attempt = (tries: number) => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        const navHeight = 88;
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      } else if (tries > 0) {
        const tid = setTimeout(() => attempt(tries - 1), 150);
        timeoutIds.push(tid);
      }
    };

    // Initial delay to let the incoming page render before we look for the element
    const initialTid = setTimeout(() => attempt(15), 100);
    timeoutIds.push(initialTid);

    return () => {
      cancelled = true;
      timeoutIds.forEach(clearTimeout);
    };
  }, [pathname, hash]);

  return (
    <div style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }} className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
