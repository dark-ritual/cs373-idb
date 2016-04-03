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
        artist_args = dict(artist_id='1', name='Mark')
        app.addArtist(artist_args)
        artists = app.Artist.query.all()
        self.assertEqual(len(artists), 1)
        self.assertEqual(artists[0].name, 'Mark')
        self.assertEqual(artists[0].artist_id, '1')

    def test_artist_2(self):
        artist_args = dict(artist_id='2', name='Stephanie')
        app.addArtist(artist_args)
        artists = app.Artist.query.all()
        self.assertEqual(len(artists), 2)
        self.assertEqual(artists[1].name, 'Stephanie')
        self.assertEqual(artists[1].artist_id, '2')

    def test_artist_3(self):
        try:
            artist_args = dict(artist_id='1', name='Mark')
            app.addArtist(artist_args)
        except:
            app.db.session.rollback()
        else:
            print("No error.") # We know this is the wrong way to do this,
                               # but the regular way didn't work.
            assert 0

    def test_card_1(self):
        cardargs = dict(card_id='1', name='Isolation Zone', colors='[White]',
                        cost='{2}{W}{W}', cmc=4, text='Lorem ipsum',
                        formats='standard=True', types='Enchantment',
                        subtypes=None, power=None, toughness=None)
        app.addCard(cardargs)
        cards = app.Card.query.all()
        self.assertEqual(len(cards), 1)
        self.assertEqual(cards[0].name, 'Isolation Zone')
        self.assertEqual(cards[0].colors, '[White]')
        self.assertEqual(cards[0].cost, '{2}{W}{W}')
        self.assertEqual(cards[0].cmc, 4)

    def test_card_2(self):
        cardargs = dict(card_id='2', name='Kor Sky Climber', colors='[White]',
                        cost='{2}{W}', cmc=3, text='Flying',
                        formats='standard=True', types='Creature',
                        subtypes='Kor Ally', power=3, toughness=2)
        app.addCard(cardargs)
        cardargs = dict(card_id='3', name="Iona's Blessing", colors='[White]',
                        cost='{3}{W}', cmc=4, text='Lorem ipsum',
                        formats='standard=True', types='Enchantment',
                        subtypes='Aura', power=None, toughness=None)
        app.addCard(cardargs)
        cards = app.Card.query.all()
        self.assertEqual(len(cards), 3)
        self.assertEqual(cards[2].name, "Iona's Blessing")
        self.assertEqual(cards[2].colors, '[White]')
        self.assertEqual(cards[2].cost, '{3}{W}')
        self.assertEqual(cards[2].cmc, 4)

    def test_card_3(self):
        try:
            app.addCard('1', 'Isolation Zone', 'White', '{2}{W}{W}', 4)
        except:
            app.db.session.rollback()
        else:
            print("No error.") # We know this is the wrong way to do this,
                               # but the regular way didn't work.
            assert 0

    def test_edition_1(self):
        set_args = dict(set_id='OGW', name='Oath of the Gatewatch')
        app.addSet(set_args)
        editionargs = dict(multiverse_id=42, artist_id='1', set_id='OGW',
                           image_url='http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=407532&type=card',
                           card_id='1', flavor='When properly aligned...',
                           rarity='uncommon', number=22, layout='normal')
        app.addEdition(editionargs)
        editions = app.Edition.query.all()
        self.assertEqual(len(editions), 1)
        e = editions[0]
        self.assertEqual(e.multiverse_id, 42)
        self.assertEqual(e.artist_id, '1')
        self.assertEqual(e.set_id, 'OGW')
        self.assertEqual(e.card_id, '1')

    def test_edition_2(self):
        editionargs = dict(multiverse_id=666, artist_id='2', set_id='OGW',
                           image_url='http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=407534&type=card',
                           card_id='2', flavor='With rope...',
                           rarity='common', number=24, layout='normal')
        app.addEdition(editionargs)
        editions = app.Edition.query.all()
        self.assertEqual(len(editions), 2)
        e = editions[1]
        self.assertEqual(e.multiverse_id, 666)
        self.assertEqual(e.artist_id, '2')
        self.assertEqual(e.set_id, 'OGW')
        self.assertEqual(e.card_id, '2')

    def test_edition_3(self):
        try:
            app.addEdition(42, '2', '1', '1')
        except:
            app.db.session.rollback()
        else:
            print("No error.") # We know this is the wrong way to do this,
                               # but the regular way didn't work.
            assert 0

    def test_edition_4(self):
        stephanie = app.Artist.query.filter_by(artist_id='2').first()
        app.db.session.delete(stephanie)
        app.db.session.commit()
        editions = app.Edition.query.all()
        self.assertEqual(len(editions), 2)
        e = editions[1]
        self.assertEqual(e.multiverse_id, 666)
        self.assertEqual(e.artist_id, None)
        self.assertEqual(e.set_id, 'OGW')
        self.assertEqual(e.card_id, '2')

    def test_set_1(self):
        sets = app.Set.query.all()
        self.assertEqual(len(sets), 1)
        self.assertEqual(sets[0].name, 'Oath of the Gatewatch')
        self.assertEqual(sets[0].set_id, 'OGW')

    def test_set_2(self):
        set_args = dict(set_id='BFZ', name='Battle for Zendikar')
        app.addSet(set_args)
        sets = app.Set.query.all()
        self.assertEqual(len(sets), 2)
        sets = app.Set.query.filter_by(set_id='BFZ')
        self.assertEqual(sets[0].name, 'Battle for Zendikar')
        self.assertEqual(sets[0].set_id, 'BFZ')

    def test_set_3(self):
        try:
            set_args = dict(set_id='OGW', name='Oath of the Gatewatch')
            app.addSet(set_args)
        except:
            app.db.session.rollback()
        else:
            print("No error.") # We know this is the wrong way to do this,
                               # but the regular way didn't work.
            assert 0


if __name__ == '__main__':
    unittest.main()
