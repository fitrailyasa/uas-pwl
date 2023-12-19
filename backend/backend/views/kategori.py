from cornice import Service
import json
from pyramid.response import Response

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from ..models import kategori


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


kategori = Service(
    name='kategori',
    path='/kategori',
    cors_origins=("*",),
)


@kategori.post()
def kategori_post(request):
    try:
        data = request.json_body
        # Deklarasi sesi di database
        session = request.dbsession
        # Mendapatkan data produk dari database
        kategori = kategori(
            gambar_kategori=data.get("gambar_kategori"),
            nama_kategori=data.get("nama_kategori")
        )
        session.add(kategori)
        session.flush()
        return create_response("success", "Berhasil Menambahkan kategori", 200)
    except Exception as e:
        return create_response("error", "Internal server error", 500)


@kategori.get()
def kategori_get(request):
    try:
        data = request.json_body
        # Deklarasi sesi di database
        session = request.dbsession
        # Mendapatkan data produk dari database
        kategori_target = session.query(kategori).filter(
            kategori.id == data["id"]).first()

        if kategori_target is not None:
            kategori_target_in_db = kategori_target.to_dict()
            json_response = json.dumps(kategori_target_in_db)
            return create_response("success", json_response, 200)
        else:
            return create_response("error", "kategori tidak ditemukan", 400)
    except Exception as e:
        print(e)
        return create_response("error", "Internal server error", 500)


kategoris = Service(
    name='kategoris',
    path='/kategoris/{id}',
    cors_origins=("*",),
)


@kategoris.put()
def kategoris_put(request):
    try:
        # Deklarasi sesi di database
        session = request.dbsession
        # mendapatkan id link dari url
        id_kategori = int(request.matchdict['id'])
        # Mencari data yang sesaui dengan id yang akan diubah
        kategori_target = session.query(kategori).filter(
            kategori.id == id_kategori).first()
        # data baru yang akan diubah
        data_baru = request.json_body
        if kategori_target is not None:
            kategori_target.gambar_kategori = data_baru[0]
            kategori_target.nama_kategori = data_baru[1]
            # Menyelaraskan perubahan data yang ada dalam sesi dengan data yang ada di database
            session.flush()
            # Respon jika berhasil mengubah data
            return create_response("success", "Berhasil Mengubah kategori", 200)
        else:
            return create_response("error", "Gagal Mengubah kategori", 400)
    except Exception as e:
        return create_response("error", "Internal server error", 500)


@kategoris.delete()
def kategoris_delete(request):
    try:
        session = request.dbsession
        # mendapatkan id link dari url
        id_kategori = int(request.matchdict['id'])
        # Mencari data yang sesaui dengan id yang akan diubah
        kategori = session.query(kategori).filter(
            kategori.id == id_kategori).first()
        if kategori is not None:
            session.delete(kategori)
            return create_response("success", "Berhasil Menghapus Kategori", 200)
        else:
            return create_response("error", "Gagal Menghapus Kategori", 400)
    except Exception as e:
        return create_response("error", "Internal server error", 500)
