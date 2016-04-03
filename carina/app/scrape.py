from requests import get

def doInsertCard(card):
    a       = {}
    a['cost']    = card['cost']
    a['cmc']     = card['cmc']
    a['text']    = card['text']
    a['types']   = card['types']
    a['name']    = card['name']
    a['card_id'] = card['id']
    a['formats'] = card['formats']
    if 'subtypes' in card:
        a['subtypes'] = card['subtypes']
    else:
        a['subtypes'] = None
    if 'colors' in card:
        a['colors'] = card['colors']
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
    addCard(a)

def main():
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
            # Artist:
                # artist
                # artist_id NEED TO FETCH THIS.
            # Set:
                # set
                # set_id
                # NUMBER?! (This will perhaps need another query if set not known.)
            # Edition:
                # artist
                # image_url
                # flavor
                # multiverse_id
                # set
                # set_id
                # rarity
                # number
                # layout
    #    break
    print("I IZ DUN!", total)

if __name__ == '__main__':
    main()
