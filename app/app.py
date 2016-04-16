import logging
import os
import json
import subprocess
from getpass import getuser

from flask import Flask, render_template, redirect, url_for
from flask.ext.script import Manager
from flask.ext.sqlalchemy import SQLAlchemy

##################################################################
######################## SETUP ###################################
##################################################################

logging.basicConfig(
    level=logging.ERROR,
    format='%(levelname)s: %(message)s')
logger = logging.getLogger(__name__)


if getuser() == 'marklindberg': # pragma: no cover
    SQLALCHEMY_DATABASE_URI = 'mysql://root:aoeuidhtns@127.0.0.1/db_name?charset=utf8'
elif getuser() == 'javier' : # pragma: no cover
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:@127.0.0.1/guestbook?charset=utf8'
elif getuser() == 'pscamman': # pragma: no cover
    SQLALCHEMY_DATABASE_URI = 'mysql://root:asdf@127.0.0.1/db?charset=utf8'
else: # pragma: no cover
    SQLALCHEMY_DATABASE_URI = \
        '{engine}://{username}:{password}@{hostname}/{database}?charset=utf8'.format(
            engine='mysql+pymysql',
            username=os.getenv('MYSQL_USER', 'root'),
            password=os.getenv('MYSQL_PASSWORD', ''),
            hostname=os.getenv('MYSQL_HOST', '127.0.0.1'),
            database=os.getenv('MYSQL_DATABASE', 'guestbook'))

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

    artist_id      = db.Column(db.String(191),  primary_key=True)
    name           = db.Column(db.String(256),  nullable=False)
    multiverse_ids = db.relationship('Edition', backref ='artist', lazy='dynamic')

    def __init__(self, artist_id, name):
        self.artist_id = artist_id
        self.name      = name

    def __repr__(self):
        return "[Artist: artist_id={}, name={}]".format(self.artist_id, self.name)

    @property
    def serialize_part(self):
        return dict(artist_id=self.artist_id, name=self.name)

    @property
    def serialize_full(self):
        d = self.serialize_part
        d['multiverse_ids'] = self.serialize_multiverse_ids
        return d

    @property
    def serialize_multiverse_ids(self):
        return [ item.serialize for item in self.multiverse_ids ]


class Set(db.Model):
    __tablename__ = 'set'

    set_id         = db.Column(db.String(191),  primary_key=True)
    name           = db.Column(db.String(256),  nullable=False)
    multiverse_ids = db.relationship('Edition', backref ='set', lazy='dynamic')

    def __init__(self, set_id, name):
        self.set_id = set_id
        self.name   = name

    def __repr__(self):
        return "[Set: set_id={}, name={}]".format(self.set_id, self.name)

    @property
    def serialize_part(self):
        return dict(set_id=self.set_id, name=self.name)

    @property
    def serialize_full(self):
        d = self.serialize_part
        d['multiverse_ids'] = self.serialize_multiverse_ids
        return d

    @property
    def serialize_multiverse_ids(self):
        return [ item.serialize for item in self.multiverse_ids ]

