import logging
import os

from flask import Flask, render_template, request, redirect, url_for
from flask.ext.script import Manager
from flask.ext.sqlalchemy import SQLAlchemy
from sqlalchemy.schema import ForeignKey


logging.basicConfig(
    level=logging.DEBUG,
    format='%(levelname)s: %(message)s')
logger = logging.getLogger(__name__)
logger.debug("Welcome to Data: The Gathering!")


SQLALCHEMY_DATABASE_URI = \
    '{engine}://{username}:{password}@{hostname}/{database}'.format(
        engine='mysql+pymysql',
        username=os.getenv('MYSQL_USER'),
        password=os.getenv('MYSQL_PASSWORD'),
        hostname=os.getenv('MYSQL_HOST'),
        database=os.getenv('MYSQL_DATABASE'))

logger.debug("The log statement below is for educational purposes only. Do *not* log credentials.")
logger.debug("%s", SQLALCHEMY_DATABASE_URI)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

manager = Manager(app)
db = SQLAlchemy(app)

# Route for Home page
@app.route('/index.html', methods=['GET', 'POST'])
def indexHTML():
    return redirect(url_for('index'))

@app.route('/', methods=['GET', 'POST'])
def index():
    logger.debug("index")
    return render_template('index.html', cards=Card.query.all())

# Route for Cards page
@app.route('/cards.html', methods=['GET'])
def cards():
    logger.debug("cards")
    return render_template('cards.html')

# Route for Artists page
@app.route('/artists.html', methods=['GET'])
def artists():
    logger.debug("artists")
    return render_template('artists.html')

# Route for Sets page
@app.route('/sets.html', methods=['GET'])
def sets():
    logger.debug("sets")
    return render_template('sets.html')

# Route for About page
@app.route('/about.html', methods=['GET'])
def about():
    logger.debug("about")
    return render_template('about.html')

# SQLAlchemy Model creation

class Artist(db.Model):
    __tablename__ = 'artist'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), nullable=False)
    editions_FK = db.relationship('Edition', backref ='artist', lazy='dynamic')

    def __repr__(self):
        return "[Artist: id={}, name={}]".format(self.id, self.name)

class Set(db.Model):
    __tablename__ = 'set'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), nullable=False)
    editions_FK = db.relationship('Edition', backref ='set', lazy='dynamic')

    def __repr__(self):
        return "[Set: id={}, name={}]".format(self.id, self.name)

class Card(db.Model):
    __tablename__ = 'card'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), nullable=False)
    url = db.Column(db.String(256), nullable=False)
    store_url = db.Column(db.String(256), nullable=False)
    colors = db.Column(db.String(256), nullable=False)
    cost = db.Column(db.String(256), nullable=False)
    cnc = db.Column(db.Integer, nullable=False)
    editions_FK = db.relationship('Edition', backref ='card', lazy='dynamic')

    def __repr__(self):
        return "[Card: id={}, name={}, url={}, store_url={}, colors={}, cost={}, cnc={}]".format(self.id, self.name, self.url, self.store_url, self.colors, self.cost, self.cnc)

class Edition(db.Model):
    __tablename__ = 'edition'

    multiverse_id = db.Column(db.Integer, primary_key=True)
    artist_id = db.Column(db.Integer, db.ForeignKey('artist.id'))
    set_id = db.Column(db.Integer, db.ForeignKey('set.id'))
    card_id = db.Column(db.Integer, db.ForeignKey('card.id'))

    def __repr__(self):
        return "[Artist: id={}, name={}]".format(self.id, self.name)


@manager.command
def create_db():
    logger.debug("create_db")
    app.config['SQLALCHEMY_ECHO'] = True
    db.create_all()

@manager.command
def create_dummy_data():
    logger.debug("create_test_data")
    app.config['SQLALCHEMY_ECHO'] = True
    guest = Guest(name='Steve')
    db.session.add(guest)
    db.session.commit()

@manager.command
def drop_db():
    logger.debug("drop_db")
    app.config['SQLALCHEMY_ECHO'] = True
    db.drop_all()


if __name__ == '__main__':
    manager.run()
