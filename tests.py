import unittest

from carina.app import app
#from carina.app.app import addArtist
#from carina.app.app import addCard
#from carina.app.app import addEdition
#from carina.app.app import addSet

class MainTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(self):
        app.drop_db()
        app.create_db()

    def test_artist_1(self):
        app.addArtist(1, 'Mark')
        artists = app.Artist.query.all()
        self.assertEqual(len(artists), 1)
        self.assertEqual(artists[0].name, 'Mark')
        self.assertEqual(artists[0].artist_id, 1)

    def test_artist_2(self):
        app.addArtist(2, 'Stephanie')
        artists = app.Artist.query.all()
        self.assertEqual(len(artists), 2)
        self.assertEqual(artists[1].name, 'Stephanie')
        self.assertEqual(artists[1].artist_id, 2)

    def test_artist_3(self):
        try:
            app.addArtist(1, 'Mark')
        except:
            app.db.session.rollback()
        else:
            print("No error.") # We know this is the wrong way to do this,
                               # but the regular way didn't work.
            assert 0

    def test_card_1(self):
        app.addCard(1, 'Isolation Zone', 'White', '{2}{W}{W}', 4)
        cards = app.Card.query.all()
        self.assertEqual(len(cards), 1)
        self.assertEqual(cards[0].name, 'Isolation Zone')
        self.assertEqual(cards[0].colors, 'White')
        self.assertEqual(cards[0].cost, '{2}{W}{W}')
        self.assertEqual(cards[0].cmc, 4)

    def test_card_2(self):
        app.addCard(2, 'Kor Sky Climber', 'White', '{2}{W}', 3)
        app.addCard(3, "Iona's Blessing", 'White', '{3}{W}', 4)
        cards = app.Card.query.all()
        self.assertEqual(len(cards), 3)
        self.assertEqual(cards[2].name, "Iona's Blessing")
        self.assertEqual(cards[2].colors, 'White')
        self.assertEqual(cards[2].cost, '{3}{W}')
        self.assertEqual(cards[2].cmc, 4)

    def test_card_3(self):
        try:
            app.addCard(1, 'Isolation Zone', 'White', '{2}{W}{W}', 4)
        except:
            app.db.session.rollback()
        else:
            print("No error.") # We know this is the wrong way to do this,
                               # but the regular way didn't work.
            assert 0

    def test_edition_1(self):
        app.addSet(1, 'OGW')
        app.addEdition(42, 1, 1, 1)
        editions = app.Edition.query.all()
        self.assertEqual(len(editions), 1)
        e = editions[0]
        self.assertEqual(e.multiverse_id, 42)
        self.assertEqual(e.artist_id, 1)
        self.assertEqual(e.set_id, 1)
        self.assertEqual(e.card_id, 1)

    def test_edition_2(self):
        app.addEdition(666, 2, 1, 1)
        editions = app.Edition.query.all()
        self.assertEqual(len(editions), 2)
        e = editions[1]
        self.assertEqual(e.multiverse_id, 666)
        self.assertEqual(e.artist_id, 2)
        self.assertEqual(e.set_id, 1)
        self.assertEqual(e.card_id, 1)

    def test_edition_3(self):
        try:
            app.addEdition(42, 2, 1, 1)
        except:
            app.db.session.rollback()
        else:
            print("No error.") # We know this is the wrong way to do this,
                               # but the regular way didn't work.
            assert 0

    def test_edition_4(self):
        stephanie = app.Artist.query.filter_by(artist_id=2).first()
        app.db.session.delete(stephanie)
        app.db.session.commit()
        editions = app.Edition.query.all()
        self.assertEqual(len(editions), 2)
        e = editions[1]
        self.assertEqual(e.multiverse_id, 666)
        self.assertEqual(e.artist_id, None)
        self.assertEqual(e.set_id, 1)
        self.assertEqual(e.card_id, 1)

    def test_set_1(self):
        sets = app.Set.query.all()
        self.assertEqual(len(sets), 1)
        self.assertEqual(sets[0].name, 'OGW')
        self.assertEqual(sets[0].set_id, 1)

    def test_set_2(self):
        app.addSet(2, 'Stephanie')
        sets = app.Set.query.all()
        self.assertEqual(len(sets), 2)
        self.assertEqual(sets[1].name, 'Stephanie')
        self.assertEqual(sets[1].set_id, 2)

    def test_set_3(self):
        try:
            app.addSet(1, 'Mark')
        except:
            app.db.session.rollback()
        else:
            print("No error.") # We know this is the wrong way to do this,
                               # but the regular way didn't work.
            assert 0


if __name__ == '__main__':
    unittest.main()
