/* @ds-bundle: {"format":4,"namespace":"TrangAnhAIDesignSystem_40b425","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"NodeCard","sourcePath":"components/marketing/NodeCard.jsx"},{"name":"PricingCard","sourcePath":"components/marketing/PricingCard.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"StepTimeline","sourcePath":"components/marketing/StepTimeline.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"34869486bd17","components/core/Button.jsx":"c8f1b4cfb84f","components/core/Card.jsx":"e80d2bb7b9c3","components/core/Logo.jsx":"d8b8efdf1e96","components/data/DataTable.jsx":"10fd69299ce9","components/data/MetricCard.jsx":"c095bd443bfd","components/disclosure/Accordion.jsx":"f71e70731a13","components/forms/Checkbox.jsx":"3ade57686f99","components/forms/Field.jsx":"4fbdd4843dbe","components/forms/Input.jsx":"6731af4e7990","components/forms/Select.jsx":"c451f1e49441","components/marketing/NodeCard.jsx":"54710899d153","components/marketing/PricingCard.jsx":"484ec42b2421","components/marketing/SectionHeading.jsx":"fadc78577b8d","components/marketing/StepTimeline.jsx":"d61ffcd61613","components/navigation/Tabs.jsx":"97b5ce485db0","ui_kits/dashboard/KnowledgeLake.jsx":"4c49e75086fa","ui_kits/dashboard/Overview.jsx":"f0acdcc0b632","ui_kits/dashboard/QuoteConsole.jsx":"b6b8420233e7","ui_kits/dashboard/Shell.jsx":"fd7379825cf3","ui_kits/dashboard/app.jsx":"aafef2a53c8b","ui_kits/landing/Hero.jsx":"dbc8335137ce","ui_kits/landing/Pricing.jsx":"de77358f681b","ui_kits/landing/Sections.jsx":"d75947d277d2","ui_kits/landing/app.jsx":"bfd386fed0d9","ui_kits/landing/parts.jsx":"43b8777b73a4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TrangAnhAIDesignSystem_40b425 = window.TrangAnhAIDesignSystem_40b425 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  brand: {
    background: 'var(--surface-brand-soft)',
    color: 'var(--iris-700)',
    border: '1px solid var(--border-brand)'
  },
  accent: {
    background: 'var(--surface-accent-soft)',
    color: 'var(--teal-700)',
    border: '1px solid var(--border-accent)'
  },
  notice: {
    background: 'var(--surface-notice-soft)',
    color: 'var(--amber-700)',
    border: '1px solid var(--amber-300)'
  },
  risk: {
    background: 'var(--surface-risk-soft)',
    color: 'var(--rose-600)',
    border: '1px solid var(--rose-200)'
  },
  neutral: {
    background: 'var(--surface-sunken)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-subtle)'
  },
  onDark: {
    background: 'rgba(255,255,255,.08)',
    color: 'var(--text-on-dark)',
    border: '1px solid var(--border-on-dark)'
  }
};
function Badge({
  tone = 'brand',
  size = 'md',
  caps = false,
  icon = null,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: size === 'sm' ? '3px 9px' : '6px 14px',
      fontSize: size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: caps ? 'var(--tracking-caps)' : 'var(--tracking-normal)',
      textTransform: caps ? 'uppercase' : 'none',
      lineHeight: 1.35,
      borderRadius: 'var(--radius-badge)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-body)',
      ...(tones[tone] || tones.brand),
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pad = {
  sm: '0 14px',
  md: '0 20px',
  lg: '0 28px'
};
const height = {
  sm: 'var(--control-h-sm)',
  md: 'var(--control-h-md)',
  lg: 'var(--control-h-lg)'
};
const fontSize = {
  sm: 'var(--text-sm)',
  md: 'var(--text-base)',
  lg: 'var(--text-md)'
};
const looks = {
  primary: {
    background: 'var(--surface-accent)',
    color: 'var(--white)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-accent)'
  },
  brand: {
    background: 'var(--surface-brand)',
    color: 'var(--white)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-brand)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-strong)',
    border: '1px solid var(--border-strong)',
    boxShadow: 'var(--shadow-xs)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-brand)',
    border: '1px solid transparent',
    boxShadow: 'none'
  },
  onDark: {
    background: 'rgba(255,255,255,.10)',
    color: 'var(--text-on-dark)',
    border: '1px solid var(--border-on-dark)',
    boxShadow: 'none'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  icon = null,
  iconAfter = null,
  href,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const look = looks[variant] || looks.primary;
  const s = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    height: height[size],
    padding: pad[size],
    fontSize: fontSize[size],
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: 'var(--tracking-snug)',
    borderRadius: 'var(--radius-control)',
    whiteSpace: 'nowrap',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transition: 'var(--motion-hover)',
    opacity: disabled ? 0.45 : 1,
    ...look,
    transform: !disabled && press ? 'var(--press-scale)' : !disabled && hover ? 'var(--lift-hover)' : 'none',
    filter: !disabled && hover ? 'brightness(1.06)' : 'none',
    ...style
  };
  if (variant === 'secondary' && hover && !disabled) {
    s.background = 'var(--slate-50)';
    s.borderColor = 'var(--slate-400)';
    s.filter = 'none';
  }
  if (variant === 'ghost' && hover && !disabled) {
    s.background = 'var(--surface-brand-soft)';
    s.filter = 'none';
  }
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    style: s,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flex: '0 0 auto'
    }
  }, icon), children, iconAfter && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flex: '0 0 auto'
    }
  }, iconAfter));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const surfaces = {
  plain: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-body)'
  },
  sunken: {
    background: 'var(--surface-sunken)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-body)'
  },
  brandSoft: {
    background: 'var(--surface-brand-soft)',
    border: '1px solid var(--border-brand)',
    color: 'var(--text-body)'
  },
  accentSoft: {
    background: 'var(--surface-accent-soft)',
    border: '1px solid var(--border-accent)',
    color: 'var(--text-body)'
  },
  dark: {
    background: 'var(--gradient-dark)',
    border: '1px solid var(--border-on-dark)',
    color: 'var(--text-on-dark-muted)'
  }
};
function Card({
  surface = 'plain',
  elevation = 'sm',
  pad = 'md',
  interactive = false,
  accentTop = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const shadow = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  }[elevation];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      padding: pad === 'none' ? 0 : pad === 'sm' ? 'var(--space-4)' : pad === 'lg' ? 'var(--card-pad-lg)' : 'var(--card-pad)',
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : shadow,
      transform: interactive && hover ? 'var(--lift-hover)' : 'none',
      transition: 'var(--motion-hover)',
      cursor: interactive ? 'pointer' : 'default',
      ...surfaces[surface],
      ...style
    }
  }, rest), accentTop && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '0 0 auto 0',
      height: 3,
      background: 'var(--gradient-brand)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Logo({
  size = 36,
  showWordmark = true,
  tagline = false,
  onDark = false,
  src = '../../assets/logo-icon.jpg',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: Math.round(size * 0.32),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Trang Anh AI",
    width: size,
    height: size,
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-logo)',
      display: 'block',
      boxShadow: onDark ? 'none' : 'var(--shadow-xs)'
    }
  }), showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: Math.round(size * 0.52),
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1.05,
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, "TRANG ANH ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? 'var(--teal-300)' : 'var(--text-brand)'
    }
  }, "AI")), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: Math.max(10, Math.round(size * 0.26)),
      letterSpacing: 'var(--tracking-wide)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      fontWeight: 'var(--weight-medium)'
    }
  }, "Trang b\u1ECB quy tr\xECnh. Tinh anh v\u1EADn h\xE0nh.")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  dense = false,
  highlightColumn = null,
  style,
  ...rest
}) {
  const cell = {
    padding: dense ? '10px 14px' : '14px 18px',
    fontSize: dense ? 'var(--text-sm)' : 'var(--text-base)',
    textAlign: 'left',
    verticalAlign: 'top'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-sunken)'
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...cell,
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: i === highlightColumn ? 'var(--iris-700)' : 'var(--text-muted)',
      borderBottom: '1px solid var(--border-subtle)',
      background: i === highlightColumn ? 'var(--surface-brand-soft)' : 'transparent',
      textAlign: c.align || 'left',
      whiteSpace: 'nowrap'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    style: {
      borderBottom: ri === rows.length - 1 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, columns.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      ...cell,
      textAlign: c.align || 'left',
      color: ci === 0 ? 'var(--text-strong)' : 'var(--text-body)',
      fontWeight: ci === 0 ? 'var(--weight-medium)' : 'var(--weight-regular)',
      fontFamily: c.mono ? 'var(--font-mono)' : 'inherit',
      background: ci === highlightColumn ? 'var(--surface-brand-soft)' : 'transparent'
    }
  }, r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetricCard({
  label,
  value,
  unit,
  delta,
  deltaTone = 'up',
  caption,
  icon,
  onDark = false,
  style,
  ...rest
}) {
  const deltaColor = deltaTone === 'up' ? 'var(--teal-700)' : deltaTone === 'down' ? 'var(--rose-600)' : 'var(--text-muted)';
  const deltaBg = deltaTone === 'up' ? 'var(--surface-accent-soft)' : deltaTone === 'down' ? 'var(--surface-risk-soft)' : 'var(--surface-sunken)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      padding: 'var(--card-pad)',
      background: onDark ? 'rgba(255,255,255,.04)' : 'var(--surface-card)',
      border: '1px solid ' + (onDark ? 'var(--border-on-dark)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-card)',
      boxShadow: onDark ? 'none' : 'var(--shadow-sm)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--iris-500)',
      display: 'flex'
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--type-metric-family)',
      fontSize: 'var(--type-metric-size)',
      fontWeight: 'var(--type-metric-weight)',
      letterSpacing: 'var(--tracking-tight)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, unit), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      padding: '3px 9px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      fontFamily: 'var(--font-mono)',
      color: deltaColor,
      background: deltaBg
    }
  }, delta)), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = 0,
  allowMultiple = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen === null ? [] : [defaultOpen]);
  const toggle = i => setOpen(prev => prev.includes(i) ? prev.filter(x => x !== i) : allowMultiple ? [...prev, i] : [i]);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const on = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--surface-card)',
        border: '1px solid ' + (on ? 'var(--border-brand)' : 'var(--border-subtle)'),
        borderRadius: 'var(--radius-card)',
        boxShadow: on ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        transition: 'var(--motion-hover)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        padding: '18px var(--card-pad)',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        fontSize: 'var(--text-md)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--text-strong)',
        lineHeight: 1.45
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '0 0 auto',
        width: 26,
        height: 26,
        borderRadius: 'var(--radius-pill)',
        display: 'grid',
        placeItems: 'center',
        background: on ? 'var(--surface-brand)' : 'var(--surface-sunken)',
        color: on ? '#fff' : 'var(--text-muted)',
        transform: on ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-standard), background var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.4",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    })))), on && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--card-pad) 20px',
        fontSize: 'var(--text-base)',
        lineHeight: 'var(--leading-relaxed)',
        color: 'var(--text-body)'
      }
    }, it.a));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  onDark = false,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked === undefined ? inner : checked;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: e => {
      setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 18,
      height: 18,
      marginTop: 2,
      borderRadius: 'var(--radius-xs)',
      display: 'grid',
      placeItems: 'center',
      background: on ? 'var(--surface-accent)' : onDark ? 'rgba(255,255,255,.06)' : 'var(--surface-card)',
      border: '1px solid ' + (on ? 'var(--teal-600)' : onDark ? 'var(--border-on-dark)' : 'var(--border-strong)'),
      boxShadow: on ? 'var(--shadow-xs)' : 'none',
      transition: 'var(--motion-hover)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.5,
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  required = false,
  hint,
  error,
  htmlFor,
  onDark = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: htmlFor,
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rose-500)',
      marginLeft: 4
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--rose-600)' : onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  size = 'md',
  invalid = false,
  onDark = false,
  icon = null,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const base = {
    width: '100%',
    height: size === 'lg' ? 'var(--control-h-lg)' : size === 'sm' ? 'var(--control-h-sm)' : 'var(--control-h-md)',
    padding: icon ? '0 14px 0 40px' : '0 14px',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
    background: onDark ? 'rgba(255,255,255,.06)' : 'var(--surface-card)',
    border: '1px solid ' + (invalid ? 'var(--rose-500)' : focus ? 'var(--iris-500)' : onDark ? 'var(--border-on-dark)' : 'var(--border-strong)'),
    borderRadius: 'var(--radius-control)',
    outline: 'none',
    boxShadow: focus ? invalid ? '0 0 0 3px rgba(225,29,72,.22)' : 'var(--ring-focus)' : 'var(--shadow-xs)',
    transition: 'var(--motion-hover)',
    ...style
  };
  const field = /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: base
  }, rest));
  if (!icon) return field;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 13,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-faint)',
      display: 'flex'
    }
  }, icon), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  size = 'md',
  invalid = false,
  onDark = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: size === 'lg' ? 'var(--control-h-lg)' : size === 'sm' ? 'var(--control-h-sm)' : 'var(--control-h-md)',
      padding: '0 38px 0 14px',
      appearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      background: (onDark ? 'rgba(255,255,255,.06)' : 'var(--surface-card)') + " url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round'><path d='m6 9 6 6 6-6'/></svg>\") no-repeat right 13px center",
      border: '1px solid ' + (invalid ? 'var(--rose-500)' : focus ? 'var(--iris-500)' : onDark ? 'var(--border-on-dark)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-control)',
      outline: 'none',
      boxShadow: focus ? 'var(--ring-focus)' : 'var(--shadow-xs)',
      transition: 'var(--motion-hover)',
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/marketing/NodeCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NodeCard({
  index,
  name,
  role,
  items = [],
  modules = [],
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lift = active || hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'grid',
      gap: 'var(--space-3)',
      padding: 'var(--card-pad)',
      background: active ? 'var(--gradient-dark)' : 'var(--surface-card)',
      border: '1px solid ' + (active ? 'transparent' : lift ? 'var(--border-brand)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-card)',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: lift ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: lift ? 'var(--lift-hover)' : 'none',
      transition: 'var(--motion-hover)',
      fontFamily: 'var(--font-body)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-sm)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      background: active ? 'var(--gradient-brand)' : 'var(--surface-brand-soft)',
      color: active ? '#fff' : 'var(--iris-700)'
    }
  }, 'N' + index), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: active ? 'var(--teal-300)' : 'var(--text-muted)'
    }
  }, role)), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.3,
      color: active ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'grid',
      gap: 6,
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      fontSize: 'var(--text-sm)',
      lineHeight: 1.5,
      color: active ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: active ? 'var(--teal-300)' : 'var(--teal-600)',
      flex: '0 0 auto'
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("span", null, it)))), modules.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      paddingTop: 'var(--space-2)'
    }
  }, modules.map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      padding: '2px 8px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-medium)',
      whiteSpace: 'nowrap',
      background: active ? 'rgba(255,255,255,.08)' : 'var(--surface-sunken)',
      color: active ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      border: '1px solid ' + (active ? 'var(--border-on-dark)' : 'var(--border-subtle)')
    }
  }, m))));
}
Object.assign(__ds_scope, { NodeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/NodeCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PricingCard({
  name,
  tier,
  price,
  unit = '/ tháng',
  setupNote,
  quarterNote,
  features = [],
  featured = false,
  cta = 'Nhận tư vấn gói này',
  onCta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      display: 'grid',
      gap: 'var(--space-5)',
      padding: featured ? 'var(--card-pad-lg)' : 'var(--card-pad)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid ' + (featured ? 'var(--iris-300)' : 'var(--border-subtle)'),
      boxShadow: featured ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
      transform: featured ? 'translateY(-6px)' : 'none',
      fontFamily: 'var(--font-body)',
      overflow: 'hidden',
      ...style
    }
  }, rest), featured && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '0 0 auto 0',
      height: 3,
      background: 'var(--gradient-brand)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, tier), featured && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-brand-soft)',
      border: '1px solid var(--border-brand)',
      color: 'var(--iris-700)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "G\xF3i ch\u1EE7 l\u1EF1c")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)'
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, unit)), setupNote && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--amber-700)',
      fontWeight: 'var(--weight-medium)'
    }
  }, setupNote), quarterNote && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)'
    }
  }, quarterNote)), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 'var(--space-5)'
    }
  }, features.map((ft, i) => {
    const off = typeof ft === 'object' && ft.included === false;
    const text = typeof ft === 'string' ? ft : ft.label;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        fontSize: 'var(--text-sm)',
        lineHeight: 1.5,
        color: off ? 'var(--text-faint)' : 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '0 0 auto',
        marginTop: 3,
        color: off ? 'var(--slate-300)' : 'var(--teal-600)'
      }
    }, off ? /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.4",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    })) : /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    }))), /*#__PURE__*/React.createElement("span", null, text));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onCta,
    style: {
      height: 'var(--control-h-md)',
      borderRadius: 'var(--radius-control)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-semibold)',
      background: featured ? 'var(--surface-accent)' : 'var(--surface-card)',
      color: featured ? '#fff' : 'var(--text-strong)',
      border: '1px solid ' + (featured ? 'transparent' : 'var(--border-strong)'),
      boxShadow: featured ? 'var(--shadow-accent)' : 'var(--shadow-xs)',
      transition: 'var(--motion-hover)'
    }
  }, cta));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  onDark = false,
  source,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: align === 'center' ? 'center' : 'start',
      textAlign: align,
      maxWidth: align === 'center' ? 780 : 720,
      margin: align === 'center' ? '0 auto' : 0,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-badge)',
      fontSize: 'var(--type-eyebrow-size)',
      fontWeight: 'var(--type-eyebrow-weight)',
      letterSpacing: 'var(--type-eyebrow-tracking)',
      textTransform: 'uppercase',
      background: onDark ? 'rgba(255,255,255,.08)' : 'var(--surface-brand-soft)',
      color: onDark ? 'var(--teal-300)' : 'var(--iris-700)',
      border: '1px solid ' + (onDark ? 'var(--border-on-dark)' : 'var(--border-brand)')
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-h2-size)',
      fontWeight: 'var(--type-h2-weight)',
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-tight)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-lead-size)',
      lineHeight: 'var(--leading-relaxed)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, lead), source && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontStyle: 'italic',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-faint)'
    }
  }, source));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StepTimeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StepTimeline({
  steps = [],
  orientation = 'horizontal',
  activeIndex = null,
  style,
  ...rest
}) {
  const horiz = orientation === 'horizontal';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: horiz ? 'var(--space-5)' : 0,
      gridTemplateColumns: horiz ? 'repeat(' + Math.max(steps.length, 1) + ', minmax(0,1fr))' : '1fr',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), steps.map((s, i) => {
    const on = activeIndex === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: horiz ? 'grid' : 'grid',
        gridTemplateColumns: horiz ? '1fr' : '32px 1fr',
        gap: horiz ? 'var(--space-4)' : 'var(--space-4)',
        paddingBottom: horiz ? 0 : 'var(--space-6)',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        flexDirection: horiz ? 'row' : 'column'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '0 0 auto',
        width: 32,
        height: 32,
        borderRadius: 'var(--radius-pill)',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        background: on ? 'var(--surface-brand)' : 'var(--surface-brand-soft)',
        color: on ? '#fff' : 'var(--iris-700)',
        border: '1px solid ' + (on ? 'transparent' : 'var(--border-brand)'),
        boxShadow: on ? 'var(--shadow-brand)' : 'none'
      }
    }, i + 1), horiz && i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 2,
        background: 'linear-gradient(to right,var(--iris-200),var(--teal-200))',
        borderRadius: 2
      }
    }), !horiz && i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        width: 2,
        minHeight: 24,
        background: 'linear-gradient(to bottom,var(--iris-200),var(--teal-200))',
        borderRadius: 2
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--space-2)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-accent)'
      }
    }, s.period), /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-md)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--text-strong)',
        lineHeight: 1.35
      }
    }, s.title), s.body && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-sm)',
        lineHeight: 'var(--leading-relaxed)',
        color: 'var(--text-body)'
      }
    }, s.body), s.clientTask && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--amber-700)',
        background: 'var(--surface-notice-soft)',
        border: '1px solid var(--amber-300)',
        borderRadius: 'var(--radius-sm)',
        padding: '6px 10px'
      }
    }, s.clientTask)));
  }));
}
Object.assign(__ds_scope, { StepTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StepTimeline.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'pill',
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = value === undefined ? inner : value;
  const pick = id => {
    setInner(id);
    onChange && onChange(id);
  };
  const isPill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: isPill ? 'var(--space-2)' : 0,
      padding: isPill ? 5 : 0,
      background: isPill ? 'var(--surface-sunken)' : 'transparent',
      borderRadius: isPill ? 'var(--radius-pill)' : 0,
      borderBottom: isPill ? 'none' : '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(it.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: isPill ? '9px 18px' : '11px 4px',
        margin: isPill ? 0 : '0 20px -1px 0',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        fontFamily: 'inherit',
        cursor: 'pointer',
        color: on ? isPill ? 'var(--text-strong)' : 'var(--text-brand)' : 'var(--text-muted)',
        background: on && isPill ? 'var(--surface-card)' : 'transparent',
        border: 'none',
        borderBottom: isPill ? 'none' : '2px solid ' + (on ? 'var(--iris-600)' : 'transparent'),
        borderRadius: isPill ? 'var(--radius-pill)' : 0,
        boxShadow: on && isPill ? 'var(--shadow-sm)' : 'none',
        transition: 'var(--motion-hover)'
      }
    }, it.icon, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/KnowledgeLake.jsx
