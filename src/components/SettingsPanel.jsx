import React, { useState, useEffect } from 'react';
import { iconTypes, getIconComponent } from './Icons';
import './SettingsPanel.css';

const FILTER_OPTIONS = [
  { id: 'teal-orange', name: '青橙电影' },
  { id: 'cold', name: '怀旧冷调' },
  { id: 'vintage', name: '复古胶片' },
  { id: 'none', name: '无滤镜' },
];

const SettingsPanel = ({ links, setLinks, colorGrade, setColorGrade, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error('Fullscreen error:', err);
    }
  };
  const handleAddLink = () => {
    const newLink = {
      id: Date.now().toString(),
      name: '',
      url: '',
      iconType: 'link',
    };
    setLinks([...links, newLink]);
  };

  const handleUpdateLink = (id, field, value) => {
    setLinks(links.map((link) =>
      link.id === id ? { ...link, [field]: value } : link
    ));
  };

  const handleDeleteLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    const newLinks = [...links];
    [newLinks[index - 1], newLinks[index]] = [newLinks[index], newLinks[index - 1]];
    setLinks(newLinks);
  };

  const handleMoveDown = (index) => {
    if (index === links.length - 1) return;
    const newLinks = [...links];
    [newLinks[index], newLinks[index + 1]] = [newLinks[index + 1], newLinks[index]];
    setLinks(newLinks);
  };

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-panel" onClick={(e) => e.stopPropagation()}>
        <div className="settings-header">
          <h2>管理链接</h2>
          <div className="header-actions">
            <button className="fullscreen-btn" onClick={toggleFullscreen} title={isFullscreen ? '退出全屏' : '全屏显示'}>
              {isFullscreen ? (
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              )}
            </button>
            <button className="settings-close" onClick={onClose}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="settings-content">
          <div className="filter-section">
            <label className="filter-label">背景滤镜</label>
            <div className="filter-options">
              {FILTER_OPTIONS.map((filter) => (
                <button
                  key={filter.id}
                  className={`filter-btn ${colorGrade === filter.id ? 'active' : ''}`}
                  onClick={() => setColorGrade(filter.id)}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>

          <div className="links-section">
            <label className="section-label">链接管理</label>
          {links.length === 0 ? (
            <div className="empty-state">
              暂无链接，点击下方按钮添加
            </div>
          ) : (
            links.map((link, index) => (
              <div key={link.id} className="link-item">
                <div className="link-icon-select">
                  <div className="current-icon">
                    {React.createElement(getIconComponent(link.iconType), { size: 32 })}
                  </div>
                  <div className="icon-grid">
                    {iconTypes.map(({ id, icon: Icon }) => (
                      <div
                        key={id}
                        className={`icon-option ${link.iconType === id ? 'selected' : ''}`}
                        onClick={() => handleUpdateLink(link.id, 'iconType', id)}
                      >
                        <Icon size={24} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="link-fields">
                  <input
                    type="text"
                    placeholder="名称"
                    value={link.name}
                    onChange={(e) => handleUpdateLink(link.id, 'name', e.target.value)}
                    className="link-input"
                  />
                  <input
                    type="url"
                    placeholder="https://example.com"
                    value={link.url}
                    onChange={(e) => handleUpdateLink(link.id, 'url', e.target.value)}
                    className="link-input"
                  />
                </div>

                <div className="link-actions">
                  <button
                    className="action-btn"
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                    title="上移"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path d="M12 4l-8 8h5v8h6v-8h5z" fill="currentColor" />
                    </svg>
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => handleMoveDown(index)}
                    disabled={index === links.length - 1}
                    title="下移"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path d="M12 20l8-8h-5V4H9v8H4z" fill="currentColor" />
                    </svg>
                  </button>
                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDeleteLink(link.id)}
                    title="删除"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path
                        d="M6 6l12 12M6 18L18 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
          </div>
        </div>

        <div className="settings-footer">
          <button className="add-btn" onClick={handleAddLink}>
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            添加新链接
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
