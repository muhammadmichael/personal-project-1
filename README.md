# personal-project-1
Bootcamp Nodejs Personal Project


Menggunakan private key & certificate yang digenerate openssl
Halaman home: https://localhost:3000/
Dapat diakses tanpa atau dengan login.
Halaman home berisi tiga berita terupdate. Gambar dan judul dapat diklik untuk menampilkan detail berita.
List Berita Selengkapnya >> dapat diklik untuk menampilkan halaman list berita.

Halaman list berita : https://localhost:3000/berita/list/page/:halaman
Dapat diakses tanpa atau dengan login.
Halaman list berita menggunakan pagination. Setiap page menampilkan lima berita mulai dari yang terupdate dan atribut isDelete False.

Halaman tambah berita: https://localhost:3000/berita/tambah
Dapat diakses hanya jika login.
Halaman ini dapat membuat sebuah berita. Pengguna dapat menambahkan berita dengan mengisikan atribut judul, highlight, isi berita, serta gambar untuk diupload.
Pada database SQL Server, hanya path gambar yang disimpan. File image akan tersimpan ke dalam folder public/images/uploadimages di dalam repository project ini.

Halaman detail berita: https://localhost:3000/berita/detail/:id
Dapat diakses tanpa atau dengan login.
Halaman ini menampilkan detail sebuah berita.
Halaman ini memiliki fitur Ubah Berita (harus login), Hapus Berita (harus login), Tambah Komentar, dan Reply Komentar (jika ada).
Halaman ini juga menampilkan komentar dengan dibatasi dua hierarki komentar yang terdiri dari komentar 'parent' dan juga komentar 'children'.

Halaman ubah berita: https://localhost:3000/berita/ubah/:id
Dapat diakses hanya jika login.
Halaman ini dapat mengubah seluruh atribut dari sebuah berita by id.

Halaman delete berita: https://localhost:3000/berita/hapus/:id
Dapat diakses hanya jika login.
Halaman ini melakukan soft delete pada berita dengan mengubah atribut isDelete menjadi True.

Halaman tambah komentar: https://localhost:3000/komentar/tambah/:id
Dapat diakses tanpa atau dengan login.
Halaman ini membuat komentar baru dengan foreign key (pada DB didefinisikan beritumId) yang merefer terhadap id sebuah berita.

Halaman reply komentar: https://localhost:3000/komentar/reply/:id
Params id disini adalah komentar id yang menjadi parent sebuah komentar children (reply).
Dapat diakses tanpa atau dengan login.
Halaman ini membuat komentar baru dengan foreign key (pada DB didefinisikan komentarId) yang merefer terhadap id sebuah komentar yang menjadi parentnya.
