// ============================================================
// COMPLETE REACT COMPONENT TEMPLATES FOR NESTLY
// Copy these into your src/ directory with the names shown
// ============================================================

// FILE: src/MessagesNestly.js
export const MessagesTemplate = `
import React, { useState } from 'react';

export default function Messages({ onNavigate, onShowToast }) {
  const [messages, setMessages] = useState([
    { id: 1, name: 'Priya Mehta', avatar: '👩', lastMsg: "Can't wait to meet the kids tomorrow!", time: 'Just now', unread: false },
    { id: 2, name: 'Arjun Patel', avatar: '👨', lastMsg: 'Sure! I can do Friday evening', time: '2 hours ago', unread: true },
  ]);

  return (
    <div className="screen active">
      <div className="sbar">
        <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent)' }}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </span>
      </div>
      <div className="topnav">
        <div className="page-title">Messages</div>
      </div>
      <div className="scroll">
        {messages.map((msg) => (
          <div key={msg.id} className="msg-thread">
            <div className="th-av">{msg.avatar}</div>
            <div className="th-body">
              <div className="th-name">{msg.name}</div>
              <div className="th-prev">{msg.lastMsg}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
              <div className="th-time">{msg.time}</div>
              {msg.unread && <div className="unr-dot" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`;

// FILE: src/FavoritesNestly.js
export const FavoritesTemplate = `
import React from 'react';

export default function Favorites({ sitters, favorites, onOpenProfile, onNavigate }) {
  const favSitters = sitters.filter(s => favorites.has(s.id));

  return (
    <div className="screen active">
      <div className="sbar">
        <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent)' }}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </span>
      </div>
      <div className="topnav">
        <div className="page-title">Saved Sitters</div>
      </div>
      <div className="scroll">
        {favSitters.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text3)' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>💔</div>
            <p style={{ fontSize: '14px', marginTop: '8px', color: 'var(--text2)' }}>No saved sitters yet</p>
          </div>
        ) : (
          favSitters.map((s) => (
            <div key={s.id} className="slist-card" onClick={() => onOpenProfile(s.id)}>
              <div className="slist-avt" style={{ background: s.bg }}>{s.emoji}</div>
              <div className="slist-body">
                <div className="slist-row">
                  <div className="slist-name">{s.name}</div>
                  <div className="slist-rate">₹{s.rate}/hr</div>
                </div>
                <div className="slist-meta">📍 {s.loc}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
`;

// FILE: src/ProfileNestly.js
export const ProfileTemplate = `
import React, { useState } from 'react';

export default function Profile({ role, onRoleChange, onNavigate, onShowToast }) {
  const [darkToggle, setDarkToggle] = useState(true);

  return (
    <div className="screen active">
      <div className="sbar" />
      <div className="topnav">
        <div className="page-title">My Profile</div>
      </div>

      <div className="scroll">
        <div style={{
          background: 'var(--bg3)',
          padding: '24px 20px',
          textAlign: 'center',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--bg4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '34px',
            margin: '0 auto 12px',
            border: '2px solid var(--border2)',
          }}>
            {role === 'parent' ? '👨‍👩‍👧' : '🌟'}
          </div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '20px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>
            {role === 'parent' ? 'Parent Account' : 'Sitter Account'}
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text2)' }}>Welcome to Nestly</div>
        </div>

        <div style={{ display: 'flex', background: 'var(--bg4)', borderRadius: '12px', padding: '4px', gap: '4px', margin: '0 20px 16px' }}>
          <button
            style={{
              flex: 1,
              padding: '10px',
              textAlign: 'center',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              color: role === 'parent' ? 'var(--text)' : 'var(--text3)',
              background: role === 'parent' ? 'var(--card2)' : 'transparent',
              border: role === 'parent' ? '1px solid var(--border2)' : 'none',
            }}
            onClick={() => onRoleChange('parent')}
          >
            Parent
          </button>
          <button
            style={{
              flex: 1,
              padding: '10px',
              textAlign: 'center',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              color: role === 'sitter' ? 'var(--text)' : 'var(--text3)',
              background: role === 'sitter' ? 'var(--card2)' : 'transparent',
              border: role === 'sitter' ? '1px solid var(--border2)' : 'none',
            }}
            onClick={() => onRoleChange('sitter')}
          >
            Sitter
          </button>
        </div>

        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>Preferences</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 0', borderBottom: '1px solid var(--border)' }}>
            <label style={{ fontSize: '14px', color: 'var(--text)' }}>Dark Mode</label>
            <button
              style={{
                width: '46px',
                height: '26px',
                background: darkToggle ? 'var(--accent)' : 'var(--bg4)',
                border: 'none',
                borderRadius: '13px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onClick={() => setDarkToggle(!darkToggle)}
            >
              <div style={{
                width: '20px',
                height: '20px',
                background: '#fff',
                borderRadius: '50%',
                position: 'absolute',
                top: '3px',
                right: darkToggle ? '3px' : '23px',
                transition: 'right 0.2s',
              }} />
            </button>
          </div>
        </div>

        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>Account</div>
          <button
            style={{
              width: '100%',
              padding: '13px 0',
              background: 'none',
              border: 'none',
              borderBottom: '1px solid var(--border)',
              fontSize: '14px',
              color: 'var(--red)',
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'Outfit',
            }}
            onClick={() => onShowToast('Signed out')}
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="bnav">
        <button className="bnav-item" onClick={() => onNavigate('home')}>
          <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Home</span>
        </button>
        <button className="bnav-item active">
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
`;

