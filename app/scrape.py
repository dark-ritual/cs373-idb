from requests import get

import app

def doInsertCard(card):
    card_args       = {}
    card_args['cost']    = card['cost']
    card_args['cmc']     = card['cmc']
    card_args['text']    = card['text'].replace('−', '-')
    card_args['types']   = str(card['types'])
    card_args['name']    = card['name']
    card_args['card_id'] = card['id']
    card_args['formats'] = str(card['formats'])
    if 'subtypes' in card:
        card_args['subtypes'] = str(card['subtypes'])
    else:
        card_args['subtypes'] = None
    if 'colors' in card:
        card_args['colors'] = str(card['colors'])
    else:
        card_args['colors'] = '[]'
    if 'power' in card:
        card_args['power'] = card['power']
    else:
        card_args['power'] = None
    if 'toughness' in card:
        card_args['toughness'] = card['toughness']
    else:
        card_args['toughness'] = None
    app.addCard(card_args)

def idify(artist):
    return artist.lower().replace(' ', '_')

def doInsertArtist(info):
    artist = info['artist']
    artist_id = idify(artist)
    artists = app.Artist.query.filter_by(artist_id=artist_id).all()
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
    edition_args['multiverse_id'] = str(info['multiverse_id'])
    edition_args['artist_id']     = idify(info['artist'])
    edition_args['set_id']        = info['set_id']
    edition_args['card_id']       = card_id
    edition_args['image_url']     = info['image_url']
    try:
        edition_args['flavor'] = info['flavor']
    except:
        edition_args['flavor'] = ''
    edition_args['rarity'] = info['rarity']
    edition_args['number'] = info['number'].strip('★')
    if edition_args['number'] == '':
        edition_args['number'] = '0'
    edition_args['layout'] = info['layout']
    if (edition_args['layout'] in ['split', 'flip']) or edition_args['rarity'] not in ['common, uncommon', 'rare', 'mythic']:
        seen = app.Edition.query.filter_by(multiverse_id=edition_args['multiverse_id']+'a').all()
        if len(seen) == 1:
            edition_args['multiverse_id'] = edition_args['multiverse_id'] + 'b'
        else:
            edition_args['multiverse_id'] = edition_args['multiverse_id'] + 'a'
    print(edition_args['multiverse_id'])
    app.addEdition(edition_args)

def main():
    app.drop_db()
    app.create_db()
    url = "http://api.deckbrew.com/mtg/cards?page={}"
    i = 1
    total = 0
    skipped = 0
    g = get(url.format(i))
    j = g.json()
    while len(j) > 0:
        total += len(j)
        for thing in j:
            print(thing['id'])
            if thing['editions'][0]['set_id'] in ['UGL', 'UNH']:
                print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                skipped += 1
                continue # Unhinged, Unglued.
            if thing['editions'][0]['layout'] != 'normal':
                print("#########################################")
                skipped += 1
                continue # double faced, split, etc.
            eds = 0
            for ed in thing['editions']:
                print(ed['multiverse_id'])
                if ed['multiverse_id'] == 0:
                    print("*******************************************")
                    skipped += 1
                    continue
                if not eds:
                    doInsertCard(thing)
                doInsertArtist(ed)
                doInsertSet(ed)
                doInsertEdition(thing['id'], ed)
                eds += 1
#        if i > 5:
#        break
        i += 1
        g = get(url.format(i))
        j = g.json()
    print("Done!")
    print("Total:  ",total)
    print("Skipped:", skipped)
    print("Stored: ", total - skipped)

if __name__ == '__main__':
    main()