class Card(db.Model):
    __tablename__ = 'card'

    card_id        = db.Column(db.String(191),  primary_key=True)
    name           = db.Column(db.String(256),  nullable=False)
    colors         = db.Column(db.String(256),  nullable=False)
    cost           = db.Column(db.String(256),  nullable=False)
    cmc            = db.Column(db.Integer,      nullable=False)
    text           = db.Column(db.String(1024), nullable=True)
    types          = db.Column(db.String(256),  nullable=False)
    formats        = db.Column(db.String(256),  nullable=False)
    subtypes       = db.Column(db.String(256),  nullable=True)
    power          = db.Column(db.String(256),  nullable=True)
    toughness      = db.Column(db.String(256),  nullable=True)
    multiverse_ids = db.relationship('Edition', backref ='card', lazy='dynamic')

    def __init__(self, cost, cmc, text, types, name, card_id, formats,
                 subtypes, colors, power, toughness):
        self.card_id   = card_id
        self.name      = name
        self.colors    = colors
        self.cost      = cost
        self.cmc       = cmc
        self.text      = text
        self.types     = types
        self.formats   = formats
        self.subtypes  = subtypes
        self.power     = power
        self.toughness = toughness

    def __repr__(self):
        return """[Card: card_id={}, name={}, colors={}, cost={}, cmc={},
                   text={}, types={}, formats={}, subtypes={}, power={},
                   toughness={}]""".format(
                    self.card_id, self.name, self.colors, self.cost, self.cmc,
                    self.text, self.types, self.formats, self.subtypes,
                    self.power, self.toughness)

    @property
    def serialize_part(self):
        return dict(card_id=self.card_id, name=self.name,
                    colors=self.colors,
                    cost=self.cost, cmc=self.cmc, text=self.text,
                    types=self.types, formats=self.formats,
                    subtypes=self.subtypes, power=self.power,
                    toughness=self.toughness)

    @property
    def serialize_full(self):
        d = self.serialize_part
        d['multiverse_ids'] = self.serialize_multiverse_ids
        return d

    @property
    def serialize_multiverse_ids(self):
        return [ item.serialize for item in self.multiverse_ids ]

class Edition(db.Model):
    __tablename__ = 'edition'

    multiverse_id = db.Column(db.String(191), primary_key=True)
    artist_id     = db.Column(db.String(191), db.ForeignKey('artist.artist_id'))
    set_id        = db.Column(db.String(191), db.ForeignKey('set.set_id'))
    card_id       = db.Column(db.String(191), db.ForeignKey('card.card_id'))
    image_url     = db.Column(db.String(256), nullable=False)
    flavor        = db.Column(db.String(512), nullable=True)
    rarity        = db.Column(db.String(256), nullable=False)
    number        = db.Column(db.String(256), nullable=False)
    layout        = db.Column(db.String(256), nullable=False)

    def __init__(self, multiverse_id, artist_id, set_id, card_id, image_url,
                 flavor, rarity, number, layout):
        self.multiverse_id = multiverse_id
        self.artist_id     = artist_id
        self.set_id        = set_id
        self.card_id       = card_id
        self.image_url     = image_url
        self.flavor        = flavor
        self.rarity        = rarity
        self.number        = number
        self.layout        = layout

    def __repr__(self):
        return """[Edition: multiverse_id={}, artist_id={}, set_id={},
                   card_id={}, image_url={}, flavor={}, rarity={},
                   number={}, layout={}]""".format(self.multiverse_id,
                    self.artist_id, self.set_id, self.card_id, self.image_url,
                    self.flavor, self.rarity, self.number, self.layout)

    @property
    def serialize(self):
        return dict(multiverse_id=self.multiverse_id, artist_id=self.artist_id,
                    set_id=self.set_id, card_id=self.card_id,
                    image_url=self.image_url, flavor=self.flavor,
                    rarity=self.rarity, number=self.number, layout=self.layout,
                    card_name=self.card.name, artist_name=self.artist.name, set_name=self.set.name)

def serialize_card_table_data():    
    sql = '''SELECT
                c.name,
                c.card_id,
                c.cost,
                GROUP_CONCAT(DISTINCT e.multiverse_id SEPARATOR '|!|') AS editions,
                GROUP_CONCAT(DISTINCT e.rarity SEPARATOR '|!|') AS rarities,
                GROUP_CONCAT(DISTINCT a.name SEPARATOR '|!|') AS artists,
                GROUP_CONCAT(DISTINCT a.artist_id SEPARATOR '|!|') AS artist_ids,
                GROUP_CONCAT(DISTINCT s.name  SEPARATOR '|!|') AS sets,
                GROUP_CONCAT(DISTINCT s.set_id SEPARATOR '|!|') AS set_ids,
                count(*) AS num_editions
        FROM
            card AS c
        LEFT JOIN
            edition AS e ON e.card_id = c.card_id
        LEFT JOIN
            artist AS a ON a.artist_id = e.artist_id
        LEFT JOIN
            `set` AS s ON s.set_id = e.set_id
        GROUP BY
            c.name
    '''
    #convert the list of dicts to an array of objects
    ret = []
    for x, i in enumerate(db.engine.execute(sql).fetchall()):
        artists=[]
        # if i['artists'] != None:
        dbArtists=i['artists'].split('|!|')
        artist_ids=i['artist_ids'].split('|!|')
        for key, j in enumerate(dbArtists):
            artists.append({'artist_id':artist_ids[key], 'name':j})

        sets=[]
        # if i['sets'] != None:
        dbSets=i['sets'].split('|!|')
        set_ids=i['set_ids'].split('|!|')
        for key, j in enumerate(dbSets):
            sets.append({'set_id':set_ids[key], 'name':j})

        ret.append({'name':i['name'], 'card_id':i['card_id'], 'cost':i['cost'],
        'editions':i['editions'], 'rarities':i['rarities'], 'artists':artists, 'sets':sets, 
        'num_editions':i['num_editions']})
    return ret

