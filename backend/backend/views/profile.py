from cornice import Service
import json
from pyramid.response import Response

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from ..models import Pengguna


engine = create_engine('mysql+pymysql://root:@localhost:3306/belanjainaja')
Session = sessionmaker(bind=engine)
session = Session()


def create_response(jenis_pesan, isi_pesan, status):
    response_json = {
        jenis_pesan: isi_pesan
    }
    response = Response(
        json.dumps(response_json),
        content_type='application/json; charset=utf-8',
        status=status
    )
    return response


profile = Service(
    name='profile',
    path='/profile',
    cors_origins=("*",),
)


@profile.get()
def profile_get(request):
    try:
        data = request.json_body
        # Deklarasi sesi di database
        session = request.dbsession
        # Mendapatkan data produk dari database
        pengguna_target = session.query(Pengguna).filter(
            Pengguna.id == data["id"]).first()

        if pengguna_target is not None:
            pengguna_target_in_db = pengguna_target.to_dict()
            json_response = json.dumps(pengguna_target_in_db)
            return create_response("success", json_response, 200)
        else:
            return create_response("error", "Profile tidak ditemukan", 400)
    except Exception as e:
        print(e)
        return create_response("error", "Internal server error", 500)


profiles = Service(
    name='profiles',
    path='/profiles/{id}',
    cors_origins=("*",),
)


# @profiles.put()
# def profiles(request):
#     try:
#         data = request.json_body
#         # Deklarasi sesi di database
#         session = request.dbsession
#         # mendapatkan id link dari url
#         id_produk = int(request.matchdict['id'])
#         # Mencari data yang sesaui dengan id yang akan diubah
#         produk_target = session.query(Produk).filter(
#             Produk.id == id_produk).first()
#         # data baru yang akan diubah
#         data_input = request.json_body
#         required_fields = ("kategori_id", "gambar_produk", 'nama_produk', 'deskripsi_produk',
#                            'stok_produk', 'harga_produk')
#         # memasukan data baru  ke dalam list
#         data_baru = []
#         # jika data yang ingin diubah ditemukan akan melakukan perulangan pada pengecekan pada data baru
#         if produk_target is not None:
#             for field in required_fields:
#                 # jika tidak kosong/"" maka akan menyimpan data yang baru
#                 if data_input[field] != getattr(produk_target, field) and data_input[field] != "":
#                     data_baru.append(data_input.get(field))
#                 # jika  kosong/"" maka akan menyimpan data yang lama
#                 else:
#                     data_baru.append(getattr(produk_target, field))
#             # memasukkan data baru ke databae
#             produk_target.kategori_id = data_baru[0]
#             produk_target.gambar_produk = data_baru[1]
#             produk_target.nama_produk = data_baru[2]
#             produk_target.deskripsi_produk = data_baru[3]
#             produk_target.stok_produk = data_baru[4]
#             produk_target.harga_produk = data_baru[5]
#             # Menyelaraskan perubahan data yang ada dalam sesi dengan data yang ada di database
#             session.flush()
#             # Respon jika berhasil mengubah data
#             return create_response("success", "Berhasil Mengubah Produk", 200)
#         else:
#             return create_response("error", "Gagal Mengubah Produk", 400)
#     except Exception as e:
#         return create_response("error", "Internal server error", 500)
