import logging
import os
import json

from flask import Flask, render_template, redirect, url_for
from flask.ext.script import Manager
from flask.ext.sqlalchemy import SQLAlchemy

##################################################################
######################## SETUP ###################################
##################################################################

logging.basicConfig(
    level=logging.DEBUG,
    format='%(levelname)s: %(message)s')
logger = logging.getLogger(__name__)


SQLALCHEMY_DATABASE_URI = 'mysql://root:aoeuidhtns@127.0.0.1/db_name'
# TODO: RESTORE THIS FOR THE SERVER!!!
#    '{engine}://{username}:{password}@{hostname}/{database}'.format(
#        engine='mysql+pymysql',
#        username=os.getenv('MYSQL_USER'),
#        password=os.getenv('MYSQL_PASSWORD'),
#        hostname=os.getenv('MYSQL_HOST'),
#        database=os.getenv('MYSQL_DATABASE'))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

manager = Manager(app)
db = SQLAlchemy(app)

##################################################################
######################## MODELS ##################################
##################################################################

class Artist(db.Model):
    __tablename__ = 'artist'

    artist_id = db.Column(db.String(256), primary_key=True)
    name = db.Column(db.String(256), nullable=False)
    editions_id = db.relationship('Edition', backref ='artist', lazy='dynamic')

    def __repr__(self):
        return "[Artist: artist_id={}, name={}]".format(self.artist_id, self.name)

    @property
    def serialize_part(self):
        return dict(artist_id=self.artist_id, name=self.name)
    
    @property
    def serialize_full(self):
        return dict(artist_id=self.artist_id, name=self.name, editions_id=self.serialize_many2many)

    @property
    def serialize_many2many(self):
        return [ item.serialize for item in self.many2many ]

class Set(db.Model):
    __tablename__ = 'set'

    set_id = db.Column(db.String(256), primary_key=True)
    name = db.Column(db.String(256), nullable=False)
    editions_id = db.relationship('Edition', backref ='set', lazy='dynamic')

    def __repr__(self):
        return "[Set: set_id={}, name={}]".format(self.set_id, self.name)

    @property
    def serialize_part(self):
        return dict(set_id=self.set_id, name=self.name)
    
    @property
    def serialize_full(self):
        return dict(set_id=self.set_id, name=self.name, editions_id=self.serialize_many2many)

    @property
    def serialize_many2many(self):
        return [ item.serialize for item in self.many2many ]

class Card(db.Model):
    __tablename__ = 'card'

    card_id = db.Column(db.String(256), primary_key=True)
    name = db.Column(db.String(256), nullable=False)
    colors = db.Column(db.String(256), nullable=False)
    cost = db.Column(db.String(256), nullable=False)
    cmc = db.Column(db.Integer, nullable=False)
    multiverses_id = db.relationship('Edition', backref ='card', lazy='dynamic')

    def __repr__(self):
        return "[Card: id={}, name={}, colors={}, cost={}, cmc={}]".format(self.card_id, self.name, self.colors, self.cost, self.cmc)

    @property
    def serialize_part(self):
        return dict(card_id=self.card_id, name=self.name, url=self.url, store_url=self.store_url, colors=self.colors, cost=self.cost, cnc=self.cnc)

    @property
    def serialize_full(self):
        return dict(card_id=self.card_id, name=self.name, url=self.url, store_url=self.store_url, colors=self.colors, cost=self.cost, cnc=self.cnc, editions_id=self.serialize_many2many)

    @property
    def serialize_many2many(self):
        return [ item.serialize for item in self.many2many ]

