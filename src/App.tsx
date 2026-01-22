export default function App() {
  return (
    <div className="app">
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