// FILE: src/NotificationsNestly.js
export const NotificationsTemplate = `
import React from 'react';

export default function Notifications({ onNavigate }) {
  const notifications = [
    { id: 1, icon: '📋', title: 'Priya Mehta accepted your booking', time: 'Just now', unread: true },
    { id: 2, icon: '💬', title: 'Arjun Patel sent you a message', time: '2 hours ago', unread: true },
    { id: 3, icon: '⭐', title: "Don't forget to review Neha Shah", time: '1 day ago', unread: false },
  ];

  return (
    <div className="screen active">
      <div className="sbar">
        <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent)' }}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </span>
      </div>
      <div className="topnav">
        <div className="page-title">Notifications</div>
      </div>
      <div className="scroll">
        {notifications.map((n) => (
          <div key={n.id} className="notif-item">
            <div className="notif-icon">{n.icon}</div>
            <div className="notif-body">
              <div className="notif-text">{n.title}</div>
              <div className="notif-time">{n.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`;

// FILE: src/SitterProfileNestly.js
export const SitterProfileTemplate = `
import React, { useState } from 'react';

export default function SitterProfile({ sitter, isFavorite, onToggleFavorite, onOpenBooking, onBack, onNavigate, onShowToast }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!sitter) return null;

  return (
    <div className="screen active">
      <div style={{
        background: 'linear-gradient(180deg,var(--bg3) 0%,var(--bg) 100%)',
        padding: '20px 20px 0',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
            cursor: 'pointer',
            color: 'var(--text2)',
            fontSize: '14px',
            background: 'none',
            border: 'none',
            fontFamily: 'Outfit',
          }}
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div style={{
            width: '88px',
            height: '88px',
            borderRadius: 'var(--r20)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '42px',
            border: '2px solid var(--border2)',
            background: sitter.bg,
          }}>
            {sitter.emoji}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '22px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>
              {sitter.name}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text2)', marginBottom: '8px' }}>
              📍 {sitter.loc}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              <span style={{
                borderRadius: '20px',
                padding: '4px 10px',
                fontSize: '11px',
                fontWeight: 500,
                background: 'rgba(46, 204, 113, 0.12)',
                color: 'var(--green)',
              }}>
                {sitter.avail ? 'Available today' : 'Check calendar'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll" style={{ marginTop: '16px' }}>
        <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--text2)', lineHeight: 1.8 }}>
          {sitter.bio}
        </div>

        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontSize: '12px', color: 'var(--text2)', marginBottom: '8px' }}>Ages they work with</div>
          <div style={{ fontSize: '14px', color: 'var(--text)' }}>{sitter.ages}</div>
        </div>

        <div style={{ padding: '16px 20px' }}>
          <button
            className="btn-p"
            onClick={onOpenBooking}
            style={{ marginBottom: '12px' }}
          >
            Request a Booking →
          </button>
          <button
            className="btn-s"
            onClick={onToggleFavorite}
          >
            {isFavorite ? '❤️ Saved' : '🤍 Save'}
          </button>
        </div>
      </div>

      <div style={{
        padding: '16px 20px 32px',
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ fontSize: '26px', fontFamily: "'Playfair Display',serif", fontWeight: 500, color: 'var(--text)' }}>
          ₹{sitter.rate}
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text2)' }}>per hour</div>
      </div>
    </div>
  );
}
`;

