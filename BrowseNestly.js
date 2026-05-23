import React from 'react';

export default function Browse({ sitters, favorites, onOpenProfile, onNavigate }) {
  return (
    <div className="screen">
      <div className="sbar">
        <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent)', fontSize: '14px' }}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </span>
      </div>
      <div className="topnav">
        <div className="page-title">Browse Sitters</div>
      </div>
      <div className="scroll">
        {sitters.map((s) => (
          <div key={s.id} className="slist-card" onClick={() => onOpenProfile(s.id)}>
            <div className="slist-avt" style={{ background: s.bg }}>{s.emoji}</div>
            <div className="slist-body">
              <div className="slist-row">
                <div className="slist-name">{s.name}{s.verified && <span style={{ fontSize: '10px', color: 'var(--green)' }}> ✓</span>}</div>
                <div className="slist-rate">₹{s.rate}/hr</div>
              </div>
              <div className="slist-meta">📍 {s.loc} · {s.dist} · {s.exp} exp · ★{s.rating}</div>
              <div className="slist-tags">
                {s.tags.map((t, i) => <div key={i} className="tag">{t}</div>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
