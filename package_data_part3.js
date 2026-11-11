// Packages Data - Part 3 (15 to 21)

module.exports = [
  // 15. THAILAND PHUKET & PHI PHI
  {
    slug: 'thailand',
    fileName: 'package-thailand.html',
    title: 'Phuket & Phi Phi Island Hopping',
    country: 'Thailand',
    destination: 'Phuket & Krabi, Thailand',
    category: 'Beach Vacations',
    duration: '7 Days / 6 Nights',
    price: '$1,190',
    heroImg: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1920&q=80',
    overview: 'Soak in the tropical splendor of Southern Thailand’s Andaman Sea. Towering limestone karsts rising out of turquoise lagoons, speedboat adventures to Maya Bay and the Phi Phi archipelago, sea canoeing through James Bond Island caves, and beachfront luxury.',
    highlights: [
      { icon: 'fa-solid fa-ship', title: 'Phi Phi Islands Speedboat', desc: 'Maya Bay, Pileh Lagoon emerald swimming, Viking Cave, and Monkey Beach.' },
      { icon: 'fa-solid fa-water', title: 'Phang Nga Bay Sea Canoeing', desc: 'Paddle through limestone sea caves and tidal hongs beneath James Bond Island.' },
      { icon: 'fa-solid fa-umbrella-beach', title: 'Railay Beach Clifftops', desc: 'World-famous towering karst cliffs, Phra Nang Cave beach, and rock climber vistas.' },
      { icon: 'fa-solid fa-utensils', title: 'Authentic Thai Cooking Class', desc: 'Market tour, Tom Yum Goong and Pad Thai masterclass with a master chef.' }
    ],
    metrics: {
      duration: '7 Days / 6 Nights',
      groupSize: 'Small Group / Couples',
      season: 'November to April',
      language: 'English Guided',
      pace: 'Island Hopping & Scenic'
    },
    itinerary: [
      {
        day: 1,
        title: 'Phuket Arrival & Kata Beachfront Resort Check-In',
        location: 'Phuket, Thailand',
        transport: 'Private VIP Airport Chauffeur',
        meals: 'Welcome Coconut Drink & Royal Thai Dinner',
        stay: 'The Shore at Katathani / Katathani Phuket Beach Resort (5-Star)',
        img: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80',
        content: 'Land at Phuket International Airport and be greeted with cold towels and fragrant jasmine garlands. Take a comfortable private transfer along the scenic coastline to Kata Noi Beach. Check in to your beachfront pool villa, and relax watching the sunset over the Andaman Sea.',
        places: ['Phuket International Airport', 'Kata Noi Beachfront', 'Private Ocean View Villa', 'Karon Viewpoint Sunset']
      },
      {
        day: 2,
        title: 'Phang Nga Bay & James Bond Island Sea Canoeing',
        location: 'Phang Nga Bay National Park',
        transport: 'Luxury Cruiser & Guided Sea Inflatable Canoes',
        meals: 'Breakfast, Thai Buffet Lunch Aboard, Dinner',
        stay: 'The Shore at Katathani',
        img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
        content: 'Cruise into Phang Nga Bay where vertical limestone monoliths soar out of calm green waters. Expert paddlers guide your sea canoe through dark sea caves into hidden tidal lagoons (hongs) open to the sky. Visit Koh Tapu, celebrated as James Bond Island in "The Man with the Golden Gun," and the floating stilt village of Koh Panyee.',
        places: ['Ao Phang Nga National Park', 'James Bond Island (Koh Tapu)', 'Koh Panyee Floating Village', 'Hong Island Sea Caves']
      },
      {
        day: 3,
        title: 'Speedboat to Phi Phi Islands: Maya Bay & Pileh Lagoon',
        location: 'Phi Phi Don & Phi Phi Leh',
        transport: 'Private Twin-Engine Speedboat',
        meals: 'Breakfast, Island Beach Lunch, Sunset Cocktails',
        stay: 'SAii Phi Phi Island Village (Beachfront Bungalow)',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        content: 'Speed across turquoise waters to Phi Phi Leh. Walk the powdery white sands of Maya Bay framed by 100-meter karst cliffs. Leap from the boat into the calm emerald natural swimming pool of Pileh Lagoon. Cruise past Viking Cave and snorkel among sea anemones and clownfish before checking in to your beachfront bungalow.',
        places: ['Maya Bay Nature Reserve', 'Pileh Lagoon Emerald Waters', 'Viking Cave Bird Nest Cliffs', 'Loh Dalum Bay Sunset']
      },
      {
        day: 4,
        title: 'Phi Phi Viewpoint Hike & Bamboo Island Snorkeling',
        location: 'Phi Phi Archipelago',
        transport: 'Longtail Boat & Walking',
        meals: 'Breakfast, Bamboo Island Picnic, Seafood BBQ Dinner',
        stay: 'SAii Phi Phi Island Village',
        img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        content: 'Hike to the highest viewpoint on Phi Phi Don for a 360-degree panorama of the double-bay isthmus. In the afternoon, board a traditional wooden longtail boat to Bamboo Island (Koh Mai Phai), an uninhabited paradise encircled by untouched shallow coral reefs.',
        places: ['Phi Phi Don Viewpoint 2', 'Bamboo Island Coral Reef', 'Loh Ba Gao Bay', 'Beachfront Fire Dancing Show']
      },
      {
        day: 5,
        title: 'Krabi Railay Beach Karsts & Phra Nang Cave Beach',
        location: 'Krabi & Railay Peninsula',
        transport: 'Speedboat Transfer & Longtail',
        meals: 'Breakfast, Clifftop Thai Lunch, Dinner',
        stay: 'Rayavadee Resort Krabi (Luxury Pavilion)',
        img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
        content: 'Cruise from Phi Phi to the isolated peninsula of Railay in Krabi, cut off from the mainland by massive limestone bluffs and accessible only by water. Explore Phra Nang Cave Beach, walk beneath jungle-fringed stalactites, and watch rock climbers scale the sheer limestone pillars.',
        places: ['Railay West Beach', 'Phra Nang Princess Cave Beach', 'Tonsai Rock Climbing Cliffs', 'The Grotto Cave Restaurant']
      },
      {
        day: 6,
        title: 'Four Islands Sunset Tour & Bioluminescent Plankton',
        location: 'Krabi Islands (Poda, Chicken, Tub Islands)',
        transport: 'Private Longtail Boat',
        meals: 'Breakfast, Island Beach Lunch, Farewell Dinner',
        stay: 'Rayavadee Resort Krabi',
        img: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80',
        content: 'Explore the offshore Krabi islands: walk across the sandbar connecting Koh Mor and Tub Island at low tide, snorkel off Chicken Island, and swim at Koh Poda. After sunset, slip into dark water to swim among glowing blue bioluminescent plankton that light up with every stroke.',
        places: ['Tub & Mor Island Sandbar (Talay Waek)', 'Chicken Island (Koh Kai)', 'Koh Poda Beach', 'Bioluminescent Plankton Night Swim']
      },
      {
        day: 7,
        title: 'Return to Phuket / Krabi Airport & Departure',
        location: 'Krabi or Phuket Airport',
        transport: 'Private Boat & Executive Van Transfer',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80',
        content: 'Enjoy your final morning with breakfast in the coconut groves. Take a private speedboat transfer to the pier where your chauffeur connects you to Krabi Airport (KBV) or Phuket Airport (HKT) for your departure flight.',
        places: ['Rayavadee Coconut Groves', 'Pier Boat Transfer', 'Krabi International Airport (KBV)']
      }
    ],
    inclusions: [
      '6 Nights in Luxury 5-Star Beach Resorts & Pavilions (Phuket, Phi Phi, Krabi)',
      'All private boat transfers (speedboats and traditional longtail boats)',
      'Phang Nga Bay and James Bond Island sea canoe expedition with lunch',
      'Full-day Phi Phi and Maya Bay speedboat trip with snorkel gear and national park fees',
      'Four Islands sunset cruise with bioluminescent plankton night swim',
      'All private airport and jetty transfers in executive air-conditioned vans',
      'Daily tropical breakfast buffets'
    ],
    exclusions: [
      'International flights to/from Thailand',
      'Optional scuba diving excursions',
      'Personal beach massages and shopping',
      'Travel and medical insurance',
      'Tips for boat skippers, paddle guides, and drivers'
    ]
  },

  // 16. CANCUN RIVIERA MAYA ALL-INCLUSIVE LUXE
  {
    slug: 'cancun',
    fileName: 'package-cancun.html',
    title: 'Cancun Riviera Maya All-Inclusive Luxe',
    country: 'Mexico',
    destination: 'Cancun & Tulum, Mexico',
    category: 'Beach Vacations',
    duration: '7 Days / 6 Nights',
    price: '$1,420',
    heroImg: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1920&q=80',
    overview: 'Pristine turquoise Caribbean waters meet ancient Mayan civilization. Bask in 5-star all-inclusive luxury in Riviera Maya, sail on catamarans to Isla Mujeres, swim inside mystical jungle cenotes, and climb the clifftop fortress ruins of Tulum.',
    highlights: [
      { icon: 'fa-solid fa-umbrella-beach', title: '5-Star All-Inclusive Luxury', desc: 'Oceanfront suite with private terrace plunge pool, gourmet dining, and 24-hr room service.' },
      { icon: 'fa-solid fa-pyramid', title: 'Chichen Itza & Sacred Cenote', desc: 'Wonder of the World El Castillo pyramid and swimming in freshwater Ik Kil sinkhole.' },
      { icon: 'fa-solid fa-water', title: 'Tulum Clifftop Ruins', desc: 'Mayan ruins perched dramatically on 12-meter sea cliffs overlooking white sand beaches.' },
      { icon: 'fa-solid fa-sailboat', title: 'Isla Mujeres Catamaran Sail', desc: 'Snorkel the vibrant MUSA underwater museum and sail across Cancun turquoise bays.' }
    ],
    metrics: {
      duration: '7 Days / 6 Nights',
      groupSize: 'All-Inclusive / Small Group',
      season: 'December to May',
      language: 'English & Spanish Guided',
      pace: 'Relaxed & Exploratory'
    },
    itinerary: [
      {
        day: 1,
        title: 'Cancun Arrival & Oceanfront Resort Check-In',
        location: 'Riviera Maya, Quintana Roo, Mexico',
        transport: 'Private Executive Suburban Chauffeur',
        meals: 'Gourmet All-Inclusive Dining & Margaritas',
        stay: 'Secrets Maroma Beach Riviera Cancun / Rosewood Mayakoba (5-Star)',
        img: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=800&q=80',
        content: 'Arrive at Cancun International Airport (CUN) and meet your private chauffeur for transfer to your AAA 5-Diamond all-inclusive oceanfront sanctuary on Maroma Beach, recognized among the world’s top beaches. Savor chilled craft cocktails on your private terrace overlooking turquoise waves.',
        places: ['Cancun International Airport (CUN)', 'Maroma Beachfront', 'Private Oceanfront Terrace', 'Sunset Beach Palapa Lounge']
      },
      {
        day: 2,
        title: 'Isla Mujeres Luxury Catamaran Sail & Coral Reef Snorkel',
        location: 'Cancun Bay & Isla Mujeres',
        transport: '45ft Sailing Catamaran',
        meals: 'All-Inclusive Breakfast, Catamaran Lunch, French Bistro Dinner',
        stay: 'Secrets Maroma Beach Riviera Cancun',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        content: 'Board a catamaran sailing into the bright turquoise bay. Snorkel among the coral gardens of El Farito and the MUSA underwater sculpture museum. Dock at Isla Mujeres to explore colorful Playa Norte and rent golf carts to tour the Punta Sur cliffs where the sun first touches Mexico.',
        places: ['Cancun Marina Pier', 'MUSA Underwater Sculpture Reef', 'Playa Norte White Sands', 'Punta Sur Sea Cliffs']
      },
      {
        day: 3,
        title: 'Chichen Itza Wonder of the World & Ik Kil Cenote',
        location: 'Yucatan Peninsula',
        transport: 'Private Air-Conditioned Suburban',
        meals: 'Breakfast, Yucatecan Hacienda Buffet, Dinner',
        stay: 'Secrets Maroma Beach Riviera Cancun',
        img: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80',
        content: 'Beat the tour buses with early VIP access to Chichen Itza. Stand before the monumental El Castillo pyramid, the Great Ball Court, and the Temple of the Warriors with an expert archaeologist. Cool off by swimming in the emerald waters of Cenote Ik Kil beneath hanging liana vines.',
        places: ['Chichen Itza Kukulkan Pyramid', 'Great Ball Court & Observatory', 'Cenote Ik Kil Sacred Sinkhole', 'Historic Valladolid Colonial Square']
      },
      {
        day: 4,
        title: 'Tulum Clifftop Mayan Ruins & Akumal Sea Turtles',
        location: 'Tulum & Akumal, Riviera Maya',
        transport: 'Private Vehicle',
        meals: 'All-Inclusive Breakfast, Tulum Beach Club Lunch, Dinner',
        stay: 'Secrets Maroma Beach Riviera Cancun',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        content: 'Visit the clifftop fortress of Tulum, the only Mayan city built directly on the Caribbean coast. Descend the wooden stairs to the beach below the ruins for a swim. In the afternoon, snorkel in the calm waters of Akumal Bay where wild green sea turtles feed peacefully on sea grasses.',
        places: ['Tulum Clifftop Archaeological Zone', 'El Castillo Coastal View', 'Akumal Bay Sea Turtle Sanctuary', 'Tulum Hotel Zone Boutiques']
      },
      {
        day: 5,
        title: 'Rio Secreto Underground River & Subterranean Caves',
        location: 'Playa del Carmen Nature Reserve',
        transport: 'Private Van',
        meals: 'Breakfast, Jungle Reserve Lunch, Steakhouse Dinner',
        stay: 'Secrets Maroma Beach Riviera Cancun',
        img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        content: 'Suit up with a wetsuit and headlamp to hike and swim through Rio Secreto, a crystal subterranean cave system millions of years old. Marvel at thousands of delicate stalactites and stalagmites hanging over turquoise fresh water in an otherworldly underground cathedral.',
        places: ['Rio Secreto Nature Reserve', 'Subterranean River Caverns', 'Crystal Cave Cathedral', '5th Avenue Playa del Carmen Walk']
      },
      {
        day: 6,
        title: 'Resort Beachfront Relaxation & Private Tequila Tasting',
        location: 'Maroma Beach',
        transport: 'Resort Leisure',
        meals: 'All-Inclusive Unlimited Gourmet Dining & Premium Tequilas',
        stay: 'Secrets Maroma Beach Riviera Cancun',
        img: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=800&q=80',
        content: 'Enjoy a day of pure relaxation on Maroma Beach. Paddleboard on calm water, recline in an oceanfront cabana, and attend an exclusive private Tequila & Mezcal masterclass with the resort master tequilero, pairing artisanal añejos with dark Mexican chocolates.',
        places: ['Maroma Beach Cabanas', 'Hydrotherapy Spa Circuit', 'Private Master Tequilero Tasting', 'Sunset Beachfront Candlelit Dinner']
      },
      {
        day: 7,
        title: 'Morning Caribbean Dip & Chauffeur Transfer to CUN',
        location: 'Cancun International Airport',
        transport: 'Private Executive Chauffeur Transfer',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=800&q=80',
        content: 'Take one last morning swim in the warm Caribbean Sea. Enjoy breakfast on your terrace before checking out. Your private chauffeur transfers you to Cancun International Airport (CUN) for your flight home.',
        places: ['Beachfront Morning Stroll', 'Resort Check-out', 'Cancun International Airport (CUN)']
      }
    ],
    inclusions: [
      '6 Nights in Luxury 5-Star Oceanfront Suite at Secrets Maroma Beach',
      'Unlimited luxury all-inclusive gourmet dining across 8 restaurants and top-shelf spirits',
      'Private round-trip airport transfers in luxury Suburban with chilled drinks',
      'Full-day private guided Chichen Itza and Cenote Ik Kil tour with archaeologist',
      'Isla Mujeres catamaran sailing excursion with snorkeling equipment and open bar',
      'Tulum coastal ruins tour and Akumal sea turtle swimming experience',
      'Rio Secreto underground river expedition ticket and equipment',
      'All Mexican hotel taxes, environmental fees, and resort service charges'
    ],
    exclusions: [
      'International flights to/from Cancun (CUN)',
      'Motorized water sports (jet skis, parasailing)',
      'Spa treatments at the resort world-class spa',
      'Travel and medical insurance',
      'Driver and private guide gratuities'
    ]
  },

  // 17. IMPERIAL JAPAN
  {
    slug: 'japan',
    fileName: 'package-japan.html',
    title: 'Imperial Japan: Shrines, Tea & Zen',
    country: 'Japan',
    destination: 'Tokyo, Takayama & Kyoto, Japan',
    category: 'Cultural Tours',
    duration: '10 Days / 9 Nights',
    price: '$2,190',
    heroImg: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80',
    overview: 'A masterfully curated journey bridging ultramodern innovation and timeless imperial tradition. Ride 300 km/h Shinkansen bullet trains, stay in authentic hot-spring Ryokans, participate in private Zen tea ceremonies, and walk beneath thousands of vermilion torii gates.',
    highlights: [
      { icon: 'fa-solid fa-torii-gate', title: 'Fushimi Inari & Golden Pavilion', desc: 'Walk the 10,000 torii gate mountain path and marvel at Kinkaku-ji reflected in mirror ponds.' },
      { icon: 'fa-solid fa-train', title: '7-Day JR Shinkansen Pass', desc: 'High-speed bullet train travel across Mount Fuji foothills and Japanese Alps.' },
      { icon: 'fa-solid fa-hot-tub-person', title: 'Authentic Onsen Ryokan Stay', desc: 'Traditional tatami suites, cedar hot-spring onsen baths, and multi-course Kaiseki feasts.' },
      { icon: 'fa-solid fa-leaf', title: 'Private Zen Master Tea Ceremony', desc: 'Centuries-old chanoyu ritual inside a quiet historic temple sub-temple in Kyoto.' }
    ],
    metrics: {
      duration: '10 Days / 9 Nights',
      groupSize: 'Small Group (Max 12)',
      season: 'March–May (Cherry Blossom) & Oct–Nov (Autumn Foliage)',
      language: 'English Speaking Local Guide',
      pace: 'Cultural & Exploratory'
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Tokyo & Shinjuku Skyline Evening Walk',
        location: 'Tokyo, Japan',
        transport: 'Private Executive Chauffeur from Haneda/Narita',
        meals: 'Welcome Izakaya Dinner & Japanese Craft Beer',
        stay: 'The Capitol Hotel Tokyu / Cerulean Tower Tokyu Hotel',
        img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
        content: 'Touch down at Tokyo Haneda or Narita Airport. Your private driver transfers you into the heart of Tokyo. Check into your luxury high-rise hotel. As neon signs illuminate the metropolis, explore the buzzing alleys of Omoide Yokocho and view the Shinjuku skyline from above.',
        places: ['Haneda / Narita Airport', 'Shinjuku Neon District', 'Omoide Yokocho Lantern Alley', 'Tokyo Metropolitan Government Building Lookout']
      },
      {
        day: 2,
        title: 'Historic Asakusa Senso-ji & Meiji Shinto Shrine',
        location: 'Tokyo',
        transport: 'Tokyo Metro & Private Coach',
        meals: 'Breakfast, Tsukiji Outer Market Seafood Lunch, Dinner',
        stay: 'The Capitol Hotel Tokyu',
        img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
        content: 'Walk through the giant red Thunder Gate into Senso-ji, Tokyo’s oldest Buddhist temple founded in 645 AD. Browse Nakamise shopping street for traditional senbei rice crackers. Stroll through the tranquil cedar forest surrounding Meiji Jingu Shrine and watch the famous scramble at Shibuya Crossing.',
        places: ['Senso-ji Temple & Kaminarimon', 'Nakamise Dori Crafts', 'Tsukiji Outer Fish Market', 'Meiji Jingu Shrine & Shibuya Crossing']
      },
      {
        day: 3,
        title: 'Mount Fuji 5th Station & Lake Kawaguchiko Cruise',
        location: 'Mount Fuji & Hakone Area',
        transport: 'Private Panoramic Highway Coach & Lake Boat',
        meals: 'Breakfast, Hoto Noodle Lunch, Teppanyaki Dinner',
        stay: 'The Capitol Hotel Tokyu',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        content: 'Travel to the sacred volcanic cone of Mount Fuji. Ascend by road to the 5th Station at 2,305m above sea level for views above the clouds. Cruise across mirror-smooth Lake Kawaguchiko with Mount Fuji reflected on the water, and visit the iconic red Chureito Pagoda.',
        places: ['Mount Fuji 5th Station', 'Lake Kawaguchiko Scenic Boat', 'Chureito Pagoda & Fuji View', 'Oshino Hakkai Spring Ponds']
      },
      {
        day: 4,
        title: 'Shinkansen to Alpine Takayama & Historic Sanmachi Suji',
        location: 'Tokyo to Takayama (Gifu Prefecture)',
        transport: 'Tokaido Shinkansen & Hida Wide View Mountain Express',
        meals: 'Breakfast, Bento Lunch, Hida Beef Kaiseki Dinner',
        stay: 'Honoki no Sato Wanosato / Ryokan Tanabe Takayama',
        img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80',
        content: 'Board the Shinkansen bullet train traveling through mountain river valleys to the Edo-period merchant town of Takayama. Check into an authentic traditional Ryokan. Walk through the preserved dark-wood sake breweries and craft merchant houses of Sanmachi Suji, and soak in natural thermal onsen baths.',
        places: ['Nagoya Shinkansen Junction', 'Hida Scenic Valley Rail', 'Sanmachi Suji Historic Quarter', 'Traditional Hot Spring Onsen Bath']
      },
      {
        day: 5,
        title: 'UNESCO Shirakawa-go Gassho Farmhouses & Transfer to Kyoto',
        location: 'Shirakawa-go & Kyoto',
        transport: 'Mountain Coach & Shinkansen Bullet Train',
        meals: 'Breakfast, Alpine Soba Lunch, Kyoto Tofu Dinner',
        stay: 'The Thousand Kyoto / Hotel The Celestine Kyoto Gion',
        img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
        content: 'Visit the fairytale UNESCO village of Shirakawa-go, famous for its steep thatched-roof gassho-zukuri farmhouses built to withstand heavy mountain snows. Tour the inside of Wada House before taking the train south to Kyoto, the imperial capital of Japan for over a thousand years.',
        places: ['Shirakawa-go Ogimachi Village', 'Shiroyama Viewpoint', 'Wada House Gassho Farmhouse', 'Kyoto Station Monument']
      },
      {
        day: 6,
        title: 'Kinkaku-ji Golden Pavilion & Arashiyama Bamboo Grove',
        location: 'Kyoto',
        transport: 'Private Coach & Romantic Sagano Railway',
        meals: 'Breakfast, Shojin Ryori Zen Lunch, Gion Dinner',
        stay: 'The Thousand Kyoto',
        img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
        content: 'Gaze in awe at Kinkaku-ji, the top two floors covered entirely in pure gold leaf reflecting in the Kyoko-chi mirror pond. Journey to Arashiyama to walk through the ethereal green canopy of the Sagano Bamboo Forest, visit the UNESCO garden of Tenryu-ji Temple, and cross the Togetsukyo Bridge.',
        places: ['Kinkaku-ji (Golden Pavilion)', 'Arashiyama Bamboo Forest', 'Tenryu-ji Zen Temple Garden', 'Togetsukyo Moon Crossing Bridge']
      },
      {
        day: 7,
        title: 'Fushimi Inari 10,000 Torii Gates & Private Zen Tea Ceremony',
        location: 'Kyoto',
        transport: 'Private Vehicle & Walking',
        meals: 'Breakfast, Kyoto Kaiseki Bento Lunch, Dinner',
        stay: 'The Thousand Kyoto',
        img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
        content: 'Walk the winding vermilion tunnels of Fushimi Inari Taisha, where 10,000 torii gates snake up sacred Mount Inari dedicated to the Shinto deity of rice and commerce. In the afternoon, enter a secluded temple sub-temple for a private Zen Tea Ceremony (chanoyu) with a master tea practitioner.',
        places: ['Fushimi Inari Shrine Torii Trails', 'Okusha Inner Shrine', 'Daitoku-ji Zen Sub-Temple', 'Authentic Chanoyu Tea Ceremony']
      },
      {
        day: 8,
        title: 'Historic Gion Geisha District & Kiyomizu-dera Temple',
        location: 'Higashiyama & Gion, Kyoto',
        transport: 'Walking Tour',
        meals: 'Breakfast, Higashiyama Teahouse Lunch, Dinner',
        stay: 'The Thousand Kyoto',
        img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80',
        content: 'Climb the historic cobblestone slopes of Ninenzaka and Sannenzaka lined with traditional wooden teahouses. Visit Kiyomizu-dera, perched on massive wooden pillars without a single nail. In the evening, walk the lantern-lit alleys of Gion along the Shirakawa canal, catching glimpses of Geikos and Maikos.',
        places: ['Kiyomizu-dera Wooden Stage', 'Ninenzaka & Sannenzaka Lanes', 'Yasaka Shrine', 'Gion Hanamikoji Lantern Street']
      },
      {
        day: 9,
        title: 'Ancient Nara Deer Park & Todai-ji Giant Bronze Buddha',
        location: 'Nara & Kyoto',
        transport: 'Kintetsu Express Train',
        meals: 'Breakfast, Nara Traditional Soba Lunch, Farewell Feast',
        stay: 'The Thousand Kyoto',
        img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
        content: 'Travel to Japan’s first permanent imperial capital, Nara. Bow to the friendly sacred shika deer roaming freely throughout Nara Park. Stand inside Todai-ji Temple, the world’s largest wooden building, housing the colossal 15-meter Daibutsu (Great Bronze Buddha), cast in 752 AD.',
        places: ['Nara Deer Park', 'Todai-ji Great Buddha Hall (Daibutsu)', 'Kasuga Taisha Lantern Shrine', 'Farewell Wagyu Beef Sukiyaki Feast']
      },
      {
        day: 10,
        title: 'Haruka Express to Kansai Airport & Departure',
        location: 'Kyoto to Kansai International Airport (KIX)',
        transport: 'JR Haruka Airport Express Train (First Class)',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
        content: 'Enjoy your final Japanese breakfast. Board the JR Haruka Express train directly from Kyoto Station to Kansai International Airport in Osaka (KIX) for your flight connection home.',
        places: ['Kyoto Station', 'JR Haruka Express Train', 'Kansai International Airport (KIX)']
      }
    ],
    inclusions: [
      '8 Nights in 5-Star Luxury Western Hotels (Tokyo and Kyoto)',
      '1 Night in Authentic Deluxe Hot-Spring Onsen Ryokan in Takayama with Kaiseki dinner',
      '7-Day Japan Rail Pass (Ordinary or Green Class) for all Shinkansen bullet trains',
      'All private airport arrival and departure transfers',
      'Private Zen tea ceremony in historic Kyoto temple',
      'Mount Fuji and Lake Kawaguchiko full-day excursion',
      'UNESCO Shirakawa-go thatched farmhouse village guided tour',
      'Nara Todai-ji Great Buddha and Deer Park excursion',
      'Daily breakfast throughout'
    ],
    exclusions: [
      'International flights to Tokyo and from Osaka',
      'Baggage forwarding services (takuhaibin) beyond included vouchers',
      'Lunches and dinners not listed as included',
      'Personal temple amulet purchases and shopping',
      'Travel and medical insurance',
      'Guide and driver gratuities'
    ]
  },

  // 18. INDIA GOLDEN TRIANGLE
  {
    slug: 'india',
    fileName: 'package-india.html',
    title: 'India’s Golden Triangle & Royal Forts',
    country: 'India',
    destination: 'Delhi, Agra & Jaipur, India',
    category: 'Cultural Tours',
    duration: '8 Days / 7 Nights',
    price: '$1,150',
    heroImg: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1920&q=80',
    overview: 'The immortal Golden Triangle of Northern India. From the bustling lanes and Mughal monuments of Delhi to the peerless white marble poetry of the Taj Mahal in Agra, and onward to the pink sandstone palaces, hill forts, and royal heritage of Jaipur, Rajasthan.',
    highlights: [
      { icon: 'fa-solid fa-monument', title: 'Taj Mahal Sunrise Visit', desc: 'Witness the morning sun illuminate the world’s most magnificent monument to love.' },
      { icon: 'fa-solid fa-chess-rook', title: 'Amber Fort Elephant / Jeep Ascent', desc: 'Climb to the hilltop fortress of Jaipur with mirrored Sheesh Mahal palace rooms.' },
      { icon: 'fa-solid fa-building-columns', title: 'Mughal Delhi & Rickshaw Ride', desc: 'Jama Masjid, Chandni Chowk spice bazaar, Qutub Minar, and Humayun’s Tomb.' },
      { icon: 'fa-solid fa-crown', title: 'City Palace & Hawa Mahal', desc: 'Jaipur royal residence of the Maharaja and the honeycomb Palace of Winds.' }
    ],
    metrics: {
      duration: '8 Days / 7 Nights',
      groupSize: 'Private / Small Group',
      season: 'October to March',
      language: 'English Speaking Chauffeur & Guides',
      pace: 'Heritage & Cultural'
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in New Delhi & Welcome to India',
        location: 'New Delhi, India',
        transport: 'Private Air-Conditioned Chauffeur Transfer',
        meals: 'Traditional Welcome Garland & Mughlai Dinner',
        stay: 'The Imperial New Delhi / The Leela Palace New Delhi (5-Star)',
        img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
        content: 'Arrive at Indira Gandhi International Airport (DEL) in New Delhi. Your private chauffeur meets you at the exit gate with traditional marigold garlands and escorts you to your luxury heritage palace hotel. Relax and recover from your flight with fine Mughlai cuisine.',
        places: ['Indira Gandhi International Airport', 'Connaught Place', 'The Imperial Hotel Heritage Corridors', 'India Gate Boulevard']
      },
      {
        day: 2,
        title: 'Old Delhi Rickshaw Safari & New Delhi Monuments',
        location: 'Delhi',
        transport: 'Private Chauffeur Sedan & Cycle Rickshaw',
        meals: 'Breakfast, Karim’s Historic Lunch, Dinner',
        stay: 'The Imperial New Delhi',
        img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
        content: 'Board a cycle rickshaw winding through the vibrant spice markets of Chandni Chowk and Khari Baoli. Tour the monumental Jama Masjid mosque. In the afternoon, explore New Delhi’s grand colonial vistas: the India Gate war memorial, President’s House, UNESCO Humayun’s Tomb, and the 73-meter Qutub Minar.',
        places: ['Jama Masjid Great Mosque', 'Chandni Chowk & Khari Baoli Spice Market', 'Humayun’s Garden Tomb', 'Qutub Minar Tower & Iron Pillar']
      },
      {
        day: 3,
        title: 'Express Highway to Agra & Sunset Taj Mahal from Mehtab Bagh',
        location: 'Delhi to Agra, Uttar Pradesh',
        transport: 'Yamuna Expressway Private Chauffeur Drive (3.5 hours)',
        meals: 'Breakfast, Mughlai Curry Lunch, Dinner',
        stay: 'The Oberoi Amarvilas Agra / ITC Mughal Agra (5-Star)',
        img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        content: 'Drive via the Yamuna Expressway to Agra, the capital of the Mughal Empire at its peak. Check into your hotel where all rooms overlook the Taj Mahal. In the late afternoon, visit the gardens of Mehtab Bagh across the Yamuna River to watch the setting sun reflect against the white marble dome.',
        places: ['Yamuna Expressway', 'Mehtab Bagh (Moonlight Garden)', 'Yamuna Riverbank Sunset View', 'Agra Marble Inlay Artisan Workshop']
      },
      {
        day: 4,
        title: 'Sunrise at the Taj Mahal & Historic Agra Fort',
        location: 'Agra',
        transport: 'Private Vehicle & Battery-Operated Golf Cart',
        meals: 'Breakfast, Royal Agra Lunch, Dinner',
        stay: 'The Oberoi Amarvilas Agra',
        img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        content: 'Pass through the royal gates of the Taj Mahal at dawn. Watch the ivory-white marble glow in soft pink and golden morning light. Walk through the interior cenotaph chambers inlaid with semi-precious lapis lazuli and jasper. In the afternoon, explore the red-sandstone fortress of Agra Fort.',
        places: ['Taj Mahal Sunrise Visit', 'Mughal Charbagh Water Gardens', 'Agra Fort (Red Fort)', 'Jahangiri Mahal & Diwan-i-Khas']
      },
      {
        day: 5,
        title: 'Fatehpur Sikri Ghost City & Drive to the Pink City of Jaipur',
        location: 'Agra to Jaipur, Rajasthan',
        transport: 'Private Air-Conditioned Chauffeur Drive (4.5 hours)',
        meals: 'Breakfast, Heritage Haveli Lunch, Rajasthani Thali Dinner',
        stay: 'Rambagh Palace Jaipur / Fairmont Jaipur (5-Star)',
        img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        content: 'En route to Rajasthan, stop at the preserved red-sandstone ghost city of Fatehpur Sikri, built by Emperor Akbar and abandoned due to water scarcity. Cross into the land of Rajput kings to Jaipur, the "Pink City." Check in at the royal Rambagh Palace, former residence of the Maharaja of Jaipur.',
        places: ['Fatehpur Sikri Imperial Complex', 'Buland Darwaza (Gate of Magnificence)', 'Abhaneri Stepwell (Chand Baori)', 'Jaipur Pink City Gates']
      },
      {
        day: 6,
        title: 'Hilltop Amber Fort Ascent & Jal Mahal Water Palace',
        location: 'Jaipur, Rajasthan',
        transport: 'Jeep Ascent & Private Chauffeur',
        meals: 'Breakfast, Royal Jaipur Lunch, Palace Dinner',
        stay: 'Rambagh Palace Jaipur',
        img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        content: 'Ascend to the hilltop Amber Fort overlooking Maota Lake by decorated 4x4 open jeep. Walk through the dazzling Sheesh Mahal (Mirror Palace) where walls are covered in thousands of convex Belgian mirrors. Stop at the water palace of Jal Mahal floating in Man Sagar Lake.',
        places: ['Amber Fort & Fort Ramparts', 'Sheesh Mahal (Mirror Palace)', 'Jal Mahal Floating Palace View', 'Anokhi Hand-Block Printing Museum']
      },
      {
        day: 7,
        title: 'City Palace, Jantar Mantar Observatory & Hawa Mahal',
        location: 'Jaipur',
        transport: 'Private Vehicle & Walking',
        meals: 'Breakfast, Heritage Cafe Lunch, Royal Farewell Feast',
        stay: 'Rambagh Palace Jaipur',
        img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        content: 'Explore the City Palace of Jaipur, still home to the titular Maharaja family, with its Peacock Gate and armory collections. Visit the UNESCO Jantar Mantar astronomical observatory containing the world’s largest stone sundial. Photograph the iconic 953-window façade of Hawa Mahal (Palace of Winds).',
        places: ['Jaipur City Palace & Museums', 'Pritam Niwas Chowk (Peacock Gate)', 'Jantar Mantar UNESCO Observatory', 'Hawa Mahal (Palace of Winds)']
      },
      {
        day: 8,
        title: 'Scenic Drive Back to Delhi & Airport Departure',
        location: 'Jaipur to Delhi Airport',
        transport: 'Private Highway Chauffeur Transfer (4.5 hours)',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        content: 'Enjoy a leisurely breakfast on the manicured palace lawns. Complete check-out before your private chauffeur transfers you via the Delhi–Mumbai Expressway directly to Indira Gandhi International Airport (DEL) in Delhi for your return flight home.',
        places: ['Palace Courtyard Morning', 'Delhi-Jaipur Expressway', 'Delhi International Airport (DEL)']
      }
    ],
    inclusions: [
      '7 Nights in 5-Star Luxury Heritage Palaces (The Imperial Delhi, Oberoi Amarvilas, Rambagh Palace)',
      'Dedicated private air-conditioned Toyota Innova Crysta / sedan with professional chauffeur',
      'All toll taxes, parking, fuel, interstate permits, and driver allowances',
      'Certified English-speaking local government monument guides in Delhi, Agra, and Jaipur',
      'Skip-the-line entrance tickets to the Taj Mahal, Agra Fort, Amber Fort, and City Palace',
      'Old Delhi cycle rickshaw ride through Chandni Chowk spice bazaar',
      'Open jeep ascent to Amber Fort hilltop ramparts',
      'Daily 5-star royal breakfast buffets'
    ],
    exclusions: [
      'International flights to/from India',
      'Indian Tourist e-Visa fees',
      'Camera / video camera permits at monuments',
      'Lunches and dinners not specified in the package',
      'Personal gemstone, jewelry, and textile shopping purchases',
      'Travel and medical insurance',
      'Driver and guide tipping'
    ]
  },

  // 19. ANCIENT EGYPT & NILE CRUISE
  {
    slug: 'egypt',
    fileName: 'package-egypt.html',
    title: 'Ancient Pharaohs & Nile Luxury Cruise',
    country: 'Egypt',
    destination: 'Cairo, Luxor & Aswan, Egypt',
    category: 'Cultural Tours',
    duration: '9 Days / 8 Nights',
    price: '$1,850',
    heroImg: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1920&q=80',
    overview: 'Unravel 5,000 years of civilization on this luxury Egyptian odyssey. Stand in awe beneath the Great Pyramids of Giza and the Sphinx, sail the legendary Nile River on a 5-star cruiser, explore the tomb of King Tutankhamun in the Valley of the Kings, and marvel at the colossal sun temples of Abu Simbel.',
    highlights: [
      { icon: 'fa-solid fa-pyramid', title: 'Great Pyramids & Sphinx', desc: 'Private tour of Giza plateau, solar boat museum, and the Grand Egyptian Museum.' },
      { icon: 'fa-solid fa-ship', title: '5-Star Luxury Nile Cruise', desc: '4 nights sailing between Luxor and Aswan with private river-view balcony cabin.' },
      { icon: 'fa-solid fa-dungeon', title: 'Valley of the Kings', desc: 'Descend into subterranean royal tombs with vivid hieroglyphic paintings intact.' },
      { icon: 'fa-solid fa-monument', title: 'Abu Simbel Sun Temples', desc: 'Colossal mountain temples of Ramses II and Queen Nefertari on Lake Nasser.' }
    ],
    metrics: {
      duration: '9 Days / 8 Nights',
      groupSize: 'Small Group (Max 12)',
      season: 'October to April',
      language: 'English Speaking Egyptologist Guide',
      pace: 'Archaeological & River Cruise'
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Cairo & View of the Giza Pyramids',
        location: 'Cairo, Egypt',
        transport: 'Private Executive Chauffeur Transfer',
        meals: 'Welcome Egyptian Mezze Dinner',
        stay: 'Marriott Mena House Cairo (Pyramid View Room)',
        img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80',
        content: 'Land at Cairo International Airport (CAI) where our VIP airport coordinator assists through immigration and customs. Transfer to the historic Marriott Mena House hotel, situated in the shadow of the Great Pyramids. Sip mint tea while gazing across the garden pool at the pyramid apex.',
        places: ['Cairo International Airport', 'Marriott Mena House Historic Estate', 'Giza Plateau Night Skyline', 'Pyramid View Garden Terrace']
      },
      {
        day: 2,
        title: 'Giza Pyramids, Great Sphinx & Grand Egyptian Museum',
        location: 'Giza & Cairo',
        transport: 'Private Chauffeur & Camel Ride',
        meals: 'Breakfast, Egyptian Grill Lunch, Dinner',
        stay: 'Marriott Mena House Cairo',
        img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80',
        content: 'Spend the morning on the Giza Plateau with your private Egyptologist. Gaze up at the Great Pyramid of Khufu, the only surviving Wonder of the Ancient World. Ride camels across desert sands for panoramic views of all three pyramids, stand before the enigmatic Great Sphinx, and tour the new Grand Egyptian Museum (GEM).',
        places: ['Great Pyramid of Khufu (Cheops)', 'Pyramids of Khafre and Menkaure', 'Great Sphinx of Giza', 'Grand Egyptian Museum (GEM)']
      },
      {
        day: 3,
        title: 'Fly to Luxor, Board 5-Star Nile Cruise & Karnak Temple',
        location: 'Cairo to Luxor',
        transport: 'Domestic Flight (included) & 5-Star Luxury Nile Cruiser',
        meals: 'Breakfast, Cruise Welcome Lunch, Captain’s Dinner',
        stay: 'The Oberoi Zahra / Sanctuary Sun Boat (Luxury Nile Cruiser)',
        img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        content: 'Fly south to Luxor, the ancient capital of Thebes. Check in to your riverfront stateroom aboard your 5-star Nile cruise ship. In the afternoon, tour the monumental Karnak Temple complex, walking through the Great Hypostyle Hall containing 134 towering sandstone columns. At dusk, visit illuminated Luxor Temple.',
        places: ['Luxor Airport', '5-Star Nile Cruise Check-In', 'Karnak Temple Complex & Hypostyle Hall', 'Illuminated Luxor Temple']
      },
      {
        day: 4,
        title: 'Valley of the Kings, King Tut Tomb & Hatshepsut Temple',
        location: 'West Bank of Luxor',
        transport: 'Air-Conditioned Coach & River Boat',
        meals: 'Breakfast, Cruise Lunch, Evening Galabeya Party Dinner',
        stay: '5-Star Luxury Nile Cruiser',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        content: 'Cross the Nile to the West Bank. Descend into royal painted tombs in the Valley of the Kings, including the burial chamber of King Tutankhamun. Visit the terraced mortuary temple of Queen Hatshepsut rising out of desert cliffs at Deir el-Bahari and the twin Colossi of Memnon.',
        places: ['Valley of the Kings (KV62 King Tut)', 'Hatshepsut Terraced Temple', 'Colossi of Memnon', 'Sailing past Esna Lock']
      },
      {
        day: 5,
        title: 'Falcon God Temple of Edfu & Crocodile Temple of Kom Ombo',
        location: 'Edfu & Kom Ombo, Upper Egypt',
        transport: 'Nile Cruise Ship & Horse Carriage in Edfu',
        meals: 'Breakfast, Sundeck Buffet Lunch, Nubian Dinner',
        stay: '5-Star Luxury Nile Cruiser',
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        content: 'Take a horse carriage to the Temple of Horus at Edfu, the best-preserved cult temple in all of Egypt. Sail onward as date palms and golden sand dunes glide past the sundeck pool. In the afternoon, dock at Kom Ombo to explore the rare dual temple dedicated to Sobek the crocodile god and Horus the falcon.',
        places: ['Temple of Horus at Edfu', 'Nile River Sundeck Cruising', 'Kom Ombo Dual Temple', 'Mummified Crocodile Museum']
      },
      {
        day: 6,
        title: 'Aswan High Dam, Philae Temple of Isis & Felucca Sail',
        location: 'Aswan, Egypt',
        transport: 'Nile Cruiser, Motorboat to Island, & Traditional Felucca',
        meals: 'Breakfast, Island Lunch, Farewell Cruise Dinner',
        stay: '5-Star Luxury Nile Cruiser',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        content: 'Arrive in picturesque Aswan where desert dunes plunge directly into the Nile. Visit the modern engineering marvel of the Aswan High Dam. Take a boat to the romantic island temple of Philae dedicated to the goddess Isis. In the late afternoon, enjoy a peaceful sail on a traditional wooden felucca around Elephantine Island.',
        places: ['Aswan High Dam', 'Philae Island Temple of Isis', 'Unfinished Obelisk Granite Quarry', 'Traditional Felucca Sail around Elephantine Island']
      },
      {
        day: 7,
        title: 'Abu Simbel Colossal Temples & Return Flight to Cairo',
        location: 'Abu Simbel & Cairo',
        transport: 'Air-Conditioned Coach / Flight to Abu Simbel & Flight to Cairo',
        meals: 'Breakfast, Aswan Lunch, Cairo Gourmet Dinner',
        stay: 'Four Seasons Hotel Cairo at Nile Plaza',
        img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80',
        content: 'Travel south through the Nubian desert to the awe-inspiring rock-cut temples of Abu Simbel on Lake Nasser. Marvel at the four colossal 20-meter statues of Ramses II carved into the mountainside. Fly back to Cairo and check in at the Four Seasons on the banks of the Nile.',
        places: ['Abu Simbel Great Temple of Ramses II', 'Temple of Queen Nefertari', 'Lake Nasser Shoreline', 'Four Seasons Nile Plaza Cairo']
      },
      {
        day: 8,
        title: 'Islamic & Coptic Cairo & Khan el-Khalili Bazaar',
        location: 'Old Cairo',
        transport: 'Private Chauffeur Tour',
        meals: 'Breakfast, Historic Naguib Mahfouz Café Lunch, Dinner',
        stay: 'Four Seasons Hotel Cairo at Nile Plaza',
        img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
        content: 'Discover Coptic Cairo, visiting the Hanging Church and the Church of St. Sergius where the Holy Family took refuge. Ascend to the medieval Citadel of Saladin and the Mosque of Muhammad Ali. Conclude in the 14th-century labyrinth of Khan el-Khalili bazaar for brass lamps, spices, and perfumes.',
        places: ['Coptic Hanging Church', 'Citadel of Saladin & Alabaster Mosque', 'Khan el-Khalili Historic Bazaar', 'El Fishawy Historic Teahouse']
      },
      {
        day: 9,
        title: 'Farewell Cairo & Airport Transfer Departure',
        location: 'Cairo International Airport',
        transport: 'Private Executive Chauffeur Transfer',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80',
        content: 'Enjoy breakfast overlooking the Nile. Complete check-out before your private chauffeur transfers you to Cairo International Airport (CAI) with VIP airport lounge access for your flight home.',
        places: ['Nile Promenade Morning', 'Hotel Check-out', 'Cairo International Airport (CAI)']
      }
    ],
    inclusions: [
      '4 Nights in 5-Star Luxury Hotels in Cairo (Marriott Mena House & Four Seasons Nile Plaza)',
      '4 Nights aboard 5-Star Luxury Nile Cruise Ship with full board dining and balcony cabin',
      'Domestic flights within Egypt (Cairo–Luxor and Aswan–Cairo)',
      'Excursion to Abu Simbel colossal sun temples with transportation and entrance tickets',
      'Private certified English-speaking Egyptologist guides for all archaeological excursions',
      'Entrance fees to Giza Pyramids, Sphinx, GEM, Valley of the Kings, Karnak, Luxor, Edfu, Philae',
      'Traditional sunset felucca sailing trip on the Nile in Aswan',
      'All private airport and port transfers throughout'
    ],
    exclusions: [
      'International flights to/from Cairo',
      'Egyptian entry visa ($25 payable upon arrival)',
      'Tomb of Tutankhamun interior entrance supplement ($15)',
      'Beverages and alcohol aboard the Nile cruise ship',
      'Personal tipping (Nile cruise crew kitty approx $50/person)',
      'Travel and medical insurance'
    ]
  },

  // 20. SINGAPORE FUTURISTIC CITY & MARINA WONDER
  {
    slug: 'singapore',
    fileName: 'package-singapore.html',
    title: 'Singapore Futuristic City & Marina Wonder',
    country: 'Singapore',
    destination: 'Singapore',
    category: 'Cultural Tours',
    duration: '4 Days / 3 Nights',
    price: '$1,280',
    heroImg: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1920&q=80',
    overview: 'Step into the garden city of tomorrow. Experience the breathtaking futuristic architecture of Marina Bay Sands and Gardens by the Bay, ride scenic cable cars to Sentosa Island resort, cruise the historic Singapore River, and taste world-famous Michelin-rated hawker culinary delights.',
    highlights: [
      { icon: 'fa-solid fa-tree', title: 'Gardens by the Bay & Supertrees', desc: 'Cloud Forest mist waterfall, Flower Dome, and nightly Supertree light & sound show.' },
      { icon: 'fa-solid fa-building-columns', title: 'Marina Bay Sands SkyPark', desc: '57th floor observation deck with 360-degree views over the Singapore Strait.' },
      { icon: 'fa-solid fa-cable-car', title: 'Sentosa Scenic Cable Car', desc: 'Fly above the harbour and shipping lanes to the beaches and S.E.A. Aquarium.' },
      { icon: 'fa-solid fa-bowl-food', title: 'Michelin Hawker Safari', desc: 'Taste Hainanese chicken rice, chili crab, and satay in vibrant heritage quarters.' }
    ],
    metrics: {
      duration: '4 Days / 3 Nights',
      groupSize: 'Private / Small Group',
      season: 'Year-Round Tropical',
      language: 'English Speaking Guide',
      pace: 'City Wonder & Leisure'
    },
    itinerary: [
      {
        day: 1,
        title: 'Changi Jewel Rain Vortex & Gardens by the Bay Light Show',
        location: 'Marina Bay, Singapore',
        transport: 'Private Executive Chauffeur Transfer',
        meals: 'Welcome Singapore Sling & Jumbo Seafood Chili Crab Dinner',
        stay: 'Marina Bay Sands / The Fullerton Hotel Singapore (5-Star)',
        img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
        content: 'Touch down at award-winning Singapore Changi Airport and view the world’s tallest indoor waterfall, the Jewel Rain Vortex. Transfer to your luxury hotel overlooking Marina Bay. In the evening, visit Gardens by the Bay to walk the skyway between colossal solar Supertrees and watch the "Garden Rhapsody" light and music spectacle.',
        places: ['Jewel Changi Rain Vortex', 'Marina Bay Waterfront', 'Gardens by the Bay Supertree Grove', 'Garden Rhapsody Light Show']
      },
      {
        day: 2,
        title: 'Cloud Forest, Chinatown Heritage & Singapore River Cruise',
        location: 'Marina Bay & Historic Quarters',
        transport: 'Private Van & Electric River Boat',
        meals: 'Breakfast, Chinatown Hawker Lunch, Marina Bay Sands Dinner',
        stay: 'Marina Bay Sands / The Fullerton Hotel',
        img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
        content: 'Step inside the misty climate-controlled glass conservatory of the Cloud Forest to see a 35-meter indoor mountain waterfall surrounded by rare orchids. Explore Chinatown’s Buddha Tooth Relic Temple, the colorful shophouses of Kampong Glam, and board an electric bumboat cruising along the Singapore River to Clarke Quay.',
        places: ['Cloud Forest & Flower Dome', 'Buddha Tooth Relic Temple', 'Kampong Glam Sultan Mosque', 'Historic Singapore River Cruise']
      },
      {
        day: 3,
        title: 'Sentosa Island Cable Car, S.E.A. Aquarium & Siloso Sunset',
        location: 'Sentosa Island, Singapore',
        transport: 'Mount Faber Aerial Cable Car',
        meals: 'Breakfast, Beach Club Lunch, Coastal Sunset Dinner',
        stay: 'Marina Bay Sands / The Fullerton Hotel',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        content: 'Soar on the Singapore Cable Car across Keppel Harbour to Sentosa Island. Explore the monumental S.E.A. Aquarium, home to over 100,000 marine animals including hammerhead sharks and giant manta rays. Spend a relaxing afternoon on the golden sands of Siloso Beach.',
        places: ['Mount Faber Cable Car Station', 'S.E.A. Aquarium Giant Viewing Panel', 'Siloso Beach Palm Promenade', 'Wings of Time Multi-Sensory Night Show']
      },
      {
        day: 4,
        title: 'Merlion Park, Orchard Road Shopping & Changi Departure',
        location: 'Civic District to Changi Airport',
        transport: 'Private Executive Chauffeur Transfer',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
        content: 'Photograph the mythical water-spouting Merlion statue framed by the Marina skyline. Take a shopping stroll down the leafy boulevards of Orchard Road before checking out. Your private chauffeur transfers you to Changi Airport for your return flight.',
        places: ['Merlion Park Lookout', 'Civic District & Old Parliament', 'Orchard Road Boutiques', 'Changi Airport Departure Terminal']
      }
    ],
    inclusions: [
      '3 Nights in 5-Star Luxury Accommodations (Marina Bay Sands or The Fullerton)',
      'All private airport and city sightseeing transfers in air-conditioned executive vehicles',
      'Gardens by the Bay combo ticket: Cloud Forest & Flower Dome',
      'Marina Bay Sands SkyPark Observation Deck fast-track admission',
      'Sentosa Cable Car round-trip pass and S.E.A. Aquarium tickets',
      'Historic Singapore River electric cruise ticket',
      'Licensed English-speaking Singapore tourist guide',
      'Daily 5-star international breakfast buffets'
    ],
    exclusions: [
      'International flights to/from Singapore (SIN)',
      'Universal Studios Singapore tickets (available on request)',
      'Meals not specified in the day-wise itinerary',
      'Personal shopping purchases on Orchard Road',
      'Travel and medical insurance',
      'Guide and driver gratuities'
    ]
  },

  // 21. MALAYSIA TROPICAL RAINFOREST & HERITAGE ODYSSEY
  {
    slug: 'malaysia',
    fileName: 'package-malaysia.html',
    title: 'Malaysia Tropical Rainforest & Heritage Odyssey',
    country: 'Malaysia',
    destination: 'Kuala Lumpur & Penang, Malaysia',
    category: 'Cultural Tours',
    duration: '5 Days / 4 Nights',
    price: '$1,050',
    heroImg: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1920&q=80',
    overview: 'The best of vibrant Peninsula Malaysia. Marvel at the gleaming 88-story Petronas Twin Towers, climb the 272 rainbow steps into the limestone caverns of Batu Caves, and journey to the UNESCO culinary and artistic capital of George Town, Penang.',
    highlights: [
      { icon: 'fa-solid fa-tower-observation', title: 'Petronas Twin Towers Skybridge', desc: 'Walk the two-story glass bridge connecting the world’s tallest twin towers at level 41.' },
      { icon: 'fa-solid fa-mountain', title: 'Batu Caves Limestone Shrines', desc: '272 rainbow-painted steps beneath the giant golden statue of Lord Murugan.' },
      { icon: 'fa-solid fa-paint-roller', title: 'George Town UNESCO Street Art', desc: 'Discover Ernest Zacharevic’s whimsical interactive murals in historic shophouse lanes.' },
      { icon: 'fa-solid fa-train', title: 'Penang Hill Funicular Railway', desc: 'Ride the Swiss-built cable train to the cool 833m summit overlook and Kek Lok Si temple.' }
    ],
    metrics: {
      duration: '5 Days / 4 Nights',
      groupSize: 'Small Group / Couples',
      season: 'Year-Round Tropical',
      language: 'English Guided',
      pace: 'City & Heritage Culture'
    },
    itinerary: [
      {
        day: 1,
        title: 'Kuala Lumpur Arrival & Petronas Twin Towers Skybridge',
        location: 'Kuala Lumpur, Malaysia',
        transport: 'Private Executive Chauffeur Transfer',
        meals: 'Welcome Dinner & Jalan Alor Hawker Tasting',
        stay: 'Mandarin Oriental Kuala Lumpur / Grand Hyatt KL (5-Star)',
        img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
        content: 'Land at Kuala Lumpur International Airport (KLIA) and meet your private chauffeur for the drive into the futuristic skyline of KL. Check into your hotel adjoining KLCC Park. Walk the double-decker Skybridge of the Petronas Twin Towers at level 41 and visit the 86th-floor observation deck. In the evening, sample grilled satay skewers on bustling Jalan Alor street.',
        places: ['KLIA International Airport', 'Petronas Twin Towers Skybridge & Level 86 Deck', 'KLCC Park Lake Symphony Fountains', 'Jalan Alor Night Food Street']
      },
      {
        day: 2,
        title: 'Batu Caves Rainbow Steps & Historic Merdeka Square',
        location: 'Kuala Lumpur',
        transport: 'Private Air-Conditioned Coach',
        meals: 'Breakfast, Nasi Lemak Lunch, Rooftop Cocktails',
        stay: 'Mandarin Oriental Kuala Lumpur',
        img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
        content: 'Climb the 272 vibrant rainbow-colored stone steps flanked by cheeky macaque monkeys into the Cathedral Cave of Batu Caves, guarded by the 42-meter golden statue of Lord Murugan. Return to downtown to visit Merdeka Square, the Moorish Sultan Abdul Samad Building, and the convergence of two rivers at Masjid Jamek.',
        places: ['Batu Caves Rainbow Staircase & Cathedral Cave', 'Lord Murugan Golden Statue', 'Merdeka Square & Royal Selangor Club', 'Sultan Abdul Samad Building']
      },
      {
        day: 3,
        title: 'Scenic Transfer to Penang via Penang Bridge & Clan Jetties',
        location: 'Kuala Lumpur to George Town, Penang',
        transport: 'Private Executive Highway Coach across 13.5km Penang Bridge',
        meals: 'Breakfast, Ipoh White Coffee Lunch, Penang Hawker Feast',
        stay: 'Eastern & Oriental Hotel Penang (Historic 5-Star Seafront)',
        img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
        content: 'Drive north through lush tropical hills, stopping in historic Ipoh for authentic white coffee and dim sum. Cross the engineering marvel of the Penang Bridge onto Penang Island. Check in to the legendary colonial seafront Eastern & Oriental (E&O) Hotel. Walk along the historic wooden stilt Clan Jetties of Weld Quay.',
        places: ['Ipoh Old Town Heritage Stop', 'Penang Strait Bridge', 'Eastern & Oriental Hotel', 'Chew Jetty Floating Wooden Village']
      },
      {
        day: 4,
        title: 'George Town Street Art, Kek Lok Si Temple & Penang Hill',
        location: 'George Town & Air Itam, Penang',
        transport: 'Private Vehicle & Funicular Railway',
        meals: 'Breakfast, Peranakan Nyonya Lunch, Waterfront Dinner',
        stay: 'Eastern & Oriental Hotel Penang',
        img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80',
        content: 'Take a trishaw or walking tour through UNESCO George Town photographing famous interactive street art murals like "Kids on a Bicycle." Visit the magnificent Kek Lok Si Temple, the largest Buddhist temple in Malaysia. Ride the Swiss funicular railway up Penang Hill for panoramic views of George Town and the strait.',
        places: ['Armenian Street Murals', 'Cheong Fatt Tze Blue Mansion', 'Kek Lok Si Pagoda & Kuan Yin Bronze Statue', 'Penang Hill Funicular Summit']
      },
      {
        day: 5,
        title: 'Tropical Spice Garden & Penang Airport Departure',
        location: 'Teluk Bahang to Penang International Airport (PEN)',
        transport: 'Private Airport Chauffeur Transfer',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
        content: 'Spend a fragrant morning exploring the landscaped living collections at the Tropical Spice Garden along the northern coast. Complete check-out at your hotel before your private driver transfers you to Penang International Airport (PEN) for your onward flight connection.',
        places: ['Batu Ferringhi Coastal Drive', 'Tropical Spice Garden Walk', 'Penang International Airport (PEN)']
      }
    ],
    inclusions: [
      '2 Nights in 5-Star Luxury City View Hotel in Kuala Lumpur',
      '2 Nights at the Historic Luxury Colonial Eastern & Oriental Hotel in Penang',
      'Private air-conditioned highway coach transfer from KL to Penang via Penang Bridge',
      'Petronas Twin Towers Skybridge and Level 86 observation deck passes',
      'Batu Caves guided excursion with transportation',
      'Penang Hill funicular railway summit tickets',
      'Kek Lok Si Temple and George Town UNESCO heritage street art tour',
      'All private airport and sightseeing transfers',
      'Daily 5-star international breakfast'
    ],
    exclusions: [
      'International flights to Kuala Lumpur and from Penang',
      'Penang local heritage fee ($1/room/night)',
      'Meals and drinks not specified as included',
      'Personal shopping and street market purchases',
      'Travel and medical insurance',
      'Driver and local tour guide tips'
    ]
  }
];

