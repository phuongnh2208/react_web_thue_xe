# React Web Thue Xe

Ung dung React mo phong luong khach hang va quan tri cho nen tang thue xe.

## Tai khoan quan tri

- Username: `admin`
- Password: `123`

## Chay local

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

## Deploy voi BrowserRouter (quan trong)

Ung dung da dung `BrowserRouter`, vi vay hosting can rewrite tat ca route ve `index.html`.

Da cau hinh san trong project:

- Netlify: `public/_redirects` + `netlify.toml`
- Vercel: `vercel.json`

## Trien khai nhanh

### Netlify

1. Import repository vao Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy.

### Vercel

1. Import repository vao Vercel.
2. Framework Preset: `Vite`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy.

## Luu y

Neu dung hosting khac (Nginx, Apache, IIS), ban can tu cau hinh SPA fallback ve `index.html`.