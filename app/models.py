from app import db

class Hotel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=True)
    location = db.Column(db.Text, nullable=True)
    room_type = db.Column(db.Text, nullable=True)
    min_price = db.Column(db.Integer, nullable=True)
    max_price = db.Column(db.Integer, nullable=True)
    phone_number = db.Column(db.Text, nullable=True)
    path_photo = db.Column(db.Text, nullable=True)


    def __repr__(self):
        return '<Hotel %r' % self.id
    

class Carsharing(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=True)
    location = db.Column(db.Text, nullable=True)
    contact_info = db.Column(db.Text, nullable=True)
    working_hours = db.Column(db.Text, nullable=True)
    website = db.Column(db.Text, nullable=True)
    services = db.Column(db.Text, nullable=True)
    path_photo = db.Column(db.Text, nullable=True)

    
    def __repr__(self):
        return '<Сarsharing %r' % self.id


###### ОБЯЗАТЕЛЬНО РАЗОБРАТЬСЯ С FOREIGN KEY
class Tour(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_id = db.Column(db.Integer, db.ForeignKey('touragency.id', ondelete='CASCADE'), nullable=True)
    tour_name = db.Column(db.Text, nullable=True)
    location = db.Column(db.Text, nullable=True)
    description = db.Column(db.Text, nullable=True)
    price = db.Column(db.Integer, nullable=True)
    path_photo = db.Column(db.Text, nullable=True)
    

    def __repr__(self):
        return '<Tour %r' % self.id


class TourAgency(db.Model):
    __tablename__ = 'touragency'

    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.Text, nullable=True)
    location = db.Column(db.Text, nullable=True)
    languages = db.Column(db.Text, nullable=True)
    working_hours = db.Column(db.Text, nullable=True)
    phone_number = db.Column(db.Text, nullable=True)
    website = db.Column(db.Text, nullable=True)
    

    def __repr__(self):
        return '<TourAgency %r' % self.id
    

class Entertainment(db.Model):
    __tablename__ = 'entertainment'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=True)
    type_id = db.Column(db.Integer, db.ForeignKey('entertainment_type.id', ondelete='CASCADE'), nullable=False)
    location = db.Column(db.Text, nullable=True)
    work_time = db.Column(db.Text, nullable=True)
    phone_number = db.Column(db.Text, nullable=True)
    website = db.Column(db.Text, nullable=True)
    path_photo = db.Column(db.Text, nullable=True)
    

    def __repr__(self):
        return '<Entertainment %r' % self.id
    

class EntertainmentType(db.Model):
    __tablename__ = 'entertainment_type'

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.Text, nullable=True)


    def __repr__(self):
        return '<EntertainmentType %r' % self.id
    

class Landmark(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=True)
    location = db.Column(db.Text, nullable=True)
    work_time = db.Column(db.Text, nullable=True)
    facts = db.Column(db.Text, nullable=True)
    description = db.Column(db.Text, nullable=True)
    path_photo = db.Column(db.Text, nullable=True)

    def __repr__(self):
        return '<Landmark %r' % self.id