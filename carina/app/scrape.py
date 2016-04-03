from requests import get

import app

def doInsertCard(card):
    a       = {}
    a['cost']    = card['cost']
    a['cmc']     = card['cmc']
    a['text']    = card['text']
    a['types']   = str(card['types'])
    a['name']    = card['name']
    a['card_id'] = card['id']
    a['formats'] = str(card['formats'])
    if 'subtypes' in card:
        a['subtypes'] = str(card['subtypes'])
    else:
        a['subtypes'] = None
    if 'colors' in card:
        a['colors'] = str(card['colors'])
    else:
        a['colors'] = None
    if 'power' in card:
        a['power'] = card['power']
    else:
        a['power'] = None
    if 'toughness' in card:
        a['toughness'] = card['toughness']
    else:
        a['toughness'] = None
    app.addCard(a)

def idify(artist):
    return artist.lower().replace(' ', '_')

def doInsertArtist(info):
    artist = info['artist']
    artist_id = idify(artist)
    print("Artist:", artist, artist_id)
    artists = app.Artist.query.filter_by(artist_id=artist_id).all()
    print(artists)
    if len(artists) == 0:
        artist_args = dict(artist_id=artist_id, name=artist)
        app.addArtist(artist_args)

def doInsertSet(info):
    set_id = info['set_id']
    sets = app.Set.query.filter_by(set_id=set_id).all()
    if len(sets) == 0:
        set_url = 'http://api.deckbrew.com/mtg/sets/{}'.format(set_id)
        set_info = get(set_url).json()
        name = set_info['name']
        set_args = dict(set_id=set_id, name=name)
        app.addSet(set_args)

def doInsertEdition(card_id, info):
    edition_args = {}
    edition_args['multiverse_id'] = info['multiverse_id']
    edition_args['artist_id'] = idify(info['artist'])
    edition_args['set_id'] = info['set_id']
    edition_args['card_id'] = card_id
    edition_args['image_url'] = info['image_url']
    edition_args['flavor'] = info['flavor']
    edition_args['rarity'] = info['rarity']
    edition_args['number'] = info['number']
    if edition_args['number'] == '':
        edition_args['number'] = '0'
    edition_args['layout'] = info['layout']
    app.addEdition(edition_args)

def main():
    app.drop_db()
    app.create_db()
    url = "http://api.deckbrew.com/mtg/cards?page={}"
    i = 1
    total = 0
    g = get(url.format(i))
    j = g.json()
    # TODO: UNCOMMENT ME!!!!
    #while len(j) > 0:
    #    total += len(j)
    #    i += 1
    #    g = get(url.format(i))
    #    j = g.json()
    #    for thing in j:
    thing = j[1]
    doInsertCard(thing)
    print("EDS:", thing['editions'])
    for ed in thing['editions']:
        print(ed['multiverse_id'])
        doInsertArtist(ed)
        doInsertSet(ed)
        doInsertEdition(thing['id'], ed)
    print("I IZ DUN!", total)

if __name__ == '__main__':
    main()
