// Packages Data - Part 2 (8 to 14)

module.exports = [
  // 8. SWISS ALPS GLACIER & SUMMIT TREK
  {
    slug: 'switzerland-trek',
    fileName: 'package-switzerland-trek.html',
    title: 'Swiss Alps Glacier & Summit Trek',
    country: 'Switzerland',
    destination: 'Interlaken & Zermatt, Switzerland',
    category: 'Adventure Trips',
    duration: '8 Days / 7 Nights',
    price: '$1,890',
    heroImg: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1920&q=80',
    overview: 'Trek the legendary trails beneath Europe’s most iconic summits: the Eiger, Mönch, Jungfrau, and the pyramid of the Matterhorn. Traverse panoramic suspension bridges, cross ancient glaciers, ride mountain cogwheel trains, and paraglide above turquoise alpine lakes.',
    highlights: [
      { icon: 'fa-solid fa-mountain', title: 'Jungfraujoch Top of Europe', desc: 'Europe’s highest railway station at 3,454m with Aletsch Glacier ice palace.' },
      { icon: 'fa-solid fa-person-hiking', title: 'Iconic Eiger North Face Trail', desc: 'Hike directly beneath the legendary 1,800-meter sheer rock wall to Alpiglen.' },
      { icon: 'fa-solid fa-parachute-box', title: 'Tandem Alpine Paragliding', desc: 'Glide over turquoise Lake Brienz and Interlaken with certified Swiss pilots.' },
      { icon: 'fa-solid fa-train', title: 'Matterhorn Gornergrat Rail', desc: 'Panoramic cogwheel train to 3,089m with reflections in alpine Riffelsee.' }
    ],
    metrics: {
      duration: '8 Days / 7 Nights',
      groupSize: 'Small Group (Max 10)',
      season: 'June to October',
      language: 'English Speaking Alpine Guide',
      pace: 'Active Hiking (Grade 3)'
    },
    itinerary: [
      {
        day: 1,
        title: 'Zurich Arrival & Scenic Train to Interlaken',
        location: 'Zurich to Interlaken, Switzerland',
        transport: 'Swiss Federal Railways (SBB) First-Class Panoramic Train',
        meals: 'Traditional Swiss Cheese Fondue Welcome Dinner',
        stay: 'Victoria-Jungfrau Grand Hotel & Spa / Hotel Interlaken',
        img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
        content: 'Arrive at Zurich Airport and board your comfortable First-Class train curving along the shores of Lake Lucerne and over the Brünig Pass into Interlaken, situated between Lake Thun and Lake Brienz. Gather for a welcome briefing and an authentic Gruyère and Vacherin cheese fondue.',
        places: ['Zurich Airport Railway Station', 'Brünig Pass Mountain Rail', 'Interlaken Ost & Town Center', 'Lake Brienz Waterfront']
      },
      {
        day: 2,
        title: 'Lauterbrunnen 72 Waterfalls & Mürren Cliff Trail',
        location: 'Lauterbrunnen Valley & Mürren',
        transport: 'Mountain Cogwheel Rail & Cable Car',
        meals: 'Breakfast, Mountain Chalet Rösti Lunch, Dinner',
        stay: 'Victoria-Jungfrau Grand Hotel & Spa',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        content: 'Descend into the glacial Lauterbrunnen Valley, the inspiration for Tolkien’s Rivendell. Walk beneath the 300-meter Staubbach Falls and ride inside the mountain elevator to the Trümmelbach glacial cave falls. Ascend by cable car to car-free Mürren village and hike along the cliff edge overlooking the valley.',
        places: ['Staubbach Falls', 'Trümmelbach Inside-Mountain Falls', 'Car-Free Village of Mürren', 'Mountain View Trail to Gimmelwald']
      },
      {
        day: 3,
        title: 'Jungfraujoch – Top of Europe & Aletsch Glacier',
        location: 'Jungfraujoch (3,454m)',
        transport: 'Eiger Express Tricable Gondola & Jungfrau Railway',
        meals: 'Breakfast, Glacier Restaurant Lunch, Dinner',
        stay: 'Victoria-Jungfrau Grand Hotel & Spa',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        content: 'Board the state-of-the-art Eiger Express gondola to Eigergletscher station, then transfer to the historic cogwheel train tunneling through the Eiger to Europe’s highest station at 3,454m. Step out onto the Sphinx Observatory terrace gazing across the 22km Aletsch Glacier, walk through the sculpted Ice Palace, and trek across the glacier snowpack to Mönchsjochhütte hut.',
        places: ['Eiger Express Gondola', 'Jungfraujoch Sphinx Observatory', '22km Aletsch Glacier Basin', 'Mönchsjochhütte Snow Trail']
      },
      {
        day: 4,
        title: 'Tandem Paragliding & Eiger Trail Beneath the North Face',
        location: 'Grindelwald & Interlaken',
        transport: 'Tandem Paraglider & Grindelwald First Gondola',
        meals: 'Breakfast, Alpine Picnic Lunch',
        stay: 'Victoria-Jungfrau Grand Hotel & Spa',
        img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
        content: 'Experience the rush of tandem paragliding from Beatenberg, soaring 800m above turquoise lakes with views of the snow-capped Bernese Oberland. In the afternoon, hike the celebrated Eiger Trail, a 6km path tracing the base of the imposing 1,800m Eiger North Face where legendary mountaineering history was written.',
        places: ['Beatenberg Paragliding Launch', 'Höhematte Interlaken Landing', 'Eiger Trail Hiking Route', 'Grindelwald Glacier Gorge']
      },
      {
        day: 5,
        title: 'Scenic Train to Zermatt & Car-Free Alpine Village',
        location: 'Interlaken to Zermatt (Valais Alps)',
        transport: 'First-Class Train via Lötschberg Mountain Route',
        meals: 'Breakfast, Valais Raclette Dinner',
        stay: 'Grand Hotel Zermatterhof / Mont Cervin Palace',
        img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
        content: 'Board the scenic Lötschberg mountain train into the canton of Valais, transferring onto the narrow-gauge Matterhorn Gotthard Bahn into car-free Zermatt. Stroll past historic sun-darkened larch-wood chalets in the old village with the magnificent Matterhorn looming directly above.',
        places: ['Lötschberg Scenic Railway', 'Zermatt Old Village Chalets', 'Matterhorn Museum Zermatlantis', 'Kirchbrücke Sunset Viewpoint']
      },
      {
        day: 6,
        title: 'Gornergrat Cogwheel Train & Matterhorn Riffelsee Trek',
        location: 'Gornergrat (3,089m) & Zermatt',
        transport: 'Historic Gornergrat Cogwheel Railway',
        meals: 'Breakfast, Mountain Chalet Lunch, Dinner',
        stay: 'Grand Hotel Zermatterhof',
        img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
        content: 'Ride Switzerland’s first electric cogwheel railway up to the summit of Gornergrat at 3,089m, surrounded by 29 four-thousand-meter peaks and the Gorner Glacier. Hike down to Lake Riffelsee to photograph the iconic reflection of the Matterhorn in the mirror-smooth alpine water.',
        places: ['Gornergrat Summit Station', 'Gorner Glacier Panorama', 'Lake Riffelsee Reflection', 'Riffelalp Pine Forest Trail']
      },
      {
        day: 7,
        title: 'Matterhorn Glacier Paradise (3,883m) & Suspension Bridge',
        location: 'Zermatt Summit Station',
        transport: 'Matterhorn Glacier Ride 3S Cableway',
        meals: 'Breakfast, Panoramic Summit Lunch, Farewell Dinner',
        stay: 'Grand Hotel Zermatterhof',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        content: 'Soar on the highest 3S cableway in the world to the summit of Matterhorn Glacier Paradise at 3,883 meters. Tour the glacial ice crystal palace carved 15 meters inside the ice sheet. In the afternoon, hike to the world’s longest pedestrian suspension bridge spanning high above the mountain valley.',
        places: ['Matterhorn Glacier Ride', 'Highest Ice Palace in the World', 'Zermatt Glacier Trail', 'Charles Kuonen Suspension Bridge']
      },
      {
        day: 8,
        title: 'Scenic Train to Zurich & Departure',
        location: 'Zermatt to Zurich Airport',
        transport: 'First-Class Swiss Rail Train Transfer',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
        content: 'Savor one last morning gaze at the sun hitting the summit peak of the Matterhorn over breakfast. Board the Matterhorn Gotthard Bahn connecting to Zurich Airport (ZRH) for your return flight home.',
        places: ['Zermatt Station', 'Visp Mountain Rail Junction', 'Zurich Airport (ZRH)']
      }
    ],
    inclusions: [
      '7 Nights in 4-Star Superior and 5-Star Alpine Hotels in Interlaken and Zermatt',
      '8-Day Swiss Travel Pass (First Class) covering all nationwide trains, boats, and buses',
      'Full-day Jungfraujoch Top of Europe cableway and train ticket',
      'Gornergrat Cogwheel Mountain Railway round-trip pass in Zermatt',
      'Tandem paragliding flight in Interlaken with certified Swiss pilot',
      'Certified UIAGM Alpine Guide for guided hiking trails (Eiger Trail, Riffelsee)',
      'Daily alpine breakfast buffets, welcome fondue and farewell dinners'
    ],
    exclusions: [
      'International flights to/from Zurich (ZRH)',
      'Personal trekking boots, daypacks, and technical outerwear',
      'Lunches not specified in the daily program',
      'Personal travel, search, and rescue insurance',
      'Gratuities for local guides'
    ]
  },

  // 9. PERU INCA TRAIL
  {
    slug: 'peru',
    fileName: 'package-peru.html',
    title: 'Classic Inca Trail & Cloud Forests',
    country: 'Peru',
    destination: 'Cusco & Machu Picchu, Peru',
    category: 'Adventure Trips',
    duration: '9 Days / 8 Nights',
    price: '$1,750',
    heroImg: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1920&q=80',
    overview: 'Walk in the footsteps of the ancient Incas on the world’s most revered mountain pilgrimage. From colonial Cusco and the Sacred Valley, trek through misty cloud forests, conquer high alpine passes, and enter the Lost Citadel of Machu Picchu at sunrise through the Sun Gate.',
    highlights: [
      { icon: 'fa-solid fa-person-hiking', title: 'Classic 4-Day Inca Trail', desc: 'Permits, expert Quechua porters, chef-prepared hot meals, and high-altitude mountain camps.' },
      { icon: 'fa-solid fa-sun', title: 'Inti Punku Sun Gate Sunrise', desc: 'The breathless moment Machu Picchu appears through the morning cloud inversion.' },
      { icon: 'fa-solid fa-landmark', title: 'Sacred Valley of the Incas', desc: 'Ollantaytambo fortress, Pisac handicraft market, and Moray concentric terraces.' },
      { icon: 'fa-solid fa-train', title: 'Vistadome Scenic Train', desc: 'Panoramic glass-domed train journey tracing the rushing Urubamba River.' }
    ],
    metrics: {
      duration: '9 Days / 8 Nights',
      groupSize: 'Small Group (Max 8)',
      season: 'April to October',
      language: 'English & Quechua Guides',
      pace: 'Challenging Mountain Trek'
    },
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Imperial Cusco & Acclimatization',
        location: 'Cusco, Peru (3,400m)',
        transport: 'Private Executive Chauffeur',
        meals: 'Welcome Coca Tea & Traditional Andean Dinner',
        stay: 'Belmond Hotel Monasterio / Palacio del Inka Cusco',
        img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80',
        content: 'Land at Alejandro Velasco Astete Airport in high-altitude Cusco. Meet your guide who presents you with traditional warm coca tea to assist with altitude acclimatization. Settle into a converted 16th-century colonial monastery hotel and take a gentle stroll around the Plaza de Armas.',
        places: ['Cusco Airport', 'Plaza de Armas', 'San Pedro Local Market', 'Twelve-Angled Stone Wall']
      },
      {
        day: 2,
        title: 'Sacred Valley of the Incas & Ollantaytambo Fortress',
        location: 'Pisac & Ollantaytambo (2,792m)',
        transport: 'Private Expedition Van',
        meals: 'Breakfast, Sacred Valley Buffet Lunch, Dinner',
        stay: 'Tambo del Inka Luxury Resort Urubamba',
        img: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80',
        content: 'Descend into the fertile Sacred Valley. Explore the massive hillside ruins of Pisac and browse weaving stalls. Continue past terraced corn fields to the living Inca town of Ollantaytambo to climb the colossal stone temple fortress.',
        places: ['Pisac Ruins & Artisanal Market', 'Urubamba River Valley', 'Ollantaytambo Sun Temple Fortress', 'Living Inca Streetways']
      },
      {
        day: 3,
        title: 'Inca Trail Day 1: Km 82 to Wayllabamba Camp',
        location: 'Km 82 to Wayllabamba (3,000m)',
        transport: 'Foot Trek (12 km / 5-6 hours)',
        meals: 'Breakfast, Chef-Prepared Trail Lunch & Camp Dinner',
        stay: 'Deluxe Expedition Mountain Camp',
        img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80',
        content: 'Arrive at the official checkpoint at Km 82 (Piscacucho). Cross the suspension bridge over the Urubamba River to begin the trail. Trek through cactus scrub and past the ancient archaeological site of Patallacta before reaching the grassy mountain camp at Wayllabamba.',
        places: ['Km 82 Piscacucho Checkpoint', 'Patallacta Archaeological Site', 'Wayllabamba Village Camp']
      },
      {
        day: 4,
        title: 'Inca Trail Day 2: Conquering Dead Woman’s Pass (4,215m)',
        location: 'Warmiwañusqa Pass to Pacaymayo Camp',
        transport: 'Foot Trek (11 km / 6-7 hours)',
        meals: 'Breakfast, High-Altitude Trail Lunch & Camp Dinner',
        stay: 'Pacaymayo Mountain Camp (3,600m)',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        content: 'The most demanding day of the trek. Climb ancient stone staircases through cloud forests and high paramo grasslands up to the summit of Dead Woman’s Pass (Warmiwañusqa) at 4,215 meters. Celebrate with views of snow-draped peaks, then descend to camp in the Pacaymayo Valley.',
        places: ['Llulluchapampa Forest Plateau', 'Dead Woman’s Pass Summit (4,215m)', 'Pacaymayo Mountain Valley Camp']
      },
      {
        day: 5,
        title: 'Inca Trail Day 3: Runkurakay, Sayacmarca & Wiñay Wayna',
        location: 'Pacaymayo to Wiñay Wayna Camp (2,680m)',
        transport: 'Foot Trek (16 km / 8 hours)',
        meals: 'Breakfast, Trail Lunch & Camp Celebration Dinner',
        stay: 'Wiñay Wayna Camp',
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        content: 'The most scenic stretch of the Inca Trail. Cross the Runkurakay pass, explore the clifftop citadel of Sayacmarca, pass through an original Inca rock tunnel carved into solid granite, and descend into the lush subtropical cloud forest to the cascading terraces of Wiñay Wayna ("Forever Young").',
        places: ['Runkurakay Circular Ruins', 'Sayacmarca Clifftop Fortress', 'Phuyupatamarca "Town Above the Clouds"', 'Wiñay Wayna Terraces']
      },
      {
        day: 6,
        title: 'Inca Trail Day 4: Sun Gate (Inti Punku) & Machu Picchu',
        location: 'Inti Punku & Machu Picchu Citadel',
        transport: 'Foot Trek (5 km) & Return Bus to Aguas Calientes',
        meals: 'Breakfast, Sanctuary Lodge Lunch, Gourmet Dinner',
        stay: 'Inkaterra Machu Picchu Pueblo Hotel (Luxury Eco-Resort)',
        img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80',
        content: 'Wake at 4:30 AM to reach Inti Punku (The Sun Gate) just as dawn breaks. Watch morning mist roll back to unveil Machu Picchu. Spend the morning on a comprehensive guided circuit through temples, astronomical observatories, and royal residences, then relax in natural thermal springs in Aguas Calientes.',
        places: ['Inti Punku (Sun Gate)', 'Machu Picchu Lost Citadel', 'Temple of the Sun & Intihuatana Stone', 'Aguas Calientes Town']
      },
      {
        day: 7,
        title: 'Huayna Picchu Peak Climb & Vistadome Train to Cusco',
        location: 'Machu Picchu to Cusco',
        transport: 'Vistadome Glass-Ceiling Train & Private Transfer',
        meals: 'Breakfast, Train Snacks, Novoandina Farewell Dinner',
        stay: 'Belmond Hotel Monasterio Cusco',
        img: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80',
        content: 'Re-enter the sanctuary in the morning for the optional hike up Huayna Picchu or Machu Picchu Mountain for dizzying vertical views. In the afternoon, board the Vistadome panoramic train featuring live Andean folklore music and dancing as you trace the gorge back to Cusco.',
        places: ['Huayna Picchu Peak (2,720m)', 'Vistadome Scenic Railway', 'Urubamba River Canyon', 'Cusco San Blas Artisan Quarter']
      },
      {
        day: 8,
        title: 'Rainbow Mountain (Vinicunca) Alpine Day Excursion',
        location: 'Vinicunca (5,036m), Pitumarca',
        transport: '4WD Expedition Van & Mountain Trail',
        meals: 'Breakfast, Andean Lodge Lunch, Dinner',
        stay: 'Belmond Hotel Monasterio Cusco',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        content: 'Embark on an early morning journey into the high Andes to witness the geological marvel of Rainbow Mountain. Hike past herds of alpacas and vicuñas beneath glaciers to the 5,036-meter viewpoint overlooking mineral stripes of red, gold, lavender, and turquoise.',
        places: ['Pitumarca Village', 'Ausangate Glacier Range', 'Rainbow Mountain Vinicunca Summit (5,036m)', 'Red Valley Panorama']
      },
      {
        day: 9,
        title: 'Farewell Cusco & Flight to Lima',
        location: 'Cusco to Lima Airport',
        transport: 'Private Airport Chauffeur',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80',
        content: 'Enjoy breakfast in the courtyard of your hotel and do some last-minute shopping for baby alpaca textiles in the San Blas artisan quarter. Meet your driver for transfer to Cusco Airport for your flight to Lima and onwards home.',
        places: ['Hotel Monasterio Courtyard', 'San Blas Artisan Market', 'Cusco Airport (CUZ)']
      }
    ],
    inclusions: [
      'Official Inca Trail trekking permit and Machu Picchu sanctuary entrance',
      '4 Nights in 5-Star Luxury Hotels (Belmond Monasterio, Inkaterra)',
      '3 Nights in Deluxe Mountain Camps with 4-season tents, sleeping mats, and dining tent',
      'Professional licensed bilingual wilderness guide and personal Quechua porters',
      'Private camp chef preparing fresh three-course hot meals daily on the trail',
      'Vistadome panoramic train ticket with reserved seating from Aguas Calientes to Ollantaytambo',
      'Emergency oxygen and comprehensive wilderness first-aid gear throughout'
    ],
    exclusions: [
      'International flights to Peru and domestic flight Lima–Cusco',
      'Personal sleeping bag and trekking poles (available for hire)',
      'Huayna Picchu summit climb permit ($75 optional add-on)',
      'Travel and high-altitude mountain trekking insurance',
      'Tips for porters, cooks, and wilderness guides'
    ]
  },

  // 10. KENYA SAFARI
  {
    slug: 'kenya',
    fileName: 'package-kenya.html',
    title: 'Great Migration Big-5 Bush Safari',
    country: 'Kenya',
    destination: 'Maasai Mara & Amboseli, Kenya',
    category: 'Adventure Trips',
    duration: '7 Days / 6 Nights',
    price: '$2,250',
    heroImg: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80',
    overview: 'The definitive East African safari. Witness the legendary Great Migration across the golden savannas of the Maasai Mara, photograph massive elephant herds beneath the snowcapped peak of Mount Kilimanjaro in Amboseli, and fly over the wild plains in a hot air balloon.',
    highlights: [
      { icon: 'fa-solid fa-paw', title: 'Big Five Game Drives', desc: 'Custom 4x4 pop-top Land Cruisers with certified safari guides tracking lions, leopards, rhinos, elephants, and cape buffalo.' },
      { icon: 'fa-solid fa-volcano', title: 'Amboseli & Mt. Kilimanjaro', desc: 'World’s greatest backdrop: giant tusked elephants roaming beneath Africa’s highest free-standing mountain.' },
      { icon: 'fa-solid fa-parachute-box', title: 'Sunrise Balloon Safari', desc: 'Float at dawn over the Mara plains followed by a champagne bush breakfast.' },
      { icon: 'fa-solid fa-people-roof', title: 'Traditional Maasai Manyatta', desc: 'Authentic cultural visit with village elders, traditional adumu jumping dance and warrior rituals.' }
    ],
    metrics: {
      duration: '7 Days / 6 Nights',
      groupSize: 'Small Group (Max 6 per vehicle)',
      season: 'July to October (Migration) & Year-Round',
      language: 'English Speaking Safari Guide',
      pace: 'Wildlife Safari Drives'
    },
    itinerary: [
      {
        day: 1,
        title: 'Nairobi Arrival & Safari Drive to Amboseli',
        location: 'Nairobi to Amboseli National Park',
        transport: 'Custom 4x4 Safari Land Cruiser with Pop-Up Roof',
        meals: 'Welcome Safari Buffet Lunch & Lodge Dinner',
        stay: 'Ol Tukai Lodge Amboseli / Serena Safari Lodge',
        img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
        content: 'Meet your private safari guide at Jomo Kenyatta International Airport in Nairobi. Drive south through Maasai cattle lands into Amboseli National Park. Embark on an afternoon game drive as the snow-covered volcanic dome of Mount Kilimanjaro appears on the horizon.',
        places: ['Nairobi JKIA Airport', 'Great North Safari Highway', 'Amboseli National Park Entrance', 'Observation Hill Sunset Lookout']
      },
      {
        day: 2,
        title: 'Amboseli Big Tuskers & Enkongo Swamp Game Drives',
        location: 'Amboseli National Park',
        transport: '4x4 Safari Land Cruiser',
        meals: 'Breakfast, Bush Picnic Lunch, Campfire Dinner',
        stay: 'Ol Tukai Lodge Amboseli',
        img: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80',
        content: 'Rise at dawn for a morning game drive when Mount Kilimanjaro is clearest. Watch massive herds of elephants wading through the emerald marshes of Enkongo Narok swamp, flanked by hippos, zebras, giraffes, and cheetahs hunting on the open savannah.',
        places: ['Enkongo Narok Swamps', 'Mount Kilimanjaro Backdrop', 'Lake Amboseli Dried Salt Flats', 'Acacia Tortilis Woodlands']
      },
      {
        day: 3,
        title: 'Great Rift Valley & Lake Naivasha Boat Safari',
        location: 'Amboseli to Lake Naivasha',
        transport: '4x4 Land Cruiser & Motorized Lake Boat',
        meals: 'Breakfast, Rift Valley Lodge Lunch, Dinner',
        stay: 'Lake Naivasha Sopa Resort',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        content: 'Drive past the dramatic escarpment of the Great Rift Valley down to freshwater Lake Naivasha. Board an open boat safari skimming past pods of bathing hippos and African fish eagles diving for prey. Disembark for a walking safari among wild zebras and giraffes on Crescent Island.',
        places: ['Great Rift Valley Viewpoint', 'Lake Naivasha Shoreline', 'Crescent Island Game Sanctuary', 'Hell’s Gate National Park Gorge']
      },
      {
        day: 4,
        title: 'Journey to the Maasai Mara National Reserve',
        location: 'Lake Naivasha to Maasai Mara',
        transport: '4x4 Safari Land Cruiser',
        meals: 'Breakfast, Mara Bush Lunch, Luxury Tented Camp Dinner',
        stay: 'Governor’s Camp / Mara Serena Safari Lodge',
        img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
        content: 'Ascend the Mau Escarpment and cross the fertile Narok wheat plains into the legendary Maasai Mara National Reserve. Check in to your luxury canvas tented suite perched over the Mara River where hippos wallow below. Head out on your first late-afternoon Mara predator game drive.',
        places: ['Narok Town', 'Sekenani Gate Maasai Mara', 'Mara River Basin', 'Sunset Predator Tracking']
      },
      {
        day: 5,
        title: 'Full Day Mara River Crossing & Migration Tracking',
        location: 'Maasai Mara Savanna',
        transport: '4x4 Safari Land Cruiser',
        meals: 'Breakfast, Picnic Lunch Under Acacia Tree, Boma Dinner',
        stay: 'Governor’s Camp Maasai Mara',
        img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
        content: 'Spend an entire day tracking the wildlife spectacle of the African continent. Follow million-strong herds of wildebeests and zebras along the Mara River crossings. Watch pride of lions, solitary leopards, and coalitions of cheetahs stalking herds across the golden red-oat grass.',
        places: ['Mara River Crossing Points', 'Paradise Plains', 'Rhino Ridge', 'Serengeti-Mara International Border Marker']
      },
      {
        day: 6,
        title: 'Sunrise Hot Air Balloon Safari & Maasai Village Visit',
        location: 'Maasai Mara',
        transport: 'Hot Air Balloon & 4x4 Land Cruiser',
        meals: 'Bush Champagne Breakfast, Camp Lunch, Farewell Feast',
        stay: 'Governor’s Camp Maasai Mara',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        content: 'Before dawn, float soundlessly over the acacia plains in a hot air balloon as herds gallop below. Touch down for a white-linen champagne breakfast cooked in the wild bush. In the afternoon, visit an authentic Maasai manyatta village to participate in traditional ceremonies and fire-making.',
        places: ['Sunrise Balloon Launch Site', 'Acacia Tree Champagne Breakfast', 'Maasai Manyatta Boma Village', 'Twilight Campfire Stargazing']
      },
      {
        day: 7,
        title: 'Morning Bush Safari & Flight to Nairobi Departure',
        location: 'Maasai Mara to Nairobi',
        transport: 'Bush Airstrip Flight (Cessna Caravan) & Chauffeur',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
        content: 'Enjoy an early morning dawn game drive capturing the golden sunrise light. Fly from the bush airstrip directly back to Wilson Airport in Nairobi, where your private driver transfers you to Jomo Kenyatta Airport or the historic Carnivore restaurant for dinner before your flight home.',
        places: ['Mara Bush Airstrip', 'Wilson Airport Nairobi', 'Giraffe Centre / Karen Blixen Museum', 'Nairobi JKIA Airport']
      }
    ],
    inclusions: [
      '6 Nights in Luxury 5-Star Safari Lodges and Tented Camps',
      'Exclusive use of customized 4x4 Safari Land Cruiser with pop-up photography roof',
      'Services of certified Silver-Level Kenya Wildlife Service safari guide',
      'All National Reserve and National Park conservation fees',
      'Domestic flight from Maasai Mara bush airstrip back to Nairobi',
      'Sunrise Hot Air Balloon Safari over Maasai Mara with champagne breakfast',
      'Lake Naivasha boat safari and Crescent Island walking tour',
      'Full board dining throughout all safari lodges'
    ],
    exclusions: [
      'International flights to/from Nairobi',
      'Kenya eTA entry authorization',
      'Premium alcoholic cellar drinks at lodges',
      'Personal safari apparel and binoculars',
      'Comprehensive medical evacuation and travel insurance',
      'Tips and gratuities for safari guides and camp staff'
    ]
  },

  // 11. SWISS FIVE-STAR PALACE & HELICOPTER TOUR
  {
    slug: 'switzerland-luxury',
    fileName: 'package-switzerland-luxury.html',
    title: 'Swiss Five-Star Palace & Helicopter Tour',
    country: 'Switzerland',
    destination: 'St. Moritz & Zermatt, Switzerland',
    category: 'Luxury Holidays',
    duration: '7 Days / 6 Nights',
    price: '$3,850',
    heroImg: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80',
    overview: 'The pinnacle of European luxury travel. Stay in world-renowned palace hotels in St. Moritz and Zermatt, soar by private helicopter for a champagne glacier landing, ride the Glacier Express in VIP Excellence Class, and dine at three-star Michelin establishments.',
    highlights: [
      { icon: 'fa-solid fa-helicopter', title: 'Private Helicopter Glacier Landing', desc: 'Touch down on pristine high-altitude snowfields with vintage Dom Pérignon.' },
      { icon: 'fa-solid fa-train', title: 'Glacier Express Excellence Class', desc: 'Guaranteed window seat, personal concierge, and 5-course gourmet wine pairing.' },
      { icon: 'fa-solid fa-hotel', title: 'Badrutt’s Palace & The Chedi', desc: 'Palatial historic suites with dedicated 24-hour private butler service.' },
      { icon: 'fa-solid fa-utensils', title: 'Michelin-Starred Degustations', desc: 'Exclusive reserved private dining rooms at Switzerland’s most acclaimed alpine tables.' }
    ],
    metrics: {
      duration: '7 Days / 6 Nights',
      groupSize: 'Private / Ultra-Luxe',
      season: 'December to April & July to September',
      language: 'Private English Chauffeur & Host',
      pace: 'Bespoke Luxury'
    },
    itinerary: [
      {
        day: 1,
        title: 'Zurich Limousine Transfer to Badrutt’s Palace St. Moritz',
        location: 'Zurich to St. Moritz (Engadin Valley)',
        transport: 'Private Chauffeur-Driven Mercedes Maybach',
        meals: 'Welcome Imperial Caviar & Champagne Reception',
        stay: 'Badrutt’s Palace Hotel St. Moritz (Palace Suite)',
        img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
        content: 'Land at Zurich VIP terminal and be welcomed by your private chauffeur. Drive in a Maybach limousine through the Julier Pass into the Engadin Valley to St. Moritz. Check in at the legendary Badrutt’s Palace Hotel where kings and celebrities have wintered for over a century.',
        places: ['Zurich VIP Airport Terminal', 'Julier Mountain Pass', 'St. Moritz Lake Promenade', 'Badrutt’s Palace Grand Hall']
      },
      {
        day: 2,
        title: 'Helicopter Flight Over Bernina Massif & Glacier Landing',
        location: 'Piz Bernina & Morteratsch Glacier',
        transport: 'Private Airbus H130 Helicopter',
        meals: 'Breakfast, Glacier Caviar & Champagne Picnic, Michelin Dinner',
        stay: 'Badrutt’s Palace Hotel St. Moritz',
        img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
        content: 'Board a private helicopter for a breathtaking flight sweeping past the granite spires of Piz Bernina and the cascading icefalls of the Morteratsch Glacier. Land directly onto a secluded high-altitude glacier plateau for a champagne tasting before flying back over St. Moritz Lake.',
        places: ['St. Moritz Heliport', 'Piz Bernina Summit (4,049m)', 'Morteratsch High Glacier', 'Via Serlas Designer Boutiques']
      },
      {
        day: 3,
        title: 'Glacier Express Excellence Class Journey to Andermatt',
        location: 'St. Moritz to Andermatt',
        transport: 'Glacier Express Excellence Class (World’s Most Luxurious Train)',
        meals: 'Breakfast, 5-Course Excellence Class Wine-Pairing Lunch',
        stay: 'The Chedi Andermatt (Deluxe Suite)',
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        content: 'Board the Glacier Express in prestigious Excellence Class. Sink into leather reclining window seats as a dedicated concierge serves a 5-course lunch paired with rare Swiss vintages. Cross the Landwasser Viaduct and Oberalp Pass into Andermatt to check into the Asian-alpine masterpiece, The Chedi.',
        places: ['Landwasser Viaduct', 'Rhine Gorge (Swiss Grand Canyon)', 'Oberalp Pass (2,033m)', 'The Chedi 2,400m² Spa & Hydrotherapy']
      },
      {
        day: 4,
        title: 'Alpine Pass Supercar Tour & Transfer to Zermatt',
        location: 'Andermatt to Zermatt',
        transport: 'Ferrari/Porsche Supercar Drive & Private Limousine',
        meals: 'Breakfast, Furka Pass Clifftop Lunch, Valais Degustation',
        stay: 'The Omnia Zermatt / Mont Cervin Palace Suite',
        img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
        content: 'Experience driving a high-performance sports car across the hairpin switchbacks of the Furka Pass where James Bond was filmed. Meet your private electric limousine at Täsch for transfer into car-free Zermatt. Check in at The Omnia, perched high on a rock cliff directly facing the Matterhorn.',
        places: ['Furka Pass Switchbacks', 'Rhône Glacier Ice Grotto', 'Täsch VIP Private Terminal', 'The Omnia Clifftop Glass Elevator']
      },
      {
        day: 5,
        title: 'VIP Gornergrat Carriage & Matterhorn Heli-Skiing / Flight',
        location: 'Zermatt & Matterhorn Peak',
        transport: 'Private Heritage VIP Train Carriage & Helicopter',
        meals: 'Breakfast, 2-Star Michelin Lunch, Private Chalet Dinner',
        stay: 'The Omnia Zermatt',
        img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
        content: 'Travel in an exclusive private carriage on the Gornergrat Bahn with champagne and pastries. Soar by helicopter around the iconic North Face of the Matterhorn, skimming just meters from sheer hanging seracs and granite arêtes before an exclusive lunch at Chez Vrony.',
        places: ['Gornergrat Private VIP Salon Car', 'Matterhorn North Face Fly-By', 'Chez Vrony Sun Terrace', 'Zermatt Vintage Wine Vault']
      },
      {
        day: 6,
        title: 'Matterhorn Glacier Ride Crystal Cabin & Holistic Spa',
        location: 'Matterhorn Glacier Paradise (3,883m)',
        transport: 'Swarovski Crystal Glass-Floor Cable Car',
        meals: 'Breakfast, Alpine Lounge Lunch, Farewell Gala Dinner',
        stay: 'The Omnia Zermatt',
        img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
        content: 'Ascend to Europe’s highest cable car station inside a Swarovski crystal-encrusted glass-bottom cabin that turns transparent mid-flight. In the afternoon, indulge in bespoke alpine botanical massages and warm basalt stone hydrotherapy overlooking the Matterhorn.',
        places: ['Crystal Cable Car Cabin', 'Matterhorn Summit Observation Deck', 'The Omnia Thermal Baths', 'Michelin Gala Dinner']
      },
      {
        day: 7,
        title: 'Limousine Transfer to Zurich Airport Departure',
        location: 'Zermatt to Zurich Airport',
        transport: 'Private Executive Maybach Limousine Transfer',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
        content: 'Enjoy a leisurely breakfast on your private suite terrace. Your private chauffeur escorts you via luxury vehicle to Zurich International Airport (ZRH) with VIP fast-track lounge access.',
        places: ['Zermatt Private Terminal', 'Visp Expressway', 'Zurich Airport VIP Lounge']
      }
    ],
    inclusions: [
      '6 Nights in Luxury 5-Star Palace Suites (Badrutt’s Palace, The Chedi, The Omnia)',
      'Private chauffeur-driven Mercedes Maybach/S-Class transfers throughout',
      'Private scenic helicopter glacier landing with vintage champagne',
      'Glacier Express Excellence Class tickets with guaranteed window seats and 5-course lunch',
      'VIP Swarovski Crystal cable car passes in Zermatt',
      'Private Gornergrat luxury carriage experience',
      'Daily 5-star champagne breakfast and two Michelin-starred dinners'
    ],
    exclusions: [
      'International first-class or private jet flights',
      'Personal boutique shopping and high-end jewelry purchases',
      'Rare reserve wine cellar selections beyond included pairings',
      'Personal travel and cancellation insurance',
      'Private butler gratuities'
    ]
  },

  // 12. DUBAI ROYAL PALACE & DESERT OASIS
  {
    slug: 'dubai',
    fileName: 'package-dubai.html',
    title: 'Dubai Royal Palace & Desert Oasis',
    country: 'United Arab Emirates',
    destination: 'Dubai & Abu Dhabi, UAE',
    category: 'Luxury Holidays',
    duration: '6 Days / 5 Nights',
    price: '$3,400',
    heroImg: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80',
    overview: 'Experience the heights of Arabian royalty in the dazzling Emirates. From two-story duplex suites at the world-famous Burj Al Arab to private desert conservation reserves, mega-yacht sails along the Dubai Marina, and architectural masterworks in Abu Dhabi.',
    highlights: [
      { icon: 'fa-solid fa-hotel', title: 'Burj Al Arab Duplex Suite', desc: 'World’s only 7-star hotel with dedicated 24k gold iPads and private butler service.' },
      { icon: 'fa-solid fa-sun', title: 'Royal Desert Falconry & Camp', desc: 'Vintage Land Rover safari through private dunes with trained hunting falcons and royal feast.' },
      { icon: 'fa-solid fa-sailboat', title: 'Private Mega-Yacht Charter', desc: 'Cruise around Palm Jumeirah and Atlantis The Royal with private chef service.' },
      { icon: 'fa-solid fa-mosque', title: 'Sheikh Zayed Grand Mosque', desc: 'Private tour of Abu Dhabi’s pristine white marble architectural wonder.' }
    ],
    metrics: {
      duration: '6 Days / 5 Nights',
      groupSize: 'Private VIP',
      season: 'October to April',
      language: 'English Speaking Chauffeur & Guide',
      pace: 'Regal Luxury'
    },
    itinerary: [
      {
        day: 1,
        title: 'Rolls-Royce Airport Pickup & Burj Al Arab Check-In',
        location: 'Dubai, UAE',
        transport: 'Burj Al Arab Rolls-Royce Phantom Chauffeur',
        meals: 'Arabian Dates, Gold-Flake Coffee & Welcome Canapés',
        stay: 'Burj Al Arab Jumeirah (Deluxe Marina Duplex Suite)',
        img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        content: 'Touch down at Dubai International Airport (DXB) where you are met airside by the Al Majlis VIP protocol team. Board your chauffeured Rolls-Royce Phantom to the sail-shaped icon of Burj Al Arab. Complete private in-suite check-in with your personal butler and relax on the 10,000m² private infinity pool terrace.',
        places: ['DXB Al Majlis VIP Lounge', 'Burj Al Arab Private Causeway', 'The Terrace Infinity Pools', 'Gold On 27 Cocktail Lounge']
      },
      {
        day: 2,
        title: 'Burj Khalifa Sky Lounge (Level 148) & Private Yacht Sail',
        location: 'Downtown Dubai & Dubai Marina',
        transport: 'Private Mercedes Maybach Chauffeur & 75ft Mega-Yacht',
        meals: 'Breakfast, Atmosphere Level 122 Lunch, Yacht Dinner',
        stay: 'Burj Al Arab Jumeirah',
        img: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
        content: 'Bypass all lines to the highest outdoor observation deck on earth at Burj Khalifa Level 148 Sky Lounge. Dine 442 meters up at At.mosphere restaurant. In the afternoon, board an exclusive 75ft private yacht cruising along the Dubai Marina, Ain Dubai wheel, and around the crescent of Palm Jumeirah.',
        places: ['Burj Khalifa Level 148 At The Top Sky', 'At.mosphere Restaurant Level 122', 'Dubai Marina Yacht Club', 'Palm Jumeirah Crescent Cruise']
      },
      {
        day: 3,
        title: 'Heritage Desert Conservation Safari & Royal Falconry',
        location: 'Dubai Desert Conservation Reserve',
        transport: 'Museum-Condition 1950s Vintage Land Rover',
        meals: 'Breakfast, Traditional Bedouin Feast with Shisha & Oud',
        stay: 'Al Maha, A Luxury Collection Desert Resort & Spa',
        img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
        content: 'Journey into the untouched dunes of the Dubai Desert Conservation Reserve. Spot rare Arabian oryx and gazelles. Experience a royal falconry demonstration with the Shaheen falcons of the Royal Falconers. Conclude with a traditional Emirati dinner under starry desert skies at an exclusive private desert camp.',
        places: ['Dubai Desert Conservation Reserve', 'Royal Falconry Demonstration', 'Private Bedouin Desert Camp', 'Dune Stargazing with Astronomer']
      },
      {
        day: 4,
        title: 'Abu Dhabi Day Tour: Sheikh Zayed Mosque & Louvre',
        location: 'Abu Dhabi, UAE',
        transport: 'Private Chauffeur Sedan',
        meals: 'Breakfast, Emirates Palace 24k Gold Cappuccino Lunch, Dinner',
        stay: 'Burj Al Arab Jumeirah',
        img: 'https://images.unsplash.com/photo-1512632570417-a6097a066914?auto=format&fit=crop&w=800&q=80',
        content: 'Travel along the modern coastal highway to the capital of Abu Dhabi. Tour the monumental Sheikh Zayed Grand Mosque with its 82 white marble domes and world’s largest hand-knotted Persian carpet. Visit the floating dome of the Louvre Abu Dhabi and enjoy high tea at Emirates Palace Mandarin Oriental.',
        places: ['Sheikh Zayed Grand Mosque', 'Louvre Abu Dhabi Museum', 'Emirates Palace Mandarin Oriental', 'Qasr Al Watan Presidential Palace']
      },
      {
        day: 5,
        title: 'Palm Jumeirah Helicopter Flight & Talise Spa Luxury',
        location: 'Palm Jumeirah, Dubai',
        transport: 'Private VIP Helicopter & Chauffeur',
        meals: 'Breakfast, Beach Club Lunch, Michelin-Star Pierchic Dinner',
        stay: 'Burj Al Arab Jumeirah',
        img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        content: 'Take to the skies on a 25-minute helicopter flight over the World Islands, Atlantis The Palm, and Dubai Creek. Spend an afternoon of pampering at the Talise Spa perched 150 meters above the Persian Gulf. In the evening, walk out over the illuminated private pier to Pierchic for seafood.',
        places: ['Atlantis Helipad', 'The World Islands Aerial View', 'Talise Spa Elevated Pools', 'Pierchic Overwater Restaurant']
      },
      {
        day: 6,
        title: 'Leisurely Breakfast & Chauffeur Transfer to DXB',
        location: 'Dubai International Airport',
        transport: 'Private Rolls-Royce Chauffeur Transfer',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
        content: 'Enjoy a lavish breakfast on your private suite terrace overlooking the azure gulf. Complete check-out before your Rolls-Royce chauffeur whisks you back to Dubai International Airport (DXB) VIP terminal for your flight departure.',
        places: ['Suite Terrace Breakfast', 'Burj Al Arab Check-out', 'DXB VIP Terminal Departure']
      }
    ],
    inclusions: [
      '5 Nights in Luxury Duplex Suite at the iconic Burj Al Arab Jumeirah',
      'Round-trip Rolls-Royce Phantom airport transfers with VIP Al Majlis service',
      'Burj Khalifa Level 148 Sky Lounge private VIP admission',
      '3-Hour Private 75ft Luxury Mega-Yacht charter around Palm Jumeirah with chef',
      'Platinum Heritage Desert Conservation Safari with Royal Falconry',
      'Full-day private Abu Dhabi tour including Sheikh Zayed Mosque & Louvre',
      '25-Minute scenic helicopter flight over Dubai landmarks',
      'Daily 5-star breakfast and in-suite butler service'
    ],
    exclusions: [
      'International flights to/from Dubai',
      'Dubai Tourism Dirham fee ($15/room/night)',
      'Personal designer shopping and luxury car rentals',
      'Comprehensive travel and medical insurance',
      'Staff and guide gratuities'
    ]
  },

  // 13. FRENCH RIVIERA & MONACO YACHT ODYSSEY
  {
    slug: 'french-riviera',
    fileName: 'package-french-riviera.html',
    title: 'French Riviera & Monaco Yacht Odyssey',
    country: 'France & Monaco',
    destination: 'Cannes & Monaco, France',
    category: 'Luxury Holidays',
    duration: '7 Days / 6 Nights',
    price: '$4,200',
    heroImg: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
    overview: 'The golden glamour of the Côte d’Azur. Stay in palace suites at Hôtel de Paris in Monte-Carlo and Carlton Cannes, charter a private 80ft yacht across the Cap d’Antibes to Saint-Tropez, and dine at three-star Michelin restaurants by Alain Ducasse.',
    highlights: [
      { icon: 'fa-solid fa-sailboat', title: 'Private 80ft Yacht Charter', desc: 'Cruise the Cap Ferrat coastline and secluded Billionaires Bay with full crew.' },
      { icon: 'fa-solid fa-crown', title: 'Hôtel de Paris Monte-Carlo', desc: 'Prestigious suites overlooking Casino Square and the Mediterranean Sea.' },
      { icon: 'fa-solid fa-utensils', title: '3-Star Michelin Dining', desc: 'Reserved private table at Le Louis XV – Alain Ducasse à l’Hôtel de Paris.' },
      { icon: 'fa-solid fa-spray-can-sparkles', title: 'Private Grasse Perfume Workshop', desc: 'Create your own bespoke customized fragrance with a master perfumer.' }
    ],
    metrics: {
      duration: '7 Days / 6 Nights',
      groupSize: 'Private / Ultra-Luxe',
      season: 'May to October',
      language: 'English & French Chauffeur Host',
      pace: 'Riviera Glamour'
    },
    itinerary: [
      {
        day: 1,
        title: 'Helicopter Transfer from Nice to Monaco Hôtel de Paris',
        location: 'Nice to Monte-Carlo, Monaco',
        transport: 'Monacair 7-Minute Helicopter Transfer & Limousine',
        meals: 'Welcome Champagne & Caviar Reception',
        stay: 'Hôtel de Paris Monte-Carlo (Sea View Suite)',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        content: 'Land at Nice Côte d’Azur Airport and step directly into a private helicopter for a breathtaking 7-minute flight tracing the dramatic cliffs of the French Riviera into Monaco Heliport. Check in to the legendary Hôtel de Paris on Casino Square and sip champagne on your terrace.',
        places: ['Nice Côte d’Azur Airport', 'Monaco Heliport Flight', 'Hôtel de Paris Monte-Carlo', 'Casino de Monte-Carlo Square']
      },
      {
        day: 2,
        title: 'Private Yacht Charter: Cap Ferrat & Villefranche Bay',
        location: 'Monaco & Cap Ferrat',
        transport: '80ft Sunseeker Private Yacht',
        meals: 'Breakfast, Lobster & Champagne Yacht Lunch, Gourmet Dinner',
        stay: 'Hôtel de Paris Monte-Carlo',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        content: 'Board an 80ft luxury yacht in Port Hercule. Cruise past the clifftop villas of Saint-Jean-Cap-Ferrat, dropping anchor in the crystal-clear turquoise waters of Villefranche Bay for swimming, snorkeling, and seabob riding with a private chef lunch prepared on board.',
        places: ['Port Hercule Yacht Marina', 'Saint-Jean-Cap-Ferrat Peninsula', 'Villefranche-sur-Mer Bay', 'Plage Mala Clifftop Cove']
      },
      {
        day: 3,
        title: 'Prince’s Palace of Monaco & 3-Star Michelin Dinner',
        location: 'Monaco-Ville & Monte-Carlo',
        transport: 'Private Chauffeur',
        meals: 'Breakfast, Portside Lunch, Le Louis XV Alain Ducasse Dinner',
        stay: 'Hôtel de Paris Monte-Carlo',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        content: 'Explore the Rock of Monaco, visiting the State Apartments of the Prince’s Palace and the Oceanographic Museum founded by Prince Albert I. In the evening, dress in black tie for dinner at Le Louis XV by Alain Ducasse, holder of 3 Michelin stars since 1990.',
        places: ['Prince’s Palace State Apartments', 'Monaco Cathedral (Grace Kelly Tomb)', 'Thermes Marins Monte-Carlo Spa', 'Le Louis XV Restaurant']
      },
      {
        day: 4,
        title: 'Moyenne Corniche Drive, Eze & Transfer to Cannes',
        location: 'Eze & Cannes, France',
        transport: 'Chauffeur-Driven Mercedes Maybach',
        meals: 'Breakfast, Clifftop Lunch at La Chèvre d’Or, Dinner',
        stay: 'Carlton Cannes, a Regent Hotel (Croisette Suite)',
        img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        content: 'Drive the dramatic Moyenne Corniche highway up to the medieval eagle’s nest village of Eze. Savor lunch on the panoramic terrace of Château de la Chèvre d’Or before continuing to Cannes. Check in at the Belle Époque landmark Carlton Cannes on Boulevard de la Croisette.',
        places: ['Château de la Chèvre d’Or', 'Jardin Exotique d’Eze', 'Carlton Cannes Hotel', 'Boulevard de la Croisette']
      },
      {
        day: 5,
        title: 'Saint-Tropez Yacht Day Trip & Pampelonne Beach Club',
        location: 'Cannes to Saint-Tropez',
        transport: 'High-Speed Luxury Yacht Charter',
        meals: 'Breakfast, Club 55 Beach Lunch, Cannes Seafood Dinner',
        stay: 'Carlton Cannes',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        content: 'Cruise across the Gulf of Saint-Tropez past the red porphyry rock cliffs of the Massif de l’Esterel. Dock at Pampelonne Beach for a reserved VIP daybed and lunch at the world-famous Club 55, followed by a stroll through the cobblestone alleys of the old fishing village.',
        places: ['Massif de l’Esterel Red Cliffs', 'Pampelonne Beach', 'Club 55 VIP Lounge', 'Saint-Tropez Harbor & Citadel']
      },
      {
        day: 6,
        title: 'Bespoke Grasse Perfume Creation & Lérins Islands Cruise',
        location: 'Grasse & Île Sainte-Marguerite',
        transport: 'Private Chauffeur & Speedboat Tender',
        meals: 'Breakfast, Island Monastery Lunch, Farewell Gala Dinner',
        stay: 'Carlton Cannes',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        content: 'Travel inland to Grasse, the world capital of perfume. In a private laboratory, compose your own personalized eau de parfum with an esteemed master nose. In the afternoon, boat to the tranquil pine-scented Lérins Islands to explore the medieval fortress of the Man in the Iron Mask.',
        places: ['Private Grasse Perfume Atelier', 'Île Sainte-Marguerite Fortress', 'Île Saint-Honorat Abbey Vineyard', 'Cannes Old Port Sunset']
      },
      {
        day: 7,
        title: 'Morning Croisette Stroll & Chauffeur to Nice Airport',
        location: 'Cannes to Nice Airport',
        transport: 'Private Executive Chauffeur Transfer',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        content: 'Savor espresso on the Carlton Cannes terrace looking out over the Mediterranean. Complete check-out before your private chauffeur transfers you to Nice Côte d’Azur Airport for your return flight home.',
        places: ['Carlton Beach Club', 'Cannes Old Port', 'Nice Côte d’Azur Airport (NCE)']
      }
    ],
    inclusions: [
      '3 Nights in Luxury Sea-View Suite at Hôtel de Paris Monte-Carlo',
      '3 Nights in Prestige Suite at Carlton Cannes on Boulevard de la Croisette',
      'Private helicopter flight transfer from Nice Airport to Monaco',
      'Full-day private 80ft luxury yacht charter with skipper, fuel, and champagne lunch',
      'Dinner at 3-Star Michelin Le Louis XV – Alain Ducasse à l’Hôtel de Paris',
      'Private perfume creation masterclass in Grasse with personal 100ml flacon',
      'All executive Mercedes Maybach chauffeur transfers throughout',
      'Daily 5-star champagne breakfast'
    ],
    exclusions: [
      'International flights to/from Nice (NCE)',
      'Casino gambling stakes and private salon buy-ins in Monte-Carlo',
      'Personal boutique shopping on Boulevard de la Croisette and Casino Square',
      'Comprehensive travel and medical insurance',
      'Crew and driver gratuities'
    ]
  },

  // 14. BALI COASTAL VILLAS & NUSA PENIDA
  {
    slug: 'bali',
    fileName: 'package-bali.html',
    title: 'Bali Coastal Villas & Nusa Penida',
    country: 'Indonesia',
    destination: 'Seminyak & Nusa Penida, Indonesia',
    category: 'Beach Vacations',
    duration: '8 Days / 7 Nights',
    price: '$1,290',
    heroImg: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80',
    overview: 'An exotic island escape balancing coastal luxury and mystical culture. Stay in private infinity pool villas in Seminyak, snorkel with wild manta rays off the sheer cliffs of Nusa Penida, wander Ubud’s emerald rice terraces, and witness ancient Hindu fire dances at Uluwatu.',
    highlights: [
      { icon: 'fa-solid fa-water', title: 'Private Pool Villa', desc: 'Standalone luxury thatched villa with private plunge pool and tropical gardens.' },
      { icon: 'fa-solid fa-fish-fins', title: 'Nusa Penida Manta Snorkeling', desc: 'Swim alongside gentle giant manta rays in crystal turquoise bays.' },
      { icon: 'fa-solid fa-camera', title: 'Kelingking T-Rex Beach', desc: 'World-famous coastal cliff viewpoint plunging into azure Indian Ocean surf.' },
      { icon: 'fa-solid fa-fire', title: 'Uluwatu Clifftop Kecak Dance', desc: 'Mesmerizing chant and fire performance on a 70-meter sea cliff at sunset.' }
    ],
    metrics: {
      duration: '8 Days / 7 Nights',
      groupSize: 'Private / Couples',
      season: 'April to October',
      language: 'English Guided',
      pace: 'Tropical & Cultural'
    },
    itinerary: [
      {
        day: 1,
        title: 'Denpasar Arrival & Private Seminyak Pool Villa Check-In',
        location: 'Denpasar to Seminyak, Bali',
        transport: 'Private Air-Conditioned Chauffeur Transfer',
        meals: 'Tropical Welcome Drink & Balinese Seafood Dinner',
        stay: 'The Samaya Seminyak / W Bali Seminyak (Private Pool Villa)',
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        content: 'Land at Ngurah Rai International Airport in Denpasar where your private Balinese host greets you with fragrant frangipani flower leis. Transfer to your beachfront private pool villa in fashionable Seminyak. Unwind in your sunken garden pool before a sunset dinner on the sand.',
        places: ['Denpasar Ngurah Rai Airport', 'Seminyak Beachfront', 'Private Villa Plunge Pool', 'Petitenget Sunset Beach']
      },
      {
        day: 2,
        title: 'Tanah Lot Sea Temple & Jimbaran Sunset Seafood Feast',
        location: 'Tanah Lot & Jimbaran Bay',
        transport: 'Private Vehicle',
        meals: 'Floating Breakfast, Jimbaran Beach Seafood Feast',
        stay: 'The Samaya Seminyak Private Pool Villa',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        content: 'Wake to an elaborate breakfast floating in your villa pool. In the afternoon, visit the dramatic 16th-century sea temple of Pura Tanah Lot perched on an offshore rock battered by crashing waves. Conclude at Jimbaran Bay for a candlelit feast of grilled snapper, lobster, and prawns right on the beach.',
        places: ['Tanah Lot Offshore Temple', 'Echo Beach Canggu', 'Jimbaran Bay Candlelit Beach', 'Balinese Gamelan Sunset']
      },
      {
        day: 3,
        title: 'Speedboat to Nusa Penida: Kelingking & Broken Beach',
        location: 'Nusa Penida Island',
        transport: 'Private Fast Boat & 4WD Island Vehicle',
        meals: 'Breakfast, Clifftop Lunch, Beach Club Dinner',
        stay: 'Maua Nusa Penida Luxury Eco-Resort',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        content: 'Board a private speedboat crossing the Badung Strait to the dramatic island of Nusa Penida. Visit the jaw-dropping T-Rex shaped coastal promontory of Kelingking Secret Point. Marvel at the natural rock archway of Broken Beach and the natural infinity tide pool of Angel’s Billabong.',
        places: ['Sanur Harbor Fast Boat', 'Kelingking T-Rex Cliff', 'Broken Beach (Pasih Uug)', 'Angel’s Billabong Natural Pool']
      },
      {
        day: 4,
        title: 'Manta Bay Snorkeling Safari & Crystal Bay',
        location: 'Nusa Penida & Manta Point',
        transport: 'Private Snorkeling Boat & Return Speedboat to Bali',
        meals: 'Breakfast, Island Beach Lunch, Villa Dinner',
        stay: 'The Samaya Seminyak Private Pool Villa',
        img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        content: 'Set out on an open boat to Manta Point, where resident oceanic manta rays glide through cleaning stations. Snorkel alongside these gentle giants with wingspans up to four meters. Swim among coral gardens in Crystal Bay before catching the afternoon fast boat back to main Bali.',
        places: ['Manta Point Feeding Sanctuary', 'Crystal Bay Coral Gardens', 'Gamat Bay Snorkel Reef', 'Seminyak Evening Nightlife']
      },
      {
        day: 5,
        title: 'Cultural Ubud: Monkey Forest & Tegallalang Rice Terraces',
        location: 'Ubud, Gianyar, Bali',
        transport: 'Private Chauffeur Tour',
        meals: 'Breakfast, Organic Jungle Farm Lunch, Ubud Bistro Dinner',
        stay: 'Four Seasons Resort Bali at Sayan / Mandapa',
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        content: 'Travel into the spiritual heartland of Ubud. Walk the shaded jungle stone paths of the Sacred Monkey Forest Sanctuary. Climb the emerald stepped terraces of Tegallalang, try the famous jungle ravine swing, and browse woodcarvings and batik silks in Ubud market.',
        places: ['Sacred Monkey Forest', 'Tegallalang Stepped Rice Terraces', 'Bali Jungle Ravine Swing', 'Ubud Royal Palace & Market']
      },
      {
        day: 6,
        title: 'Tirta Empul Water Blessing & Ayung River Rafting',
        location: 'Tampaksiring & Ayung River, Ubud',
        transport: 'Private Vehicle & River Raft',
        meals: 'Breakfast, Riverside Lunch, Lotus Pavilion Dinner',
        stay: 'Four Seasons Resort Bali at Sayan',
        img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
        content: 'Participate in a centuries-old purification ritual at the sacred holy water springs of Tirta Empul Temple. Afterwards, embark on a fun, scenic white-water rafting trip down the Ayung River through lush tropical rainforests with carved stone riverbanks and hidden waterfalls.',
        places: ['Tirta Empul Holy Water Temple', 'Ayung River Rainforest Rafting', 'Pura Gunung Kawi Cliff Shrines', 'Ayung River Valley Overlook']
      },
      {
        day: 7,
        title: 'Uluwatu Clifftop Temple & Dramatic Kecak Fire Dance',
        location: 'Uluwatu, Bukit Peninsula',
        transport: 'Private Chauffeur',
        meals: 'Breakfast, Clifftop Beach Club Lunch, Farewell Banquet',
        stay: 'The Samaya Seminyak Private Pool Villa',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        content: 'Travel to the rugged limestone cliffs of the Bukit Peninsula. Tour Pura Luhur Uluwatu perched 70 meters above the crashing Indian Ocean. As the sun sets, take seats in the open amphitheater for the stirring Kecak Fire Dance telling the tale of the Ramayana.',
        places: ['Pura Luhur Uluwatu Sea Temple', 'Kecak & Fire Dance Sunset Performance', 'Padang Padang Surfing Beach', 'Single Fin Clifftop Terrace']
      },
      {
        day: 8,
        title: 'Balinese Herbal Spa & Airport Departure',
        location: 'Seminyak to Denpasar Airport',
        transport: 'Private Airport Chauffeur',
        meals: 'Breakfast Included',
        stay: 'Check-out',
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        content: 'Conclude your Balinese journey with a 90-minute traditional Balinese boreh herbal massage and flower petal bath. Check out of your villa and take your private transfer to Ngurah Rai Airport for your return flight.',
        places: ['Villa Flower Petal Bath', 'Seminyak Art Boutiques', 'Denpasar Airport (DPS)']
      }
    ],
    inclusions: [
      '5 Nights in Luxury Private Pool Villa in Seminyak',
      '2 Nights in 5-Star River-Valley Luxury Resort in Ubud',
      'Private round-trip fast boat tickets to Nusa Penida island',
      'Full-day guided Nusa Penida excursion including Kelingking Cliff and Angel’s Billabong',
      'Manta Point snorkeling expedition with boat and equipment',
      'Uluwatu Temple entrance and reserved Kecak Fire Dance sunset performance',
      'Tirta Empul water purification blessing ceremony and sarong rental',
      'All private air-conditioned chauffeured transportation throughout',
      'Daily breakfast including one floating pool breakfast'
    ],
    exclusions: [
      'International flights to/from Denpasar Bali (DPS)',
      'Bali tourist entry tax ($10/person)',
      'Lunches and dinners not specified in the package',
      'Personal spa treatments and shopping purchases',
      'Travel and medical insurance',
      'Driver and local guide tips'
    ]
  }
];

