# Ataba 企業網站前端開發 Todo List

## 📋 開發進度追蹤

### ✅ 已完成
- [x] 分析參考網站 https://bestloffice.com/ 的設計和架構
- [x] 分析現有網站備份檔案結構和內容
- [x] 設計新網站整體架構和路由結構 (按照指定頁面)

### 🔄 進行中
- [ ] 建立共用組件 (Header, Footer, Navigation)

### 📝 待辦事項
- [ ] 實作 Home 首頁
- [ ] 實作 About Ataba 頁面 (包含 Ataba Factory, OEM/ODM service 子頁面)
- [ ] 實作 Product 頁面 (包含 New Products, Handy Calculator, Desktop Calculator, Scientific Calculator 子頁面)
- [ ] 實作 News 新聞頁面
- [ ] 實作 Contact Us 聯絡我們頁面
- [ ] 實作 RWD 響應式設計
- [ ] 優化 SEO 和 meta 標籤
- [ ] 測試各頁面功能和響應式設計

## 🗂️ 網站架構

### 頁面結構
```
/ (Home)
├── About Ataba
│   ├── Ataba Factory
│   └── OEM/ODM service
├── Product
│   ├── New Products
│   ├── Handy Calculator
│   ├── Desktop Calculator
│   └── Scientific Calculator
├── News
└── Contact Us
```

### Next.js 專案結構
```
📁 app/
├── 📄 layout.tsx                    (全域佈局)
├── 📄 page.tsx                      (Home 首頁)
├── 📁 about/
│   ├── 📄 page.tsx                  (About Ataba 主頁)
│   ├── 📁 factory/
│   │   └── 📄 page.tsx              (Ataba Factory)
│   └── 📁 oem-odm/
│       └── 📄 page.tsx              (OEM/ODM Service)
├── 📁 products/
│   ├── 📄 page.tsx                  (Product 主頁)
│   ├── 📁 new/
│   │   └── 📄 page.tsx              (New Products)
│   ├── 📁 handy-calculator/
│   │   └── 📄 page.tsx              (Handy Calculator)
│   ├── 📁 desktop-calculator/
│   │   └── 📄 page.tsx              (Desktop Calculator)
│   └── 📁 scientific-calculator/
│       └── 📄 page.tsx              (Scientific Calculator)
├── 📁 news/
│   └── 📄 page.tsx                  (News)
├── 📁 contact/
│   └── 📄 page.tsx                  (Contact Us)
└── 📁 components/
    ├── 📄 Header.tsx                (頁首導航)
    ├── 📄 Footer.tsx                (頁尾)
    ├── 📄 Navigation.tsx            (主導航選單)
    └── 📄 ProductCard.tsx           (產品展示卡片)
```

## 🎨 設計風格指南

### 參考網站
- **主要參考**: https://bestloffice.com/
- **設計風格**: 專業、乾淨的企業形象
- **色彩方案**: 黑白灰主色調，藍色和紅色作為重點色
- **佈局特色**: 表格與卡片式排版，層次分明
- **導航設計**: 簡潔的左側分類 + 頂部導航

### 技術需求
- **RWD**: 響應式設計，支援桌面、平板、手機
- **SEO**: 優化搜尋引擎表現
- **效能**: 快速載入和流暢體驗

## 📝 開發注意事項

1. **嚴格遵循指定的頁面結構**，不要因為舊網站結構而更改
2. **企業級品質**：專業、可信的視覺呈現
3. **使用者體驗**：清晰的導航和資訊架構
4. **品牌一致性**：統一的設計語言和視覺元素
5. **響應式優先**：確保在各種裝置上的最佳體驗

## 🔗 相關文件

- 參考 `CLAUDE.md` 中的技術指南
- 設計參考：https://bestloffice.com/