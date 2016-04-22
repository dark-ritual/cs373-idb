import unittest

import app
#from carina.app.app import addArtist
#from carina.app.app import addCard
#from carina.app.app import addEdition
#from carina.app.app import addSet
from sqlalchemy import exc

def insert_subroutine():
        artist_args = dict(artist_id='stephanie', name='Stephanie')
        app.addArtist(artist_args)
        set_args = dict(set_id='SOA', name='Set of Awesome')
        app.addSet(set_args)
        card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                        cost='{2}{W}', cmc=3, text='Flying',
                        formats='standard=True', types='Creature',
                        subtypes='Sample', power='3', toughness='2')
        app.addCard(card_args)
        edition_args = dict(multiverse_id='-666', artist_id='stephanie', set_id='SOA',
                           image_url='dummy-url',
                           card_id='sample-text', flavor='With rope...',
                           rarity='common', number='24', layout='normal')
        app.addEdition(edition_args)

def delete_subroutine():
        app.Artist.query.filter_by(artist_id='mark').delete()
        app.Edition.query.filter_by(multiverse_id='-666').delete()
        app.Card.query.filter_by(card_id='sample-text').delete()
        app.Set.query.filter_by(set_id='SOA').delete()
        app.Artist.query.filter_by(artist_id='stephanie').delete()
        app.db.session.commit()

class MainTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        app.create_db()
        # This will not hurt the DB if there is database in there.
        # But it is necessary for Travis where there is no DB already set-up.

    def test_artist_repr(self):
        try:
            artist_args = dict(artist_id='peter', name='Peter')
            app.addArtist(artist_args)
            self.assertEqual('[Artist: artist_id=peter, name=Peter]', repr(app.Artist.query.get('peter')))
        finally:
            app.Artist.query.filter_by(artist_id='peter').delete()
            app.db.session.commit()

    def test_artist_serialize_part(self):
        try:
            artist_args = dict(artist_id='peter', name='Peter')
            app.addArtist(artist_args)
            self.assertEqual(artist_args, app.Artist.query.get('peter').serialize_part)
        finally:
            app.Artist.query.filter_by(artist_id='peter').delete()
            app.db.session.commit()

    def test_artist_serialize_full(self):
        try:
            artist_args = dict(artist_id='stephanie', name='Stephanie')
            app.addArtist(artist_args)
            set_args = dict(set_id='SOA', name='Set of Awesome')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-666', artist_id='stephanie', set_id='SOA',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='With rope...',
                               rarity='common', number='24', layout='normal')
            app.addEdition(edition_args)
            artist_args['multiverse_ids'] = [app.Edition.query.get('-666').serialize]
            self.assertEqual(artist_args, app.Artist.query.get('stephanie').serialize_full)
        finally:
            app.Edition.query.filter_by(multiverse_id='-666').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='SOA').delete()
            app.Artist.query.filter_by(artist_id='stephanie').delete()
            app.db.session.commit()

    def test_artist_serialize_multiverse_ids(self):
        try:
            artist_args = dict(artist_id='stephanie', name='Stephanie')
            app.addArtist(artist_args)
            set_args = dict(set_id='SOA', name='Set of Awesome')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-666', artist_id='stephanie', set_id='SOA',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='With rope...',
                               rarity='common', number='24', layout='normal')
            app.addEdition(edition_args)
            edition_args = dict(card_name='Sample Text', set_name="Set of Awesome", artist_name='Stephanie', **edition_args)
            self.assertEqual([edition_args], app.Artist.query.get('stephanie').serialize_multiverse_ids)
        finally:
            app.Edition.query.filter_by(multiverse_id='-666').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='SOA').delete()
            app.Artist.query.filter_by(artist_id='stephanie').delete()
            app.db.session.commit()

    def test_artist_1(self):
        try:
            oldlen = len(app.Artist.query.all())
            artist_args = dict(artist_id='mark', name='Mark')
            app.addArtist(artist_args)
            self.assertEqual(oldlen + 1, len(app.Artist.query.all()))
            single = app.Artist.query.get('mark')
            self.assertEqual(single.artist_id, 'mark')
            self.assertEqual(single.name, 'Mark')
        finally:
            app.Artist.query.filter_by(artist_id='mark').delete()
            app.db.session.commit()

    def test_artist_2(self):
        try:
            oldlen = len(app.Artist.query.all())
            artist_args = dict(artist_id='stephanie', name='Stephanie')
            app.addArtist(artist_args)
            self.assertEqual(oldlen + 1, len(app.Artist.query.all()))
            single = app.Artist.query.get('stephanie')
            self.assertEqual(single.artist_id, 'stephanie')
            self.assertEqual(single.name,      'Stephanie')
        finally:
            app.Artist.query.filter_by(artist_id='stephanie').delete()
            app.db.session.commit()

    def test_artist_3(self):
        try:
            artist_args = dict(artist_id='mark', name='Mark')
            app.addArtist(artist_args)
            try:
                app.addArtist(artist_args)
            except exc.IntegrityError:
                app.db.session.rollback()
            else: # pragma: no cover
                print("No error.")
                assert 0
        finally:
            app.Artist.query.filter_by(artist_id='mark').delete()
            app.db.session.commit()

    def test_artist_serialize_table_data_paginated(self):
        try:
            oldlen = len(app.serialize_artist_table_data_paginated(0, 0))
            artist_args = dict(artist_id='stephanie', name='Stephanie')
            app.addArtist(artist_args)
            set_args = dict(set_id='SOA', name='Set of Awesome')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-666', artist_id='stephanie', set_id='SOA',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='With rope...',
                               rarity='common', number='24', layout='normal')
            app.addEdition(edition_args)
            app.serialize_artist_table_data_paginated(0, 0)
        finally:
            app.Artist.query.filter_by(artist_id='mark').delete()
            app.Edition.query.filter_by(multiverse_id='-666').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='SOA').delete()
            app.Artist.query.filter_by(artist_id='stephanie').delete()
            app.db.session.commit()
            self.assertEqual(oldlen, len(app.serialize_artist_table_data_paginated(0, 0)))

    def test_artist_serialize_table_data_pagination_sanity(self):
        data = app.serialize_artist_table_data_paginated(0, 0)
        self.assertEqual(data, app.serialize_artist_table_data_paginated(-42, 0))
        self.assertEqual(data, app.serialize_artist_table_data_paginated("Fred", "FRED"))
        self.assertEqual(data, app.serialize_artist_table_data_paginated("0", 0))

    def test_card_repr(self):
        try:
            card_args = dict(card_id='test-card', name='Test Card', colors="['White']",
                            cost='{2}{W}{W}', cmc=4, text='You know what it is',
                            types="['Enchantment']", formats="{'standard':'legal'}",
                            subtypes=None, power=None, toughness=None)
            app.addCard(card_args)
            self.assertEqual('''[Card: card_id=test-card, name=Test Card, colors=['White'], cost={2}{W}{W}, cmc=4,
                   text=You know what it is, types=['Enchantment'], formats={'standard':'legal'}, subtypes=None, power=None,
                   toughness=None]''', repr(app.Card.query.get('test-card')))
        finally:
            app.Card.query.filter_by(card_id='test-card').delete()
            app.db.session.commit()

    def test_card_serialize_part(self):
        try:
            card_args = dict(card_id='test-card', name='Test Card', colors='[White]',
                            cost='{2}{W}{W}', cmc=4, text='You know what it is',
                            types='Enchantment', formats='standard=True',
                            subtypes=None, power=None, toughness=None)
            app.addCard(card_args)
            self.assertEqual(card_args, app.Card.query.get('test-card').serialize_part)
        finally:
            app.Card.query.filter_by(card_id='test-card').delete()
            app.db.session.commit()

    def test_card_serialize_table_data_pagination(self):
        try:
            oldlen = len(app.serialize_card_table_data_paginated(0, 0))
            artist_args = dict(artist_id='stephanie', name='Stephanie')
            app.addArtist(artist_args)
            set_args = dict(set_id='SOA', name='Set of Awesome')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-666', artist_id='stephanie', set_id='SOA',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='With rope...',
                               rarity='common', number='24', layout='normal')
            app.addEdition(edition_args)

            set_args = dict(set_id='JGTHGKJH', name='Javier Grandious Tomahawking')
            app.addSet(set_args)
            edition_args = dict(multiverse_id='-667', artist_id='stephanie', set_id='JGTHGKJH',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='With rope...',
                               rarity='common', number='24', layout='normal')
            app.addEdition(edition_args)
            app.serialize_card_table_data_paginated(0, 0)
        finally:
            app.Edition.query.filter_by(multiverse_id='-666').delete()
            app.Edition.query.filter_by(multiverse_id='-667').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='JGTHGKJH').delete()
            # app.Artist.query.filter_by(artist_id='javier').delete()
            app.Set.query.filter_by(set_id='SOA').delete()
            app.Artist.query.filter_by(artist_id='stephanie').delete()
            app.db.session.commit()
            self.assertEqual(oldlen, len(app.serialize_card_table_data_paginated(0, 0)))

    def test_card_serialize_table_data_pagination_sanity(self):
        data = app.serialize_card_table_data_paginated(0, 0)
        self.assertEqual(data, app.serialize_card_table_data_paginated(-42, 0))
        self.assertEqual(data, app.serialize_card_table_data_paginated("Fred", "FRED"))
        self.assertEqual(data, app.serialize_card_table_data_paginated("0", 0))

    def test_card_serialize_full(self):
        try:
            artist_args = dict(artist_id='stephanie', name='Stephanie')
            app.addArtist(artist_args)
            set_args = dict(set_id='SOA', name='Set of Awesome')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-666', artist_id='stephanie', set_id='SOA',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='With rope...',
                               rarity='common', number='24', layout='normal')
            app.addEdition(edition_args)
            card_args['multiverse_ids'] = [app.Edition.query.get('-666').serialize]
            self.assertEqual(card_args, app.Card.query.get('sample-text').serialize_full)
        finally:
            app.Edition.query.filter_by(multiverse_id='-666').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='SOA').delete()
            app.Artist.query.filter_by(artist_id='stephanie').delete()
            app.db.session.commit()

    def test_card_serialize_multiverse_ids(self):
        try:
            artist_args = dict(artist_id='stephanie', name='Stephanie')
            app.addArtist(artist_args)
            set_args = dict(set_id='SOA', name='Set of Awesome')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-666', artist_id='stephanie', set_id='SOA',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='With rope...',
                               rarity='common', number='24', layout='normal')
            app.addEdition(edition_args)
            edition_args = dict(card_name='Sample Text', set_name="Set of Awesome", artist_name='Stephanie', **edition_args)
            self.assertEqual([edition_args], app.Card.query.get('sample-text').serialize_multiverse_ids)
        finally:
            app.Edition.query.filter_by(multiverse_id='-666').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='SOA').delete()
            app.Artist.query.filter_by(artist_id='stephanie').delete()
            app.db.session.commit()

    def test_card_1(self):
        try:
            oldlen = len(app.Card.query.all())
            card_args = dict(card_id='test-card', name='Test Card', colors='[White]',
                            cost='{2}{W}{W}', cmc=4, text='You know what it is',
                            types='Enchantment', formats='standard=True',
                            subtypes=None, power=None, toughness=None)
            app.addCard(card_args)
            single = app.Card.query.get('test-card')
            self.assertEqual(oldlen + 1, len(app.Card.query.all()))
            self.assertEqual(single.name,   'Test Card')
            self.assertEqual(single.colors, '[White]')
            self.assertEqual(single.cost,   '{2}{W}{W}')
            self.assertEqual(single.cmc,    4)
        finally:
            app.Card.query.filter_by(card_id='test-card').delete()
            app.db.session.commit()

    def test_card_2(self):
        try:
            oldlen = len(app.Card.query.all())
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            card_args = dict(card_id='spooky-card', name="Spooky Card", colors='[Black]',
                            cost='{3}{B}', cmc=4, text='Boo',
                            formats='standard=True', types='Enchantment',
                            subtypes='Aura', power=None, toughness=None)
            app.addCard(card_args)
            self.assertEqual(oldlen + 2, len(app.Card.query.all()))
            single = app.Card.query.get('spooky-card')
            self.assertEqual(single.name, "Spooky Card")
            self.assertEqual(single.colors, '[Black]')
            self.assertEqual(single.cost, '{3}{B}')
            self.assertEqual(single.cmc, 4)
        finally:
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Card.query.filter_by(card_id='spooky-card').delete()
            app.db.session.commit()

    def test_card_3(self):
        try:
            card_args = dict(card_id='bad-card', name="Bad Card", colors='[Red]',
                        cost='{3}{R}', cmc=4, text='Bad',
                        formats='standard=True', types='Enchantment',
                        subtypes='Aura', power=None, toughness=None)
            app.addCard(card_args)
            try:
                app.addCard(card_args)
            except exc.IntegrityError:
                app.db.session.rollback()
            else: # pragma: no cover
                print("No error.") # We know this is the wrong way to do this,
                                   # but the regular way didn't work.
                assert 0
        finally:
            app.Card.query.filter_by(card_id='bad-card').delete()
            app.db.session.commit()

    def test_edition_repr(self):
        try:
            artist_args = dict(artist_id='mark', name='Mark')
            app.addArtist(artist_args)
            set_args = dict(set_id='XXX', name='Xtra Xtravagant Xet')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-999', artist_id='mark', set_id='XXX',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='When properly aligned...',
                               rarity='rare', number='22', layout='normal')
            app.addEdition(edition_args)
            self.assertEqual('''[Edition: multiverse_id=-999, artist_id=mark, set_id=XXX,
                   card_id=sample-text, image_url=dummy-url, flavor=When properly aligned..., rarity=rare,
                   number=22, layout=normal]''', repr(app.Edition.query.get('-999')))
        finally:
            app.Edition.query.filter_by(multiverse_id='-999').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='XXX').delete()
            app.Artist.query.filter_by(artist_id='mark').delete()
            app.db.session.commit()

    def test_edition_serialize(self):
        try:
            artist_args = dict(artist_id='mark', name='Mark')
            app.addArtist(artist_args)
            set_args = dict(set_id='XXX', name='Xtra Xtravagant Xet')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-999', artist_id='mark', set_id='XXX',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='When properly aligned...',
                               rarity='rare', number='22', layout='normal')
            app.addEdition(edition_args)
            edition_args = dict(card_name='Sample Text', set_name="Xtra Xtravagant Xet", artist_name='Mark', **edition_args)
            self.assertEqual(edition_args, app.Edition.query.get('-999').serialize)
        finally:
            app.Edition.query.filter_by(multiverse_id='-999').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='XXX').delete()
            app.Artist.query.filter_by(artist_id='mark').delete()
            app.db.session.commit()

    def test_edition_1(self):
        try:
            oldlen = len(app.Edition.query.all())
            artist_args = dict(artist_id='mark', name='Mark')
            app.addArtist(artist_args)
            set_args = dict(set_id='XXX', name='Xtra Xtravagant Xet')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-999', artist_id='mark', set_id='XXX',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='When properly aligned...',
                               rarity='rare', number='22', layout='normal')
            app.addEdition(edition_args)
            self.assertEqual(oldlen + 1, len(app.Edition.query.all()))
            single = app.Edition.query.get('-999')
            self.assertEqual(single.multiverse_id, '-999')
            self.assertEqual(single.artist_id, 'mark')
            self.assertEqual(single.set_id, 'XXX')
            self.assertEqual(single.card_id, 'sample-text')
        finally:
            app.Edition.query.filter_by(multiverse_id='-999').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='XXX').delete()
            app.Artist.query.filter_by(artist_id='mark').delete()
            app.db.session.commit()

    def test_edition_2(self):
        try:
            oldlen = len(app.Edition.query.all())
            artist_args = dict(artist_id='stephanie', name='Stephanie')
            app.addArtist(artist_args)
            set_args = dict(set_id='SOA', name='Set of Awesome')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-666', artist_id='stephanie', set_id='SOA',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='With rope...',
                               rarity='common', number='24', layout='normal')
            app.addEdition(edition_args)
            self.assertEqual(oldlen + 1, len(app.Edition.query.all()))
            single = app.Edition.query.get('-666')
            self.assertEqual(single.multiverse_id, '-666')
            self.assertEqual(single.artist_id, 'stephanie')
            self.assertEqual(single.set_id, 'SOA')
            self.assertEqual(single.card_id, 'sample-text')
        finally:
            app.Edition.query.filter_by(multiverse_id='-666').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='SOA').delete()
            app.Artist.query.filter_by(artist_id='stephanie').delete()
            app.db.session.commit()

    def test_edition_3(self):
        try:
            oldlen = len(app.Edition.query.all())
            artist_args = dict(artist_id='stephanie', name='Stephanie')
            app.addArtist(artist_args)
            set_args = dict(set_id='SOA', name='Set of Awesome')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-666', artist_id='stephanie', set_id='SOA',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='With rope...',
                               rarity='common', number='24', layout='normal')
            app.addEdition(edition_args)
            try:
                app.addEdition(edition_args)
            except exc.IntegrityError:
                app.db.session.rollback()
            else: # pragma: no cover
                print("No error.")
                assert 0
        finally:
            app.Edition.query.filter_by(multiverse_id='-666').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='SOA').delete()
            app.Artist.query.filter_by(artist_id='stephanie').delete()
            app.db.session.commit()

    def test_search_1(self):
        try:
            artist_args = dict(artist_id='stephanie', name='Stephanie')
            app.addArtist(artist_args)
            set_args = dict(set_id='SOA', name='Set of Awesome')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='AoeUIDHtnS SNthDIueoA', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-666', artist_id='stephanie', set_id='SOA',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='With rope...',
                               rarity='common', number='24', layout='normal')
            app.addEdition(edition_args)
            self.assertEqual(len(app.search_card_names('aoeuidhtns snthdiueoa', 0)), 1)
            self.assertEqual(len(app.search_card_names('aoeuidhtns tsaoehaeuhohteouahs', 0)), 1) # To get an "or" result
        finally:
            app.Edition.query.filter_by(multiverse_id='-666').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='SOA').delete()
            app.Artist.query.filter_by(artist_id='stephanie').delete()
            app.db.session.commit()

    def test_search_pagination_sanity(self):
        data = app.search_card_names('flying', 0)
        self.assertEqual(data, app.search_card_names('flyiNG', -42))
        self.assertEqual(data, app.search_card_names('FlYing', "Fred"))
        self.assertEqual(data, app.search_card_names('FLYIng', "0"))

    def test_set_repr(self):
        try:
            set_args = dict(set_id='XXX', name='Xtra Xtravagant Xet')
            app.addSet(set_args)
            self.assertEqual('[Set: set_id=XXX, name=Xtra Xtravagant Xet]', repr(app.Set.query.get('XXX')))
        finally:
            app.Set.query.filter_by(set_id='XXX').delete()
            app.db.session.commit()

    def test_set_serialize_part(self):
        try:
            set_args = dict(set_id='XXX', name='Xtra Xtravagant Xet')
            app.addSet(set_args)
            self.assertEqual(set_args, app.Set.query.get('XXX').serialize_part)
        finally:
            app.Set.query.filter_by(set_id='XXX').delete()
            app.db.session.commit()

    def test_set_serialize_full(self):
        try:
            artist_args = dict(artist_id='stephanie', name='Stephanie')
            app.addArtist(artist_args)
            set_args = dict(set_id='SOA', name='Set of Awesome')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-666', artist_id='stephanie', set_id='SOA',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='With rope...',
                               rarity='common', number='24', layout='normal')
            app.addEdition(edition_args)
            set_args['multiverse_ids'] = [app.Edition.query.get('-666').serialize]
            self.assertEqual(set_args, app.Set.query.get('SOA').serialize_full)
        finally:
            app.Edition.query.filter_by(multiverse_id='-666').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='SOA').delete()
            app.Artist.query.filter_by(artist_id='stephanie').delete()
            app.db.session.commit()

    def test_set_serialize_multiverse_ids(self):
        try:
            artist_args = dict(artist_id='stephanie', name='Stephanie')
            app.addArtist(artist_args)
            set_args = dict(set_id='SOA', name='Set of Awesome')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-666', artist_id='stephanie', set_id='SOA',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='With rope...',
                               rarity='common', number='24', layout='normal')
            app.addEdition(edition_args)
            edition_args = dict(card_name='Sample Text', set_name="Set of Awesome", artist_name='Stephanie', **edition_args)
            self.assertEqual([edition_args], app.Set.query.get('SOA').serialize_multiverse_ids)
        finally:
            app.Edition.query.filter_by(multiverse_id='-666').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='SOA').delete()
            app.Artist.query.filter_by(artist_id='stephanie').delete()
            app.db.session.commit()

    def test_set_1(self):
        try:
            oldlen = len(app.Set.query.all())
            set_args = dict(set_id='XXX', name='Xtra Xtravagant Xet')
            app.addSet(set_args)
            self.assertEqual(oldlen + 1, len(app.Set.query.all()))
            single = app.Set.query.get('XXX')
            self.assertEqual(single.set_id, 'XXX')
            self.assertEqual(single.name, 'Xtra Xtravagant Xet')
        finally:
            app.Set.query.filter_by(set_id='XXX').delete()
            app.db.session.commit()

    def test_set_2(self):
        try:
            oldlen = len(app.Set.query.all())
            set_args = dict(set_id='XXX', name='Xtra Xtravagant Xet')
            app.addSet(set_args)
            set_args = dict(set_id='YYY', name='Yonder Yip Yaps')
            app.addSet(set_args)
            self.assertEqual(oldlen + 2, len(app.Set.query.all()))
            single = app.Set.query.get('YYY')
            self.assertEqual(single.set_id, 'YYY')
            self.assertEqual(single.name, 'Yonder Yip Yaps')
        finally:
            app.Set.query.filter_by(set_id='XXX').delete()
            app.Set.query.filter_by(set_id='YYY').delete()
            app.db.session.commit()

    def test_set_3(self):
        try:
            set_args = dict(set_id='XXX', name='Xtra Xtravagant Xet')
            app.addSet(set_args)
            try:
                app.addSet(set_args)
            except exc.IntegrityError:
                app.db.session.rollback()
            else: # pragma: no cover
                print("No error.")
                assert 0
        finally:
            app.Set.query.filter_by(set_id='XXX').delete()
            app.db.session.commit()

    def test_set_serialize_table_data_pagination(self):
        try:
            oldlen = len(app.serialize_set_table_data_paginated(0))
            artist_args = dict(artist_id='stephanie', name='Stephanie')
            app.addArtist(artist_args)
            set_args = dict(set_id='SOA', name='Set of Awesome')
            app.addSet(set_args)
            card_args = dict(card_id='sample-text', name='Sample Text', colors='[White]',
                            cost='{2}{W}', cmc=3, text='Flying',
                            formats='standard=True', types='Creature',
                            subtypes='Sample', power='3', toughness='2')
            app.addCard(card_args)
            edition_args = dict(multiverse_id='-666', artist_id='stephanie', set_id='SOA',
                               image_url='dummy-url',
                               card_id='sample-text', flavor='With rope...',
                               rarity='common', number='24', layout='normal')
            app.addEdition(edition_args)
            app.serialize_set_table_data_paginated(0)
        finally:
            app.Artist.query.filter_by(artist_id='mark').delete()
            app.Edition.query.filter_by(multiverse_id='-666').delete()
            app.Card.query.filter_by(card_id='sample-text').delete()
            app.Set.query.filter_by(set_id='SOA').delete()
            app.Artist.query.filter_by(artist_id='stephanie').delete()
            app.db.session.commit()
            self.assertEqual(oldlen, len(app.serialize_set_table_data_paginated(0)))

    def test_set_serialize_table_data_pagination_sanity(self):
        data = app.serialize_set_table_data_paginated(0)
        self.assertEqual(data, app.serialize_set_table_data_paginated(-42))
        self.assertEqual(data, app.serialize_set_table_data_paginated("Fred"))
        self.assertEqual(data, app.serialize_set_table_data_paginated("0"))

    def test_searchAPI(self):
        try:
            insert_subroutine()
            app.searchAPI("Sample", 0)
        finally:
            delete_subroutine()

    def test_artistsAPI(self):
        try:
            insert_subroutine()
            app.artistsAPI(0, 0)
        finally:
            delete_subroutine()

    def test_artistAPI(self):
        try:
            insert_subroutine()
            app.artistAPI("stephanie")
        finally:
            delete_subroutine()

    def test_setsAPI(self):
        try:
            insert_subroutine()
            app.setsAPI(0)
        finally:
            delete_subroutine()

    def test_setAPI(self):
        try:
            insert_subroutine()
            app.setAPI("SOA")
        finally:
            delete_subroutine()

    def test_cardsAPI(self):
        try:
            insert_subroutine()
            app.cardsAPI(0, 0)
        finally:
            delete_subroutine()

    def test_cardAPI(self):
        try:
            insert_subroutine()
            app.cardAPI("sample-text")
        finally:
            delete_subroutine()

    def test_editionAPI(self):
        try:
            insert_subroutine()
            app.editionAPI("-666")
        finally:
            delete_subroutine()

if __name__ == '__main__': # pragma: no cover
    unittest.main()
