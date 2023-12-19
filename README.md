# BELANJAIN AJA

<img src="assets/home.png" width="100%">

Aplikasi "Belanjain Aja" adalah platform belanja online yang menyediakan fitur-fitur unggul dalam pengelolaan pengguna, produk, kategori, transaksi, autentikasi, dan pembaruan profil pengguna. Dengan desain yang ramah pengguna, aplikasi ini memudahkan pengguna untuk menjelajahi dan melakukan transaksi belanja secara efisien.

## ANGGOTA

- Elgania Aulia Gemintang		120140113
- Emirsyah Putra			    120140169
- Fitra Ilyasa				120140048
- M Haikal Fauzananda 		120140168
- Syafira Wulandari 			120140142

## FITUR

- Kelola User Belanjain Aja:
Sistem manajemen pengguna Belanjain Aja yang efisien, termasuk pendaftaran dan manajemen akun Belanjain Aja.
- Kelola Produk Belanjain Aja:
Penyajian produk Belanjain Aja dengan tampilan yang menarik dan informatif.
Pengelolaan stok dan informasi produk Belanjain Aja yang mudah diakses oleh pemilik toko Belanjain Aja.
- Kelola Kategori Belanjain Aja:
Kategori produk Belanjain Aja yang terorganisir dengan baik untuk mempermudah pencarian.
Penambahan dan pengelolaan kategori produk baru Belanjain Aja dengan cepat.
- Kelola Transaksi Belanjain Aja:
Transaksi Belanjain Aja secara real-time untuk pemantauan bisnis yang efektif.
Konfirmasi Transaksi kepada pengguna dan pemilik toko.
- Autentikasi Belanjain Aja:
Sistem keamanan login yang kuat untuk melindungi akun pengguna Belanjain Aja.
- Update Profile User Belanjain Aja:
Kemudahan pengguna dalam memperbarui informasi profil pengguna Belanjain Aja.

## ARSITEKTUR
<img src="assets/arsitektur.jpg" width="100%">

Arsitektur tersebut berbasisi microservice dengan memecah layanan website e-commerce menjadi 5 layanan yaitu login dan register, profile, produk, kategori, serta transaksi. Terdapat API gateway yang berfungsi mengarahkan permintaan pengguna ke layanan yang sesuai. Proses komunikasi pelayanan dilakukan dengan gRPC dengan gRPC client mengirimkan permintaan ke gRPC server yang relevan.


## CLASS DIAGRAM
<img src="assets/class.jpg" width="100%">

Class diagram tersebut terdiri 6 entitas yaitu : 
- pengguna : entitas ini mengandung informasi mengenai pengguna yang menggunakan website belanjain aja.
- roles : entitas ini mengandung informasi peran pengguna dalam aplikasi yaitu penjual atau pembeli.
- produk : entitas ini mengandung informasi produk yang ditawarkan oleh penjual pada aplikasi belanjain aja.
- kategori : entitas ini mengandung informasi pengelompokan produk sesuai dengan kategori yang disediakan untuk memudahkan dalam pencarian produk.
- list_order : entitas ini mengandung informasi daftar pemesanan yang dilakukan oleh pembeli. 
- detail_order  : entitas ini mengandung informasi spesifik mengenai produk - produk yang dipesan dalam sebuah transaksi.
	
	Class diagram tersebut juga terdiri 4 hubungan antara entitas yaitu :
- pengguna dengan list order : Hubungan antar entitas ini menjelaskan setiap pengguna dapat memiliki banyak list order sehingga pengguna dapat melakukan banyak pemesanan di periode waktu yang berbeda.
- pengguna dengan Roles : Hubungan antar entitas ini menjelaskan setiap pengguna memiliki hanya satu roles yaitu penjual atau pembeli.
- produk dengan Kategori : Hubungan antar entitas ini menjelaskan setiap produk hanya dapat memiliki satu kategori sehingga memudahkan dalam pengurutan dan pencarian produk.
- list_order dengan detail_order: Hubungan antar entitas ini menjelaskan setiap list_order yang dilakukan pengguna hanya dapat memiliki satu detail order.


## ERD
<img src="assets/erd.png" width="100%">
