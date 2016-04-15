from app import app
app.drop_db()
app.create_db()
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
artist_args = dict(artist_id='javier', name='Javier')
app.addArtist(artist_args)
set_args = dict(set_id='JGTHGKJH', name='Javier Grandious Tomahawking')
app.addSet(set_args)
edition_args = dict(multiverse_id='666', artist_id='javier', set_id='JGTHGKJH',
                   image_url='dummy-url',
                   card_id='sample-text', flavor='With rope...',
                   rarity='common', number='24', layout='normal')
app.addEdition(edition_args)
print(app.serialize_card_table_data())
# from app import app
# app.drop_db()
# app.create_db()
