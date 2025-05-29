function addLoopButton() {
    const existingLoopButton = document.querySelector('.loop-button');
    if (existingLoopButton) return; // Avoid duplicates
  
    const buttonContainer = document.querySelector('#top-level-buttons-computed');
    if (buttonContainer) {
      const loopButton = document.createElement('button');
      loopButton.className = 'loop-button';
      loopButton.style.display = 'flex';
      loopButton.style.alignItems = 'center';
      loopButton.style.justifyContent = 'center';
      loopButton.style.border = '1px solid rgba(255, 255, 255, 0.12)';
      loopButton.style.background = 'rgba(224, 224, 224, 0.5)'; // Lighter background
      loopButton.style.color = '#545454'; // Black text
      loopButton.style.fontSize = '14px';
      loopButton.style.fontWeight = '500';
      loopButton.style.fontFamily = 'Roboto','Arial, sans-serif'; // Set font to Arial
      loopButton.style.cursor = 'pointer';
      loopButton.style.padding = '6px 12px';
      loopButton.style.marginLeft = '8px';
      loopButton.style.borderRadius = '50px';
      loopButton.style.transition = 'background-color 0.2s, border-color 0.2s';
  
      loopButton.onmouseover = () => {
        loopButton.style.backgroundColor = 'rgba(0, 0, 0, 0.12)'; // Darker background on hover
        loopButton.style.borderColor = 'rgba(255, 255, 255, 0.3)';
      };
      loopButton.onmouseout = () => {
        loopButton.style.backgroundColor = 'rgba(224,224,224, 0.2)'; // Reset to original color
        loopButton.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      };
  
      // Add loop icon (using Unicode or an SVG)
      const icon = document.createElement('span');
      icon.innerHTML = `<svg width="20px" height="20px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M1 9c0 2.206 1.711 4 3.813 4v1c-2.654 0-4.813-2.243-4.813-5s2.159-5 4.813-5h4.229l-1.646-1.646 0.707-0.707 2.854 2.853-2.853 2.854-0.708-0.708 1.647-1.646h-4.23c-2.102 0-3.813 1.794-3.813 4zM12.187 4v1c2.102 0 3.813 1.794 3.813 4s-1.711 4-3.813 4h-4.23l1.646-1.646-0.707-0.707-2.853 2.853 2.854 2.854 0.707-0.707-1.647-1.647h4.229c2.655 0 4.814-2.243 4.814-5s-2.159-5-4.813-5z" fill="#000000" />
      </svg>`;
      icon.style.marginRight = '8px';
  
      // Add text
      const text = document.createElement('span');
      text.innerText = 'Loop';
  
      loopButton.appendChild(icon);
      loopButton.appendChild(text);
  
      let isLooping = false;
  
      loopButton.addEventListener('click', () => {
        const video = document.querySelector('video');
        if (video) {
          isLooping = !isLooping;
          video.loop = isLooping;
          loopButton.style.color = isLooping ? 'var(--yt-spec-call-to-action)' : '#545454'; // Default color when not looping
          text.innerText = isLooping ? 'Looping' : 'Loop';
  
          // Apply bold font and black text when looping
          text.style.fontWeight = isLooping ? '500' : '500'; // Bold when looping
          text.style.color = isLooping ? '#545454' : '#545454'; // Keep text black
        }
      });
  
      buttonContainer.appendChild(loopButton);
    }
}
  
function observeDOMChanges() {
    const observer = new MutationObserver(() => {
      addLoopButton();
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
}
  
addLoopButton();
observeDOMChanges();