class Edition(db.Model):
    __tablename__ = 'edition'

    multiverse_id = db.Column(db.Integer, primary_key=True)
    artist_id = db.Column(db.String(256), db.ForeignKey('artist.artist_id'))
    set_id = db.Column(db.String(256), db.ForeignKey('set.set_id'))
    card_id = db.Column(db.String(256), db.ForeignKey('card.card_id'))

    def __repr__(self):
        return "[Edition: multiverse_id={}]".format(self.multiverse_id)

    @property
    def serialize(self):
        return dict(multiverse_id=self.multiverse_id, artist_id=self.artist_id, set_id=self.set_id, card_id=self.card_id)

    @property
    def serialize_many2many(self):
        return [ item.serialize for item in self.many2many ]

##################################################################
###################### VIEWS/CONTROLLERS #########################
##################################################################

######################
# Routes for Home page (NOTE:INDEX IS THE ONLY TEMPLATE SERVED BY SERVER, ALL OTHERS ARE LOADED BY ANGULAR!)
######################
@app.route('/index.html', methods=['GET', 'POST'])
def indexHTML():
    return redirect(url_for('index'))

@app.route('/', methods=['GET', 'POST'])
def index():
    logger.debug("index")
    return render_template('index.html', cards=Card.query.all())

######################
# Routes for JSON API REST Endpoints
######################
@app.route('/api/cards',  methods=['GET', 'POST'])
def cardsAPI():
    logger.debug("cards")
    cards = [card.serialize_part for card in Card.query.all()] #NOTE: thanks to the @property serializers on the Card model!
    return json.dumps(cards)

@app.route('/api/cards/<path:id>',  methods=['GET', 'POST'])
def cardsAPI(id):
    logger.debug("cards")
    card = [Card.query.get(id).serialize_full] #NOTE: thanks to the @property serializers on the Card model!
    return json.dumps(card)


@app.route('/api/artists',  methods=['GET', 'POST'])
def cardsAPI():
    logger.debug("cards")
    artists = [artist.serialize_part for artist in Artist.query.all()] #NOTE: thanks to the @property serializers on the Card model!
    return json.dumps(artists)

@app.route('/api/artists/<int:id>',  methods=['GET', 'POST'])
def cardsAPI(id):
    logger.debug("cards")
    artist = [Artist.query.get(id).serialize_full] #NOTE: thanks to the @property serializers on the Card model!
    return json.dumps(artist)

##################################################################
###################### FLASK MANAGER COMMANDS ####################
##################################################################

def addArtist(aid, name):
    artist = Artist()
    artist.artist_id = aid
    artist.name = name
    db.session.add(artist)
    db.session.commit()

def addCard(cid, name, colors, cost, cmc):
    card = Card()
    card.card_id = cid
    card.name = name
    card.url = 'http://dunno'
    card.store_url = 'https://also.dunno'
    card.colors = colors
    card.cost = cost
    card.cmc = cmc
    db.session.add(card)
    db.session.commit()

def addEdition(mid, aid, sid, cid):
    edition = Edition()
    edition.multiverse_id = mid
    edition.artist_id = aid
    edition.set_id = sid
    edition.card_id = cid
    db.session.add(edition)
    db.session.commit()

def addSet(sid, name):
    fred = Set()
    fred.set_id = sid
    fred.name = name
    db.session.add(fred)
    db.session.commit()

@manager.command
def create_db():
    logger.debug("create_db")
    app.config['SQLALCHEMY_ECHO'] = False
    db.create_all()

@manager.command
def create_dummy_data():
    logger.debug("create_test_data")
    app.config['SQLALCHEMY_ECHO'] = False
    card = Card(name='Steve',url='url',store_url='store_url',colors='colors',cost='11',cmc=0)
    db.session.add(card)
    db.session.commit()

@manager.command
def drop_db():
    logger.debug("drop_db")
    app.config['SQLALCHEMY_ECHO'] = False
    db.drop_all()

##################################################################
###################### PYTHON MAIN ###############################
##################################################################
logger.debug("Welcome to Data: The Gathering!")
logger.debug("The log statement below is for educational purposes only. Do *not* log credentials.")
logger.debug("%s", SQLALCHEMY_DATABASE_URI)

if __name__ == '__main__':
    manager.run()
