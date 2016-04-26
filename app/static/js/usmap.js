	var states = {
		"CA": {
		"latitude": "37.261463",
		"longitude": "-119.61164",
		"state_code": "CA",
		"state_name": "California"
		},
		"NY": {
		"latitude": "42.946097",
		"longitude": "-75.507057",
		"state_code": "NY",
		"state_name": "New York"
		},
		"TX": {
		"latitude": "31.497160",
		"longitude": "-99.358380",
		"state_code": "TX",
		"state_name": "Texas"
		},
		"WA": {
		"latitude": "47.367338",
		"longitude": "-120.42532",
		"state_code": "WA",
		"state_name": "Washington"
		}
	};

	var cities = {
  "05000": {
    "city_id": "05000",
    "city_name": "Austin",
    "latitude": "30.265887",
    "longitude": "-97.745876",
    "state_code": "TX"
  },
  "05210": {
    "city_id": "05210",
    "city_name": "Bellevue",
    "latitude": "47.6120339995241",
    "longitude": "-122.121582998787",
    "state_code": "WA"
  },
  "07396": {
    "city_id": "07396",
    "city_name": "Bellevue",
    "latitude": "33.6338544894988",
    "longitude": "-98.0163214693602",
    "state_code": "TX"
  },
  "19000": {
    "city_id": "19000",
    "city_name": "Dallas",
    "latitude": "32.775728",
    "longitude": "-96.798477",
    "state_code": "TX"
  },
  "33805": {
    "city_id": "33805",
    "city_name": "Issaquah",
    "latitude": "47.5491680040152",
    "longitude": "-122.041373510301",
    "state_code": "WA"
  },
  "35000": {
    "city_id": "35000",
    "city_name": "Houston",
    "latitude": "29.754839",
    "longitude": "-95.365104",
    "state_code": "TX"
  },
  "40070": {
    "city_id": "40070",
    "city_name": "Long Beach",
    "latitude": "46.3605875382172",
    "longitude": "-124.050326102283",
    "state_code": "WA"
  },
  "43000": {
    "city_id": "43000",
    "city_name": "Long Beach",
    "latitude": "33.776864",
    "longitude": "-118.155212",
    "state_code": "CA"
  },
  "43335": {
    "city_id": "43335",
    "city_name": "Long Beach",
    "latitude": "40.5893035105807",
    "longitude": "-73.6693818384998",
    "state_code": "NY"
  },
  "49670": {
    "city_id": "49670",
    "city_name": "Mountain View",
    "latitude": "37.40071",
    "longitude": "-122.072181",
    "state_code": "CA"
  },
  "57535": {
    "city_id": "57535",
    "city_name": "Redmond",
    "latitude": "47.6955722678668",
    "longitude": "-122.081545185594",
    "state_code": "WA"
  },
  "57745": {
    "city_id": "57745",
    "city_name": "Renton",
    "latitude": "47.4896894770116",
    "longitude": "-122.230477376736",
    "state_code": "WA"
  },
  "60102": {
    "city_id": "60102",
    "city_name": "Redwood City",
    "latitude": "37.4843929647298",
    "longitude": "-122.256960646405",
    "state_code": "CA"
  },
  "63000": {
    "city_id": "63000",
    "city_name": "Seattle",
    "latitude": "47.6148699998936",
    "longitude": "-122.291736499725",
    "state_code": "WA"
  },
  "67000": {
    "city_id": "67000",
    "city_name": "San Francisco",
    "latitude": "37.764744",
    "longitude": "-122.448635",
    "state_code": "CA"
  },
  "68000": {
    "city_id": "68000",
    "city_name": "San Jose",
    "latitude": "37.3759603331905",
    "longitude": "-121.834306787753",
    "state_code": "CA"
  },
  "68252": {
    "city_id": "68252",
    "city_name": "San Mateo",
    "latitude": "37.551213018337",
    "longitude": "-122.307129495105",
    "state_code": "CA"
  },
  "73262": {
    "city_id": "73262",
    "city_name": "South San Francisco",
    "latitude": "37.6537979966249",
    "longitude": "-122.40547084985",
    "state_code": "CA"
  },
  "84000": {
    "city_id": "84000",
    "city_name": "Yonkers",
    "latitude": "40.937118",
    "longitude": "-73.896617",
    "state_code": "NY"
  }
};

	var neighborhoods = {
  "1008": {
    "city_id": "60102",
    "neighborhood_id": "1008",
    "neighborhood_name": "Centennial",
    "state_code": "CA"
  },
  "10084": {
    "city_id": "35000",
    "neighborhood_id": "10084",
    "neighborhood_name": "Lindsey",
    "state_code": "TX"
  },
  "1009": {
    "city_id": "60102",
    "neighborhood_id": "1009",
    "neighborhood_name": "Farm Hill",
    "state_code": "CA"
  },
  "1010": {
    "city_id": "60102",
    "neighborhood_id": "1010",
    "neighborhood_name": "Friendly Acres",
    "state_code": "CA"
  },
  "1011": {
    "city_id": "60102",
    "neighborhood_id": "1011",
    "neighborhood_name": "Oak Knoll - Redwood Park",
    "state_code": "CA"
  },
  "1012": {
    "city_id": "60102",
    "neighborhood_id": "1012",
    "neighborhood_name": "Palm Park",
    "state_code": "CA"
  },
  "1013": {
    "city_id": "60102",
    "neighborhood_id": "1013",
    "neighborhood_name": "Redwood Oaks",
    "state_code": "CA"
  },
  "1014": {
    "city_id": "60102",
    "neighborhood_id": "1014",
    "neighborhood_name": "Redwood Shores",
    "state_code": "CA"
  },
  "1015": {
    "city_id": "60102",
    "neighborhood_id": "1015",
    "neighborhood_name": "Redwood Village",
    "state_code": "CA"
  },
  "1016": {
    "city_id": "60102",
    "neighborhood_id": "1016",
    "neighborhood_name": "Roosevelt",
    "state_code": "CA"
  },
  "1017": {
    "city_id": "60102",
    "neighborhood_id": "1017",
    "neighborhood_name": "Staumbaugh Heller",
    "state_code": "CA"
  },
  "1018": {
    "city_id": "60102",
    "neighborhood_id": "1018",
    "neighborhood_name": "Woodside Plaza",
    "state_code": "CA"
  },
  "10441": {
    "city_id": "63000",
    "neighborhood_id": "10441",
    "neighborhood_name": "Crown Hill",
    "state_code": "WA"
  },
  "10943": {
    "city_id": "57535",
    "neighborhood_id": "10943",
    "neighborhood_name": "North Redmond",
    "state_code": "WA"
  },
  "10944": {
    "city_id": "57535",
    "neighborhood_id": "10944",
    "neighborhood_name": "Willow -  Rose Hill",
    "state_code": "WA"
  },
  "10945": {
    "city_id": "57535",
    "neighborhood_id": "10945",
    "neighborhood_name": "Sammamish Valley",
    "state_code": "WA"
  },
  "10946": {
    "city_id": "57535",
    "neighborhood_id": "10946",
    "neighborhood_name": "Education Hill",
    "state_code": "WA"
  },
  "10947": {
    "city_id": "57535",
    "neighborhood_id": "10947",
    "neighborhood_name": "Downtown",
    "state_code": "WA"
  },
  "10948": {
    "city_id": "57535",
    "neighborhood_id": "10948",
    "neighborhood_name": "Bear Creek",
    "state_code": "WA"
  },
  "10949": {
    "city_id": "57535",
    "neighborhood_id": "10949",
    "neighborhood_name": "Grass Lawn",
    "state_code": "WA"
  },
  "10950": {
    "city_id": "57535",
    "neighborhood_id": "10950",
    "neighborhood_name": "Southeast Redmond",
    "state_code": "WA"
  },
  "10951": {
    "city_id": "57535",
    "neighborhood_id": "10951",
    "neighborhood_name": "Overlake",
    "state_code": "WA"
  },
  "10952": {
    "city_id": "57535",
    "neighborhood_id": "10952",
    "neighborhood_name": "Viewpoint",
    "state_code": "WA"
  },
  "11756": {
    "city_id": "05000",
    "neighborhood_id": "11756",
    "neighborhood_name": "Meadows Of Brushy Creek",
    "state_code": "TX"
  },
  "13073": {
    "city_id": "63000",
    "neighborhood_id": "13073",
    "neighborhood_name": "Washington Park",
    "state_code": "WA"
  },
  "13074": {
    "city_id": "63000",
    "neighborhood_id": "13074",
    "neighborhood_name": "Junction",
    "state_code": "WA"
  },
  "13075": {
    "city_id": "68000",
    "neighborhood_id": "13075",
    "neighborhood_name": "Alum Rock",
    "state_code": "CA"
  },
  "13076": {
    "city_id": "68000",
    "neighborhood_id": "13076",
    "neighborhood_name": "Alviso",
    "state_code": "CA"
  },
  "13077": {
    "city_id": "68000",
    "neighborhood_id": "13077",
    "neighborhood_name": "South San Jose",
    "state_code": "CA"
  },
  "13078": {
    "city_id": "68000",
    "neighborhood_id": "13078",
    "neighborhood_name": "Edenvale",
    "state_code": "CA"
  },
  "13079": {
    "city_id": "68000",
    "neighborhood_id": "13079",
    "neighborhood_name": "San Felipe",
    "state_code": "CA"
  },
  "13080": {
    "city_id": "68000",
    "neighborhood_id": "13080",
    "neighborhood_name": "Coyote",
    "state_code": "CA"
  },
  "13081": {
    "city_id": "68000",
    "neighborhood_id": "13081",
    "neighborhood_name": "Calero",
    "state_code": "CA"
  },
  "1386": {
    "city_id": "67000",
    "neighborhood_id": "1386",
    "neighborhood_name": "Alamo Square",
    "state_code": "CA"
  },
  "1387": {
    "city_id": "67000",
    "neighborhood_id": "1387",
    "neighborhood_name": "Anza Vista",
    "state_code": "CA"
  },
  "1388": {
    "city_id": "67000",
    "neighborhood_id": "1388",
    "neighborhood_name": "Ashbury Heights",
    "state_code": "CA"
  },
  "1389": {
    "city_id": "67000",
    "neighborhood_id": "1389",
    "neighborhood_name": "Balboa Terrace",
    "state_code": "CA"
  },
  "1390": {
    "city_id": "67000",
    "neighborhood_id": "1390",
    "neighborhood_name": "Bayview",
    "state_code": "CA"
  },
  "1391": {
    "city_id": "67000",
    "neighborhood_id": "1391",
    "neighborhood_name": "Bernal Heights",
    "state_code": "CA"
  },
  "1392": {
    "city_id": "67000",
    "neighborhood_id": "1392",
    "neighborhood_name": "Bernt's Knoll",
    "state_code": "CA"
  },
  "1393": {
    "city_id": "67000",
    "neighborhood_id": "1393",
    "neighborhood_name": "Buena Vista Park",
    "state_code": "CA"
  },
  "1394": {
    "city_id": "67000",
    "neighborhood_id": "1394",
    "neighborhood_name": "Castro",
    "state_code": "CA"
  },
  "1395": {
    "city_id": "67000",
    "neighborhood_id": "1395",
    "neighborhood_name": "Central Richmond",
    "state_code": "CA"
  },
  "1396": {
    "city_id": "67000",
    "neighborhood_id": "1396",
    "neighborhood_name": "Central Sunset",
    "state_code": "CA"
  },
  "1397": {
    "city_id": "67000",
    "neighborhood_id": "1397",
    "neighborhood_name": "Central Waterfront",
    "state_code": "CA"
  },
  "1398": {
    "city_id": "67000",
    "neighborhood_id": "1398",
    "neighborhood_name": "Chinatown",
    "state_code": "CA"
  },
  "1399": {
    "city_id": "67000",
    "neighborhood_id": "1399",
    "neighborhood_name": "Civic Center",
    "state_code": "CA"
  },
  "1400": {
    "city_id": "67000",
    "neighborhood_id": "1400",
    "neighborhood_name": "Cole Valley",
    "state_code": "CA"
  },
  "1401": {
    "city_id": "67000",
    "neighborhood_id": "1401",
    "neighborhood_name": "Cow Hollow",
    "state_code": "CA"
  },
  "1402": {
    "city_id": "67000",
    "neighborhood_id": "1402",
    "neighborhood_name": "Crocker Amazon",
    "state_code": "CA"
  },
  "1403": {
    "city_id": "67000",
    "neighborhood_id": "1403",
    "neighborhood_name": "Diamond Heights",
    "state_code": "CA"
  },
  "1404": {
    "city_id": "67000",
    "neighborhood_id": "1404",
    "neighborhood_name": "Downtown",
    "state_code": "CA"
  },
  "1405": {
    "city_id": "67000",
    "neighborhood_id": "1405",
    "neighborhood_name": "Duboce Triangle",
    "state_code": "CA"
  },
  "1406": {
    "city_id": "67000",
    "neighborhood_id": "1406",
    "neighborhood_name": "Excelsior",
    "state_code": "CA"
  },
  "1407": {
    "city_id": "67000",
    "neighborhood_id": "1407",
    "neighborhood_name": "Financial District",
    "state_code": "CA"
  },
  "1408": {
    "city_id": "67000",
    "neighborhood_id": "1408",
    "neighborhood_name": "Fisherman's Wharf",
    "state_code": "CA"
  },
  "1409": {
    "city_id": "67000",
    "neighborhood_id": "1409",
    "neighborhood_name": "Forest Hill",
    "state_code": "CA"
  },
  "1410": {
    "city_id": "67000",
    "neighborhood_id": "1410",
    "neighborhood_name": "Forest Hill Extension",
    "state_code": "CA"
  },
  "1411": {
    "city_id": "67000",
    "neighborhood_id": "1411",
    "neighborhood_name": "Forest Knolls",
    "state_code": "CA"
  },
  "1412": {
    "city_id": "67000",
    "neighborhood_id": "1412",
    "neighborhood_name": "Fort Mason",
    "state_code": "CA"
  },
  "1413": {
    "city_id": "67000",
    "neighborhood_id": "1413",
    "neighborhood_name": "Glen Park",
    "state_code": "CA"
  },
  "1414": {
    "city_id": "67000",
    "neighborhood_id": "1414",
    "neighborhood_name": "Golden Gate Heights",
    "state_code": "CA"
  },
  "1415": {
    "city_id": "67000",
    "neighborhood_id": "1415",
    "neighborhood_name": "Golden Gate Park",
    "state_code": "CA"
  },
  "1416": {
    "city_id": "67000",
    "neighborhood_id": "1416",
    "neighborhood_name": "Haight",
    "state_code": "CA"
  },
  "1417": {
    "city_id": "67000",
    "neighborhood_id": "1417",
    "neighborhood_name": "Hayes Valley",
    "state_code": "CA"
  },
  "1418": {
    "city_id": "67000",
    "neighborhood_id": "1418",
    "neighborhood_name": "Hunters Point",
    "state_code": "CA"
  },
  "1419": {
    "city_id": "67000",
    "neighborhood_id": "1419",
    "neighborhood_name": "Ingleside",
    "state_code": "CA"
  },
  "1420": {
    "city_id": "67000",
    "neighborhood_id": "1420",
    "neighborhood_name": "Ingleside Heights",
    "state_code": "CA"
  },
  "1421": {
    "city_id": "67000",
    "neighborhood_id": "1421",
    "neighborhood_name": "Ingleside Terrace",
    "state_code": "CA"
  },
  "1422": {
    "city_id": "67000",
    "neighborhood_id": "1422",
    "neighborhood_name": "Inner Parkside",
    "state_code": "CA"
  },
  "1423": {
    "city_id": "67000",
    "neighborhood_id": "1423",
    "neighborhood_name": "Inner Richmond",
    "state_code": "CA"
  },
  "1424": {
    "city_id": "67000",
    "neighborhood_id": "1424",
    "neighborhood_name": "Inner Sunset",
    "state_code": "CA"
  },
  "1425": {
    "city_id": "67000",
    "neighborhood_id": "1425",
    "neighborhood_name": "Japantown",
    "state_code": "CA"
  },
  "1426": {
    "city_id": "67000",
    "neighborhood_id": "1426",
    "neighborhood_name": "Lake Street",
    "state_code": "CA"
  },
  "1427": {
    "city_id": "67000",
    "neighborhood_id": "1427",
    "neighborhood_name": "Laurel Heights",
    "state_code": "CA"
  },
  "1428": {
    "city_id": "67000",
    "neighborhood_id": "1428",
    "neighborhood_name": "Lincoln Park - Lobos",
    "state_code": "CA"
  },
  "1429": {
    "city_id": "67000",
    "neighborhood_id": "1429",
    "neighborhood_name": "Lone Mountain",
    "state_code": "CA"
  },
  "1430": {
    "city_id": "67000",
    "neighborhood_id": "1430",
    "neighborhood_name": "Lower Pacific Heights",
    "state_code": "CA"
  },
  "1431": {
    "city_id": "67000",
    "neighborhood_id": "1431",
    "neighborhood_name": "Marina",
    "state_code": "CA"
  },
  "1432": {
    "city_id": "67000",
    "neighborhood_id": "1432",
    "neighborhood_name": "Merced Heights",
    "state_code": "CA"
  },
  "1433": {
    "city_id": "67000",
    "neighborhood_id": "1433",
    "neighborhood_name": "Merced Manor",
    "state_code": "CA"
  },
  "1434": {
    "city_id": "67000",
    "neighborhood_id": "1434",
    "neighborhood_name": "Midtown Terrace",
    "state_code": "CA"
  },
  "1435": {
    "city_id": "67000",
    "neighborhood_id": "1435",
    "neighborhood_name": "Miraloma",
    "state_code": "CA"
  },
  "1436": {
    "city_id": "67000",
    "neighborhood_id": "1436",
    "neighborhood_name": "Mission",
    "state_code": "CA"
  },
  "1437": {
    "city_id": "67000",
    "neighborhood_id": "1437",
    "neighborhood_name": "Mission Bay",
    "state_code": "CA"
  },
  "1438": {
    "city_id": "67000",
    "neighborhood_id": "1438",
    "neighborhood_name": "Mission Dolores",
    "state_code": "CA"
  },
  "1439": {
    "city_id": "67000",
    "neighborhood_id": "1439",
    "neighborhood_name": "Mission Terrace",
    "state_code": "CA"
  },
  "1440": {
    "city_id": "67000",
    "neighborhood_id": "1440",
    "neighborhood_name": "Monterey Heights",
    "state_code": "CA"
  },
  "1441": {
    "city_id": "67000",
    "neighborhood_id": "1441",
    "neighborhood_name": "Mount Davidson Manor",
    "state_code": "CA"
  },
  "1442": {
    "city_id": "67000",
    "neighborhood_id": "1442",
    "neighborhood_name": "Nob Hill",
    "state_code": "CA"
  },
  "1443": {
    "city_id": "67000",
    "neighborhood_id": "1443",
    "neighborhood_name": "Noe Valley",
    "state_code": "CA"
  },
  "1444": {
    "city_id": "67000",
    "neighborhood_id": "1444",
    "neighborhood_name": "North Beach",
    "state_code": "CA"
  },
  "1445": {
    "city_id": "67000",
    "neighborhood_id": "1445",
    "neighborhood_name": "North Park",
    "state_code": "CA"
  },
  "1446": {
    "city_id": "67000",
    "neighborhood_id": "1446",
    "neighborhood_name": "Oceanview",
    "state_code": "CA"
  },
  "1447": {
    "city_id": "67000",
    "neighborhood_id": "1447",
    "neighborhood_name": "Outer Mission",
    "state_code": "CA"
  },
  "1448": {
    "city_id": "67000",
    "neighborhood_id": "1448",
    "neighborhood_name": "Outer Richmond",
    "state_code": "CA"
  },
  "1449": {
    "city_id": "67000",
    "neighborhood_id": "1449",
    "neighborhood_name": "Outer Sunset",
    "state_code": "CA"
  },
  "1450": {
    "city_id": "67000",
    "neighborhood_id": "1450",
    "neighborhood_name": "Pacific Heights",
    "state_code": "CA"
  },
  "1451": {
    "city_id": "67000",
    "neighborhood_id": "1451",
    "neighborhood_name": "Panhandle",
    "state_code": "CA"
  },
  "1452": {
    "city_id": "67000",
    "neighborhood_id": "1452",
    "neighborhood_name": "Portola",
    "state_code": "CA"
  },
  "1453": {
    "city_id": "67000",
    "neighborhood_id": "1453",
    "neighborhood_name": "Potrero Hill",
    "state_code": "CA"
  },
  "1454": {
    "city_id": "67000",
    "neighborhood_id": "1454",
    "neighborhood_name": "Presidio",
    "state_code": "CA"
  },
  "1455": {
    "city_id": "67000",
    "neighborhood_id": "1455",
    "neighborhood_name": "Presidio Heights",
    "state_code": "CA"
  },
  "1456": {
    "city_id": "67000",
    "neighborhood_id": "1456",
    "neighborhood_name": "Russian Hill",
    "state_code": "CA"
  },
  "1457": {
    "city_id": "67000",
    "neighborhood_id": "1457",
    "neighborhood_name": "Saint Francis Wood",
    "state_code": "CA"
  },
  "1458": {
    "city_id": "67000",
    "neighborhood_id": "1458",
    "neighborhood_name": "San Francisco State University",
    "state_code": "CA"
  },
  "1459": {
    "city_id": "67000",
    "neighborhood_id": "1459",
    "neighborhood_name": "Sea Cliff",
    "state_code": "CA"
  },
  "1460": {
    "city_id": "67000",
    "neighborhood_id": "1460",
    "neighborhood_name": "Sherwood Forest",
    "state_code": "CA"
  },
  "1461": {
    "city_id": "67000",
    "neighborhood_id": "1461",
    "neighborhood_name": "Silver Terrace",
    "state_code": "CA"
  },
  "1462": {
    "city_id": "67000",
    "neighborhood_id": "1462",
    "neighborhood_name": "SoMa",
    "state_code": "CA"
  },
  "1463": {
    "city_id": "67000",
    "neighborhood_id": "1463",
    "neighborhood_name": "South Beach",
    "state_code": "CA"
  },
  "1464": {
    "city_id": "67000",
    "neighborhood_id": "1464",
    "neighborhood_name": "Stonestown",
    "state_code": "CA"
  },
  "1465": {
    "city_id": "67000",
    "neighborhood_id": "1465",
    "neighborhood_name": "Stonestown Apartments",
    "state_code": "CA"
  },
  "1466": {
    "city_id": "67000",
    "neighborhood_id": "1466",
    "neighborhood_name": "Sunnyside",
    "state_code": "CA"
  },
  "1467": {
    "city_id": "67000",
    "neighborhood_id": "1467",
    "neighborhood_name": "Telegraph Hill",
    "state_code": "CA"
  },
  "1468": {
    "city_id": "67000",
    "neighborhood_id": "1468",
    "neighborhood_name": "Tenderloin",
    "state_code": "CA"
  },
  "1469": {
    "city_id": "67000",
    "neighborhood_id": "1469",
    "neighborhood_name": "Treasure Island",
    "state_code": "CA"
  },
  "1470": {
    "city_id": "67000",
    "neighborhood_id": "1470",
    "neighborhood_name": "Twin Peaks",
    "state_code": "CA"
  },
  "1471": {
    "city_id": "67000",
    "neighborhood_id": "1471",
    "neighborhood_name": "Union Square",
    "state_code": "CA"
  },
  "1472": {
    "city_id": "67000",
    "neighborhood_id": "1472",
    "neighborhood_name": "Visitacion Valley",
    "state_code": "CA"
  },
  "1473": {
    "city_id": "67000",
    "neighborhood_id": "1473",
    "neighborhood_name": "West Portal",
    "state_code": "CA"
  },
  "1474": {
    "city_id": "67000",
    "neighborhood_id": "1474",
    "neighborhood_name": "Western Addition",
    "state_code": "CA"
  },
  "1475": {
    "city_id": "67000",
    "neighborhood_id": "1475",
    "neighborhood_name": "Westwood Highlands",
    "state_code": "CA"
  },
  "1476": {
    "city_id": "67000",
    "neighborhood_id": "1476",
    "neighborhood_name": "Westwood Park",
    "state_code": "CA"
  },
  "1477": {
    "city_id": "67000",
    "neighborhood_id": "1477",
    "neighborhood_name": "Yerba Buena Island",
    "state_code": "CA"
  },
  "1478": {
    "city_id": "68000",
    "neighborhood_id": "1478",
    "neighborhood_name": "Almaden Valley",
    "state_code": "CA"
  },
  "1479": {
    "city_id": "68000",
    "neighborhood_id": "1479",
    "neighborhood_name": "Berryessa",
    "state_code": "CA"
  },
  "1480": {
    "city_id": "68000",
    "neighborhood_id": "1480",
    "neighborhood_name": "Blossom Valley",
    "state_code": "CA"
  },
  "1483": {
    "city_id": "68000",
    "neighborhood_id": "1483",
    "neighborhood_name": "Cambrian Park",
    "state_code": "CA"
  },
  "1484": {
    "city_id": "68000",
    "neighborhood_id": "1484",
    "neighborhood_name": "Downtown San Jose",
    "state_code": "CA"
  },
  "1486": {
    "city_id": "68000",
    "neighborhood_id": "1486",
    "neighborhood_name": "East San Jose",
    "state_code": "CA"
  },
  "1487": {
    "city_id": "68000",
    "neighborhood_id": "1487",
    "neighborhood_name": "Edenvale - Seven Trees",
    "state_code": "CA"
  },
  "1488": {
    "city_id": "68000",
    "neighborhood_id": "1488",
    "neighborhood_name": "Evergreen",
    "state_code": "CA"
  },
  "1489": {
    "city_id": "68000",
    "neighborhood_id": "1489",
    "neighborhood_name": "Fairgrounds",
    "state_code": "CA"
  },
  "1490": {
    "city_id": "68000",
    "neighborhood_id": "1490",
    "neighborhood_name": "North San Jose",
    "state_code": "CA"
  },
  "1491": {
    "city_id": "68000",
    "neighborhood_id": "1491",
    "neighborhood_name": "North Valley",
    "state_code": "CA"
  },
  "1492": {
    "city_id": "68000",
    "neighborhood_id": "1492",
    "neighborhood_name": "Santa Teresa",
    "state_code": "CA"
  },
  "1494": {
    "city_id": "68000",
    "neighborhood_id": "1494",
    "neighborhood_name": "West San Jose",
    "state_code": "CA"
  },
  "1495": {
    "city_id": "68000",
    "neighborhood_id": "1495",
    "neighborhood_name": "Willow Glen",
    "state_code": "CA"
  },
  "1496": {
    "city_id": "68252",
    "neighborhood_id": "1496",
    "neighborhood_name": "Baywood Park",
    "state_code": "CA"
  },
  "1497": {
    "city_id": "68252",
    "neighborhood_id": "1497",
    "neighborhood_name": "Baywood-Aragon",
    "state_code": "CA"
  },
  "1498": {
    "city_id": "68252",
    "neighborhood_id": "1498",
    "neighborhood_name": "Beresford",
    "state_code": "CA"
  },
  "1499": {
    "city_id": "68252",
    "neighborhood_id": "1499",
    "neighborhood_name": "Central San Mateo",
    "state_code": "CA"
  },
  "1500": {
    "city_id": "68252",
    "neighborhood_id": "1500",
    "neighborhood_name": "Downtown",
    "state_code": "CA"
  },
  "1501": {
    "city_id": "68252",
    "neighborhood_id": "1501",
    "neighborhood_name": "East San Mateo",
    "state_code": "CA"
  },
  "1502": {
    "city_id": "68252",
    "neighborhood_id": "1502",
    "neighborhood_name": "Haywood Park",
    "state_code": "CA"
  },
  "1503": {
    "city_id": "68252",
    "neighborhood_id": "1503",
    "neighborhood_name": "Hillsdale",
    "state_code": "CA"
  },
  "1504": {
    "city_id": "68252",
    "neighborhood_id": "1504",
    "neighborhood_name": "Marina Lagoon",
    "state_code": "CA"
  },
  "1505": {
    "city_id": "68252",
    "neighborhood_id": "1505",
    "neighborhood_name": "North Central",
    "state_code": "CA"
  },
  "1506": {
    "city_id": "68252",
    "neighborhood_id": "1506",
    "neighborhood_name": "San Mateo Park",
    "state_code": "CA"
  },
  "1507": {
    "city_id": "68252",
    "neighborhood_id": "1507",
    "neighborhood_name": "Shoreview",
    "state_code": "CA"
  },
  "1508": {
    "city_id": "68252",
    "neighborhood_id": "1508",
    "neighborhood_name": "South San Mateo",
    "state_code": "CA"
  },
  "1509": {
    "city_id": "68252",
    "neighborhood_id": "1509",
    "neighborhood_name": "Sugarloaf",
    "state_code": "CA"
  },
  "1510": {
    "city_id": "68252",
    "neighborhood_id": "1510",
    "neighborhood_name": "Western Hills",
    "state_code": "CA"
  },
  "16024": {
    "city_id": "43000",
    "neighborhood_id": "16024",
    "neighborhood_name": "Norwalk-La Mirada",
    "state_code": "CA"
  },
  "16038": {
    "city_id": "60102",
    "neighborhood_id": "16038",
    "neighborhood_name": "Emerald Lake Hills",
    "state_code": "CA"
  },
  "16063": {
    "city_id": "35000",
    "neighborhood_id": "16063",
    "neighborhood_name": "Cloverleaf",
    "state_code": "TX"
  },
  "16575": {
    "city_id": "35000",
    "neighborhood_id": "16575",
    "neighborhood_name": "Grand Meadow",
    "state_code": "TX"
  },
  "16624": {
    "city_id": "35000",
    "neighborhood_id": "16624",
    "neighborhood_name": "Kingsbridge Commerce Park",
    "state_code": "TX"
  },
  "16625": {
    "city_id": "35000",
    "neighborhood_id": "16625",
    "neighborhood_name": "Kingsbridge Court",
    "state_code": "TX"
  },
  "16626": {
    "city_id": "35000",
    "neighborhood_id": "16626",
    "neighborhood_name": "Kingsbridge Estates",
    "state_code": "TX"
  },
  "16627": {
    "city_id": "35000",
    "neighborhood_id": "16627",
    "neighborhood_name": "Kingsbridge Park",
    "state_code": "TX"
  },
  "16628": {
    "city_id": "35000",
    "neighborhood_id": "16628",
    "neighborhood_name": "Kingsbridge Plaza",
    "state_code": "TX"
  },
  "16686": {
    "city_id": "35000",
    "neighborhood_id": "16686",
    "neighborhood_name": "Meadows Of Parkway Lakes",
    "state_code": "TX"
  },
  "16688": {
    "city_id": "35000",
    "neighborhood_id": "16688",
    "neighborhood_name": "Mission Bend Estates",
    "state_code": "TX"
  },
  "16689": {
    "city_id": "35000",
    "neighborhood_id": "16689",
    "neighborhood_name": "Mission Glen East",
    "state_code": "TX"
  },
  "16756": {
    "city_id": "35000",
    "neighborhood_id": "16756",
    "neighborhood_name": "Providence",
    "state_code": "TX"
  },
  "16857": {
    "city_id": "35000",
    "neighborhood_id": "16857",
    "neighborhood_name": "Tealbriar",
    "state_code": "TX"
  },
  "16906": {
    "city_id": "35000",
    "neighborhood_id": "16906",
    "neighborhood_name": "Waterford",
    "state_code": "TX"
  },
  "16915": {
    "city_id": "35000",
    "neighborhood_id": "16915",
    "neighborhood_name": "Westpark Lakes",
    "state_code": "TX"
  },
  "16926": {
    "city_id": "35000",
    "neighborhood_id": "16926",
    "neighborhood_name": "Woodbridge",
    "state_code": "TX"
  },
  "16927": {
    "city_id": "35000",
    "neighborhood_id": "16927",
    "neighborhood_name": "Woodbridge Fbc",
    "state_code": "TX"
  },
  "16934": {
    "city_id": "35000",
    "neighborhood_id": "16934",
    "neighborhood_name": "Canyon Gate Cinco Ranch",
    "state_code": "TX"
  },
  "16936": {
    "city_id": "35000",
    "neighborhood_id": "16936",
    "neighborhood_name": "Cinco Ranch Commercial Reserves",
    "state_code": "TX"
  },
  "16937": {
    "city_id": "35000",
    "neighborhood_id": "16937",
    "neighborhood_name": "Cinco Ranch Equestrian Village",
    "state_code": "TX"
  },
  "16938": {
    "city_id": "35000",
    "neighborhood_id": "16938",
    "neighborhood_name": "Cinco Ranch Southwest",
    "state_code": "TX"
  },
  "16941": {
    "city_id": "35000",
    "neighborhood_id": "16941",
    "neighborhood_name": "Grand Lakes Phase Three",
    "state_code": "TX"
  },
  "16945": {
    "city_id": "35000",
    "neighborhood_id": "16945",
    "neighborhood_name": "Kelly's Corner",
    "state_code": "TX"
  },
  "16947": {
    "city_id": "35000",
    "neighborhood_id": "16947",
    "neighborhood_name": "Lost Creek",
    "state_code": "TX"
  },
  "16949": {
    "city_id": "35000",
    "neighborhood_id": "16949",
    "neighborhood_name": "Mission Bend Mission Leona",
    "state_code": "TX"
  },
  "16950": {
    "city_id": "35000",
    "neighborhood_id": "16950",
    "neighborhood_name": "Mission Bend (South)",
    "state_code": "TX"
  },
  "16973": {
    "city_id": "35000",
    "neighborhood_id": "16973",
    "neighborhood_name": "Cinco Ranch",
    "state_code": "TX"
  },
  "16981": {
    "city_id": "35000",
    "neighborhood_id": "16981",
    "neighborhood_name": "Mission Bend",
    "state_code": "TX"
  },
  "16988": {
    "city_id": "35000",
    "neighborhood_id": "16988",
    "neighborhood_name": "Cinco Ranch Southpark",
    "state_code": "TX"
  },
  "16992": {
    "city_id": "35000",
    "neighborhood_id": "16992",
    "neighborhood_name": "Kelliwood Park",
    "state_code": "TX"
  },
  "16993": {
    "city_id": "35000",
    "neighborhood_id": "16993",
    "neighborhood_name": "Lakemont",
    "state_code": "TX"
  },
  "16994": {
    "city_id": "35000",
    "neighborhood_id": "16994",
    "neighborhood_name": "Mission Bend South",
    "state_code": "TX"
  },
  "16996": {
    "city_id": "35000",
    "neighborhood_id": "16996",
    "neighborhood_name": "Parkway Lakes",
    "state_code": "TX"
  },
  "16998": {
    "city_id": "35000",
    "neighborhood_id": "16998",
    "neighborhood_name": "Richmond Road Farms",
    "state_code": "TX"
  },
  "17002": {
    "city_id": "35000",
    "neighborhood_id": "17002",
    "neighborhood_name": "Cinco Ranch Greenway Village",
    "state_code": "TX"
  },
  "17004": {
    "city_id": "35000",
    "neighborhood_id": "17004",
    "neighborhood_name": "Park Westheimer",
    "state_code": "TX"
  },
  "17005": {
    "city_id": "35000",
    "neighborhood_id": "17005",
    "neighborhood_name": "Sugar Grove",
    "state_code": "TX"
  },
  "17007": {
    "city_id": "35000",
    "neighborhood_id": "17007",
    "neighborhood_name": "Grand Lakes Phase 4",
    "state_code": "TX"
  },
  "17008": {
    "city_id": "35000",
    "neighborhood_id": "17008",
    "neighborhood_name": "Grand Lakes",
    "state_code": "TX"
  },
  "17009": {
    "city_id": "35000",
    "neighborhood_id": "17009",
    "neighborhood_name": "Seven Meadows",
    "state_code": "TX"
  },
  "17587": {
    "city_id": "19000",
    "neighborhood_id": "17587",
    "neighborhood_name": "Club Manor",
    "state_code": "TX"
  },
  "17598": {
    "city_id": "19000",
    "neighborhood_id": "17598",
    "neighborhood_name": "Countryside Mhp",
    "state_code": "TX"
  },
  "17637": {
    "city_id": "19000",
    "neighborhood_id": "17637",
    "neighborhood_name": "Elkins Forrest",
    "state_code": "TX"
  },
  "17746": {
    "city_id": "19000",
    "neighborhood_id": "17746",
    "neighborhood_name": "Mesquite Springs Mhp",
    "state_code": "TX"
  },
  "17841": {
    "city_id": "19000",
    "neighborhood_id": "17841",
    "neighborhood_name": "Santa Garza",
    "state_code": "TX"
  },
  "17874": {
    "city_id": "19000",
    "neighborhood_id": "17874",
    "neighborhood_name": "Tanglewood",
    "state_code": "TX"
  },
  "17916": {
    "city_id": "19000",
    "neighborhood_id": "17916",
    "neighborhood_name": "Whispering Oaks Mhp",
    "state_code": "TX"
  },
  "29023": {
    "city_id": "05000",
    "neighborhood_id": "29023",
    "neighborhood_name": "Pecan Bottom On Lake Austin",
    "state_code": "TX"
  },
  "29024": {
    "city_id": "05000",
    "neighborhood_id": "29024",
    "neighborhood_name": "Lake Austin Village",
    "state_code": "TX"
  },
  "29025": {
    "city_id": "05000",
    "neighborhood_id": "29025",
    "neighborhood_name": "The Golf Club At Avery Ranch",
    "state_code": "TX"
  },
  "29026": {
    "city_id": "05000",
    "neighborhood_id": "29026",
    "neighborhood_name": "Sonesta West",
    "state_code": "TX"
  },
  "29027": {
    "city_id": "05000",
    "neighborhood_id": "29027",
    "neighborhood_name": "Valle Escondido",
    "state_code": "TX"
  },
  "29028": {
    "city_id": "05000",
    "neighborhood_id": "29028",
    "neighborhood_name": "The Village Of Angus Valley",
    "state_code": "TX"
  },
  "29030": {
    "city_id": "05000",
    "neighborhood_id": "29030",
    "neighborhood_name": "Pioneer Hill",
    "state_code": "TX"
  },
  "29031": {
    "city_id": "05000",
    "neighborhood_id": "29031",
    "neighborhood_name": "Angel Pass",
    "state_code": "TX"
  },
  "29032": {
    "city_id": "05000",
    "neighborhood_id": "29032",
    "neighborhood_name": "Spicewood Bend",
    "state_code": "TX"
  },
  "29035": {
    "city_id": "05000",
    "neighborhood_id": "29035",
    "neighborhood_name": "Watersedge At River Place",
    "state_code": "TX"
  },
  "29036": {
    "city_id": "05000",
    "neighborhood_id": "29036",
    "neighborhood_name": "Canyon Rim",
    "state_code": "TX"
  },
  "29037": {
    "city_id": "05000",
    "neighborhood_id": "29037",
    "neighborhood_name": "Bridgehead",
    "state_code": "TX"
  },
  "29038": {
    "city_id": "05000",
    "neighborhood_id": "29038",
    "neighborhood_name": "Oakchase",
    "state_code": "TX"
  },
  "29040": {
    "city_id": "05000",
    "neighborhood_id": "29040",
    "neighborhood_name": "Sanctuary At Coldwater",
    "state_code": "TX"
  },
  "29041": {
    "city_id": "05000",
    "neighborhood_id": "29041",
    "neighborhood_name": "Hillcrest Village",
    "state_code": "TX"
  },
  "29043": {
    "city_id": "05000",
    "neighborhood_id": "29043",
    "neighborhood_name": "Palladio Point",
    "state_code": "TX"
  },
  "29045": {
    "city_id": "05000",
    "neighborhood_id": "29045",
    "neighborhood_name": "The Terraces",
    "state_code": "TX"
  },
  "29046": {
    "city_id": "05000",
    "neighborhood_id": "29046",
    "neighborhood_name": "The Market At Three Points",
    "state_code": "TX"
  },
  "29047": {
    "city_id": "05000",
    "neighborhood_id": "29047",
    "neighborhood_name": "Windmill Bluff Estates",
    "state_code": "TX"
  },
  "29048": {
    "city_id": "05000",
    "neighborhood_id": "29048",
    "neighborhood_name": "Shadow Oaks",
    "state_code": "TX"
  },
  "29049": {
    "city_id": "05000",
    "neighborhood_id": "29049",
    "neighborhood_name": "Bull Creek Ranch",
    "state_code": "TX"
  },
  "29050": {
    "city_id": "05000",
    "neighborhood_id": "29050",
    "neighborhood_name": "Panther Hollow",
    "state_code": "TX"
  },
  "29051": {
    "city_id": "05000",
    "neighborhood_id": "29051",
    "neighborhood_name": "Silverado Mobile Home Park",
    "state_code": "TX"
  },
  "29052": {
    "city_id": "05000",
    "neighborhood_id": "29052",
    "neighborhood_name": "Shepherd Mountain",
    "state_code": "TX"
  },
  "29054": {
    "city_id": "05000",
    "neighborhood_id": "29054",
    "neighborhood_name": "Marshall Ford Vista",
    "state_code": "TX"
  },
  "29055": {
    "city_id": "05000",
    "neighborhood_id": "29055",
    "neighborhood_name": "Spraddle Creek",
    "state_code": "TX"
  },
  "29056": {
    "city_id": "05000",
    "neighborhood_id": "29056",
    "neighborhood_name": "Terrace Plaza",
    "state_code": "TX"
  },
  "29057": {
    "city_id": "05000",
    "neighborhood_id": "29057",
    "neighborhood_name": "The Meadow",
    "state_code": "TX"
  },
  "29058": {
    "city_id": "05000",
    "neighborhood_id": "29058",
    "neighborhood_name": "Clayton's Crossing",
    "state_code": "TX"
  },
  "29059": {
    "city_id": "05000",
    "neighborhood_id": "29059",
    "neighborhood_name": "Valley Oaks",
    "state_code": "TX"
  },
  "29060": {
    "city_id": "05000",
    "neighborhood_id": "29060",
    "neighborhood_name": "Avery Ranch Garden Homes",
    "state_code": "TX"
  },
  "29061": {
    "city_id": "05000",
    "neighborhood_id": "29061",
    "neighborhood_name": "Horseshoe Bend Estates",
    "state_code": "TX"
  },
  "29063": {
    "city_id": "05000",
    "neighborhood_id": "29063",
    "neighborhood_name": "Highpoint Professional Park",
    "state_code": "TX"
  },
  "29064": {
    "city_id": "05000",
    "neighborhood_id": "29064",
    "neighborhood_name": "The Highlands At Oak Forest",
    "state_code": "TX"
  },
  "29065": {
    "city_id": "05000",
    "neighborhood_id": "29065",
    "neighborhood_name": "Highland Park Court",
    "state_code": "TX"
  },
  "29066": {
    "city_id": "05000",
    "neighborhood_id": "29066",
    "neighborhood_name": "Baker Hills",
    "state_code": "TX"
  },
  "29067": {
    "city_id": "05000",
    "neighborhood_id": "29067",
    "neighborhood_name": "Palisades West",
    "state_code": "TX"
  },
  "29068": {
    "city_id": "05000",
    "neighborhood_id": "29068",
    "neighborhood_name": "Shinoak Valley",
    "state_code": "TX"
  },
  "29069": {
    "city_id": "05000",
    "neighborhood_id": "29069",
    "neighborhood_name": "Coppertree",
    "state_code": "TX"
  },
  "29070": {
    "city_id": "05000",
    "neighborhood_id": "29070",
    "neighborhood_name": "Hunter Oaks",
    "state_code": "TX"
  },
  "29071": {
    "city_id": "05000",
    "neighborhood_id": "29071",
    "neighborhood_name": "Renaissance Park",
    "state_code": "TX"
  },
  "29072": {
    "city_id": "05000",
    "neighborhood_id": "29072",
    "neighborhood_name": "The Overlook At Treemont",
    "state_code": "TX"
  },
  "29073": {
    "city_id": "05000",
    "neighborhood_id": "29073",
    "neighborhood_name": "Oakwood Hollow Pud",
    "state_code": "TX"
  },
  "29074": {
    "city_id": "05000",
    "neighborhood_id": "29074",
    "neighborhood_name": "Jourdan Crossing",
    "state_code": "TX"
  },
  "29075": {
    "city_id": "05000",
    "neighborhood_id": "29075",
    "neighborhood_name": "6d Ranch",
    "state_code": "TX"
  },
  "29076": {
    "city_id": "05000",
    "neighborhood_id": "29076",
    "neighborhood_name": "Pioneer Valley",
    "state_code": "TX"
  },
  "29077": {
    "city_id": "05000",
    "neighborhood_id": "29077",
    "neighborhood_name": "Valle Del Rio",
    "state_code": "TX"
  },
  "29078": {
    "city_id": "05000",
    "neighborhood_id": "29078",
    "neighborhood_name": "High Sierra Oaks",
    "state_code": "TX"
  },
  "29079": {
    "city_id": "05000",
    "neighborhood_id": "29079",
    "neighborhood_name": "Norwood Acres",
    "state_code": "TX"
  },
  "29082": {
    "city_id": "05000",
    "neighborhood_id": "29082",
    "neighborhood_name": "River Bend",
    "state_code": "TX"
  },
  "29083": {
    "city_id": "05000",
    "neighborhood_id": "29083",
    "neighborhood_name": "Panorama Ranch",
    "state_code": "TX"
  },
  "29084": {
    "city_id": "05000",
    "neighborhood_id": "29084",
    "neighborhood_name": "Sharmark West",
    "state_code": "TX"
  },
  "29085": {
    "city_id": "05000",
    "neighborhood_id": "29085",
    "neighborhood_name": "Spice Forest",
    "state_code": "TX"
  },
  "29086": {
    "city_id": "05000",
    "neighborhood_id": "29086",
    "neighborhood_name": "Alexan Mountain View",
    "state_code": "TX"
  },
  "29087": {
    "city_id": "05000",
    "neighborhood_id": "29087",
    "neighborhood_name": "Mcneil Estates",
    "state_code": "TX"
  },
  "29088": {
    "city_id": "05000",
    "neighborhood_id": "29088",
    "neighborhood_name": "Oak Forest West",
    "state_code": "TX"
  },
  "29089": {
    "city_id": "05000",
    "neighborhood_id": "29089",
    "neighborhood_name": "Cima Oaks",
    "state_code": "TX"
  },
  "29090": {
    "city_id": "05000",
    "neighborhood_id": "29090",
    "neighborhood_name": "Woodlands At Lake Creek",
    "state_code": "TX"
  },
  "29091": {
    "city_id": "05000",
    "neighborhood_id": "29091",
    "neighborhood_name": "Parkstone",
    "state_code": "TX"
  },
  "29093": {
    "city_id": "05000",
    "neighborhood_id": "29093",
    "neighborhood_name": "Whitney Oaks",
    "state_code": "TX"
  },
  "29094": {
    "city_id": "05000",
    "neighborhood_id": "29094",
    "neighborhood_name": "Ferguson Crossing",
    "state_code": "TX"
  },
  "29095": {
    "city_id": "05000",
    "neighborhood_id": "29095",
    "neighborhood_name": "The Meadows Of Great Hills",
    "state_code": "TX"
  },
  "29098": {
    "city_id": "05000",
    "neighborhood_id": "29098",
    "neighborhood_name": "Alta Vista P.u.d.",
    "state_code": "TX"
  },
  "29099": {
    "city_id": "05000",
    "neighborhood_id": "29099",
    "neighborhood_name": "Spicewood Springs Road Office Park",
    "state_code": "TX"
  },
  "29100": {
    "city_id": "05000",
    "neighborhood_id": "29100",
    "neighborhood_name": "Park North",
    "state_code": "TX"
  },
  "29102": {
    "city_id": "05000",
    "neighborhood_id": "29102",
    "neighborhood_name": "Crested Butte Hillside",
    "state_code": "TX"
  },
  "29103": {
    "city_id": "05000",
    "neighborhood_id": "29103",
    "neighborhood_name": "Bull Creek Park",
    "state_code": "TX"
  },
  "29104": {
    "city_id": "05000",
    "neighborhood_id": "29104",
    "neighborhood_name": "Wood Island",
    "state_code": "TX"
  },
  "29107": {
    "city_id": "05000",
    "neighborhood_id": "29107",
    "neighborhood_name": "Spicewood Green",
    "state_code": "TX"
  },
  "29108": {
    "city_id": "05000",
    "neighborhood_id": "29108",
    "neighborhood_name": "The Arbors",
    "state_code": "TX"
  },
  "29109": {
    "city_id": "05000",
    "neighborhood_id": "29109",
    "neighborhood_name": "Marbry's Ridge",
    "state_code": "TX"
  },
  "29110": {
    "city_id": "05000",
    "neighborhood_id": "29110",
    "neighborhood_name": "Northwest Hills Lakeview",
    "state_code": "TX"
  },
  "29111": {
    "city_id": "05000",
    "neighborhood_id": "29111",
    "neighborhood_name": "Lakeside Terrace",
    "state_code": "TX"
  },
  "29113": {
    "city_id": "05000",
    "neighborhood_id": "29113",
    "neighborhood_name": "Countryside",
    "state_code": "TX"
  },
  "29114": {
    "city_id": "05000",
    "neighborhood_id": "29114",
    "neighborhood_name": "The Setting",
    "state_code": "TX"
  },
  "29115": {
    "city_id": "05000",
    "neighborhood_id": "29115",
    "neighborhood_name": "Shady Lake Acres",
    "state_code": "TX"
  },
  "29116": {
    "city_id": "05000",
    "neighborhood_id": "29116",
    "neighborhood_name": "Clear Creek Estates",
    "state_code": "TX"
  },
  "29119": {
    "city_id": "05000",
    "neighborhood_id": "29119",
    "neighborhood_name": "Austin Woods",
    "state_code": "TX"
  },
  "29120": {
    "city_id": "05000",
    "neighborhood_id": "29120",
    "neighborhood_name": "Avery West",
    "state_code": "TX"
  },
  "29121": {
    "city_id": "05000",
    "neighborhood_id": "29121",
    "neighborhood_name": "Parmer South",
    "state_code": "TX"
  },
  "29122": {
    "city_id": "05000",
    "neighborhood_id": "29122",
    "neighborhood_name": "Mountain Ridge",
    "state_code": "TX"
  },
  "29123": {
    "city_id": "05000",
    "neighborhood_id": "29123",
    "neighborhood_name": "Mt. Bonnell Village",
    "state_code": "TX"
  },
  "29125": {
    "city_id": "05000",
    "neighborhood_id": "29125",
    "neighborhood_name": "Lakeland Park",
    "state_code": "TX"
  },
  "29126": {
    "city_id": "05000",
    "neighborhood_id": "29126",
    "neighborhood_name": "Avery Ranch East Parkside",
    "state_code": "TX"
  },
  "29127": {
    "city_id": "05000",
    "neighborhood_id": "29127",
    "neighborhood_name": "Mccarty Triangle",
    "state_code": "TX"
  },
  "29128": {
    "city_id": "05000",
    "neighborhood_id": "29128",
    "neighborhood_name": "The Canyon - The Preserve",
    "state_code": "TX"
  },
  "29129": {
    "city_id": "05000",
    "neighborhood_id": "29129",
    "neighborhood_name": "Deerwood",
    "state_code": "TX"
  },
  "29130": {
    "city_id": "05000",
    "neighborhood_id": "29130",
    "neighborhood_name": "High Pointe Subdivision",
    "state_code": "TX"
  },
  "29132": {
    "city_id": "05000",
    "neighborhood_id": "29132",
    "neighborhood_name": "Bend At The Villages Of Spicewood",
    "state_code": "TX"
  },
  "29133": {
    "city_id": "05000",
    "neighborhood_id": "29133",
    "neighborhood_name": "Nalle Woods",
    "state_code": "TX"
  },
  "29134": {
    "city_id": "05000",
    "neighborhood_id": "29134",
    "neighborhood_name": "Richland Estates",
    "state_code": "TX"
  },
  "29136": {
    "city_id": "05000",
    "neighborhood_id": "29136",
    "neighborhood_name": "Hermosa Office Park",
    "state_code": "TX"
  },
  "29138": {
    "city_id": "05000",
    "neighborhood_id": "29138",
    "neighborhood_name": "Avery South Townhouse",
    "state_code": "TX"
  },
  "29142": {
    "city_id": "05000",
    "neighborhood_id": "29142",
    "neighborhood_name": "Linda Vista",
    "state_code": "TX"
  },
  "29143": {
    "city_id": "05000",
    "neighborhood_id": "29143",
    "neighborhood_name": "Hidden Valley",
    "state_code": "TX"
  },
  "29144": {
    "city_id": "05000",
    "neighborhood_id": "29144",
    "neighborhood_name": "Sierra Arbor Estates",
    "state_code": "TX"
  },
  "29145": {
    "city_id": "05000",
    "neighborhood_id": "29145",
    "neighborhood_name": "Angus Trail",
    "state_code": "TX"
  },
  "29146": {
    "city_id": "05000",
    "neighborhood_id": "29146",
    "neighborhood_name": "Capital Memorial Park",
    "state_code": "TX"
  },
  "29147": {
    "city_id": "05000",
    "neighborhood_id": "29147",
    "neighborhood_name": "Walnut Forest",
    "state_code": "TX"
  },
  "29148": {
    "city_id": "05000",
    "neighborhood_id": "29148",
    "neighborhood_name": "Forest Ridge",
    "state_code": "TX"
  },
  "29149": {
    "city_id": "05000",
    "neighborhood_id": "29149",
    "neighborhood_name": "Turbine West",
    "state_code": "TX"
  },
  "29154": {
    "city_id": "05000",
    "neighborhood_id": "29154",
    "neighborhood_name": "Parkcrest Center",
    "state_code": "TX"
  },
  "29156": {
    "city_id": "05000",
    "neighborhood_id": "29156",
    "neighborhood_name": "Hillcrest Mesa Townhomes",
    "state_code": "TX"
  },
  "29157": {
    "city_id": "05000",
    "neighborhood_id": "29157",
    "neighborhood_name": "Park Place",
    "state_code": "TX"
  },
  "29158": {
    "city_id": "05000",
    "neighborhood_id": "29158",
    "neighborhood_name": "Terraces At Scofield Ridge",
    "state_code": "TX"
  },
  "29159": {
    "city_id": "05000",
    "neighborhood_id": "29159",
    "neighborhood_name": "Summit Park",
    "state_code": "TX"
  },
  "29160": {
    "city_id": "05000",
    "neighborhood_id": "29160",
    "neighborhood_name": "Stirling Bridge",
    "state_code": "TX"
  },
  "29162": {
    "city_id": "05000",
    "neighborhood_id": "29162",
    "neighborhood_name": "The Paddock At Commons Ford",
    "state_code": "TX"
  },
  "29163": {
    "city_id": "05000",
    "neighborhood_id": "29163",
    "neighborhood_name": "Anderson Mill Village",
    "state_code": "TX"
  },
  "29164": {
    "city_id": "05000",
    "neighborhood_id": "29164",
    "neighborhood_name": "Avery Ranch Commercial Far West",
    "state_code": "TX"
  },
  "29165": {
    "city_id": "05000",
    "neighborhood_id": "29165",
    "neighborhood_name": "Montview Acres",
    "state_code": "TX"
  },
  "29166": {
    "city_id": "05000",
    "neighborhood_id": "29166",
    "neighborhood_name": "Ribelin Ranch",
    "state_code": "TX"
  },
  "29167": {
    "city_id": "05000",
    "neighborhood_id": "29167",
    "neighborhood_name": "Overlook At Bull Creek",
    "state_code": "TX"
  },
  "29168": {
    "city_id": "05000",
    "neighborhood_id": "29168",
    "neighborhood_name": "Mustang Ranch",
    "state_code": "TX"
  },
  "29171": {
    "city_id": "05000",
    "neighborhood_id": "29171",
    "neighborhood_name": "Thunderbird Village",
    "state_code": "TX"
  },
  "29172": {
    "city_id": "05000",
    "neighborhood_id": "29172",
    "neighborhood_name": "Coldwater",
    "state_code": "TX"
  },
  "29173": {
    "city_id": "05000",
    "neighborhood_id": "29173",
    "neighborhood_name": "Oak Ridge",
    "state_code": "TX"
  },
  "29174": {
    "city_id": "05000",
    "neighborhood_id": "29174",
    "neighborhood_name": "Three Points Common",
    "state_code": "TX"
  },
  "29175": {
    "city_id": "05000",
    "neighborhood_id": "29175",
    "neighborhood_name": "The Cliffs Of Austin",
    "state_code": "TX"
  },
  "29176": {
    "city_id": "05000",
    "neighborhood_id": "29176",
    "neighborhood_name": "Beverly Hills",
    "state_code": "TX"
  },
  "29177": {
    "city_id": "05000",
    "neighborhood_id": "29177",
    "neighborhood_name": "Balcones Professional Park",
    "state_code": "TX"
  },
  "29178": {
    "city_id": "05000",
    "neighborhood_id": "29178",
    "neighborhood_name": "Oaks",
    "state_code": "TX"
  },
  "29179": {
    "city_id": "05000",
    "neighborhood_id": "29179",
    "neighborhood_name": "Bee Creek Hills",
    "state_code": "TX"
  },
  "29180": {
    "city_id": "05000",
    "neighborhood_id": "29180",
    "neighborhood_name": "Glenbrook",
    "state_code": "TX"
  },
  "29181": {
    "city_id": "05000",
    "neighborhood_id": "29181",
    "neighborhood_name": "Walnut Place",
    "state_code": "TX"
  },
  "29182": {
    "city_id": "05000",
    "neighborhood_id": "29182",
    "neighborhood_name": "Bancroft Woods",
    "state_code": "TX"
  },
  "29183": {
    "city_id": "05000",
    "neighborhood_id": "29183",
    "neighborhood_name": "Carson Creek",
    "state_code": "TX"
  },
  "29184": {
    "city_id": "05000",
    "neighborhood_id": "29184",
    "neighborhood_name": "Eubank Acres",
    "state_code": "TX"
  },
  "29185": {
    "city_id": "05000",
    "neighborhood_id": "29185",
    "neighborhood_name": "Alegre Park",
    "state_code": "TX"
  },
  "29186": {
    "city_id": "05000",
    "neighborhood_id": "29186",
    "neighborhood_name": "Amarra Drive",
    "state_code": "TX"
  },
  "29187": {
    "city_id": "05000",
    "neighborhood_id": "29187",
    "neighborhood_name": "Preston Oaks",
    "state_code": "TX"
  },
  "29190": {
    "city_id": "05000",
    "neighborhood_id": "29190",
    "neighborhood_name": "Mt. Bonnell Terrace",
    "state_code": "TX"
  },
  "29193": {
    "city_id": "05000",
    "neighborhood_id": "29193",
    "neighborhood_name": "Berkley Square - Headway",
    "state_code": "TX"
  },
  "29196": {
    "city_id": "05000",
    "neighborhood_id": "29196",
    "neighborhood_name": "The Courtyarad",
    "state_code": "TX"
  },
  "29197": {
    "city_id": "05000",
    "neighborhood_id": "29197",
    "neighborhood_name": "Anderson Arbor",
    "state_code": "TX"
  },
  "29198": {
    "city_id": "05000",
    "neighborhood_id": "29198",
    "neighborhood_name": "The Meadows Of Anderson Mill",
    "state_code": "TX"
  },
  "29199": {
    "city_id": "05000",
    "neighborhood_id": "29199",
    "neighborhood_name": "Anderson Mills East",
    "state_code": "TX"
  },
  "29200": {
    "city_id": "05000",
    "neighborhood_id": "29200",
    "neighborhood_name": "Anderson Mill Estates",
    "state_code": "TX"
  },
  "29201": {
    "city_id": "05000",
    "neighborhood_id": "29201",
    "neighborhood_name": "Anderson Mills Lake Sites",
    "state_code": "TX"
  },
  "29202": {
    "city_id": "05000",
    "neighborhood_id": "29202",
    "neighborhood_name": "Hidden Meadows",
    "state_code": "TX"
  },
  "29203": {
    "city_id": "05000",
    "neighborhood_id": "29203",
    "neighborhood_name": "Estates Of Brentwood",
    "state_code": "TX"
  },
  "29204": {
    "city_id": "05000",
    "neighborhood_id": "29204",
    "neighborhood_name": "Angus Ranch",
    "state_code": "TX"
  },
  "29205": {
    "city_id": "05000",
    "neighborhood_id": "29205",
    "neighborhood_name": "Angus Valley",
    "state_code": "TX"
  },
  "29206": {
    "city_id": "05000",
    "neighborhood_id": "29206",
    "neighborhood_name": "Barclay Woods",
    "state_code": "TX"
  },
  "29207": {
    "city_id": "05000",
    "neighborhood_id": "29207",
    "neighborhood_name": "Apache Shores",
    "state_code": "TX"
  },
  "29208": {
    "city_id": "05000",
    "neighborhood_id": "29208",
    "neighborhood_name": "Aqc Commercial Subdivision",
    "state_code": "TX"
  },
  "29209": {
    "city_id": "05000",
    "neighborhood_id": "29209",
    "neighborhood_name": "Universal Heights",
    "state_code": "TX"
  },
  "29210": {
    "city_id": "05000",
    "neighborhood_id": "29210",
    "neighborhood_name": "North Central Estates",
    "state_code": "TX"
  },
  "29211": {
    "city_id": "05000",
    "neighborhood_id": "29211",
    "neighborhood_name": "Rio Robles",
    "state_code": "TX"
  },
  "29213": {
    "city_id": "05000",
    "neighborhood_id": "29213",
    "neighborhood_name": "The Arboretum At Great Hills",
    "state_code": "TX"
  },
  "29215": {
    "city_id": "05000",
    "neighborhood_id": "29215",
    "neighborhood_name": "Arrowwood",
    "state_code": "TX"
  },
  "29216": {
    "city_id": "05000",
    "neighborhood_id": "29216",
    "neighborhood_name": "Dorsett Oaks",
    "state_code": "TX"
  },
  "29217": {
    "city_id": "05000",
    "neighborhood_id": "29217",
    "neighborhood_name": "Arroyo Secco",
    "state_code": "TX"
  },
  "29218": {
    "city_id": "05000",
    "neighborhood_id": "29218",
    "neighborhood_name": "Stony Ridge North",
    "state_code": "TX"
  },
  "29219": {
    "city_id": "05000",
    "neighborhood_id": "29219",
    "neighborhood_name": "Four Points Centre",
    "state_code": "TX"
  },
  "29220": {
    "city_id": "05000",
    "neighborhood_id": "29220",
    "neighborhood_name": "The Austin Center",
    "state_code": "TX"
  },
  "29221": {
    "city_id": "05000",
    "neighborhood_id": "29221",
    "neighborhood_name": "River Place Centre",
    "state_code": "TX"
  },
  "29222": {
    "city_id": "05000",
    "neighborhood_id": "29222",
    "neighborhood_name": "The Centrum",
    "state_code": "TX"
  },
  "29223": {
    "city_id": "05000",
    "neighborhood_id": "29223",
    "neighborhood_name": "Calhoun's Corner",
    "state_code": "TX"
  },
  "29224": {
    "city_id": "05000",
    "neighborhood_id": "29224",
    "neighborhood_name": "Austin Lake Estates",
    "state_code": "TX"
  },
  "29226": {
    "city_id": "05000",
    "neighborhood_id": "29226",
    "neighborhood_name": "Avery Brookside",
    "state_code": "TX"
  },
  "29227": {
    "city_id": "05000",
    "neighborhood_id": "29227",
    "neighborhood_name": "Avery Estates",
    "state_code": "TX"
  },
  "29228": {
    "city_id": "05000",
    "neighborhood_id": "29228",
    "neighborhood_name": "Avery Morrison",
    "state_code": "TX"
  },
  "29229": {
    "city_id": "05000",
    "neighborhood_id": "29229",
    "neighborhood_name": "Avery Ranch Commercial Northeast",
    "state_code": "TX"
  },
  "29230": {
    "city_id": "05000",
    "neighborhood_id": "29230",
    "neighborhood_name": "Avery Ranch East",
    "state_code": "TX"
  },
  "29231": {
    "city_id": "05000",
    "neighborhood_id": "29231",
    "neighborhood_name": "Avery Ranch Far West",
    "state_code": "TX"
  },
  "29232": {
    "city_id": "05000",
    "neighborhood_id": "29232",
    "neighborhood_name": "Avery South",
    "state_code": "TX"
  },
  "29233": {
    "city_id": "05000",
    "neighborhood_id": "29233",
    "neighborhood_name": "Tress Sonesta",
    "state_code": "TX"
  },
  "29234": {
    "city_id": "05000",
    "neighborhood_id": "29234",
    "neighborhood_name": "Jefferson At Waterspark",
    "state_code": "TX"
  },
  "29235": {
    "city_id": "05000",
    "neighborhood_id": "29235",
    "neighborhood_name": "Balcones Commercial",
    "state_code": "TX"
  },
  "29236": {
    "city_id": "05000",
    "neighborhood_id": "29236",
    "neighborhood_name": "Balcones Greene",
    "state_code": "TX"
  },
  "29237": {
    "city_id": "05000",
    "neighborhood_id": "29237",
    "neighborhood_name": "Balcones Hills",
    "state_code": "TX"
  },
  "29238": {
    "city_id": "05000",
    "neighborhood_id": "29238",
    "neighborhood_name": "Balcones Oaks",
    "state_code": "TX"
  },
  "29239": {
    "city_id": "05000",
    "neighborhood_id": "29239",
    "neighborhood_name": "Balcones Park Edgemont",
    "state_code": "TX"
  },
  "29240": {
    "city_id": "05000",
    "neighborhood_id": "29240",
    "neighborhood_name": "Balcones Summit",
    "state_code": "TX"
  },
  "29241": {
    "city_id": "05000",
    "neighborhood_id": "29241",
    "neighborhood_name": "Spicewood Professional Plaza",
    "state_code": "TX"
  },
  "29242": {
    "city_id": "05000",
    "neighborhood_id": "29242",
    "neighborhood_name": "Balcones Woods",
    "state_code": "TX"
  },
  "29244": {
    "city_id": "05000",
    "neighborhood_id": "29244",
    "neighborhood_name": "Oak Forest Villas",
    "state_code": "TX"
  },
  "29245": {
    "city_id": "05000",
    "neighborhood_id": "29245",
    "neighborhood_name": "Summit Oaks",
    "state_code": "TX"
  },
  "29246": {
    "city_id": "05000",
    "neighborhood_id": "29246",
    "neighborhood_name": "Lakeside",
    "state_code": "TX"
  },
  "29247": {
    "city_id": "05000",
    "neighborhood_id": "29247",
    "neighborhood_name": "Aqua Verde",
    "state_code": "TX"
  },
  "29248": {
    "city_id": "05000",
    "neighborhood_id": "29248",
    "neighborhood_name": "Barton Creek Square",
    "state_code": "TX"
  },
  "29249": {
    "city_id": "05000",
    "neighborhood_id": "29249",
    "neighborhood_name": "Barton Creek West",
    "state_code": "TX"
  },
  "29250": {
    "city_id": "05000",
    "neighborhood_id": "29250",
    "neighborhood_name": "The Estates Above Lost Creek",
    "state_code": "TX"
  },
  "29251": {
    "city_id": "05000",
    "neighborhood_id": "29251",
    "neighborhood_name": "Foothills Of Barton Creek",
    "state_code": "TX"
  },
  "29256": {
    "city_id": "05000",
    "neighborhood_id": "29256",
    "neighborhood_name": "Knollwood",
    "state_code": "TX"
  },
  "29261": {
    "city_id": "05000",
    "neighborhood_id": "29261",
    "neighborhood_name": "Belhaven",
    "state_code": "TX"
  },
  "29263": {
    "city_id": "05000",
    "neighborhood_id": "29263",
    "neighborhood_name": "Centex Industrial",
    "state_code": "TX"
  },
  "29269": {
    "city_id": "05000",
    "neighborhood_id": "29269",
    "neighborhood_name": "Berdoll Farms",
    "state_code": "TX"
  },
  "29270": {
    "city_id": "05000",
    "neighborhood_id": "29270",
    "neighborhood_name": "Bergstrom East Commercial",
    "state_code": "TX"
  },
  "29271": {
    "city_id": "05000",
    "neighborhood_id": "29271",
    "neighborhood_name": "The Hills Of Lost Creek",
    "state_code": "TX"
  },
  "29272": {
    "city_id": "05000",
    "neighborhood_id": "29272",
    "neighborhood_name": "Acres West",
    "state_code": "TX"
  },
  "29273": {
    "city_id": "05000",
    "neighborhood_id": "29273",
    "neighborhood_name": "Three Point Acres",
    "state_code": "TX"
  },
  "29274": {
    "city_id": "05000",
    "neighborhood_id": "29274",
    "neighborhood_name": "Vaught Ranch",
    "state_code": "TX"
  },
  "29275": {
    "city_id": "05000",
    "neighborhood_id": "29275",
    "neighborhood_name": "Cameron Industrial",
    "state_code": "TX"
  },
  "29277": {
    "city_id": "05000",
    "neighborhood_id": "29277",
    "neighborhood_name": "Bluestein Shopping Center",
    "state_code": "TX"
  },
  "29278": {
    "city_id": "05000",
    "neighborhood_id": "29278",
    "neighborhood_name": "Bluffington",
    "state_code": "TX"
  },
  "29279": {
    "city_id": "05000",
    "neighborhood_id": "29279",
    "neighborhood_name": "Bluffs Of Lost Creek",
    "state_code": "TX"
  },
  "29280": {
    "city_id": "05000",
    "neighborhood_id": "29280",
    "neighborhood_name": "The Bluffs At Villages Of Spicewood",
    "state_code": "TX"
  },
  "29281": {
    "city_id": "05000",
    "neighborhood_id": "29281",
    "neighborhood_name": "Northwest Hills Village",
    "state_code": "TX"
  },
  "29282": {
    "city_id": "05000",
    "neighborhood_id": "29282",
    "neighborhood_name": "Knollwood On The Colorado River",
    "state_code": "TX"
  },
  "29283": {
    "city_id": "05000",
    "neighborhood_id": "29283",
    "neighborhood_name": "Phillips Ranch On Lake Austin",
    "state_code": "TX"
  },
  "29284": {
    "city_id": "05000",
    "neighborhood_id": "29284",
    "neighborhood_name": "Manana West",
    "state_code": "TX"
  },
  "29285": {
    "city_id": "05000",
    "neighborhood_id": "29285",
    "neighborhood_name": "Highland Oaks",
    "state_code": "TX"
  },
  "29286": {
    "city_id": "05000",
    "neighborhood_id": "29286",
    "neighborhood_name": "The Pavilion",
    "state_code": "TX"
  },
  "29287": {
    "city_id": "05000",
    "neighborhood_id": "29287",
    "neighborhood_name": "Canyon Creek",
    "state_code": "TX"
  },
  "29288": {
    "city_id": "05000",
    "neighborhood_id": "29288",
    "neighborhood_name": "Werkenthin",
    "state_code": "TX"
  },
  "29289": {
    "city_id": "05000",
    "neighborhood_id": "29289",
    "neighborhood_name": "Hardrock Canyon",
    "state_code": "TX"
  },
  "29290": {
    "city_id": "05000",
    "neighborhood_id": "29290",
    "neighborhood_name": "Gracywoods",
    "state_code": "TX"
  },
  "29291": {
    "city_id": "05000",
    "neighborhood_id": "29291",
    "neighborhood_name": "Quail Hollow",
    "state_code": "TX"
  },
  "29292": {
    "city_id": "05000",
    "neighborhood_id": "29292",
    "neighborhood_name": "Bratton Lane Business Park",
    "state_code": "TX"
  },
  "29293": {
    "city_id": "05000",
    "neighborhood_id": "29293",
    "neighborhood_name": "Vista Business",
    "state_code": "TX"
  },
  "29295": {
    "city_id": "05000",
    "neighborhood_id": "29295",
    "neighborhood_name": "Tierra Madrones",
    "state_code": "TX"
  },
  "29296": {
    "city_id": "05000",
    "neighborhood_id": "29296",
    "neighborhood_name": "Spicewood Summit",
    "state_code": "TX"
  },
  "29297": {
    "city_id": "05000",
    "neighborhood_id": "29297",
    "neighborhood_name": "Stillhouse Springs",
    "state_code": "TX"
  },
  "29298": {
    "city_id": "05000",
    "neighborhood_id": "29298",
    "neighborhood_name": "Mesa Trails",
    "state_code": "TX"
  },
  "29299": {
    "city_id": "05000",
    "neighborhood_id": "29299",
    "neighborhood_name": "Mesa Forest",
    "state_code": "TX"
  },
  "29300": {
    "city_id": "05000",
    "neighborhood_id": "29300",
    "neighborhood_name": "Charleston Place",
    "state_code": "TX"
  },
  "29301": {
    "city_id": "05000",
    "neighborhood_id": "29301",
    "neighborhood_name": "Green Trails Estates",
    "state_code": "TX"
  },
  "29303": {
    "city_id": "05000",
    "neighborhood_id": "29303",
    "neighborhood_name": "The Cliff Of Ghost Canyon",
    "state_code": "TX"
  },
  "29309": {
    "city_id": "05000",
    "neighborhood_id": "29309",
    "neighborhood_name": "Sterling Acres",
    "state_code": "TX"
  },
  "29314": {
    "city_id": "05000",
    "neighborhood_id": "29314",
    "neighborhood_name": "Treemont",
    "state_code": "TX"
  },
  "29315": {
    "city_id": "05000",
    "neighborhood_id": "29315",
    "neighborhood_name": "Bee Cave Woods",
    "state_code": "TX"
  },
  "29316": {
    "city_id": "05000",
    "neighborhood_id": "29316",
    "neighborhood_name": "Treetops West",
    "state_code": "TX"
  },
  "29318": {
    "city_id": "05000",
    "neighborhood_id": "29318",
    "neighborhood_name": "The Echelon",
    "state_code": "TX"
  },
  "29319": {
    "city_id": "05000",
    "neighborhood_id": "29319",
    "neighborhood_name": "Martinshore",
    "state_code": "TX"
  },
  "29320": {
    "city_id": "05000",
    "neighborhood_id": "29320",
    "neighborhood_name": "Oak Crest",
    "state_code": "TX"
  },
  "29321": {
    "city_id": "05000",
    "neighborhood_id": "29321",
    "neighborhood_name": "Hidden Estates",
    "state_code": "TX"
  },
  "29322": {
    "city_id": "05000",
    "neighborhood_id": "29322",
    "neighborhood_name": "Plaza Granados",
    "state_code": "TX"
  },
  "29323": {
    "city_id": "05000",
    "neighborhood_id": "29323",
    "neighborhood_name": "Oak Creek Plaza",
    "state_code": "TX"
  },
  "29324": {
    "city_id": "05000",
    "neighborhood_id": "29324",
    "neighborhood_name": "Island At Mt. Bonnel Shores",
    "state_code": "TX"
  },
  "29325": {
    "city_id": "05000",
    "neighborhood_id": "29325",
    "neighborhood_name": "Waterford Place",
    "state_code": "TX"
  },
  "29326": {
    "city_id": "05000",
    "neighborhood_id": "29326",
    "neighborhood_name": "Wildflower",
    "state_code": "TX"
  },
  "29327": {
    "city_id": "05000",
    "neighborhood_id": "29327",
    "neighborhood_name": "Northtown West",
    "state_code": "TX"
  },
  "29328": {
    "city_id": "05000",
    "neighborhood_id": "29328",
    "neighborhood_name": "Travis Vista",
    "state_code": "TX"
  },
  "29329": {
    "city_id": "05000",
    "neighborhood_id": "29329",
    "neighborhood_name": "Canyon Creek Trailhead Park",
    "state_code": "TX"
  },
  "29330": {
    "city_id": "05000",
    "neighborhood_id": "29330",
    "neighborhood_name": "Canyon Creek West",
    "state_code": "TX"
  },
  "29331": {
    "city_id": "05000",
    "neighborhood_id": "29331",
    "neighborhood_name": "Rock Harbour",
    "state_code": "TX"
  },
  "29332": {
    "city_id": "05000",
    "neighborhood_id": "29332",
    "neighborhood_name": "Canyon Ridge",
    "state_code": "TX"
  },
  "29333": {
    "city_id": "05000",
    "neighborhood_id": "29333",
    "neighborhood_name": "Twin Rock At Oak Knoll",
    "state_code": "TX"
  },
  "29334": {
    "city_id": "05000",
    "neighborhood_id": "29334",
    "neighborhood_name": "Barrington Oaks",
    "state_code": "TX"
  },
  "29335": {
    "city_id": "05000",
    "neighborhood_id": "29335",
    "neighborhood_name": "Oak Forest",
    "state_code": "TX"
  },
  "29336": {
    "city_id": "05000",
    "neighborhood_id": "29336",
    "neighborhood_name": "Raintree Estates",
    "state_code": "TX"
  },
  "29342": {
    "city_id": "05000",
    "neighborhood_id": "29342",
    "neighborhood_name": "The Plaza Townhomes At Avery Ranch",
    "state_code": "TX"
  },
  "29343": {
    "city_id": "05000",
    "neighborhood_id": "29343",
    "neighborhood_name": "North Cat Mountain",
    "state_code": "TX"
  },
  "29344": {
    "city_id": "05000",
    "neighborhood_id": "29344",
    "neighborhood_name": "Lakewood Village",
    "state_code": "TX"
  },
  "29345": {
    "city_id": "05000",
    "neighborhood_id": "29345",
    "neighborhood_name": "Cat Mountain Villas",
    "state_code": "TX"
  },
  "29346": {
    "city_id": "05000",
    "neighborhood_id": "29346",
    "neighborhood_name": "Cliff Over Lake Austin",
    "state_code": "TX"
  },
  "29347": {
    "city_id": "05000",
    "neighborhood_id": "29347",
    "neighborhood_name": "Colorado Crossing",
    "state_code": "TX"
  },
  "29348": {
    "city_id": "05000",
    "neighborhood_id": "29348",
    "neighborhood_name": "Stoneledge",
    "state_code": "TX"
  },
  "29349": {
    "city_id": "05000",
    "neighborhood_id": "29349",
    "neighborhood_name": "Saratoga Point",
    "state_code": "TX"
  },
  "29350": {
    "city_id": "05000",
    "neighborhood_id": "29350",
    "neighborhood_name": "Parmer Square",
    "state_code": "TX"
  },
  "29351": {
    "city_id": "05000",
    "neighborhood_id": "29351",
    "neighborhood_name": "Parmer Lane Heights",
    "state_code": "TX"
  },
  "29352": {
    "city_id": "05000",
    "neighborhood_id": "29352",
    "neighborhood_name": "North Star",
    "state_code": "TX"
  },
  "29353": {
    "city_id": "05000",
    "neighborhood_id": "29353",
    "neighborhood_name": "Village At Walnut Creek",
    "state_code": "TX"
  },
  "29354": {
    "city_id": "05000",
    "neighborhood_id": "29354",
    "neighborhood_name": "Tanglewild Estates",
    "state_code": "TX"
  },
  "29356": {
    "city_id": "05000",
    "neighborhood_id": "29356",
    "neighborhood_name": "Tuscany Business Park",
    "state_code": "TX"
  },
  "29357": {
    "city_id": "05000",
    "neighborhood_id": "29357",
    "neighborhood_name": "Park 35",
    "state_code": "TX"
  },
  "29358": {
    "city_id": "05000",
    "neighborhood_id": "29358",
    "neighborhood_name": "North Park Estates",
    "state_code": "TX"
  },
  "29359": {
    "city_id": "05000",
    "neighborhood_id": "29359",
    "neighborhood_name": "Kings Village",
    "state_code": "TX"
  },
  "29360": {
    "city_id": "05000",
    "neighborhood_id": "29360",
    "neighborhood_name": "Woods Of Century Park",
    "state_code": "TX"
  },
  "29361": {
    "city_id": "05000",
    "neighborhood_id": "29361",
    "neighborhood_name": "Champion City Park",
    "state_code": "TX"
  },
  "29362": {
    "city_id": "05000",
    "neighborhood_id": "29362",
    "neighborhood_name": "Champions Forest",
    "state_code": "TX"
  },
  "29363": {
    "city_id": "05000",
    "neighborhood_id": "29363",
    "neighborhood_name": "Cherry Hill Park",
    "state_code": "TX"
  },
  "29365": {
    "city_id": "05000",
    "neighborhood_id": "29365",
    "neighborhood_name": "Greystone Center",
    "state_code": "TX"
  },
  "29366": {
    "city_id": "05000",
    "neighborhood_id": "29366",
    "neighborhood_name": "Chimney Hill",
    "state_code": "TX"
  },
  "29367": {
    "city_id": "05000",
    "neighborhood_id": "29367",
    "neighborhood_name": "Business Park Place",
    "state_code": "TX"
  },
  "29369": {
    "city_id": "05000",
    "neighborhood_id": "29369",
    "neighborhood_name": "Sette Tierra",
    "state_code": "TX"
  },
  "29370": {
    "city_id": "05000",
    "neighborhood_id": "29370",
    "neighborhood_name": "Colorado Foothills",
    "state_code": "TX"
  },
  "29371": {
    "city_id": "05000",
    "neighborhood_id": "29371",
    "neighborhood_name": "Comanche Canyon Ranch",
    "state_code": "TX"
  },
  "29372": {
    "city_id": "05000",
    "neighborhood_id": "29372",
    "neighborhood_name": "Comanche Point",
    "state_code": "TX"
  },
  "29373": {
    "city_id": "05000",
    "neighborhood_id": "29373",
    "neighborhood_name": "Comanche Trail",
    "state_code": "TX"
  },
  "29374": {
    "city_id": "05000",
    "neighborhood_id": "29374",
    "neighborhood_name": "Camelot",
    "state_code": "TX"
  },
  "29375": {
    "city_id": "05000",
    "neighborhood_id": "29375",
    "neighborhood_name": "Las Cimas Office Park",
    "state_code": "TX"
  },
  "29376": {
    "city_id": "05000",
    "neighborhood_id": "29376",
    "neighborhood_name": "Edinburgh Gardens",
    "state_code": "TX"
  },
  "29377": {
    "city_id": "05000",
    "neighborhood_id": "29377",
    "neighborhood_name": "Commerce Park At Harris Branch",
    "state_code": "TX"
  },
  "29378": {
    "city_id": "05000",
    "neighborhood_id": "29378",
    "neighborhood_name": "Anderson Mill Village South",
    "state_code": "TX"
  },
  "29379": {
    "city_id": "05000",
    "neighborhood_id": "29379",
    "neighborhood_name": "Heritage Center Northwest",
    "state_code": "TX"
  },
  "29380": {
    "city_id": "05000",
    "neighborhood_id": "29380",
    "neighborhood_name": "Duval Springs",
    "state_code": "TX"
  },
  "29386": {
    "city_id": "05000",
    "neighborhood_id": "29386",
    "neighborhood_name": "Davis Spring",
    "state_code": "TX"
  },
  "29389": {
    "city_id": "05000",
    "neighborhood_id": "29389",
    "neighborhood_name": "Colony Meadows",
    "state_code": "TX"
  },
  "29390": {
    "city_id": "05000",
    "neighborhood_id": "29390",
    "neighborhood_name": "Comanche Village",
    "state_code": "TX"
  },
  "29391": {
    "city_id": "05000",
    "neighborhood_id": "29391",
    "neighborhood_name": "Deer Creek",
    "state_code": "TX"
  },
  "29392": {
    "city_id": "05000",
    "neighborhood_id": "29392",
    "neighborhood_name": "Bergstrom Village",
    "state_code": "TX"
  },
  "29393": {
    "city_id": "05000",
    "neighborhood_id": "29393",
    "neighborhood_name": "Stoney Ridge",
    "state_code": "TX"
  },
  "29394": {
    "city_id": "05000",
    "neighborhood_id": "29394",
    "neighborhood_name": "Five Oaks Park North",
    "state_code": "TX"
  },
  "29395": {
    "city_id": "05000",
    "neighborhood_id": "29395",
    "neighborhood_name": "River Ranch",
    "state_code": "TX"
  },
  "29396": {
    "city_id": "05000",
    "neighborhood_id": "29396",
    "neighborhood_name": "Parmer Park",
    "state_code": "TX"
  },
  "29397": {
    "city_id": "05000",
    "neighborhood_id": "29397",
    "neighborhood_name": "Dessau Estates",
    "state_code": "TX"
  },
  "29398": {
    "city_id": "05000",
    "neighborhood_id": "29398",
    "neighborhood_name": "Parker Acres",
    "state_code": "TX"
  },
  "29400": {
    "city_id": "05000",
    "neighborhood_id": "29400",
    "neighborhood_name": "Senna Hills",
    "state_code": "TX"
  },
  "29401": {
    "city_id": "05000",
    "neighborhood_id": "29401",
    "neighborhood_name": "The Village At Meadow Mountain",
    "state_code": "TX"
  },
  "29402": {
    "city_id": "05000",
    "neighborhood_id": "29402",
    "neighborhood_name": "Preserve At Lost Gold Cave",
    "state_code": "TX"
  },
  "29403": {
    "city_id": "05000",
    "neighborhood_id": "29403",
    "neighborhood_name": "Pinnacle Oaks",
    "state_code": "TX"
  },
  "29404": {
    "city_id": "05000",
    "neighborhood_id": "29404",
    "neighborhood_name": "Westlake Crossroads",
    "state_code": "TX"
  },
  "29405": {
    "city_id": "05000",
    "neighborhood_id": "29405",
    "neighborhood_name": "Rolling Hills West",
    "state_code": "TX"
  },
  "29406": {
    "city_id": "05000",
    "neighborhood_id": "29406",
    "neighborhood_name": "Glenlake",
    "state_code": "TX"
  },
  "29407": {
    "city_id": "05000",
    "neighborhood_id": "29407",
    "neighborhood_name": "Dry Creek West",
    "state_code": "TX"
  },
  "29408": {
    "city_id": "05000",
    "neighborhood_id": "29408",
    "neighborhood_name": "Walnut Bend",
    "state_code": "TX"
  },
  "29410": {
    "city_id": "05000",
    "neighborhood_id": "29410",
    "neighborhood_name": "Stoneridge Place",
    "state_code": "TX"
  },
  "29411": {
    "city_id": "05000",
    "neighborhood_id": "29411",
    "neighborhood_name": "Edwards Mountain",
    "state_code": "TX"
  },
  "29415": {
    "city_id": "05000",
    "neighborhood_id": "29415",
    "neighborhood_name": "The High Road",
    "state_code": "TX"
  },
  "29417": {
    "city_id": "05000",
    "neighborhood_id": "29417",
    "neighborhood_name": "Bee Cliffs",
    "state_code": "TX"
  },
  "29419": {
    "city_id": "05000",
    "neighborhood_id": "29419",
    "neighborhood_name": "Sierra Vista",
    "state_code": "TX"
  },
  "29420": {
    "city_id": "05000",
    "neighborhood_id": "29420",
    "neighborhood_name": "Enclave At The Villages Of Spicewood",
    "state_code": "TX"
  },
  "29421": {
    "city_id": "05000",
    "neighborhood_id": "29421",
    "neighborhood_name": "Hunter's Chase",
    "state_code": "TX"
  },
  "29422": {
    "city_id": "05000",
    "neighborhood_id": "29422",
    "neighborhood_name": "Rockcliff Estates",
    "state_code": "TX"
  },
  "29423": {
    "city_id": "05000",
    "neighborhood_id": "29423",
    "neighborhood_name": "The Ravine",
    "state_code": "TX"
  },
  "29424": {
    "city_id": "05000",
    "neighborhood_id": "29424",
    "neighborhood_name": "Green Park",
    "state_code": "TX"
  },
  "29425": {
    "city_id": "05000",
    "neighborhood_id": "29425",
    "neighborhood_name": "Venado Estates",
    "state_code": "TX"
  },
  "29426": {
    "city_id": "05000",
    "neighborhood_id": "29426",
    "neighborhood_name": "Yucca Mountain",
    "state_code": "TX"
  },
  "29427": {
    "city_id": "05000",
    "neighborhood_id": "29427",
    "neighborhood_name": "Registry Office Park",
    "state_code": "TX"
  },
  "29428": {
    "city_id": "05000",
    "neighborhood_id": "29428",
    "neighborhood_name": "The Fairway At Great Hills",
    "state_code": "TX"
  },
  "29432": {
    "city_id": "05000",
    "neighborhood_id": "29432",
    "neighborhood_name": "Field Of Honor",
    "state_code": "TX"
  },
  "29433": {
    "city_id": "05000",
    "neighborhood_id": "29433",
    "neighborhood_name": "Painted Bunting",
    "state_code": "TX"
  },
  "29434": {
    "city_id": "05000",
    "neighborhood_id": "29434",
    "neighborhood_name": "Lost Plains",
    "state_code": "TX"
  },
  "29435": {
    "city_id": "05000",
    "neighborhood_id": "29435",
    "neighborhood_name": "Ridgewood Village",
    "state_code": "TX"
  },
  "29436": {
    "city_id": "05000",
    "neighborhood_id": "29436",
    "neighborhood_name": "Wood Shadows",
    "state_code": "TX"
  },
  "29442": {
    "city_id": "05000",
    "neighborhood_id": "29442",
    "neighborhood_name": "Spicewood Forest",
    "state_code": "TX"
  },
  "29443": {
    "city_id": "05000",
    "neighborhood_id": "29443",
    "neighborhood_name": "Forest North Estates",
    "state_code": "TX"
  },
  "29444": {
    "city_id": "05000",
    "neighborhood_id": "29444",
    "neighborhood_name": "Forest At The Villages Of Spicewood",
    "state_code": "TX"
  },
  "29445": {
    "city_id": "05000",
    "neighborhood_id": "29445",
    "neighborhood_name": "3m Austin Center",
    "state_code": "TX"
  },
  "29446": {
    "city_id": "05000",
    "neighborhood_id": "29446",
    "neighborhood_name": "Walnut Ridge",
    "state_code": "TX"
  },
  "29447": {
    "city_id": "05000",
    "neighborhood_id": "29447",
    "neighborhood_name": "Spicewood View Office Park",
    "state_code": "TX"
  },
  "29448": {
    "city_id": "05000",
    "neighborhood_id": "29448",
    "neighborhood_name": "Sleepy Hollow",
    "state_code": "TX"
  },
  "29449": {
    "city_id": "05000",
    "neighborhood_id": "29449",
    "neighborhood_name": "Limestone At Wells Branch",
    "state_code": "TX"
  },
  "29451": {
    "city_id": "05000",
    "neighborhood_id": "29451",
    "neighborhood_name": "Idyle Hour Acres",
    "state_code": "TX"
  },
  "29453": {
    "city_id": "05000",
    "neighborhood_id": "29453",
    "neighborhood_name": "Stonelake Office Park",
    "state_code": "TX"
  },
  "29454": {
    "city_id": "05000",
    "neighborhood_id": "29454",
    "neighborhood_name": "Vista Del Pueblo",
    "state_code": "TX"
  },
  "29455": {
    "city_id": "05000",
    "neighborhood_id": "29455",
    "neighborhood_name": "Los Cielos",
    "state_code": "TX"
  },
  "29457": {
    "city_id": "05000",
    "neighborhood_id": "29457",
    "neighborhood_name": "The Parke",
    "state_code": "TX"
  },
  "29458": {
    "city_id": "05000",
    "neighborhood_id": "29458",
    "neighborhood_name": "Lakeland Commerce Center",
    "state_code": "TX"
  },
  "29459": {
    "city_id": "05000",
    "neighborhood_id": "29459",
    "neighborhood_name": "The Bluffs Of Great Hills",
    "state_code": "TX"
  },
  "29460": {
    "city_id": "05000",
    "neighborhood_id": "29460",
    "neighborhood_name": "Prominent Point",
    "state_code": "TX"
  },
  "29461": {
    "city_id": "05000",
    "neighborhood_id": "29461",
    "neighborhood_name": "The Arbor At Great Hills",
    "state_code": "TX"
  },
  "29462": {
    "city_id": "05000",
    "neighborhood_id": "29462",
    "neighborhood_name": "Adirondack",
    "state_code": "TX"
  },
  "29463": {
    "city_id": "05000",
    "neighborhood_id": "29463",
    "neighborhood_name": "Austin Hills",
    "state_code": "TX"
  },
  "29464": {
    "city_id": "05000",
    "neighborhood_id": "29464",
    "neighborhood_name": "Great Hills",
    "state_code": "TX"
  },
  "29466": {
    "city_id": "05000",
    "neighborhood_id": "29466",
    "neighborhood_name": "Green Shores On Lake Austin",
    "state_code": "TX"
  },
  "29467": {
    "city_id": "05000",
    "neighborhood_id": "29467",
    "neighborhood_name": "Oak Shores On Lake Austin",
    "state_code": "TX"
  },
  "29468": {
    "city_id": "05000",
    "neighborhood_id": "29468",
    "neighborhood_name": "Briarpatch",
    "state_code": "TX"
  },
  "29469": {
    "city_id": "05000",
    "neighborhood_id": "29469",
    "neighborhood_name": "Indian Oaks",
    "state_code": "TX"
  },
  "29470": {
    "city_id": "05000",
    "neighborhood_id": "29470",
    "neighborhood_name": "Los Indios",
    "state_code": "TX"
  },
  "29471": {
    "city_id": "05000",
    "neighborhood_id": "29471",
    "neighborhood_name": "Windy Cove",
    "state_code": "TX"
  },
  "29474": {
    "city_id": "05000",
    "neighborhood_id": "29474",
    "neighborhood_name": "Spicewood Office Park",
    "state_code": "TX"
  },
  "29478": {
    "city_id": "05000",
    "neighborhood_id": "29478",
    "neighborhood_name": "Harris Branch",
    "state_code": "TX"
  },
  "29479": {
    "city_id": "05000",
    "neighborhood_id": "29479",
    "neighborhood_name": "Harris Ridge",
    "state_code": "TX"
  },
  "29480": {
    "city_id": "05000",
    "neighborhood_id": "29480",
    "neighborhood_name": "Balcones Village",
    "state_code": "TX"
  },
  "29481": {
    "city_id": "05000",
    "neighborhood_id": "29481",
    "neighborhood_name": "The Gardens At Balcones",
    "state_code": "TX"
  },
  "29482": {
    "city_id": "05000",
    "neighborhood_id": "29482",
    "neighborhood_name": "The Woodlands At Anderson Village",
    "state_code": "TX"
  },
  "29483": {
    "city_id": "05000",
    "neighborhood_id": "29483",
    "neighborhood_name": "Wells Point Commercial",
    "state_code": "TX"
  },
  "29484": {
    "city_id": "05000",
    "neighborhood_id": "29484",
    "neighborhood_name": "Davenport Ranch",
    "state_code": "TX"
  },
  "29485": {
    "city_id": "05000",
    "neighborhood_id": "29485",
    "neighborhood_name": "Montview Harbor",
    "state_code": "TX"
  },
  "29486": {
    "city_id": "05000",
    "neighborhood_id": "29486",
    "neighborhood_name": "Copperfield",
    "state_code": "TX"
  },
  "29487": {
    "city_id": "05000",
    "neighborhood_id": "29487",
    "neighborhood_name": "High Vista",
    "state_code": "TX"
  },
  "29488": {
    "city_id": "05000",
    "neighborhood_id": "29488",
    "neighborhood_name": "Chimney Corners",
    "state_code": "TX"
  },
  "29489": {
    "city_id": "05000",
    "neighborhood_id": "29489",
    "neighborhood_name": "Mesa Oaks",
    "state_code": "TX"
  },
  "29490": {
    "city_id": "05000",
    "neighborhood_id": "29490",
    "neighborhood_name": "Highland Hills",
    "state_code": "TX"
  },
  "29492": {
    "city_id": "05000",
    "neighborhood_id": "29492",
    "neighborhood_name": "Highland Park West",
    "state_code": "TX"
  },
  "29493": {
    "city_id": "05000",
    "neighborhood_id": "29493",
    "neighborhood_name": "Ridge Oak Park",
    "state_code": "TX"
  },
  "29494": {
    "city_id": "05000",
    "neighborhood_id": "29494",
    "neighborhood_name": "Hill Country Center",
    "state_code": "TX"
  },
  "29497": {
    "city_id": "05000",
    "neighborhood_id": "29497",
    "neighborhood_name": "Serena Woods",
    "state_code": "TX"
  },
  "29498": {
    "city_id": "05000",
    "neighborhood_id": "29498",
    "neighborhood_name": "Oak Knoll Estates",
    "state_code": "TX"
  },
  "29499": {
    "city_id": "05000",
    "neighborhood_id": "29499",
    "neighborhood_name": "Windridge",
    "state_code": "TX"
  },
  "29500": {
    "city_id": "05000",
    "neighborhood_id": "29500",
    "neighborhood_name": "Oaks Of Jollyville",
    "state_code": "TX"
  },
  "29501": {
    "city_id": "05000",
    "neighborhood_id": "29501",
    "neighborhood_name": "Hughes Park Lake",
    "state_code": "TX"
  },
  "29503": {
    "city_id": "05000",
    "neighborhood_id": "29503",
    "neighborhood_name": "Illakee",
    "state_code": "TX"
  },
  "29504": {
    "city_id": "05000",
    "neighborhood_id": "29504",
    "neighborhood_name": "Island On Westlake",
    "state_code": "TX"
  },
  "29505": {
    "city_id": "05000",
    "neighborhood_id": "29505",
    "neighborhood_name": "West Rim",
    "state_code": "TX"
  },
  "29506": {
    "city_id": "05000",
    "neighborhood_id": "29506",
    "neighborhood_name": "Island Way",
    "state_code": "TX"
  },
  "29507": {
    "city_id": "05000",
    "neighborhood_id": "29507",
    "neighborhood_name": "Laguna Loma",
    "state_code": "TX"
  },
  "29511": {
    "city_id": "05000",
    "neighborhood_id": "29511",
    "neighborhood_name": "Balcones Terrace",
    "state_code": "TX"
  },
  "29514": {
    "city_id": "05000",
    "neighborhood_id": "29514",
    "neighborhood_name": "Northview Hills",
    "state_code": "TX"
  },
  "29515": {
    "city_id": "05000",
    "neighborhood_id": "29515",
    "neighborhood_name": "Northwest Hills Ranch",
    "state_code": "TX"
  },
  "29516": {
    "city_id": "05000",
    "neighborhood_id": "29516",
    "neighborhood_name": "Westhill Estates",
    "state_code": "TX"
  },
  "29518": {
    "city_id": "05000",
    "neighborhood_id": "29518",
    "neighborhood_name": "Riata Crossing",
    "state_code": "TX"
  },
  "29519": {
    "city_id": "05000",
    "neighborhood_id": "29519",
    "neighborhood_name": "Jester Point",
    "state_code": "TX"
  },
  "29520": {
    "city_id": "05000",
    "neighborhood_id": "29520",
    "neighborhood_name": "Walnut Creek Business Park",
    "state_code": "TX"
  },
  "29521": {
    "city_id": "05000",
    "neighborhood_id": "29521",
    "neighborhood_name": "Park Central",
    "state_code": "TX"
  },
  "29522": {
    "city_id": "05000",
    "neighborhood_id": "29522",
    "neighborhood_name": "Village Oaks",
    "state_code": "TX"
  },
  "29523": {
    "city_id": "05000",
    "neighborhood_id": "29523",
    "neighborhood_name": "Timberwood",
    "state_code": "TX"
  },
  "29524": {
    "city_id": "05000",
    "neighborhood_id": "29524",
    "neighborhood_name": "Maconda Park East",
    "state_code": "TX"
  },
  "29525": {
    "city_id": "05000",
    "neighborhood_id": "29525",
    "neighborhood_name": "Maconda Park West",
    "state_code": "TX"
  },
  "29526": {
    "city_id": "05000",
    "neighborhood_id": "29526",
    "neighborhood_name": "Lake Creek Shopping Center",
    "state_code": "TX"
  },
  "29528": {
    "city_id": "05000",
    "neighborhood_id": "29528",
    "neighborhood_name": "Kercheville Estates",
    "state_code": "TX"
  },
  "29529": {
    "city_id": "05000",
    "neighborhood_id": "29529",
    "neighborhood_name": "Wells Branch Technology Park",
    "state_code": "TX"
  },
  "29530": {
    "city_id": "05000",
    "neighborhood_id": "29530",
    "neighborhood_name": "Koger Executive Center",
    "state_code": "TX"
  },
  "29531": {
    "city_id": "05000",
    "neighborhood_id": "29531",
    "neighborhood_name": "Tomanet Estates",
    "state_code": "TX"
  },
  "29532": {
    "city_id": "05000",
    "neighborhood_id": "29532",
    "neighborhood_name": "Lamplight Village",
    "state_code": "TX"
  },
  "29533": {
    "city_id": "05000",
    "neighborhood_id": "29533",
    "neighborhood_name": "Lakeplace",
    "state_code": "TX"
  },
  "29534": {
    "city_id": "05000",
    "neighborhood_id": "29534",
    "neighborhood_name": "Comanche Trail Estates",
    "state_code": "TX"
  },
  "29535": {
    "city_id": "05000",
    "neighborhood_id": "29535",
    "neighborhood_name": "Village At Anderson Mill",
    "state_code": "TX"
  },
  "29536": {
    "city_id": "05000",
    "neighborhood_id": "29536",
    "neighborhood_name": "The Parke At Anderson Mill",
    "state_code": "TX"
  },
  "29539": {
    "city_id": "05000",
    "neighborhood_id": "29539",
    "neighborhood_name": "The Doke",
    "state_code": "TX"
  },
  "29540": {
    "city_id": "05000",
    "neighborhood_id": "29540",
    "neighborhood_name": "Lakes At Northtown",
    "state_code": "TX"
  },
  "29541": {
    "city_id": "05000",
    "neighborhood_id": "29541",
    "neighborhood_name": "Lakeshore Addition",
    "state_code": "TX"
  },
  "29543": {
    "city_id": "05000",
    "neighborhood_id": "29543",
    "neighborhood_name": "Lantana Glen",
    "state_code": "TX"
  },
  "29544": {
    "city_id": "05000",
    "neighborhood_id": "29544",
    "neighborhood_name": "Las Cimas",
    "state_code": "TX"
  },
  "29546": {
    "city_id": "05000",
    "neighborhood_id": "29546",
    "neighborhood_name": "Hollow Canyon",
    "state_code": "TX"
  },
  "29547": {
    "city_id": "05000",
    "neighborhood_id": "29547",
    "neighborhood_name": "Ledgestone Cliffs",
    "state_code": "TX"
  },
  "29549": {
    "city_id": "05000",
    "neighborhood_id": "29549",
    "neighborhood_name": "North Point",
    "state_code": "TX"
  },
  "29550": {
    "city_id": "05000",
    "neighborhood_id": "29550",
    "neighborhood_name": "Colony Park",
    "state_code": "TX"
  },
  "29552": {
    "city_id": "05000",
    "neighborhood_id": "29552",
    "neighborhood_name": "The Lodge At Walnut Creek",
    "state_code": "TX"
  },
  "29554": {
    "city_id": "05000",
    "neighborhood_id": "29554",
    "neighborhood_name": "Long Canyon",
    "state_code": "TX"
  },
  "29555": {
    "city_id": "05000",
    "neighborhood_id": "29555",
    "neighborhood_name": "M And J",
    "state_code": "TX"
  },
  "29556": {
    "city_id": "05000",
    "neighborhood_id": "29556",
    "neighborhood_name": "Market At Wells Branch",
    "state_code": "TX"
  },
  "29558": {
    "city_id": "05000",
    "neighborhood_id": "29558",
    "neighborhood_name": "North Oaks Hillside",
    "state_code": "TX"
  },
  "29559": {
    "city_id": "05000",
    "neighborhood_id": "29559",
    "neighborhood_name": "North Oaks",
    "state_code": "TX"
  },
  "29560": {
    "city_id": "05000",
    "neighborhood_id": "29560",
    "neighborhood_name": "Meadows At Berdoll",
    "state_code": "TX"
  },
  "29561": {
    "city_id": "05000",
    "neighborhood_id": "29561",
    "neighborhood_name": "Meadows At Trinity Crossing",
    "state_code": "TX"
  },
  "29562": {
    "city_id": "05000",
    "neighborhood_id": "29562",
    "neighborhood_name": "Meadows Of Walnut Creek",
    "state_code": "TX"
  },
  "29564": {
    "city_id": "05000",
    "neighborhood_id": "29564",
    "neighborhood_name": "Mesa Park",
    "state_code": "TX"
  },
  "29565": {
    "city_id": "05000",
    "neighborhood_id": "29565",
    "neighborhood_name": "Mesa Village",
    "state_code": "TX"
  },
  "29566": {
    "city_id": "05000",
    "neighborhood_id": "29566",
    "neighborhood_name": "Plaza Volente",
    "state_code": "TX"
  },
  "29568": {
    "city_id": "05000",
    "neighborhood_id": "29568",
    "neighborhood_name": "Milwood",
    "state_code": "TX"
  },
  "29569": {
    "city_id": "05000",
    "neighborhood_id": "29569",
    "neighborhood_name": "Northwest Estates",
    "state_code": "TX"
  },
  "29571": {
    "city_id": "05000",
    "neighborhood_id": "29571",
    "neighborhood_name": "North Crossing",
    "state_code": "TX"
  },
  "29572": {
    "city_id": "05000",
    "neighborhood_id": "29572",
    "neighborhood_name": "Oakview",
    "state_code": "TX"
  },
  "29573": {
    "city_id": "05000",
    "neighborhood_id": "29573",
    "neighborhood_name": "Valleyside Place",
    "state_code": "TX"
  },
  "29575": {
    "city_id": "05000",
    "neighborhood_id": "29575",
    "neighborhood_name": "North Loop Business Park",
    "state_code": "TX"
  },
  "29576": {
    "city_id": "05000",
    "neighborhood_id": "29576",
    "neighborhood_name": "Park At Duval",
    "state_code": "TX"
  },
  "29578": {
    "city_id": "05000",
    "neighborhood_id": "29578",
    "neighborhood_name": "North Shields",
    "state_code": "TX"
  },
  "29579": {
    "city_id": "05000",
    "neighborhood_id": "29579",
    "neighborhood_name": "Parmer Point",
    "state_code": "TX"
  },
  "29581": {
    "city_id": "05000",
    "neighborhood_id": "29581",
    "neighborhood_name": "Northridge Park",
    "state_code": "TX"
  },
  "29583": {
    "city_id": "05000",
    "neighborhood_id": "29583",
    "neighborhood_name": "Northwest Balcones",
    "state_code": "TX"
  },
  "29584": {
    "city_id": "05000",
    "neighborhood_id": "29584",
    "neighborhood_name": "Oak Summit",
    "state_code": "TX"
  },
  "29585": {
    "city_id": "05000",
    "neighborhood_id": "29585",
    "neighborhood_name": "Northwest Hills",
    "state_code": "TX"
  },
  "29586": {
    "city_id": "05000",
    "neighborhood_id": "29586",
    "neighborhood_name": "Northwest Hills Northwest Oaks",
    "state_code": "TX"
  },
  "29587": {
    "city_id": "05000",
    "neighborhood_id": "29587",
    "neighborhood_name": "Northwood",
    "state_code": "TX"
  },
  "29588": {
    "city_id": "05000",
    "neighborhood_id": "29588",
    "neighborhood_name": "Walden Park At Lakeline",
    "state_code": "TX"
  },
  "29589": {
    "city_id": "05000",
    "neighborhood_id": "29589",
    "neighborhood_name": "Davis Spring Commercial",
    "state_code": "TX"
  },
  "29591": {
    "city_id": "05000",
    "neighborhood_id": "29591",
    "neighborhood_name": "Old Tarlton Center",
    "state_code": "TX"
  },
  "29592": {
    "city_id": "05000",
    "neighborhood_id": "29592",
    "neighborhood_name": "Overlook At Cat Mountain",
    "state_code": "TX"
  },
  "29593": {
    "city_id": "05000",
    "neighborhood_id": "29593",
    "neighborhood_name": "Jester Estates",
    "state_code": "TX"
  },
  "29594": {
    "city_id": "05000",
    "neighborhood_id": "29594",
    "neighborhood_name": "Pamela Heights",
    "state_code": "TX"
  },
  "29595": {
    "city_id": "05000",
    "neighborhood_id": "29595",
    "neighborhood_name": "Panther Hollow Creek",
    "state_code": "TX"
  },
  "29596": {
    "city_id": "05000",
    "neighborhood_id": "29596",
    "neighborhood_name": "Northtown Park",
    "state_code": "TX"
  },
  "29597": {
    "city_id": "05000",
    "neighborhood_id": "29597",
    "neighborhood_name": "Tech Ridge Center",
    "state_code": "TX"
  },
  "29598": {
    "city_id": "05000",
    "neighborhood_id": "29598",
    "neighborhood_name": "Parmer North",
    "state_code": "TX"
  },
  "29599": {
    "city_id": "05000",
    "neighborhood_id": "29599",
    "neighborhood_name": "Crossing At Parmer Lane",
    "state_code": "TX"
  },
  "29600": {
    "city_id": "05000",
    "neighborhood_id": "29600",
    "neighborhood_name": "Scofield Farms",
    "state_code": "TX"
  },
  "29601": {
    "city_id": "05000",
    "neighborhood_id": "29601",
    "neighborhood_name": "Scofield Ranch Creekside",
    "state_code": "TX"
  },
  "29603": {
    "city_id": "05000",
    "neighborhood_id": "29603",
    "neighborhood_name": "Pecan Park",
    "state_code": "TX"
  },
  "29604": {
    "city_id": "05000",
    "neighborhood_id": "29604",
    "neighborhood_name": "Pioneer Crossing",
    "state_code": "TX"
  },
  "29607": {
    "city_id": "05000",
    "neighborhood_id": "29607",
    "neighborhood_name": "The Point At Rob Roy",
    "state_code": "TX"
  },
  "29608": {
    "city_id": "05000",
    "neighborhood_id": "29608",
    "neighborhood_name": "Rob Roy",
    "state_code": "TX"
  },
  "29609": {
    "city_id": "05000",
    "neighborhood_id": "29609",
    "neighborhood_name": "Davenport Ranch West",
    "state_code": "TX"
  },
  "29610": {
    "city_id": "05000",
    "neighborhood_id": "29610",
    "neighborhood_name": "Point West Of Westover Hills",
    "state_code": "TX"
  },
  "29611": {
    "city_id": "05000",
    "neighborhood_id": "29611",
    "neighborhood_name": "Westover Hills Mountain Path",
    "state_code": "TX"
  },
  "29613": {
    "city_id": "05000",
    "neighborhood_id": "29613",
    "neighborhood_name": "Quarry",
    "state_code": "TX"
  },
  "29614": {
    "city_id": "05000",
    "neighborhood_id": "29614",
    "neighborhood_name": "Renaissance At Hunter's Chase",
    "state_code": "TX"
  },
  "29615": {
    "city_id": "05000",
    "neighborhood_id": "29615",
    "neighborhood_name": "Central Commerce Business Park",
    "state_code": "TX"
  },
  "29616": {
    "city_id": "05000",
    "neighborhood_id": "29616",
    "neighborhood_name": "Regents",
    "state_code": "TX"
  },
  "29617": {
    "city_id": "05000",
    "neighborhood_id": "29617",
    "neighborhood_name": "Westview On Lake Austin",
    "state_code": "TX"
  },
  "29618": {
    "city_id": "05000",
    "neighborhood_id": "29618",
    "neighborhood_name": "Leffler Commercial",
    "state_code": "TX"
  },
  "29619": {
    "city_id": "05000",
    "neighborhood_id": "29619",
    "neighborhood_name": "Avery Ranch North",
    "state_code": "TX"
  },
  "29620": {
    "city_id": "05000",
    "neighborhood_id": "29620",
    "neighborhood_name": "Balcones Park",
    "state_code": "TX"
  },
  "29621": {
    "city_id": "05000",
    "neighborhood_id": "29621",
    "neighborhood_name": "Westover Hills",
    "state_code": "TX"
  },
  "29622": {
    "city_id": "05000",
    "neighborhood_id": "29622",
    "neighborhood_name": "Vista West",
    "state_code": "TX"
  },
  "29623": {
    "city_id": "05000",
    "neighborhood_id": "29623",
    "neighborhood_name": "Columbia Oaks",
    "state_code": "TX"
  },
  "29625": {
    "city_id": "05000",
    "neighborhood_id": "29625",
    "neighborhood_name": "Riverfront Estates",
    "state_code": "TX"
  },
  "29626": {
    "city_id": "05000",
    "neighborhood_id": "29626",
    "neighborhood_name": "River Dance At Steiner Ranch",
    "state_code": "TX"
  },
  "29627": {
    "city_id": "05000",
    "neighborhood_id": "29627",
    "neighborhood_name": "River Oak Lake Estates",
    "state_code": "TX"
  },
  "29628": {
    "city_id": "05000",
    "neighborhood_id": "29628",
    "neighborhood_name": "River Pointe",
    "state_code": "TX"
  },
  "29629": {
    "city_id": "05000",
    "neighborhood_id": "29629",
    "neighborhood_name": "River Ridge",
    "state_code": "TX"
  },
  "29630": {
    "city_id": "05000",
    "neighborhood_id": "29630",
    "neighborhood_name": "River Terrace",
    "state_code": "TX"
  },
  "29631": {
    "city_id": "05000",
    "neighborhood_id": "29631",
    "neighborhood_name": "Rivercrest",
    "state_code": "TX"
  },
  "29634": {
    "city_id": "05000",
    "neighborhood_id": "29634",
    "neighborhood_name": "Lakes At Techridge",
    "state_code": "TX"
  },
  "29635": {
    "city_id": "05000",
    "neighborhood_id": "29635",
    "neighborhood_name": "Sarah's  Creek",
    "state_code": "TX"
  },
  "29636": {
    "city_id": "05000",
    "neighborhood_id": "29636",
    "neighborhood_name": "Pierson Business Center",
    "state_code": "TX"
  },
  "29637": {
    "city_id": "05000",
    "neighborhood_id": "29637",
    "neighborhood_name": "Parmer Center",
    "state_code": "TX"
  },
  "29638": {
    "city_id": "05000",
    "neighborhood_id": "29638",
    "neighborhood_name": "Sendero Hills",
    "state_code": "TX"
  },
  "29639": {
    "city_id": "05000",
    "neighborhood_id": "29639",
    "neighborhood_name": "Wood Creek",
    "state_code": "TX"
  },
  "29643": {
    "city_id": "05000",
    "neighborhood_id": "29643",
    "neighborhood_name": "Sierra Oaks",
    "state_code": "TX"
  },
  "29644": {
    "city_id": "05000",
    "neighborhood_id": "29644",
    "neighborhood_name": "Oakledge",
    "state_code": "TX"
  },
  "29646": {
    "city_id": "05000",
    "neighborhood_id": "29646",
    "neighborhood_name": "Speyside",
    "state_code": "TX"
  },
  "29647": {
    "city_id": "05000",
    "neighborhood_id": "29647",
    "neighborhood_name": "Spicewood At Bullcreek",
    "state_code": "TX"
  },
  "29648": {
    "city_id": "05000",
    "neighborhood_id": "29648",
    "neighborhood_name": "Spicewood Estates",
    "state_code": "TX"
  },
  "29649": {
    "city_id": "05000",
    "neighborhood_id": "29649",
    "neighborhood_name": "Spicewood Point",
    "state_code": "TX"
  },
  "29650": {
    "city_id": "05000",
    "neighborhood_id": "29650",
    "neighborhood_name": "Spring Willow Creek",
    "state_code": "TX"
  },
  "29651": {
    "city_id": "05000",
    "neighborhood_id": "29651",
    "neighborhood_name": "St. Tropez",
    "state_code": "TX"
  },
  "29652": {
    "city_id": "05000",
    "neighborhood_id": "29652",
    "neighborhood_name": "Summit At West Rim On Mount Larson",
    "state_code": "TX"
  },
  "29653": {
    "city_id": "05000",
    "neighborhood_id": "29653",
    "neighborhood_name": "Springwoods",
    "state_code": "TX"
  },
  "29654": {
    "city_id": "05000",
    "neighborhood_id": "29654",
    "neighborhood_name": "Robinson Ranch",
    "state_code": "TX"
  },
  "29655": {
    "city_id": "05000",
    "neighborhood_id": "29655",
    "neighborhood_name": "Steiner Ranch",
    "state_code": "TX"
  },
  "29657": {
    "city_id": "05000",
    "neighborhood_id": "29657",
    "neighborhood_name": "Stratford Hills",
    "state_code": "TX"
  },
  "29658": {
    "city_id": "05000",
    "neighborhood_id": "29658",
    "neighborhood_name": "Stratford Place",
    "state_code": "TX"
  },
  "29659": {
    "city_id": "05000",
    "neighborhood_id": "29659",
    "neighborhood_name": "Summerwood",
    "state_code": "TX"
  },
  "29660": {
    "city_id": "05000",
    "neighborhood_id": "29660",
    "neighborhood_name": "Riata Corporate Park",
    "state_code": "TX"
  },
  "29661": {
    "city_id": "05000",
    "neighborhood_id": "29661",
    "neighborhood_name": "Wells Branch",
    "state_code": "TX"
  },
  "29662": {
    "city_id": "05000",
    "neighborhood_id": "29662",
    "neighborhood_name": "Cima Serrena Village",
    "state_code": "TX"
  },
  "29663": {
    "city_id": "05000",
    "neighborhood_id": "29663",
    "neighborhood_name": "Tanglewood Estates",
    "state_code": "TX"
  },
  "29667": {
    "city_id": "05000",
    "neighborhood_id": "29667",
    "neighborhood_name": "The Park At Spicewood Springs",
    "state_code": "TX"
  },
  "29668": {
    "city_id": "05000",
    "neighborhood_id": "29668",
    "neighborhood_name": "Avery Ranch",
    "state_code": "TX"
  },
  "29672": {
    "city_id": "05000",
    "neighborhood_id": "29672",
    "neighborhood_name": "The Woods Of Greenshores",
    "state_code": "TX"
  },
  "29673": {
    "city_id": "05000",
    "neighborhood_id": "29673",
    "neighborhood_name": "Timber Creek",
    "state_code": "TX"
  },
  "29674": {
    "city_id": "05000",
    "neighborhood_id": "29674",
    "neighborhood_name": "Treetops",
    "state_code": "TX"
  },
  "29675": {
    "city_id": "05000",
    "neighborhood_id": "29675",
    "neighborhood_name": "Twenty Two Twenty Two Business Park",
    "state_code": "TX"
  },
  "29676": {
    "city_id": "05000",
    "neighborhood_id": "29676",
    "neighborhood_name": "Twin Mesa",
    "state_code": "TX"
  },
  "29677": {
    "city_id": "05000",
    "neighborhood_id": "29677",
    "neighborhood_name": "Village At River Oaks",
    "state_code": "TX"
  },
  "29678": {
    "city_id": "05000",
    "neighborhood_id": "29678",
    "neighborhood_name": "Vista North",
    "state_code": "TX"
  },
  "29679": {
    "city_id": "05000",
    "neighborhood_id": "29679",
    "neighborhood_name": "The Woods Of Westlake Hilltop",
    "state_code": "TX"
  },
  "29680": {
    "city_id": "05000",
    "neighborhood_id": "29680",
    "neighborhood_name": "Lakewood Park",
    "state_code": "TX"
  },
  "29681": {
    "city_id": "05000",
    "neighborhood_id": "29681",
    "neighborhood_name": "Walnut Crossing",
    "state_code": "TX"
  },
  "29682": {
    "city_id": "05000",
    "neighborhood_id": "29682",
    "neighborhood_name": "Watersedge",
    "state_code": "TX"
  },
  "29683": {
    "city_id": "05000",
    "neighborhood_id": "29683",
    "neighborhood_name": "Grandview Hills",
    "state_code": "TX"
  },
  "29684": {
    "city_id": "05000",
    "neighborhood_id": "29684",
    "neighborhood_name": "Westcliff",
    "state_code": "TX"
  },
  "29685": {
    "city_id": "05000",
    "neighborhood_id": "29685",
    "neighborhood_name": "Westlake Highlands",
    "state_code": "TX"
  },
  "29686": {
    "city_id": "05000",
    "neighborhood_id": "29686",
    "neighborhood_name": "Westminster Glen",
    "state_code": "TX"
  },
  "29688": {
    "city_id": "05000",
    "neighborhood_id": "29688",
    "neighborhood_name": "Lakeline Mall",
    "state_code": "TX"
  },
  "29689": {
    "city_id": "05000",
    "neighborhood_id": "29689",
    "neighborhood_name": "Woodcliff",
    "state_code": "TX"
  },
  "29690": {
    "city_id": "05000",
    "neighborhood_id": "29690",
    "neighborhood_name": "The Woods Of Anderson Mill",
    "state_code": "TX"
  },
  "29691": {
    "city_id": "05000",
    "neighborhood_id": "29691",
    "neighborhood_name": "The Woodlands",
    "state_code": "TX"
  },
  "29692": {
    "city_id": "05000",
    "neighborhood_id": "29692",
    "neighborhood_name": "Woods Of Westlake Heights",
    "state_code": "TX"
  },
  "29693": {
    "city_id": "05000",
    "neighborhood_id": "29693",
    "neighborhood_name": "Rob Roy On The Lake",
    "state_code": "TX"
  },
  "29701": {
    "city_id": "05000",
    "neighborhood_id": "29701",
    "neighborhood_name": "Hollow At Slaughter Creek",
    "state_code": "TX"
  },
  "29702": {
    "city_id": "05000",
    "neighborhood_id": "29702",
    "neighborhood_name": "Cypress Banks",
    "state_code": "TX"
  },
  "29705": {
    "city_id": "05000",
    "neighborhood_id": "29705",
    "neighborhood_name": "Acre Tract",
    "state_code": "TX"
  },
  "29706": {
    "city_id": "05000",
    "neighborhood_id": "29706",
    "neighborhood_name": "William Cannon Joint Venture",
    "state_code": "TX"
  },
  "29707": {
    "city_id": "05000",
    "neighborhood_id": "29707",
    "neighborhood_name": "Austin South Point Village",
    "state_code": "TX"
  },
  "29708": {
    "city_id": "05000",
    "neighborhood_id": "29708",
    "neighborhood_name": "Bluff Springs Center",
    "state_code": "TX"
  },
  "29709": {
    "city_id": "05000",
    "neighborhood_id": "29709",
    "neighborhood_name": "Bluff Springs Commercial",
    "state_code": "TX"
  },
  "29710": {
    "city_id": "05000",
    "neighborhood_id": "29710",
    "neighborhood_name": "Cannon Oaks",
    "state_code": "TX"
  },
  "29711": {
    "city_id": "05000",
    "neighborhood_id": "29711",
    "neighborhood_name": "Century South",
    "state_code": "TX"
  },
  "29712": {
    "city_id": "05000",
    "neighborhood_id": "29712",
    "neighborhood_name": "Chappell Hill",
    "state_code": "TX"
  },
  "29713": {
    "city_id": "05000",
    "neighborhood_id": "29713",
    "neighborhood_name": "Chateau At Onion Creek",
    "state_code": "TX"
  },
  "29714": {
    "city_id": "05000",
    "neighborhood_id": "29714",
    "neighborhood_name": "Cherry Meadows",
    "state_code": "TX"
  },
  "29715": {
    "city_id": "05000",
    "neighborhood_id": "29715",
    "neighborhood_name": "Cooper's Hill",
    "state_code": "TX"
  },
  "29716": {
    "city_id": "05000",
    "neighborhood_id": "29716",
    "neighborhood_name": "Cypress Ridge",
    "state_code": "TX"
  },
  "29717": {
    "city_id": "05000",
    "neighborhood_id": "29717",
    "neighborhood_name": "Dittmar Crossing",
    "state_code": "TX"
  },
  "29718": {
    "city_id": "05000",
    "neighborhood_id": "29718",
    "neighborhood_name": "Elmwood Park",
    "state_code": "TX"
  },
  "29719": {
    "city_id": "05000",
    "neighborhood_id": "29719",
    "neighborhood_name": "Enclave At Westgate",
    "state_code": "TX"
  },
  "29720": {
    "city_id": "05000",
    "neighborhood_id": "29720",
    "neighborhood_name": "Escarpment Village",
    "state_code": "TX"
  },
  "29721": {
    "city_id": "05000",
    "neighborhood_id": "29721",
    "neighborhood_name": "Estates Of Bauerle Ranch",
    "state_code": "TX"
  },
  "29722": {
    "city_id": "05000",
    "neighborhood_id": "29722",
    "neighborhood_name": "Forest Hills",
    "state_code": "TX"
  },
  "29723": {
    "city_id": "05000",
    "neighborhood_id": "29723",
    "neighborhood_name": "Forum",
    "state_code": "TX"
  },
  "29724": {
    "city_id": "05000",
    "neighborhood_id": "29724",
    "neighborhood_name": "Greenslopes",
    "state_code": "TX"
  },
  "29725": {
    "city_id": "05000",
    "neighborhood_id": "29725",
    "neighborhood_name": "Heights At Loma Vista",
    "state_code": "TX"
  },
  "29726": {
    "city_id": "05000",
    "neighborhood_id": "29726",
    "neighborhood_name": "Hillside Oaks",
    "state_code": "TX"
  },
  "29727": {
    "city_id": "05000",
    "neighborhood_id": "29727",
    "neighborhood_name": "Lincoln Ridge",
    "state_code": "TX"
  },
  "29728": {
    "city_id": "05000",
    "neighborhood_id": "29728",
    "neighborhood_name": "Manchaca Commercial Park",
    "state_code": "TX"
  },
  "29729": {
    "city_id": "05000",
    "neighborhood_id": "29729",
    "neighborhood_name": "Matthews Park",
    "state_code": "TX"
  },
  "29730": {
    "city_id": "05000",
    "neighborhood_id": "29730",
    "neighborhood_name": "Meadowcreek",
    "state_code": "TX"
  },
  "29731": {
    "city_id": "05000",
    "neighborhood_id": "29731",
    "neighborhood_name": "Meadows At Bluff Springs",
    "state_code": "TX"
  },
  "29732": {
    "city_id": "05000",
    "neighborhood_id": "29732",
    "neighborhood_name": "Mooreland",
    "state_code": "TX"
  },
  "29733": {
    "city_id": "05000",
    "neighborhood_id": "29733",
    "neighborhood_name": "Morningside",
    "state_code": "TX"
  },
  "29734": {
    "city_id": "05000",
    "neighborhood_id": "29734",
    "neighborhood_name": "Oconomowoc West",
    "state_code": "TX"
  },
  "29735": {
    "city_id": "05000",
    "neighborhood_id": "29735",
    "neighborhood_name": "Onion Creek Plantations",
    "state_code": "TX"
  },
  "29736": {
    "city_id": "05000",
    "neighborhood_id": "29736",
    "neighborhood_name": "Park Ridge",
    "state_code": "TX"
  },
  "29737": {
    "city_id": "05000",
    "neighborhood_id": "29737",
    "neighborhood_name": "Ronald Heights",
    "state_code": "TX"
  },
  "29738": {
    "city_id": "05000",
    "neighborhood_id": "29738",
    "neighborhood_name": "Slaughter Creek Commercial Park",
    "state_code": "TX"
  },
  "29739": {
    "city_id": "05000",
    "neighborhood_id": "29739",
    "neighborhood_name": "Slaughter Lane Commercial Park",
    "state_code": "TX"
  },
  "29740": {
    "city_id": "05000",
    "neighborhood_id": "29740",
    "neighborhood_name": "Somerset Estates",
    "state_code": "TX"
  },
  "29741": {
    "city_id": "05000",
    "neighborhood_id": "29741",
    "neighborhood_name": "Stonecreek",
    "state_code": "TX"
  },
  "29746": {
    "city_id": "05000",
    "neighborhood_id": "29746",
    "neighborhood_name": "Taylor Estates",
    "state_code": "TX"
  },
  "29747": {
    "city_id": "05000",
    "neighborhood_id": "29747",
    "neighborhood_name": "The Sidney",
    "state_code": "TX"
  },
  "29748": {
    "city_id": "05000",
    "neighborhood_id": "29748",
    "neighborhood_name": "The Waters At Bluff Springs",
    "state_code": "TX"
  },
  "29749": {
    "city_id": "05000",
    "neighborhood_id": "29749",
    "neighborhood_name": "Towne Square Center",
    "state_code": "TX"
  },
  "29751": {
    "city_id": "05000",
    "neighborhood_id": "29751",
    "neighborhood_name": "Waterloo",
    "state_code": "TX"
  },
  "29752": {
    "city_id": "05000",
    "neighborhood_id": "29752",
    "neighborhood_name": "Waterstone At Slaughter Lane",
    "state_code": "TX"
  },
  "29753": {
    "city_id": "05000",
    "neighborhood_id": "29753",
    "neighborhood_name": "West Branch",
    "state_code": "TX"
  },
  "29754": {
    "city_id": "05000",
    "neighborhood_id": "29754",
    "neighborhood_name": "Westwood Heights",
    "state_code": "TX"
  },
  "29755": {
    "city_id": "05000",
    "neighborhood_id": "29755",
    "neighborhood_name": "Woodgreen Acres",
    "state_code": "TX"
  },
  "29756": {
    "city_id": "05000",
    "neighborhood_id": "29756",
    "neighborhood_name": "Yarrabee Bend South",
    "state_code": "TX"
  },
  "29757": {
    "city_id": "05000",
    "neighborhood_id": "29757",
    "neighborhood_name": "Alta Mira",
    "state_code": "TX"
  },
  "29758": {
    "city_id": "05000",
    "neighborhood_id": "29758",
    "neighborhood_name": "Autumn Wood",
    "state_code": "TX"
  },
  "29759": {
    "city_id": "05000",
    "neighborhood_id": "29759",
    "neighborhood_name": "Beckett Meadows",
    "state_code": "TX"
  },
  "29760": {
    "city_id": "05000",
    "neighborhood_id": "29760",
    "neighborhood_name": "Bridges At Bear Creek",
    "state_code": "TX"
  },
  "29761": {
    "city_id": "05000",
    "neighborhood_id": "29761",
    "neighborhood_name": "Brodie",
    "state_code": "TX"
  },
  "29762": {
    "city_id": "05000",
    "neighborhood_id": "29762",
    "neighborhood_name": "Brodie Springs",
    "state_code": "TX"
  },
  "29763": {
    "city_id": "05000",
    "neighborhood_id": "29763",
    "neighborhood_name": "Buckingham Ridge",
    "state_code": "TX"
  },
  "29764": {
    "city_id": "05000",
    "neighborhood_id": "29764",
    "neighborhood_name": "Carrell Oaks",
    "state_code": "TX"
  },
  "29765": {
    "city_id": "05000",
    "neighborhood_id": "29765",
    "neighborhood_name": "Castlewood Forest",
    "state_code": "TX"
  },
  "29766": {
    "city_id": "05000",
    "neighborhood_id": "29766",
    "neighborhood_name": "Cherry Creek Commercial",
    "state_code": "TX"
  },
  "29767": {
    "city_id": "05000",
    "neighborhood_id": "29767",
    "neighborhood_name": "Dan Jean Oaks",
    "state_code": "TX"
  },
  "29768": {
    "city_id": "05000",
    "neighborhood_id": "29768",
    "neighborhood_name": "Davis Hill Estates",
    "state_code": "TX"
  },
  "29769": {
    "city_id": "05000",
    "neighborhood_id": "29769",
    "neighborhood_name": "Esquel",
    "state_code": "TX"
  },
  "29770": {
    "city_id": "05000",
    "neighborhood_id": "29770",
    "neighborhood_name": "Greenleaf Estates",
    "state_code": "TX"
  },
  "29771": {
    "city_id": "05000",
    "neighborhood_id": "29771",
    "neighborhood_name": "Indian Hills",
    "state_code": "TX"
  },
  "29772": {
    "city_id": "05000",
    "neighborhood_id": "29772",
    "neighborhood_name": "Keesee",
    "state_code": "TX"
  },
  "29773": {
    "city_id": "05000",
    "neighborhood_id": "29773",
    "neighborhood_name": "Kincheon",
    "state_code": "TX"
  },
  "29774": {
    "city_id": "05000",
    "neighborhood_id": "29774",
    "neighborhood_name": "La Crosse",
    "state_code": "TX"
  },
  "29775": {
    "city_id": "05000",
    "neighborhood_id": "29775",
    "neighborhood_name": "Laurelwood Commercial",
    "state_code": "TX"
  },
  "29776": {
    "city_id": "05000",
    "neighborhood_id": "29776",
    "neighborhood_name": "Laurelwood Estates",
    "state_code": "TX"
  },
  "29777": {
    "city_id": "05000",
    "neighborhood_id": "29777",
    "neighborhood_name": "Laurelwood",
    "state_code": "TX"
  },
  "29778": {
    "city_id": "05000",
    "neighborhood_id": "29778",
    "neighborhood_name": "Legend Oaks",
    "state_code": "TX"
  },
  "29779": {
    "city_id": "05000",
    "neighborhood_id": "29779",
    "neighborhood_name": "Lenox Industrial Park",
    "state_code": "TX"
  },
  "29780": {
    "city_id": "05000",
    "neighborhood_id": "29780",
    "neighborhood_name": "Maple Run",
    "state_code": "TX"
  },
  "29781": {
    "city_id": "05000",
    "neighborhood_id": "29781",
    "neighborhood_name": "Mckinney Park East",
    "state_code": "TX"
  },
  "29782": {
    "city_id": "05000",
    "neighborhood_id": "29782",
    "neighborhood_name": "Meadows Lake",
    "state_code": "TX"
  },
  "29783": {
    "city_id": "05000",
    "neighborhood_id": "29783",
    "neighborhood_name": "Meadows At Double Creek",
    "state_code": "TX"
  },
  "29785": {
    "city_id": "05000",
    "neighborhood_id": "29785",
    "neighborhood_name": "Meridian",
    "state_code": "TX"
  },
  "29786": {
    "city_id": "05000",
    "neighborhood_id": "29786",
    "neighborhood_name": "Mimosa Manor",
    "state_code": "TX"
  },
  "29787": {
    "city_id": "05000",
    "neighborhood_id": "29787",
    "neighborhood_name": "Mrs Rosa J Spillmann Estates",
    "state_code": "TX"
  },
  "29788": {
    "city_id": "05000",
    "neighborhood_id": "29788",
    "neighborhood_name": "Mueller Acres",
    "state_code": "TX"
  },
  "29789": {
    "city_id": "05000",
    "neighborhood_id": "29789",
    "neighborhood_name": "Oak Park Estates",
    "state_code": "TX"
  },
  "29790": {
    "city_id": "05000",
    "neighborhood_id": "29790",
    "neighborhood_name": "Olympic Heights",
    "state_code": "TX"
  },
  "29791": {
    "city_id": "05000",
    "neighborhood_id": "29791",
    "neighborhood_name": "Parkside At Slaughter Creek",
    "state_code": "TX"
  },
  "29792": {
    "city_id": "05000",
    "neighborhood_id": "29792",
    "neighborhood_name": "Pheasant Run",
    "state_code": "TX"
  },
  "29793": {
    "city_id": "05000",
    "neighborhood_id": "29793",
    "neighborhood_name": "Rancho Alto",
    "state_code": "TX"
  },
  "29794": {
    "city_id": "05000",
    "neighborhood_id": "29794",
    "neighborhood_name": "Slaughter/lh-35 Commercial",
    "state_code": "TX"
  },
  "29795": {
    "city_id": "05000",
    "neighborhood_id": "29795",
    "neighborhood_name": "Slaughter South",
    "state_code": "TX"
  },
  "29796": {
    "city_id": "05000",
    "neighborhood_id": "29796",
    "neighborhood_name": "South Brook Center",
    "state_code": "TX"
  },
  "29797": {
    "city_id": "05000",
    "neighborhood_id": "29797",
    "neighborhood_name": "South Creek",
    "state_code": "TX"
  },
  "29798": {
    "city_id": "05000",
    "neighborhood_id": "29798",
    "neighborhood_name": "South Creek South",
    "state_code": "TX"
  },
  "29799": {
    "city_id": "05000",
    "neighborhood_id": "29799",
    "neighborhood_name": "Southampton",
    "state_code": "TX"
  },
  "29800": {
    "city_id": "05000",
    "neighborhood_id": "29800",
    "neighborhood_name": "Southwest Oaks",
    "state_code": "TX"
  },
  "29801": {
    "city_id": "05000",
    "neighborhood_id": "29801",
    "neighborhood_name": "Stablewood At Slaughter Creek",
    "state_code": "TX"
  },
  "29802": {
    "city_id": "05000",
    "neighborhood_id": "29802",
    "neighborhood_name": "Yarrabee Bend",
    "state_code": "TX"
  },
  "29803": {
    "city_id": "05000",
    "neighborhood_id": "29803",
    "neighborhood_name": "Wyldwood",
    "state_code": "TX"
  },
  "29804": {
    "city_id": "05000",
    "neighborhood_id": "29804",
    "neighborhood_name": "Woodstone Village",
    "state_code": "TX"
  },
  "29805": {
    "city_id": "05000",
    "neighborhood_id": "29805",
    "neighborhood_name": "Whispering Oaks",
    "state_code": "TX"
  },
  "29806": {
    "city_id": "05000",
    "neighborhood_id": "29806",
    "neighborhood_name": "Timber Village",
    "state_code": "TX"
  },
  "29807": {
    "city_id": "05000",
    "neighborhood_id": "29807",
    "neighborhood_name": "The Oak At Twin Creeks",
    "state_code": "TX"
  },
  "29808": {
    "city_id": "05000",
    "neighborhood_id": "29808",
    "neighborhood_name": "The Bend At Nuckols Crossing",
    "state_code": "TX"
  },
  "29809": {
    "city_id": "05000",
    "neighborhood_id": "29809",
    "neighborhood_name": "Tanglewood Forest",
    "state_code": "TX"
  },
  "29810": {
    "city_id": "05000",
    "neighborhood_id": "29810",
    "neighborhood_name": "Tanglewood Village",
    "state_code": "TX"
  },
  "29811": {
    "city_id": "05000",
    "neighborhood_id": "29811",
    "neighborhood_name": "Swanson's Ranchettes",
    "state_code": "TX"
  },
  "29812": {
    "city_id": "05000",
    "neighborhood_id": "29812",
    "neighborhood_name": "Sunset",
    "state_code": "TX"
  },
  "29813": {
    "city_id": "05000",
    "neighborhood_id": "29813",
    "neighborhood_name": "Sunridge South",
    "state_code": "TX"
  },
  "29814": {
    "city_id": "05000",
    "neighborhood_id": "29814",
    "neighborhood_name": "Southwest Mediplex",
    "state_code": "TX"
  },
  "29815": {
    "city_id": "05000",
    "neighborhood_id": "29815",
    "neighborhood_name": "Southcross Plaza",
    "state_code": "TX"
  },
  "29816": {
    "city_id": "05000",
    "neighborhood_id": "29816",
    "neighborhood_name": "Silverstone",
    "state_code": "TX"
  },
  "29817": {
    "city_id": "05000",
    "neighborhood_id": "29817",
    "neighborhood_name": "Saddlewood Estates",
    "state_code": "TX"
  },
  "29818": {
    "city_id": "05000",
    "neighborhood_id": "29818",
    "neighborhood_name": "San Antonio Road",
    "state_code": "TX"
  },
  "29819": {
    "city_id": "05000",
    "neighborhood_id": "29819",
    "neighborhood_name": "Shady Hollow Estates",
    "state_code": "TX"
  },
  "29820": {
    "city_id": "05000",
    "neighborhood_id": "29820",
    "neighborhood_name": "Grand Oaks",
    "state_code": "TX"
  },
  "29821": {
    "city_id": "05000",
    "neighborhood_id": "29821",
    "neighborhood_name": "William Cannon Drive",
    "state_code": "TX"
  },
  "29822": {
    "city_id": "05000",
    "neighborhood_id": "29822",
    "neighborhood_name": "Stone Creek Ranch",
    "state_code": "TX"
  },
  "29823": {
    "city_id": "05000",
    "neighborhood_id": "29823",
    "neighborhood_name": "Oak At Twin Creeks",
    "state_code": "TX"
  },
  "29824": {
    "city_id": "05000",
    "neighborhood_id": "29824",
    "neighborhood_name": "Retail",
    "state_code": "TX"
  },
  "29825": {
    "city_id": "05000",
    "neighborhood_id": "29825",
    "neighborhood_name": "Park West At Circle",
    "state_code": "TX"
  },
  "29826": {
    "city_id": "05000",
    "neighborhood_id": "29826",
    "neighborhood_name": "Circle C Golf West Estates",
    "state_code": "TX"
  },
  "29827": {
    "city_id": "05000",
    "neighborhood_id": "29827",
    "neighborhood_name": "Golf Club Estates",
    "state_code": "TX"
  },
  "29828": {
    "city_id": "05000",
    "neighborhood_id": "29828",
    "neighborhood_name": "Deer Park At Maple Run",
    "state_code": "TX"
  },
  "29829": {
    "city_id": "05000",
    "neighborhood_id": "29829",
    "neighborhood_name": "Sendera",
    "state_code": "TX"
  },
  "29830": {
    "city_id": "05000",
    "neighborhood_id": "29830",
    "neighborhood_name": "Akin",
    "state_code": "TX"
  },
  "29831": {
    "city_id": "05000",
    "neighborhood_id": "29831",
    "neighborhood_name": "Mission Bethany",
    "state_code": "TX"
  },
  "29832": {
    "city_id": "05000",
    "neighborhood_id": "29832",
    "neighborhood_name": "Ccr",
    "state_code": "TX"
  },
  "29833": {
    "city_id": "05000",
    "neighborhood_id": "29833",
    "neighborhood_name": "Southland Oaks",
    "state_code": "TX"
  },
  "29834": {
    "city_id": "05000",
    "neighborhood_id": "29834",
    "neighborhood_name": "Saddle Creek",
    "state_code": "TX"
  },
  "29835": {
    "city_id": "05000",
    "neighborhood_id": "29835",
    "neighborhood_name": "Comal Bluff",
    "state_code": "TX"
  },
  "29836": {
    "city_id": "05000",
    "neighborhood_id": "29836",
    "neighborhood_name": "Windcrest Crossing",
    "state_code": "TX"
  },
  "29837": {
    "city_id": "05000",
    "neighborhood_id": "29837",
    "neighborhood_name": "Onion Creek Forest",
    "state_code": "TX"
  },
  "29838": {
    "city_id": "05000",
    "neighborhood_id": "29838",
    "neighborhood_name": "Circle C Ranch",
    "state_code": "TX"
  },
  "29839": {
    "city_id": "05000",
    "neighborhood_id": "29839",
    "neighborhood_name": "The Hielscher",
    "state_code": "TX"
  },
  "29840": {
    "city_id": "05000",
    "neighborhood_id": "29840",
    "neighborhood_name": "Parkwood",
    "state_code": "TX"
  },
  "29841": {
    "city_id": "05000",
    "neighborhood_id": "29841",
    "neighborhood_name": "Bauerle Ranch",
    "state_code": "TX"
  },
  "29842": {
    "city_id": "05000",
    "neighborhood_id": "29842",
    "neighborhood_name": "The Hollow At Slaughter Creek",
    "state_code": "TX"
  },
  "29843": {
    "city_id": "05000",
    "neighborhood_id": "29843",
    "neighborhood_name": "Nuckles Crossing",
    "state_code": "TX"
  },
  "29844": {
    "city_id": "05000",
    "neighborhood_id": "29844",
    "neighborhood_name": "Blue Hills Estates",
    "state_code": "TX"
  },
  "29845": {
    "city_id": "05000",
    "neighborhood_id": "29845",
    "neighborhood_name": "Cherry Creek",
    "state_code": "TX"
  },
  "29846": {
    "city_id": "05000",
    "neighborhood_id": "29846",
    "neighborhood_name": "Nelms",
    "state_code": "TX"
  },
  "29847": {
    "city_id": "05000",
    "neighborhood_id": "29847",
    "neighborhood_name": "Oak Creek Parke",
    "state_code": "TX"
  },
  "29848": {
    "city_id": "05000",
    "neighborhood_id": "29848",
    "neighborhood_name": "Onion Creek",
    "state_code": "TX"
  },
  "29849": {
    "city_id": "05000",
    "neighborhood_id": "29849",
    "neighborhood_name": "Shiloh",
    "state_code": "TX"
  },
  "29850": {
    "city_id": "05000",
    "neighborhood_id": "29850",
    "neighborhood_name": "South Bend",
    "state_code": "TX"
  },
  "29851": {
    "city_id": "05000",
    "neighborhood_id": "29851",
    "neighborhood_name": "Max Keilbar",
    "state_code": "TX"
  },
  "29852": {
    "city_id": "05000",
    "neighborhood_id": "29852",
    "neighborhood_name": "Harris Ranch",
    "state_code": "TX"
  },
  "29853": {
    "city_id": "05000",
    "neighborhood_id": "29853",
    "neighborhood_name": "Elm Wood Estates",
    "state_code": "TX"
  },
  "29854": {
    "city_id": "05000",
    "neighborhood_id": "29854",
    "neighborhood_name": "Davis Lane Improvement",
    "state_code": "TX"
  },
  "29855": {
    "city_id": "05000",
    "neighborhood_id": "29855",
    "neighborhood_name": "Village At Western Oaks",
    "state_code": "TX"
  },
  "29856": {
    "city_id": "05000",
    "neighborhood_id": "29856",
    "neighborhood_name": "The Shops At Slaughter Creek North",
    "state_code": "TX"
  },
  "29857": {
    "city_id": "05000",
    "neighborhood_id": "29857",
    "neighborhood_name": "Shops At Slaughter Creek South",
    "state_code": "TX"
  },
  "29858": {
    "city_id": "05000",
    "neighborhood_id": "29858",
    "neighborhood_name": "Barker Ranch At Shady Hollow",
    "state_code": "TX"
  },
  "29859": {
    "city_id": "05000",
    "neighborhood_id": "29859",
    "neighborhood_name": "The Ridge At Thomas Springs",
    "state_code": "TX"
  },
  "29860": {
    "city_id": "05000",
    "neighborhood_id": "29860",
    "neighborhood_name": "Deer Haven",
    "state_code": "TX"
  },
  "29861": {
    "city_id": "05000",
    "neighborhood_id": "29861",
    "neighborhood_name": "Sendera South",
    "state_code": "TX"
  },
  "29862": {
    "city_id": "05000",
    "neighborhood_id": "29862",
    "neighborhood_name": "Ford Oaks",
    "state_code": "TX"
  },
  "29863": {
    "city_id": "05000",
    "neighborhood_id": "29863",
    "neighborhood_name": "Sandahl",
    "state_code": "TX"
  },
  "29864": {
    "city_id": "05000",
    "neighborhood_id": "29864",
    "neighborhood_name": "Crossing At Onion Creeek",
    "state_code": "TX"
  },
  "29865": {
    "city_id": "05000",
    "neighborhood_id": "29865",
    "neighborhood_name": "Dittmar At Copper",
    "state_code": "TX"
  },
  "29866": {
    "city_id": "05000",
    "neighborhood_id": "29866",
    "neighborhood_name": "Circle C",
    "state_code": "TX"
  },
  "29867": {
    "city_id": "05000",
    "neighborhood_id": "29867",
    "neighborhood_name": "Beaconridge West",
    "state_code": "TX"
  },
  "29868": {
    "city_id": "05000",
    "neighborhood_id": "29868",
    "neighborhood_name": "South Congress",
    "state_code": "TX"
  },
  "29869": {
    "city_id": "05000",
    "neighborhood_id": "29869",
    "neighborhood_name": "Oakvalley Park",
    "state_code": "TX"
  },
  "29870": {
    "city_id": "05000",
    "neighborhood_id": "29870",
    "neighborhood_name": "Centennial Park",
    "state_code": "TX"
  },
  "29871": {
    "city_id": "05000",
    "neighborhood_id": "29871",
    "neighborhood_name": "Buckingham Estates",
    "state_code": "TX"
  },
  "29872": {
    "city_id": "05000",
    "neighborhood_id": "29872",
    "neighborhood_name": "Shady Hollow",
    "state_code": "TX"
  },
  "29873": {
    "city_id": "05000",
    "neighborhood_id": "29873",
    "neighborhood_name": "Palamino Park",
    "state_code": "TX"
  },
  "29874": {
    "city_id": "05000",
    "neighborhood_id": "29874",
    "neighborhood_name": "Great Oaks At Slaughter Creek",
    "state_code": "TX"
  },
  "29875": {
    "city_id": "05000",
    "neighborhood_id": "29875",
    "neighborhood_name": "Hillcrest",
    "state_code": "TX"
  },
  "29876": {
    "city_id": "05000",
    "neighborhood_id": "29876",
    "neighborhood_name": "Southhampton Hills",
    "state_code": "TX"
  },
  "29877": {
    "city_id": "05000",
    "neighborhood_id": "29877",
    "neighborhood_name": "Springfield At Thaxton Road",
    "state_code": "TX"
  },
  "29879": {
    "city_id": "05000",
    "neighborhood_id": "29879",
    "neighborhood_name": "Bannockburn",
    "state_code": "TX"
  },
  "29880": {
    "city_id": "05000",
    "neighborhood_id": "29880",
    "neighborhood_name": "Canterbury Trails",
    "state_code": "TX"
  },
  "29881": {
    "city_id": "05000",
    "neighborhood_id": "29881",
    "neighborhood_name": "Blackhawk",
    "state_code": "TX"
  },
  "29882": {
    "city_id": "05000",
    "neighborhood_id": "29882",
    "neighborhood_name": "Riddle Road Duplexes",
    "state_code": "TX"
  },
  "29883": {
    "city_id": "05000",
    "neighborhood_id": "29883",
    "neighborhood_name": "Sage Meadow",
    "state_code": "TX"
  },
  "29884": {
    "city_id": "05000",
    "neighborhood_id": "29884",
    "neighborhood_name": "Southpark Meadows",
    "state_code": "TX"
  },
  "29885": {
    "city_id": "05000",
    "neighborhood_id": "29885",
    "neighborhood_name": "Plaza At Slaughter Creek",
    "state_code": "TX"
  },
  "29886": {
    "city_id": "05000",
    "neighborhood_id": "29886",
    "neighborhood_name": "Circle S Ridge",
    "state_code": "TX"
  },
  "29887": {
    "city_id": "05000",
    "neighborhood_id": "29887",
    "neighborhood_name": "The Reserve At Slaughter Creek",
    "state_code": "TX"
  },
  "29888": {
    "city_id": "05000",
    "neighborhood_id": "29888",
    "neighborhood_name": "Deerfield At Brodie",
    "state_code": "TX"
  },
  "29889": {
    "city_id": "05000",
    "neighborhood_id": "29889",
    "neighborhood_name": "Cooper Lane",
    "state_code": "TX"
  },
  "29890": {
    "city_id": "05000",
    "neighborhood_id": "29890",
    "neighborhood_name": "Damon",
    "state_code": "TX"
  },
  "29891": {
    "city_id": "05000",
    "neighborhood_id": "29891",
    "neighborhood_name": "Beacon Ridge",
    "state_code": "TX"
  },
  "29892": {
    "city_id": "05000",
    "neighborhood_id": "29892",
    "neighborhood_name": "Parkridge Gardens",
    "state_code": "TX"
  },
  "29893": {
    "city_id": "05000",
    "neighborhood_id": "29893",
    "neighborhood_name": "Woodhaven",
    "state_code": "TX"
  },
  "31072": {
    "city_id": "35000",
    "neighborhood_id": "31072",
    "neighborhood_name": "Spring Mont",
    "state_code": "TX"
  },
  "31073": {
    "city_id": "35000",
    "neighborhood_id": "31073",
    "neighborhood_name": "North Park Downs",
    "state_code": "TX"
  },
  "31074": {
    "city_id": "35000",
    "neighborhood_id": "31074",
    "neighborhood_name": "Tilson Homes",
    "state_code": "TX"
  },
  "31075": {
    "city_id": "35000",
    "neighborhood_id": "31075",
    "neighborhood_name": "Cypresswood Commons",
    "state_code": "TX"
  },
  "31076": {
    "city_id": "35000",
    "neighborhood_id": "31076",
    "neighborhood_name": "Bending Bough",
    "state_code": "TX"
  },
  "31077": {
    "city_id": "35000",
    "neighborhood_id": "31077",
    "neighborhood_name": "Spring Park",
    "state_code": "TX"
  },
  "31078": {
    "city_id": "35000",
    "neighborhood_id": "31078",
    "neighborhood_name": "Spring Park Center",
    "state_code": "TX"
  },
  "31079": {
    "city_id": "35000",
    "neighborhood_id": "31079",
    "neighborhood_name": "Roundhill Of Cypress Station",
    "state_code": "TX"
  },
  "31080": {
    "city_id": "35000",
    "neighborhood_id": "31080",
    "neighborhood_name": "Cypress Square Plaza",
    "state_code": "TX"
  },
  "31081": {
    "city_id": "35000",
    "neighborhood_id": "31081",
    "neighborhood_name": "Bamwood",
    "state_code": "TX"
  },
  "31082": {
    "city_id": "35000",
    "neighborhood_id": "31082",
    "neighborhood_name": "Kelkind Manor",
    "state_code": "TX"
  },
  "31083": {
    "city_id": "35000",
    "neighborhood_id": "31083",
    "neighborhood_name": "Gulf Pines",
    "state_code": "TX"
  },
  "31084": {
    "city_id": "35000",
    "neighborhood_id": "31084",
    "neighborhood_name": "Crossroads Shopping Center",
    "state_code": "TX"
  },
  "31085": {
    "city_id": "35000",
    "neighborhood_id": "31085",
    "neighborhood_name": "Woodcreek Business Park",
    "state_code": "TX"
  },
  "31086": {
    "city_id": "35000",
    "neighborhood_id": "31086",
    "neighborhood_name": "Cypress Landing",
    "state_code": "TX"
  },
  "31087": {
    "city_id": "35000",
    "neighborhood_id": "31087",
    "neighborhood_name": "Westfield Glen",
    "state_code": "TX"
  },
  "31088": {
    "city_id": "35000",
    "neighborhood_id": "31088",
    "neighborhood_name": "North View",
    "state_code": "TX"
  },
  "31089": {
    "city_id": "35000",
    "neighborhood_id": "31089",
    "neighborhood_name": "Corum Village",
    "state_code": "TX"
  },
  "31090": {
    "city_id": "35000",
    "neighborhood_id": "31090",
    "neighborhood_name": "Woods Of Sugar Pine",
    "state_code": "TX"
  },
  "31091": {
    "city_id": "35000",
    "neighborhood_id": "31091",
    "neighborhood_name": "Westfield Landing",
    "state_code": "TX"
  },
  "31092": {
    "city_id": "35000",
    "neighborhood_id": "31092",
    "neighborhood_name": "Torrey Chase",
    "state_code": "TX"
  },
  "31093": {
    "city_id": "35000",
    "neighborhood_id": "31093",
    "neighborhood_name": "Shurgard Of Champions",
    "state_code": "TX"
  },
  "31094": {
    "city_id": "35000",
    "neighborhood_id": "31094",
    "neighborhood_name": "London Park",
    "state_code": "TX"
  },
  "31095": {
    "city_id": "35000",
    "neighborhood_id": "31095",
    "neighborhood_name": "Cranbrook Commercial",
    "state_code": "TX"
  },
  "31096": {
    "city_id": "35000",
    "neighborhood_id": "31096",
    "neighborhood_name": "Vanderbilt",
    "state_code": "TX"
  },
  "31097": {
    "city_id": "35000",
    "neighborhood_id": "31097",
    "neighborhood_name": "Cranbrook Augusta",
    "state_code": "TX"
  },
  "31098": {
    "city_id": "35000",
    "neighborhood_id": "31098",
    "neighborhood_name": "Cranbrook Forest",
    "state_code": "TX"
  },
  "31099": {
    "city_id": "35000",
    "neighborhood_id": "31099",
    "neighborhood_name": "Waverly Farms",
    "state_code": "TX"
  },
  "31100": {
    "city_id": "35000",
    "neighborhood_id": "31100",
    "neighborhood_name": "Glen Forest Estates",
    "state_code": "TX"
  },
  "31101": {
    "city_id": "35000",
    "neighborhood_id": "31101",
    "neighborhood_name": "Central Parkway",
    "state_code": "TX"
  },
  "31102": {
    "city_id": "35000",
    "neighborhood_id": "31102",
    "neighborhood_name": "Southbrook",
    "state_code": "TX"
  },
  "31103": {
    "city_id": "35000",
    "neighborhood_id": "31103",
    "neighborhood_name": "Heckendorn Place",
    "state_code": "TX"
  },
  "31104": {
    "city_id": "35000",
    "neighborhood_id": "31104",
    "neighborhood_name": "Greenspoint",
    "state_code": "TX"
  },
  "31105": {
    "city_id": "35000",
    "neighborhood_id": "31105",
    "neighborhood_name": "Park De Ville Condo",
    "state_code": "TX"
  },
  "31106": {
    "city_id": "35000",
    "neighborhood_id": "31106",
    "neighborhood_name": "Northgate",
    "state_code": "TX"
  },
  "31107": {
    "city_id": "35000",
    "neighborhood_id": "31107",
    "neighborhood_name": "Wooded Acres",
    "state_code": "TX"
  },
  "31108": {
    "city_id": "35000",
    "neighborhood_id": "31108",
    "neighborhood_name": "Aldine Manor",
    "state_code": "TX"
  },
  "31109": {
    "city_id": "35000",
    "neighborhood_id": "31109",
    "neighborhood_name": "Colonial Hills",
    "state_code": "TX"
  },
  "31110": {
    "city_id": "35000",
    "neighborhood_id": "31110",
    "neighborhood_name": "Eldridge Crossroads",
    "state_code": "TX"
  },
  "31111": {
    "city_id": "35000",
    "neighborhood_id": "31111",
    "neighborhood_name": "Airline Acres",
    "state_code": "TX"
  },
  "31112": {
    "city_id": "35000",
    "neighborhood_id": "31112",
    "neighborhood_name": "Mclendon Towne Crossing",
    "state_code": "TX"
  },
  "31113": {
    "city_id": "35000",
    "neighborhood_id": "31113",
    "neighborhood_name": "Donnybrook Place",
    "state_code": "TX"
  },
  "31114": {
    "city_id": "35000",
    "neighborhood_id": "31114",
    "neighborhood_name": "Martin",
    "state_code": "TX"
  },
  "31115": {
    "city_id": "35000",
    "neighborhood_id": "31115",
    "neighborhood_name": "Brick Park",
    "state_code": "TX"
  },
  "31117": {
    "city_id": "35000",
    "neighborhood_id": "31117",
    "neighborhood_name": "Moseley",
    "state_code": "TX"
  },
  "31120": {
    "city_id": "35000",
    "neighborhood_id": "31120",
    "neighborhood_name": "Mason Center",
    "state_code": "TX"
  },
  "31127": {
    "city_id": "35000",
    "neighborhood_id": "31127",
    "neighborhood_name": "Manson Road Highland Knolls",
    "state_code": "TX"
  },
  "31268": {
    "city_id": "35000",
    "neighborhood_id": "31268",
    "neighborhood_name": "Birdsall",
    "state_code": "TX"
  },
  "31269": {
    "city_id": "35000",
    "neighborhood_id": "31269",
    "neighborhood_name": "Fruitland",
    "state_code": "TX"
  },
  "31280": {
    "city_id": "35000",
    "neighborhood_id": "31280",
    "neighborhood_name": "Villas Of Park Grove",
    "state_code": "TX"
  },
  "31281": {
    "city_id": "35000",
    "neighborhood_id": "31281",
    "neighborhood_name": "Garden Place To Almeda",
    "state_code": "TX"
  },
  "31282": {
    "city_id": "35000",
    "neighborhood_id": "31282",
    "neighborhood_name": "Mason Creek Village",
    "state_code": "TX"
  },
  "31283": {
    "city_id": "35000",
    "neighborhood_id": "31283",
    "neighborhood_name": "Rampur Estates",
    "state_code": "TX"
  },
  "31284": {
    "city_id": "35000",
    "neighborhood_id": "31284",
    "neighborhood_name": "Park Manor Of Cypress Station",
    "state_code": "TX"
  },
  "31287": {
    "city_id": "35000",
    "neighborhood_id": "31287",
    "neighborhood_name": "Magnolia Creek",
    "state_code": "TX"
  },
  "31288": {
    "city_id": "35000",
    "neighborhood_id": "31288",
    "neighborhood_name": "Parknorth",
    "state_code": "TX"
  },
  "31289": {
    "city_id": "35000",
    "neighborhood_id": "31289",
    "neighborhood_name": "Park At Kirkstall",
    "state_code": "TX"
  },
  "31291": {
    "city_id": "35000",
    "neighborhood_id": "31291",
    "neighborhood_name": "North Belt Intercontinental Business Park",
    "state_code": "TX"
  },
  "31292": {
    "city_id": "35000",
    "neighborhood_id": "31292",
    "neighborhood_name": "Parklake Village",
    "state_code": "TX"
  },
  "31293": {
    "city_id": "35000",
    "neighborhood_id": "31293",
    "neighborhood_name": "Millstone Apartments",
    "state_code": "TX"
  },
  "31294": {
    "city_id": "35000",
    "neighborhood_id": "31294",
    "neighborhood_name": "Mason North Lake",
    "state_code": "TX"
  },
  "31295": {
    "city_id": "35000",
    "neighborhood_id": "31295",
    "neighborhood_name": "Silverstones",
    "state_code": "TX"
  },
  "31296": {
    "city_id": "35000",
    "neighborhood_id": "31296",
    "neighborhood_name": "Heard Plaza",
    "state_code": "TX"
  },
  "31297": {
    "city_id": "35000",
    "neighborhood_id": "31297",
    "neighborhood_name": "Williamsburg Business Park",
    "state_code": "TX"
  },
  "31298": {
    "city_id": "35000",
    "neighborhood_id": "31298",
    "neighborhood_name": "Vineyards",
    "state_code": "TX"
  },
  "31299": {
    "city_id": "35000",
    "neighborhood_id": "31299",
    "neighborhood_name": "Fairfield At Kingsland",
    "state_code": "TX"
  },
  "31300": {
    "city_id": "35000",
    "neighborhood_id": "31300",
    "neighborhood_name": "Westgreen At Kingsland",
    "state_code": "TX"
  },
  "31301": {
    "city_id": "35000",
    "neighborhood_id": "31301",
    "neighborhood_name": "Village Of Northgate Forest",
    "state_code": "TX"
  },
  "31302": {
    "city_id": "35000",
    "neighborhood_id": "31302",
    "neighborhood_name": "Waterford Park",
    "state_code": "TX"
  },
  "31303": {
    "city_id": "35000",
    "neighborhood_id": "31303",
    "neighborhood_name": "Northgate Country Club Nine",
    "state_code": "TX"
  },
  "31304": {
    "city_id": "35000",
    "neighborhood_id": "31304",
    "neighborhood_name": "Clay West",
    "state_code": "TX"
  },
  "31305": {
    "city_id": "35000",
    "neighborhood_id": "31305",
    "neighborhood_name": "Timmergake",
    "state_code": "TX"
  },
  "31306": {
    "city_id": "35000",
    "neighborhood_id": "31306",
    "neighborhood_name": "Oaktree Place",
    "state_code": "TX"
  },
  "31307": {
    "city_id": "35000",
    "neighborhood_id": "31307",
    "neighborhood_name": "Enclave At Olde Oaks Amed",
    "state_code": "TX"
  },
  "31308": {
    "city_id": "35000",
    "neighborhood_id": "31308",
    "neighborhood_name": "Windgate",
    "state_code": "TX"
  },
  "31309": {
    "city_id": "35000",
    "neighborhood_id": "31309",
    "neighborhood_name": "Stuebner Forest",
    "state_code": "TX"
  },
  "31310": {
    "city_id": "35000",
    "neighborhood_id": "31310",
    "neighborhood_name": "Blockpool North",
    "state_code": "TX"
  },
  "31311": {
    "city_id": "35000",
    "neighborhood_id": "31311",
    "neighborhood_name": "Waterman Crossing",
    "state_code": "TX"
  },
  "31312": {
    "city_id": "35000",
    "neighborhood_id": "31312",
    "neighborhood_name": "Northcliffe Village",
    "state_code": "TX"
  },
  "31313": {
    "city_id": "35000",
    "neighborhood_id": "31313",
    "neighborhood_name": "Taylor North Houston",
    "state_code": "TX"
  },
  "31314": {
    "city_id": "35000",
    "neighborhood_id": "31314",
    "neighborhood_name": "Green Trails Oaks",
    "state_code": "TX"
  },
  "31315": {
    "city_id": "35000",
    "neighborhood_id": "31315",
    "neighborhood_name": "West Side Mall",
    "state_code": "TX"
  },
  "31316": {
    "city_id": "35000",
    "neighborhood_id": "31316",
    "neighborhood_name": "Williamsburg Parkway",
    "state_code": "TX"
  },
  "31317": {
    "city_id": "35000",
    "neighborhood_id": "31317",
    "neighborhood_name": "Beltway Plaza",
    "state_code": "TX"
  },
  "31318": {
    "city_id": "35000",
    "neighborhood_id": "31318",
    "neighborhood_name": "Westgate Market Place",
    "state_code": "TX"
  },
  "31319": {
    "city_id": "35000",
    "neighborhood_id": "31319",
    "neighborhood_name": "Park Row Business Plaza",
    "state_code": "TX"
  },
  "31320": {
    "city_id": "35000",
    "neighborhood_id": "31320",
    "neighborhood_name": "Westlake Village",
    "state_code": "TX"
  },
  "31321": {
    "city_id": "35000",
    "neighborhood_id": "31321",
    "neighborhood_name": "Westgate Center",
    "state_code": "TX"
  },
  "31322": {
    "city_id": "35000",
    "neighborhood_id": "31322",
    "neighborhood_name": "Westlake",
    "state_code": "TX"
  },
  "31325": {
    "city_id": "35000",
    "neighborhood_id": "31325",
    "neighborhood_name": "Crossing At Fry Road",
    "state_code": "TX"
  },
  "31326": {
    "city_id": "35000",
    "neighborhood_id": "31326",
    "neighborhood_name": "Empanada Square",
    "state_code": "TX"
  },
  "31328": {
    "city_id": "35000",
    "neighborhood_id": "31328",
    "neighborhood_name": "Enclave At Lakewood",
    "state_code": "TX"
  },
  "31329": {
    "city_id": "35000",
    "neighborhood_id": "31329",
    "neighborhood_name": "Lakewood Place",
    "state_code": "TX"
  },
  "31330": {
    "city_id": "35000",
    "neighborhood_id": "31330",
    "neighborhood_name": "Hidden Forest Estates",
    "state_code": "TX"
  },
  "31341": {
    "city_id": "35000",
    "neighborhood_id": "31341",
    "neighborhood_name": "Williamsburg Township",
    "state_code": "TX"
  },
  "31356": {
    "city_id": "35000",
    "neighborhood_id": "31356",
    "neighborhood_name": "Bridgewater Meadow",
    "state_code": "TX"
  },
  "31357": {
    "city_id": "35000",
    "neighborhood_id": "31357",
    "neighborhood_name": "Fry And Clay Commerce Park",
    "state_code": "TX"
  },
  "31396": {
    "city_id": "35000",
    "neighborhood_id": "31396",
    "neighborhood_name": "Cypress Village",
    "state_code": "TX"
  },
  "31399": {
    "city_id": "35000",
    "neighborhood_id": "31399",
    "neighborhood_name": "Market At Uvalde",
    "state_code": "TX"
  },
  "31400": {
    "city_id": "35000",
    "neighborhood_id": "31400",
    "neighborhood_name": "Barkey Levy Center",
    "state_code": "TX"
  },
  "31401": {
    "city_id": "35000",
    "neighborhood_id": "31401",
    "neighborhood_name": "Woodworth Park",
    "state_code": "TX"
  },
  "31402": {
    "city_id": "35000",
    "neighborhood_id": "31402",
    "neighborhood_name": "Windsor Cypress Apts",
    "state_code": "TX"
  },
  "31403": {
    "city_id": "35000",
    "neighborhood_id": "31403",
    "neighborhood_name": "Cypress North Plaza",
    "state_code": "TX"
  },
  "31404": {
    "city_id": "35000",
    "neighborhood_id": "31404",
    "neighborhood_name": "Hagner Plaza",
    "state_code": "TX"
  },
  "31405": {
    "city_id": "35000",
    "neighborhood_id": "31405",
    "neighborhood_name": "Cypress Junction",
    "state_code": "TX"
  },
  "31406": {
    "city_id": "35000",
    "neighborhood_id": "31406",
    "neighborhood_name": "Saddle Creek Farms",
    "state_code": "TX"
  },
  "31407": {
    "city_id": "35000",
    "neighborhood_id": "31407",
    "neighborhood_name": "Stonecreek",
    "state_code": "TX"
  },
  "31408": {
    "city_id": "35000",
    "neighborhood_id": "31408",
    "neighborhood_name": "Clay Meadows",
    "state_code": "TX"
  },
  "31409": {
    "city_id": "35000",
    "neighborhood_id": "31409",
    "neighborhood_name": "Deerfield Park",
    "state_code": "TX"
  },
  "31410": {
    "city_id": "35000",
    "neighborhood_id": "31410",
    "neighborhood_name": "Amesbury Park",
    "state_code": "TX"
  },
  "31411": {
    "city_id": "35000",
    "neighborhood_id": "31411",
    "neighborhood_name": "Estates At Cullen Park",
    "state_code": "TX"
  },
  "31412": {
    "city_id": "35000",
    "neighborhood_id": "31412",
    "neighborhood_name": "Turnkey Park",
    "state_code": "TX"
  },
  "31413": {
    "city_id": "35000",
    "neighborhood_id": "31413",
    "neighborhood_name": "Clay Hills Plaza",
    "state_code": "TX"
  },
  "31414": {
    "city_id": "35000",
    "neighborhood_id": "31414",
    "neighborhood_name": "Bear Creek West",
    "state_code": "TX"
  },
  "31415": {
    "city_id": "35000",
    "neighborhood_id": "31415",
    "neighborhood_name": "Bear Creek H E B",
    "state_code": "TX"
  },
  "31416": {
    "city_id": "35000",
    "neighborhood_id": "31416",
    "neighborhood_name": "Bear Creek Square",
    "state_code": "TX"
  },
  "31417": {
    "city_id": "35000",
    "neighborhood_id": "31417",
    "neighborhood_name": "Harrow Center",
    "state_code": "TX"
  },
  "31418": {
    "city_id": "35000",
    "neighborhood_id": "31418",
    "neighborhood_name": "Park Place Center",
    "state_code": "TX"
  },
  "31419": {
    "city_id": "35000",
    "neighborhood_id": "31419",
    "neighborhood_name": "Aspen Club",
    "state_code": "TX"
  },
  "31420": {
    "city_id": "35000",
    "neighborhood_id": "31420",
    "neighborhood_name": "Clay Six Center",
    "state_code": "TX"
  },
  "31421": {
    "city_id": "35000",
    "neighborhood_id": "31421",
    "neighborhood_name": "Timber Creek Place",
    "state_code": "TX"
  },
  "31422": {
    "city_id": "35000",
    "neighborhood_id": "31422",
    "neighborhood_name": "Suminski Park",
    "state_code": "TX"
  },
  "31423": {
    "city_id": "35000",
    "neighborhood_id": "31423",
    "neighborhood_name": "West Junction Center",
    "state_code": "TX"
  },
  "31424": {
    "city_id": "35000",
    "neighborhood_id": "31424",
    "neighborhood_name": "Yorktown Villas",
    "state_code": "TX"
  },
  "31425": {
    "city_id": "35000",
    "neighborhood_id": "31425",
    "neighborhood_name": "Savannah Estates",
    "state_code": "TX"
  },
  "31426": {
    "city_id": "35000",
    "neighborhood_id": "31426",
    "neighborhood_name": "Waldron Estates",
    "state_code": "TX"
  },
  "31427": {
    "city_id": "35000",
    "neighborhood_id": "31427",
    "neighborhood_name": "Fairway West",
    "state_code": "TX"
  },
  "31431": {
    "city_id": "35000",
    "neighborhood_id": "31431",
    "neighborhood_name": "Westland West",
    "state_code": "TX"
  },
  "31432": {
    "city_id": "35000",
    "neighborhood_id": "31432",
    "neighborhood_name": "Golfers Village Walden On Lake Houston",
    "state_code": "TX"
  },
  "31433": {
    "city_id": "35000",
    "neighborhood_id": "31433",
    "neighborhood_name": "Pinehurst Center",
    "state_code": "TX"
  },
  "31434": {
    "city_id": "35000",
    "neighborhood_id": "31434",
    "neighborhood_name": "Atascocita Estates",
    "state_code": "TX"
  },
  "31435": {
    "city_id": "35000",
    "neighborhood_id": "31435",
    "neighborhood_name": "Addicks Fairbanks",
    "state_code": "TX"
  },
  "31436": {
    "city_id": "35000",
    "neighborhood_id": "31436",
    "neighborhood_name": "Atascocita Greens",
    "state_code": "TX"
  },
  "31437": {
    "city_id": "35000",
    "neighborhood_id": "31437",
    "neighborhood_name": "Pinnacle",
    "state_code": "TX"
  },
  "31449": {
    "city_id": "35000",
    "neighborhood_id": "31449",
    "neighborhood_name": "Northpark Place",
    "state_code": "TX"
  },
  "31451": {
    "city_id": "35000",
    "neighborhood_id": "31451",
    "neighborhood_name": "Wincrest Falls",
    "state_code": "TX"
  },
  "31453": {
    "city_id": "35000",
    "neighborhood_id": "31453",
    "neighborhood_name": "Retreat At Lakewood Forest",
    "state_code": "TX"
  },
  "31462": {
    "city_id": "35000",
    "neighborhood_id": "31462",
    "neighborhood_name": "Woodland Hills Village",
    "state_code": "TX"
  },
  "31509": {
    "city_id": "35000",
    "neighborhood_id": "31509",
    "neighborhood_name": "Pinewood Place",
    "state_code": "TX"
  },
  "31510": {
    "city_id": "35000",
    "neighborhood_id": "31510",
    "neighborhood_name": "Trailwood Estates",
    "state_code": "TX"
  },
  "31511": {
    "city_id": "35000",
    "neighborhood_id": "31511",
    "neighborhood_name": "Sugarberry Place",
    "state_code": "TX"
  },
  "31513": {
    "city_id": "35000",
    "neighborhood_id": "31513",
    "neighborhood_name": "Bray- Hoffart",
    "state_code": "TX"
  },
  "31514": {
    "city_id": "35000",
    "neighborhood_id": "31514",
    "neighborhood_name": "Cypress Springs Retail",
    "state_code": "TX"
  },
  "31515": {
    "city_id": "35000",
    "neighborhood_id": "31515",
    "neighborhood_name": "Vintage Lakes",
    "state_code": "TX"
  },
  "31516": {
    "city_id": "35000",
    "neighborhood_id": "31516",
    "neighborhood_name": "Chasewood Village",
    "state_code": "TX"
  },
  "31518": {
    "city_id": "35000",
    "neighborhood_id": "31518",
    "neighborhood_name": "Evergreen Woods",
    "state_code": "TX"
  },
  "31519": {
    "city_id": "35000",
    "neighborhood_id": "31519",
    "neighborhood_name": "Harborstone",
    "state_code": "TX"
  },
  "31520": {
    "city_id": "35000",
    "neighborhood_id": "31520",
    "neighborhood_name": "Eldridge At Nineteen Sixty",
    "state_code": "TX"
  },
  "31521": {
    "city_id": "35000",
    "neighborhood_id": "31521",
    "neighborhood_name": "Trails At Eldridge Parkway",
    "state_code": "TX"
  },
  "31522": {
    "city_id": "35000",
    "neighborhood_id": "31522",
    "neighborhood_name": "Enosis",
    "state_code": "TX"
  },
  "31523": {
    "city_id": "35000",
    "neighborhood_id": "31523",
    "neighborhood_name": "Chevron Steeplechase Center",
    "state_code": "TX"
  },
  "31530": {
    "city_id": "35000",
    "neighborhood_id": "31530",
    "neighborhood_name": "Zubinzaranzarius North",
    "state_code": "TX"
  },
  "31531": {
    "city_id": "35000",
    "neighborhood_id": "31531",
    "neighborhood_name": "Beck Masten Plaza",
    "state_code": "TX"
  },
  "31532": {
    "city_id": "35000",
    "neighborhood_id": "31532",
    "neighborhood_name": "Lakes Of White Oak",
    "state_code": "TX"
  },
  "31533": {
    "city_id": "35000",
    "neighborhood_id": "31533",
    "neighborhood_name": "Tower Oaks Place",
    "state_code": "TX"
  },
  "31534": {
    "city_id": "35000",
    "neighborhood_id": "31534",
    "neighborhood_name": "Celaya",
    "state_code": "TX"
  },
  "31535": {
    "city_id": "35000",
    "neighborhood_id": "31535",
    "neighborhood_name": "Crossbend Village",
    "state_code": "TX"
  },
  "31536": {
    "city_id": "35000",
    "neighborhood_id": "31536",
    "neighborhood_name": "Parkside At Kingwood Glen",
    "state_code": "TX"
  },
  "31543": {
    "city_id": "35000",
    "neighborhood_id": "31543",
    "neighborhood_name": "Holly Gate Reserve",
    "state_code": "TX"
  },
  "31544": {
    "city_id": "35000",
    "neighborhood_id": "31544",
    "neighborhood_name": "Beckton Atasca Oaks",
    "state_code": "TX"
  },
  "31551": {
    "city_id": "35000",
    "neighborhood_id": "31551",
    "neighborhood_name": "Plaza East",
    "state_code": "TX"
  },
  "31552": {
    "city_id": "35000",
    "neighborhood_id": "31552",
    "neighborhood_name": "Belleau Wood East",
    "state_code": "TX"
  },
  "31554": {
    "city_id": "35000",
    "neighborhood_id": "31554",
    "neighborhood_name": "Houston Groves",
    "state_code": "TX"
  },
  "31555": {
    "city_id": "35000",
    "neighborhood_id": "31555",
    "neighborhood_name": "Woodlawn Acres",
    "state_code": "TX"
  },
  "31559": {
    "city_id": "35000",
    "neighborhood_id": "31559",
    "neighborhood_name": "Harcourt Farms",
    "state_code": "TX"
  },
  "31560": {
    "city_id": "35000",
    "neighborhood_id": "31560",
    "neighborhood_name": "Bondesen",
    "state_code": "TX"
  },
  "31561": {
    "city_id": "35000",
    "neighborhood_id": "31561",
    "neighborhood_name": "South York",
    "state_code": "TX"
  },
  "31563": {
    "city_id": "35000",
    "neighborhood_id": "31563",
    "neighborhood_name": "Northwest Point Business Park",
    "state_code": "TX"
  },
  "31564": {
    "city_id": "35000",
    "neighborhood_id": "31564",
    "neighborhood_name": "Turtle Hill Village",
    "state_code": "TX"
  },
  "31565": {
    "city_id": "35000",
    "neighborhood_id": "31565",
    "neighborhood_name": "Poutous Estates",
    "state_code": "TX"
  },
  "31566": {
    "city_id": "35000",
    "neighborhood_id": "31566",
    "neighborhood_name": "Bell Mead",
    "state_code": "TX"
  },
  "31567": {
    "city_id": "35000",
    "neighborhood_id": "31567",
    "neighborhood_name": "Mills Run",
    "state_code": "TX"
  },
  "31568": {
    "city_id": "35000",
    "neighborhood_id": "31568",
    "neighborhood_name": "Willowbrook Business Center",
    "state_code": "TX"
  },
  "31569": {
    "city_id": "35000",
    "neighborhood_id": "31569",
    "neighborhood_name": "Belmont Place",
    "state_code": "TX"
  },
  "31570": {
    "city_id": "35000",
    "neighborhood_id": "31570",
    "neighborhood_name": "Prestonwood Lodging",
    "state_code": "TX"
  },
  "31571": {
    "city_id": "35000",
    "neighborhood_id": "31571",
    "neighborhood_name": "Prestonwood West Center",
    "state_code": "TX"
  },
  "31572": {
    "city_id": "35000",
    "neighborhood_id": "31572",
    "neighborhood_name": "Center At Cypresswood",
    "state_code": "TX"
  },
  "31573": {
    "city_id": "35000",
    "neighborhood_id": "31573",
    "neighborhood_name": "Cypresswood Grove",
    "state_code": "TX"
  },
  "31574": {
    "city_id": "35000",
    "neighborhood_id": "31574",
    "neighborhood_name": "Prestonwood Center",
    "state_code": "TX"
  },
  "31575": {
    "city_id": "35000",
    "neighborhood_id": "31575",
    "neighborhood_name": "Champion Centre",
    "state_code": "TX"
  },
  "31576": {
    "city_id": "35000",
    "neighborhood_id": "31576",
    "neighborhood_name": "Homestead Village Of Willowbrook",
    "state_code": "TX"
  },
  "31577": {
    "city_id": "35000",
    "neighborhood_id": "31577",
    "neighborhood_name": "Clayton North",
    "state_code": "TX"
  },
  "31578": {
    "city_id": "35000",
    "neighborhood_id": "31578",
    "neighborhood_name": "Pinnacle At Champions Centre",
    "state_code": "TX"
  },
  "31579": {
    "city_id": "35000",
    "neighborhood_id": "31579",
    "neighborhood_name": "Villas At Pine Lake",
    "state_code": "TX"
  },
  "31580": {
    "city_id": "35000",
    "neighborhood_id": "31580",
    "neighborhood_name": "The Fisk",
    "state_code": "TX"
  },
  "31581": {
    "city_id": "35000",
    "neighborhood_id": "31581",
    "neighborhood_name": "Villas In The Pines",
    "state_code": "TX"
  },
  "31582": {
    "city_id": "35000",
    "neighborhood_id": "31582",
    "neighborhood_name": "West Bend",
    "state_code": "TX"
  },
  "31583": {
    "city_id": "35000",
    "neighborhood_id": "31583",
    "neighborhood_name": "Gish",
    "state_code": "TX"
  },
  "31584": {
    "city_id": "35000",
    "neighborhood_id": "31584",
    "neighborhood_name": "Estates Of Northgate Forest",
    "state_code": "TX"
  },
  "31585": {
    "city_id": "35000",
    "neighborhood_id": "31585",
    "neighborhood_name": "Woods Of Northgate",
    "state_code": "TX"
  },
  "31586": {
    "city_id": "35000",
    "neighborhood_id": "31586",
    "neighborhood_name": "Northgate Forest",
    "state_code": "TX"
  },
  "31587": {
    "city_id": "35000",
    "neighborhood_id": "31587",
    "neighborhood_name": "Independence Grove",
    "state_code": "TX"
  },
  "31588": {
    "city_id": "35000",
    "neighborhood_id": "31588",
    "neighborhood_name": "Lindale Farms",
    "state_code": "TX"
  },
  "31589": {
    "city_id": "35000",
    "neighborhood_id": "31589",
    "neighborhood_name": "Mary Frances",
    "state_code": "TX"
  },
  "31590": {
    "city_id": "35000",
    "neighborhood_id": "31590",
    "neighborhood_name": "Mary Eleanor",
    "state_code": "TX"
  },
  "31591": {
    "city_id": "35000",
    "neighborhood_id": "31591",
    "neighborhood_name": "Park Northwest",
    "state_code": "TX"
  },
  "31592": {
    "city_id": "35000",
    "neighborhood_id": "31592",
    "neighborhood_name": "Sweet Lake",
    "state_code": "TX"
  },
  "31593": {
    "city_id": "35000",
    "neighborhood_id": "31593",
    "neighborhood_name": "Woodsdale",
    "state_code": "TX"
  },
  "31594": {
    "city_id": "35000",
    "neighborhood_id": "31594",
    "neighborhood_name": "Westfield Manor",
    "state_code": "TX"
  },
  "31595": {
    "city_id": "35000",
    "neighborhood_id": "31595",
    "neighborhood_name": "Bliss Place",
    "state_code": "TX"
  },
  "31596": {
    "city_id": "35000",
    "neighborhood_id": "31596",
    "neighborhood_name": "Darden Place",
    "state_code": "TX"
  },
  "31597": {
    "city_id": "35000",
    "neighborhood_id": "31597",
    "neighborhood_name": "Melwood Place",
    "state_code": "TX"
  },
  "31598": {
    "city_id": "35000",
    "neighborhood_id": "31598",
    "neighborhood_name": "Altamira",
    "state_code": "TX"
  },
  "31599": {
    "city_id": "35000",
    "neighborhood_id": "31599",
    "neighborhood_name": "Commons At Presidio Square",
    "state_code": "TX"
  },
  "31600": {
    "city_id": "35000",
    "neighborhood_id": "31600",
    "neighborhood_name": "Nidhika Center",
    "state_code": "TX"
  },
  "31601": {
    "city_id": "35000",
    "neighborhood_id": "31601",
    "neighborhood_name": "Pheasant Cove",
    "state_code": "TX"
  },
  "31602": {
    "city_id": "35000",
    "neighborhood_id": "31602",
    "neighborhood_name": "Inwood Place",
    "state_code": "TX"
  },
  "31603": {
    "city_id": "35000",
    "neighborhood_id": "31603",
    "neighborhood_name": "Beechnut Crossing Center",
    "state_code": "TX"
  },
  "31604": {
    "city_id": "35000",
    "neighborhood_id": "31604",
    "neighborhood_name": "Hardy Acres",
    "state_code": "TX"
  },
  "31605": {
    "city_id": "35000",
    "neighborhood_id": "31605",
    "neighborhood_name": "Walden Place",
    "state_code": "TX"
  },
  "31606": {
    "city_id": "35000",
    "neighborhood_id": "31606",
    "neighborhood_name": "Hardy Heights",
    "state_code": "TX"
  },
  "31607": {
    "city_id": "35000",
    "neighborhood_id": "31607",
    "neighborhood_name": "Virginia Acres",
    "state_code": "TX"
  },
  "31608": {
    "city_id": "35000",
    "neighborhood_id": "31608",
    "neighborhood_name": "Norton",
    "state_code": "TX"
  },
  "31609": {
    "city_id": "35000",
    "neighborhood_id": "31609",
    "neighborhood_name": "Hy Point",
    "state_code": "TX"
  },
  "31610": {
    "city_id": "35000",
    "neighborhood_id": "31610",
    "neighborhood_name": "West Beechnut Plaza",
    "state_code": "TX"
  },
  "31611": {
    "city_id": "35000",
    "neighborhood_id": "31611",
    "neighborhood_name": "Greenriver Estates",
    "state_code": "TX"
  },
  "31612": {
    "city_id": "35000",
    "neighborhood_id": "31612",
    "neighborhood_name": "Dover",
    "state_code": "TX"
  },
  "31613": {
    "city_id": "35000",
    "neighborhood_id": "31613",
    "neighborhood_name": "Galene Park Island Northshore",
    "state_code": "TX"
  },
  "31614": {
    "city_id": "35000",
    "neighborhood_id": "31614",
    "neighborhood_name": "San Jacinto College District North Campus",
    "state_code": "TX"
  },
  "31615": {
    "city_id": "35000",
    "neighborhood_id": "31615",
    "neighborhood_name": "Northeast Square",
    "state_code": "TX"
  },
  "31616": {
    "city_id": "35000",
    "neighborhood_id": "31616",
    "neighborhood_name": "Normandy Souare",
    "state_code": "TX"
  },
  "31617": {
    "city_id": "35000",
    "neighborhood_id": "31617",
    "neighborhood_name": "Ideal Farms",
    "state_code": "TX"
  },
  "31618": {
    "city_id": "35000",
    "neighborhood_id": "31618",
    "neighborhood_name": "Starline",
    "state_code": "TX"
  },
  "31621": {
    "city_id": "35000",
    "neighborhood_id": "31621",
    "neighborhood_name": "Jones Square Shopping Center",
    "state_code": "TX"
  },
  "31622": {
    "city_id": "35000",
    "neighborhood_id": "31622",
    "neighborhood_name": "Woodedge Park",
    "state_code": "TX"
  },
  "31624": {
    "city_id": "35000",
    "neighborhood_id": "31624",
    "neighborhood_name": "Marwood",
    "state_code": "TX"
  },
  "31625": {
    "city_id": "35000",
    "neighborhood_id": "31625",
    "neighborhood_name": "Primewest",
    "state_code": "TX"
  },
  "31626": {
    "city_id": "35000",
    "neighborhood_id": "31626",
    "neighborhood_name": "Harvest Bend The Village",
    "state_code": "TX"
  },
  "31627": {
    "city_id": "35000",
    "neighborhood_id": "31627",
    "neighborhood_name": "Central Green",
    "state_code": "TX"
  },
  "31630": {
    "city_id": "35000",
    "neighborhood_id": "31630",
    "neighborhood_name": "Clayton Greens",
    "state_code": "TX"
  },
  "31632": {
    "city_id": "35000",
    "neighborhood_id": "31632",
    "neighborhood_name": "Steeplechase Corner",
    "state_code": "TX"
  },
  "31633": {
    "city_id": "35000",
    "neighborhood_id": "31633",
    "neighborhood_name": "Aldine Estates",
    "state_code": "TX"
  },
  "31634": {
    "city_id": "35000",
    "neighborhood_id": "31634",
    "neighborhood_name": "Swea Gardens",
    "state_code": "TX"
  },
  "31635": {
    "city_id": "35000",
    "neighborhood_id": "31635",
    "neighborhood_name": "Magnolia Gardens",
    "state_code": "TX"
  },
  "31636": {
    "city_id": "35000",
    "neighborhood_id": "31636",
    "neighborhood_name": "Harvest Bend The Meadow",
    "state_code": "TX"
  },
  "31639": {
    "city_id": "35000",
    "neighborhood_id": "31639",
    "neighborhood_name": "Brunswick Lakes",
    "state_code": "TX"
  },
  "31642": {
    "city_id": "35000",
    "neighborhood_id": "31642",
    "neighborhood_name": "Antoine West",
    "state_code": "TX"
  },
  "31644": {
    "city_id": "35000",
    "neighborhood_id": "31644",
    "neighborhood_name": "Atasca Oaks Commercial",
    "state_code": "TX"
  },
  "31645": {
    "city_id": "35000",
    "neighborhood_id": "31645",
    "neighborhood_name": "Atascocita North",
    "state_code": "TX"
  },
  "31646": {
    "city_id": "35000",
    "neighborhood_id": "31646",
    "neighborhood_name": "Atascocita Town Center",
    "state_code": "TX"
  },
  "31647": {
    "city_id": "35000",
    "neighborhood_id": "31647",
    "neighborhood_name": "Atascocita Shores",
    "state_code": "TX"
  },
  "31648": {
    "city_id": "35000",
    "neighborhood_id": "31648",
    "neighborhood_name": "Atascocita South",
    "state_code": "TX"
  },
  "31649": {
    "city_id": "35000",
    "neighborhood_id": "31649",
    "neighborhood_name": "Atascocita Timbers",
    "state_code": "TX"
  },
  "31650": {
    "city_id": "35000",
    "neighborhood_id": "31650",
    "neighborhood_name": "Atascocita Trails",
    "state_code": "TX"
  },
  "31651": {
    "city_id": "35000",
    "neighborhood_id": "31651",
    "neighborhood_name": "Century Plaza",
    "state_code": "TX"
  },
  "31653": {
    "city_id": "35000",
    "neighborhood_id": "31653",
    "neighborhood_name": "Beechnut Meadows",
    "state_code": "TX"
  },
  "31654": {
    "city_id": "35000",
    "neighborhood_id": "31654",
    "neighborhood_name": "North Park Forest",
    "state_code": "TX"
  },
  "31655": {
    "city_id": "35000",
    "neighborhood_id": "31655",
    "neighborhood_name": "Poutra Farms",
    "state_code": "TX"
  },
  "31656": {
    "city_id": "35000",
    "neighborhood_id": "31656",
    "neighborhood_name": "Terra Del Sol",
    "state_code": "TX"
  },
  "31660": {
    "city_id": "35000",
    "neighborhood_id": "31660",
    "neighborhood_name": "Parkview At Barker Cypress",
    "state_code": "TX"
  },
  "31661": {
    "city_id": "35000",
    "neighborhood_id": "31661",
    "neighborhood_name": "Commons At Crossroads",
    "state_code": "TX"
  },
  "31662": {
    "city_id": "35000",
    "neighborhood_id": "31662",
    "neighborhood_name": "Meadowviewland",
    "state_code": "TX"
  },
  "31663": {
    "city_id": "35000",
    "neighborhood_id": "31663",
    "neighborhood_name": "Bammel Village",
    "state_code": "TX"
  },
  "31664": {
    "city_id": "35000",
    "neighborhood_id": "31664",
    "neighborhood_name": "Green Trails Crossing",
    "state_code": "TX"
  },
  "31665": {
    "city_id": "35000",
    "neighborhood_id": "31665",
    "neighborhood_name": "Windsor Park Lakes",
    "state_code": "TX"
  },
  "31679": {
    "city_id": "35000",
    "neighborhood_id": "31679",
    "neighborhood_name": "Bear Creek Village",
    "state_code": "TX"
  },
  "31680": {
    "city_id": "35000",
    "neighborhood_id": "31680",
    "neighborhood_name": "Beckford Place",
    "state_code": "TX"
  },
  "31681": {
    "city_id": "35000",
    "neighborhood_id": "31681",
    "neighborhood_name": "Beechnut Landing",
    "state_code": "TX"
  },
  "31683": {
    "city_id": "35000",
    "neighborhood_id": "31683",
    "neighborhood_name": "Airline Farms",
    "state_code": "TX"
  },
  "31684": {
    "city_id": "35000",
    "neighborhood_id": "31684",
    "neighborhood_name": "Blue Creek",
    "state_code": "TX"
  },
  "31686": {
    "city_id": "35000",
    "neighborhood_id": "31686",
    "neighborhood_name": "Bonaire",
    "state_code": "TX"
  },
  "31690": {
    "city_id": "35000",
    "neighborhood_id": "31690",
    "neighborhood_name": "Brittmoore - Tanner",
    "state_code": "TX"
  },
  "31694": {
    "city_id": "35000",
    "neighborhood_id": "31694",
    "neighborhood_name": "Brown Shipbuilding Industrial Park",
    "state_code": "TX"
  },
  "31698": {
    "city_id": "35000",
    "neighborhood_id": "31698",
    "neighborhood_name": "Camden Park",
    "state_code": "TX"
  },
  "31699": {
    "city_id": "35000",
    "neighborhood_id": "31699",
    "neighborhood_name": "Canyon Gate At Northpointe",
    "state_code": "TX"
  },
  "31703": {
    "city_id": "35000",
    "neighborhood_id": "31703",
    "neighborhood_name": "Castle Rock",
    "state_code": "TX"
  },
  "31706": {
    "city_id": "35000",
    "neighborhood_id": "31706",
    "neighborhood_name": "Meadows Of Northwest Park",
    "state_code": "TX"
  },
  "31707": {
    "city_id": "35000",
    "neighborhood_id": "31707",
    "neighborhood_name": "Champions Park",
    "state_code": "TX"
  },
  "31708": {
    "city_id": "35000",
    "neighborhood_id": "31708",
    "neighborhood_name": "Champions Center",
    "state_code": "TX"
  },
  "31709": {
    "city_id": "35000",
    "neighborhood_id": "31709",
    "neighborhood_name": "Champions East",
    "state_code": "TX"
  },
  "31710": {
    "city_id": "35000",
    "neighborhood_id": "31710",
    "neighborhood_name": "Champions Terrace",
    "state_code": "TX"
  },
  "31711": {
    "city_id": "35000",
    "neighborhood_id": "31711",
    "neighborhood_name": "Greenwood Forest",
    "state_code": "TX"
  },
  "31712": {
    "city_id": "35000",
    "neighborhood_id": "31712",
    "neighborhood_name": "Champions West",
    "state_code": "TX"
  },
  "31713": {
    "city_id": "35000",
    "neighborhood_id": "31713",
    "neighborhood_name": "Charlestown Colony",
    "state_code": "TX"
  },
  "31714": {
    "city_id": "35000",
    "neighborhood_id": "31714",
    "neighborhood_name": "Charterwood",
    "state_code": "TX"
  },
  "31715": {
    "city_id": "35000",
    "neighborhood_id": "31715",
    "neighborhood_name": "Chasewood Crossing",
    "state_code": "TX"
  },
  "31716": {
    "city_id": "35000",
    "neighborhood_id": "31716",
    "neighborhood_name": "Chimney Hill",
    "state_code": "TX"
  },
  "31717": {
    "city_id": "35000",
    "neighborhood_id": "31717",
    "neighborhood_name": "Cimarron",
    "state_code": "TX"
  },
  "31718": {
    "city_id": "35000",
    "neighborhood_id": "31718",
    "neighborhood_name": "Clayton",
    "state_code": "TX"
  },
  "31719": {
    "city_id": "35000",
    "neighborhood_id": "31719",
    "neighborhood_name": "Clayton Woods",
    "state_code": "TX"
  },
  "31722": {
    "city_id": "35000",
    "neighborhood_id": "31722",
    "neighborhood_name": "Coles Crossing South",
    "state_code": "TX"
  },
  "31724": {
    "city_id": "35000",
    "neighborhood_id": "31724",
    "neighborhood_name": "Colonies Commercial",
    "state_code": "TX"
  },
  "31726": {
    "city_id": "35000",
    "neighborhood_id": "31726",
    "neighborhood_name": "Cypress Crossing",
    "state_code": "TX"
  },
  "31727": {
    "city_id": "35000",
    "neighborhood_id": "31727",
    "neighborhood_name": "Woodbend Pines",
    "state_code": "TX"
  },
  "31728": {
    "city_id": "35000",
    "neighborhood_id": "31728",
    "neighborhood_name": "Concord Bridge",
    "state_code": "TX"
  },
  "31729": {
    "city_id": "35000",
    "neighborhood_id": "31729",
    "neighborhood_name": "Concord Bridge North",
    "state_code": "TX"
  },
  "31733": {
    "city_id": "35000",
    "neighborhood_id": "31733",
    "neighborhood_name": "Continental Plaza",
    "state_code": "TX"
  },
  "31734": {
    "city_id": "35000",
    "neighborhood_id": "31734",
    "neighborhood_name": "Copperbrook",
    "state_code": "TX"
  },
  "31735": {
    "city_id": "35000",
    "neighborhood_id": "31735",
    "neighborhood_name": "Copperfield Center",
    "state_code": "TX"
  },
  "31736": {
    "city_id": "35000",
    "neighborhood_id": "31736",
    "neighborhood_name": "Copperfield Center West",
    "state_code": "TX"
  },
  "31737": {
    "city_id": "35000",
    "neighborhood_id": "31737",
    "neighborhood_name": "Copperwood",
    "state_code": "TX"
  },
  "31738": {
    "city_id": "35000",
    "neighborhood_id": "31738",
    "neighborhood_name": "Cornett Business Park",
    "state_code": "TX"
  },
  "31743": {
    "city_id": "35000",
    "neighborhood_id": "31743",
    "neighborhood_name": "Creekside Place",
    "state_code": "TX"
  },
  "31745": {
    "city_id": "35000",
    "neighborhood_id": "31745",
    "neighborhood_name": "Crescent Park Village",
    "state_code": "TX"
  },
  "31746": {
    "city_id": "35000",
    "neighborhood_id": "31746",
    "neighborhood_name": "Lakes On Eldridge",
    "state_code": "TX"
  },
  "31747": {
    "city_id": "35000",
    "neighborhood_id": "31747",
    "neighborhood_name": "Fairview Gardens",
    "state_code": "TX"
  },
  "31748": {
    "city_id": "35000",
    "neighborhood_id": "31748",
    "neighborhood_name": "Cypress Corner",
    "state_code": "TX"
  },
  "31749": {
    "city_id": "35000",
    "neighborhood_id": "31749",
    "neighborhood_name": "Mckendree Park",
    "state_code": "TX"
  },
  "31750": {
    "city_id": "35000",
    "neighborhood_id": "31750",
    "neighborhood_name": "Cypress Meadows",
    "state_code": "TX"
  },
  "31751": {
    "city_id": "35000",
    "neighborhood_id": "31751",
    "neighborhood_name": "Cypress Mill Park",
    "state_code": "TX"
  },
  "31752": {
    "city_id": "35000",
    "neighborhood_id": "31752",
    "neighborhood_name": "Cypress Mill Estates Com Res",
    "state_code": "TX"
  },
  "31753": {
    "city_id": "35000",
    "neighborhood_id": "31753",
    "neighborhood_name": "Cypress Station",
    "state_code": "TX"
  },
  "31754": {
    "city_id": "35000",
    "neighborhood_id": "31754",
    "neighborhood_name": "Cypresswood Lake",
    "state_code": "TX"
  },
  "31755": {
    "city_id": "35000",
    "neighborhood_id": "31755",
    "neighborhood_name": "Cypress Glen Crossing",
    "state_code": "TX"
  },
  "31761": {
    "city_id": "35000",
    "neighborhood_id": "31761",
    "neighborhood_name": "Deerfield Village",
    "state_code": "TX"
  },
  "31762": {
    "city_id": "35000",
    "neighborhood_id": "31762",
    "neighborhood_name": "Dell Dale",
    "state_code": "TX"
  },
  "31764": {
    "city_id": "35000",
    "neighborhood_id": "31764",
    "neighborhood_name": "Dominion Park",
    "state_code": "TX"
  },
  "31768": {
    "city_id": "35000",
    "neighborhood_id": "31768",
    "neighborhood_name": "Edworthy Farms",
    "state_code": "TX"
  },
  "31770": {
    "city_id": "35000",
    "neighborhood_id": "31770",
    "neighborhood_name": "Eldridge Park",
    "state_code": "TX"
  },
  "31773": {
    "city_id": "35000",
    "neighborhood_id": "31773",
    "neighborhood_name": "Enchanted Oaks",
    "state_code": "TX"
  },
  "31777": {
    "city_id": "35000",
    "neighborhood_id": "31777",
    "neighborhood_name": "Paramount North",
    "state_code": "TX"
  },
  "31778": {
    "city_id": "35000",
    "neighborhood_id": "31778",
    "neighborhood_name": "Fairfield Place",
    "state_code": "TX"
  },
  "31786": {
    "city_id": "35000",
    "neighborhood_id": "31786",
    "neighborhood_name": "Forestview",
    "state_code": "TX"
  },
  "31788": {
    "city_id": "35000",
    "neighborhood_id": "31788",
    "neighborhood_name": "Fountainhead Village",
    "state_code": "TX"
  },
  "31789": {
    "city_id": "35000",
    "neighborhood_id": "31789",
    "neighborhood_name": "Foxwood",
    "state_code": "TX"
  },
  "31792": {
    "city_id": "35000",
    "neighborhood_id": "31792",
    "neighborhood_name": "Gatewood",
    "state_code": "TX"
  },
  "31794": {
    "city_id": "35000",
    "neighborhood_id": "31794",
    "neighborhood_name": "Georgetown Colony",
    "state_code": "TX"
  },
  "31798": {
    "city_id": "35000",
    "neighborhood_id": "31798",
    "neighborhood_name": "Willow Center",
    "state_code": "TX"
  },
  "31799": {
    "city_id": "35000",
    "neighborhood_id": "31799",
    "neighborhood_name": "Governors Place",
    "state_code": "TX"
  },
  "31800": {
    "city_id": "35000",
    "neighborhood_id": "31800",
    "neighborhood_name": "Oakpark Place",
    "state_code": "TX"
  },
  "31803": {
    "city_id": "35000",
    "neighborhood_id": "31803",
    "neighborhood_name": "Green Trails",
    "state_code": "TX"
  },
  "31804": {
    "city_id": "35000",
    "neighborhood_id": "31804",
    "neighborhood_name": "Green Tree Center",
    "state_code": "TX"
  },
  "31805": {
    "city_id": "35000",
    "neighborhood_id": "31805",
    "neighborhood_name": "Greenbranch",
    "state_code": "TX"
  },
  "31806": {
    "city_id": "35000",
    "neighborhood_id": "31806",
    "neighborhood_name": "Greenbriar Colony",
    "state_code": "TX"
  },
  "31807": {
    "city_id": "35000",
    "neighborhood_id": "31807",
    "neighborhood_name": "Greenwood Village",
    "state_code": "TX"
  },
  "31809": {
    "city_id": "35000",
    "neighborhood_id": "31809",
    "neighborhood_name": "Harvest Bend",
    "state_code": "TX"
  },
  "31810": {
    "city_id": "35000",
    "neighborhood_id": "31810",
    "neighborhood_name": "Hastings Green",
    "state_code": "TX"
  },
  "31811": {
    "city_id": "35000",
    "neighborhood_id": "31811",
    "neighborhood_name": "Hastings Green Park",
    "state_code": "TX"
  },
  "31812": {
    "city_id": "35000",
    "neighborhood_id": "31812",
    "neighborhood_name": "Hearthstone",
    "state_code": "TX"
  },
  "31813": {
    "city_id": "35000",
    "neighborhood_id": "31813",
    "neighborhood_name": "Hearthstone Green",
    "state_code": "TX"
  },
  "31816": {
    "city_id": "35000",
    "neighborhood_id": "31816",
    "neighborhood_name": "Heritage Park",
    "state_code": "TX"
  },
  "31818": {
    "city_id": "35000",
    "neighborhood_id": "31818",
    "neighborhood_name": "High Meadows",
    "state_code": "TX"
  },
  "31819": {
    "city_id": "35000",
    "neighborhood_id": "31819",
    "neighborhood_name": "Highland Timbers",
    "state_code": "TX"
  },
  "31823": {
    "city_id": "35000",
    "neighborhood_id": "31823",
    "neighborhood_name": "Hollow Tree",
    "state_code": "TX"
  },
  "31824": {
    "city_id": "35000",
    "neighborhood_id": "31824",
    "neighborhood_name": "Houmont Park",
    "state_code": "TX"
  },
  "31827": {
    "city_id": "35000",
    "neighborhood_id": "31827",
    "neighborhood_name": "Huffmeister Park",
    "state_code": "TX"
  },
  "31828": {
    "city_id": "35000",
    "neighborhood_id": "31828",
    "neighborhood_name": "Huntwick Forest",
    "state_code": "TX"
  },
  "31829": {
    "city_id": "35000",
    "neighborhood_id": "31829",
    "neighborhood_name": "Indian Shores",
    "state_code": "TX"
  },
  "31830": {
    "city_id": "35000",
    "neighborhood_id": "31830",
    "neighborhood_name": "Inverness Estates",
    "state_code": "TX"
  },
  "31831": {
    "city_id": "35000",
    "neighborhood_id": "31831",
    "neighborhood_name": "Inwood Club Estates",
    "state_code": "TX"
  },
  "31832": {
    "city_id": "35000",
    "neighborhood_id": "31832",
    "neighborhood_name": "Inwood North",
    "state_code": "TX"
  },
  "31833": {
    "city_id": "35000",
    "neighborhood_id": "31833",
    "neighborhood_name": "Isk",
    "state_code": "TX"
  },
  "31834": {
    "city_id": "35000",
    "neighborhood_id": "31834",
    "neighborhood_name": "Laurel Point",
    "state_code": "TX"
  },
  "31836": {
    "city_id": "35000",
    "neighborhood_id": "31836",
    "neighborhood_name": "Jefferson Park",
    "state_code": "TX"
  },
  "31840": {
    "city_id": "35000",
    "neighborhood_id": "31840",
    "neighborhood_name": "Jondot Village",
    "state_code": "TX"
  },
  "31843": {
    "city_id": "35000",
    "neighborhood_id": "31843",
    "neighborhood_name": "Kenswick North Park",
    "state_code": "TX"
  },
  "31845": {
    "city_id": "35000",
    "neighborhood_id": "31845",
    "neighborhood_name": "Kings Lake Estates",
    "state_code": "TX"
  },
  "31846": {
    "city_id": "35000",
    "neighborhood_id": "31846",
    "neighborhood_name": "Kings Landing",
    "state_code": "TX"
  },
  "31847": {
    "city_id": "35000",
    "neighborhood_id": "31847",
    "neighborhood_name": "Kings River Estates",
    "state_code": "TX"
  },
  "31848": {
    "city_id": "35000",
    "neighborhood_id": "31848",
    "neighborhood_name": "Kingwood Glen Village",
    "state_code": "TX"
  },
  "31849": {
    "city_id": "35000",
    "neighborhood_id": "31849",
    "neighborhood_name": "Kingsland Estates",
    "state_code": "TX"
  },
  "31853": {
    "city_id": "35000",
    "neighborhood_id": "31853",
    "neighborhood_name": "Lake Houston Forest",
    "state_code": "TX"
  },
  "31854": {
    "city_id": "35000",
    "neighborhood_id": "31854",
    "neighborhood_name": "Lake Shadows",
    "state_code": "TX"
  },
  "31855": {
    "city_id": "35000",
    "neighborhood_id": "31855",
    "neighborhood_name": "Lakeforest Of Kelliwood",
    "state_code": "TX"
  },
  "31856": {
    "city_id": "35000",
    "neighborhood_id": "31856",
    "neighborhood_name": "Pines Of Atascocita",
    "state_code": "TX"
  },
  "31857": {
    "city_id": "35000",
    "neighborhood_id": "31857",
    "neighborhood_name": "Lakes Of Buckingham Kelliwood",
    "state_code": "TX"
  },
  "31858": {
    "city_id": "35000",
    "neighborhood_id": "31858",
    "neighborhood_name": "Lakes On Eldridge North",
    "state_code": "TX"
  },
  "31860": {
    "city_id": "35000",
    "neighborhood_id": "31860",
    "neighborhood_name": "Lakewood Glen",
    "state_code": "TX"
  },
  "31861": {
    "city_id": "35000",
    "neighborhood_id": "31861",
    "neighborhood_name": "Lakewood Grove",
    "state_code": "TX"
  },
  "31862": {
    "city_id": "35000",
    "neighborhood_id": "31862",
    "neighborhood_name": "Lakewood Park Estates",
    "state_code": "TX"
  },
  "31863": {
    "city_id": "35000",
    "neighborhood_id": "31863",
    "neighborhood_name": "Lakewood Village",
    "state_code": "TX"
  },
  "31864": {
    "city_id": "35000",
    "neighborhood_id": "31864",
    "neighborhood_name": "Langham Creek Colony",
    "state_code": "TX"
  },
  "31868": {
    "city_id": "35000",
    "neighborhood_id": "31868",
    "neighborhood_name": "Lhnchburg",
    "state_code": "TX"
  },
  "31870": {
    "city_id": "35000",
    "neighborhood_id": "31870",
    "neighborhood_name": "Lincoln Park Farms",
    "state_code": "TX"
  },
  "31872": {
    "city_id": "35000",
    "neighborhood_id": "31872",
    "neighborhood_name": "Linnfield",
    "state_code": "TX"
  },
  "31876": {
    "city_id": "35000",
    "neighborhood_id": "31876",
    "neighborhood_name": "Mandolin Village",
    "state_code": "TX"
  },
  "31879": {
    "city_id": "35000",
    "neighborhood_id": "31879",
    "neighborhood_name": "Mason Lakes",
    "state_code": "TX"
  },
  "31884": {
    "city_id": "35000",
    "neighborhood_id": "31884",
    "neighborhood_name": "Meadow Vista",
    "state_code": "TX"
  },
  "31885": {
    "city_id": "35000",
    "neighborhood_id": "31885",
    "neighborhood_name": "Westheimer Place",
    "state_code": "TX"
  },
  "31886": {
    "city_id": "35000",
    "neighborhood_id": "31886",
    "neighborhood_name": "West Green Reserves",
    "state_code": "TX"
  },
  "31887": {
    "city_id": "35000",
    "neighborhood_id": "31887",
    "neighborhood_name": "Memorial Hills",
    "state_code": "TX"
  },
  "31888": {
    "city_id": "35000",
    "neighborhood_id": "31888",
    "neighborhood_name": "Memorial Parkway",
    "state_code": "TX"
  },
  "31890": {
    "city_id": "35000",
    "neighborhood_id": "31890",
    "neighborhood_name": "Milroy Farms",
    "state_code": "TX"
  },
  "31891": {
    "city_id": "35000",
    "neighborhood_id": "31891",
    "neighborhood_name": "Miramar Lake",
    "state_code": "TX"
  },
  "31892": {
    "city_id": "35000",
    "neighborhood_id": "31892",
    "neighborhood_name": "Mission Bend (San Gabriel)",
    "state_code": "TX"
  },
  "31894": {
    "city_id": "35000",
    "neighborhood_id": "31894",
    "neighborhood_name": "Morningside Place",
    "state_code": "TX"
  },
  "31898": {
    "city_id": "35000",
    "neighborhood_id": "31898",
    "neighborhood_name": "Aldine Meadows",
    "state_code": "TX"
  },
  "31899": {
    "city_id": "35000",
    "neighborhood_id": "31899",
    "neighborhood_name": "Westfall",
    "state_code": "TX"
  },
  "31900": {
    "city_id": "35000",
    "neighborhood_id": "31900",
    "neighborhood_name": "New Forest",
    "state_code": "TX"
  },
  "31901": {
    "city_id": "35000",
    "neighborhood_id": "31901",
    "neighborhood_name": "Normandy Crossing",
    "state_code": "TX"
  },
  "31903": {
    "city_id": "35000",
    "neighborhood_id": "31903",
    "neighborhood_name": "North Forest",
    "state_code": "TX"
  },
  "31904": {
    "city_id": "35000",
    "neighborhood_id": "31904",
    "neighborhood_name": "North Hill Estates",
    "state_code": "TX"
  },
  "31905": {
    "city_id": "35000",
    "neighborhood_id": "31905",
    "neighborhood_name": "North Shepherd Manor",
    "state_code": "TX"
  },
  "31908": {
    "city_id": "35000",
    "neighborhood_id": "31908",
    "neighborhood_name": "Northchase Park",
    "state_code": "TX"
  },
  "31909": {
    "city_id": "35000",
    "neighborhood_id": "31909",
    "neighborhood_name": "Northcliffe",
    "state_code": "TX"
  },
  "31910": {
    "city_id": "35000",
    "neighborhood_id": "31910",
    "neighborhood_name": "Northcliff",
    "state_code": "TX"
  },
  "31911": {
    "city_id": "35000",
    "neighborhood_id": "31911",
    "neighborhood_name": "Northcliffe Manor",
    "state_code": "TX"
  },
  "31912": {
    "city_id": "35000",
    "neighborhood_id": "31912",
    "neighborhood_name": "Northgreen Park",
    "state_code": "TX"
  },
  "31913": {
    "city_id": "35000",
    "neighborhood_id": "31913",
    "neighborhood_name": "Northline Terrace",
    "state_code": "TX"
  },
  "31914": {
    "city_id": "35000",
    "neighborhood_id": "31914",
    "neighborhood_name": "Northpark Central",
    "state_code": "TX"
  },
  "31915": {
    "city_id": "35000",
    "neighborhood_id": "31915",
    "neighborhood_name": "Northridge Park",
    "state_code": "TX"
  },
  "31916": {
    "city_id": "35000",
    "neighborhood_id": "31916",
    "neighborhood_name": "Northwest Green Business Park",
    "state_code": "TX"
  },
  "31917": {
    "city_id": "35000",
    "neighborhood_id": "31917",
    "neighborhood_name": "Northwest Park",
    "state_code": "TX"
  },
  "31919": {
    "city_id": "35000",
    "neighborhood_id": "31919",
    "neighborhood_name": "Nottingham Country",
    "state_code": "TX"
  },
  "31921": {
    "city_id": "35000",
    "neighborhood_id": "31921",
    "neighborhood_name": "Oak Park Ridge",
    "state_code": "TX"
  },
  "31923": {
    "city_id": "35000",
    "neighborhood_id": "31923",
    "neighborhood_name": "Oaks Of Atascocita",
    "state_code": "TX"
  },
  "31925": {
    "city_id": "35000",
    "neighborhood_id": "31925",
    "neighborhood_name": "Olde Oaks",
    "state_code": "TX"
  },
  "31926": {
    "city_id": "35000",
    "neighborhood_id": "31926",
    "neighborhood_name": "Olympic Village Walden On Lake Houston",
    "state_code": "TX"
  },
  "31929": {
    "city_id": "35000",
    "neighborhood_id": "31929",
    "neighborhood_name": "Park At Glen Arbor",
    "state_code": "TX"
  },
  "31938": {
    "city_id": "35000",
    "neighborhood_id": "31938",
    "neighborhood_name": "Parkway West",
    "state_code": "TX"
  },
  "31939": {
    "city_id": "35000",
    "neighborhood_id": "31939",
    "neighborhood_name": "Parkwest Central",
    "state_code": "TX"
  },
  "31944": {
    "city_id": "35000",
    "neighborhood_id": "31944",
    "neighborhood_name": "Pavilion",
    "state_code": "TX"
  },
  "31946": {
    "city_id": "35000",
    "neighborhood_id": "31946",
    "neighborhood_name": "Pheasant Run",
    "state_code": "TX"
  },
  "31947": {
    "city_id": "35000",
    "neighborhood_id": "31947",
    "neighborhood_name": "Pheasant Trace Village",
    "state_code": "TX"
  },
  "31950": {
    "city_id": "35000",
    "neighborhood_id": "31950",
    "neighborhood_name": "Pine Oak Forest",
    "state_code": "TX"
  },
  "31951": {
    "city_id": "35000",
    "neighborhood_id": "31951",
    "neighborhood_name": "Pine Trails",
    "state_code": "TX"
  },
  "31953": {
    "city_id": "35000",
    "neighborhood_id": "31953",
    "neighborhood_name": "Pinehurst Of Atascocita",
    "state_code": "TX"
  },
  "31956": {
    "city_id": "35000",
    "neighborhood_id": "31956",
    "neighborhood_name": "Ponderosa Forest",
    "state_code": "TX"
  },
  "31957": {
    "city_id": "35000",
    "neighborhood_id": "31957",
    "neighborhood_name": "Presidio Square",
    "state_code": "TX"
  },
  "31960": {
    "city_id": "35000",
    "neighborhood_id": "31960",
    "neighborhood_name": "Prestonwood Forest",
    "state_code": "TX"
  },
  "31962": {
    "city_id": "35000",
    "neighborhood_id": "31962",
    "neighborhood_name": "Quail Forest",
    "state_code": "TX"
  },
  "31967": {
    "city_id": "35000",
    "neighborhood_id": "31967",
    "neighborhood_name": "Chateau Estate",
    "state_code": "TX"
  },
  "31970": {
    "city_id": "35000",
    "neighborhood_id": "31970",
    "neighborhood_name": "Crossroads Park",
    "state_code": "TX"
  },
  "31973": {
    "city_id": "35000",
    "neighborhood_id": "31973",
    "neighborhood_name": "Rivergrove Garden Homes",
    "state_code": "TX"
  },
  "31976": {
    "city_id": "35000",
    "neighborhood_id": "31976",
    "neighborhood_name": "Romano Woods",
    "state_code": "TX"
  },
  "31982": {
    "city_id": "35000",
    "neighborhood_id": "31982",
    "neighborhood_name": "Satsuma Estates",
    "state_code": "TX"
  },
  "31984": {
    "city_id": "35000",
    "neighborhood_id": "31984",
    "neighborhood_name": "Windmill Villas",
    "state_code": "TX"
  },
  "31985": {
    "city_id": "35000",
    "neighborhood_id": "31985",
    "neighborhood_name": "Copperfield Place",
    "state_code": "TX"
  },
  "31989": {
    "city_id": "35000",
    "neighborhood_id": "31989",
    "neighborhood_name": "Sherman Place",
    "state_code": "TX"
  },
  "31993": {
    "city_id": "35000",
    "neighborhood_id": "31993",
    "neighborhood_name": "Sherwood Place",
    "state_code": "TX"
  },
  "31994": {
    "city_id": "35000",
    "neighborhood_id": "31994",
    "neighborhood_name": "Silver Woods",
    "state_code": "TX"
  },
  "32003": {
    "city_id": "35000",
    "neighborhood_id": "32003",
    "neighborhood_name": "Spring Cypress Plaza",
    "state_code": "TX"
  },
  "32004": {
    "city_id": "35000",
    "neighborhood_id": "32004",
    "neighborhood_name": "Spring Cypress Center",
    "state_code": "TX"
  },
  "32005": {
    "city_id": "35000",
    "neighborhood_id": "32005",
    "neighborhood_name": "Springfield",
    "state_code": "TX"
  },
  "32010": {
    "city_id": "35000",
    "neighborhood_id": "32010",
    "neighborhood_name": "Stonepine",
    "state_code": "TX"
  },
  "32012": {
    "city_id": "35000",
    "neighborhood_id": "32012",
    "neighborhood_name": "Summerwood",
    "state_code": "TX"
  },
  "32013": {
    "city_id": "35000",
    "neighborhood_id": "32013",
    "neighborhood_name": "Sundown",
    "state_code": "TX"
  },
  "32015": {
    "city_id": "35000",
    "neighborhood_id": "32015",
    "neighborhood_name": "Sycamore Bend",
    "state_code": "TX"
  },
  "32016": {
    "city_id": "35000",
    "neighborhood_id": "32016",
    "neighborhood_name": "Sydney Harbour",
    "state_code": "TX"
  },
  "32021": {
    "city_id": "35000",
    "neighborhood_id": "32021",
    "neighborhood_name": "Tasfield",
    "state_code": "TX"
  },
  "32028": {
    "city_id": "35000",
    "neighborhood_id": "32028",
    "neighborhood_name": "Tower Oaks",
    "state_code": "TX"
  },
  "32029": {
    "city_id": "35000",
    "neighborhood_id": "32029",
    "neighborhood_name": "Traditions At Clayton Park",
    "state_code": "TX"
  },
  "32031": {
    "city_id": "35000",
    "neighborhood_id": "32031",
    "neighborhood_name": "Trophy Club",
    "state_code": "TX"
  },
  "32032": {
    "city_id": "35000",
    "neighborhood_id": "32032",
    "neighborhood_name": "Twin Lakes",
    "state_code": "TX"
  },
  "32034": {
    "city_id": "35000",
    "neighborhood_id": "32034",
    "neighborhood_name": "Westborough Place",
    "state_code": "TX"
  },
  "32036": {
    "city_id": "35000",
    "neighborhood_id": "32036",
    "neighborhood_name": "Villages At Lakepointe",
    "state_code": "TX"
  },
  "32037": {
    "city_id": "35000",
    "neighborhood_id": "32037",
    "neighborhood_name": "Villages Of Cypress Lakes",
    "state_code": "TX"
  },
  "32038": {
    "city_id": "35000",
    "neighborhood_id": "32038",
    "neighborhood_name": "Villages Of Langham Creek",
    "state_code": "TX"
  },
  "32039": {
    "city_id": "35000",
    "neighborhood_id": "32039",
    "neighborhood_name": "Villas At Lakewood Park",
    "state_code": "TX"
  },
  "32044": {
    "city_id": "35000",
    "neighborhood_id": "32044",
    "neighborhood_name": "Walden On Lake Houston",
    "state_code": "TX"
  },
  "32047": {
    "city_id": "35000",
    "neighborhood_id": "32047",
    "neighborhood_name": "West Memorial",
    "state_code": "TX"
  },
  "32048": {
    "city_id": "35000",
    "neighborhood_id": "32048",
    "neighborhood_name": "Westbrook Lakes",
    "state_code": "TX"
  },
  "32049": {
    "city_id": "35000",
    "neighborhood_id": "32049",
    "neighborhood_name": "Westfield Estates",
    "state_code": "TX"
  },
  "32050": {
    "city_id": "35000",
    "neighborhood_id": "32050",
    "neighborhood_name": "Westfield Terra",
    "state_code": "TX"
  },
  "32051": {
    "city_id": "35000",
    "neighborhood_id": "32051",
    "neighborhood_name": "Westgate Business Park",
    "state_code": "TX"
  },
  "32052": {
    "city_id": "35000",
    "neighborhood_id": "32052",
    "neighborhood_name": "Westlake Forest",
    "state_code": "TX"
  },
  "32053": {
    "city_id": "35000",
    "neighborhood_id": "32053",
    "neighborhood_name": "Westpark Highway 6",
    "state_code": "TX"
  },
  "32054": {
    "city_id": "35000",
    "neighborhood_id": "32054",
    "neighborhood_name": "Westside Mall",
    "state_code": "TX"
  },
  "32056": {
    "city_id": "35000",
    "neighborhood_id": "32056",
    "neighborhood_name": "Westside Parkway",
    "state_code": "TX"
  },
  "32059": {
    "city_id": "35000",
    "neighborhood_id": "32059",
    "neighborhood_name": "White Oak Bend",
    "state_code": "TX"
  },
  "32060": {
    "city_id": "35000",
    "neighborhood_id": "32060",
    "neighborhood_name": "White Oak Landing",
    "state_code": "TX"
  },
  "32061": {
    "city_id": "35000",
    "neighborhood_id": "32061",
    "neighborhood_name": "White Oak Springs",
    "state_code": "TX"
  },
  "32063": {
    "city_id": "35000",
    "neighborhood_id": "32063",
    "neighborhood_name": "Williamsburg Hamlet",
    "state_code": "TX"
  },
  "32064": {
    "city_id": "35000",
    "neighborhood_id": "32064",
    "neighborhood_name": "Williamsburg Settlement",
    "state_code": "TX"
  },
  "32065": {
    "city_id": "35000",
    "neighborhood_id": "32065",
    "neighborhood_name": "Willow Dell",
    "state_code": "TX"
  },
  "32066": {
    "city_id": "35000",
    "neighborhood_id": "32066",
    "neighborhood_name": "Willow Falls",
    "state_code": "TX"
  },
  "32067": {
    "city_id": "35000",
    "neighborhood_id": "32067",
    "neighborhood_name": "Willow Forest",
    "state_code": "TX"
  },
  "32073": {
    "city_id": "35000",
    "neighborhood_id": "32073",
    "neighborhood_name": "Windermere Lakes",
    "state_code": "TX"
  },
  "32074": {
    "city_id": "35000",
    "neighborhood_id": "32074",
    "neighborhood_name": "Wingate",
    "state_code": "TX"
  },
  "32077": {
    "city_id": "35000",
    "neighborhood_id": "32077",
    "neighborhood_name": "Berkshire",
    "state_code": "TX"
  },
  "32080": {
    "city_id": "35000",
    "neighborhood_id": "32080",
    "neighborhood_name": "Bear Creek Central",
    "state_code": "TX"
  },
  "32081": {
    "city_id": "35000",
    "neighborhood_id": "32081",
    "neighborhood_name": "Cranbrook Center",
    "state_code": "TX"
  },
  "32082": {
    "city_id": "35000",
    "neighborhood_id": "32082",
    "neighborhood_name": "Cypresswood Court",
    "state_code": "TX"
  },
  "32084": {
    "city_id": "35000",
    "neighborhood_id": "32084",
    "neighborhood_name": "Lakewood Forest",
    "state_code": "TX"
  },
  "32085": {
    "city_id": "35000",
    "neighborhood_id": "32085",
    "neighborhood_name": "Mason Park",
    "state_code": "TX"
  },
  "32086": {
    "city_id": "35000",
    "neighborhood_id": "32086",
    "neighborhood_name": "Westwind",
    "state_code": "TX"
  },
  "32087": {
    "city_id": "35000",
    "neighborhood_id": "32087",
    "neighborhood_name": "Woodedge Village",
    "state_code": "TX"
  },
  "32090": {
    "city_id": "35000",
    "neighborhood_id": "32090",
    "neighborhood_name": "Wortham Grove",
    "state_code": "TX"
  },
  "32093": {
    "city_id": "35000",
    "neighborhood_id": "32093",
    "neighborhood_name": "Yorktown Crossing",
    "state_code": "TX"
  },
  "32094": {
    "city_id": "35000",
    "neighborhood_id": "32094",
    "neighborhood_name": "Greens Port",
    "state_code": "TX"
  },
  "32095": {
    "city_id": "35000",
    "neighborhood_id": "32095",
    "neighborhood_name": "Woodforest",
    "state_code": "TX"
  },
  "32096": {
    "city_id": "35000",
    "neighborhood_id": "32096",
    "neighborhood_name": "Riviera East",
    "state_code": "TX"
  },
  "32097": {
    "city_id": "35000",
    "neighborhood_id": "32097",
    "neighborhood_name": "Houston Suburban Heights",
    "state_code": "TX"
  },
  "32098": {
    "city_id": "35000",
    "neighborhood_id": "32098",
    "neighborhood_name": "Greens Landing",
    "state_code": "TX"
  },
  "32099": {
    "city_id": "35000",
    "neighborhood_id": "32099",
    "neighborhood_name": "Inwood Northwest",
    "state_code": "TX"
  },
  "32100": {
    "city_id": "35000",
    "neighborhood_id": "32100",
    "neighborhood_name": "Willowood",
    "state_code": "TX"
  },
  "32101": {
    "city_id": "35000",
    "neighborhood_id": "32101",
    "neighborhood_name": "Woodland Oaks",
    "state_code": "TX"
  },
  "32102": {
    "city_id": "35000",
    "neighborhood_id": "32102",
    "neighborhood_name": "Greenbriar Place North",
    "state_code": "TX"
  },
  "33690": {
    "city_id": "05000",
    "neighborhood_id": "33690",
    "neighborhood_name": "North Park",
    "state_code": "TX"
  },
  "5356": {
    "city_id": "84000",
    "neighborhood_id": "5356",
    "neighborhood_name": "Beech Hill",
    "state_code": "NY"
  },
  "5357": {
    "city_id": "84000",
    "neighborhood_id": "5357",
    "neighborhood_name": "Bryn Mawr",
    "state_code": "NY"
  },
  "5358": {
    "city_id": "84000",
    "neighborhood_id": "5358",
    "neighborhood_name": "Cedar Knolls",
    "state_code": "NY"
  },
  "5359": {
    "city_id": "84000",
    "neighborhood_id": "5359",
    "neighborhood_name": "Colonial Heights",
    "state_code": "NY"
  },
  "5360": {
    "city_id": "84000",
    "neighborhood_id": "5360",
    "neighborhood_name": "Crestwood",
    "state_code": "NY"
  },
  "5361": {
    "city_id": "84000",
    "neighborhood_id": "5361",
    "neighborhood_name": "Dunwoodie",
    "state_code": "NY"
  },
  "5362": {
    "city_id": "84000",
    "neighborhood_id": "5362",
    "neighborhood_name": "Getty Square",
    "state_code": "NY"
  },
  "5363": {
    "city_id": "84000",
    "neighborhood_id": "5363",
    "neighborhood_name": "Homefield",
    "state_code": "NY"
  },
  "5364": {
    "city_id": "84000",
    "neighborhood_id": "5364",
    "neighborhood_name": "Lawrence Park",
    "state_code": "NY"
  },
  "5365": {
    "city_id": "84000",
    "neighborhood_id": "5365",
    "neighborhood_name": "Lincoln Park",
    "state_code": "NY"
  },
  "5366": {
    "city_id": "84000",
    "neighborhood_id": "5366",
    "neighborhood_name": "Ludlow",
    "state_code": "NY"
  },
  "5367": {
    "city_id": "84000",
    "neighborhood_id": "5367",
    "neighborhood_name": "Nepera Park",
    "state_code": "NY"
  },
  "5368": {
    "city_id": "84000",
    "neighborhood_id": "5368",
    "neighborhood_name": "Nepperham",
    "state_code": "NY"
  },
  "5369": {
    "city_id": "84000",
    "neighborhood_id": "5369",
    "neighborhood_name": "Nodine Hill",
    "state_code": "NY"
  },
  "5370": {
    "city_id": "84000",
    "neighborhood_id": "5370",
    "neighborhood_name": "Northeast Yonkers",
    "state_code": "NY"
  },
  "5371": {
    "city_id": "84000",
    "neighborhood_id": "5371",
    "neighborhood_name": "Northwest Yonkers",
    "state_code": "NY"
  },
  "5372": {
    "city_id": "84000",
    "neighborhood_id": "5372",
    "neighborhood_name": "Park Hill",
    "state_code": "NY"
  },
  "5373": {
    "city_id": "84000",
    "neighborhood_id": "5373",
    "neighborhood_name": "Southeast Yonkers",
    "state_code": "NY"
  },
  "6090": {
    "city_id": "05000",
    "neighborhood_id": "6090",
    "neighborhood_name": "Allandale",
    "state_code": "TX"
  },
  "6091": {
    "city_id": "05000",
    "neighborhood_id": "6091",
    "neighborhood_name": "Barton Hills",
    "state_code": "TX"
  },
  "6092": {
    "city_id": "05000",
    "neighborhood_id": "6092",
    "neighborhood_name": "Bouldin",
    "state_code": "TX"
  },
  "6093": {
    "city_id": "05000",
    "neighborhood_id": "6093",
    "neighborhood_name": "Brentwood",
    "state_code": "TX"
  },
  "6094": {
    "city_id": "05000",
    "neighborhood_id": "6094",
    "neighborhood_name": "Central East Austin",
    "state_code": "TX"
  },
  "6095": {
    "city_id": "05000",
    "neighborhood_id": "6095",
    "neighborhood_name": "Chestnut",
    "state_code": "TX"
  },
  "6096": {
    "city_id": "05000",
    "neighborhood_id": "6096",
    "neighborhood_name": "Coronado Hills",
    "state_code": "TX"
  },
  "6097": {
    "city_id": "05000",
    "neighborhood_id": "6097",
    "neighborhood_name": "Crestview",
    "state_code": "TX"
  },
  "6098": {
    "city_id": "05000",
    "neighborhood_id": "6098",
    "neighborhood_name": "Dawson",
    "state_code": "TX"
  },
  "6099": {
    "city_id": "05000",
    "neighborhood_id": "6099",
    "neighborhood_name": "Downtown",
    "state_code": "TX"
  },
  "6100": {
    "city_id": "05000",
    "neighborhood_id": "6100",
    "neighborhood_name": "East Cesar Chavez",
    "state_code": "TX"
  },
  "6101": {
    "city_id": "05000",
    "neighborhood_id": "6101",
    "neighborhood_name": "East Congress",
    "state_code": "TX"
  },
  "6102": {
    "city_id": "05000",
    "neighborhood_id": "6102",
    "neighborhood_name": "East Oak Hill",
    "state_code": "TX"
  },
  "6103": {
    "city_id": "05000",
    "neighborhood_id": "6103",
    "neighborhood_name": "Franklin Park",
    "state_code": "TX"
  },
  "6104": {
    "city_id": "05000",
    "neighborhood_id": "6104",
    "neighborhood_name": "Galindo",
    "state_code": "TX"
  },
  "6105": {
    "city_id": "05000",
    "neighborhood_id": "6105",
    "neighborhood_name": "Garrison Park",
    "state_code": "TX"
  },
  "6106": {
    "city_id": "05000",
    "neighborhood_id": "6106",
    "neighborhood_name": "Gateway",
    "state_code": "TX"
  },
  "6107": {
    "city_id": "05000",
    "neighborhood_id": "6107",
    "neighborhood_name": "Georgian Acres",
    "state_code": "TX"
  },
  "6108": {
    "city_id": "05000",
    "neighborhood_id": "6108",
    "neighborhood_name": "Govalle",
    "state_code": "TX"
  },
  "6109": {
    "city_id": "05000",
    "neighborhood_id": "6109",
    "neighborhood_name": "Hancock",
    "state_code": "TX"
  },
  "6110": {
    "city_id": "05000",
    "neighborhood_id": "6110",
    "neighborhood_name": "Heritage Hills",
    "state_code": "TX"
  },
  "6111": {
    "city_id": "05000",
    "neighborhood_id": "6111",
    "neighborhood_name": "Highland",
    "state_code": "TX"
  },
  "6112": {
    "city_id": "05000",
    "neighborhood_id": "6112",
    "neighborhood_name": "Holly",
    "state_code": "TX"
  },
  "6113": {
    "city_id": "05000",
    "neighborhood_id": "6113",
    "neighborhood_name": "Hyde Park",
    "state_code": "TX"
  },
  "6114": {
    "city_id": "05000",
    "neighborhood_id": "6114",
    "neighborhood_name": "Johnston Terrace",
    "state_code": "TX"
  },
  "6115": {
    "city_id": "05000",
    "neighborhood_id": "6115",
    "neighborhood_name": "McKinney",
    "state_code": "TX"
  },
  "6116": {
    "city_id": "05000",
    "neighborhood_id": "6116",
    "neighborhood_name": "MLK",
    "state_code": "TX"
  },
  "6117": {
    "city_id": "05000",
    "neighborhood_id": "6117",
    "neighborhood_name": "MLK-183",
    "state_code": "TX"
  },
  "6118": {
    "city_id": "05000",
    "neighborhood_id": "6118",
    "neighborhood_name": "Montropolis",
    "state_code": "TX"
  },
  "6119": {
    "city_id": "05000",
    "neighborhood_id": "6119",
    "neighborhood_name": "North Austin Civic Association",
    "state_code": "TX"
  },
  "6120": {
    "city_id": "05000",
    "neighborhood_id": "6120",
    "neighborhood_name": "North Burnet",
    "state_code": "TX"
  },
  "6121": {
    "city_id": "05000",
    "neighborhood_id": "6121",
    "neighborhood_name": "North Lamar",
    "state_code": "TX"
  },
  "6122": {
    "city_id": "05000",
    "neighborhood_id": "6122",
    "neighborhood_name": "North Loop",
    "state_code": "TX"
  },
  "6123": {
    "city_id": "05000",
    "neighborhood_id": "6123",
    "neighborhood_name": "North Shoal Creek",
    "state_code": "TX"
  },
  "6124": {
    "city_id": "05000",
    "neighborhood_id": "6124",
    "neighborhood_name": "North University",
    "state_code": "TX"
  },
  "6125": {
    "city_id": "05000",
    "neighborhood_id": "6125",
    "neighborhood_name": "Old West Austin",
    "state_code": "TX"
  },
  "6126": {
    "city_id": "05000",
    "neighborhood_id": "6126",
    "neighborhood_name": "Parker Lane",
    "state_code": "TX"
  },
  "6127": {
    "city_id": "05000",
    "neighborhood_id": "6127",
    "neighborhood_name": "Pecan Springs Springdale",
    "state_code": "TX"
  },
  "6128": {
    "city_id": "05000",
    "neighborhood_id": "6128",
    "neighborhood_name": "Pleasant Valley",
    "state_code": "TX"
  },
  "6129": {
    "city_id": "05000",
    "neighborhood_id": "6129",
    "neighborhood_name": "Riverside",
    "state_code": "TX"
  },
  "6130": {
    "city_id": "05000",
    "neighborhood_id": "6130",
    "neighborhood_name": "RMMA",
    "state_code": "TX"
  },
  "6131": {
    "city_id": "05000",
    "neighborhood_id": "6131",
    "neighborhood_name": "Rosedale",
    "state_code": "TX"
  },
  "6132": {
    "city_id": "05000",
    "neighborhood_id": "6132",
    "neighborhood_name": "Rosewood",
    "state_code": "TX"
  },
  "6133": {
    "city_id": "05000",
    "neighborhood_id": "6133",
    "neighborhood_name": "South Lamar",
    "state_code": "TX"
  },
  "6134": {
    "city_id": "05000",
    "neighborhood_id": "6134",
    "neighborhood_name": "South Manchaca",
    "state_code": "TX"
  },
  "6135": {
    "city_id": "05000",
    "neighborhood_id": "6135",
    "neighborhood_name": "South River City",
    "state_code": "TX"
  },
  "6136": {
    "city_id": "05000",
    "neighborhood_id": "6136",
    "neighborhood_name": "Southeast",
    "state_code": "TX"
  },
  "6137": {
    "city_id": "05000",
    "neighborhood_id": "6137",
    "neighborhood_name": "St. Edwards",
    "state_code": "TX"
  },
  "6138": {
    "city_id": "05000",
    "neighborhood_id": "6138",
    "neighborhood_name": "St. Johns",
    "state_code": "TX"
  },
  "6139": {
    "city_id": "05000",
    "neighborhood_id": "6139",
    "neighborhood_name": "Sweetbriar",
    "state_code": "TX"
  },
  "6140": {
    "city_id": "05000",
    "neighborhood_id": "6140",
    "neighborhood_name": "Triangle State",
    "state_code": "TX"
  },
  "6141": {
    "city_id": "05000",
    "neighborhood_id": "6141",
    "neighborhood_name": "University Hills",
    "state_code": "TX"
  },
  "6142": {
    "city_id": "05000",
    "neighborhood_id": "6142",
    "neighborhood_name": "University of Texas - Austin",
    "state_code": "TX"
  },
  "6143": {
    "city_id": "05000",
    "neighborhood_id": "6143",
    "neighborhood_name": "Upper Boggy Creek",
    "state_code": "TX"
  },
  "6144": {
    "city_id": "05000",
    "neighborhood_id": "6144",
    "neighborhood_name": "West Congress",
    "state_code": "TX"
  },
  "6145": {
    "city_id": "05000",
    "neighborhood_id": "6145",
    "neighborhood_name": "West Oak Hill",
    "state_code": "TX"
  },
  "6146": {
    "city_id": "05000",
    "neighborhood_id": "6146",
    "neighborhood_name": "West University",
    "state_code": "TX"
  },
  "6147": {
    "city_id": "05000",
    "neighborhood_id": "6147",
    "neighborhood_name": "Westgate",
    "state_code": "TX"
  },
  "6148": {
    "city_id": "05000",
    "neighborhood_id": "6148",
    "neighborhood_name": "Windsor Hills",
    "state_code": "TX"
  },
  "6149": {
    "city_id": "05000",
    "neighborhood_id": "6149",
    "neighborhood_name": "Windsor Park",
    "state_code": "TX"
  },
  "6150": {
    "city_id": "05000",
    "neighborhood_id": "6150",
    "neighborhood_name": "Windsor Road",
    "state_code": "TX"
  },
  "6151": {
    "city_id": "05000",
    "neighborhood_id": "6151",
    "neighborhood_name": "Wooten",
    "state_code": "TX"
  },
  "6152": {
    "city_id": "05000",
    "neighborhood_id": "6152",
    "neighborhood_name": "Zilker",
    "state_code": "TX"
  },
  "6161": {
    "city_id": "19000",
    "neighborhood_id": "6161",
    "neighborhood_name": "M Streets",
    "state_code": "TX"
  },
  "6162": {
    "city_id": "19000",
    "neighborhood_id": "6162",
    "neighborhood_name": "Bluffview",
    "state_code": "TX"
  },
  "6163": {
    "city_id": "19000",
    "neighborhood_id": "6163",
    "neighborhood_name": "Buckner Terrace Everglade Park",
    "state_code": "TX"
  },
  "6164": {
    "city_id": "19000",
    "neighborhood_id": "6164",
    "neighborhood_name": "Casa Linda- Casa View",
    "state_code": "TX"
  },
  "6165": {
    "city_id": "19000",
    "neighborhood_id": "6165",
    "neighborhood_name": "Cedar Crest",
    "state_code": "TX"
  },
  "6166": {
    "city_id": "19000",
    "neighborhood_id": "6166",
    "neighborhood_name": "Cockrell Hill",
    "state_code": "TX"
  },
  "6167": {
    "city_id": "19000",
    "neighborhood_id": "6167",
    "neighborhood_name": "Coronado Hills-Gastonwood",
    "state_code": "TX"
  },
  "6168": {
    "city_id": "19000",
    "neighborhood_id": "6168",
    "neighborhood_name": "East Dallas",
    "state_code": "TX"
  },
  "6169": {
    "city_id": "19000",
    "neighborhood_id": "6169",
    "neighborhood_name": "Far North Dallas",
    "state_code": "TX"
  },
  "6170": {
    "city_id": "19000",
    "neighborhood_id": "6170",
    "neighborhood_name": "Five Mile Creek",
    "state_code": "TX"
  },
  "6171": {
    "city_id": "19000",
    "neighborhood_id": "6171",
    "neighborhood_name": "Forest Hills",
    "state_code": "TX"
  },
  "6172": {
    "city_id": "19000",
    "neighborhood_id": "6172",
    "neighborhood_name": "Greenway Park",
    "state_code": "TX"
  },
  "6173": {
    "city_id": "19000",
    "neighborhood_id": "6173",
    "neighborhood_name": "Historic District",
    "state_code": "TX"
  },
  "6174": {
    "city_id": "19000",
    "neighborhood_id": "6174",
    "neighborhood_name": "Hollywood Heights",
    "state_code": "TX"
  },
  "6175": {
    "city_id": "19000",
    "neighborhood_id": "6175",
    "neighborhood_name": "Kessler Park and Stevens Park",
    "state_code": "TX"
  },
  "6176": {
    "city_id": "19000",
    "neighborhood_id": "6176",
    "neighborhood_name": "Lake Highlands",
    "state_code": "TX"
  },
  "6177": {
    "city_id": "19000",
    "neighborhood_id": "6177",
    "neighborhood_name": "Lakewood",
    "state_code": "TX"
  },
  "6178": {
    "city_id": "19000",
    "neighborhood_id": "6178",
    "neighborhood_name": "Mountain Creek",
    "state_code": "TX"
  },
  "6179": {
    "city_id": "19000",
    "neighborhood_id": "6179",
    "neighborhood_name": "North Dallas",
    "state_code": "TX"
  },
  "6180": {
    "city_id": "19000",
    "neighborhood_id": "6180",
    "neighborhood_name": "Northeast Dallas- White Rock",
    "state_code": "TX"
  },
  "6181": {
    "city_id": "19000",
    "neighborhood_id": "6181",
    "neighborhood_name": "Northwest Dallas-Love Field",
    "state_code": "TX"
  },
  "6182": {
    "city_id": "19000",
    "neighborhood_id": "6182",
    "neighborhood_name": "Oak Cliff",
    "state_code": "TX"
  },
  "6183": {
    "city_id": "19000",
    "neighborhood_id": "6183",
    "neighborhood_name": "Oak Lawn",
    "state_code": "TX"
  },
  "6184": {
    "city_id": "19000",
    "neighborhood_id": "6184",
    "neighborhood_name": "Piedmont Addition",
    "state_code": "TX"
  },
  "6185": {
    "city_id": "19000",
    "neighborhood_id": "6185",
    "neighborhood_name": "Pleasant Grove",
    "state_code": "TX"
  },
  "6186": {
    "city_id": "19000",
    "neighborhood_id": "6186",
    "neighborhood_name": "Preston Hollow",
    "state_code": "TX"
  },
  "6187": {
    "city_id": "19000",
    "neighborhood_id": "6187",
    "neighborhood_name": "Redbird",
    "state_code": "TX"
  },
  "6188": {
    "city_id": "19000",
    "neighborhood_id": "6188",
    "neighborhood_name": "Riverway Estates-Bruton Terrace",
    "state_code": "TX"
  },
  "6189": {
    "city_id": "19000",
    "neighborhood_id": "6189",
    "neighborhood_name": "South Boulevard-Park Row",
    "state_code": "TX"
  },
  "6190": {
    "city_id": "19000",
    "neighborhood_id": "6190",
    "neighborhood_name": "South Dallas-Fair Park",
    "state_code": "TX"
  },
  "6191": {
    "city_id": "19000",
    "neighborhood_id": "6191",
    "neighborhood_name": "Urbandale-Parkdale",
    "state_code": "TX"
  },
  "6192": {
    "city_id": "19000",
    "neighborhood_id": "6192",
    "neighborhood_name": "West Texas",
    "state_code": "TX"
  },
  "6193": {
    "city_id": "19000",
    "neighborhood_id": "6193",
    "neighborhood_name": "Winnetka Heights",
    "state_code": "TX"
  },
  "6194": {
    "city_id": "19000",
    "neighborhood_id": "6194",
    "neighborhood_name": "Wolf Creek",
    "state_code": "TX"
  },
  "6195": {
    "city_id": "19000",
    "neighborhood_id": "6195",
    "neighborhood_name": "Wynnewood North",
    "state_code": "TX"
  },
  "6268": {
    "city_id": "35000",
    "neighborhood_id": "6268",
    "neighborhood_name": "Acres Home",
    "state_code": "TX"
  },
  "6269": {
    "city_id": "35000",
    "neighborhood_id": "6269",
    "neighborhood_name": "Addicks- Park Ten",
    "state_code": "TX"
  },
  "6270": {
    "city_id": "35000",
    "neighborhood_id": "6270",
    "neighborhood_name": "Afton Oaks- River Oaks",
    "state_code": "TX"
  },
  "6271": {
    "city_id": "35000",
    "neighborhood_id": "6271",
    "neighborhood_name": "Alief",
    "state_code": "TX"
  },
  "6272": {
    "city_id": "35000",
    "neighborhood_id": "6272",
    "neighborhood_name": "Astrodome",
    "state_code": "TX"
  },
  "6273": {
    "city_id": "35000",
    "neighborhood_id": "6273",
    "neighborhood_name": "Binz",
    "state_code": "TX"
  },
  "6274": {
    "city_id": "35000",
    "neighborhood_id": "6274",
    "neighborhood_name": "Braeburn",
    "state_code": "TX"
  },
  "6275": {
    "city_id": "35000",
    "neighborhood_id": "6275",
    "neighborhood_name": "Braeswood Place",
    "state_code": "TX"
  },
  "6276": {
    "city_id": "35000",
    "neighborhood_id": "6276",
    "neighborhood_name": "Briarforest",
    "state_code": "TX"
  },
  "6277": {
    "city_id": "35000",
    "neighborhood_id": "6277",
    "neighborhood_name": "Carverdale",
    "state_code": "TX"
  },
  "6278": {
    "city_id": "35000",
    "neighborhood_id": "6278",
    "neighborhood_name": "Central Southwest",
    "state_code": "TX"
  },
  "6279": {
    "city_id": "35000",
    "neighborhood_id": "6279",
    "neighborhood_name": "Clear Lake",
    "state_code": "TX"
  },
  "6280": {
    "city_id": "35000",
    "neighborhood_id": "6280",
    "neighborhood_name": "Clinton Park Tri-Community",
    "state_code": "TX"
  },
  "6281": {
    "city_id": "35000",
    "neighborhood_id": "6281",
    "neighborhood_name": "Denver Harbor- Port Houston",
    "state_code": "TX"
  },
  "6282": {
    "city_id": "35000",
    "neighborhood_id": "6282",
    "neighborhood_name": "Downtown",
    "state_code": "TX"
  },
  "6283": {
    "city_id": "35000",
    "neighborhood_id": "6283",
    "neighborhood_name": "East Houston",
    "state_code": "TX"
  },
  "6284": {
    "city_id": "35000",
    "neighborhood_id": "6284",
    "neighborhood_name": "East Little York- Homestead",
    "state_code": "TX"
  },
  "6285": {
    "city_id": "35000",
    "neighborhood_id": "6285",
    "neighborhood_name": "Eastex- Jensen",
    "state_code": "TX"
  },
  "6286": {
    "city_id": "35000",
    "neighborhood_id": "6286",
    "neighborhood_name": "Edgebrook",
    "state_code": "TX"
  },
  "6287": {
    "city_id": "35000",
    "neighborhood_id": "6287",
    "neighborhood_name": "El Dorado- Oates Prarie",
    "state_code": "TX"
  },
  "6288": {
    "city_id": "35000",
    "neighborhood_id": "6288",
    "neighborhood_name": "Eldridge- West Oaks",
    "state_code": "TX"
  },
  "6289": {
    "city_id": "35000",
    "neighborhood_id": "6289",
    "neighborhood_name": "Fairbanks- Northest Crossing",
    "state_code": "TX"
  },
  "6290": {
    "city_id": "35000",
    "neighborhood_id": "6290",
    "neighborhood_name": "Fondren Gardens",
    "state_code": "TX"
  },
  "6291": {
    "city_id": "35000",
    "neighborhood_id": "6291",
    "neighborhood_name": "Fort Bend Houston",
    "state_code": "TX"
  },
  "6292": {
    "city_id": "35000",
    "neighborhood_id": "6292",
    "neighborhood_name": "Fourth Ward",
    "state_code": "TX"
  },
  "6293": {
    "city_id": "35000",
    "neighborhood_id": "6293",
    "neighborhood_name": "Golfcrest",
    "state_code": "TX"
  },
  "6294": {
    "city_id": "35000",
    "neighborhood_id": "6294",
    "neighborhood_name": "Great Uptown",
    "state_code": "TX"
  },
  "6295": {
    "city_id": "35000",
    "neighborhood_id": "6295",
    "neighborhood_name": "Greater Eastwood",
    "state_code": "TX"
  },
  "6296": {
    "city_id": "35000",
    "neighborhood_id": "6296",
    "neighborhood_name": "Greater Fifth Ward",
    "state_code": "TX"
  },
  "6297": {
    "city_id": "35000",
    "neighborhood_id": "6297",
    "neighborhood_name": "Greater Fondren Southwest",
    "state_code": "TX"
  },
  "6298": {
    "city_id": "35000",
    "neighborhood_id": "6298",
    "neighborhood_name": "Greater Greenspoint",
    "state_code": "TX"
  },
  "6299": {
    "city_id": "35000",
    "neighborhood_id": "6299",
    "neighborhood_name": "Greater Heights",
    "state_code": "TX"
  },
  "6300": {
    "city_id": "35000",
    "neighborhood_id": "6300",
    "neighborhood_name": "Greater Hobby Area",
    "state_code": "TX"
  },
  "6301": {
    "city_id": "35000",
    "neighborhood_id": "6301",
    "neighborhood_name": "Greater Inwood",
    "state_code": "TX"
  },
  "6302": {
    "city_id": "35000",
    "neighborhood_id": "6302",
    "neighborhood_name": "Greater Third Ward",
    "state_code": "TX"
  },
  "6303": {
    "city_id": "35000",
    "neighborhood_id": "6303",
    "neighborhood_name": "Greenway- Upper Kirby",
    "state_code": "TX"
  },
  "6304": {
    "city_id": "35000",
    "neighborhood_id": "6304",
    "neighborhood_name": "Gulfgate- Pine Valley",
    "state_code": "TX"
  },
  "6305": {
    "city_id": "35000",
    "neighborhood_id": "6305",
    "neighborhood_name": "Gulfton",
    "state_code": "TX"
  },
  "6306": {
    "city_id": "35000",
    "neighborhood_id": "6306",
    "neighborhood_name": "Harrisburg- Manchester",
    "state_code": "TX"
  },
  "6307": {
    "city_id": "35000",
    "neighborhood_id": "6307",
    "neighborhood_name": "Hidden Valley",
    "state_code": "TX"
  },
  "6308": {
    "city_id": "35000",
    "neighborhood_id": "6308",
    "neighborhood_name": "Hunterwood",
    "state_code": "TX"
  },
  "6309": {
    "city_id": "35000",
    "neighborhood_id": "6309",
    "neighborhood_name": "IAH Airport Area",
    "state_code": "TX"
  },
  "6310": {
    "city_id": "35000",
    "neighborhood_id": "6310",
    "neighborhood_name": "Independence Heights",
    "state_code": "TX"
  },
  "6311": {
    "city_id": "35000",
    "neighborhood_id": "6311",
    "neighborhood_name": "Kashmere Gardens",
    "state_code": "TX"
  },
  "6312": {
    "city_id": "35000",
    "neighborhood_id": "6312",
    "neighborhood_name": "Kingwood",
    "state_code": "TX"
  },
  "6313": {
    "city_id": "35000",
    "neighborhood_id": "6313",
    "neighborhood_name": "Lake Houston",
    "state_code": "TX"
  },
  "6314": {
    "city_id": "35000",
    "neighborhood_id": "6314",
    "neighborhood_name": "Langwood",
    "state_code": "TX"
  },
  "6315": {
    "city_id": "35000",
    "neighborhood_id": "6315",
    "neighborhood_name": "Lawndale- Wayside",
    "state_code": "TX"
  },
  "6316": {
    "city_id": "35000",
    "neighborhood_id": "6316",
    "neighborhood_name": "Lazy Brook- Timbergrove",
    "state_code": "TX"
  },
  "6317": {
    "city_id": "35000",
    "neighborhood_id": "6317",
    "neighborhood_name": "MacGregor",
    "state_code": "TX"
  },
  "6318": {
    "city_id": "35000",
    "neighborhood_id": "6318",
    "neighborhood_name": "Magnolia Park",
    "state_code": "TX"
  },
  "6319": {
    "city_id": "35000",
    "neighborhood_id": "6319",
    "neighborhood_name": "Meadowbrook- Allendale",
    "state_code": "TX"
  },
  "6320": {
    "city_id": "35000",
    "neighborhood_id": "6320",
    "neighborhood_name": "Med Center",
    "state_code": "TX"
  },
  "6321": {
    "city_id": "35000",
    "neighborhood_id": "6321",
    "neighborhood_name": "Memorial",
    "state_code": "TX"
  },
  "6322": {
    "city_id": "35000",
    "neighborhood_id": "6322",
    "neighborhood_name": "Midtown",
    "state_code": "TX"
  },
  "6323": {
    "city_id": "35000",
    "neighborhood_id": "6323",
    "neighborhood_name": "Minnetex",
    "state_code": "TX"
  },
  "6324": {
    "city_id": "35000",
    "neighborhood_id": "6324",
    "neighborhood_name": "Meyerland Area",
    "state_code": "TX"
  },
  "6325": {
    "city_id": "35000",
    "neighborhood_id": "6325",
    "neighborhood_name": "Neartown- Montrose",
    "state_code": "TX"
  },
  "6326": {
    "city_id": "35000",
    "neighborhood_id": "6326",
    "neighborhood_name": "Northshore",
    "state_code": "TX"
  },
  "6327": {
    "city_id": "35000",
    "neighborhood_id": "6327",
    "neighborhood_name": "Northside Village",
    "state_code": "TX"
  },
  "6328": {
    "city_id": "35000",
    "neighborhood_id": "6328",
    "neighborhood_name": "Northside- Northline",
    "state_code": "TX"
  },
  "6329": {
    "city_id": "35000",
    "neighborhood_id": "6329",
    "neighborhood_name": "Oak forest- Garden Oaks",
    "state_code": "TX"
  },
  "6330": {
    "city_id": "35000",
    "neighborhood_id": "6330",
    "neighborhood_name": "OST- South Union",
    "state_code": "TX"
  },
  "6331": {
    "city_id": "35000",
    "neighborhood_id": "6331",
    "neighborhood_name": "Park Place",
    "state_code": "TX"
  },
  "6332": {
    "city_id": "35000",
    "neighborhood_id": "6332",
    "neighborhood_name": "Pecan Park",
    "state_code": "TX"
  },
  "6333": {
    "city_id": "35000",
    "neighborhood_id": "6333",
    "neighborhood_name": "Pleasantville Area",
    "state_code": "TX"
  },
  "6334": {
    "city_id": "35000",
    "neighborhood_id": "6334",
    "neighborhood_name": "Second Ward",
    "state_code": "TX"
  },
  "6335": {
    "city_id": "35000",
    "neighborhood_id": "6335",
    "neighborhood_name": "Settagast",
    "state_code": "TX"
  },
  "6336": {
    "city_id": "35000",
    "neighborhood_id": "6336",
    "neighborhood_name": "Sharpstown",
    "state_code": "TX"
  },
  "6337": {
    "city_id": "35000",
    "neighborhood_id": "6337",
    "neighborhood_name": "South Acres- Crestmont Park",
    "state_code": "TX"
  },
  "6338": {
    "city_id": "35000",
    "neighborhood_id": "6338",
    "neighborhood_name": "South Main",
    "state_code": "TX"
  },
  "6339": {
    "city_id": "35000",
    "neighborhood_id": "6339",
    "neighborhood_name": "South Park",
    "state_code": "TX"
  },
  "6340": {
    "city_id": "35000",
    "neighborhood_id": "6340",
    "neighborhood_name": "Southbelt- Ellington",
    "state_code": "TX"
  },
  "6341": {
    "city_id": "35000",
    "neighborhood_id": "6341",
    "neighborhood_name": "Spring Branch Central",
    "state_code": "TX"
  },
  "6342": {
    "city_id": "35000",
    "neighborhood_id": "6342",
    "neighborhood_name": "Spring Branch East",
    "state_code": "TX"
  },
  "6343": {
    "city_id": "35000",
    "neighborhood_id": "6343",
    "neighborhood_name": "Spring Branch West",
    "state_code": "TX"
  },
  "6344": {
    "city_id": "35000",
    "neighborhood_id": "6344",
    "neighborhood_name": "Spring Shadows",
    "state_code": "TX"
  },
  "6345": {
    "city_id": "35000",
    "neighborhood_id": "6345",
    "neighborhood_name": "Sunnyside",
    "state_code": "TX"
  },
  "6346": {
    "city_id": "35000",
    "neighborhood_id": "6346",
    "neighborhood_name": "Trinity- Houston Gardens",
    "state_code": "TX"
  },
  "6347": {
    "city_id": "35000",
    "neighborhood_id": "6347",
    "neighborhood_name": "University Place",
    "state_code": "TX"
  },
  "6348": {
    "city_id": "35000",
    "neighborhood_id": "6348",
    "neighborhood_name": "Washington Ave.- Memorial Park",
    "state_code": "TX"
  },
  "6349": {
    "city_id": "35000",
    "neighborhood_id": "6349",
    "neighborhood_name": "Westbranch",
    "state_code": "TX"
  },
  "6350": {
    "city_id": "35000",
    "neighborhood_id": "6350",
    "neighborhood_name": "Westbury",
    "state_code": "TX"
  },
  "6351": {
    "city_id": "35000",
    "neighborhood_id": "6351",
    "neighborhood_name": "Westchase",
    "state_code": "TX"
  },
  "6352": {
    "city_id": "35000",
    "neighborhood_id": "6352",
    "neighborhood_name": "Westwood",
    "state_code": "TX"
  },
  "6353": {
    "city_id": "35000",
    "neighborhood_id": "6353",
    "neighborhood_name": "Willow Meadows- Willowbend Area",
    "state_code": "TX"
  },
  "6354": {
    "city_id": "35000",
    "neighborhood_id": "6354",
    "neighborhood_name": "Willowbrook",
    "state_code": "TX"
  },
  "6355": {
    "city_id": "35000",
    "neighborhood_id": "6355",
    "neighborhood_name": "Woodlake- Briar Meadow",
    "state_code": "TX"
  },
  "6740": {
    "city_id": "05210",
    "neighborhood_id": "6740",
    "neighborhood_name": "Bride Trails",
    "state_code": "WA"
  },
  "6741": {
    "city_id": "05210",
    "neighborhood_id": "6741",
    "neighborhood_name": "Crossroads",
    "state_code": "WA"
  },
  "6742": {
    "city_id": "05210",
    "neighborhood_id": "6742",
    "neighborhood_name": "Eastgate - Cougar Mountain",
    "state_code": "WA"
  },
  "6743": {
    "city_id": "05210",
    "neighborhood_id": "6743",
    "neighborhood_name": "Factoria",
    "state_code": "WA"
  },
  "6744": {
    "city_id": "05210",
    "neighborhood_id": "6744",
    "neighborhood_name": "Newport",
    "state_code": "WA"
  },
  "6745": {
    "city_id": "05210",
    "neighborhood_id": "6745",
    "neighborhood_name": "Northeast Bellevue",
    "state_code": "WA"
  },
  "6746": {
    "city_id": "05210",
    "neighborhood_id": "6746",
    "neighborhood_name": "Northwest Bellevue",
    "state_code": "WA"
  },
  "6747": {
    "city_id": "05210",
    "neighborhood_id": "6747",
    "neighborhood_name": "Sammamish- East Lake Hills",
    "state_code": "WA"
  },
  "6748": {
    "city_id": "05210",
    "neighborhood_id": "6748",
    "neighborhood_name": "Somerset",
    "state_code": "WA"
  },
  "6749": {
    "city_id": "05210",
    "neighborhood_id": "6749",
    "neighborhood_name": "West Bellevue",
    "state_code": "WA"
  },
  "6750": {
    "city_id": "05210",
    "neighborhood_id": "6750",
    "neighborhood_name": "West Lake Hills",
    "state_code": "WA"
  },
  "6751": {
    "city_id": "05210",
    "neighborhood_id": "6751",
    "neighborhood_name": "Wilburton",
    "state_code": "WA"
  },
  "6752": {
    "city_id": "05210",
    "neighborhood_id": "6752",
    "neighborhood_name": "Woodbridge",
    "state_code": "WA"
  },
  "6776": {
    "city_id": "33805",
    "neighborhood_id": "6776",
    "neighborhood_name": "Gilman",
    "state_code": "WA"
  },
  "6777": {
    "city_id": "33805",
    "neighborhood_id": "6777",
    "neighborhood_name": "I-90",
    "state_code": "WA"
  },
  "6778": {
    "city_id": "33805",
    "neighborhood_id": "6778",
    "neighborhood_name": "Issaquah Highlands",
    "state_code": "WA"
  },
  "6779": {
    "city_id": "33805",
    "neighborhood_id": "6779",
    "neighborhood_name": "Lake Tradition",
    "state_code": "WA"
  },
  "6780": {
    "city_id": "33805",
    "neighborhood_id": "6780",
    "neighborhood_name": "Montreux",
    "state_code": "WA"
  },
  "6781": {
    "city_id": "33805",
    "neighborhood_id": "6781",
    "neighborhood_name": "Newport",
    "state_code": "WA"
  },
  "6782": {
    "city_id": "33805",
    "neighborhood_id": "6782",
    "neighborhood_name": "North Issaquah",
    "state_code": "WA"
  },
  "6783": {
    "city_id": "33805",
    "neighborhood_id": "6783",
    "neighborhood_name": "Olde Town",
    "state_code": "WA"
  },
  "6784": {
    "city_id": "33805",
    "neighborhood_id": "6784",
    "neighborhood_name": "Park Pointe",
    "state_code": "WA"
  },
  "6785": {
    "city_id": "33805",
    "neighborhood_id": "6785",
    "neighborhood_name": "Providence Point",
    "state_code": "WA"
  },
  "6786": {
    "city_id": "33805",
    "neighborhood_id": "6786",
    "neighborhood_name": "Squak Mountain",
    "state_code": "WA"
  },
  "6787": {
    "city_id": "33805",
    "neighborhood_id": "6787",
    "neighborhood_name": "Sycamore",
    "state_code": "WA"
  },
  "6788": {
    "city_id": "33805",
    "neighborhood_id": "6788",
    "neighborhood_name": "Talus",
    "state_code": "WA"
  },
  "6789": {
    "city_id": "33805",
    "neighborhood_id": "6789",
    "neighborhood_name": "Tibbetts Creek Valley",
    "state_code": "WA"
  },
  "6803": {
    "city_id": "63000",
    "neighborhood_id": "6803",
    "neighborhood_name": "Adams",
    "state_code": "WA"
  },
  "6804": {
    "city_id": "63000",
    "neighborhood_id": "6804",
    "neighborhood_name": "Alki",
    "state_code": "WA"
  },
  "6805": {
    "city_id": "63000",
    "neighborhood_id": "6805",
    "neighborhood_name": "Arbor Heights",
    "state_code": "WA"
  },
  "6806": {
    "city_id": "63000",
    "neighborhood_id": "6806",
    "neighborhood_name": "Atlantic",
    "state_code": "WA"
  },
  "6807": {
    "city_id": "63000",
    "neighborhood_id": "6807",
    "neighborhood_name": "Belltown",
    "state_code": "WA"
  },
  "6808": {
    "city_id": "63000",
    "neighborhood_id": "6808",
    "neighborhood_name": "Bitter Lake",
    "state_code": "WA"
  },
  "6809": {
    "city_id": "63000",
    "neighborhood_id": "6809",
    "neighborhood_name": "Briarcliff",
    "state_code": "WA"
  },
  "6810": {
    "city_id": "63000",
    "neighborhood_id": "6810",
    "neighborhood_name": "Brighton",
    "state_code": "WA"
  },
  "6811": {
    "city_id": "63000",
    "neighborhood_id": "6811",
    "neighborhood_name": "Broadview",
    "state_code": "WA"
  },
  "6812": {
    "city_id": "63000",
    "neighborhood_id": "6812",
    "neighborhood_name": "Broadway",
    "state_code": "WA"
  },
  "6813": {
    "city_id": "63000",
    "neighborhood_id": "6813",
    "neighborhood_name": "Bryant",
    "state_code": "WA"
  },
  "6814": {
    "city_id": "63000",
    "neighborhood_id": "6814",
    "neighborhood_name": "Cedar Heights",
    "state_code": "WA"
  },
  "6815": {
    "city_id": "63000",
    "neighborhood_id": "6815",
    "neighborhood_name": "Central Business District",
    "state_code": "WA"
  },
  "6816": {
    "city_id": "63000",
    "neighborhood_id": "6816",
    "neighborhood_name": "Columbia City",
    "state_code": "WA"
  },
  "6817": {
    "city_id": "63000",
    "neighborhood_id": "6817",
    "neighborhood_name": "Dunlap",
    "state_code": "WA"
  },
  "6818": {
    "city_id": "63000",
    "neighborhood_id": "6818",
    "neighborhood_name": "East Queen Anne",
    "state_code": "WA"
  },
  "6819": {
    "city_id": "63000",
    "neighborhood_id": "6819",
    "neighborhood_name": "Eastlake",
    "state_code": "WA"
  },
  "6820": {
    "city_id": "63000",
    "neighborhood_id": "6820",
    "neighborhood_name": "Fairmount Park",
    "state_code": "WA"
  },
  "6821": {
    "city_id": "63000",
    "neighborhood_id": "6821",
    "neighborhood_name": "Fauntleroy",
    "state_code": "WA"
  },
  "6822": {
    "city_id": "63000",
    "neighborhood_id": "6822",
    "neighborhood_name": "Fremont",
    "state_code": "WA"
  },
  "6823": {
    "city_id": "63000",
    "neighborhood_id": "6823",
    "neighborhood_name": "Gatewood",
    "state_code": "WA"
  },
  "6824": {
    "city_id": "63000",
    "neighborhood_id": "6824",
    "neighborhood_name": "Genesee",
    "state_code": "WA"
  },
  "6825": {
    "city_id": "63000",
    "neighborhood_id": "6825",
    "neighborhood_name": "Georgetown",
    "state_code": "WA"
  },
  "6826": {
    "city_id": "63000",
    "neighborhood_id": "6826",
    "neighborhood_name": "Green Lake",
    "state_code": "WA"
  },
  "6827": {
    "city_id": "63000",
    "neighborhood_id": "6827",
    "neighborhood_name": "Greenwood",
    "state_code": "WA"
  },
  "6828": {
    "city_id": "63000",
    "neighborhood_id": "6828",
    "neighborhood_name": "Haller Lake",
    "state_code": "WA"
  },
  "6829": {
    "city_id": "63000",
    "neighborhood_id": "6829",
    "neighborhood_name": "Harbor Island",
    "state_code": "WA"
  },
  "6830": {
    "city_id": "63000",
    "neighborhood_id": "6830",
    "neighborhood_name": "Harrison- Denny Blaine",
    "state_code": "WA"
  },
  "6831": {
    "city_id": "63000",
    "neighborhood_id": "6831",
    "neighborhood_name": "High Point",
    "state_code": "WA"
  },
  "6832": {
    "city_id": "63000",
    "neighborhood_id": "6832",
    "neighborhood_name": "Highland Park",
    "state_code": "WA"
  },
  "6833": {
    "city_id": "63000",
    "neighborhood_id": "6833",
    "neighborhood_name": "Holly Park",
    "state_code": "WA"
  },
  "6834": {
    "city_id": "63000",
    "neighborhood_id": "6834",
    "neighborhood_name": "Industrial District East",
    "state_code": "WA"
  },
  "6835": {
    "city_id": "63000",
    "neighborhood_id": "6835",
    "neighborhood_name": "Industrial District",
    "state_code": "WA"
  },
  "6836": {
    "city_id": "63000",
    "neighborhood_id": "6836",
    "neighborhood_name": "Interbay",
    "state_code": "WA"
  },
  "6837": {
    "city_id": "63000",
    "neighborhood_id": "6837",
    "neighborhood_name": "International District",
    "state_code": "WA"
  },
  "6838": {
    "city_id": "63000",
    "neighborhood_id": "6838",
    "neighborhood_name": "Laurelhurst",
    "state_code": "WA"
  },
  "6839": {
    "city_id": "63000",
    "neighborhood_id": "6839",
    "neighborhood_name": "Lawton Park",
    "state_code": "WA"
  },
  "6840": {
    "city_id": "63000",
    "neighborhood_id": "6840",
    "neighborhood_name": "Leschi",
    "state_code": "WA"
  },
  "6841": {
    "city_id": "63000",
    "neighborhood_id": "6841",
    "neighborhood_name": "Lower Queen Anne",
    "state_code": "WA"
  },
  "6842": {
    "city_id": "63000",
    "neighborhood_id": "6842",
    "neighborhood_name": "Loyal Heights",
    "state_code": "WA"
  },
  "6843": {
    "city_id": "63000",
    "neighborhood_id": "6843",
    "neighborhood_name": "Madison Park",
    "state_code": "WA"
  },
  "6844": {
    "city_id": "63000",
    "neighborhood_id": "6844",
    "neighborhood_name": "Madrona",
    "state_code": "WA"
  },
  "6845": {
    "city_id": "63000",
    "neighborhood_id": "6845",
    "neighborhood_name": "Mann",
    "state_code": "WA"
  },
  "6846": {
    "city_id": "63000",
    "neighborhood_id": "6846",
    "neighborhood_name": "Maple Leaf",
    "state_code": "WA"
  },
  "6847": {
    "city_id": "63000",
    "neighborhood_id": "6847",
    "neighborhood_name": "Matthews Beach",
    "state_code": "WA"
  },
  "6848": {
    "city_id": "63000",
    "neighborhood_id": "6848",
    "neighborhood_name": "Meadowbrook",
    "state_code": "WA"
  },
  "6849": {
    "city_id": "63000",
    "neighborhood_id": "6849",
    "neighborhood_name": "Mid-Beacon Hill",
    "state_code": "WA"
  },
  "6850": {
    "city_id": "63000",
    "neighborhood_id": "6850",
    "neighborhood_name": "Minor",
    "state_code": "WA"
  },
  "6851": {
    "city_id": "63000",
    "neighborhood_id": "6851",
    "neighborhood_name": "Montlake",
    "state_code": "WA"
  },
  "6852": {
    "city_id": "63000",
    "neighborhood_id": "6852",
    "neighborhood_name": "Mt. Baker",
    "state_code": "WA"
  },
  "6853": {
    "city_id": "63000",
    "neighborhood_id": "6853",
    "neighborhood_name": "North Admiral",
    "state_code": "WA"
  },
  "6854": {
    "city_id": "63000",
    "neighborhood_id": "6854",
    "neighborhood_name": "North Beach- Blue Ridge",
    "state_code": "WA"
  },
  "6855": {
    "city_id": "63000",
    "neighborhood_id": "6855",
    "neighborhood_name": "North Beacon Hill",
    "state_code": "WA"
  },
  "6856": {
    "city_id": "63000",
    "neighborhood_id": "6856",
    "neighborhood_name": "North College Park",
    "state_code": "WA"
  },
  "6857": {
    "city_id": "63000",
    "neighborhood_id": "6857",
    "neighborhood_name": "North Delridge",
    "state_code": "WA"
  },
  "6858": {
    "city_id": "63000",
    "neighborhood_id": "6858",
    "neighborhood_name": "North Queen Anne",
    "state_code": "WA"
  },
  "6859": {
    "city_id": "63000",
    "neighborhood_id": "6859",
    "neighborhood_name": "Olympic Hills",
    "state_code": "WA"
  },
  "6860": {
    "city_id": "63000",
    "neighborhood_id": "6860",
    "neighborhood_name": "Phinney Ridge",
    "state_code": "WA"
  },
  "6861": {
    "city_id": "63000",
    "neighborhood_id": "6861",
    "neighborhood_name": "Pike Market",
    "state_code": "WA"
  },
  "6862": {
    "city_id": "63000",
    "neighborhood_id": "6862",
    "neighborhood_name": "Pinehurst",
    "state_code": "WA"
  },
  "6863": {
    "city_id": "63000",
    "neighborhood_id": "6863",
    "neighborhood_name": "Pioneer Square",
    "state_code": "WA"
  },
  "6864": {
    "city_id": "63000",
    "neighborhood_id": "6864",
    "neighborhood_name": "Portage Bay",
    "state_code": "WA"
  },
  "6865": {
    "city_id": "63000",
    "neighborhood_id": "6865",
    "neighborhood_name": "Rainier Beach",
    "state_code": "WA"
  },
  "6866": {
    "city_id": "63000",
    "neighborhood_id": "6866",
    "neighborhood_name": "Rainier View",
    "state_code": "WA"
  },
  "6867": {
    "city_id": "63000",
    "neighborhood_id": "6867",
    "neighborhood_name": "Ravenna",
    "state_code": "WA"
  },
  "6868": {
    "city_id": "63000",
    "neighborhood_id": "6868",
    "neighborhood_name": "Riverview",
    "state_code": "WA"
  },
  "6869": {
    "city_id": "63000",
    "neighborhood_id": "6869",
    "neighborhood_name": "Roosevelt",
    "state_code": "WA"
  },
  "6870": {
    "city_id": "63000",
    "neighborhood_id": "6870",
    "neighborhood_name": "Roxhill",
    "state_code": "WA"
  },
  "6871": {
    "city_id": "63000",
    "neighborhood_id": "6871",
    "neighborhood_name": "Sand Point",
    "state_code": "WA"
  },
  "6872": {
    "city_id": "63000",
    "neighborhood_id": "6872",
    "neighborhood_name": "Seaview",
    "state_code": "WA"
  },
  "6873": {
    "city_id": "63000",
    "neighborhood_id": "6873",
    "neighborhood_name": "Seward Park",
    "state_code": "WA"
  },
  "6874": {
    "city_id": "63000",
    "neighborhood_id": "6874",
    "neighborhood_name": "South Beacon Hill",
    "state_code": "WA"
  },
  "6875": {
    "city_id": "63000",
    "neighborhood_id": "6875",
    "neighborhood_name": "South Delridge",
    "state_code": "WA"
  },
  "6876": {
    "city_id": "63000",
    "neighborhood_id": "6876",
    "neighborhood_name": "South Park",
    "state_code": "WA"
  },
  "6877": {
    "city_id": "63000",
    "neighborhood_id": "6877",
    "neighborhood_name": "South-Lake Union",
    "state_code": "WA"
  },
  "6878": {
    "city_id": "63000",
    "neighborhood_id": "6878",
    "neighborhood_name": "Southeast Magnolia",
    "state_code": "WA"
  },
  "6879": {
    "city_id": "63000",
    "neighborhood_id": "6879",
    "neighborhood_name": "Stevens",
    "state_code": "WA"
  },
  "6880": {
    "city_id": "63000",
    "neighborhood_id": "6880",
    "neighborhood_name": "Sunset Hill",
    "state_code": "WA"
  },
  "6881": {
    "city_id": "63000",
    "neighborhood_id": "6881",
    "neighborhood_name": "University District",
    "state_code": "WA"
  },
  "6882": {
    "city_id": "63000",
    "neighborhood_id": "6882",
    "neighborhood_name": "Victory Heights",
    "state_code": "WA"
  },
  "6883": {
    "city_id": "63000",
    "neighborhood_id": "6883",
    "neighborhood_name": "View Ridge",
    "state_code": "WA"
  },
  "6884": {
    "city_id": "63000",
    "neighborhood_id": "6884",
    "neighborhood_name": "Wallingford",
    "state_code": "WA"
  },
  "6885": {
    "city_id": "63000",
    "neighborhood_id": "6885",
    "neighborhood_name": "Wedgewood",
    "state_code": "WA"
  },
  "6886": {
    "city_id": "63000",
    "neighborhood_id": "6886",
    "neighborhood_name": "West Queen Anne",
    "state_code": "WA"
  },
  "6887": {
    "city_id": "63000",
    "neighborhood_id": "6887",
    "neighborhood_name": "West Woodland",
    "state_code": "WA"
  },
  "6888": {
    "city_id": "63000",
    "neighborhood_id": "6888",
    "neighborhood_name": "Westlake",
    "state_code": "WA"
  },
  "6889": {
    "city_id": "63000",
    "neighborhood_id": "6889",
    "neighborhood_name": "Whittier Heights",
    "state_code": "WA"
  },
  "6890": {
    "city_id": "63000",
    "neighborhood_id": "6890",
    "neighborhood_name": "Windermere",
    "state_code": "WA"
  },
  "6891": {
    "city_id": "63000",
    "neighborhood_id": "6891",
    "neighborhood_name": "Yesler Terrace",
    "state_code": "WA"
  },
  "7264": {
    "city_id": "43000",
    "neighborhood_id": "7264",
    "neighborhood_name": "University Park Estates",
    "state_code": "CA"
  },
  "804": {
    "city_id": "43000",
    "neighborhood_id": "804",
    "neighborhood_name": "Artcraft Manor",
    "state_code": "CA"
  },
  "805": {
    "city_id": "43000",
    "neighborhood_id": "805",
    "neighborhood_name": "Belmont Heights",
    "state_code": "CA"
  },
  "806": {
    "city_id": "43000",
    "neighborhood_id": "806",
    "neighborhood_name": "Belmont Shore",
    "state_code": "CA"
  },
  "807": {
    "city_id": "43000",
    "neighborhood_id": "807",
    "neighborhood_name": "Bixby Hill",
    "state_code": "CA"
  },
  "808": {
    "city_id": "43000",
    "neighborhood_id": "808",
    "neighborhood_name": "Cal Heights-Bixby Knolls-Los Cerritos",
    "state_code": "CA"
  },
  "809": {
    "city_id": "43000",
    "neighborhood_id": "809",
    "neighborhood_name": "Carson Park",
    "state_code": "CA"
  },
  "810": {
    "city_id": "43000",
    "neighborhood_id": "810",
    "neighborhood_name": "Downtown Long Beach",
    "state_code": "CA"
  },
  "811": {
    "city_id": "43000",
    "neighborhood_id": "811",
    "neighborhood_name": "Eastside",
    "state_code": "CA"
  },
  "812": {
    "city_id": "43000",
    "neighborhood_id": "812",
    "neighborhood_name": "El Dorado",
    "state_code": "CA"
  },
  "813": {
    "city_id": "43000",
    "neighborhood_id": "813",
    "neighborhood_name": "Lakewood Mutual",
    "state_code": "CA"
  },
  "814": {
    "city_id": "43000",
    "neighborhood_id": "814",
    "neighborhood_name": "Lakewood Village",
    "state_code": "CA"
  },
  "815": {
    "city_id": "43000",
    "neighborhood_id": "815",
    "neighborhood_name": "Los Altos",
    "state_code": "CA"
  },
  "816": {
    "city_id": "43000",
    "neighborhood_id": "816",
    "neighborhood_name": "Marina Pacifica",
    "state_code": "CA"
  },
  "817": {
    "city_id": "43000",
    "neighborhood_id": "817",
    "neighborhood_name": "Old Lakewood City",
    "state_code": "CA"
  },
  "818": {
    "city_id": "43000",
    "neighborhood_id": "818",
    "neighborhood_name": "Park Estates",
    "state_code": "CA"
  },
  "819": {
    "city_id": "43000",
    "neighborhood_id": "819",
    "neighborhood_name": "Plaza",
    "state_code": "CA"
  },
  "820": {
    "city_id": "43000",
    "neighborhood_id": "820",
    "neighborhood_name": "Poly High",
    "state_code": "CA"
  },
  "821": {
    "city_id": "43000",
    "neighborhood_id": "821",
    "neighborhood_name": "Signal Hill",
    "state_code": "CA"
  },
  "822": {
    "city_id": "43000",
    "neighborhood_id": "822",
    "neighborhood_name": "South of Conant",
    "state_code": "CA"
  },
  "823": {
    "city_id": "43000",
    "neighborhood_id": "823",
    "neighborhood_name": "Stratford Square",
    "state_code": "CA"
  },
  "824": {
    "city_id": "43000",
    "neighborhood_id": "824",
    "neighborhood_name": "West Side",
    "state_code": "CA"
  },
  "825": {
    "city_id": "43000",
    "neighborhood_id": "825",
    "neighborhood_name": "Wrigley",
    "state_code": "CA"
  },
  "861": {
    "city_id": "49670",
    "neighborhood_id": "861",
    "neighborhood_name": "Blossom Valley",
    "state_code": "CA"
  },
  "862": {
    "city_id": "49670",
    "neighborhood_id": "862",
    "neighborhood_name": "Castro City",
    "state_code": "CA"
  },
  "863": {
    "city_id": "49670",
    "neighborhood_id": "863",
    "neighborhood_name": "Country Club",
    "state_code": "CA"
  },
  "864": {
    "city_id": "49670",
    "neighborhood_id": "864",
    "neighborhood_name": "Cuernavaca",
    "state_code": "CA"
  },
  "865": {
    "city_id": "49670",
    "neighborhood_id": "865",
    "neighborhood_name": "Cuesta Park",
    "state_code": "CA"
  },
  "866": {
    "city_id": "49670",
    "neighborhood_id": "866",
    "neighborhood_name": "Jackson Park",
    "state_code": "CA"
  },
  "867": {
    "city_id": "49670",
    "neighborhood_id": "867",
    "neighborhood_name": "Martens-Carmelita",
    "state_code": "CA"
  },
  "868": {
    "city_id": "49670",
    "neighborhood_id": "868",
    "neighborhood_name": "Monta Loma",
    "state_code": "CA"
  },
  "869": {
    "city_id": "49670",
    "neighborhood_id": "869",
    "neighborhood_name": "North Los Altos",
    "state_code": "CA"
  },
  "870": {
    "city_id": "49670",
    "neighborhood_id": "870",
    "neighborhood_name": "North Whisman",
    "state_code": "CA"
  },
  "871": {
    "city_id": "49670",
    "neighborhood_id": "871",
    "neighborhood_name": "Old Mountain View",
    "state_code": "CA"
  },
  "872": {
    "city_id": "49670",
    "neighborhood_id": "872",
    "neighborhood_name": "Rex Manor",
    "state_code": "CA"
  },
  "873": {
    "city_id": "49670",
    "neighborhood_id": "873",
    "neighborhood_name": "Shoreline West",
    "state_code": "CA"
  },
  "874": {
    "city_id": "49670",
    "neighborhood_id": "874",
    "neighborhood_name": "South Los Altos",
    "state_code": "CA"
  },
  "875": {
    "city_id": "49670",
    "neighborhood_id": "875",
    "neighborhood_name": "The Crossings",
    "state_code": "CA"
  },
  "876": {
    "city_id": "49670",
    "neighborhood_id": "876",
    "neighborhood_name": "Waverly Park",
    "state_code": "CA"
  },
  "877": {
    "city_id": "49670",
    "neighborhood_id": "877",
    "neighborhood_name": "Whisman Station",
    "state_code": "CA"
  },
  "878": {
    "city_id": "49670",
    "neighborhood_id": "878",
    "neighborhood_name": "Woodland Acres - The Highlands",
    "state_code": "CA"
  },
  "965": {
    "city_id": "55282",
    "neighborhood_id": "965",
    "neighborhood_name": "Barron Park",
    "state_code": "CA"
  },
  "966": {
    "city_id": "55282",
    "neighborhood_id": "966",
    "neighborhood_name": "Charleston Gardens",
    "state_code": "CA"
  },
  "967": {
    "city_id": "55282",
    "neighborhood_id": "967",
    "neighborhood_name": "Charleston Meadow",
    "state_code": "CA"
  },
  "968": {
    "city_id": "55282",
    "neighborhood_id": "968",
    "neighborhood_name": "College Terrace",
    "state_code": "CA"
  },
  "969": {
    "city_id": "55282",
    "neighborhood_id": "969",
    "neighborhood_name": "Community Center",
    "state_code": "CA"
  },
  "970": {
    "city_id": "55282",
    "neighborhood_id": "970",
    "neighborhood_name": "Crescent Park",
    "state_code": "CA"
  },
  "971": {
    "city_id": "55282",
    "neighborhood_id": "971",
    "neighborhood_name": "Downtown North",
    "state_code": "CA"
  },
  "972": {
    "city_id": "55282",
    "neighborhood_id": "972",
    "neighborhood_name": "Duveneck-St. Francis",
    "state_code": "CA"
  },
  "973": {
    "city_id": "55282",
    "neighborhood_id": "973",
    "neighborhood_name": "Esther Clark Park",
    "state_code": "CA"
  },
  "974": {
    "city_id": "55282",
    "neighborhood_id": "974",
    "neighborhood_name": "Evergreen Park",
    "state_code": "CA"
  },
  "975": {
    "city_id": "55282",
    "neighborhood_id": "975",
    "neighborhood_name": "Fairmeadow",
    "state_code": "CA"
  },
  "976": {
    "city_id": "55282",
    "neighborhood_id": "976",
    "neighborhood_name": "Greater Miranda",
    "state_code": "CA"
  },
  "977": {
    "city_id": "55282",
    "neighborhood_id": "977",
    "neighborhood_name": "Green Acres",
    "state_code": "CA"
  },
  "978": {
    "city_id": "55282",
    "neighborhood_id": "978",
    "neighborhood_name": "Greenmeadow",
    "state_code": "CA"
  },
  "979": {
    "city_id": "55282",
    "neighborhood_id": "979",
    "neighborhood_name": "Leland Manor",
    "state_code": "CA"
  },
  "980": {
    "city_id": "55282",
    "neighborhood_id": "980",
    "neighborhood_name": "Midtown",
    "state_code": "CA"
  },
  "981": {
    "city_id": "55282",
    "neighborhood_id": "981",
    "neighborhood_name": "Old Palo Alto",
    "state_code": "CA"
  },
  "982": {
    "city_id": "55282",
    "neighborhood_id": "982",
    "neighborhood_name": "Palo Alto Hills",
    "state_code": "CA"
  },
  "983": {
    "city_id": "55282",
    "neighborhood_id": "983",
    "neighborhood_name": "Palo Alto Orchards",
    "state_code": "CA"
  },
  "984": {
    "city_id": "55282",
    "neighborhood_id": "984",
    "neighborhood_name": "Palo Verde",
    "state_code": "CA"
  },
  "985": {
    "city_id": "55282",
    "neighborhood_id": "985",
    "neighborhood_name": "Professorville",
    "state_code": "CA"
  },
  "986": {
    "city_id": "55282",
    "neighborhood_id": "986",
    "neighborhood_name": "Rancho",
    "state_code": "CA"
  },
  "987": {
    "city_id": "55282",
    "neighborhood_id": "987",
    "neighborhood_name": "Southgate",
    "state_code": "CA"
  },
  "988": {
    "city_id": "55282",
    "neighborhood_id": "988",
    "neighborhood_name": "St. Claire Gardens",
    "state_code": "CA"
  },
  "989": {
    "city_id": "55282",
    "neighborhood_id": "989",
    "neighborhood_name": "Stanford University",
    "state_code": "CA"
  },
  "990": {
    "city_id": "55282",
    "neighborhood_id": "990",
    "neighborhood_name": "Triple El",
    "state_code": "CA"
  },
  "991": {
    "city_id": "55282",
    "neighborhood_id": "991",
    "neighborhood_name": "University South",
    "state_code": "CA"
  },
  "992": {
    "city_id": "55282",
    "neighborhood_id": "992",
    "neighborhood_name": "Ventura",
    "state_code": "CA"
  }
}

