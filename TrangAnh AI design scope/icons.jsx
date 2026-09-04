function Icon({ name, size = 16, color = 'currentColor', strokeWidth = 2 }) {
  size = Number(size) || 16;
  strokeWidth = Number(strokeWidth) || 2;
  const ref = React.useRef(null);
  React.useEffect(() => {
    let cancelled = false;
    const draw = () => {
      if (cancelled || !ref.current || !window.lucide) return;
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ nameAttr: 'data-lucide', attrs: { width: size, height: size, stroke: color, 'stroke-width': strokeWidth }, root: ref.current });
    };
    if (window.lucide) draw();
    else {
      const t = setInterval(() => { if (window.lucide) { clearInterval(t); draw(); } }, 60);
      setTimeout(() => clearInterval(t), 8000);
      return () => { cancelled = true; clearInterval(t); };
    }
    return () => { cancelled = true; };
  }, [name, size, color, strokeWidth]);
  return React.createElement('span', { ref, style: { display: 'inline-flex', width: size, height: size, flex: '0 0 auto' } });
}
window.Icon = Icon;
if (typeof module !== 'undefined') module.exports = { Icon };
