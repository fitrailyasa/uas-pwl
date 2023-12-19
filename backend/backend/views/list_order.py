from cornice import Service
import json
from pyramid.response import Response

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from ..models import list_order


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


list_order = Service(
    name='list_order',
    path='/list_order',
    cors_origins=("*",),
)


@list_order.post()
def list_order_post(request):
    try:
        data = request.json_body
        # Deklarasi sesi di database
        session = request.dbsession
        # Mendapatkan data produk dari database
        produk = list_order(
            user_id=data.get("user_id"),
            user_order=data.get("user_order"),
            no_telepon=data.get('no_telepon'),
            produk=data.get('produk'),
            jenis_transaksi=data.get('jenis_transaksi'),
            jumlah_order=data.get('jumlah_order'),
            alamat_order=data.get("alamat_order"),
            harga_order=data.get('harga_order'),
            status_order=data.get('status_order'),
            pesan_order=data.get('pesan_order'),
        )
        session.add(produk)
        session.flush()
        return create_response("success", "Berhasil Menambahkan Pesanan", 200)
    except Exception as e:
        return create_response("error", "Internal server error", 500)


list_orders = Service(
    name='list_orders',
    path='/list_orders/{id}',
    cors_origins=("*",),
)


@list_orders.put()
def list_orders_put(request):
    try:
        # Deklarasi sesi di database
        session = request.dbsession
        # mendapatkan id link dari url
        id_list_orders = int(request.matchdict['id'])
        # Mencari data yang sesaui dengan id yang akan diubah
        list_orders_target = session.query(list_order).filter(
            list_orders.id == id_list_orders).first()
        # data baru yang akan diubah
        data_baru = request.json_body
        if list_orders_target is not None:
            list_orders_target.user_id = data_baru[0]
            list_orders_target.user_order = data_baru[1]
            list_orders_target.no_telepon = data_baru[2]
            list_orders_target.produk = data_baru[3]
            list_orders_target.jenis_transaksi = data_baru[4]
            list_orders_target.jumlah_order = data_baru[5]
            list_orders_target.alamat_order = data_baru[6]
            list_orders_target.harga_order = data_baru[7]
            list_orders_target.status_order = data_baru[8]
            list_orders_target.pesan_order = data_baru[9]
            # Menyelaraskan perubahan data yang ada dalam sesi dengan data yang ada di database
            session.flush()
            # Respon jika berhasil mengubah data
            return create_response("success", "Berhasil Mengubah Pesanan", 200)
        else:
            return create_response("error", "Gagal Mengubah Pesanan", 400)
    except Exception as e:
        return create_response("error", "Internal server error", 500)


@list_orders.delete()
def list_orders_delete(request):
    try:
        session = request.dbsession
        # mendapatkan id link dari url
        id_produk = int(request.matchdict['id'])
        # Mencari data yang sesaui dengan id yang akan diubah
        list_order_target = session.query(list_order).filter(
            list_order_target.id == id_produk).first()
        if list_order_target is not None:
            session.delete(list_order_target)
            return create_response("success", "Berhasil Menghapus Pesanan", 200)
        else:
            return create_response("error", "Gagal Menghapus Pesanan", 400)
    except Exception as e:
        return create_response("error", "Internal server error", 500)