// FILE: src/BookingSheetNestly.js
export const BookingSheetTemplate = `
import React, { useState } from 'react';

export default function BookingSheet({ isOpen, onClose, onSubmit, sitter }) {
  const [date, setDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('6 PM–10 PM');
  const [children, setChildren] = useState(1);

  if (!isOpen || !sitter) return null;

  return (
    <div className="sheet-overlay open" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-handle" />
        <div className="sheet-title">Request a Booking</div>
        <div className="sheet-sub">with {sitter.name} · ₹{sitter.rate}/hr</div>

        <div className="form-group">
          <label className="form-label">Date</label>
          <input
            className="form-input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Time slot</label>
          <div className="time-slots">
            {['9 AM–1 PM', '1 PM–5 PM', '6 PM–10 PM'].map((slot) => (
              <button
                key={slot}
                className={`time-slot ${selectedSlot === slot ? 'sel' : ''}`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Number of children</label>
          <div className="filter-row" style={{ marginBottom: 0 }}>
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className={`filter-opt ${children === n ? 'sel' : ''}`}
                onClick={() => setChildren(n)}
              >
                {n === 4 ? '4+' : \`\${n} child\`}
              </button>
            ))}
          </div>
        </div>

        <div className="price-preview">
          <div className="pp-row"><span>Rate</span><span>₹{sitter.rate}/hr</span></div>
          <div className="pp-row"><span>Duration</span><span>4 hours</span></div>
          <div className="pp-row"><span>Platform fee</span><span>₹50</span></div>
          <div className="pp-row"><span>Total</span><span style={{ color: 'var(--accent)' }}>₹{sitter.rate * 4 + 50}</span></div>
        </div>

        <button className="btn-p" onClick={onSubmit}>
          Send Request →
        </button>
      </div>
    </div>
  );
}
`;

// FILE: src/FilterSheetNestly.js
export const FilterSheetTemplate = `
import React, { useState } from 'react';

export default function FilterSheet({ isOpen, onClose, onApply }) {
  const [rate, setRate] = useState(300);
  const [rating, setRating] = useState(4);

  if (!isOpen) return null;

  return (
    <div className="sheet-overlay open" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-handle" />
        <div className="sheet-title">Filters</div>

        <div style={{ marginBottom: '16px' }}>
          <label className="form-label">Max hourly rate</label>
          <div className="range-val"><span>₹100</span><span>₹{rate}</span></div>
          <input
            type="range"
            min="100"
            max="600"
            value={rate}
            step="10"
            onChange={(e) => setRate(e.target.value)}
            style={{ width: '100%', accentColor: 'var(--accent)', cursor: 'pointer' }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label className="form-label">Min rating</label>
          <div className="range-val"><span>Any</span><span>{rating}★</span></div>
          <input
            type="range"
            min="0"
            max="5"
            value={rating}
            step="0.5"
            onChange={(e) => setRating(e.target.value)}
            style={{ width: '100%', accentColor: 'var(--accent)', cursor: 'pointer' }}
          />
        </div>

        <div className="btn-row">
          <button className="btn-s" onClick={onClose}>Reset</button>
          <button className="btn-p" onClick={onApply}>Apply Filters</button>
        </div>
      </div>
    </div>
  );
}
`;

export const ToastTemplate = `
import React, { useEffect, useState } from 'react';

export default function Toast({ message }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  return <div className="toast show">{message}</div>;
}
`;

console.log('All component templates ready. Copy each template to its respective file.');
