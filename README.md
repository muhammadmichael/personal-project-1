# personal-project-1
Bootcamp Nodejs Personal Project


Menggunakan private key & certificate yang digenerate openssl <br />
Halaman home: https://localhost:3000/ <br />
Dapat diakses tanpa atau dengan login. <br />
Halaman home berisi tiga berita terupdate. Gambar dan judul dapat diklik untuk menampilkan detail berita. <br />
List Berita Selengkapnya >> dapat diklik untuk menampilkan halaman list berita. <br />

Halaman list berita : https://localhost:3000/berita/list/page/:halaman <br />
Dapat diakses tanpa atau dengan login. <br />
Halaman list berita menggunakan pagination. Setiap page menampilkan lima berita mulai dari yang terupdate dan atribut isDelete False. <br />

Halaman tambah berita: https://localhost:3000/berita/tambah <br />
Dapat diakses hanya jika login. <br />
Halaman ini dapat membuat sebuah berita. Pengguna dapat menambahkan berita dengan mengisikan atribut judul, highlight, isi berita, serta gambar untuk diupload. <br />
Pada database SQL Server, hanya path gambar yang disimpan. File image akan tersimpan ke dalam folder public/images/uploadimages di dalam repository project ini. <br />

Halaman detail berita: https://localhost:3000/berita/detail/:id <br />
Dapat diakses tanpa atau dengan login. <br />
Halaman ini menampilkan detail sebuah berita. <br />
Halaman ini memiliki fitur Ubah Berita (harus login), Hapus Berita (harus login), Tambah Komentar, dan Reply Komentar (jika ada). <br />
Halaman ini juga menampilkan komentar dengan dibatasi dua hierarki komentar yang terdiri dari komentar 'parent' dan juga komentar 'children'. <br />

Halaman ubah berita: https://localhost:3000/berita/ubah/:id <br />
Dapat diakses hanya jika login. <br />
Halaman ini dapat mengubah seluruh atribut dari sebuah berita by id. <br />

Halaman delete berita: https://localhost:3000/berita/hapus/:id <br />
Dapat diakses hanya jika login. <br />
Halaman ini melakukan soft delete pada berita dengan mengubah atribut isDelete menjadi True. <br />

Halaman tambah komentar: https://localhost:3000/komentar/tambah/:id <br />
Dapat diakses tanpa atau dengan login. <br />
Halaman ini membuat komentar baru dengan foreign key (pada DB didefinisikan beritumId) yang merefer terhadap id sebuah berita. <br />

Halaman reply komentar: https://localhost:3000/komentar/reply/:id <br />
Params id disini adalah komentar id yang menjadi parent sebuah komentar children (reply). <br />
Dapat diakses tanpa atau dengan login. <br />
Halaman ini membuat komentar baru dengan foreign key (pada DB didefinisikan komentarId) yang merefer terhadap id sebuah komentar yang menjadi parentnya. <br />
