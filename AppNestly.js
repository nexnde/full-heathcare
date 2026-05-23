import React, { useState, useEffect } from 'react';
import './AppNestly.css';
import Onboarding from './components/nestly/Onboarding';
import Home from './components/nestly/Home';
import Browse from './components/nestly/Browse';
import SitterProfile from './components/nestly/SitterProfile';
import Messages from './components/nestly/Messages';
import Favorites from './components/nestly/Favorites';
import Profile from './components/nestly/Profile';
import Notifications from './components/nestly/Notifications';
import BookingSheet from './components/nestly/BookingSheet';
import FilterSheet from './components/nestly/FilterSheet';
import Toast from './components/nestly/Toast';

const SITTERS_DATA = [
  { id: 'priya', name: 'Priya Mehta', emoji: '👩', bg: 'rgba(255,107,74,0.12)', loc: 'Navrangpura', dist: '0.8km', rating: 4.9, reviews: 38, exp: '4 yrs', rate: 280, avail: true, verified: true, tags: ['Toddlers', 'CPR Cert', 'Homework'], bio: "Hi! I'm Priya, a certified childcare provider with 4+ years working with toddlers and school-age children. CPR trained, punctual, and love making learning fun.", ages: '1–12 yrs', resp: '~45 min' },
  { id: 'arjun', name: 'Arjun Patel', emoji: '👨', bg: 'rgba(59,130,246,0.12)', loc: 'Satellite', dist: '2.1km', rating: 4.8, reviews: 52, exp: '6 yrs', rate: 320, avail: true, verified: true, tags: ['School-age', 'Sports', 'Special needs'], bio: 'Experienced male childcare professional with 6 years. Ex-school teacher. Excellent with active kids and sports activities.', ages: '3–16 yrs', resp: '~30 min' },
  { id: 'divya', name: 'Divya Joshi', emoji: '👩', bg: 'rgba(255,217,61,0.12)', loc: 'Maninagar', dist: '3.4km', rating: 5.0, reviews: 74, exp: '8 yrs', rate: 380, avail: true, verified: true, tags: ['Newborns', 'Twins', 'Montessori'], bio: '8 years experience with newborns, toddlers and multiples. Montessori trained and certified. The most experienced sitter in your area.', ages: '0–8 yrs', resp: '~15 min' },
  { id: 'neha', name: 'Neha Shah', emoji: '👩', bg: 'rgba(46,204,113,0.12)', loc: 'Vastrapur', dist: '1.6km', rating: 4.4, reviews: 19, exp: '2 yrs', rate: 220, avail: false, verified: false, tags: ['Toddlers', 'Arts & Crafts'], bio: 'Friendly and creative sitter studying Early Childhood Education. Love arts, crafts and outdoor play.', ages: '2–10 yrs', resp: '~2 hrs' },
  { id: 'rohan', name: 'Rohan Desai', emoji: '👨', bg: 'rgba(78,205,196,0.12)', loc: 'Bopal', dist: '4.2km', rating: 4.7, reviews: 31, exp: '5 yrs', rate: 290, avail: true, verified: true, tags: ['School-age', 'Coding', 'Science'], bio: 'Tech-savvy childcare professional. Teaches coding basics and science experiments to kids aged 5+.', ages: '5–16 yrs', resp: '~1 hr' },
  { id: 'kavya', name: 'Kavya Nair', emoji: '👩', bg: 'rgba(255,107,74,0.08)', loc: 'Paldi', dist: '2.8km', rating: 4.6, reviews: 23, exp: '3 yrs', rate: 250, avail: true, verified: true, tags: ['Toddlers', 'Music', 'Dance'], bio: 'Music and dance-loving sitter. Makes every session fun with songs, stories and movement.', ages: '1–8 yrs', resp: '~1 hr' },
];

export default function AppNestly() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [selectedRole, setSelectedRole] = useState('parent');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [bookingSheetOpen, setBookingSheetOpen] = useState(false);
  const [filterSheetOpen, setFilterSheetOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [backScreen, setBackScreen] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setShowOnboarding(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const showMsg = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2800);
  };

  const toggleFavorite = (sitterId) => {
    const newFavs = new Set(favorites);
    if (newFavs.has(sitterId)) {
      newFavs.delete(sitterId);
    } else {
      newFavs.add(sitterId);
    }
    setFavorites(newFavs);
    showMsg(newFavs.has(sitterId) ? 'Saved to favourites ❤️' : 'Removed from saved');
  };

  const navigateTo = (screen) => {
    setBackScreen(activeScreen);
    setActiveScreen(screen);
  };

  const navigateBack = () => {
    setActiveScreen(backScreen);
  };

  const openProfile = (sitterId) => {
    setSelectedProfile(sitterId);
    setBackScreen(activeScreen);
    navigateTo('profile');
  };

  return (
    <div className="nestly-app">
      <div className="root">
        {showOnboarding && (
          <Onboarding
            onComplete={() => setShowOnboarding(false)}
            onRoleSelect={setSelectedRole}
          />
        )}

        {activeScreen === 'home' && (
          <Home
            sitters={SITTERS_DATA}
            favorites={favorites}
            onOpenProfile={openProfile}
            onShowNotifications={() => navigateTo('notifications')}
            onNavigate={navigateTo}
            onShowToast={showMsg}
          />
        )}

        {activeScreen === 'browse' && (
          <Browse
            sitters={SITTERS_DATA}
            favorites={favorites}
            onOpenProfile={openProfile}
            onNavigate={navigateTo}
          />
        )}

        {activeScreen === 'profile' && selectedProfile && (
          <SitterProfile
            sitter={SITTERS_DATA.find((s) => s.id === selectedProfile)}
            isFavorite={favorites.has(selectedProfile)}
            onToggleFavorite={() => toggleFavorite(selectedProfile)}
            onOpenBooking={() => setBookingSheetOpen(true)}
            onBack={navigateBack}
            onNavigate={navigateTo}
            onShowToast={showMsg}
          />
        )}

        {activeScreen === 'messages' && (
          <Messages onNavigate={navigateTo} onShowToast={showMsg} />
        )}

        {activeScreen === 'favorites' && (
          <Favorites
            sitters={SITTERS_DATA}
            favorites={favorites}
            onOpenProfile={openProfile}
            onNavigate={navigateTo}
          />
        )}

        {activeScreen === 'me' && (
          <Profile
            role={selectedRole}
            onRoleChange={setSelectedRole}
            onNavigate={navigateTo}
            onShowToast={showMsg}
          />
        )}

        {activeScreen === 'notifications' && (
          <Notifications onNavigate={navigateTo} />
        )}

        <BookingSheet
          isOpen={bookingSheetOpen}
          onClose={() => setBookingSheetOpen(false)}
          onSubmit={() => {
            setBookingSheetOpen(false);
            navigateTo('messages');
            showMsg('Booking request sent! 🎉');
          }}
          sitter={selectedProfile ? SITTERS_DATA.find((s) => s.id === selectedProfile) : null}
        />

        <FilterSheet
          isOpen={filterSheetOpen}
          onClose={() => setFilterSheetOpen(false)}
          onApply={() => {
            setFilterSheetOpen(false);
            showMsg('Filters applied ✓');
          }}
        />

        {showToast && <Toast message={toastMessage} />}
      </div>
    </div>
  );
}
