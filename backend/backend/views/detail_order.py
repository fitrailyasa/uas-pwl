from cornice import Service
import json
from pyramid.response import Response

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from ..models import detail_order


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


detail_order = Service(
    name='detail_order',
    path='/detail_order',
    cors_origins=("*",),
)


@detail_order.post()
def detail_order_post(request):
    try:
        data = request.json_body
        # Deklarasi sesi di database
        session = request.dbsession
        # Mendapatkan data produk dari database
        detail_order = detail_order(
            user_id=data.get("id"),

        )
        session.add(detail_order)
        session.flush()
        return create_response("success", "Berhasil Menambahkan detail_order", 200)
    except Exception as e:
        return create_response("error", "Internal server error", 500)


@detail_order.get()
def detail_order_get(request):
    try:
        data = request.json_body
        # Deklarasi sesi di database
        session = request.dbsession
        # Mendapatkan data produk dari database
        detail_order_target = session.query(detail_order).filter(
            detail_order.id == data["id"]).first()

        if detail_order_target is not None:
            detail_order_in_db = detail_order_target.to_dict()
            json_response = json.dumps(detail_order_in_db)
            return create_response("success", json_response, 200)
        else:
            return create_response("error", "detail_order tidak ditemukan", 400)
    except Exception as e:
        print(e)
        return create_response("error", "Internal server error", 500)


detail_orders = Service(
    name='detail_orders',
    path='/detail_orders/{id}',
    cors_origins=("*",),
)


@detail_order.put()
def detail_order_put(request):
    try:
        # Deklarasi sesi di database
        session = request.dbsession
        # mendapatkan id link dari url
        id_detail_order = int(request.matchdict['id'])
        # Mencari data yang sesaui dengan id yang akan diubah
        detail_order_target = session.query(detail_order).filter(
            detail_order.id == id_detail_order).first()
        # data baru yang akan diubah
        data_baru = request.json_body
        if detail_order_target is not None:
            detail_order_target.list_id = data_baru[0]
            detail_order_target.opsi_pengiriman = data_baru[1]
            detail_order_target.pembayaran = data_baru[2]
            detail_order_target.foto_pembayaran = data_baru[3]
            detail_order_target.no_rekening = data_baru[4]
            # Menyelaraskan perubahan data yang ada dalam sesi dengan data yang ada di database
            session.flush()
            # Respon jika berhasil mengubah data
            return create_response("success", "Berhasil Mengubah detail_order", 200)
        else:
            return create_response("error", "Gagal Mengubah detail_order", 400)
    except Exception as e:
        return create_response("error", "Internal server error", 500)


@detail_order.delete()
def detail_order_delete(request):
    try:
        session = request.dbsession
        # mendapatkan id link dari url
        id_detail_order = int(request.matchdict['id'])
        # Mencari data yang sesaui dengan id yang akan diubah
        detail_order = session.query(detail_order).filter(
            detail_order.id == detail_order).first()
        if detail_order is not None:
            session.delete(detail_order)
            return create_response("success", "Berhasil Menghapus detail_order", 200)
        else:
            return create_response("error", "Gagal Menghapus detail_order", 400)
    except Exception as e:
        return create_response("error", "Internal server error", 500)
