import React, { useState } from 'react';

export default function Home({ sitters, favorites, onOpenProfile, onShowNotifications, onNavigate, onShowToast }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = sitters.filter((s) => {
    if (search && !s.name.toLowerCase().includes(search.toLowerCase()) && !s.loc.toLowerCase().includes(search.toLowerCase())) return false;
    if (filter === 'today' && !s.avail) return false;
    if (filter === 'cheap' && s.rate > 300) return false;
    if (filter === 'top' && s.rating < 4.7) return false;
    if (filter === 'verified' && !s.verified) return false;
    return true;
  });

  return (
    <div className="screen active">
      <div className="sbar">
        <span>9:41</span>
        <div className="sbar-icons">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1.5 8.5a13 13 0 0 1 21 0M5 12a10 10 0 0 1 14 0M8.5 15.5a6 6 0 0 1 7 0M12 19h.01" />
          </svg>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <rect x="1" y="6" width="18" height="12" rx="2" />
            <path d="M23 13V11" />
          </svg>
        </div>
      </div>

      <div className="topnav">
        <div>
          <div style={{ fontSize: '13px', color: 'var(--text2)', marginBottom: '2px' }}>📍 Navrangpura, Ahmedabad</div>
          <div className="page-title">Find a Sitter</div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="icon-btn">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="16" y2="12" />
              <line x1="11" y1="18" x2="13" y2="18" />
            </svg>
          </button>
          <button className="icon-btn" onClick={onShowNotifications} style={{ position: 'relative' }}>
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <div className="bnav-badge" style={{ top: '6px', right: '6px', width: '8px', height: '8px', minWidth: 0 }} />
          </button>
        </div>
      </div>

      <div className="scroll">
        <div className="search-wrap">
          <div className="search-box">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, area, skill…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="chips">
          {['all', 'today', 'cheap', 'top', 'verified'].map((f) => (
            <button
              key={f}
              className={`chip ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All Sitters' : f === 'today' ? 'Available Today' : f === 'cheap' ? 'Under ₹300' : f === 'top' ? 'Top Rated' : 'Verified Only'}
            </button>
          ))}
        </div>

        <div style={{
          margin: '0 20px 20px',
          background: 'linear-gradient(135deg,#1e1218 0%,#1a1a2e 100%)',
          borderRadius: 'var(--r24)',
          padding: '24px',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255,107,74,0.2)',
        }}>
          <div style={{ background: 'rgba(255,107,74,0.15)', color: 'var(--accent)', borderRadius: '20px', padding: '4px 12px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', width: 'fit-content', marginBottom: '10px' }}>🔥 Today's Picks</div>
          <div className="ob-title">3 sitters available<br />near you right now</div>
          <div style={{ fontSize: '13px', color: 'var(--text2)', marginBottom: '16px', lineHeight: 1.5 }}>Priya, Arjun & Divya are online and accepting bookings.</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px 14px' }}>
          <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)' }}>Featured Sitters</div>
          <button style={{ fontSize: '13px', color: 'var(--accent)', cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'Outfit' }} onClick={() => onNavigate('browse')}>See all →</button>
        </div>

        <div className="hscroll">
          {sitters.slice(0, 3).map((s) => (
            <div key={s.id} className="scard-feat" onClick={() => onOpenProfile(s.id)}>
              <div className="scard-avt" style={{ background: s.bg }}>{s.emoji}<div className="scard-online" /></div>
              <div className="scard-name">{s.name}</div>
              <div className="scard-loc">📍 {s.loc} · {s.dist}</div>
              <div className="scard-stars"><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span> {s.rating} ({s.reviews})</div>
              <div className={`scard-avail ${s.avail ? 'avail-yes' : 'avail-no'}`}>{s.avail ? 'Available today' : 'Not available'}</div>
              <div className="scard-rate">₹{s.rate}<span>/hr</span></div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px 14px' }}>
          <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)' }}>Browse All</div>
          <div style={{ fontSize: '13px', color: 'var(--text2)' }}>{filtered.length} results</div>
        </div>

        {filtered.map((s) => (
          <div key={s.id} className="slist-card" onClick={() => onOpenProfile(s.id)}>
            <div className="slist-avt" style={{ background: s.bg }}>{s.emoji}</div>
            <div className="slist-body">
              <div className="slist-row">
                <div className="slist-name">{s.name}{s.verified && <span style={{ fontSize: '10px', color: 'var(--green)' }}> ✓</span>}</div>
                <div className="slist-rate">₹{s.rate}/hr</div>
              </div>
              <div className="slist-meta">📍 {s.loc} · {s.dist} · {s.exp} exp · <span style={{ color: s.rating >= 4.8 ? 'var(--accent3)' : 'var(--text2)' }}>★{s.rating}</span></div>
              <div className="slist-tags">
                {s.tags.map((t, i) => <div key={i} className="tag">{t}</div>)}
                <div className={`tag ${s.avail ? 'avail-yes' : 'avail-no'}`}>{s.avail ? '✓ Today' : 'Busy'}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bnav">
        <button className="bnav-item active" onClick={() => onNavigate('home')}>
          <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Home</span>
        </button>
        <button className="bnav-item" onClick={() => onNavigate('browse')}>
          <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <span>Browse</span>
        </button>
        <button className="bnav-item" onClick={() => onNavigate('messages')}>
          <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span>Messages</span>
          <div className="bnav-badge">2</div>
        </button>
        <button className="bnav-item" onClick={() => onNavigate('favorites')}>
          <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span>Saved</span>
        </button>
        <button className="bnav-item" onClick={() => onNavigate('me')}>
          <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>Me</span>
        </button>
      </div>
    </div>
  );
}
