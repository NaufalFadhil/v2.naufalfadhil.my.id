# How to Add a New Blog Post

## 1. Tambah entry di `src/data/blog.ts`

Buka file tersebut dan tambah objek baru ke array `blogPosts`:

```ts
{
  id: "5",                              // increment dari yang terakhir
  slug: "nama-artikel-ku",             // ← PENTING: harus sama dengan nama file .mdx
  title: "Judul Artikel",
  excerpt: "Deskripsi singkat yang muncul di halaman blog.",
  coverImage: "https://picsum.photos/seed/keyword/1200/630",  // opsional
  date: "2026-04-27",                  // format YYYY-MM-DD
  readTime: 5,                         // estimasi menit baca
  tags: ["Tag1", "Tag2"],
  published: true,                     // false = draft, tidak muncul
},
```

## 2. Buat file MDX di `content/blog/`

Nama file harus **persis sama** dengan `slug` di atas:

```
content/blog/nama-artikel-ku.mdx
```

### Format konten MDX

```mdx
Paragraf pembuka langsung di sini, tanpa frontmatter.

## Heading Utama

Isi paragraf...

### Sub Heading

Lebih detail...

#### Level 4 (tidak muncul di ToC)

Kode block dengan syntax highlighting:

    ```go
    func main() {
        fmt.Println("Hello, World!")
    }
    ```

Tabel:

| Kolom A | Kolom B | Kolom C |
|---------|---------|---------|
| data    | data    | data    |

Gambar:

![Alt text](/blogs/nama-artikel-ku/nama-gambar.png)

Inline `code` juga bisa.

> Blockquote untuk kutipan atau catatan penting.
```

## Heading yang muncul di Table of Contents

Hanya `##` (h2) dan `###` (h3) yang otomatis masuk sidebar ToC.

## 3. Optimasi gambar

Setiap gambar yang ditaruh di `public/blogs/` perlu dioptimasi supaya browser bisa load versi yang paling sesuai resolusi layar.

### Cara pakai

1. Taruh gambar original (PNG/JPG) di folder blog:
   ```
   public/blogs/nama-artikel-ku/nama-gambar.png
   ```

2. Jalankan script optimizer:
   ```bash
   npm run optimize-images
   ```

3. Script akan otomatis:
   - Generate versi WebP di 480w, 768w, 960w, 1440w
   - Update `src/generated/image-manifest.ts`

4. Gunakan gambar di MDX dengan path ke file original:
   ```mdx
   ![Alt text](/blogs/nama-artikel-ku/nama-gambar.png)
   ```
   Komponen akan otomatis pakai versi WebP yang sudah dioptimasi.

> Jalankan `npm run optimize-images` setiap kali menambah gambar baru.

## Checklist sebelum publish

- [ ] `slug` di `blog.ts` sama persis dengan nama file `.mdx`
- [ ] `published: true`
- [ ] File ada di `content/blog/`
- [ ] Minimal ada satu `##` heading supaya ToC muncul
- [ ] Gambar sudah dioptimasi dengan `npm run optimize-images`
