## Installation
```sh
npm i tiktokdl
```
#### [Demo Projects](https://github.com/BOTCAHX/tiktokdl-api)

# Example
```js
const { tiktokdl } = require('tiktokdl') 

const url = 'https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226'
// Using tiktokdl
const data = await tiktokdl(url)
console.log(data) // JSON
```

## Catatan Penting

1. Tiktokdl hanya dapat digunakan untuk mengunduh media yang bersifat publik atau dapat diakses oleh umum.
2. Aplikasi ini tidak berafiliasi atau didukung oleh aplikasi manapun.
3. Pastikan bahwa Anda memiliki izin atau hak cipta untuk mengunduh media sebelum menggunakan aplikasi ini.

## Kontribusi dan Pelaporan Masalah

Jika Anda menemukan masalah atau ingin berkontribusi pada pengembangan aplikasi ini, silakan kunjungi halaman [GitHub repository](https://github.com/BOTCAHX/tiktokdl) kami.

## Lisensi

 tiktokdl dilisensikan di bawah [MIT License](https://opensource.org/licenses/MIT). Silakan merujuk pada file LICENSE untuk informasi lebih lanjut.