def serialize_artist_table_data():
    sql = '''select     a.name,
                        a.artist_id,
                        count(*) as total,
                        cast(sum(case when e.rarity='common' then 1 else 0 end) as signed) as commons,
                        cast(sum(case when e.rarity='uncommon' then 1 else 0 end) as signed) as uncommons,
                        cast(sum(case when e.rarity='rare' then 1 else 0 end) as signed) as rares,
                        cast(sum(case when e.rarity='mythic' then 1 else 0 end) as signed) as mythics
             from       artist as a
             inner join edition as e
             on         a.artist_id=e.artist_id
             group by   a.artist_id
          '''
    # convert the list of dicts to an array of objects
    ret = []
    for i in db.engine.execute(sql).fetchall():
        ret.append({'name':i['name'], 'artist_id':i['artist_id'], 'total':i['total'], 'commons':i['commons'], 'uncommons':i['uncommons'], 'rares':i['rares'], 'mythics':i['mythics']})
    return ret

def serialize_set_table_data():
    sql = '''select     s.name,
                        s.set_id,
                        count(*) as total,
                        cast(sum(case when e.rarity='common' then 1 else 0 end) as signed) as commons,
                        cast(sum(case when e.rarity='uncommon' then 1 else 0 end) as signed) as uncommons,
                        cast(sum(case when e.rarity='rare' then 1 else 0 end) as signed) as rares,
                        cast(sum(case when e.rarity='mythic' then 1 else 0 end) as signed) as mythics
             from       `set` as s
             inner join edition as e
             on         s.set_id=e.set_id
             group by   s.set_id
          '''
    # convert the list of dicts to an array of objects
    ret = []
    for i in db.engine.execute(sql).fetchall():
        ret.append({'name':i['name'], 'set_id':i['set_id'], 'total':i['total'], 'commons':i['commons'], 'uncommons':i['uncommons'], 'rares':i['rares'], 'mythics':i['mythics']})
    return ret 

##################################################################
###################### VIEWS/CONTROLLERS #########################
##################################################################

######################
# Routes for Home page (NOTE:INDEX IS THE ONLY TEMPLATE SERVED BY SERVER, ALL OTHERS ARE LOADED BY ANGULAR!)
######################
@app.route('/index.html', methods=['GET'])
def indexHTML(): # pragma: no cover
    return redirect(url_for('index'))

@app.route('/', methods=['GET'])
def index(): # pragma: no cover
    logger.debug("index")
    return render_template('index.html', cards=Card.query.all())

######################
# Routes for JSON API REST Endpoints
######################
@app.route('/api/artists',  methods=['GET'])
def artistsAPI(): # pragma: no cover
    logger.debug("artists")
    artists = [artist.serialize_part for artist in Artist.query.all()]
    return json.dumps(artists, sort_keys=True,
                     indent=4, separators=(',', ': '))

@app.route('/api/artists/<path:artist_id>', methods=['GET'])
def artistAPI(artist_id): # pragma: no cover
    logger.debug("artist")
    artist = [Artist.query.get(artist_id).serialize_full]
    return json.dumps(artist, sort_keys=True,
                     indent=4, separators=(',', ': '))

