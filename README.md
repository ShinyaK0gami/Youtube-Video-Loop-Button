# Youtube-Video-Loop-Button
This Video Loop Button is doesn't need access to your websites, it just gets the job done and that is to loop your music, videos on Youtube

Here's the updated `README.md` with a new section **"📦 How to Pack the Extension"** included:

---

```markdown
# 🔁 YouTube Loop Button - Chrome Extension

A lightweight Chrome extension that adds a **Loop** button next to YouTube's native controls like **Like**, **Share**, and **Subscribe**. Easily loop any YouTube video with a single click — no need to right-click or use the context menu.

---

## ✨ Features

- 🌀 Adds a **Loop** button to YouTube video pages
- 🎯 Seamlessly integrates with YouTube's UI design
- 🔄 One-click toggle to enable or disable looping
- 🧠 Remembers your setting while watching

---

## 📷 Preview

![Loop button preview](./image.png)

---

## 📁 File Structure

```

youtube-loop-extension/
├── manifest.json
├── content.js
├── background.js
├── popup.html (optional)
├── popup.js (optional)
├── image.png
└── README.md

````

---

## 🚀 Installation (Unpacked for Development)

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/yourusername/youtube-loop-extension.git
````

2. Open **Chrome** and go to `chrome://extensions/`

3. Enable **Developer Mode** (top right corner)

4. Click **"Load unpacked"** and select the project folder

5. Navigate to any YouTube video — the **Loop** button should now appear next to the Share button!

---

## 📦 How to Pack the Extension

To distribute or upload the extension to the Chrome Web Store:

1. Open `chrome://extensions/` in your browser
2. Enable **Developer Mode**
3. Click **"Pack extension"**
4. In the dialog:

   * **Extension root directory:** Select the folder containing `manifest.json`
   * (Optional) **Private key file:** Leave blank to generate a new one
5. Click **"Pack Extension"**
6. Chrome will generate:

   * A `.crx` file (the extension package)
   * A `.pem` file (your private key — keep this safe!)
7. You can now:

   * Distribute the `.crx` manually
   * Or upload your folder (without `.crx` and `.pem`) to the **Chrome Web Store**

> ⚠️ Keep the `.pem` file safe and secure. You’ll need it to update the extension later.

---

## 🛠️ Development Notes

* Built using **Manifest V3**
* Background script uses Chrome’s `scripting` API
* Content script dynamically injects the button after the YouTube page fully loads
* Styled to match native YouTube buttons

---

## 💡 Future Improvements

* Add an options page for persistent preferences
* Add loop segment selection (start time / end time)
* Dark theme support toggle

---

## 📃 License

MIT License © 2025 \Shinya Kogami

```

---

Let me know if you also want instructions on publishing to the Chrome Web Store or converting to Firefox.
```
