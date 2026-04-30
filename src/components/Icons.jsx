import React from 'react';

const iconStyle = {
  width: '100%',
  height: '100%',
};

export const GlobeIcon = ({ color = '#fff', size = 48 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} style={iconStyle}>
    <circle cx="24" cy="24" r="20" fill="none" stroke={color} strokeWidth="2.5" />
    <ellipse cx="24" cy="24" rx="10" ry="20" fill="none" stroke={color} strokeWidth="2" />
    <line x1="4" y1="24" x2="44" y2="24" stroke={color} strokeWidth="2" />
    <path d="M8 14 Q24 10 40 14" fill="none" stroke={color} strokeWidth="1.5" />
    <path d="M8 34 Q24 38 40 34" fill="none" stroke={color} strokeWidth="1.5" />
  </svg>
);

export const FolderIcon = ({ color = '#fff', size = 48 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} style={iconStyle}>
    <path
      d="M6 12 Q6 8 10 8 L20 8 L24 14 L38 14 Q42 14 42 18 L42 36 Q42 40 38 40 L10 40 Q6 40 6 36 Z"
      fill={color}
      opacity="0.9"
    />
    <path
      d="M6 18 L42 18 L42 36 Q42 40 38 40 L10 40 Q6 40 6 36 Z"
      fill={color}
      opacity="0.7"
    />
  </svg>
);

export const PlayIcon = ({ color = '#fff', size = 48 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} style={iconStyle}>
    <circle cx="24" cy="24" r="20" fill={color} opacity="0.9" />
    <polygon points="19,14 36,24 19,34" fill="#333" />
  </svg>
);

export const MusicIcon = ({ color = '#fff', size = 48 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} style={iconStyle}>
    <path
      d="M18 36 L18 16 L38 12 L38 32"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="14" cy="36" r="5" fill={color} />
    <circle cx="34" cy="32" r="5" fill={color} />
  </svg>
);

export const ChatIcon = ({ color = '#fff', size = 48 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} style={iconStyle}>
    <path
      d="M8 10 Q8 6 12 6 L36 6 Q40 6 40 10 L40 28 Q40 32 36 32 L16 32 L10 40 L10 32 L12 32 Q8 32 8 28 Z"
      fill={color}
      opacity="0.9"
    />
    <line x1="16" y1="16" x2="32" y2="16" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="16" y1="22" x2="28" y2="22" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const ShopIcon = ({ color = '#fff', size = 48 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} style={iconStyle}>
    <path
      d="M10 16 L38 16 L34 40 L14 40 Z"
      fill={color}
      opacity="0.9"
    />
    <path
      d="M16 16 L16 10 Q16 6 24 6 Q32 6 32 10 L32 16"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="18" cy="26" r="2" fill="#333" />
    <circle cx="30" cy="26" r="2" fill="#333" />
  </svg>
);

export const CameraIcon = ({ color = '#fff', size = 48 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} style={iconStyle}>
    <rect x="6" y="14" width="36" height="26" rx="4" fill={color} opacity="0.9" />
    <path d="M18 14 L20 8 L28 8 L30 14" fill={color} opacity="0.9" />
    <circle cx="24" cy="27" r="8" fill="none" stroke="#333" strokeWidth="3" />
    <circle cx="24" cy="27" r="4" fill="#333" />
    <circle cx="36" cy="19" r="2" fill="#333" />
  </svg>
);

export const DocIcon = ({ color = '#fff', size = 48 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} style={iconStyle}>
    <path
      d="M12 6 L30 6 L36 12 L36 42 L12 42 Q10 42 10 40 L10 8 Q10 6 12 6 Z"
      fill={color}
      opacity="0.9"
    />
    <path d="M30 6 L30 12 L36 12" fill={color} opacity="0.7" />
    <line x1="16" y1="20" x2="32" y2="20" stroke="#333" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="26" x2="32" y2="26" stroke="#333" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="32" x2="26" y2="32" stroke="#333" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const SettingsIcon = ({ color = '#fff', size = 48 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{iconStyle }} // 假设 iconStyle 已在你的作用域中定义
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const LinkIcon = ({ color = '#fff', size = 48 }) => (
  <svg viewBox="0 0 48 48" width={size} height={size} style={iconStyle}>
    <path
      d="M20 28 L14 34 Q10 38 14 42 L18 46 Q22 50 26 46 L32 40"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M28 20 L34 14 Q38 10 34 6 L30 2 Q26 -2 22 2 L16 8"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line x1="18" y1="30" x2="30" y2="18" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const iconComponents = {
  globe: GlobeIcon,
  folder: FolderIcon,
  play: PlayIcon,
  music: MusicIcon,
  chat: ChatIcon,
  shop: ShopIcon,
  camera: CameraIcon,
  doc: DocIcon,
  settings: SettingsIcon,
  link: LinkIcon,
};

export const getIconComponent = (iconType) => {
  return iconComponents[iconType] || LinkIcon;
};

export const iconTypes = [
  { id: 'globe', name: '地球', icon: GlobeIcon },
  { id: 'folder', name: '文件夹', icon: FolderIcon },
  { id: 'play', name: '播放', icon: PlayIcon },
  { id: 'music', name: '音乐', icon: MusicIcon },
  { id: 'chat', name: '聊天', icon: ChatIcon },
  { id: 'shop', name: '购物', icon: ShopIcon },
  { id: 'camera', name: '相机', icon: CameraIcon },
  { id: 'doc', name: '文档', icon: DocIcon },
  { id: 'link', name: '链接', icon: LinkIcon },
];
