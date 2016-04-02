from requests import get

def doInsertCard(card):
    cost    = card['cost']
    cmc     = card['cmc']
    text    = card['text']
    types   = card['types']
    name    = card['name']
    cid     = card['id'] # cid = card id
    formats = card['formats']
    if 'subtypes' in card:
        subtypes = card['subtypes']
    else:
        subtypes = None
    if 'colors' in card:
        colors = card['colors']
    else:
        colors = None
    if 'power' in card:
        power = card['power']
    else:
        power = None
    if 'toughness' in card:
        toughness = card['toughness']
    else:
        toughness = None


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
