# 🚀 QUICK COMMAND REFERENCE

## Copy-Paste These Commands In Order

---

## STEP 1: Navigate to Project
```bash
cd "c:\Users\Rohit\OneDrive\Desktop\Meditrace\medtrace"
```
✅ Should see: `medtrace>`

---

## STEP 2: Verify Everything
```bash
node -v
npm -v
```
✅ Should see: version numbers (e.g., v18.x.x)

---

## STEP 3: Check React is installed
```bash
npm list react react-dom
```
✅ Should see: React version numbers

---

## STEP 4: List files in src (to verify)
```bash
dir src
```
✅ Should see: App.js, App.css, index.js, etc.

---

## STEP 5: Install all dependencies
```bash
npm install
```
✅ Should see: "added X packages"

---

## STEP 6: Start the development server
```bash
npm start
```
✅ Should see: 
```
Compiled successfully!
You can now view medtrace in the browser.
Local: http://localhost:3000
```

---

## STEP 7: Open Browser
- Go to: **http://localhost:3000**
- You should see the Nestly app!

---

## ⏹️ To Stop the App
**In Terminal:** Press `Ctrl + C`

---

## 🔄 To Restart the App
**In Terminal:** Type `npm start` again

---

## 📝 IMPORTANT FILES TO COPY

**Copy these 5 files to `src/` folder:**
1. AppNestly.js
2. AppNestly.css
3. OnboardingNestly.js
4. HomeNestly.js
5. BrowseNestly.js

**Create 8 more from templates in `COMPONENT_TEMPLATES.js`:**
1. MessagesNestly.js
2. FavoritesNestly.js
3. ProfileNestly.js
4. NotificationsNestly.js
5. SitterProfileNestly.js
6. BookingSheetNestly.js
7. FilterSheetNestly.js
8. ToastNestly.js

---

## ✏️ UPDATE ONE FILE

**Edit: `src/index.js`**

Find this line:
```javascript
import App from './App';
```

Change it to:
```javascript
import AppNestly from './AppNestly';
```

Find this line:
```javascript
<App />
```

Change it to:
```javascript
<AppNestly />
```

Save the file!

---

## 🎯 TOTAL TIME BREAKDOWN

| Step | Time | What |
|------|------|------|
| 1. Navigate | 30 sec | `cd` to folder |
| 2. Verify | 1 min | Check Node.js |
| 3. Copy files | 3 min | Copy 5 files |
| 4. Create components | 8 min | Create 8 files |
| 5. Update config | 2 min | Edit index.js |
| 6. Install | 3 min | `npm install` |
| 7. Start | 1 min | `npm start` |
| 8. Open browser | 30 sec | Go to localhost |
| 9. Test | 3 min | Click around |
| **TOTAL** | **~23 min** | **Done!** |

---

## ✨ WHAT YOU'LL SEE

### When App Starts:
```
Compiled successfully!

You can now view medtrace in the browser.

Local:            http://localhost:3000
On Your Network:  http://192.168.x.x:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

### In Browser:
- Dark theme interface ✅
- Nestly logo ✅
- Onboarding slides ✅
- Featured sitters ✅
- All features working ✅

---

## 🆘 IF SOMETHING GOES WRONG

### Error: "Cannot find module"
```bash
npm install
```

### Error: "Port 3000 in use"
```bash
npm start -- --port 3001
```

### Error: "npm: command not found"
- Install Node.js from nodejs.org
- Restart terminal

### Blank screen
- Open browser console (F12)
- Check for red errors
- Fix and reload (Ctrl+R)

---

## 🎉 SUCCESS INDICATORS

✅ Terminal shows "Compiled successfully!"
✅ Browser shows Nestly app
✅ Navigation buttons work
✅ Search works
✅ Favorites toggle works
✅ All screens display

If you see these = **YOU'RE DONE!** 🎊

---

## 📱 TERMINAL COMMANDS REFERENCE

| Command | What it does |
|---------|-------------|
| `cd <folder>` | Navigate to folder |
| `node -v` | Check Node version |
| `npm -v` | Check npm version |
| `npm install` | Install dependencies |
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |
| `Ctrl + C` | Stop running command |

---

## 🎓 LEARNING TIPS

1. **Keep terminal open** while developing
2. **Check browser console** for errors (F12)
3. **Reload page** with Ctrl+R if needed
4. **Save files** before testing changes
5. **Read error messages** carefully

---

## 🎯 FINAL CHECKLIST

- [ ] Terminal open in medtrace folder
- [ ] Node.js installed (node -v works)
- [ ] 5 files copied to src/
- [ ] 8 components created
- [ ] src/index.js updated
- [ ] npm install completed
- [ ] npm start running
- [ ] http://localhost:3000 loading
- [ ] App displays correctly
- [ ] All features working

**When all checked = SUCCESS!** ✅

---

**You've got this! 🚀**
