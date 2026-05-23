import React, { useState, useEffect } from 'react';

export default function Onboarding({ onComplete, onRoleSelect }) {
  const [step, setStep] = useState(0);
  const [selectedRole, setSelectedRole] = useState('parent');

  const slides = [
    { emoji: '🏠', title: 'Trusted childcare, close to home', sub: 'Find vetted babysitters and nannies in your neighbourhood. Background-checked and parent-reviewed.' },
    { emoji: '📅', title: 'Book in minutes, not hours', sub: 'View real-time availability, send booking requests, and get confirmed — all in one place.' },
    { emoji: '💬', title: 'Stay in the loop, always', sub: 'Chat with sitters, receive check-in updates, and manage everything from your phone.' },
    { emoji: '✨', title: 'I am a...', sub: null, isRolePick: true },
  ];

  const handleNext = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else {
      onRoleSelect(selectedRole);
      onComplete();
    }
  };

  const current = slides[step];

  return (
    <div className="onboard">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', flexShrink: 0 }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '22px', fontWeight: 500, color: 'var(--text)' }}>
          nestly
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text2)', cursor: 'pointer' }} onClick={onComplete}>
          Skip
        </div>
      </div>

      <div className="ob-slides">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`ob-slide ${i === step ? 'active' : i < step ? 'prev' : ''}`}
            style={{ display: i === step ? 'flex' : 'none' }}
          >
            <div className="ob-emoji">{slide.emoji}</div>
            <div className="ob-title">{slide.title}</div>
            {slide.sub && <div className="ob-sub">{slide.sub}</div>}
            {slide.isRolePick && (
              <div className="role-pick" style={{ width: '100%', marginTop: '8px' }}>
                <div
                  className={`role-card ${selectedRole === 'parent' ? 'sel' : ''}`}
                  onClick={() => setSelectedRole('parent')}
                >
                  <div className="role-card-emoji">👪</div>
                  <div className="role-card-title">Parent</div>
                  <div className="role-card-sub">Find trusted sitters for my children</div>
                </div>
                <div
                  className={`role-card ${selectedRole === 'sitter' ? 'sel' : ''}`}
                  onClick={() => setSelectedRole('sitter')}
                >
                  <div className="role-card-emoji">🌟</div>
                  <div className="role-card-title">Sitter</div>
                  <div className="role-card-sub">Offer my childcare services</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="ob-dots">
        {slides.map((_, i) => (
          <div key={i} className={`ob-dot ${i === step ? 'active' : ''}`} />
        ))}
      </div>

      <div className="ob-footer">
        <button className="btn-p" onClick={handleNext}>
          {step === slides.length - 1 ? "Let's Go!" : 'Get Started'}
        </button>
      </div>
    </div>
  );
}
