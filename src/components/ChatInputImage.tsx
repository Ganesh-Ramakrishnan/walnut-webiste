"use client";

export default function ChatInputImage() {
  return (
    <div className="chat-img-wrapper">
      {/* Animated gradient glow behind the box */}
      <div className="chat-img-glow chat-img-glow-left" />
      <div className="chat-img-glow chat-img-glow-right" />

      {/* Gradient border container */}
      <div className="chat-img-border">
        <div className="chat-img-box">
          {/* Input area */}
          <div className="chat-img-input">
            <span className="chat-img-placeholder">How can I help you?</span>
          </div>

          {/* Action buttons row */}
          <div className="chat-img-actions">
            <div className="chat-img-btns">
              <button className="chat-img-btn" tabIndex={-1}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
                Attach files
              </button>
              <button className="chat-img-btn" tabIndex={-1}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                Deep thinking
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
            <button className="chat-img-send" tabIndex={-1}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