@app.route('/api/artistTable', methods=['GET'])
def artistTable(): # pragma: no cover
    return json.dumps(serialize_artist_table_data(), sort_keys=True,
                     indent=4, separators=(',', ': '))

@app.route('/api/sets',  methods=['GET'])
def setsAPI(): # pragma: no cover
    logger.debug("sets")
    sets = [card_set.serialize_part for card_set in Set.query.all()]
    return json.dumps(sets, sort_keys=True,
                     indent=4, separators=(',', ': '))

@app.route('/api/sets/<path:set_id>',  methods=['GET'])
def setAPI(set_id): # pragma: no cover
    logger.debug("card_set")
    card_set = [Set.query.get(set_id).serialize_full]
    return json.dumps(card_set, sort_keys=True,
                     indent=4, separators=(',', ': '))

@app.route('/api/setTable', methods=['GET'])
def setTable(): # pragma: no cover
    return json.dumps(serialize_set_table_data(), sort_keys=True,
                     indent=4, separators=(',', ': '))

@app.route('/api/cards',  methods=['GET'])
def cardsAPI(): # pragma: no cover
    logger.debug("cards")
    cards = [card.serialize_full for card in Card.query.all()] #NOTE: thanks to the @property serializers on the Card model!
    ret = json.dumps(cards, sort_keys=True,
                   indent=4, separators=(',', ': '))
    ret = app.make_response(ret)
    ret.mimetype = 'application/json'
    return ret

@app.route('/api/cards/<path:card_id>',  methods=['GET'])
def cardAPI(card_id): # pragma: no cover
    logger.debug("card")
    card = [Card.query.get(card_id).serialize_full]
    ret = json.dumps(card, sort_keys=True,
                   indent=4, separators=(',', ': '))
    ret = app.make_response(ret)
    ret.mimetype = 'application/json'
    return ret

@app.route('/api/cardsTable', methods=['GET'])
def cardsTable(): # pragma: no cover
    return json.dumps(serialize_card_table_data(), sort_keys=True,
                     indent=4, separators=(',', ': '))

@app.route('/api/editions/<path:multiverse_id>',  methods=['GET'])
def editionAPI(multiverse_id): # pragma: no cover
    logger.debug("edition")
    edition = [Edition.query.get(multiverse_id).serialize]
    return json.dumps(edition, sort_keys=True,
                     indent=4, separators=(',', ': '))

##################################################################
###################### FLASK MANAGER COMMANDS ####################
##################################################################
def addCard(card_args):
    card = Card(**card_args)
    db.session.add(card)
    db.session.commit()

def addArtist(artist_args):
    artist = Artist(**artist_args)
    db.session.add(artist)
    db.session.commit()

def addEdition(edition_args):
    edition = Edition(**edition_args)
    db.session.add(edition)
    db.session.commit()

def addSet(set_args):
    the_set = Set(**set_args)
    db.session.add(the_set)
    db.session.commit()

@manager.command
def create_db():
    logger.debug("create_db")
    app.config['SQLALCHEMY_ECHO'] = False
    db.create_all()

@manager.command
def drop_db(): # pragma: no cover
    logger.debug("drop_db")
    app.config['SQLALCHEMY_ECHO'] = False
    db.drop_all()

##################################################################
###################### PYTHON MAIN ###############################
##################################################################
logger.debug("Welcome to Data: The Gathering!")
logger.debug("The log statement below is for educational purposes only. Do *not* log credentials.")
logger.debug("%s", SQLALCHEMY_DATABASE_URI)

if __name__ == '__main__': # pragma: no cover
    manager.run()

##################################################################
###################### PYTHON TESTS ##############################
##################################################################

@app.route('/tests/runtests')
def tests(): # pragma: no cover
    p = subprocess.Popen(["python3", "tests.py"],
        stdout = subprocess.PIPE,
        stderr = subprocess.PIPE,
        stdin = subprocess.PIPE)
    out, err = p.communicate()
    return render_template('tests.html', output = (err + out).decode())