function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
	return "<h4>"+n+"</h4><table>"+
		"<tr><td>Cities: </td><td>"+(d.cities)+"</td></tr>"+
		"<tr><td>Neighborhoods: </td><td>"+(d.neighborhoods)+"</td></tr>"+
		"</table>";
}

var stateDict = {};
Object.keys(cities).forEach(function(c){
	if(stateDict[cities[c]["state_code"]] != null){
		stateDict[cities[c]["state_code"]][0] += 1;
	}else{
		stateDict[cities[c]["state_code"]] = [1,0];
	}
});

Object.keys(neighborhoods).forEach(function(n){
	if(stateDict[neighborhoods[n]["state_code"]]){
		stateDict[neighborhoods[n]["state_code"]][1] += 1;
	}else{
		stateDict[neighborhoods[n]["state_code"]] = [0,1];
	}
});

var max = 0;
Object.keys(stateDict).forEach(function(s){
	if(stateDict[s][1] > max){
		max = stateDict[s][1];
	}
});

var sampleData ={};	
["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
"WI", "MO", "AR", "OK", "KS", "LS", "VA"]
	.forEach(function(d){ 
		if(stateDict[d]){
			var cities=stateDict[d][0], 
				neighborhoods=stateDict[d][1];
			sampleData[d]={cities:cities, neighborhoods:neighborhoods, color:d3.interpolate("#ffffcc", "#800026")(neighborhoods/max)};
		}else{
			sampleData[d]={cities:0, neighborhoods:0, color:d3.interpolate("#ffffcc", "#800026")(0)}

		}
	});
/* draw states on id #statesvg */	
uStates.draw("#statesvg", sampleData, tooltipHtml);