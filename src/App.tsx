export default function App() {
  return (
    <div className="app">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-left">
          <span className="time">9:41</span>
          <svg className="arrow-up-icon" viewBox="0 0 8 8" fill="currentColor">
            <path d="M4 0 L4 6 L3 6 L4 7 L5 6 L4 6 Z" />
            <path d="M0 7 L8 7 L8 8 L0 8 Z" />
          </svg>
        </div>
        <div className="status-right">
          <svg className="status-icon" viewBox="0 0 18 12" fill="currentColor">
            <path d="M0 8 L4 4 L7 7 L11 3 L18 10 L18 12 L0 12 Z" />
          </svg>
          <svg className="status-icon wifi-icon" viewBox="0 0 18 14" fill="currentColor">
            <path d="M9 0 C5 0 2 1 0 3 L1 4 C3 2 6 1 9 1 C12 1 15 2 17 4 L18 3 C16 1 13 0 9 0 Z" />
            <path d="M9 4 C7 4 5 5 4 6 L5 7 C6 6 7 5 9 5 C11 5 12 6 13 7 L14 6 C13 5 11 4 9 4 Z" />
            <path d="M9 8 C8 8 8 8 7 9 L9 11 L11 9 C10 8 10 8 9 8 Z" />
          </svg>
          <svg className="status-icon battery-icon" viewBox="0 0 25 12" fill="currentColor">
            <rect x="1" y="3" width="18" height="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="20" y="5" width="2" height="2" fill="currentColor" />
            <rect x="2" y="4" width="16" height="4" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="title">Please change your phone's settings to find chargers</h1>
        
        <p className="instruction">You need to:</p>

        <div className="permissions-list">
          <div className="permission-item">
            <div className="warning-icon">!</div>
            <div className="permission-text">
              <span className="permission-label">Location Permissions</span>
              <span className="permission-action">Change to 'Always'</span>
            </div>
          </div>

          <div className="permission-item">
            <div className="warning-icon">!</div>
            <div className="permission-text">
              <span className="permission-label">Notifications</span>
              <span className="permission-action">Turn on 'Allow Notifications'</span>
            </div>
          </div>
        </div>

        <button className="settings-button">Go to settings</button>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item active">
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <span className="nav-label">Find</span>
        </div>
        <div className="nav-item">
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
          <span className="nav-label">Charges</span>
        </div>
        <div className="nav-item">
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <path d="M12 17h.01"></path>
          </svg>
          <span className="nav-label">Support</span>
        </div>
      </div>
    </div>
  )
}
