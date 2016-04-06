import unittest

from carina.app import app
#from carina.app.app import addArtist
#from carina.app.app import addCard
#from carina.app.app import addEdition
#from carina.app.app import addSet
from sqlalchemy import exc

class MainTestCase(unittest.TestCase):

    # @classmethod
    # def setUpClass(self):
    #     app.drop_db()
    #     app.create_db()

    def test_artist_1(self):
        oldlen = len(app.Artist.query.all())
        artist_args = dict(artist_id='mark', name='Mark')
        app.addArtist(artist_args)
        self.assertEqual(oldlen + 1, app.Artist.query.all())
        single = app.Artist.query.get('mark')
        self.assertEqual(single.artist_id, 'mark')
        self.assertEqual(single.name, 'Mark')
        db.session.delete(single)
        db.session.commit()

    def test_artist_2(self):
        oldlen = len(app.Artist.query.all())
        artist_args = dict(artist_id='stephanie', name='Stephanie')
        app.addArtist(artist_args)
        self.assertEqual(oldlen + 1, app.Artist.query.all())
        single = app.Artist.query.get('stephanie')
        self.assertEqual(single.artist_id, 'stephanie')
        self.assertEqual(single.name,      'Stephanie')
        db.session.delete(single)
        db.session.commit()

    def test_artist_3(self):
        artist_args = dict(artist_id='mark', name='Mark')
        app.addArtist(artist_args)
        try:
            app.addArtist(artist_args)
        except exc.IntegrityError:
            app.db.session.rollback()
        else:
            print("No error.")
            assert 0
        db.session.delete(app.Artist.query.get('mark'))
        db.session.commit()

    def test_card_1(self):
        oldlen = len(app.Card.query.all())
        card_args = dict(card_id='test-card', name='Test Card', colors='[White]',
                        cost='{2}{W}{W}', cmc=4, text='You know what it is',
                        types='Enchantment', formats='standard=True',
                        subtypes=None, power=None, toughness=None)
        app.addCard(card_args)
        single = app.Card.query.get('test-card')
        self.assertEqual(oldlen + 1, app.Card.query.all())
        self.assertEqual(single.name,   'Test Card')
        self.assertEqual(single.colors, '[White]')
        self.assertEqual(single.cost,   '{2}{W}{W}')
        self.assertEqual(single.cmc,    4)
        db.session.delete(app.Card.query.get('test-card'))
        db.session.commit()

    def test_card_2(self):
        oldlen = len(app.Card.query.all())
        card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                        cost='{2}{W}', cmc=3, text='Flying',
                        formats='standard=True', types='Creature',
                        subtypes='Sample', power=3, toughness=2)
        app.addCard(card_args)
        card_args = dict(card_id='spooky-card', name="Spooky Card", colors='[Black]',
                        cost='{3}{B}', cmc=4, text='Boo',
                        formats='standard=True', types='Enchantment',
                        subtypes='Aura', power=None, toughness=None)
        app.addCard(card_args)
        self.assertEqual(oldlen + 2, app.Card.query.all())
        single = app.Card.query.get('spooky-card')
        self.assertEqual(single.name, "Spooky Card")
        self.assertEqual(single.colors, '[Black]')
        self.assertEqual(single.cost, '{3}{B}')
        self.assertEqual(single.cmc, 4)
        db.session.delete(app.Card.query.get('sample-text'))
        db.session.commit()
        db.session.delete(single)
        db.session.commit()

    def test_card_3(self):
        card_args = dict(card_id='bad-card', name="Bad Card", colors='[Red]',
                    cost='{3}{R}', cmc=4, text='Bad',
                    formats='standard=True', types='Enchantment',
                    subtypes='Aura', power=None, toughness=None)
        app.addCard(card_args)
        try:
            app.addCard(card_args)
        except exc.IntegrityError:
            app.db.session.rollback()
        else:
            print("No error.") # We know this is the wrong way to do this,
                               # but the regular way didn't work.
            assert 0
        db.session.delete(app.Card.query.get('bad-card'))
        db.session.commit()

    def test_edition_1(self):
        oldlen = len(app.Edition.query.all())
        edition_args = dict(multiverse_id='-999', artist_id='barack-obama', set_id='XXX',
                           image_url='dummy-url',
                           card_id='obamacare', flavor='When properly aligned...',
                           rarity='rare', number=22, layout='normal')
        app.addEdition(edition_args)
        self.assertEqual(oldlen + 1, len(app.Edition.query.all()))
        single = app.Edition.query.get('-999')
        self.assertEqual(single.multiverse_id, '-999')
        self.assertEqual(single.artist_id, 'barack-obama')
        self.assertEqual(single.set_id, 'XXX')
        self.assertEqual(single.card_id, 'obamacare')
        db.session.delete(app.Edition.query.get('-999'))
        db.session.commit()

    def test_edition_2(self):
        oldlen = len(app.Edition.query.all())
        edition_args = dict(multiverse_id='-666', artist_id='vladimir-putin', set_id='XXX',
                           image_url='dummy-url',
                           card_id='gazprom', flavor='With rope...',
                           rarity='common', number=24, layout='normal')
        app.addEdition(edition_args)
        self.assertEqual(oldlen + 1, len(app.Edition.query.all()))
        single = app.Edition.query.get('-666')
        self.assertEqual(single.multiverse_id, '-666')
        self.assertEqual(single.artist_id, 'vladimir-putin')
        self.assertEqual(single.set_id, 'XXX')
        self.assertEqual(single.card_id, 'gazprom')
        db.session.delete(app.Edition.query.get('-666'))
        db.session.commit()

    def test_edition_3(self):
        edition_args = dict (multiverse_id='-7')
        app.addEdition(edition_args)
        try:
            app.addEdition(edition_args)
        except exc.IntegrityError:
            app.db.session.rollback()
        else:
            print("No error.")
            assert 0
        db.session.delete(app.Edition.query.get('-7'))
        db.session.commit()

    def test_set_1(self):
        oldlen = len(app.Set.query.all())
        set_args = dict(set_id='XXX' name='Xtra Xtravagant Xet')
        self.assertEqual(oldlen + 1, app.Set.query.all())
        single = app.Set.query.get('XXX')
        self.assertEqual(single.set_id, 'XXX')
        self.assertEqual(single.name, 'Xtra Xtravagant Xet')
        db.session.delete(app.Edition.query.get('XXX'))
        db.session.commit()

    def test_set_2(self):
        oldlen = len(app.Set.query.all())
        set_args = dict(set_id='XXX' name='Xtra Xtravagant Xet')
        app.addSet(set_args)
        set_args = dict(set_id='YYY', name='Yonder Yip Yaps')
        app.addSet(set_args)
        self.assertEqual(oldlen + 2, app.Set.query.all())
        single = app.Set.query.get(set_id='YYY')
        self.assertEqual(single.set_id, 'YYY')
        self.assertEqual(single.name, 'Yonder Yip Yaps')
        db.session.delete(app.Edition.query.get('XXX'))
        db.session.commit()
        db.session.delete(single)
        db.session.commit()

    def test_set_3(self):
        set_args = dict(set_id='ZZZ', name='Zany Ziggurat Zaar')
        app.addSet(set_args)
        try:
            app.addSet(set_args)
        except exc.IntegrityError:
            app.db.session.rollback()
        else:
            print("No error.") # We know this is the wrong way to do this,
                               # but the regular way didn't work.
            assert 0
        db.session.delete(app.Edition.query.get('ZZZ'))
        db.session.commit()


if __name__ == '__main__':
    unittest.main()
