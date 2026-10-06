# Fail B&K SK Jawi — pembalut aplikasi telefon

Pembalut GitHub Pages untuk web app **Pengurusan Fail Pintar B&K** (Google Apps Script), supaya sistem boleh dipasang sebagai ikon di skrin utama telefon.

## Tetapan
1. Buka `index.html`, cari baris `WEB_APP_URL`, tampal pautan web app Apps Script (berakhir dengan `/exec`).
2. **Settings → Pages → Deploy from a branch → main / (root) → Save**.
3. Buka `https://<nama-pengguna>.github.io/<nama-repo>/` di telefon.

## Pasang di telefon
- **Android (Chrome):** menu ⋮ → *Add to Home screen* / *Install app*.
- **iPhone (Safari):** butang Kongsi → *Add to Home Screen*.

## Kandungan
| Fail | Fungsi |
|---|---|
| `index.html` | Memaparkan web app dalam skrin penuh, dengan skrin pembuka |
| `manifest.webmanifest` | Nama, warna dan ikon aplikasi |
| `sw.js` | Menyimpan kulit aplikasi supaya dibuka pantas |
| `icons/` | Ikon logo B&K untuk Android & iPhone |

Data dan fail dokumen tidak disimpan di GitHub — semuanya kekal dalam Google Sheet & Google Drive.
