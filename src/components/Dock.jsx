import React from 'react';
import { getIconComponent, SettingsIcon } from './Icons';
import './Dock.css';

const Dock = ({ links, onOpenLink, onOpenSettings }) => {
  return (
    <div className="dock-container">
      <div className="dock">
        <div className="dock-items">
          {links.map((link) => {
            const IconComponent = getIconComponent(link.iconType);
            return (
              <div
                key={link.id}
                className="dock-item"
                onClick={() => onOpenLink(link.url)}
                title={link.name}
              >
                <div className="dock-icon">
                  <IconComponent size={48} />
                </div>
                <span className="dock-label">{link.name}</span>
              </div>
            );
          })}
        </div>

        <div className="dock-separator" />

        <div className="dock-item dock-settings" onClick={onOpenSettings}>
          <div className="dock-icon">
            <SettingsIcon size={48} />
          </div>
          <span className="dock-label">设置</span>
        </div>
      </div>
    </div>
  );
};

export default Dock;
