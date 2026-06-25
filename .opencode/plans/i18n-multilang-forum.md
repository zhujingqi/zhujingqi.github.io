# Multi-Language Support for forum/index.html

## Goal
Add support for 4 languages (zh-CN, en, es, de, zh-TW) with auto-detection and pulldown menus on login and home pages.

## Plan

### Step 1: Add Translation Dictionary + `t()` Function
Insert after `<script>` line, before `document.addEventListener("DOMContentLoaded",...)`:
- `TRANSLATIONS` object with ~120+ keys covering ALL user-visible strings
- `currentLang` variable initialized from `localStorage` or `navigator.language`
- `t(key, ...args)` function with `{0}`, `{1}` interpolation
- `changeLanguage(lang)` function that saves to localStorage and re-renders UI
- `refreshUILanguage()` that updates static elements and triggers content refresh

### Step 2: Add Language Selector Dropdowns
- **Login page** (`#welcomePage`): Add `<select id="langSelect">` below the title image, with 5 options
- **Home page** (`#logoRow`): Add `<select id="langSelectMain">` next to `#notifBtn` button
- Both sync via `changeLanguage()` → `localStorage`

### Step 3: CSS for Language Selectors
```css
.langSelect {
  height: 36px;
  padding: 0 8px;
  border-radius: 999px;
  background: var(--card);
  color: var(--text);
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
}
```

### Step 4: Replace All Hardcoded Strings
Systematic replacement across the entire file:

**HTML Templates (static):**
1. Navigation buttons (line ~2334): `首页`→`t("nav_home")`, etc. — wrap in JS that calls `t()` at init
2. Login form placeholders (line ~2346): `用户名`→`t("login_username")` etc.
3. Login button text: `登录`→set via `t("login_btn")`
4. Guest button: `访客模式`→`t("guest_btn")`
5. Registration link text
6. Registration page text
7. Footer text
8. Notice panel content
9. Fortune box text
10. Editor page labels
11. Rankings page labels

**JavaScript template literals:**
- `loadPosts()` — post cards (line ~4319-4365): user names are data (not translated), but button labels like `分享`, `点赞者`, `踩帖者`, `删除`, `评论...`, `发送` need `t()`
- `openSinglePost()` — single post view (line ~3569-3621): same button labels
- `renderPostBody()` — `展开`/`收起`, `点击加载图片`, `显示内容`
- `viewUser()` — profile page (line ~4861-4986): all UI labels
- `renderComments()` — comment delete button
- `openShop()` — shop UI
- `openLottery()` — lottery UI
- `openNotifications()` — notifications UI
- `openVotePeople()` — vote viewer
- `renderPager()` — `跳转` placeholder
- `openImagePicker()` / `openMusicPicker()`
- `openAvatarEditor()`
- `openPostBgPicker()`
- `deletePost()` confirmation modal
- `loadNewUsers()` — `欢迎新用户`, `ERROR`
- `loadOnlineUsers()` — `在线 {0}`, `当前没有在线用户`
- `loadStats()` — station stats HTML
- `loadUserList()` — `用户名`, `金币数`, `Loading...`
- `renderLevelProgress()`
- `showCoinMsg()` — `金币 +{0}！`, `金币 -{0}！`
- `changeCoins()` — penalty message
- Modal calls throughout (terms, about, sponsor, download, rules)

**Modal strings** (~30 locations):
- `modal("...")` calls need `modal(t("key"))` or `modal(t("key", arg1))`

**Error messages** (~20 locations):
- `return modal("...")` → `return modal(t("key"))`

### Step 5: Filter Tags
The `filterTags` array (`["全部","公告",...defaultTags,"其它"]`) needs to use translated labels for display but keep original tag values for DB queries. The tags stored in DB (`学习`, `日常`, `搞笑`, `提问`, `公告`) remain as-is; only the displayed chip labels change.

### Key Constraint
- DB-stored tag values (`学习`, `日常`, `搞笑`, `提问`, `公告`) are NOT translated — they're used in Supabase queries
- Only the display text (chip labels) is translated
- The warning marker syntax (`[[warn:...]]`, `[[bg:...]]`) is NOT affected

### Languages
| Code | Language | Flag |
|------|----------|------|
| zh | 中文 (Simplified) | Default |
| en | English | 🇬🇧 |
| es | Español | 🇪🇸 |
| de | Deutsch | 🇩🇪 |
| zh-TW | 繁體中文 | 🇹🇼 |

### Verification
After implementation:
1. Open in browser, verify auto-detection picks correct language
2. Switch languages via dropdown — all UI elements update
3. Login, post, comment, like, delete — all forum functions work
4. Shop, lottery, profile editing — all features work
5. Notifications render correctly in selected language
6. Refresh page — language preference persists via localStorage
