import requests # type: ignore

def get_coordinates(location):
    base_url = 'https://geocode-maps.yandex.ru/1.x/'

    params = {
        'apikey': '40d1649f-0493-4b70-98ba-98533de7710b',
        'geocode': location,
        'format': 'json'
    }

    response = requests.get(base_url, params=params)
    data = response.json()

    if 'response' in data and 'GeoObjectCollection' in data['response']:
        # Получение координат первого найденного объекта
        geo_objects = data['response']['GeoObjectCollection']['featureMember']
        if len(geo_objects) > 0:
            coordinates = geo_objects[0]['GeoObject']['Point']['pos']
            longitude, latitude = coordinates.split(' ')
            return {
                'longitude': longitude,
                'latitude': latitude
            }

    return None