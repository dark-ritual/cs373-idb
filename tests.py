import unittest, app
import sys
from sqlalchemy.exc import SQLAlchemyError

def addArtist(aid, name):
    artist = app.Artist()
    artist.id = aid
    artist.name = name
    app.db.session.add(artist)
    app.db.session.commit()

def addCard(cid, name, colors, cost, cmc):
    card = app.Card()
    card.id = cid
    card.name = name
    card.url = 'http://dunno'
    card.store_url = 'https://also.dunno'
    card.colors = colors
    card.cost = cost
    card.cmc = cmc
    app.db.session.add(card)
    app.db.session.commit()

def addEdition(mid, aid, sid, cid):
    edition = app.Edition()
    edition.multiverse_id = mid
    edition.artist_id = aid
    edition.set_id = sid
    edition.card_id = cid
    app.db.session.add(edition)
    app.db.session.commit()

def addSet(sid, name):
    fred = app.Set()
    fred.id = sid
    fred.name = name
    app.db.session.add(fred)
    app.db.session.commit()

class MainTestCase(unittest.TestCase):

    def setUp(self):
        app.drop_db()
        app.create_db()

    def test_artist_1(self):
        addArtist(1, 'Mark')
        artists = app.Artist.query.all()
        self.assertEqual(len(artists), 1)
        self.assertEqual(artists[0].name, 'Mark')
        self.assertEqual(artists[0].id, 1)

    def test_artist_2(self):
        addArtist(1, 'Mark')
        addArtist(2, 'Stephanie')
        artists = app.Artist.query.all()
        self.assertEqual(len(artists), 2)
        self.assertEqual(artists[1].name, 'Stephanie')
        self.assertEqual(artists[1].id, 2)

    def test_artist_3(self):
        addArtist(1, 'Mark')
        try:
            addArtist(1, 'Mark')
        except:
            app.db.session.rollback()
        else:
            print("No error.") # We know this is the wrong way to do this,
                               # but the regular way didn't work.
            assert 0

    def test_card_1(self):
        addCard(1, 'Isolation Zone', 'White', '{2}{W}{W}', 4)
        cards = app.Card.query.all()
        self.assertEqual(len(cards), 1)
        self.assertEqual(cards[0].name, 'Isolation Zone')
        self.assertEqual(cards[0].colors, 'White')
        self.assertEqual(cards[0].cost, '{2}{W}{W}')
        self.assertEqual(cards[0].cmc, 4)

    def test_card_2(self):
        addCard(1, 'Isolation Zone', 'White', '{2}{W}{W}', 4)
        addCard(2, 'Kor Sky Climber', 'White', '{2}{W}', 3)
        addCard(3, "Iona's Blessing", 'White', '{3}{W}', 4)
        cards = app.Card.query.all()
        self.assertEqual(len(cards), 3)
        self.assertEqual(cards[2].name, "Iona's Blessing")
        self.assertEqual(cards[2].colors, 'White')
        self.assertEqual(cards[2].cost, '{3}{W}')
        self.assertEqual(cards[2].cmc, 4)

    def test_card_3(self):
        addCard(1, 'Isolation Zone', 'White', '{2}{W}{W}', 4)
        try:
            addCard(1, 'Isolation Zone', 'White', '{2}{W}{W}', 4)
        except:
            app.db.session.rollback()
        else:
            print("No error.") # We know this is the wrong way to do this,
                               # but the regular way didn't work.
            assert 0

    def test_set_1(self):
        addSet(1, 'Mark')
        sets = app.Set.query.all()
        self.assertEqual(len(sets), 1)
        self.assertEqual(sets[0].name, 'Mark')
        self.assertEqual(sets[0].id, 1)

    def test_set_2(self):
        addSet(1, 'Mark')
        addSet(2, 'Stephanie')
        sets = app.Set.query.all()
        self.assertEqual(len(sets), 2)
        self.assertEqual(sets[1].name, 'Stephanie')
        self.assertEqual(sets[1].id, 2)

    def test_set_3(self):
        addSet(1, 'Mark')
        try:
            addSet(1, 'Mark')
        except:
            app.db.session.rollback()
        else:
            print("No error.") # We know this is the wrong way to do this,
                               # but the regular way didn't work.
            assert 0

    def test_edition_1(self):
        addArtist(1, 'Mark')
        addCard(1, 'Isolation Zone', 'White', '{2}{W}{W}', 4)
        addSet(1, 'OGW')
        addEdition(42, 1, 1, 1)
        editions = app.Edition.query.all()
        self.assertEqual(len(editions), 1)
        e = editions[0]
        self.assertEqual(e.multiverse_id, 42)
        self.assertEqual(e.artist_id, 1)
        self.assertEqual(e.set_id, 1)
        self.assertEqual(e.card_id, 1)

    def test_edition_2(self):
        addArtist(1, 'Mark')
        addArtist(2, 'Stephanie')
        addCard(1, 'Isolation Zone', 'White', '{2}{W}{W}', 4)
        addSet(1, 'OGW')
        addEdition(42, 1, 1, 1)
        addEdition(666, 2, 1, 1)
        editions = app.Edition.query.all()
        self.assertEqual(len(editions), 2)
        e = editions[1]
        self.assertEqual(e.multiverse_id, 666)
        self.assertEqual(e.artist_id, 2)
        self.assertEqual(e.set_id, 1)
        self.assertEqual(e.card_id, 1)

    def test_edition_3(self):
        addArtist(1, 'Mark')
        addArtist(2, 'Stephanie')
        addCard(1, 'Isolation Zone', 'White', '{2}{W}{W}', 4)
        addSet(1, 'OGW')
        addEdition(42, 1, 1, 1)
        try:
            addEdition(42, 2, 1, 1)
        except:
            app.db.session.rollback()
        else:
            print("No error.") # We know this is the wrong way to do this,
                               # but the regular way didn't work.
            assert 0

    def test_edition_4(self):
        addArtist(1, 'Mark')
        addArtist(2, 'Stephanie')
        addCard(1, 'Isolation Zone', 'White', '{2}{W}{W}', 4)
        addSet(1, 'OGW')
        addEdition(42, 1, 1, 1)
        addEdition(666, 2, 1, 1)
        stephanie = app.Artist.query.filter_by(id=2).first()
        app.db.session.delete(stephanie)
        app.db.session.commit()
        editions = app.Edition.query.all()
        self.assertEqual(len(editions), 2)
        e = editions[1]
        self.assertEqual(e.multiverse_id, 666)
        self.assertEqual(e.artist_id, None)
        self.assertEqual(e.set_id, 1)
        self.assertEqual(e.card_id, 1)


if __name__ == '__main__':
    unittest.main()
