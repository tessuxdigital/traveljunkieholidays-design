// Packages Data - Part 1 (1 to 7)

module.exports = [
  // 1. VIETNAM (EXACT USER SPECIFICATION)
  {
    slug: 'vietnam',
    fileName: 'package-vietnam.html',
    title: 'Vietnam Wonders: Hanoi, Halong Bay & Da Nang',
    country: 'Vietnam',
    destination: 'Hanoi, Halong Bay & Da Nang, Vietnam',
    category: 'Cultural Tours',
    duration: '5 Days / 4 Nights',
    price: '$1,350',
    heroImg: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1920&q=80',
    overview: 'Discover the rich heritage and natural wonders of Vietnam on this exclusive 5-day journey. From the tree-lined boulevards and historic pagodas of Hanoi to the emerald karst waters of Halong Bay, and onward to the lantern-lit streets of Hoi An and the high-altitude Golden Bridge of Ba Na Hills.',
    highlights: [
      { icon: 'fa-solid fa-landmark-dome', title: 'Hanoi Half Day City Tour', desc: 'Ho Chi Minh Mausoleum, Tran Quoc Pagoda, Train Street, and Hoan Kiem Lake.' },
      { icon: 'fa-solid fa-ship', title: 'Halong Bay Day Cruise', desc: 'Full-day cruise through UNESCO karst formations with confirmed lunch and dinner included.' },
      { icon: 'fa-solid fa-water', title: 'Coconut Village Basket Boat', desc: 'Navigate the Bay Mau water coconut groves in iconic round bamboo spinning boats.' },
      { icon: 'fa-solid fa-fire-burner', title: 'Hoi An Ancient Town', desc: 'Charming pedestrian alleys, Japanese covered bridge, and release flower lantern boat ride.' },
      { icon: 'fa-solid fa-bridge', title: 'Golden Bridge & Cable Car', desc: 'World-record cable car to Ba Na Hills and stroll along the world-famous giant hands bridge.' }
    ],
    metrics: {
      duration: '5 Days / 4 Nights',
      groupSize: 'Private / Small Group',
      season: 'October to April',
      language: 'English Guided',
      pace: 'Active & Scenic'
    },
    itinerary: [
      {
        day: 1,
        title: 'ARRIVAL IN HANOI',
        location: 'Hanoi, Vietnam',
        transport: 'Private transfer',
        meals: 'Welcome Dinner Included',
        stay: 'Apricot Hotel Hanoi (5-Star)',
        img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
        content: 'Hanoi arrival + Hanoi Half Day City Tour. Your private transfer meets you at Noi Bai International Airport and whisks you directly to your luxury hotel. In the afternoon, set out with your dedicated private guide for an immersive exploration of the millennium-old capital, taking in sacred pagodas, historic political centers, and bustling merchant quarters.',
        places: [
          'Ho Chi Minh Mausoleum',
          'Tran Quoc Pagoda',
          'Train Street',
          'Hoan Kiem Lake'
        ]
      },
      {
        day: 2,
        title: 'HALONG BAY',
        location: 'Halong Bay, Quang Ninh, Vietnam',
        transport: 'Private Coach & Day Cruise Boat',
        meals: 'Lunch & Dinner Included',
        stay: 'Apricot Hotel Hanoi (5-Star)',
        img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
        content: 'Full-day Halong Bay day cruise. Travel via scenic expressway to the Gulf of Tonkin to embark on your cruise ship. Glide effortlessly across jade-green waters through thousands of towering limestone karsts. Explore magnificent dripstone caves, climb Ti Top Island for 360-degree panoramic bay vistas, and savor both a gourmet seafood lunch and an evening dinner aboard.',
        places: [
          'Full-day Halong Bay day cruise',
          'Sung Sot Cave',
          'Ti Top Island Lookout',
          'Lunch and Dinner Aboard'
        ]
      },
      {
        day: 3,
        title: 'DA NANG & HOI AN',
        location: 'Da Nang & Hoi An, Vietnam',
        transport: 'Fly to Da Nang & Private Vehicle',
        meals: 'Breakfast & Traditional Hoi An Dinner',
        stay: 'Anantara Hoi An Riverside Resort',
        img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
        content: 'Fly to Da Nang. Transfer to the airport for your flight to coastal central Vietnam. Upon arrival, proceed to the lush Cam Thanh Coconut Village for an authentic Basket Boat Ride. In the afternoon, delve into UNESCO-listed Hoi An Ancient Town with its yellow merchant shophouses. In the evening, step onto a wooden sampan for a tranquil Release Flower Lantern Boat Ride.',
        places: [
          'Fly to Da Nang',
          'Coconut Village Basket Boat Ride',
          'Hoi An Ancient Town',
          'Release Flower Lantern Boat Ride'
        ]
      },
      {
        day: 4,
        title: 'DA NANG – BA NA HILLS',
        location: 'Ba Na Hills, Da Nang, Vietnam',
        transport: 'Cable Car & Private Coach',
        meals: 'Breakfast & Summit Buffet Lunch',
        stay: 'Anantara Hoi An Riverside Resort',
        img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80',
        content: 'Ba Na Hills, Golden Bridge, Cable Car. Ride the Guinness World Record Cable Car scaling above lush misty rainforest waterfalls. Step out onto the Golden Bridge, suspended 1,414 meters above sea level and held aloft by giant mossy stone hands. Explore the French Village, Linh Ung Pagoda, and alpine gardens.',
        places: [
          'Ba Na Hills',
          'Golden Bridge',
          'Cable Car',
          'French Village & Fantasy Park'
        ]
      },
      {
        day: 5,
        title: 'DEPARTURE',
        location: 'Da Nang, Vietnam',
        transport: 'Private Airport Transfer',
        meals: 'Breakfast Included',
        stay: 'Hotel Check-out',
        img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
        content: 'Hotel check-out. Transfer to the airport for your return flight. Enjoy a leisurely breakfast and morning by the pool or river. Complete check-out procedures, then your private transfer delivers you comfortably to Da Nang International Airport for your journey onward.',
        places: [
          'Hotel check-out',
          'Transfer to the airport for your return flight',
          'Da Nang International Airport'
        ]
      }
    ],
    inclusions: [
      'Hotel accommodation (4 Nights in premium 5-Star resorts & boutique hotels)',
      'Airport transfers (Private round-trip airport & flight transfers)',
      'Sightseeing tours with licensed English-speaking local guides',
      'Transportation (Private air-conditioned vehicles throughout)',
      'Meals as specified (Daily breakfast, cruise lunch & dinner, Ba Na Hills buffet)',
      'Activities: Hanoi City Tour, Halong Day Cruise, Coconut Basket Boat, Lantern Boat, Cable Car & Golden Bridge'
    ],
    exclusions: [
      'International flights to/from Vietnam',
      'Vietnam entry visa fees (if applicable)',
      'Travel and medical insurance',
      'Personal expenses (beverages, laundry, souvenirs)',
      'Optional activities and services not specified in itinerary',
      'Gratuities and tips for guides and drivers'
    ]
  },

  // 2. MALDIVES
  {
    slug: 'maldives',
    fileName: 'package-maldives.html',
    title: 'Maldives Private Overwater Bliss',
    country: 'Maldives',
    destination: 'South Ari Atoll, Maldives',
    category: 'Honeymoon Packages',
    duration: '6 Days / 5 Nights',
    price: '$2,450',
    heroImg: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1920&q=80',
    overview: 'Escape to an idyllic paradise of crystal-clear turquoise lagoons, powdery white sands, and iconic overwater villas. Experience barefoot luxury, intimate champagne breakfasts over water, vibrant coral reef snorkeling, and romantic sunset yacht sails across the South Ari Atoll.',
    highlights: [
      { icon: 'fa-solid fa-water', title: 'Overwater Pool Villa', desc: 'Private plunge pool, glass-floor viewing panels, and direct lagoon access.' },
      { icon: 'fa-solid fa-sailboat', title: 'Sunset Dolphin Cruise', desc: 'Luxury catamaran sail accompanied by playful spinner dolphins and chilled champagne.' },
      { icon: 'fa-solid fa-fish-fins', title: 'House Reef Snorkeling', desc: 'Guided marine biology excursion with sea turtles, manta rays, and harmless reef sharks.' },
      { icon: 'fa-solid fa-spa', title: 'Couples Island Spa', desc: 'Relaxing overwater holistic treatment accompanied by rhythmic ocean waves.' }
    ],
    metrics: {
      duration: '6 Days / 5 Nights',
      groupSize: 'Couples / Private',
      season: 'November to April',
      language: 'English Speaking Staff',
      pace: 'Relaxed Luxury'
    },
    itinerary: [
      {
        day: 1,
        title: 'Seaplane Arrival & Overwater Villa Check-In',
        location: 'South Ari Atoll, Maldives',
        transport: 'Trans Maldivian Airways Seaplane Transfer',
        meals: 'Welcome Champagne & Canapés, 3-Course Dinner',
        stay: 'Soneva Jani / Overwater Pool Villa',
        img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
        content: 'Touch down at Velana International Airport in Malé where your resort island concierge welcomes you into the private seaplane lounge. Board your panoramic seaplane flight soaring above the iridescent atoll rings. Settle into your standalone overwater villa equipped with a private infinity plunge pool and glass floor view into the turquoise ocean.',
        places: ['Velana International Airport', 'Scenic Seaplane Flight', 'Private Overwater Villa Jetty', 'Lagoon Sunset Welcome']
      },
      {
        day: 2,
        title: 'Lagoon Relaxation & Sunset Dolphin Yacht Sail',
        location: 'South Ari Atoll',
        transport: 'Luxury Sailing Catamaran',
        meals: 'Floating Breakfast, Gourmet Lunch, Dinner',
        stay: 'Soneva Jani Overwater Pool Villa',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        content: 'Wake to breakfast served floating on trays in your private pool. Spend a sun-soaked morning swimming directly from your villa deck into the lagoon. In the late afternoon, step aboard an elegant 60ft wooden dhoni yacht for a sunset sail to witness acrobatic pods of wild spinner dolphins leaping against the golden horizon.',
        places: ['Floating Breakfast Experience', 'Turquoise Lagoon Swimming', 'Sunset Dolphin Yacht Safari', 'Sandbank Stargazing']
      },
      {
        day: 3,
        title: 'House Reef Coral Safari & Manta Ray Encounter',
        location: 'South Ari Marine Reserve',
        transport: 'Speedboat Tender',
        meals: 'Breakfast, Seafood Beach Barbecue, Dinner',
        stay: 'Soneva Jani Overwater Pool Villa',
        img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        content: 'Join the resident marine biologist on an expedition to the protected coral walls of the South Ari Atoll. Snorkel alongside graceful manta rays, green sea turtles, and kaleidoscopic schools of butterflyfish and parrotfish. Return for an afternoon of paddleboarding and beachfront relaxation.',
        places: ['South Ari Marine Protected Reef', 'Manta Ray Feeding Grounds', 'Sea Turtle Lagoon', 'Overwater Hammocks']
      },
      {
        day: 4,
        title: 'Holistic Overwater Spa & Candlelight Sandbank Dinner',
        location: 'South Ari Atoll',
        transport: 'Resort Golf Buggy / Walking',
        meals: 'Breakfast, Light Pavilion Lunch, Private Beach Dinner',
        stay: 'Soneva Jani Overwater Pool Villa',
        img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
        content: 'Indulge in a 90-minute signature couples massage in an open-sided glass-bottomed spa pavilion listening to the gentle ocean surf. As twilight arrives, be whisked away to a secluded private sandbank where a table carved into the sand awaits, illuminated by torchlight for an unforgettable 5-course seafood dinner.',
        places: ['Overwater Ayurvedic Spa', 'Private Sandbank Sanctuary', 'Torchlight Candlelit Beach', 'Open-Air Cinema Paradiso']
      },
      {
        day: 5,
        title: 'Kayaking, Coral Gardening & Underwater Dining',
        location: 'South Ari Atoll',
        transport: 'Glass-Bottom Kayak',
        meals: 'Breakfast, Underwater Dining Lunch, Degustation Dinner',
        stay: 'Soneva Jani Overwater Pool Villa',
        img: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80',
        content: 'Paddle clear glass-bottom kayaks across the sheltered atoll lagoon and participate in the resort coral regeneration initiative by planting your own coral fragment. For lunch, dine submerged five meters beneath the surface in the resort underwater restaurant surrounded by vibrant marine life.',
        places: ['Glass-Bottom Kayaking', 'Coral Nursery Reef', 'Submerged Underwater Restaurant', 'Sunset Wine Cellar Degustation']
      },
      {
        day: 6,
        title: 'Morning Lagoon Dip & Seaplane Departure',
        location: 'South Ari Atoll to Malé',
        transport: 'Scenic Return Seaplane Transfer',
        meals: 'Breakfast Included',
        stay: 'Resort Check-out',
        img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
        content: 'Enjoy a leisurely final dip in the Indian Ocean and a decadent tropical breakfast. Complete check-out before boarding your scenic return seaplane back to Malé Velana International Airport for your flight connection home.',
        places: ['Morning Lagoon Swim', 'Resort Check-out', 'Trans Maldivian Seaplane Terminal', 'Malé International Airport']
      }
    ],
    inclusions: [
      '5 Nights in Luxury Overwater Pool Villa at Soneva Jani',
      'Round-trip scenic seaplane transfers between Malé and resort',
      'Full-board gourmet dining (Daily breakfast, lunch, and dinner)',
      'Sunset Dolphin Yacht Cruise with champagne and canapés',
      'Guided marine biologist house reef snorkeling safari',
      '90-Minute Signature Couples Overwater Spa ritual',
      'Complimentary non-motorized water sports (kayaks, paddleboards, snorkel gear)'
    ],
    exclusions: [
      'International flights to/from Malé (MLE)',
      'Motorized water sports (seabob, jet skis)',
      'Premium alcoholic vintages from reserve wine cellar',
      'Personal expenses, boutique purchases, and laundry',
      'Travel and medical insurance',
      'Staff gratuities and tipping'
    ]
  },

  // 3. SANTORINI
  {
    slug: 'santorini',
    fileName: 'package-santorini.html',
    title: 'Santorini Caldera Cliffside Romance',
    country: 'Greece',
    destination: 'Oia & Imerovigli, Greece',
    category: 'Honeymoon Packages',
    duration: '7 Days / 6 Nights',
    price: '$2,190',
    heroImg: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=80',
    overview: 'Perched on the dramatic volcanic cliffs of the Aegean Sea, Santorini is the ultimate romantic escape. Stay in authentic whitewashed cave suites, admire golden sunsets over the sunken caldera, sail on private catamarans to volcanic hot springs, and taste indigenous Assyrtiko wines.',
    highlights: [
      { icon: 'fa-solid fa-hot-tub-person', title: 'Caldera Cave Suite', desc: 'Whitewashed cave architecture with private heated outdoor infinity jacuzzi.' },
      { icon: 'fa-solid fa-sailboat', title: 'Private Catamaran Sail', desc: 'Cruising the caldera, swimming in Nea Kameni volcanic springs and Red Beach.' },
      { icon: 'fa-solid fa-wine-glass', title: 'Volcanic Wine Tour', desc: 'Guided tastings of Assyrtiko and Vinsanto across historic island estates.' },
      { icon: 'fa-solid fa-camera', title: 'Oia Sunset Walk', desc: 'Explore blue-domed churches and the world-renowned castle lookout.' }
    ],
    metrics: {
      duration: '7 Days / 6 Nights',
      groupSize: 'Couples / Small Group',
      season: 'April to October',
      language: 'English Guided',
      pace: 'Leisurely & Scenic'
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Santorini & Cliffside Cave Suite Check-In',
        location: 'Imerovigli, Santorini, Greece',
        transport: 'Private VIP Mercedes Chauffeur Transfer',
        meals: 'Caldera Welcome Wine & Greek Mezze',
        stay: 'Grace Hotel Caldera Suite (5-Star Boutique)',
        img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
        content: 'Land at Thira Santorini Airport or port where your private driver greets you. Ascend the volcanic caldera ridgeline to picturesque Imerovigli, known as the balcony to the Aegean. Check into your cave suite featuring minimalist cycladic design and a heated terrace hot tub overlooking the shimmering sea.',
        places: ['Santorini Airport', 'Imerovigli Caldera Ridge', 'Skaros Rock Viewpoint', 'Private Terrace Sunset']
      },
      {
        day: 2,
        title: 'Historic Oia Walking Tour & Iconic Blue Domes',
        location: 'Oia, Santorini',
        transport: 'Private Chauffeur',
        meals: 'Breakfast, Seafood Lunch, Gourmet Dinner',
        stay: 'Grace Hotel Caldera Suite',
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        content: 'Spend the morning strolling through the fairytale marble alleys of Oia. Capture photos of the iconic blue-domed churches, browse independent art galleries and bookshops, and descend the steps to Ammoudi Bay for grilled Aegean octopus. In the evening, watch the golden sun dip below the horizon from Oia Castle.',
        places: ['Oia Blue Domes', 'Byzantine Castle Ruins', 'Ammoudi Fishing Harbor', 'Atlantis Books']
      },
      {
        day: 3,
        title: 'Caldera Luxury Catamaran Cruise & Volcanic Springs',
        location: 'Santorini Caldera & Nea Kameni',
        transport: '50ft Sailing Catamaran',
        meals: 'Breakfast, Barbecue Lunch Aboard, Sunset Cocktails',
        stay: 'Grace Hotel Caldera Suite',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        content: 'Embark on a luxury catamaran cruise into the sunken volcanic caldera. Swim in the thermal sulfur springs of Nea Kameni, snorkel off the vibrant cliffs of Red Beach and White Beach, and savor an authentic Greek BBQ lunch prepared freshly on board by the skipper.',
        places: ['Nea Kameni Volcanic Springs', 'Red Beach Cliffs', 'White Beach Cove', 'Indian Rock & Aspronisi']
      },
      {
        day: 4,
        title: 'Volcanic Vineyards & Prehistoric Akrotiri',
        location: 'Pyrgos & Akrotiri, Santorini',
        transport: 'Private Air-Conditioned Van',
        meals: 'Breakfast, Vineyard Wine Pairing Lunch',
        stay: 'Grace Hotel Caldera Suite',
        img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
        content: 'Discover the ancient agricultural heart of Santorini. Visit the Bronze Age ruins of Akrotiri, preserved beneath volcanic ash for 3,500 years. Continue to historic hillside village Pyrgos for guided cellar tours and structured tastings of crisp mineral Assyrtiko and sweet amber Vinsanto wines.',
        places: ['Akrotiri Archaeological Site', 'Pyrgos Medieval Village', 'Santo Wines Clifftop Estate', 'Venetsanos Winery']
      },
      {
        day: 5,
        title: 'Scenic Caldera Rim Hike from Imerovigli to Fira',
        location: 'Fira & Firostefani, Santorini',
        transport: 'Guided Walking Tour & Chauffeur Return',
        meals: 'Breakfast, Traditional Taverna Dinner',
        stay: 'Grace Hotel Caldera Suite',
        img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
        content: 'Hike the world-famous cliff trail tracing the rim from Imerovigli past Firostefani into vibrant Fira. Admire panoramic views of the entire crescent island. Browse the gold jewelry and linen boutiques of Fira, visit the Museum of Prehistoric Thira, and enjoy sunset cocktails on a clifftop terrace.',
        places: ['Caldera Rim Pathway', 'Three Bells of Fira', 'Museum of Prehistoric Thira', 'Fira Old Harbor Cable Car']
      },
      {
        day: 6,
        title: 'Black Sand Beaches of Perissa & Private Candlelight Dinner',
        location: 'Perissa & Megalochori, Santorini',
        transport: 'Private Vehicle',
        meals: 'Breakfast, Beach Club Lunch, 5-Course Farewell Dinner',
        stay: 'Grace Hotel Caldera Suite',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        content: 'Spend a relaxing day on the southeast coast where black volcanic sand meets crystal clear waters beneath Mount Mesa Vouno. Relax on plush sunbeds at a boutique beach club, wander the quiet bell towers of Megalochori, and cap your romantic getaway with a private candlelit degustation dinner on your caldera terrace.',
        places: ['Perissa Black Sand Beach', 'Megalochori Traditional Square', 'Mesa Vouno Mountain', 'Private Terrace Degustation']
      },
      {
        day: 7,
        title: 'Farewell Santorini & Airport Transfer',
        location: 'Santorini Airport',
        transport: 'Private Mercedes Chauffeur Transfer',
        meals: 'Breakfast Included',
        stay: 'Hotel Check-out',
        img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
        content: 'Savor a final morning coffee gazing over the endless blue expanse of the Aegean Sea. Complete check-out before your private driver transfers you to Santorini Thira Airport or Athinios Ferry Port for your onward journey.',
        places: ['Morning Caldera Coffee', 'Grace Hotel Check-out', 'Santorini Airport Transfer']
      }
    ],
    inclusions: [
      '6 Nights in Luxury Cliffside Cave Suite with Private Hot Tub',
      'Private round-trip airport and port transfers in executive vehicles',
      'Daily champagne breakfast served on private suite terrace',
      '5-Hour Semi-Private Caldera Catamaran Cruise with Greek BBQ and wine',
      'Full-day guided island tour including Akrotiri and Pyrgos',
      'Exclusive wine tasting session at two top volcanic estates',
      'All local taxes and 24/7 concierge support'
    ],
    exclusions: [
      'International and domestic flights to Santorini',
      'Meals not specified in the day-wise itinerary',
      'Personal expenses, spa treatments, and tipping',
      'Travel and cancellation insurance',
      'Museum entrance fee to Akrotiri (€12 per person)'
    ]
  },

  // 4. PARIS & FRENCH RIVIERA
  {
    slug: 'paris',
    fileName: 'package-paris.html',
    title: 'Parisian Romance & Riviera Sunsets',
    country: 'France',
    destination: 'Paris & Nice, France',
    category: 'Honeymoon Packages',
    duration: '8 Days / 7 Nights',
    price: '$2,380',
    heroImg: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80',
    overview: 'The quintessential French romance: four nights amidst the grand monuments, art treasures, and Michelin gastronomy of Paris, followed by high-speed first-class TGV rail to the glittering Côte d’Azur for three sun-drenched nights on the Mediterranean.',
    highlights: [
      { icon: 'fa-solid fa-tower-observation', title: 'VIP Eiffel & Seine Cruise', desc: 'Reserved Eiffel Tower summit access and private evening river cruise.' },
      { icon: 'fa-solid fa-landmark', title: 'After-Hours Louvre Tour', desc: 'Small-group curated access to the Mona Lisa, Venus de Milo, and Winged Victory.' },
      { icon: 'fa-solid fa-train', title: '1st Class TGV Rail', desc: 'Scenic high-speed train gliding across the French countryside to Nice.' },
      { icon: 'fa-solid fa-sailboat', title: 'Riviera Yacht Odyssey', desc: 'Catamaran cruise around Saint-Jean-Cap-Ferrat and medieval village of Eze.' }
    ],
    metrics: {
      duration: '8 Days / 7 Nights',
      groupSize: 'Small Group / Couples',
      season: 'April to October',
      language: 'English Guided',
      pace: 'Cosmopolitan & Scenic'
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Paris & Seine River Sunset Cruise',
        location: 'Paris, France',
        transport: 'Private Chauffeur Sedan',
        meals: 'Welcome Champagne & French Macarons, Bistro Dinner',
        stay: 'Hotel Plaza Athénée / Le Bristol Paris',
        img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
        content: 'Arrive at Paris Charles de Gaulle Airport and meet your private chauffeur for transfer to your luxury boutique hotel in the heart of Saint-Germain-des-Prés. As dusk falls, board a glass-canopied Seine River cruise gliding beneath illuminated historic bridges past Notre-Dame and the twinkling Eiffel Tower.',
        places: ['Charles de Gaulle Airport', 'Saint-Germain-des-Prés', 'Pont Alexandre III', 'Illuminated Seine River Cruise']
      },
      {
        day: 2,
        title: 'VIP Louvre Access & Eiffel Tower Summit',
        location: 'Paris',
        transport: 'Private Van & Walking',
        meals: 'Breakfast, Café Lunch, Eiffel Tower Dinner',
        stay: 'Hotel Plaza Athénée Paris',
        img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
        content: 'Enjoy an exclusive early-entry guided tour of the Louvre Museum with an art historian. Stand before the Mona Lisa before the crowds arrive. Stroll through the Tuileries Garden and Place Vendôme. In the evening, ascend by VIP elevator to the summit of the Eiffel Tower, followed by reservations at the Michelin-starred Madame Brasserie.',
        places: ['Louvre Museum VIP Entrance', 'Tuileries Gardens', 'Eiffel Tower Summit', 'Champs-Élysées']
      },
      {
        day: 3,
        title: 'Royal Palace of Versailles & Hall of Mirrors',
        location: 'Versailles, France',
        transport: 'Private Executive Chauffeur',
        meals: 'Breakfast, Royal Estate Lunch',
        stay: 'Hotel Plaza Athénée Paris',
        img: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=800&q=80',
        content: 'Journey 40 minutes west of Paris to the Sun King’s opulent Château de Versailles. Walk through the glittering Hall of Mirrors, the King and Queen State Apartments, and explore the vast manicured geometric fountains and gardens. Rent a private electric carriage or golf buggy to visit Marie Antoinette’s rustic Petit Trianon.',
        places: ['Château de Versailles', 'Hall of Mirrors', 'Grand Canal & Fountains', 'Queen’s Hamlet (Hameau)']
      },
      {
        day: 4,
        title: 'Bohemian Montmartre & Latin Quarter Food Walk',
        location: 'Montmartre, Paris',
        transport: 'Walking Tour & Funicular',
        meals: 'Breakfast, Artisan Bakery & Fromagerie Tasting',
        stay: 'Hotel Plaza Athénée Paris',
        img: 'https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?auto=format&fit=crop&w=800&q=80',
        content: 'Climb the winding cobblestone steps of Montmartre up to the white-domed Sacré-Cœur Basilica overlooking the city. Meet portrait artists at Place du Tertre and taste artisanal croissants and aged cheeses on a culinary stroll through Paris historic market streets.',
        places: ['Sacré-Cœur Basilica', 'Place du Tertre', 'Moulin Rouge Exterior', 'Rue Cler Gourmet Market']
      },
      {
        day: 5,
        title: 'First-Class TGV to Nice & Promenade des Anglais',
        location: 'Paris to Nice, French Riviera',
        transport: 'First-Class TGV High-Speed Train & Mercedes Transfer',
        meals: 'Breakfast, Gourmet Train Bistro, Niçoise Seafood Dinner',
        stay: 'Hotel Negresco Nice (5-Star Landmark)',
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        content: 'Board the high-speed TGV train from Gare de Lyon, traveling at 300 km/h through Burgundy vineyards and Provence lavender valleys down to the blue Mediterranean. Check in at the legendary Hotel Negresco on the Promenade des Anglais in Nice and explore the colorful flower market at Cours Saleya.',
        places: ['Paris Gare de Lyon', 'High-Speed TGV Journey', 'Nice Promenade des Anglais', 'Old Town (Vieux Nice) & Cours Saleya']
      },
      {
        day: 6,
        title: 'Monaco Glamour, Monte Carlo & Medieval Eze',
        location: 'Monaco & Eze Village',
        transport: 'Private Riviera Panoramic Chauffeur',
        meals: 'Breakfast, Clifftop Lunch, Monte Carlo Dinner',
        stay: 'Hotel Negresco Nice',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        content: 'Drive the dramatic Moyenne Corniche cliffside highway to the eagle’s nest village of Eze. Visit the Fragonard perfume factory and the Exotic Botanical Garden with sweeping views of Cap Ferrat. Cross into the Principality of Monaco to view the Prince’s Palace, yacht harbor, and the lavish Monte Carlo Casino.',
        places: ['Medieval Village of Eze', 'Fragonard Perfumery', 'Principality of Monaco', 'Monte Carlo Casino Square']
      },
      {
        day: 7,
        title: 'Cap d’Antibes Catamaran Sail & Cannes Boulevard',
        location: 'Antibes & Cannes, France',
        transport: 'Luxury Sailing Catamaran & Private Transfer',
        meals: 'Breakfast, Seaside Seafood Lunch, Farewell Dinner',
        stay: 'Hotel Negresco Nice',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        content: 'Sail along the billionaire peninsula of Cap d’Antibes dropping anchor in crystal-clear turquoise coves for swimming and paddleboarding. In the afternoon, visit Cannes for a stroll down Boulevard de la Croisette, past palatial beach clubs and the Palais des Festivals.',
        places: ['Cap d’Antibes Coastal Waters', 'Billionaires Bay Cove', 'Cannes Boulevard de la Croisette', 'Picasso Museum Antibes']
      },
      {
        day: 8,
        title: 'Morning Mediterranean Stroll & Departure',
        location: 'Nice, France',
        transport: 'Private Airport Chauffeur',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
        content: 'Take one last morning stroll along Castle Hill overlooking the Baie des Anges. Enjoy café au lait and fresh croissants before checking out. Your private chauffeur transfers you to Nice Côte d’Azur Airport for your return flight.',
        places: ['Castle Hill (Colline du Château)', 'Hotel Negresco Check-out', 'Nice Côte d’Azur Airport']
      }
    ],
    inclusions: [
      '4 Nights in 5-Star Boutique Hotel in Central Paris',
      '3 Nights at Luxury Beachfront Hotel Negresco in Nice',
      'First-Class TGV train tickets with reserved seating from Paris to Nice',
      'Private airport and train station executive chauffeur transfers',
      'VIP Skip-the-line Louvre Museum guided tour with art historian',
      'Evening illuminated Seine River Cruise ticket',
      'Full-day private Monaco, Monte-Carlo and Eze panoramic tour',
      'Daily gourmet French breakfast'
    ],
    exclusions: [
      'Transatlantic / International flights to Paris and from Nice',
      'City tourist taxes payable directly to hotels (approx €4-8/night)',
      'Meals not specified in the program',
      'Personal purchases, shopping, and spa services',
      'Travel, medical, and baggage insurance'
    ]
  },

  // 5. CANADIAN ROCKIES
  {
    slug: 'canada',
    fileName: 'package-canada.html',
    title: 'Canadian Rockies Family Wildlife Safari',
    country: 'Canada',
    destination: 'Banff & Jasper, Canada',
    category: 'Family Holidays',
    duration: '7 Days / 6 Nights',
    price: '$1,650',
    heroImg: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1920&q=80',
    overview: 'An unforgettable alpine adventure for the whole family through Canada’s premier national parks. Canoe turquoise glacial lakes, spot wild elk and grizzly bears, walk across the Columbia Icefield, and stargaze inside the dark sky preserve of Jasper.',
    highlights: [
      { icon: 'fa-solid fa-water', title: 'Lake Louise & Moraine Lake', desc: 'World-famous turquoise glacial waters with family canoeing and shoreline trails.' },
      { icon: 'fa-solid fa-paw', title: 'Wildlife Spotting Safaris', desc: 'Expert park rangers guiding you to see elk, bighorn sheep, eagles, and bears.' },
      { icon: 'fa-solid fa-icicles', title: 'Columbia Icefield Glacier Walk', desc: 'Ride the giant Ice Explorer onto ancient Athabasca Glacier and walk the Skywalk.' },
      { icon: 'fa-solid fa-cable-car', title: 'Banff Gondola & Hot Springs', desc: 'Panoramic 360-degree mountain summit views and relaxing mineral pool soaks.' }
    ],
    metrics: {
      duration: '7 Days / 6 Nights',
      groupSize: 'Family / Small Group',
      season: 'June to September',
      language: 'English Guided',
      pace: 'Active & Family-Friendly'
    },
    itinerary: [
      {
        day: 1,
        title: 'Calgary Arrival & Drive into Banff National Park',
        location: 'Calgary & Banff, Alberta, Canada',
        transport: 'Family Premium SUV Chauffeur Transfer',
        meals: 'Welcome Mountain Lodge Dinner',
        stay: 'Fairmont Banff Springs / Rimrock Resort',
        img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
        content: 'Land at Calgary International Airport and meet your driver. Head west as prairie plains give way to the soaring granite wall of the Canadian Rockies. Check in to the iconic "Castle in the Rockies," Fairmont Banff Springs, and stroll the alpine village of Banff.',
        places: ['Calgary International Airport', 'Trans-Canada Rockies Highway', 'Banff Alpine Townsite', 'Bow Falls & Surprise Corner']
      },
      {
        day: 2,
        title: 'Banff Gondola, Sulphur Mountain & Lake Minnewanka',
        location: 'Banff National Park',
        transport: 'Private SUV / Coach',
        meals: 'Breakfast, Summit Bistro Lunch, Campfire S’mores Dinner',
        stay: 'Fairmont Banff Springs',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        content: 'Ascend Sulphur Mountain on the Banff Gondola to an altitude of 2,281 meters for 360-degree views of six mountain ranges. Stroll the summit boardwalk, then take a private cruise on glacial Lake Minnewanka with wildlife spotting for bighorn sheep along the shoreline.',
        places: ['Banff Gondola Summit', 'Sulphur Mountain Cosmic Ray Station', 'Lake Minnewanka Cruise', 'Banff Upper Hot Springs']
      },
      {
        day: 3,
        title: 'Emerald Waters of Lake Louise & Moraine Lake',
        location: 'Lake Louise & Valley of the Ten Peaks',
        transport: 'Private National Park Shuttle',
        meals: 'Breakfast, Lakeside Tea House Lunch',
        stay: 'Fairmont Chateau Lake Louise',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        content: 'Marvel at the unreal electric-blue water of Lake Louise. Rent red cedar canoes for the kids to paddle beneath Victoria Glacier. Continue to the Valley of the Ten Peaks at Moraine Lake, climbing the rockpile trail for one of the most photographed vistas on earth.',
        places: ['Lake Louise Shoreline', 'Victoria Glacier Lookout', 'Moraine Lake & Rockpile Trail', 'Lake Agnes Tea House Hike']
      },
      {
        day: 4,
        title: 'Icefields Parkway & Athabasca Glacier Explorer',
        location: 'Columbia Icefield & Jasper National Park',
        transport: 'Ice Explorer All-Terrain Mega Vehicle',
        meals: 'Breakfast, Glacier View Lunch, Mountain Lodge Dinner',
        stay: 'Fairmont Jasper Park Lodge',
        img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
        content: 'Drive the spectacular Icefields Parkway, rated one of the world’s top scenic drives with over 100 visible glaciers. Board the mammoth Terra Bus Ice Explorer to walk on the 300-meter thick Athabasca Glacier. Step onto the glass-floored Glacier Skywalk suspended 280 meters above Sunwapta Valley.',
        places: ['Icefields Parkway Highway 93', 'Athabasca Glacier Walk', 'Columbia Icefield Skywalk', 'Sunwapta Falls & Athabasca Falls']
      },
      {
        day: 5,
        title: 'Jasper Wildlife Safari & Maligne Canyon Boat Tour',
        location: 'Jasper National Park',
        transport: 'Park Ranger Safari Van & Lake Cruiser',
        meals: 'Breakfast, Lakeside Picnic, Jasper Grill Dinner',
        stay: 'Fairmont Jasper Park Lodge',
        img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
        content: 'Join an early morning naturalist safari through the Athabasca Valley, searching for grizzly and black bears, moose, and herds of elk. Hike through the 50-meter deep limestone gorge of Maligne Canyon, followed by a boat cruise across Maligne Lake to world-renowned Spirit Island.',
        places: ['Maligne Canyon Suspension Bridges', 'Maligne Lake Boat Cruise', 'Spirit Island Iconic View', 'Jasper Dark Sky Preserve Stargazing']
      },
      {
        day: 6,
        title: 'Pyramid Lake Biking, Canoeing & Hot Springs',
        location: 'Jasper',
        transport: 'Mountain Bikes & Private SUV',
        meals: 'Breakfast, Lakefront BBQ Lunch, Farewell Lodge Dinner',
        stay: 'Fairmont Jasper Park Lodge',
        img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
        content: 'Rent family mountain bikes along the scenic trails around Pyramid Lake and Patricia Lake with Mount Edith Cavell towering in the distance. In the afternoon, unwind at Miette Hot Springs before gathering around the outdoor campfire at Jasper Park Lodge for s’mores.',
        places: ['Pyramid Lake Island', 'Patricia Lake Trail', 'Miette Natural Hot Springs', 'Lodge Campfire Stargazing']
      },
      {
        day: 7,
        title: 'Scenic Return Drive to Calgary & Departure',
        location: 'Jasper to Calgary Airport',
        transport: 'Private Executive SUV Transfer',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
        content: 'Enjoy a leisurely breakfast by the lake before beginning the scenic return journey through the Bow Valley back to Calgary. Transfer directly to Calgary International Airport (YYC) for your departure flight.',
        places: ['Bow Valley Parkway', 'Castle Mountain Lookout', 'Calgary International Airport (YYC)']
      }
    ],
    inclusions: [
      '6 Nights in Luxury Family Mountain Lodges (Fairmont Banff & Jasper)',
      'Private air-conditioned Family SUV transportation throughout',
      'Banff Gondola family passes and Sulphur Mountain boardwalk access',
      'Lake Louise canoe rental voucher (1 hour)',
      'Columbia Icefield Adventure: Ice Explorer and Glacier Skywalk passes',
      'Maligne Lake boat cruise tickets to Spirit Island',
      'National Park Discovery Passes for all travelers',
      'Daily hearty mountain breakfast'
    ],
    exclusions: [
      'Flights to and from Calgary (YYC)',
      'Meals not specified in the itinerary',
      'National Park fishing or boat licensing fees',
      'Personal outdoor gear and equipment rentals',
      'Travel and medical insurance',
      'Driver and naturalist guide gratuities'
    ]
  },

  // 6. CLASSICAL ITALY
  {
    slug: 'italy',
    fileName: 'package-italy.html',
    title: 'Classical Italy Family Wonder & Pizza',
    country: 'Italy',
    destination: 'Rome, Florence & Venice, Italy',
    category: 'Family Holidays',
    duration: '8 Days / 7 Nights',
    price: '$1,790',
    heroImg: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1920&q=80',
    overview: 'An interactive, kid-friendly cultural odyssey through Italy’s three great historic cities: Rome, Florence, and Venice. Gladiators, authentic pizza-making masterclasses, Michelangelo masterpieces, and private gondola rides through secret canals.',
    highlights: [
      { icon: 'fa-solid fa-shield-halved', title: 'Roman Gladiator School', desc: 'Hands-on training session for kids on the ancient Appian Way.' },
      { icon: 'fa-solid fa-pizza-slice', title: 'Family Pizza Masterclass', desc: 'Knead dough and bake authentic wood-fired Neapolitan pizza in Florence.' },
      { icon: 'fa-solid fa-train', title: 'Frecciarossa High-Speed Rail', desc: 'Smooth, scenic train travel between Rome, Florence, and Venice.' },
      { icon: 'fa-solid fa-sailboat', title: 'Private Venice Gondola', desc: 'Serenaded boat ride through quiet Venetian back canals and Murano glass.' }
    ],
    metrics: {
      duration: '8 Days / 7 Nights',
      groupSize: 'Family / Small Group',
      season: 'March to November',
      language: 'English Guided',
      pace: 'Educational & Fun'
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Rome & Gelato Walk to the Trevi Fountain',
        location: 'Rome, Italy',
        transport: 'Private Executive Chauffeur',
        meals: 'Welcome Roman Pasta Dinner',
        stay: 'Hotel de Russie / Grand Hotel de la Minerve Rome',
        img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
        content: 'Touch down at Rome Fiumicino Airport and enjoy a private transfer to your central family hotel near Piazza Navona. In the late afternoon, take a guided family gelato walk: toss a coin in the Trevi Fountain to ensure your return, admire the Pantheon, and sample artisan gelato.',
        places: ['Rome Fiumicino Airport', 'Piazza Navona', 'Trevi Fountain', 'Pantheon Ancient Temple']
      },
      {
        day: 2,
        title: 'Colosseum Arena Floor & Roman Gladiator School',
        location: 'Rome',
        transport: 'Private Van & Walking',
        meals: 'Breakfast, Trattoria Lunch, Dinner',
        stay: 'Hotel de Russie Rome',
        img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
        content: 'Enter the Colosseum through the Gladiator Gate directly onto the reconstructed wooden arena floor. Learn about chariot races at the Roman Forum. In the afternoon, head to the Appian Way for Roman Gladiator School, where kids suit up in tunics and learn ancient swordplay.',
        places: ['Colosseum Arena Floor', 'Roman Forum & Palatine Hill', 'Gladiator School Training Grounds', 'Appian Way']
      },
      {
        day: 3,
        title: 'Vatican Museums, Sistine Chapel & St. Peter’s',
        location: 'Vatican City & Rome',
        transport: 'Walking Tour',
        meals: 'Breakfast, Pizzeria Lunch, Dinner',
        stay: 'Hotel de Russie Rome',
        img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
        content: 'Skip the massive lines with a family-focused private Vatican guide. Discover the Map Gallery, Egyptian mummy relics, and gaze up at Michelangelo’s Sistine Chapel ceiling. Conclude at St. Peter’s Basilica and climb the dome for views across Rome.',
        places: ['Vatican Museums', 'Sistine Chapel', 'St. Peter’s Basilica & Square', 'Castel Sant’Angelo']
      },
      {
        day: 4,
        title: 'Frecciarossa Train to Florence & Duomo Discovery',
        location: 'Rome to Florence, Italy',
        transport: 'Frecciarossa 1000 High-Speed Train (1h 30m)',
        meals: 'Breakfast, Tuscan Trattoria Lunch, Gelato Stop',
        stay: 'Brunelleschi Hotel Florence',
        img: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=800&q=80',
        content: 'Board the ultra-sleek high-speed train gliding through the rolling green hills of Umbria and Tuscany to Florence. Check into your hotel steps from the Duomo. Walk across the medieval Ponte Vecchio bridge, marvel at Giotto’s Bell Tower, and rub the bronze snout of Il Porcellino for good luck.',
        places: ['Roma Termini Station', 'Florence Santa Maria Novella', 'Piazza del Duomo & Brunelleschi Dome', 'Ponte Vecchio Bridge']
      },
      {
        day: 5,
        title: 'Michelangelo’s David & Family Pizza-Making Class',
        location: 'Florence',
        transport: 'Walking Tour',
        meals: 'Breakfast, Hands-on Pizza Lunch & Dinner',
        stay: 'Brunelleschi Hotel Florence',
        img: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
        content: 'Visit the Accademia Gallery to view Michelangelo’s towering masterpiece, the original David statue. In the afternoon, participate in a private family cooking academy where a master pizzaiolo teaches parents and kids how to stretch authentic dough, add fresh toppings, and bake pizzas in a roaring wood oven.',
        places: ['Accademia Gallery (David Statue)', 'Piazza della Signoria', 'Authentic Family Pizza Academy', 'Piazzale Michelangelo Sunset']
      },
      {
        day: 6,
        title: 'High-Speed Rail to Venice & Private Gondola Ride',
        location: 'Florence to Venice, Italy',
        transport: 'High-Speed Train & Private Wooden Water Taxi',
        meals: 'Breakfast, Venetian Seafood Lunch, Dinner',
        stay: 'Hotel Danieli / Baglioni Hotel Luna Venice',
        img: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80',
        content: 'Travel by high-speed rail to Venice Santa Lucia Station. Step directly out of the station onto the Grand Canal, where your private polished mahogany water taxi transfers you to your lagoon hotel. In the late afternoon, step into an authentic black lacquer gondola for a relaxing cruise through peaceful canals.',
        places: ['Venice Santa Lucia Station', 'Grand Canal Water Taxi', 'Rialto Bridge', 'Private Gondola Cruise']
      },
      {
        day: 7,
        title: 'St. Mark’s Basilica, Doge’s Palace & Murano Glass',
        location: 'Venice & Murano Island',
        transport: 'Private Water Taxi',
        meals: 'Breakfast, Island Seafood Lunch, Farewell Dinner',
        stay: 'Hotel Danieli Venice',
        img: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80',
        content: 'Tour the golden mosaics of St. Mark’s Basilica and cross the Bridge of Sighs into the secret dungeons of the Doge’s Palace. Board your private water taxi across the lagoon to Murano island for a private glassblowing masterclass where artisans shape molten glass into colorful horses and vases.',
        places: ['St. Mark’s Basilica', 'Doge’s Palace & Bridge of Sighs', 'Murano Island Glass Factory', 'Burano Lace Island']
      },
      {
        day: 8,
        title: 'Venice Water Taxi Transfer & Departure',
        location: 'Venice Marco Polo Airport',
        transport: 'Private Water Taxi to Airport Pier',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80',
        content: 'Enjoy your final Venetian espresso and breakfast overlooking the lagoon. Your private water taxi picks you up directly at the hotel jetty, cruising across the open waters to the airport docks of Venice Marco Polo Airport (VCE) for your departure flight.',
        places: ['Hotel Private Water Dock', 'Venice Lagoon Cruise', 'Venice Marco Polo Airport (VCE)']
      }
    ],
    inclusions: [
      '7 Nights in 4-Star Superior and 5-Star Family Accommodations',
      'All high-speed train tickets (Rome–Florence and Florence–Venice) with reserved seats',
      'Private airport transfers in Rome and Venice (including water taxi in Venice)',
      'Skip-the-line Colosseum and Vatican Museums family guided tours',
      'Roman Gladiator School experience for children with certificates',
      'Hands-on Family Pizza and Gelato making class in Florence',
      'Private 45-minute Gondola ride in Venice',
      'Daily Italian breakfast buffets'
    ],
    exclusions: [
      'International flights to Rome and from Venice',
      'City stay taxes paid on check-out (approx €4-7/person/night)',
      'Lunches and dinners not indicated as included',
      'Personal souvenir shopping and optional activities',
      'Comprehensive family travel insurance',
      'Driver and guide tips'
    ]
  },

  // 7. AUSTRALIA
  {
    slug: 'australia',
    fileName: 'package-australia.html',
    title: 'Aussie Wildlife & Great Barrier Reef',
    country: 'Australia',
    destination: 'Sydney & Cairns, Australia',
    category: 'Family Holidays',
    duration: '10 Days / 9 Nights',
    price: '$2,150',
    heroImg: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1920&q=80',
    overview: 'An awe-inspiring Australian family expedition across Sydney Harbour, the Blue Mountains, and the tropical paradise of Cairns and the Great Barrier Reef. Encounter koalas, kangaroos, and sea turtles in their natural habitats.',
    highlights: [
      { icon: 'fa-solid fa-water', title: 'Great Barrier Reef Outer Pontoon', desc: 'Snorkel among giant clams, clownfish, and sea turtles on an outer reef marine station.' },
      { icon: 'fa-solid fa-tree', title: 'Daintree Rainforest & Croc Cruise', desc: 'World heritage ancient jungle exploration and wildlife boat safari on Daintree River.' },
      { icon: 'fa-solid fa-masks-theater', title: 'Sydney Opera House Tour', desc: 'VIP guided backstage architectural tour of the iconic world heritage performing arts center.' },
      { icon: 'fa-solid fa-paw', title: 'Taronga Zoo & Koala Encounters', desc: 'Meet Australian native marsupials overlooking the stunning Sydney skyline.' }
    ],
    metrics: {
      duration: '10 Days / 9 Nights',
      groupSize: 'Family / Small Group',
      season: 'Year-Round (Best May–Oct)',
      language: 'English Guided',
      pace: 'Exploratory & Natural'
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Sydney & Circular Quay Harbour Walk',
        location: 'Sydney, Australia',
        transport: 'Private Executive Chauffeur',
        meals: 'Harbour Welcome Dinner',
        stay: 'Shangri-La Sydney (Harbour View)',
        img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
        content: 'Arrive at Sydney Kingsford Smith Airport where your private driver welcomes you for a transfer to your harbour-facing hotel in The Rocks. Stroll around Circular Quay, taking in unobstructed views of the Sydney Opera House and the Harbour Bridge.',
        places: ['Sydney Airport', 'The Rocks Historic Quarter', 'Circular Quay', 'Sydney Harbour Bridge']
      },
      {
        day: 2,
        title: 'Sydney Opera House Tour & Taronga Zoo Ferry',
        location: 'Sydney',
        transport: 'Harbour Catamaran Ferry & Walking',
        meals: 'Breakfast, Waterfront Café Lunch',
        stay: 'Shangri-La Sydney',
        img: 'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?auto=format&fit=crop&w=800&q=80',
        content: 'Take an insider walking tour through the soaring sails and concert halls of the Sydney Opera House. Hop on a quick harbour ferry across to Taronga Zoo, where you will ride the sky safari cable car and meet friendly koalas, kangaroos, wallabies, and platypuses.',
        places: ['Sydney Opera House Inside Tour', 'Taronga Zoo Wildlife Sanctuary', 'Sky Safari Cable Car', 'Bradleys Head Coastal Walk']
      },
      {
        day: 3,
        title: 'Bondi to Coogee Coastal Walk & Surfing Lesson',
        location: 'Bondi Beach, Sydney',
        transport: 'Private Chauffeur',
        meals: 'Breakfast, Bondi Icebergs Lunch',
        stay: 'Shangri-La Sydney',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        content: 'Travel to world-famous Bondi Beach. Kids and parents can participate in a beginner surf lesson with licensed lifeguards, followed by lunch at Bondi Icebergs overlooking the ocean pool. Walk the cliffside path to Bronte and Coogee Beach.',
        places: ['Bondi Beach Surf School', 'Bondi Icebergs Ocean Pool', 'Bondi to Bronte Coastal Walk', 'Tamarama Sculpture Lookout']
      },
      {
        day: 4,
        title: 'Blue Mountains & Scenic World Railway',
        location: 'Blue Mountains National Park, NSW',
        transport: 'Private Luxury Coach',
        meals: 'Breakfast, Mountain View Lunch, Australian BBQ Dinner',
        stay: 'Shangri-La Sydney',
        img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80',
        content: 'Head inland to the UNESCO Blue Mountains. See the Three Sisters rock formation at Echo Point and ride the Scenic Railway—the world steepest passenger railway into the ancient Jamison Valley rainforest basin. Glide across the gorge on the glass-floored Scenic Skyway.',
        places: ['Echo Point & Three Sisters', 'Scenic World Railway & Cableway', 'Jamison Valley Rainforest Boardwalk', 'Wentworth Falls Lookout']
      },
      {
        day: 5,
        title: 'Flight to Tropical Cairns & Palm Cove Check-In',
        location: 'Sydney to Cairns, Queensland',
        transport: 'Domestic Flight (included) & Private Chauffeur',
        meals: 'Breakfast, Tropical Fruit Welcome, Seafood Dinner',
        stay: 'Pullman Palm Cove Sea Temple Resort',
        img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        content: 'Fly north to tropical Cairns in Far North Queensland. Transfer to the relaxed seaside village of Palm Cove, where ancient paperbark trees line the beach. Spend the afternoon lounging around lagoon pools and watching tropical parrots.',
        places: ['Sydney Domestic Airport', 'Cairns Tropical Airport', 'Palm Cove Esplanade', 'Melaleuca Paperbark Boardwalk']
      },
      {
        day: 6,
        title: 'Outer Great Barrier Reef Marine Pontoon Day',
        location: 'Great Barrier Reef Marine Park',
        transport: 'High-Speed Luxury Catamaran',
        meals: 'Breakfast, Tropical Smorgasbord Lunch Aboard',
        stay: 'Pullman Palm Cove Sea Temple Resort',
        img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        content: 'Cruise aboard a high-speed catamaran to an outer reef activity platform on Moore Reef. Snorkel in crystal-clear water with sea turtles, clownfish, and neon corals. Non-swimmers and young kids can view the marine life from a semi-submersible submarine and underwater observatory.',
        places: ['Moore Reef Activity Platform', 'Semi-Submersible Coral Tour', 'Underwater Observatory', 'Guided Marine Snorkel Tour']
      },
      {
        day: 7,
        title: 'Kuranda Scenic Railway & Skyrail Rainforest Cableway',
        location: 'Kuranda & Barron Gorge National Park',
        transport: 'Historic Heritage Train & Aerial Gondola',
        meals: 'Breakfast, Rainforest Café Lunch',
        stay: 'Pullman Palm Cove Sea Temple Resort',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        content: 'Board the historic Kuranda Scenic Railway, winding through 15 hand-carved tunnels and past roaring Barron Falls. Explore Kuranda mountain heritage village, then glide over the canopy on the 7.5km Skyrail Rainforest Cableway.',
        places: ['Kuranda Scenic Railway', 'Barron Falls Lookout Station', 'Kuranda Heritage Markets', 'Skyrail Rainforest Gondola']
      },
      {
        day: 8,
        title: 'Daintree Rainforest & Wildlife Crocodile River Cruise',
        location: 'Daintree National Park & Cape Tribulation',
        transport: '4WD Expedition Coach & River Boat',
        meals: 'Breakfast, Traditional Aussie Damper Lunch',
        stay: 'Pullman Palm Cove Sea Temple Resort',
        img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
        content: 'Journey into the oldest living tropical rainforest on earth: the Daintree. Cruise the Daintree River spotting wild saltwater crocodiles and rare birds. Walk the elevated boardwalks to Cape Tribulation where the rainforest directly meets the reef.',
        places: ['Daintree River Crocodile Cruise', 'Cape Tribulation Beach', 'Marrdja Botanical Boardwalk', 'Mossman Gorge River Walk']
      },
      {
        day: 9,
        title: 'Cairns Lagoon Relaxation & Aboriginal Cultural Show',
        location: 'Cairns',
        transport: 'Private Shuttle',
        meals: 'Breakfast, Tropical Lunch, Aboriginal Feast Dinner',
        stay: 'Pullman Palm Cove Sea Temple Resort',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        content: 'Spend a leisurely morning swimming in the saltwater lagoon on Cairns Esplanade. In the evening, attend a traditional Tjapukai Aboriginal cultural experience featuring boomerang throwing, didgeridoo music, and dreamtime storytelling around a ceremonial fire.',
        places: ['Cairns Esplanade Lagoon', 'Rusty’s Farmers Market', 'Aboriginal Cultural Performance', 'Farewell Australian Seafood Feast']
      },
      {
        day: 10,
        title: 'Departure from Cairns',
        location: 'Cairns International Airport',
        transport: 'Private Chauffeur Transfer',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
        content: 'Enjoy a final tropical fruit breakfast listening to birdsong in the paperbark trees. Check out of your resort, and meet your private chauffeur for the short drive to Cairns International Airport (CNS) for your flight home.',
        places: ['Palm Cove Beachfront', 'Resort Check-out', 'Cairns International Airport (CNS)']
      }
    ],
    inclusions: [
      '4 Nights 5-Star Harbour-View Accommodations in Sydney',
      '5 Nights Luxury Tropical Beach Resort in Palm Cove/Cairns',
      'Domestic flight from Sydney to Cairns with checked luggage',
      'Full-day Great Barrier Reef outer pontoon excursion with lunch and snorkel gear',
      'Sydney Opera House VIP private guided tour',
      'Kuranda Scenic Railway and Skyrail Rainforest Cableway combo pass',
      'Daintree Rainforest and Crocodile River 4WD tour',
      'All private airport and tour transfers',
      'Daily breakfast throughout'
    ],
    exclusions: [
      'International flights to/from Australia',
      'Australian ETA tourist visa',
      'Certified scuba diving or helmet diving fees on the reef',
      'Personal spending, souvenirs, and optional helicopter flights',
      'Travel and medical insurance',
      'Guide and driver gratuities'
    ]
  }
];

