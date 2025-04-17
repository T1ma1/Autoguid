from app import app
from flask import render_template, url_for, request, redirect
from .models import *
from .coord import get_coordinates

### в данном блоке url надо решить как поставить
##############################################
# @app.route('/')
# def welcome_page():
#     return render_template('welcome_page.html')


@app.route('/')
def main_page():
    landmarks = Landmark.query.limit(4).all()
    return render_template('main_page.html', landmarks=landmarks)
##############################################

@app.route('/entertainments/')
def entertainments_page():
    type_name = 'Все развлечения'
    entertainments = Entertainment.query.order_by(Entertainment.name).all()
    return render_template('entertainment_page.html', entertainments=entertainments, type_name=type_name)


@app.route('/entertainments/<type_id>')
def entertainments_filter(type_id):
    type_name = ['Все развлечения', 'Парки', 'Кинотеатры', 'Рестораны/Кафе', 'Торговые центры']
    types = EntertainmentType.query.all()
    if type_id == 'all':
        entertainments = Entertainment.query.all()
        type_name = type_name[0]
    else:
        type_ids = type_id.split(',')
        entertainments = Entertainment.query.filter(Entertainment.type_id.in_(type_ids)).all()
        type_name = type_name[int(type_id)]
    return render_template('entertainment_page.html', entertainments=entertainments, types=types, type_id=type_id, type_name=type_name)


@app.route('/landmarks')
def landmarks_page():
    landmarks = Landmark.query.order_by(Landmark.name).all()
    return render_template('landmarks_page.html', landmarks=landmarks)    


@app.route('/landmarks/<int:id>')
def landmarks_detail(id):
    landmark = Landmark.query.get(id)
    coordinates = get_coordinates(landmark.location)
    return render_template('landmarks_detail_page.html', landmark=landmark, coordinates=coordinates)


@app.route('/carsharing')
def carsharing_page():
    carsharings = Carsharing.query.order_by(Carsharing.name).all()
    return render_template('carsharing_page.html', carsharings=carsharings)


@app.route('/tours')
def tours_page():
    min_price_range = request.args.get('min_price_range', type=int)
    max_price_range = request.args.get('max_price_range', type=int)

    if min_price_range is not None and max_price_range is not None:
        tours = Tour.query.filter(Tour.price >= min_price_range, Tour.price <= max_price_range).all()
    else:
        tours = Tour.query.all()

    return render_template('tour_page.html', tours=tours)



@app.route('/tours/<int:id>')
def tour_detail(id):
    tour = Tour.query.get(id)
    tour_agency = TourAgency.query.get(tour.company_id)
    return render_template('tour_detail.html', tour=tour, tour_agency=tour_agency)

@app.route('/hotels')
def hotels_page():
    min_price_range = request.args.get('min_price_range', type=int)
    max_price_range = request.args.get('max_price_range', type=int)

    if min_price_range is not None and max_price_range is not None:
        hotels = Hotel.query.filter(Hotel.min_price >= min_price_range, Hotel.max_price <= max_price_range).all()
    else:
        hotels = Hotel.query.all()

    return render_template('hotels_page.html', hotels=hotels)

