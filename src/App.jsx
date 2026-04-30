import React, { useState, useEffect } from 'react';
import CSSCameraBackground from './components/CSSCameraBackground';
import Dock from './components/Dock';
import SettingsPanel from './components/SettingsPanel';
import './App.css';

const DEFAULT_LINKS = [
  { id: '1', name: 'TaoBao', url: 'https://www.taobao.com', iconType: 'shop' },
  { id: '2', name: 'bilibili', url: 'https://www.bilibili.com', iconType: 'play' },
  { id: '3', name: 'GitHub', url: 'https://github.com', iconType: 'folder' },
  { id: '4', name: 'Deepseek', url: 'https://chat.deepseek.com', iconType: 'chat' },
];

function App() {
  const [links, setLinks] = useState([]);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [colorGrade, setColorGrade] = useState(() => {
    return localStorage.getItem('color-grade') || 'teal-orange';
  });

  useEffect(() => {
    const saved = localStorage.getItem('dock-links');
    if (saved) {
      try {
        setLinks(JSON.parse(saved));
      } catch {
        setLinks(DEFAULT_LINKS);
      }
    } else {
      setLinks(DEFAULT_LINKS);
    }
  }, []);

  useEffect(() => {
    if (links.length > 0) {
      localStorage.setItem('dock-links', JSON.stringify(links));
    }
  }, [links]);

  useEffect(() => {
    localStorage.setItem('color-grade', colorGrade);
  }, [colorGrade]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOpenLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="app">
      <CSSCameraBackground colorGrade={colorGrade} />

      <div className="top-content">
        <div className="clock-widget">
          <div className="time">
            {currentTime.toLocaleTimeString('zh-CN', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      </div>

      <Dock
        links={links}
        onOpenLink={handleOpenLink}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {isSettingsOpen && (
        <SettingsPanel
          links={links}
          setLinks={setLinks}
          colorGrade={colorGrade}
          setColorGrade={setColorGrade}
          onClose={() => setIsSettingsOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