try { (() => {
const {
  Card: KCard,
  DataTable: KTable,
  Badge: KBadge,
  Button: KBtn,
  MetricCard: KMetric,
  Input: KInput
} = window.TrangAnhAIDesignSystem_40b425;
function KnowledgeLake() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(KMetric, {
    label: "T\xE0i li\u1EC7u \u0111\xE3 s\u1ED1 h\xF3a",
    value: "1.284",
    delta: "+96",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "files",
      size: 16
    }),
    caption: "Excel, PDF, catalogue, TDS"
  }), /*#__PURE__*/React.createElement(KMetric, {
    label: "M\xE3 h\xE0ng kh\xF3a gi\xE1 SQL",
    value: "3.412",
    delta: "+140",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 16
    }),
    caption: "Deterministic Pricing Engine"
  }), /*#__PURE__*/React.createElement(KMetric, {
    label: "T\u1EF7 l\u1EC7 tr\u1EA3 l\u1EDDi c\xF3 tr\xEDch d\u1EABn",
    value: "99,4",
    unit: "%",
    delta: "+0,6%",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "quote",
      size: 16
    }),
    caption: "Zero hallucination"
  }), /*#__PURE__*/React.createElement(KMetric, {
    label: "T\xE0i li\u1EC7u ch\u1EDD \u0111\u1ED1i so\xE1t",
    value: "7",
    delta: "\u22123",
    deltaTone: "up",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "clock-alert",
      size: 16
    }),
    caption: "Knowledge Maintainer duy\u1EC7t"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 'var(--space-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(KCard, {
    elevation: "sm",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 600
    }
  }, "Ngu\u1ED3n tri th\u1EE9c trong Master RAG Lake"), /*#__PURE__*/React.createElement(KBtn, {
    size: "sm",
    variant: "secondary",
    style: {
      marginLeft: 'auto'
    },
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 15
    })
  }, "N\u1EA1p t\xE0i li\u1EC7u")), /*#__PURE__*/React.createElement(KTable, {
    dense: true,
    style: {
      marginTop: 'var(--space-4)'
    },
    columns: [{
      key: 'doc',
      label: 'Tài liệu'
    }, {
      key: 'type',
      label: 'Lớp xử lý'
    }, {
      key: 'chunks',
      label: 'Chunk',
      mono: true,
      align: 'right'
    }, {
      key: 'state',
      label: 'Trạng thái'
    }],
    rows: [{
      doc: 'Bảng giá 2026 — Hóa chất & vật liệu lọc.xlsx',
      type: 'Unmerge & Flattening',
      chunks: '1.284',
      state: /*#__PURE__*/React.createElement(KBadge, {
        tone: "accent",
        size: "sm"
      }, "\u0110\xE3 kh\xF3a gi\xE1 SQL")
    }, {
      doc: 'TDS than hoạt tính gáo dừa Iodine 900.pdf',
      type: 'Multimodal OCR',
      chunks: '86',
      state: /*#__PURE__*/React.createElement(KBadge, {
        tone: "accent",
        size: "sm"
      }, "\u0110\xE3 vector h\xF3a")
    }, {
      doc: 'QCVN 01-1:2018/BYT — nước sạch sinh hoạt',
      type: 'Parent-Child Chunking',
      chunks: '412',
      state: /*#__PURE__*/React.createElement(KBadge, {
        tone: "accent",
        size: "sm"
      }, "\u0110\xE3 g\xE1n nh\xE3n")
    }, {
      doc: 'Chứng thư Quatest 3 — lô THT-GD-0612',
      type: 'Multimodal OCR',
      chunks: '12',
      state: /*#__PURE__*/React.createElement(KBadge, {
        tone: "notice",
        size: "sm"
      }, "Ch\u1EDD \u0111\u1ED1i so\xE1t")
    }, {
      doc: 'Catalogue van bướm DIN PN16 (bản scan mờ)',
      type: 'Multimodal OCR',
      chunks: '—',
      state: /*#__PURE__*/React.createElement(KBadge, {
        tone: "risk",
        size: "sm"
      }, "C\u1EA7n b\u1EA3n g\u1ED1c r\xF5 h\u01A1n")
    }]
  })), /*#__PURE__*/React.createElement(KCard, {
    surface: "dark",
    elevation: "none",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 600,
      color: 'var(--text-on-dark)'
    }
  }, "5 l\u1EDBp ki\u1EBFn tr\xFAc Zero Hallucination"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)'
    }
  }, ['Excel Unmerge & Flattening Engine', 'Multimodal OCR & Document Digitizer', 'Deterministic Pricing Engine (SQL)', 'Dual Vectorization (BGE-M3 + BM25)', 'Parent-Child Chunking & Cross-Encoder Reranking'].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      background: 'rgba(255,255,255,.08)',
      border: '1px solid var(--border-on-dark)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--teal-300)'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: 1.5
    }
  }, l)))))));
}
Object.assign(window, {
  KnowledgeLake
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/KnowledgeLake.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Overview.jsx
try { (() => {
const {
  MetricCard: OMetric,
  Card: OCard,
  DataTable: OTable,
  Badge: OBadge,
  Button: OBtn
} = window.TrangAnhAIDesignSystem_40b425;
const FUNNEL = [['Khách từ AI Search & Google', 4820, 'var(--viz-1)'], ['Phiên tư vấn Chatbot 24/7', 1140, 'var(--viz-2)'], ['Lead đồng bộ vào CRM', 386, 'var(--viz-3)'], ['Báo giá đã gửi', 74, 'var(--viz-4)'], ['Đơn chốt', 16, 'var(--viz-5)']];
function Funnel() {
  const max = FUNNEL[0][1];
  return /*#__PURE__*/React.createElement(OCard, {
    elevation: "sm",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 600
    }
  }, "Ph\u1EC5u v\u1EADn h\xE0nh kh\xE9p k\xEDn \u2014 30 ng\xE0y"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, "N2 \u2192 N3 \u2192 N4 \u2192 N5")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, FUNNEL.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'grid',
      gridTemplateColumns: '210px 1fr 92px',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 26,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: r[1] / max * 100 + '%',
      height: '100%',
      background: r[2],
      borderRadius: 'var(--radius-sm)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      textAlign: 'right'
    }
  }, r[1].toLocaleString('vi-VN'), i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-2xs)',
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, (r[1] / FUNNEL[i - 1][1] * 100).toFixed(1).replace('.', ','), "%"))))));
}
function Bottleneck() {
  return /*#__PURE__*/React.createElement(OCard, {
    surface: "sunken",
    elevation: "none",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber-600)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-triangle",
    size: 17
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 600
    }
  }, "\u0110i\u1EC3m ngh\u1EBDn ph\xE1t hi\u1EC7n tu\u1EA7n n\xE0y")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)'
    }
  }, [['Lead → Báo giá chỉ đạt 19,2%', 'Nguyên nhân: 27 lead ngành van công nghiệp chưa có bảng giá PN16 trong Node 1.', 'Cập nhật bảng giá'], ['12 câu hỏi Chatbot không có nguồn trích dẫn', 'Chủ đề: màng RO 8040, tiêu chuẩn QCVN 01-1:2018/BYT.', 'Nạp tài liệu']].map(b => /*#__PURE__*/React.createElement("div", {
    key: b[0],
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-4)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, b[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, b[1])), /*#__PURE__*/React.createElement(OBtn, {
    size: "sm",
    variant: "secondary"
  }, b[2])))));
}
function Overview() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(OMetric, {
    label: "Doanh s\u1ED1 ghi nh\u1EADn",
    value: "1,42",
    unit: "t\u1EF7 \u0111",
    delta: "+24,6%",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "trending-up",
      size: 16
    }),
    caption: "30 ng\xE0y \xB7 ngu\u1ED3n CRM"
  }), /*#__PURE__*/React.createElement(OMetric, {
    label: "Lead t\u1EEB AI Search",
    value: "386",
    delta: "+18,4%",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }),
    caption: "ChatGPT, Gemini, Google"
  }), /*#__PURE__*/React.createElement(OMetric, {
    label: "Th\u1EDDi gian ra b\xE1o gi\xE1",
    value: "8,2",
    unit: "gi\xE2y",
    delta: "\u221296%",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "zap",
      size: 16
    }),
    caption: "Tr\u01B0\u1EDBc khi tri\u1EC3n khai: 15\u201330 ph\xFAt"
  }), /*#__PURE__*/React.createElement(OMetric, {
    label: "Gi\u1EDD c\xF4ng gi\u1EA3i ph\xF3ng",
    value: "63",
    unit: "gi\u1EDD/th\xE1ng",
    delta: "+12",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 16
    }),
    caption: "Cam k\u1EBFt QBR: \u2265 30 gi\u1EDD"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr 1fr',
      gap: 'var(--space-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Funnel, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(OCard, {
    elevation: "sm",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 600
    }
  }, "Hi\u1EC7n di\u1EC7n tr\xEAn Chat AI"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)'
    }
  }, [['ChatGPT', 34, 'var(--iris-600)'], ['Gemini', 21, 'var(--teal-600)'], ['Perplexity', 12, 'var(--iris-400)'], ['Google AI Overview', 9, 'var(--amber-500)']].map(s => /*#__PURE__*/React.createElement("div", {
    key: s[0],
    style: {
      display: 'grid',
      gridTemplateColumns: '128px 1fr 42px',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)'
    }
  }, s[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 8,
      background: 'var(--surface-sunken)',
      borderRadius: 99
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: s[1] / 34 * 100 + '%',
      height: '100%',
      background: s[2],
      borderRadius: 99
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-strong)',
      textAlign: 'right'
    }
  }, s[1])))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "S\u1ED1 l\u1EA7n th\u01B0\u01A1ng hi\u1EC7u \u0111\u01B0\u1EE3c tr\xEDch d\u1EABn trong 30 ng\xE0y.")), /*#__PURE__*/React.createElement(Bottleneck, null))), /*#__PURE__*/React.createElement(OTable, {
    dense: true,
    columns: [{
      key: 'code',
      label: 'Mã báo giá',
      mono: true
    }, {
      key: 'client',
      label: 'Khách hàng'
    }, {
      key: 'node',
      label: 'Nguồn Lead'
    }, {
      key: 'value',
      label: 'Giá trị',
      mono: true,
      align: 'right'
    }, {
      key: 'time',
      label: 'Thời gian soạn',
      mono: true,
      align: 'right'
    }, {
      key: 'state',
      label: 'Trạng thái'
    }],
    rows: [{
      code: 'BG-2026-0741',
      client: 'CT TNHH Môi trường Đại Việt',
      node: 'ChatGPT → LiveChat',
      value: '184.500.000 đ',
      time: '8,1 s',
      state: /*#__PURE__*/React.createElement(OBadge, {
        tone: "accent",
        size: "sm"
      }, "\u0110\xE3 ch\u1ED1t")
    }, {
      code: 'BG-2026-0740',
      client: 'Nhà máy Giấy Bắc Hà',
      node: 'Zalo OA',
      value: '62.300.000 đ',
      time: '7,6 s',
      state: /*#__PURE__*/React.createElement(OBadge, {
        tone: "brand",
        size: "sm"
      }, "Ch\u1EDD kh\xE1ch ph\u1EA3n h\u1ED3i")
    }, {
      code: 'BG-2026-0739',
      client: 'CT CP Cơ điện Trường Sơn',
      node: 'Google → Form',
      value: '341.200.000 đ',
      time: '9,4 s',
      state: /*#__PURE__*/React.createElement(OBadge, {
        tone: "notice",
        size: "sm"
      }, "\u0110ang duy\u1EC7t n\u1ED9i b\u1ED9")
    }, {
      code: 'BG-2026-0738',
      client: 'CT TNHH Vật tư Nam Phong',
      node: 'Gemini → LiveChat',
      value: '27.800.000 đ',
      time: '6,9 s',
      state: /*#__PURE__*/React.createElement(OBadge, {
        tone: "neutral",
        size: "sm"
      }, "\u0110\xE3 g\u1EEDi")
    }]
  }));
}
Object.assign(window, {
  Overview
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/QuoteConsole.jsx
try { (() => {
const {
  Card: QCard,
  Button: QBtn,
  Badge: QBadge,
  DataTable: QTable,
  Input: QInput
} = window.TrangAnhAIDesignSystem_40b425;
const LINES = [{
  sku: 'THT-GD-0612',
  name: 'Than hoạt tính gáo dừa 6×12, Iodine 900',
  qty: '20 bao (25kg)',
  unit: '28.000 đ/kg',
  total: '14.000.000 đ'
}, {
  sku: 'CAT-SAND-05',
  name: 'Cát thạch anh lọc nước 0,5 – 1,0 mm',
  qty: '40 bao (50kg)',
  unit: '3.200 đ/kg',
  total: '6.400.000 đ'
}, {
  sku: 'RO-8040-LC',
  name: 'Màng RO 8040 low-energy (kèm CO/CQ)',
  qty: '4 chiếc',
  unit: '9.850.000 đ/chiếc',
  total: '39.400.000 đ'
}];
function QuoteConsole() {
  const [step, setStep] = React.useState(1);
  const steps = ['Dán tin nhắn khách', 'Bóc tách & khớp mã hàng', 'Truy vấn giá xác định (SQL)', 'Render PDF + VietQR'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 'var(--space-5)',
      padding: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(QCard, {
    elevation: "sm",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 600
    }
  }, "Tin nh\u1EAFn kh\xE1ch h\xE0ng (Zalo)"), /*#__PURE__*/React.createElement(QBadge, {
    tone: "neutral",
    size: "sm"
  }, "Human-in-the-loop")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      padding: 'var(--space-4)',
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.7,
      color: 'var(--text-strong)'
    }
  }, "\"a oi bao gia giup e: than hoat tinh gao dua 6-12 iodine 900 lay 20 bao, cat thach anh 0.5-1 40 bao, mang RO 8040 4 cai co CO CQ nhe. gap a\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-5)'
    }
  }, steps.map((s, i) => {
    const done = i < step;
    return /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        fontSize: 'var(--text-sm)',
        color: done ? 'var(--text-strong)' : 'var(--text-faint)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: 99,
        display: 'grid',
        placeItems: 'center',
        background: done ? 'var(--surface-accent)' : 'var(--surface-sunken)',
        color: done ? '#fff' : 'var(--text-faint)',
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        fontWeight: 700
      }
    }, i + 1), s, done && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        color: 'var(--teal-700)'
      }
    }, "2,0 s"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(QBtn, {
    variant: "brand",
    onClick: () => setStep(s => Math.min(4, s + 1)),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "wand-2",
      size: 16
    })
  }, "Ch\u1EA1y b\u01B0\u1EDBc ti\u1EBFp theo"), /*#__PURE__*/React.createElement(QBtn, {
    variant: "secondary",
    onClick: () => setStep(1)
  }, "\u0110\u1EB7t l\u1EA1i"))), /*#__PURE__*/React.createElement(QCard, {
    surface: "brandSoft",
    elevation: "none",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--iris-700)'
    }
  }, "Kh\u1EED ti\u1EBFng l\xF3ng & vi\u1EBFt t\u1EAFt"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      lineHeight: 2,
      color: 'var(--text-strong)'
    }
  }, "\"than hoat tinh gao dua 6-12\" \u2192 THT-GD-0612 \xB7 Bao 25kg \xB7 28.000 \u0111/kg", /*#__PURE__*/React.createElement("br", null), "\"mang RO 8040 co CO CQ\" \u2192 RO-8040-LC \xB7 k\xE8m ch\u1EE9ng th\u01B0 CO/CQ"))), /*#__PURE__*/React.createElement(QCard, {
    elevation: "lg",
    pad: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--card-pad)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSET,
    alt: "",
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-logo)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "B\u1EA2NG B\xC1O GI\xC1 V\u1EACT T\u01AF"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)'
    }
  }, "BG-2026-0742 \xB7 PDF Vector (Typst) \xB7 hi\u1EC7u l\u1EF1c 15 ng\xE0y")), /*#__PURE__*/React.createElement(QBadge, {
    tone: "accent",
    size: "sm",
    style: {
      marginLeft: 'auto'
    }
  }, "S\u1EB5n s\xE0ng g\u1EEDi")), /*#__PURE__*/React.createElement(QTable, {
    dense: true,
    style: {
      border: 'none',
      borderRadius: 0,
      boxShadow: 'none'
    },
    columns: [{
      key: 'sku',
      label: 'Mã hàng',
      mono: true
    }, {
      key: 'name',
      label: 'Quy cách'
    }, {
      key: 'qty',
      label: 'SL',
      align: 'right'
    }, {
      key: 'unit',
      label: 'Đơn giá',
      mono: true,
      align: 'right'
    }, {
      key: 'total',
      label: 'Thành tiền',
      mono: true,
      align: 'right'
    }],
    rows: LINES
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 'var(--space-6)',
      padding: 'var(--card-pad)',
      borderTop: '1px solid var(--border-subtle)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6,
      fontSize: 'var(--text-sm)'
    }
  }, [['Tổng trước VAT', '59.800.000 đ'], ['VAT 8%', '4.784.000 đ'], ['Tổng thanh toán', '64.584.000 đ']].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 20,
      fontWeight: i === 2 ? 700 : 400,
      color: i === 2 ? 'var(--text-strong)' : 'var(--text-body)',
      paddingTop: i === 2 ? 8 : 0,
      borderTop: i === 2 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", null, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, r[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6,
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "qr-code",
    size: 40
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)'
    }
  }, "VietQR \u0111\u1ED9ng"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--card-pad)',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(QBtn, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 16
    })
  }, "Duy\u1EC7t & g\u1EEDi Zalo (10 gi\xE2y)"), /*#__PURE__*/React.createElement(QBtn, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 16
    })
  }, "T\u1EA3i PDF"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      alignSelf: 'center',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "G\xE1n nh\xE3n m\xE1y \u0111\u1ECDc theo Lu\u1EADt AI 134/2025/QH15"))));
}
Object.assign(window, {
  QuoteConsole
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/QuoteConsole.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Shell.jsx
try { (() => {
const {
  Logo,
  Button,
  Badge,
  Card,
  MetricCard,
  DataTable,
  Tabs,
  Input,
  Select
} = window.TrangAnhAIDesignSystem_40b425;
const ASSET = '../../assets/logo-icon.jpg';
function Icon({
  name,
  size = 16,
  color = 'currentColor',
  strokeWidth = 2
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '';
    const el = document.createElement('i');
    el.setAttribute('data-lucide', name);
    ref.current.appendChild(el);
    window.lucide.createIcons({
      nameAttr: 'data-lucide',
      attrs: {
        width: size,
        height: size,
        stroke: color,
        'stroke-width': strokeWidth
      },
      root: ref.current
    });
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto'
    }
  });
}
const NAV = [{
  id: 'overview',
  label: 'Báo cáo 1 trang',
  icon: 'layout-dashboard',
  node: 'N5 · M0'
}, {
  id: 'quote',
  label: 'Zalo Copilot báo giá',
  icon: 'file-text',
  node: 'N4 · M4'
}, {
  id: 'lake',
  label: 'Master RAG Lake',
  icon: 'database',
  node: 'N1'
}];
const NAV_MUTED = [{
  id: 'content',
  label: 'Flow Content & GEO',
  icon: 'newspaper',
  node: 'N2 · M1'
}, {
  id: 'crm',
  label: 'Tiếp đón 24/7 & CRM',
  icon: 'messages-square',
  node: 'N3 · M3'
}, {
  id: 'boq',
  label: 'BOQ Estimator',
  icon: 'calculator',
  node: 'N4 · M6'
}, {
  id: 'tender',
  label: 'Tender Copilot',
  icon: 'gavel',
  node: 'N4 · M7'
}];
function Sidebar({
  view,
  onView
}) {
  const item = (n, muted) => {
    const on = n.id === view;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => !muted && onView(n.id),
      title: muted ? 'Chỉ có trong gói Toàn diện' : undefined,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        width: '100%',
        padding: '9px 12px',
        background: on ? 'rgba(255,255,255,.10)' : 'transparent',
        border: 'none',
        cursor: muted ? 'not-allowed' : 'pointer',
        borderRadius: 'var(--radius-md)',
        color: on ? 'var(--text-on-dark)' : 'var(--text-on-dark-muted)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 600 : 500,
        textAlign: 'left',
        opacity: muted ? 0.45 : 1,
        transition: 'var(--motion-hover)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: on ? 'var(--teal-300)' : 'inherit',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 16
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, n.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        opacity: .7
      }
    }, n.node));
  };
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-w)',
      flex: '0 0 auto',
      background: 'var(--gradient-dark)',
      padding: 'var(--space-5) var(--space-4)',
      display: 'grid',
      gridTemplateRows: 'auto auto 1fr auto',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 30,
    onDark: true,
    src: ASSET
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)',
      padding: '0 12px 6px'
    }
  }, "D\xE2y chuy\u1EC1n 5 Node"), NAV.map(n => item(n, false))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 4,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)',
      padding: '0 12px 6px'
    }
  }, "Module kh\xE1c"), NAV_MUTED.map(n => item(n, true))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      borderRadius: 'var(--radius-card)',
      background: 'rgba(255,255,255,.05)',
      border: '1px solid var(--border-on-dark)',
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      color: 'var(--text-on-dark)'
    }
  }, "Workspace ch\xEDnh ch\u1EE7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-on-dark-muted)',
      lineHeight: 1.6
    }
  }, "Enterprise ri\xEAng \xB7 Lu\u1EADt 91/2025/QH15 \xB7 nh\u1EADt k\xFD log \u0111\u1EA7y \u0111\u1EE7")));
}
function Topbar({
  title,
  subtitle,
  right
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: '0 var(--space-8)',
      height: 'var(--topbar-h)',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-md)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, right, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-accent-soft)',
      color: 'var(--teal-700)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      background: 'var(--teal-600)'
    }
  }), "\u0110\u1ED3ng b\u1ED9 2 ph\xFAt tr\u01B0\u1EDBc"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 999,
      background: 'var(--surface-brand)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      fontFamily: 'var(--font-mono)'
    }
  }, "TA")));
}
Object.assign(window, {
  Icon,
  Sidebar,
  Topbar,
  ASSET
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/app.jsx
try { (() => {
const TITLES = {
  overview: ['Báo Cáo Quản Trị 1 Trang', 'Node 5 · M0 Executive BI & Strategic Copilot'],
  quote: ['Zalo Copilot — Báo giá 8 giây', 'Node 4 · M4 Fast Quote Assistant'],
  lake: ['Master RAG Lake', 'Node 1 · Zero Hallucination Pipeline']
};
function DashboardApp() {
  const [view, setView] = React.useState('overview');
  const [t, sub] = TITLES[view];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: view,
    onView: setView
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'grid',
      gridTemplateRows: 'auto 1fr'
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: t,
    subtitle: sub
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto'
    }
  }, view === 'overview' && /*#__PURE__*/React.createElement(Overview, null), view === 'quote' && /*#__PURE__*/React.createElement(QuoteConsole, null), view === 'lake' && /*#__PURE__*/React.createElement(KnowledgeLake, null))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(DashboardApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
const {
  Button: HButton,
  Badge: HBadge,
  MetricCard: HMetric
} = window.TrangAnhAIDesignSystem_40b425;
function HeroMock() {
  const rows = [['file-spreadsheet', 'Bảng giá 2026 — Hóa chất.xlsx', 'Đã gỡ gộp ô · 1.284 SKU', 'var(--teal-600)'], ['file-text', 'TDS than hoạt tính gáo dừa.pdf', 'OCR multimodal · Iodine 900', 'var(--teal-600)'], ['book-marked', 'QCVN 01-1:2018/BYT', 'Đã gán nhãn tiêu chuẩn', 'var(--iris-600)']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-panel)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '12px 18px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 5
    }
  }, ['#E2E8F0', '#CBD5E1', '#94A3B8'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 9,
      height: 9,
      borderRadius: 99,
      background: c
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, "Executive Operations Command Center \xB7 M0"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--text-2xs)',
      color: 'var(--teal-700)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      background: 'var(--teal-600)'
    }
  }), "Realtime")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "T\u1EA7ng 1 \xB7 Kh\u1ED1i d\u1EEF li\u1EC7u \u2014 Master RAG Lake"), rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r[1],
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '10px 12px',
      background: 'var(--surface-page)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: r[3],
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r[0],
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, r[2])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "T\u1EA7ng 2 \xB7 Kh\u1ED1i t\xE1c nghi\u1EC7p"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 8,
      alignItems: 'center'
    }
  }, [['search', 'AI Search'], ['messages-square', 'LiveChat 24/7'], ['calculator', 'Dự toán BOQ'], ['file-check-2', 'Duyệt 10s']].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s[1],
    style: {
      position: 'relative',
      display: 'grid',
      gap: 6,
      justifyItems: 'center',
      padding: '12px 8px',
      borderRadius: 'var(--radius-md)',
      background: i === 3 ? 'var(--surface-accent-soft)' : 'var(--surface-brand-soft)',
      border: '1px solid ' + (i === 3 ? 'var(--border-accent)' : 'var(--border-brand)')
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: i === 3 ? 'var(--teal-700)' : 'var(--iris-600)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s[0],
    size: 17
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      color: i === 3 ? 'var(--teal-700)' : 'var(--iris-700)',
      textAlign: 'center'
    }
  }, s[1]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "T\u1EA7ng 3 \xB7 Kh\u1ED1i qu\u1EA3n tr\u1ECB \u2014 B\xE1o c\xE1o 1 trang"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(HMetric, {
    label: "Lead m\u1EDBi",
    value: "128",
    delta: "+18,4%",
    style: {
      padding: 'var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement(HMetric, {
    label: "B\xE1o gi\xE1 \u0111\xE3 g\u1EEDi",
    value: "74",
    delta: "+31%",
    style: {
      padding: 'var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement(HMetric, {
    label: "Gi\u1EDD c\xF4ng ti\u1EBFt ki\u1EC7m",
    value: "63",
    unit: "gi\u1EDD",
    delta: "+12",
    style: {
      padding: 'var(--space-4)'
    }
  })))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--gradient-dark)',
      paddingTop: 'var(--space-20)',
      paddingBottom: 'var(--space-24)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -180,
      right: -120,
      width: 620,
      height: 620,
      borderRadius: '50%',
      background: 'radial-gradient(circle,rgba(79,70,229,.34) 0%,rgba(79,70,229,0) 65%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: -220,
      left: -140,
      width: 560,
      height: 560,
      borderRadius: '50%',
      background: 'radial-gradient(circle,rgba(13,148,136,.24) 0%,rgba(13,148,136,0) 68%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1.02fr',
      gap: 'var(--gutter-lg)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(HBadge, {
    tone: "onDark",
    caps: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 13
    })
  }, "\u0110\u1ED3ng h\xE0nh ki\u1EBFn tr\xFAc & chuy\u1EC3n giao h\u1EC7 th\u1ED1ng AI Agent B2B"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-5xl)',
      fontWeight: 'var(--weight-black)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-on-dark)'
    }
  }, "X\xF3a B\u1ECF \u0110i\u1EC3m Ngh\u1EBDn V\u1EADn H\xE0nh.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(100deg,var(--iris-300),var(--teal-300))',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "T\u1EF1 Ch\u1EE7 C\u1ED7 M\xE1y Doanh Nghi\u1EC7p"), " B\u1EB1ng AI Agent."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-lead-size)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-on-dark-muted)',
      maxWidth: 540
    }
  }, "Kh\xF4ng b\xE1n c\xF4ng c\u1EE5 r\u1EDDi r\u1EA1c, kh\xF4ng l\xE0m h\u1ED9 r\u1ED7ng ru\u1ED9t. Trang Anh AI s\u1ED1 h\xF3a to\xE0n b\u1ED9 t\xE0i s\u1EA3n tri th\u1EE9c, t\u1EF1 \u0111\u1ED9ng h\xF3a hi\u1EC7n di\u1EC7n tr\xEAn ChatGPT & Gemini, c\u0103n ch\u1EC9nh lu\u1ED3ng t\u1EEB Ti\u1EBFp th\u1ECB \u0111\u1EBFn B\xE1n h\xE0ng \u2014 v\xE0 trang b\u1ECB B\xE1o C\xE1o Qu\u1EA3n Tr\u1ECB 1 Trang \u0111\u1EC3 Ban L\xE3nh \u0110\u1EA1o l\xE0m ch\u1EE7 ch\u1EC9 sau 4 tu\u1EA7n."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HButton, {
    size: "lg",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "stethoscope",
      size: 18
    })
  }, "\u0110\u0103ng k\xFD Kh\xE1m S\u1EE9c Kh\u1ECFe V\u1EADn H\xE0nh"), /*#__PURE__*/React.createElement(HButton, {
    size: "lg",
    variant: "onDark",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "play-circle",
      size: 18
    })
  }, "Live Demo 45 ph\xFAt")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-on-dark-muted)'
    }
  }, ['Cài đặt 100% trên tài khoản Enterprise chính chủ', 'Tuân thủ Luật Dữ Liệu 91/2025/QH15 & Luật AI 134/2025/QH15', 'Sở hữu vĩnh viễn quy trình & dữ liệu sạch'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-300)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 13
  })), t)))), /*#__PURE__*/React.createElement(HeroMock, null)));
}
Object.assign(window, {
  Hero,
  HeroMock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Pricing.jsx
try { (() => {
const {
  PricingCard: PCard,
  Badge: PBadge,
  SectionHeading: PHead,
  Button: PBtn,
  Field: PField,
  Input: PInput,
  Select: PSelect,
  Checkbox: PCheck,
  Card: PPlain
} = window.TrangAnhAIDesignSystem_40b425;
function Pricing() {
  return /*#__PURE__*/React.createElement(Sec, {
    dark: true
  }, /*#__PURE__*/React.createElement(PHead, {
    onDark: true,
    align: "center",
    eyebrow: "B\u1EA3ng gi\xE1 \u0111\u1EA7u t\u01B0 minh b\u1EA1ch",
    title: "Chi Ph\xED Minh B\u1EA1ch \u2014 Gi\xE1 Tr\u1ECB V\u1EADn H\xE0nh V\u01B0\u1EE3t Tr\u1ED9i"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px',
      borderRadius: 'var(--radius-badge)',
      background: 'rgba(245,158,11,.12)',
      border: '1px solid rgba(245,158,11,.4)',
      color: 'var(--amber-300)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 16
  }), "THE ULTIMATE 0-SETUP OFFER \u2014 t\u1EB7ng 100% ph\xED ki\u1EBFn tr\xFAc (ti\u1EBFt ki\u1EC7m t\u1EDBi 35.000.000 \u0111) \xB7 gi\u1EDBi h\u1EA1n 20 doanh nghi\u1EC7p ti\xEAn phong")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(PCard, {
    tier: "G\xF3i 1 \u2014 Foundation",
    name: "N\u1EC1n t\u1EA3ng",
    price: "12.500.000 \u0111",
    setupNote: "Ph\xED ki\u1EBFn tr\xFAc 20.000.000 \u0111 \u2192 MI\u1EC4N PH\xCD",
    quarterNote: "Thu tr\u01B0\u1EDBc Qu\xFD 1: 37.500.000 \u0111",
    features: ['01 website chính', '8 – 12 bài chuyên sâu E-E-A-T / tháng', 'Master RAG Lake cập nhật hàng tháng', 'LiveChat website cơ bản', 'Báo cáo tóm tắt hàng tháng', {
      label: 'Trợ lý dự toán & báo giá',
      included: false
    }, {
      label: 'Tender & Bidding Copilot',
      included: false
    }, 'SLA hỗ trợ 48 giờ làm việc']
  }), /*#__PURE__*/React.createElement(PCard, {
    featured: true,
    tier: "G\xF3i 2 \u2014 Growth",
    name: "T\u0103ng tr\u01B0\u1EDFng",
    price: "24.000.000 \u0111",
    setupNote: "Ph\xED ki\u1EBFn tr\xFAc 25.000.000 \u0111 \u2192 MI\u1EC4N PH\xCD",
    quarterNote: "Thu tr\u01B0\u1EDBc Qu\xFD 1: 72.000.000 \u0111",
    cta: "Ch\u1ECDn g\xF3i ch\u1EE7 l\u1EF1c",
    features: ['1 – 3 website vệ tinh tập trung', '16 – 24 bài E-E-A-T đa site / tháng', 'Master RAG Lake real-time đa kênh', 'LiveChat Web + Fanpage + Zalo OA', 'Dashboard 1 trang real-time', 'Zalo Copilot báo giá PDF 8 giây', {
      label: 'Tender & Bidding Copilot',
      included: false
    }, 'SLA 24 giờ + họp QBR mỗi quý']
  }), /*#__PURE__*/React.createElement(PCard, {
    tier: "G\xF3i 3 \u2014 Enterprise",
    name: "To\xE0n di\u1EC7n",
    price: "41.500.000 \u0111",
    setupNote: "Ph\xED ki\u1EBFn tr\xFAc 35.000.000 \u0111 \u2192 MI\u1EC4N PH\xCD",
    quarterNote: "Thu tr\u01B0\u1EDBc Qu\xFD 1: 124.500.000 \u0111",
    features: ['3 – 5+ website vệ tinh', '30+ bài E-E-A-T + tài liệu kỹ thuật', 'Master Lake + Hybrid Semantic Search', 'CSKH đa kênh + tự phân loại Deal', 'Dashboard + mô phỏng kịch bản What-If', 'Báo giá 8s + chiết khấu đa tầng', 'BOQ thủy lực & HSĐXKT trong 30 phút', 'Hỗ trợ ưu tiên 4 giờ + cố vấn 1-1']
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: 'var(--space-8)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-on-dark-muted)'
    }
  }, "B\u1EA3o \u0111\u1EA3m ho\xE0n ti\u1EC1n 100% t\u1EA1i bu\u1ED5i QBR ng\xE0y th\u1EE9 75 n\u1EBFu h\u1EC7 th\u1ED1ng kh\xF4ng ti\u1EBFt ki\u1EC7m t\u1ED1i thi\u1EC3u 30 gi\u1EDD c\xF4ng m\u1ED7i th\xE1ng."));
}
function LeadForm() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(Sec, {
    tight: true,
    style: {
      background: 'var(--gradient-brand-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--gutter-lg)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(PHead, {
    eyebrow: "Final CTA",
    title: "\u0110\u0103ng K\xFD Kh\xE1m S\u1EE9c Kh\u1ECFe V\u1EADn H\xE0nh & Live Demo 45 Ph\xFAt",
    lead: "Nh\u1EADn b\xE1o c\xE1o ph\xE2n t\xEDch c\xE1c \u0111i\u1EC3m ngh\u1EBDn d\u1EEF li\u1EC7u th\u1EF1c t\u1EBF t\u1EA1i doanh nghi\u1EC7p c\u1EE7a b\u1EA1n v\xE0 tr\u1EF1c ti\u1EBFp ch\u1EE9ng ki\u1EBFn c\u1ED7 m\xE1y AI b\xF3c t\xE1ch th\xF4ng s\u1ED1 k\u1EF9 thu\u1EADt ngay tr\xEAn m\xE0n h\xECnh."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, [['clock', 'Chuyên gia liên hệ xác nhận lịch trong vòng 2 giờ làm việc'], ['shield-check', 'Bảo mật 100% theo Luật 91/2025/QH15'], ['presentation', 'Demo trên dữ liệu thật của doanh nghiệp bạn']].map(t => /*#__PURE__*/React.createElement("span", {
    key: t[1],
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-600)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t[0],
    size: 16
  })), t[1])))), /*#__PURE__*/React.createElement(PPlain, {
    elevation: "lg",
    pad: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      justifyItems: 'center',
      textAlign: 'center',
      padding: 'var(--space-8) 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 999,
      display: 'grid',
      placeItems: 'center',
      background: 'var(--surface-accent-soft)',
      color: 'var(--teal-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 600
    }
  }, "\u0110\xE3 nh\u1EADn th\xF4ng tin c\u1EE7a b\u1EA1n"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      maxWidth: 340
    }
  }, "Chuy\xEAn gia Trang Anh AI s\u1EBD g\u1ECDi x\xE1c nh\u1EADn l\u1ECBch Audit trong v\xF2ng 2 gi\u1EDD l\xE0m vi\u1EC7c."), /*#__PURE__*/React.createElement(PBtn, {
    variant: "ghost",
    size: "sm",
    onClick: () => setSent(false)
  }, "G\u1EEDi th\xF4ng tin kh\xE1c")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(PField, {
    label: "H\u1ECD v\xE0 t\xEAn l\xE3nh \u0111\u1EA1o / ng\u01B0\u1EDDi \u0111\u1EA1i di\u1EC7n",
    required: true
  }, /*#__PURE__*/React.createElement(PInput, {
    required: true,
    placeholder: "Nguy\u1EC5n V\u0103n A",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 16
    })
  })), /*#__PURE__*/React.createElement(PField, {
    label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i / Zalo k\u1EBFt n\u1ED1i",
    required: true
  }, /*#__PURE__*/React.createElement(PInput, {
    required: true,
    placeholder: "09xx xxx xxx",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    })
  })), /*#__PURE__*/React.createElement(PField, {
    label: "T\xEAn doanh nghi\u1EC7p & ng\xE0nh ngh\u1EC1",
    required: true
  }, /*#__PURE__*/React.createElement(PInput, {
    required: true,
    placeholder: "C\xF4ng ty TNHH V\u1EADt t\u01B0 ABC \u2014 h\xF3a ch\u1EA5t x\u1EED l\xFD n\u01B0\u1EDBc",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "building-2",
      size: 16
    })
  })), /*#__PURE__*/React.createElement(PField, {
    label: "Quy m\xF4 hi\u1EC7n t\u1EA1i",
    hint: "S\u1ED1 l\u01B0\u1EE3ng nh\xE2n s\u1EF1 / s\u1ED1 l\u01B0\u1EE3ng website"
  }, /*#__PURE__*/React.createElement(PSelect, {
    options: ['5 – 15 nhân sự · 1 website', '16 – 30 nhân sự · 1 – 3 website', '31 – 50 nhân sự · 3+ website', 'Trên 50 nhân sự']
  })), /*#__PURE__*/React.createElement(PCheck, {
    defaultChecked: true,
    label: "T\xF4i \u0111\u1ED3ng \xFD \u0111\u1EC3 Trang Anh AI li\xEAn h\u1EC7 t\u01B0 v\u1EA5n theo Lu\u1EADt 91/2025/QH15"
  }), /*#__PURE__*/React.createElement(PBtn, {
    size: "lg",
    block: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 17
    })
  }, "G\u1EEDi th\xF4ng tin \u2014 Nh\u1EADn b\xE1o c\xE1o Audit"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "Th\xF4ng tin c\u1EE7a b\u1EA1n \u0111\u01B0\u1EE3c cam k\u1EBFt b\u1EA3o m\u1EADt 100%.")))));
}
Object.assign(window, {
  Pricing,
  LeadForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Card: SCard,
  Badge: SBadge,
  SectionHeading: SHead,
  Tabs: STabs,
  Accordion: SAcc,
  DataTable: STable,
  StepTimeline: STime,
  NodeCard: SNode,
  Button: SBtn
} = window.TrangAnhAIDesignSystem_40b425;
const Sec = ({
  children,
  dark = false,
  tight = false,
  style
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    paddingTop: tight ? 'var(--section-y-tight)' : 'var(--section-y)',
    paddingBottom: tight ? 'var(--section-y-tight)' : 'var(--section-y)',
    background: dark ? 'var(--gradient-dark)' : 'transparent',
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, children));
function MarketReality() {
  const rows = [{
    bad: '1. AI tự bịa thông số & tính nhẩm sai — LLM đoán mã hàng kỹ thuật, tính sai đơn giá chiết khấu.',
    good: 'Dữ liệu chuẩn xác 100% (cấm AI tính nhẩm): mọi phép tính giá khóa chặt vào CSDL gốc của công ty.'
  }, {
    bad: '2. Tàng hình trên các công cụ Chat AI — khách hỏi ChatGPT, Perplexity nhưng website của bạn không được nhắc đến.',
    good: 'Cỗ máy hiện diện AI Search tự động: bài viết chuyên gia từ dữ liệu công ty, tối ưu để Chat AI trích dẫn.'
  }, {
    bad: '3. Rò rỉ dữ liệu & nguy cơ pháp lý — nhân viên dán bảng giá mật lên AI công cộng.',
    good: 'Hạ tầng Enterprise độc lập: dữ liệu không rời doanh nghiệp, không dùng để huấn luyện AI chung.'
  }, {
    bad: '4. Bội thực công cụ, nhân viên không dùng — mua nhiều phần mềm nhưng vẫn quay về Zalo và Excel.',
    good: 'Nhúng nhẹ vào quy trình có sẵn: AI chuẩn bị 95%, nhân viên kiểm tra và bấm duyệt trong 10 giây.'
  }];
  return /*#__PURE__*/React.createElement(Sec, null, /*#__PURE__*/React.createElement(SHead, {
    align: "center",
    eyebrow: "Th\u1EF1c tr\u1EA1ng th\u1ECB tr\u01B0\u1EDDng",
    title: "T\u1EA1i Sao 48,8% Doanh Nghi\u1EC7p T\u1EEBng \u1EE8ng D\u1EE5ng C\xF4ng Ngh\u1EC7 Bu\u1ED9c Ph\u1EA3i D\u1EEBng L\u1EA1i?",
    lead: "Doanh nghi\u1EC7p B2B kh\xF4ng thi\u1EBFu c\xF4ng c\u1EE5 AI. Th\u1EE9 \u0111ang thi\u1EBFu l\xE0 m\u1ED9t n\u1EC1n t\u1EA3ng d\u1EEF li\u1EC7u chu\u1EA9n x\xE1c v\xE0 m\u1ED9t quy tr\xECnh v\u1EADn h\xE0nh g\u1EAFn k\u1EBFt.",
    source: "Ngu\u1ED3n: B\xE1o c\xE1o Th\u01B0\u1EDDng ni\xEAn Chuy\u1EC3n \u0110\u1ED5i S\u1ED1 \u2014 B\u1ED9 K\u1EBF Ho\u1EA1ch & \u0110\u1EA7u T\u01B0 ph\u1ED1i h\u1EE3p c\xF9ng GIZ (n\u22481.300)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-12)'
    }
  }, [['18%', 'DN đã tiếp cận AI, chỉ 1% đạt độ trưởng thành vận hành'], ['76%', 'không tự tin vào năng lực tự triển khai nội bộ'], ['2,2%', 'DN làm chủ dữ liệu để ra quyết định'], ['41%', 'quản lý Việt Nam khó chứng minh ROI từ AI']].map(s => /*#__PURE__*/React.createElement(SCard, {
    key: s[0],
    elevation: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      color: 'var(--iris-600)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, s[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      marginTop: 'var(--space-2)'
    }
  }, s[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(STable, {
    columns: [{
      key: 'bad',
      label: '4 bất cập khiến doanh nghiệp thất vọng với AI tự phát'
    }, {
      key: 'good',
      label: 'Chuẩn mực giải pháp của Trang Anh AI'
    }],
    rows: rows.map(r => ({
      bad: /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--rose-500)',
          marginTop: 2
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "alert-triangle",
        size: 15
      })), /*#__PURE__*/React.createElement("span", null, r.bad)),
      good: /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--teal-600)',
          marginTop: 2
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check-circle-2",
        size: 15
      })), /*#__PURE__*/React.createElement("span", null, r.good))
    }))
  })));
}
function PainPoints() {
  const pains = [['user-x', 'Tri thức bị "bắt cóc" bởi cá nhân', 'Bảng giá lưu máy cá nhân, quy trình nằm trong đầu người cũ, catalogue rải rác nhóm chat. Một nhân sự kỳ cựu nghỉ việc: mất 3–6 tháng và hàng chục triệu đồng để tuyển và đào tạo lại.'], ['timer-off', 'Mất khách vì phản hồi chậm trễ', 'Khách hỏi dự toán, nhân viên mất hàng giờ lục file cũ. 68% người mua B2B chọn đơn vị phản hồi chuyên nghiệp đầu tiên.'], ['gauge', 'Ban Giám Đốc điều hành bằng cảm tính', 'Muốn biết hiệu quả từng kênh phải chờ báo cáo tổng hợp thủ công cuối tháng. Thiếu số liệu tức thì khiến quyết định luôn trễ nhịp.']];
  return /*#__PURE__*/React.createElement(Sec, {
    dark: true
  }, /*#__PURE__*/React.createElement(SHead, {
    onDark: true,
    align: "center",
    eyebrow: "3 \u0111i\u1EC3m ngh\u1EBDn v\u1EADn h\xE0nh B2B Vi\u1EC7t Nam",
    title: "Ba \"L\u1ED7 R\xF2 R\u1EC9 V\u1EADn H\xE0nh\" \u0110ang \xC2m Th\u1EA7m B\xE0o M\xF2n Bi\xEAn L\u1EE3i Nhu\u1EADn"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-12)'
    }
  }, pains.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p[1],
    style: {
      padding: 'var(--card-pad-lg)',
      borderRadius: 'var(--radius-card)',
      background: 'rgba(255,255,255,.04)',
      border: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(225,29,72,.14)',
      color: '#FDA4AF'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p[0],
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-on-dark-muted)'
    }
  }, '0' + (i + 1))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-on-dark)',
      marginTop: 'var(--space-4)',
      lineHeight: 1.35
    }
  }, p[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.7,
      color: 'var(--text-on-dark-muted)',
      marginTop: 'var(--space-3)'
    }
  }, p[2])))));
}
const NODES = [{
  index: 1,
  name: 'RAG Data Hub',
  role: 'Gốc rễ tri thức',
  modules: ['Core Master RAG Lake'],
  items: ['Số hóa Excel gộp ô, TDS, catalogue', 'Tiêu chuẩn ASTM, QCVN, Quatest', 'Khử ảo giác bằng Deterministic SQL']
}, {
  index: 2,
  name: 'Flow Content & GEO',
  role: 'Kênh thu hút',
  modules: ['M1', 'M2'],
  items: ['16 – 24 bài E-E-A-T mỗi tháng', 'Phủ sóng ChatGPT / Gemini / Perplexity', 'Chăm sóc 1 – 3+ web vệ tinh']
}, {
  index: 3,
  name: 'Tiếp đón 24/7 & CRM',
  role: 'Bộ lọc & giữ chân',
  modules: ['M3', 'M5'],
  items: ['Chatbot tư vấn kỹ thuật 24/7', 'Thu SĐT/Zalo, chấm điểm Lead', 'Đồng bộ Deal vào MISA AMIS, Brevo']
}, {
  index: 4,
  name: 'Sales & Báo giá nhanh',
  role: 'Cỗ máy chốt đơn',
  modules: ['M4', 'M6', 'M7'],
  items: ['Dự toán BOQ vật tư trong 2 phút', 'PDF Vector Typst + VietQR trong 8s', 'Nhân viên duyệt 10 giây rồi gửi']
}, {
  index: 5,
  name: 'Executive BI Dashboard',
  role: 'Kiểm soát & tối ưu',
  modules: ['M0'],
  items: ['Báo cáo 1 trang thời gian thực', 'Traffic → Lead → Báo giá → Doanh thu', 'Tối ưu ngược chính sách giá Node 1']
}];
function Pipeline() {
  const [active, setActive] = React.useState(0);
  const n = NODES[active];
  return /*#__PURE__*/React.createElement(Sec, null, /*#__PURE__*/React.createElement(SHead, {
    align: "center",
    eyebrow: "D\xE2y chuy\u1EC1n v\u1EADn h\xE0nh kh\xE9p k\xEDn",
    title: "D\xE2y Chuy\u1EC1n 5 Node: T\u1EEB Tri Th\u1EE9c G\u1ED1c \u0110\u1EBFn Doanh Thu Th\u1EF1c T\u1EBF",
    lead: "B\u1EA5m v\xE0o t\u1EEBng node \u0111\u1EC3 xem d\u1EEF li\u1EC7u v\xE0o, b\u1ED9 m\xE1y x\u1EED l\xFD v\xE0 k\u1EBFt qu\u1EA3 b\xE0n giao."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-12)'
    }
  }, NODES.map((nd, i) => /*#__PURE__*/React.createElement(SNode, _extends({
    key: nd.index
  }, nd, {
    active: i === active,
    onClick: () => setActive(i)
  })))), /*#__PURE__*/React.createElement(SCard, {
    surface: "sunken",
    elevation: "none",
    pad: "lg",
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-8)'
    }
  }, [['Dữ liệu vào (Input)', n.items[0]], ['Bộ máy xử lý (Engine)', n.items[1]], ['Kết quả bàn giao (Output)', n.items[2]]].map(c => /*#__PURE__*/React.createElement("div", {
    key: c[0],
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, c[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      fontWeight: 500,
      lineHeight: 1.5
    }
  }, c[1]))))));
}
const CASES = {
  chem: {
    label: 'Hóa chất, vật liệu lọc & xử lý nước',
    rows: [['Thu hút khách hàng mới', 'Khách hỏi ChatGPT "So sánh than hoạt tính gáo dừa và than đá trong xử lý nước cấp?" → AI trích dẫn bài phân tích kỹ thuật trên website của bạn.'], ['Hỗ trợ bán hàng', 'Khách gửi ảnh tem bao bì → Trợ lý đối chiếu hồ sơ Quatest, chỉ số Iodine, tính thể tích bồn lọc và xuất bảng giá kèm mã thanh toán trong vài giây.'], ['Quản trị', 'CEO theo dõi nhu cầu tìm kiếm của các nhà máy công nghiệp theo từng khu vực.']]
  },
  valve: {
    label: 'Van, thiết bị công nghiệp & Cơ điện M&E',
    rows: [['Thu hút khách hàng mới', 'Xuất hiện đầu tiên khi kỹ sư tra cứu tiêu chuẩn mặt bích DIN, van điều khiển khí nén, thông số chịu áp PN16.'], ['Hỗ trợ bán hàng', 'Nhận danh mục dự án hàng chục mã vật tư → tự động bóc tách quy cách, kiểm tra tồn kho và lập Bảng dự toán BOQ hoàn chỉnh.'], ['Quản trị', 'Nắm tỷ lệ chuyển đổi từ gửi báo giá dự thầu đến khi ký hợp đồng.']]
  },
  multi: {
    label: 'Doanh nghiệp vận hành nhiều website vệ tinh',
    rows: [['Bài toán', 'Muốn mở rộng độ phủ bằng 2–3 website vệ tinh nhưng không đủ nhân sự viết bài, lo bị phạt vì nội dung trùng lặp.'], ['Giải pháp', 'Mô hình Một Trung Tâm — Đa Chi Nhánh: tri thức nằm tại một bộ não tập trung, hệ thống tự biên tập và phân luồng nội dung độc bản cho từng site.'], ['Kết quả', 'Tiết kiệm 80% chi phí duy trì đội ngũ nội dung.']]
  }
};
function UseCases() {
  const [tab, setTab] = React.useState('chem');
  const c = CASES[tab];
  return /*#__PURE__*/React.createElement(Sec, {
    tight: true
  }, /*#__PURE__*/React.createElement(SHead, {
    eyebrow: "\u1EE8ng d\u1EE5ng th\u1EF1c t\u1EBF theo ng\xE0nh",
    title: "Gi\u1EA3i Ph\xE1p \u0110\u01B0\u1EE3c May \u0110o Cho T\u1EEBng Ng\xE0nh K\u1EF9 Thu\u1EADt & C\xF4ng Nghi\u1EC7p"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      display: 'grid',
      gap: 'var(--space-6)',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(STabs, {
    defaultValue: "chem",
    onChange: setTab,
    items: [{
      id: 'chem',
      label: 'Hóa chất & Xử lý nước'
    }, {
      id: 'valve',
      label: 'Van & Cơ điện M&E'
    }, {
      id: 'multi',
      label: 'Đa website vệ tinh'
    }]
  }), /*#__PURE__*/React.createElement(SCard, {
    elevation: "md",
    pad: "lg",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 600
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-6)'
    }
  }, c.rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.7
    }
  }, r[1])))))));
}
function Roadmap() {
  return /*#__PURE__*/React.createElement(Sec, {
    tight: true
  }, /*#__PURE__*/React.createElement(SHead, {
    eyebrow: "L\u1ED9 tr\xECnh Done-With-You",
    title: "L\u1ED9 Tr\xECnh 4 Tu\u1EA7n: Trang Anh AI G\xE1nh 90% Kh\u1ED1i L\u01B0\u1EE3ng K\u1EF9 Thu\u1EADt Ban \u0110\u1EA7u"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(STime, {
    activeIndex: 0,
    steps: [{
      period: 'Tuần 1',
      title: 'Khảo sát & Chuẩn hóa dữ liệu',
      body: 'Tiếp nhận bảng giá Excel, catalogue, tài liệu kỹ thuật; gỡ gộp ô phức tạp, số hóa thành bộ não tri thức sạch.',
      clientTask: 'DN cần: bàn giao tài liệu + cử 1 đầu mối đối soát'
    }, {
      period: 'Tuần 2',
      title: 'Cài đặt trên tài khoản chính chủ',
      body: 'Thiết lập cỗ máy trên workspace Enterprise riêng; cài giọng văn thương hiệu, luồng xuất bản và Chatbot 24/7.'
    }, {
      period: 'Tuần 3',
      title: 'Căn chỉnh luồng vận hành thực tế',
      body: 'Kiểm thử hỏi đáp kỹ thuật, lập dự toán và báo giá; kết nối dữ liệu về Báo Cáo Quản Trị 1 Trang.'
    }, {
      period: 'Tuần 4',
      title: 'Đào tạo nhân sự & bàn giao SOP',
      body: '2 buổi đào tạo thực chiến: nhân viên duyệt việc trong 10 giây, Ban Giám Đốc khai thác số liệu báo cáo.',
      clientTask: 'Bàn giao: DN làm chủ 100% hệ thống, ký nghiệm thu'
    }]
  })));
}
function Faq() {
  return /*#__PURE__*/React.createElement(Sec, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 'var(--gutter-lg)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SHead, {
    eyebrow: "Minh b\u1EA1ch ph\xE1p l\xFD",
    title: "Gi\u1EA3i \u0110\xE1p B\u0103n Kho\u0103n C\u1EE7a Nh\xE0 Qu\u1EA3n Tr\u1ECB",
    lead: "Lu\u1EADt D\u1EEF Li\u1EC7u 91/2025/QH15 \xB7 Lu\u1EADt AI 134/2025/QH15 \xB7 Cam k\u1EBFt QBR ng\xE0y 75."
  }), /*#__PURE__*/React.createElement(SAcc, {
    items: [{
      q: 'Dữ liệu nội bộ và bí mật kinh doanh của công ty tôi có bị rò rỉ không?',
      a: 'Tuyệt đối an toàn. Hệ thống được thiết lập hoàn toàn trên tài khoản Enterprise chính chủ của doanh nghiệp bạn. Mọi dữ liệu khách hàng, bảng giá và công thức kỹ thuật đều được mã hóa và bảo vệ theo tiêu chuẩn Luật Dữ Liệu 91/2025/QH15. Doanh nghiệp sở hữu vĩnh viễn dữ liệu và quy trình đã chuẩn hóa.'
    }, {
      q: 'Doanh nghiệp tôi có phải cử người làm nhiều việc kỹ thuật phức tạp không?',
      a: 'Không. Trang Anh AI trực tiếp thực hiện 90% khối lượng công việc nặng nhọc nhất trong 4 tuần đầu. Nhân sự của bạn chỉ cần cung cấp file mẫu và tham gia 2 buổi nhận bàn giao ở tuần thứ 4. Quy trình hàng ngày chỉ cần 10 giây để kiểm tra và bấm duyệt.'
    }, {
      q: 'Làm sao Ban Giám Đốc đo lường được ROI thực tế?',
      a: 'Hiệu quả được chứng minh bằng con số ngay trên Báo Cáo Quản Trị 1 Trang: số khách hàng tiềm năng từ Chat AI và công cụ tìm kiếm; số giờ công được giải phóng; tốc độ phản hồi báo giá rút ngắn từ nhiều giờ xuống còn vài giây.'
    }, {
      q: 'Chính sách QBR ngày 75 và hoàn tiền được thực hiện thế nào?',
      a: 'Vào ngày thứ 75 của hợp đồng, hai bên họp đánh giá kết quả thực tế. Nếu hệ thống không giúp tiết kiệm tối thiểu 30 giờ công mỗi tháng hoặc không đạt các tiêu chuẩn vận hành đã thống nhất, Trang Anh AI hoàn trả 100% chi phí dịch vụ của tháng tiếp theo, và doanh nghiệp vẫn giữ toàn bộ cơ sở dữ liệu đã được làm sạch.'
    }]
  })));
}
Object.assign(window, {
  Sec,
  MarketReality,
  PainPoints,
  Pipeline,
  UseCases,
  Roadmap,
  Faq,
  NODES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/app.jsx
try { (() => {
function LandingPage() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(MarketReality, null), /*#__PURE__*/React.createElement(PainPoints, null), /*#__PURE__*/React.createElement(Pipeline, null), /*#__PURE__*/React.createElement(UseCases, null), /*#__PURE__*/React.createElement(Roadmap, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(LeadForm, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(LandingPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/parts.jsx
try { (() => {
const {
  Logo,
  Button,
  Badge,
  Card,
  SectionHeading,
  Tabs,
  Accordion,
  MetricCard,
  DataTable,
  PricingCard,
  StepTimeline,
  NodeCard,
  Field,
  Input,
  Select,
  Checkbox
} = window.TrangAnhAIDesignSystem_40b425;
const A = '../../assets/logo-icon.jpg';
function Icon({
  name,
  size = 16,
  color = 'currentColor',
  strokeWidth = 2
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '';
    const el = document.createElement('i');
    el.setAttribute('data-lucide', name);
    ref.current.appendChild(el);
    window.lucide.createIcons({
      nameAttr: 'data-lucide',
      attrs: {
        width: size,
        height: size,
        stroke: color,
        'stroke-width': strokeWidth
      },
      root: ref.current
    });
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto'
    }
  });
}
function Nav() {
  const links = ['Bất cập AI', 'Dây chuyền 5 Node', 'Ứng dụng ngành', 'Lộ trình 4 tuần', 'Bảng giá', 'FAQ'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'var(--glass-light)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      height: 'var(--topbar-h)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 32,
    src: A
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      flex: '1 1 auto',
      minWidth: 0,
      overflow: 'hidden'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-body)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@tranganhai.com",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, "contact@tranganhai.com"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-check",
      size: 15
    })
  }, "\u0110\u0103ng k\xFD Audit"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--gradient-dark)',
      color: 'var(--text-on-dark-muted)',
      paddingTop: 'var(--space-16)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 36,
    onDark: true,
    tagline: true,
    src: A
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.7,
      maxWidth: 300
    }
  }, "\u0110\u1ED1i t\xE1c tri\u1EC3n khai H\u1EC7 th\u1ED1ng AI Agent V\u1EADn H\xE0nh T\u1EF1 Ch\u1EE7, Ki\u1EBFn tr\xFAc D\u1EEF li\u1EC7u RAG & C\u0103n ch\u1EC9nh Lu\u1ED3ng Doanh nghi\u1EC7p.")), [['Giải pháp', ['Master RAG Lake', 'Hiện diện AI Search (GEO)', 'Zalo Copilot báo giá 8s', 'Executive BI Dashboard']], ['Ngành trọng tâm', ['Hóa chất & Xử lý nước', 'Van & Cơ điện M&E', 'Vật tư công nghiệp', 'Doanh nghiệp đa website']], ['Tuân thủ', ['Luật Dữ liệu 91/2025/QH15', 'Nghị định 356/2025/NĐ-CP', 'Luật AI 134/2025/QH15', 'Human-in-the-loop']]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark)'
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 'var(--text-sm)'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      marginTop: 'var(--space-12)',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--border-on-dark)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      fontSize: 'var(--text-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 TRANG ANH AI VIETNAM (Trang Anh Systems). B\u1EA3n quy\u1EC1n thu\u1ED9c \u0111\u01A1n v\u1ECB ph\xE1t tri\u1EC3n."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "tranganhai.com")));
}
Object.assign(window, {
  Icon,
  Nav,
  Footer,
  DS_A: A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.NodeCard = __ds_scope.NodeCard;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StepTimeline = __ds_scope.StepTimeline;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
