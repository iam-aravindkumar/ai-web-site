/**
 * LUMINA VOYAGE — Next-Gen AI-Curated Luxury Travel Platform
 * Comprehensive Multi-Country Content & Localization Engine
 */

// --- 1. GLOBAL REGIONS & COUNTRY EDITIONS DATABASE ---
const REGIONS_DATABASE = {
  IN: {
    code: "IN",
    name: "India",
    shortName: "India",
    flag: "🇮🇳",
    currency: "INR",
    currencySymbol: "₹ ",
    currencyRate: 83.5,
    departureHub: "Mumbai (BOM) & New Delhi (DEL) VIP Terminals",
    conciergePhone: "+91 22 8840 LUMINA",
    conciergeHours: "24/7 Dedicated India Elite Desk",
    complianceBadge: "✦ RBI LRS Compliant • Mumbai/Delhi VIP Private Jet Gate",
    heroAnnouncement: "Exclusive: Private Jet Charters from Mumbai/DEL to Amalfi, Himalayas & Maldives open for AI Matching.",
    localPerk: "Complimentary Mumbai/DEL VIP Terminal Escort & LRS Forex Concierge",
    destinations: [
      {
        id: "shimla-himalayas",
        category: "alpine",
        title: "Wildflower Hall Himalayan Sanctuary",
        location: "Shimla & Himalayas, India",
        tag: "Imperial Pines",
        badge: "Lord Kitchener Estate",
        rating: 4.99,
        reviews: 284,
        priceUsd: 3350,
        pricePer: "night / suite",
        duration: "4-7 Days Recommended",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        description: "Situated at 8,250 feet amidst cedar forests with panoramic views of snow-capped peaks. Heated outdoor whirlpool overlooking the Himalayas and private cedar trail breakfasts.",
        highlights: ["Himalayan Heli-Picnic", "Private Cedar Forest Spa", "24/7 AI Butler", "Personal Master Naturalist"],
        coordinates: "31.1048° N, 77.1734° E",
        bestSeason: "Year-Round (Snow: Dec-Feb)",
        flightTime: "1.5h Private Helicopter via DEL",
        aiMatchScore: 99
      },
      {
        id: "ranthambore-royal",
        category: "safari",
        title: "Aman-i-Khás Royal Tiger Sanctuary",
        location: "Ranthambore, Rajasthan",
        tag: "Royal Wilderness",
        badge: "Mughal Tent Pavilion",
        rating: 4.98,
        reviews: 195,
        priceUsd: 4600,
        pricePer: "night / pavilion",
        duration: "3-6 Days Recommended",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
        description: "Intimate 10-tent luxury encampment on the threshold of Ranthambore National Park. Private bespoke open-top safari cruisers with senior naturalists to track wild Royal Bengal Tigers.",
        highlights: ["Guaranteed Private Tiger Safari", "Mughal Starlit Dining", "Bespoke Ayurvedic Healer", "Private Stepwell Excursion"],
        coordinates: "26.0173° N, 76.5026° E",
        bestSeason: "Oct — May",
        flightTime: "45m Private Jet to Jaipur + Chauffeur",
        aiMatchScore: 98
      },
      {
        id: "maldives-soneva",
        category: "tropical",
        title: "Soneva Fushi Private Water Reserve",
        location: "Baa Atoll, Maldives",
        tag: "Direct Seaplane",
        badge: "Ultra Luxury Atoll",
        rating: 5.00,
        reviews: 512,
        priceUsd: 5900,
        pricePer: "night / reserve",
        duration: "5-8 Days Recommended",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
        description: "Castaway luxury at its finest with dedicated Barefoot Guardian, private observatory, retractable glass roofs for stargazing, and private manta ray lagoon diving.",
        highlights: ["2.5h Direct Seaplane from BOM", "Private Water Slide Villa", "UNESCO Biosphere Dives", "Overwater Cinema"],
        coordinates: "5.1111° N, 73.0800° E",
        bestSeason: "Nov — Apr",
        flightTime: "2.5h Direct Flight via BOM",
        aiMatchScore: 99
      },
      {
        id: "amalfi",
        category: "mediterranean",
        title: "Villa TreVille & Amalfi Coast",
        location: "Positano, Italy",
        tag: "Haute Riviera",
        badge: "European Summer",
        rating: 4.99,
        reviews: 342,
        priceUsd: 4850,
        pricePer: "night / villa",
        duration: "7-10 Days Recommended",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
        description: "Cliffside private estate overlooking the Tyrrhenian Sea. Includes private Riva yacht charter to Capri and private sommelier cellar tastings.",
        highlights: ["Private Riva Yacht Charter", "Cliffside Michelin Dining", "24/7 AI Butler Support", "Helipad Direct Access"],
        coordinates: "40.6281° N, 14.4850° E",
        bestSeason: "May — Oct",
        flightTime: "8.5h Private Jet via BOM",
        aiMatchScore: 97
      },
      {
        id: "zermatt",
        category: "alpine",
        title: "The Glass Penthouse Matterhorn",
        location: "Zermatt, Switzerland",
        tag: "Alpine Pinnacle",
        badge: "Swiss Luxury",
        rating: 4.98,
        reviews: 218,
        priceUsd: 5900,
        pricePer: "night / chalet",
        duration: "5-8 Days Recommended",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200&auto=format&fit=crop",
        description: "Private ski-in ski-out sanctuary with panoramic vistas of the Matterhorn, outdoor heated onsen-style hydrotherapy pool, and Michelin private chef.",
        highlights: ["Heli-Skiing Expeditions", "Private Master Sommelier", "Matterhorn Unobstructed Views", "Custom Ski Concierge"],
        coordinates: "45.9765° N, 7.7491° E",
        bestSeason: "Nov — Apr",
        flightTime: "8.0h Private Jet via DEL",
        aiMatchScore: 98
      },
      {
        id: "kyoto",
        category: "east-asia",
        title: "Aman Kyoto Zen Forest Retreat",
        location: "Kyoto, Japan",
        tag: "Mindfulness",
        badge: "Cherry Blossom",
        rating: 4.97,
        reviews: 412,
        priceUsd: 3800,
        pricePer: "night / pavilion",
        duration: "6-10 Days Recommended",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
        description: "Hidden in an ancient secret garden at the foot of Mount Hidari Daimonji. Private Zen master tea ceremonies and after-hours private temple access.",
        highlights: ["Private Temple Access", "Kintsugi Masterclass", "Natural Forest Onsen", "Bespoke Kaiseki Dinners"],
        coordinates: "35.0538° N, 135.7288° E",
        bestSeason: "Year-Round",
        flightTime: "6.5h Direct Jet via BOM",
        aiMatchScore: 96
      },
      {
        id: "amanbagh-alwar",
        category: "east-asia",
        title: "Amanbagh Ancient Aravalli Sanctuary",
        location: "Alwar & Aravalli, Rajasthan",
        tag: "Heritage Palace",
        badge: "Private Haveli",
        rating: 4.98,
        reviews: 167,
        priceUsd: 2600,
        pricePer: "night / haveli",
        duration: "3-5 Days Recommended",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
        description: "Walled oasis of palatial domed pavilions nestled under palm and eucalyptus trees. Private sunset camel safaris into ruined fortresses and private Ayurvedic wellness doctor.",
        highlights: ["Bhangarh Twilight Tour", "Private Courtyard Pool", "Cow-Dust Sunset Hour", "Imperial Ayurvedic Diet"],
        coordinates: "27.1352° N, 76.3533° E",
        bestSeason: "Oct — Apr",
        flightTime: "30m Helicopter from DEL",
        aiMatchScore: 97
      },
      {
        id: "serengeti",
        category: "safari",
        title: "Singita Serengeti Migration Reserve",
        location: "Grumeti Reserves, Tanzania",
        tag: "Wilderness Luxe",
        badge: "Big 5 Sanctuary",
        rating: 5.00,
        reviews: 189,
        priceUsd: 7200,
        pricePer: "night / suite",
        duration: "7-12 Days Recommended",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop",
        description: "Unrivaled front-row access to the Great Migration. Private electric safari Land Cruisers, expert wildlife trackers, and starlit savanna dinners.",
        highlights: ["Hot Air Balloon Dawn Safari", "Exclusive 350,000-Acre Concession", "Private Tracker & Guide", "Anti-Poaching Tour"],
        coordinates: "2.3333° S, 34.8333° E",
        bestSeason: "Jun — Oct",
        flightTime: "5.5h Direct Jet via BOM",
        aiMatchScore: 99
      }
    ]
  },

  AE: {
    code: "AE",
    name: "United Arab Emirates",
    shortName: "UAE",
    flag: "🇦🇪",
    currency: "AED",
    currencySymbol: "AED ",
    currencyRate: 3.67,
    departureHub: "Dubai Al Maktoum (DWC) & Abu Dhabi (AUH) VIP Terminals",
    conciergePhone: "+971 4 312 8000",
    conciergeHours: "24/7 GCC Royal & Elite Client Desk",
    complianceBadge: "✦ DCAA Registered • Al Maktoum VIP Lounge & Supercar Tarmac Escort",
    heroAnnouncement: "Exclusive: Falcon 8X private charters from Dubai to Positano, Zermatt & Zighy Bay active.",
    localPerk: "Private Rolls-Royce Tarmac Transfer & Arabic VIP Protocol Concierge",
    destinations: [
      {
        id: "zighy-bay",
        category: "mediterranean",
        title: "Six Senses Zighy Bay Private Reserve",
        location: "Musandam Peninsula (Near Dubai)",
        tag: "Desert Meets Sea",
        badge: "Royal Beachfront Palace",
        rating: 4.99,
        reviews: 310,
        priceUsd: 3900,
        pricePer: "night / reserve",
        duration: "3-6 Days Recommended",
        image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1200&auto=format&fit=crop",
        description: "Indigenous village-style villas with private pools set between dramatic mountains and a 1.6km private sand beach. Arrive via private tandem paraglider or private Riva yacht.",
        highlights: ["Direct Superyacht from Dubai", "Paragliding VIP Arrival", "Dhow Sunset Champagne Cruise", "Private Deep Sea Fishing"],
        coordinates: "25.6883° N, 56.2872° E",
        bestSeason: "Oct — May",
        flightTime: "1.5h Chauffeur / Private Speedboat from Dubai",
        aiMatchScore: 99
      },
      {
        id: "zermatt",
        category: "alpine",
        title: "The Glass Penthouse Matterhorn",
        location: "Zermatt, Switzerland",
        tag: "Alpine Pinnacle",
        badge: "Swiss Royal Chalet",
        rating: 4.98,
        reviews: 218,
        priceUsd: 5900,
        pricePer: "night / chalet",
        duration: "5-8 Days Recommended",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200&auto=format&fit=crop",
        description: "Private ski-in ski-out sanctuary with panoramic vistas of the Matterhorn, outdoor heated onsen-style hydrotherapy pool, and Michelin private chef.",
        highlights: ["Heli-Skiing Expeditions", "Private Master Sommelier", "Matterhorn Unobstructed Views", "Custom Ski Concierge"],
        coordinates: "45.9765° N, 7.7491° E",
        bestSeason: "Nov — Apr",
        flightTime: "6.0h Direct Jet via DWC",
        aiMatchScore: 98
      },
      {
        id: "cheval-blanc-maldives",
        category: "tropical",
        title: "Cheval Blanc Randheli Island Villa",
        location: "Noonu Atoll, Maldives",
        tag: "LVMH Haute Luxury",
        badge: "Ultra-Private Island",
        rating: 5.00,
        reviews: 420,
        priceUsd: 6800,
        pricePer: "night / villa",
        duration: "5-9 Days Recommended",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
        description: "Designed by Jean-Michel Gathy for LVMH. Cathedral-ceilinged water villas with private 12.5m infinity pools, dedicated Majordome butler, and Guerlain private spa island.",
        highlights: ["3.5h Direct Private Jet from DWC", "Private 1-Island Spa", "LVMH Wine Cellar", "Private Dhonis Yacht"],
        coordinates: "5.8333° N, 73.1500° E",
        bestSeason: "Nov — Apr",
        flightTime: "3.5h Direct Jet via DWC",
        aiMatchScore: 99
      },
      {
        id: "amalfi",
        category: "mediterranean",
        title: "Villa TreVille & Amalfi Coast",
        location: "Positano, Italy",
        tag: "Haute Riviera",
        badge: "AI Top Pick",
        rating: 4.99,
        reviews: 342,
        priceUsd: 4850,
        pricePer: "night / villa",
        duration: "7-10 Days Recommended",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
        description: "Cliffside private estate overlooking the Tyrrhenian Sea. Includes private Riva yacht charter to Capri and private sommelier cellar tastings.",
        highlights: ["Private Riva Yacht Charter", "Cliffside Michelin Dining", "24/7 AI Butler Support", "Helipad Direct Access"],
        coordinates: "40.6281° N, 14.4850° E",
        bestSeason: "May — Oct",
        flightTime: "5.5h Direct Falcon via DWC",
        aiMatchScore: 97
      },
      {
        id: "paris-rosewood",
        category: "east-asia",
        title: "Hôtel de Crillon Duc de Crillon Suite",
        location: "Place de la Concorde, Paris",
        tag: "Haute Horlogerie",
        badge: "Palace Hotel",
        rating: 4.99,
        reviews: 380,
        priceUsd: 5200,
        pricePer: "night / suite",
        duration: "4-7 Days Recommended",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
        description: "Historic 18th-century palace residence overlooking Place de la Concorde. Private after-hours shopping appointments at Place Vendôme high jewelry ateliers.",
        highlights: ["Private Louvre After-Hours Tour", "Personal Haute Couture Stylist", "Michelin 3-Star In-Suite Gala", "Maybach Chauffeur"],
        coordinates: "48.8672° N, 2.3218° E",
        bestSeason: "Year-Round",
        flightTime: "6.5h Direct Jet via DWC",
        aiMatchScore: 98
      },
      {
        id: "serengeti",
        category: "safari",
        title: "Singita Serengeti Migration Reserve",
        location: "Grumeti Reserves, Tanzania",
        tag: "Wilderness Luxe",
        badge: "Big 5 Sanctuary",
        rating: 5.00,
        reviews: 189,
        priceUsd: 7200,
        pricePer: "night / suite",
        duration: "7-12 Days Recommended",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
        description: "Unrivaled front-row access to the Great Migration. Private electric safari Land Cruisers, expert wildlife trackers, and starlit savanna dinners.",
        highlights: ["Hot Air Balloon Dawn Safari", "Exclusive 350,000-Acre Concession", "Private Tracker & Guide", "Anti-Poaching Tour"],
        coordinates: "2.3333° S, 34.8333° E",
        bestSeason: "Jun — Oct",
        flightTime: "4.5h Direct Falcon 8X via DWC",
        aiMatchScore: 99
      },
      {
        id: "kyoto",
        category: "east-asia",
        title: "Aman Kyoto Zen Forest Retreat",
        location: "Kyoto, Japan",
        tag: "Cultural Sanctuary",
        badge: "Mindfulness & Zen",
        rating: 4.97,
        reviews: 412,
        priceUsd: 3800,
        pricePer: "night / pavilion",
        duration: "6-10 Days Recommended",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
        description: "Hidden in an ancient secret garden at the foot of Mount Hidari Daimonji. Private Zen master tea ceremonies and after-hours private temple access.",
        highlights: ["Private Temple Access", "Kintsugi Masterclass", "Natural Forest Onsen", "Bespoke Kaiseki Dinners"],
        coordinates: "35.0538° N, 135.7288° E",
        bestSeason: "Year-Round",
        flightTime: "8.5h Direct Falcon via DWC",
        aiMatchScore: 96
      },
      {
        id: "santorini",
        category: "mediterranean",
        title: "Canaves Oia Epitome Cliffside",
        location: "Santorini, Greece",
        tag: "Aegean Dream",
        badge: "Romantic Icon",
        rating: 4.95,
        reviews: 378,
        priceUsd: 3950,
        pricePer: "night / villa",
        duration: "5-8 Days Recommended",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
        description: "Perched above the picturesque fishing town of Ammoudi. Infinity pool overlooking volcanic calderas with sunset catamaran cruises.",
        highlights: ["Sunset Catamaran Cruise", "Private Wine Cellar Tour", "Infinity Caldera Pool", "Private Helipad Transfer"],
        coordinates: "36.4618° N, 25.3753° E",
        bestSeason: "Apr — Oct",
        flightTime: "4.5h Direct Falcon via DWC",
        aiMatchScore: 95
      }
    ]
  },

  US: {
    code: "US",
    name: "United States",
    shortName: "USA",
    flag: "🇺🇸",
    currency: "USD",
    currencySymbol: "$",
    currencyRate: 1.0,
    departureHub: "New York (TEB) & Los Angeles (VNY) Terminals",
    conciergePhone: "+1 (800) 586-4628",
    conciergeHours: "24/7 Americas Private Client Desk",
    complianceBadge: "✦ FAA Part 135 Compliant • Teterboro & Van Nuys VIP Gates",
    heroAnnouncement: "Exclusive: Transatlantic Gulfstream G650 charters to Swiss Alps & Amalfi now active.",
    localPerk: "Complimentary Helicopter Transfer to Teterboro / Van Nuys Jet Terminals",
    destinations: [
      {
        id: "amangiri-utah",
        category: "alpine",
        title: "Amangiri & Canyon Point Sanctuary",
        location: "Canyon Point, Southern Utah",
        tag: "Architectural Icon",
        badge: "Desert Monolith",
        rating: 4.99,
        reviews: 460,
        priceUsd: 4600,
        pricePer: "night / suite",
        duration: "4-7 Days Recommended",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        description: "Set across 600 acres of the Colorado Plateau. Raw concrete architecture integrated into dramatic 165-million-year-old sandstone formations with private canyon via ferrata climbs.",
        highlights: ["Private Grand Canyon Helicopter", "Hot Air Balloon Dawn Flight", "Navajo Guided Secret Canyons", "Floatation Water Pavilion"],
        coordinates: "37.0189° N, 111.5833° W",
        bestSeason: "Year-Round",
        flightTime: "1.5h Jet to Page Airport (PGA)",
        aiMatchScore: 99
      },
      {
        id: "eden-rock-stbarths",
        category: "tropical",
        title: "Eden Rock Villa Rockstar",
        location: "St. Jean Bay, St. Barths",
        tag: "Caribbean Haute",
        badge: "Private Superyacht Villa",
        rating: 5.00,
        reviews: 290,
        priceUsd: 6800,
        pricePer: "night / villa",
        duration: "5-10 Days Recommended",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
        description: "Perched on a rocky promontory surrounded by turquoise sea. Private multi-tier recording studio, private chef, dedicated butler, and direct private beach access.",
        highlights: ["Private Superyacht to Anguilla", "Jean-Georges Dining", "Vintage Recording Studio", "Private Cigar & Rum Cellar"],
        coordinates: "17.9042° N, 62.8375° W",
        bestSeason: "Nov — May",
        flightTime: "3.5h Direct Jet via MIA/TEB",
        aiMatchScore: 99
      },
      {
        id: "aspen-little-nell",
        category: "alpine",
        title: "The Little Nell & Aspen Mountain",
        location: "Aspen, Colorado",
        tag: "Colorado Gold",
        badge: "Five-Star Ski-in Ski-out",
        rating: 4.98,
        reviews: 350,
        priceUsd: 4200,
        pricePer: "night / suite",
        duration: "5-8 Days Recommended",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200&auto=format&fit=crop",
        description: "Aspen's only 5-star ski-in/ski-out hotel. First Tracks early morning untracked powder access, private snowcat dinners, and legendary 20,000-bottle wine cellar.",
        highlights: ["First Tracks Powder Access", "Snowcat Starlit Dining", "Master Sommelier Cellar Tour", "Audi Q8 Private Courtesy Fleet"],
        coordinates: "39.1911° N, 106.8175° W",
        bestSeason: "Nov — Apr",
        flightTime: "2.5h Direct Jet to ASE",
        aiMatchScore: 98
      },
      {
        id: "amalfi",
        category: "mediterranean",
        title: "Villa TreVille & Amalfi Coast",
        location: "Positano, Italy",
        tag: "Haute Riviera",
        badge: "AI Top Pick",
        rating: 4.99,
        reviews: 342,
        priceUsd: 4850,
        pricePer: "night / villa",
        duration: "7-10 Days Recommended",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
        description: "Cliffside private estate overlooking the Tyrrhenian Sea. Includes private Riva yacht charter to Capri and private sommelier cellar tastings.",
        highlights: ["Private Riva Yacht Charter", "Cliffside Michelin Dining", "24/7 AI Butler Support", "Helipad Direct Access"],
        coordinates: "40.6281° N, 14.4850° E",
        bestSeason: "May — Oct",
        flightTime: "8.0h Direct Gulfstream via TEB",
        aiMatchScore: 97
      },
      {
        id: "zermatt",
        category: "alpine",
        title: "The Glass Penthouse Matterhorn",
        location: "Zermatt, Switzerland",
        tag: "Alpine Pinnacle",
        badge: "Ultra Exclusive",
        rating: 4.98,
        reviews: 218,
        priceUsd: 5900,
        pricePer: "night / chalet",
        duration: "5-8 Days Recommended",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200&auto=format&fit=crop",
        description: "Private ski-in ski-out sanctuary with panoramic vistas of the Matterhorn, outdoor heated onsen-style hydrotherapy pool, and Michelin private chef.",
        highlights: ["Heli-Skiing Expeditions", "Private Master Sommelier", "Matterhorn Unobstructed Views", "Custom Ski Concierge"],
        coordinates: "45.9765° N, 7.7491° E",
        bestSeason: "Nov — Apr",
        flightTime: "7.5h Direct Gulfstream via TEB",
        aiMatchScore: 98
      },
      {
        id: "patagonia",
        category: "alpine",
        title: "Awasi Patagonia Private Reserve",
        location: "Torres del Paine, Chile",
        tag: "End of the World",
        badge: "Wild Frontier",
        rating: 4.98,
        reviews: 160,
        priceUsd: 5400,
        pricePer: "night / villa",
        duration: "6-10 Days Recommended",
        image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=1200&auto=format&fit=crop",
        description: "Stand-alone luxury villas surrounded by native lenga forest with unobstructed views of Lake Sarmiento and the iconic Torres del Paine peaks.",
        highlights: ["Dedicated 4WD & Private Guide", "Puma Tracking Expeditions", "Glacier Grey Kayak Navigation", "Patagonian Asado Feast"],
        coordinates: "51.2532° S, 72.8814° W",
        bestSeason: "Oct — Apr",
        flightTime: "10.0h Direct Jet via MIA",
        aiMatchScore: 97
      },
      {
        id: "serengeti",
        category: "safari",
        title: "Singita Serengeti Private Reserve",
        location: "Grumeti Reserves, Tanzania",
        tag: "Wilderness Luxe",
        badge: "Big 5 Sanctuary",
        rating: 5.00,
        reviews: 189,
        priceUsd: 7200,
        pricePer: "night / suite",
        duration: "7-12 Days Recommended",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
        description: "Unrivaled front-row access to the Great Migration. Private electric safari Land Cruisers, expert wildlife trackers, and starlit savanna dinners.",
        highlights: ["Hot Air Balloon Dawn Safari", "Exclusive 350,000-Acre Concession", "Private Tracker & Guide", "Anti-Poaching Tour"],
        coordinates: "2.3333° S, 34.8333° E",
        bestSeason: "Jun — Oct",
        flightTime: "14.0h Global Express via TEB",
        aiMatchScore: 99
      },
      {
        id: "kyoto",
        category: "east-asia",
        title: "Aman Kyoto Zen Forest Retreat",
        location: "Kyoto, Japan",
        tag: "Cultural Sanctuary",
        badge: "Mindfulness & Zen",
        rating: 4.97,
        reviews: 412,
        priceUsd: 3800,
        pricePer: "night / pavilion",
        duration: "6-10 Days Recommended",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
        description: "Hidden in an ancient secret garden at the foot of Mount Hidari Daimonji. Private Zen master tea ceremonies and after-hours private temple access.",
        highlights: ["Private Temple Access", "Kintsugi Masterclass", "Natural Forest Onsen", "Bespoke Kaiseki Dinners"],
        coordinates: "35.0538° N, 135.7288° E",
        bestSeason: "Year-Round",
        flightTime: "11.5h Direct Jet via LAX",
        aiMatchScore: 96
      }
    ]
  },

  GB: {
    code: "GB",
    name: "United Kingdom",
    shortName: "UK",
    flag: "🇬🇧",
    currency: "GBP",
    currencySymbol: "£ ",
    currencyRate: 0.79,
    departureHub: "London Farnborough (FAB) & Biggin Hill (BQH)",
    conciergePhone: "+44 20 7946 0992",
    conciergeHours: "24/7 Mayfair Private Concierge Desk",
    complianceBadge: "✦ ATOL & ABTA Protected • London Farnborough Private Suite",
    heroAnnouncement: "Exclusive: Winter 2026 Polar Glass Domes & Mediterranean yacht charters from Farnborough.",
    localPerk: "Chauffeur Pick-up from Central London & Fast-Track Farnborough Gate",
    destinations: [
      {
        id: "portofino-splendido",
        category: "mediterranean",
        title: "Belmond Splendido Mare Villa",
        location: "Portofino, Italian Riviera",
        tag: "Riviera Icon",
        badge: "Aristocratic Escape",
        rating: 4.99,
        reviews: 320,
        priceUsd: 4850,
        pricePer: "night / villa",
        duration: "4-8 Days Recommended",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
        description: "16th-century former monastery nestled on a verdant hillside above Portofino harbour. Includes private classic wooden gozzo boat cruises along the Riviera coastline.",
        highlights: ["Private Gozzo Boat Navigation", "Michelin Dining on the Harbour", "Private Sommelier Cellar", "Helicopter Transfer to Genoa"],
        coordinates: "44.3039° N, 9.2081° E",
        bestSeason: "May — Oct",
        flightTime: "2.0h Direct Jet via FAB",
        aiMatchScore: 99
      },
      {
        id: "tromso",
        category: "nordic",
        title: "Lyngen Alps Aurora Glass Domes",
        location: "Tromsø, Norway",
        tag: "Arctic Horizon",
        badge: "Celestial Wonder",
        rating: 4.96,
        reviews: 265,
        priceUsd: 4200,
        pricePer: "night / dome",
        duration: "4-7 Days Recommended",
        image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop",
        description: "Heated architectural glass igloos suspended above the Norwegian fjords. Real-time AI Aurora prediction radar and private dog sledding traverses.",
        highlights: ["AI Aurora Alert Radar", "Private Snowmobile Glacier Tour", "Fjord Whale Watching Safari", "Sauna & Ice Bath"],
        coordinates: "69.6492° N, 18.9553° E",
        bestSeason: "Sep — Apr",
        flightTime: "3.5h Direct Jet via FAB",
        aiMatchScore: 98
      },
      {
        id: "amanzoe-greece",
        category: "mediterranean",
        title: "Amanzoe Acropolis Peloponnese Villa",
        location: "Porto Heli, Greece",
        tag: "Modern Acropolis",
        badge: "Private Pool Villa",
        rating: 5.00,
        reviews: 280,
        priceUsd: 5200,
        pricePer: "night / villa",
        duration: "5-9 Days Recommended",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
        description: "Surrounded by undulating olive groves with 360-degree views of the Aegean Sea. Private beach club access, speedboats to Spetses, and marble amphitheatre.",
        highlights: ["Private Speedboat to Spetses", "Beach Club Private Cabana", "Helipad Direct Access", "Ancient Epidaurus Tour"],
        coordinates: "37.3833° N, 23.1333° E",
        bestSeason: "May — Oct",
        flightTime: "3.5h Direct Jet via FAB",
        aiMatchScore: 99
      },
      {
        id: "zermatt",
        category: "alpine",
        title: "The Glass Penthouse Matterhorn",
        location: "Zermatt, Switzerland",
        tag: "Alpine Pinnacle",
        badge: "Ultra Exclusive",
        rating: 4.98,
        reviews: 218,
        priceUsd: 5900,
        pricePer: "night / chalet",
        duration: "5-8 Days Recommended",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200&auto=format&fit=crop",
        description: "Private ski-in ski-out sanctuary with panoramic vistas of the Matterhorn, outdoor heated onsen-style hydrotherapy pool, and Michelin private chef.",
        highlights: ["Heli-Skiing Expeditions", "Private Master Sommelier", "Matterhorn Unobstructed Views", "Custom Ski Concierge"],
        coordinates: "45.9765° N, 7.7491° E",
        bestSeason: "Nov — Apr",
        flightTime: "1.5h Direct Jet to Sion/Zermatt",
        aiMatchScore: 98
      },
      {
        id: "serengeti",
        category: "safari",
        title: "Singita Serengeti Private Reserve",
        location: "Grumeti Reserves, Tanzania",
        tag: "Wilderness Luxe",
        badge: "Big 5 Sanctuary",
        rating: 5.00,
        reviews: 189,
        priceUsd: 7200,
        pricePer: "night / suite",
        duration: "7-12 Days Recommended",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
        description: "Unrivaled front-row access to the Great Migration. Private electric safari Land Cruisers, expert wildlife trackers, and starlit savanna dinners.",
        highlights: ["Hot Air Balloon Dawn Safari", "Exclusive 350,000-Acre Concession", "Private Tracker & Guide", "Anti-Poaching Tour"],
        coordinates: "2.3333° S, 34.8333° E",
        bestSeason: "Jun — Oct",
        flightTime: "8.5h Direct Jet via FAB",
        aiMatchScore: 99
      },
      {
        id: "maldives",
        category: "tropical",
        title: "Soneva Jani Water Reserve",
        location: "Noonu Atoll, Maldives",
        tag: "Ocean Paradise",
        badge: "Sustainable Luxury",
        rating: 4.99,
        reviews: 530,
        priceUsd: 6400,
        pricePer: "night / overwater",
        duration: "5-10 Days Recommended",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
        description: "Massive two-story overwater pavilions with retractable roofs for stargazing, curved water slides into turquoise lagoons, and private marine biologist dives.",
        highlights: ["Retractable Stargazing Roof", "Private Lagoon Water Slide", "Private Sandbank Gala", "Overwater Cinema"],
        coordinates: "5.6833° N, 73.2833° E",
        bestSeason: "Nov — Apr",
        flightTime: "10.0h Direct Jet via FAB",
        aiMatchScore: 98
      },
      {
        id: "kyoto",
        category: "east-asia",
        title: "Aman Kyoto Zen Forest Retreat",
        location: "Kyoto, Japan",
        tag: "Cultural Sanctuary",
        badge: "Mindfulness & Zen",
        rating: 4.97,
        reviews: 412,
        priceUsd: 3800,
        pricePer: "night / pavilion",
        duration: "6-10 Days Recommended",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
        description: "Hidden in an ancient secret garden at the foot of Mount Hidari Daimonji. Private Zen master tea ceremonies and after-hours private temple access.",
        highlights: ["Private Temple Access", "Kintsugi Masterclass", "Natural Forest Onsen", "Bespoke Kaiseki Dinners"],
        coordinates: "35.0538° N, 135.7288° E",
        bestSeason: "Year-Round",
        flightTime: "12.0h Direct Jet via FAB",
        aiMatchScore: 96
      },
      {
        id: "amalfi",
        category: "mediterranean",
        title: "Villa TreVille & Amalfi Coast",
        location: "Positano, Italy",
        tag: "Haute Riviera",
        badge: "AI Top Pick",
        rating: 4.99,
        reviews: 342,
        priceUsd: 4850,
        pricePer: "night / villa",
        duration: "7-10 Days Recommended",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
        description: "Cliffside private estate overlooking the Tyrrhenian Sea. Includes private Riva yacht charter to Capri and private sommelier cellar tastings.",
        highlights: ["Private Riva Yacht Charter", "Cliffside Michelin Dining", "24/7 AI Butler Support", "Helipad Direct Access"],
        coordinates: "40.6281° N, 14.4850° E",
        bestSeason: "May — Oct",
        flightTime: "2.5h Direct Jet via FAB",
        aiMatchScore: 97
      }
    ]
  }
};

let currentRegionKey = "IN"; // Default to India

// --- 2. CURRENCY & LOCALIZED FORMATTING ---
function formatCurrency(amountInUsd) {
  const reg = REGIONS_DATABASE[currentRegionKey] || REGIONS_DATABASE.IN;
  const converted = Math.round(amountInUsd * reg.currencyRate);
  return `${reg.currencySymbol}${converted.toLocaleString()}`;
}

// --- 3. SWITCH COUNTRY / REGION FUNCTION ---
function setCountryEdition(regionCode) {
  if (!REGIONS_DATABASE[regionCode]) return;
  currentRegionKey = regionCode;
  const reg = REGIONS_DATABASE[regionCode];

  // 1. Update Navbar Country Button with compact label to prevent any navbar clipping!
  const countryPill = document.getElementById("active-country-pill");
  if (countryPill) {
    countryPill.innerHTML = `
      <span class="text-sm sm:text-base">${reg.flag}</span>
      <span class="font-bold text-amber-200 text-xs sm:text-xs">${reg.shortName || reg.name}</span>
      <span class="text-[11px] text-amber-300/80 font-mono">(${reg.currency})</span>
      <i class="fa-solid fa-chevron-down text-[8px] text-amber-400 ml-0.5"></i>
    `;
  }

  // 2. Update Top Banner Ticker
  const topAnnouncement = document.getElementById("top-ticker-text");
  if (topAnnouncement) {
    topAnnouncement.textContent = reg.heroAnnouncement;
  }

  // 3. Update Departure Hub HUD text
  const hubBadge = document.getElementById("regional-hub-badge");
  if (hubBadge) {
    hubBadge.innerHTML = `
      <i class="fa-solid fa-plane-departure text-amber-400 mr-1.5"></i>
      <span>VIP Departure Hub: <strong class="text-white">${reg.departureHub}</strong></span>
    `;
  }

  // 4. Update Trust & Compliance Badge in Comparison / Hero
  const compBadge = document.getElementById("regional-compliance-badge");
  if (compBadge) {
    compBadge.textContent = reg.complianceBadge;
  }

  // 5. Update Local Concierge Desk in Footer
  const footerDesk = document.getElementById("footer-concierge-desk");
  if (footerDesk) {
    footerDesk.innerHTML = `
      <p class="text-white font-bold mb-1">${reg.flag} ${reg.name} VIP Desk: <span class="text-amber-300 font-mono">${reg.conciergePhone}</span></p>
      <p class="text-[11px] text-slate-400">${reg.conciergeHours} • ${reg.localPerk}</p>
    `;
  }

  // 6. Update AI Itinerary Architect Dropdown to reflect that country's curated destinations
  updateAiDropdownForRegion(reg);

  // 7. Re-render Cards & Pricing with new Country-Specific Sanctuaries
  renderDestinations(currentFilter);
  updateCalculator();
  
  // 8. Close Modal if open
  closeRegionModal();

  // 9. Show celebratory VIP feedback toast
  showToast(`Switched to ${reg.flag} ${reg.name} Edition • Loaded ${reg.destinations.length} Curated Sanctuaries (${reg.currency})`);
}

function updateAiDropdownForRegion(reg) {
  const select = document.getElementById("ai-dest-select");
  const quickSelect = document.getElementById("quick-dest-select");
  if (!reg || !reg.destinations) return;

  const optionsHtml = reg.destinations.map(d => `
    <option value="${d.id}" class="bg-[#121824]">${d.title} • ${d.location.split(',')[0]}</option>
  `).join('');

  if (select) select.innerHTML = optionsHtml;
  if (quickSelect) quickSelect.innerHTML = optionsHtml;
}

// --- 4. REGIONAL SELECTOR MODAL ---
function openRegionModal() {
  const modal = document.getElementById("region-modal");
  const content = document.getElementById("region-modal-grid");
  if (!modal || !content) return;

  content.innerHTML = Object.keys(REGIONS_DATABASE).map(key => {
    const r = REGIONS_DATABASE[key];
    const isSelected = key === currentRegionKey;
    return `
      <button 
        onclick="setCountryEdition('${key}')"
        class="p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between ${
          isSelected 
            ? 'bg-amber-400/15 border-2 border-amber-400 shadow-[0_0_20px_rgba(229,195,120,0.3)]' 
            : 'bg-white/[0.03] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.06]'
        }"
      >
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <div class="flex items-center gap-2.5">
              <span class="text-2xl sm:text-3xl">${r.flag}</span>
              <div>
                <h4 class="font-bold text-white text-base font-cormorant">${r.name}</h4>
                <span class="text-xs text-amber-300 font-mono font-semibold">${r.currency} (${r.currencySymbol.trim()})</span>
              </div>
            </div>
            ${isSelected ? '<span class="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(229,195,120,0.8)]"></span>' : ''}
          </div>
          
          <p class="text-xs text-slate-300 mt-1 line-clamp-1 font-sans">
            <i class="fa-solid fa-plane-departure text-amber-400 text-[10px] mr-1"></i> ${r.departureHub}
          </p>
        </div>

        <div class="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-sans">
          <span class="text-emerald-400 font-medium truncate max-w-[200px]">${r.localPerk.split('&')[0]}</span>
          <span class="text-amber-300 font-bold uppercase text-[10px] tracking-wider font-cinzel shrink-0">Select &rarr;</span>
        </div>
      </button>
    `;
  }).join('');

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeRegionModal() {
  const modal = document.getElementById("region-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// --- 5. FILTERING & RENDERING DESTINATIONS ---
let currentFilter = "all";

function renderDestinations(category = "all") {
  currentFilter = category;
  const grid = document.getElementById("destinations-grid");
  if (!grid) return;

  const reg = REGIONS_DATABASE[currentRegionKey] || REGIONS_DATABASE.IN;
  const list = reg.destinations || [];

  const filtered = category === "all" 
    ? list 
    : list.filter(item => item.category === category);

  grid.innerHTML = filtered.map(item => `
    <div class="glass-card rounded-[30px] overflow-hidden luxury-card group flex flex-col justify-between border border-white/[0.08]">
      <!-- Image Container -->
      <div class="relative h-80 overflow-hidden">
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#06080D] via-transparent to-black/30"></div>
        
        <!-- Badges -->
        <div class="absolute top-5 left-5 flex gap-2 flex-wrap">
          <span class="px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-amber-400/30 font-cinzel">
            ${item.tag}
          </span>
          <span class="px-3 py-1 text-[11px] font-bold rounded-full bg-cyan-500/20 backdrop-blur-md text-cyan-300 border border-cyan-400/30 flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            ${item.aiMatchScore}% AI Match
          </span>
        </div>

        <div class="absolute top-5 right-5">
          <button onclick="toggleWishlist('${item.id}', this)" class="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>

        <div class="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-slate-300">
          <span class="flex items-center gap-1.5 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
            <i class="fa-solid fa-location-dot text-amber-400"></i>
            ${item.location}
          </span>
          <span class="flex items-center gap-1 text-amber-300 font-bold bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
            <i class="fa-solid fa-star text-amber-400"></i>
            ${item.rating} (${item.reviews})
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-7 flex-1 flex flex-col justify-between">
        <div>
          <!-- Localized Flight Route Tag -->
          <div class="mb-2.5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
            <span>${reg.flag}</span>
            <span>${item.flightTime || 'VIP Direct Route'}</span>
          </div>

          <h3 class="text-2xl font-bold font-cormorant text-white mb-2.5 group-hover:text-amber-300 transition-colors">
            ${item.title}
          </h3>
          <p class="text-xs text-slate-300 line-clamp-2 mb-5 leading-relaxed font-sans">
            ${item.description}
          </p>

          <!-- Highlights Pills -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${item.highlights.slice(0, 3).map(h => `
              <span class="text-[10px] px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300">
                ✦ ${h}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Footer / Price & Actions -->
        <div class="pt-5 border-t border-white/[0.08] flex items-center justify-between">
          <div>
            <div class="text-[10px] text-slate-400 uppercase tracking-widest font-cinzel">Starting from (${reg.currency})</div>
            <div class="text-2xl font-bold text-amber-300 font-cormorant">
              ${formatCurrency(item.priceUsd)}
              <span class="text-xs text-slate-400 font-normal font-sans">/${item.pricePer.split('/')[1] || 'stay'}</span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button 
              onclick="openQuickView('${item.id}')"
              class="px-3.5 py-2 text-xs font-semibold rounded-full glass-pill hover:bg-white/15 text-white transition-all duration-300"
              title="Quick View Details"
            >
              <i class="fa-solid fa-eye mr-1 text-amber-400"></i> View
            </button>
            <button 
              onclick="openBookingModal('${item.id}')"
              class="gold-glow-btn px-5 py-2 text-xs font-extrabold uppercase tracking-wider rounded-full shadow-md"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Update filter buttons styling
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    if (btn.dataset.category === category) {
      btn.className = "filter-btn px-6 py-2.5 rounded-full text-xs font-semibold bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 transition-all whitespace-nowrap";
    } else {
      btn.className = "filter-btn px-6 py-2.5 rounded-full text-xs font-semibold glass-pill text-slate-300 hover:text-white transition-all whitespace-nowrap";
    }
  });
}

function filterDestinations(category) {
  renderDestinations(category);
}

function toggleWishlist(id, btn) {
  const icon = btn.querySelector("i");
  if (icon.classList.contains("fa-regular")) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid", "text-rose-500");
    showToast("Added to your Private Luxury Wishlist ✦");
  } else {
    icon.classList.remove("fa-solid", "text-rose-500");
    icon.classList.add("fa-regular");
    showToast("Removed from Wishlist");
  }
}

// --- 6. INTERACTIVE AI ITINERARY ARCHITECT ---
function runAiItineraryPlanner() {
  const destinationSelect = document.getElementById("ai-dest-select");
  const vibeSelect = document.getElementById("ai-vibe-select");
  const durationSelect = document.getElementById("ai-duration-select");
  const partySelect = document.getElementById("ai-party-select");

  const reg = REGIONS_DATABASE[currentRegionKey] || REGIONS_DATABASE.IN;
  const defaultDest = reg.destinations[0] ? reg.destinations[0].id : "amalfi";

  const destKey = destinationSelect ? destinationSelect.value : defaultDest;
  const vibe = vibeSelect ? vibeSelect.value : "Haute Romance";
  const duration = durationSelect ? durationSelect.value : "7 Days";
  const party = partySelect ? partySelect.value : "Couple VIP";

  const loader = document.getElementById("ai-loading-state");
  const results = document.getElementById("ai-result-state");
  const log = document.getElementById("ai-live-log");

  if (!loader || !results) return;

  // Show loading state and hide previous results
  loader.classList.remove("hidden");
  results.classList.add("hidden");

  // Smoothly scroll down to the loading synthesis HUD
  const loaderOffset = -100;
  const loaderY = loader.getBoundingClientRect().top + window.pageYOffset + loaderOffset;
  window.scrollTo({ top: loaderY, behavior: "smooth" });

  const logs = [
    `✦ Analyzing ${reg.name} VIP profile: ${vibe} • ${party}...`,
    `✦ Matching private aviation corridor from ${reg.departureHub.split('&')[0]}...`,
    `✦ Selecting private sanctuaries with Michelin concierge reservations...`,
    `✦ Calculating bespoke dossier in ${reg.currency} with 0% markups...`,
    `✦ Finalizing bespoke VIP travel dossier with Lumina AI engine...`
  ];

  let step = 0;
  log.textContent = logs[0];

  const interval = setInterval(() => {
    step++;
    if (step < logs.length) {
      log.textContent = logs[step];
    } else {
      clearInterval(interval);
      loader.classList.add("hidden");
      results.classList.remove("hidden");
      populateAiResult(destKey, vibe, duration, party);

      // Smoothly redirect and scroll directly to the newly generated master dossier info
      setTimeout(() => {
        const resultsEl = document.getElementById("ai-result-state");
        if (resultsEl) {
          const navOffset = -90; // Offset for sticky navbar
          const targetY = resultsEl.getBoundingClientRect().top + window.pageYOffset + navOffset;
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      }, 50);
    }
  }, 420);
}

function populateAiResult(destKey, vibe, duration, party) {
  const reg = REGIONS_DATABASE[currentRegionKey] || REGIONS_DATABASE.IN;
  const destObj = reg.destinations.find(d => d.id === destKey) || reg.destinations[0];
  const container = document.getElementById("ai-itinerary-content");
  if (!container || !destObj) return;

  container.innerHTML = `
    <!-- Header Card -->
    <div class="glass-gold-box p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[32px] mb-8 sm:mb-10 border border-amber-400/40">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 mb-6 sm:mb-8">
        <div>
          <div class="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3 flex-wrap">
            <span class="px-3 sm:px-3.5 py-1 text-[10px] sm:text-[11px] font-bold uppercase rounded-full bg-amber-400 text-slate-950 font-cinzel">
              ⚡ Generated in 2.1s
            </span>
            <span class="text-xs text-amber-300 font-semibold flex items-center gap-1.5 font-cinzel">
              <i class="fa-solid fa-sparkles"></i> 99.4% Match for ${reg.name} VIP
            </span>
            <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-400/30">
              ${reg.flag} Departs ${reg.departureHub.split('&')[0]}
            </span>
          </div>
          <h3 class="text-2xl sm:text-4xl lg:text-5xl font-bold font-cormorant text-white">
            ${destObj.title}
          </h3>
          <p class="text-xs sm:text-sm text-slate-300 mt-2 flex items-center gap-2 sm:gap-3 font-sans flex-wrap">
            <span><i class="fa-solid fa-map-pin text-amber-400 mr-1"></i> ${destObj.location}</span>
            <span class="hidden xs:inline">•</span>
            <span><i class="fa-solid fa-plane-departure text-emerald-400 mr-1"></i> ${destObj.flightTime}</span>
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 sm:gap-3.5 shrink-0">
          <button onclick="openBookingModal('${destObj.id}')" class="gold-glow-btn px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-extrabold text-xs uppercase tracking-widest shadow-xl">
            ✦ Lock In Bespoke Trip
          </button>
          <button onclick="downloadItineraryPdf('${destObj.title}')" class="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full glass-pill hover:bg-white/15 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-2">
            <i class="fa-solid fa-file-arrow-down text-amber-400"></i> Export PDF Dossier
          </button>
        </div>
      </div>

      <!-- Quick Metadata Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-amber-400/20 text-xs">
        <div>
          <span class="text-slate-400 block uppercase text-[9px] sm:text-[10px] tracking-widest font-cinzel">Party / Style</span>
          <span class="font-bold text-white text-xs sm:text-sm mt-0.5 block">${party} • ${vibe}</span>
        </div>
        <div>
          <span class="text-slate-400 block uppercase text-[9px] sm:text-[10px] tracking-widest font-cinzel">Duration</span>
          <span class="font-bold text-white text-xs sm:text-sm mt-0.5 block">${duration} Bespoke</span>
        </div>
        <div>
          <span class="text-slate-400 block uppercase text-[9px] sm:text-[10px] tracking-widest font-cinzel">Local Concierge</span>
          <span class="font-bold text-emerald-400 text-xs sm:text-sm mt-0.5 block">${reg.name} Desk (${reg.currency})</span>
        </div>
        <div>
          <span class="text-slate-400 block uppercase text-[9px] sm:text-[10px] tracking-widest font-cinzel">Dedicated Curator</span>
          <span class="font-bold text-amber-300 text-xs sm:text-sm mt-0.5 block">Lumina AI + Senior Lead</span>
        </div>
      </div>
    </div>

    <!-- Day By Day Timeline -->
    <div class="space-y-6 sm:space-y-8">
      <h4 class="text-lg sm:text-xl font-bold text-white uppercase tracking-widest flex items-center gap-2 sm:gap-2.5 font-cinzel">
        <i class="fa-solid fa-compass text-amber-400"></i> Day-by-Day Master Itinerary (${reg.flag} ${reg.name} Edition)
      </h4>

      <div class="relative border-l-2 border-amber-400/30 ml-2 sm:ml-4 pl-4 sm:pl-8 space-y-6 sm:space-y-8">
        
        <!-- Day 1 -->
        <div class="relative group">
          <div class="absolute -left-[23px] sm:-left-[41px] top-1.5 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-amber-400 ring-4 ring-[#06080D] border-2 border-white shadow-[0_0_10px_rgba(229,195,120,0.8)]"></div>
          <div class="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-[24px] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300">
            <div class="flex items-center justify-between gap-2 mb-3 sm:mb-4">
              <span class="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 sm:px-3.5 py-1 rounded-full border border-amber-400/20 font-cinzel">
                DAY 1
              </span>
              <span class="text-[11px] sm:text-xs text-slate-400 font-sans">
                <i class="fa-solid fa-plane text-amber-400 mr-1"></i> Private Departure via ${reg.departureHub.split('&')[0]}
              </span>
            </div>
            <h5 class="text-xl sm:text-2xl font-bold font-cormorant text-white mb-3 sm:mb-5">Private Aviation Transfer & Sanctuary Arrival</h5>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5 text-xs font-sans">
              <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span class="text-amber-300 font-bold block mb-1.5 flex items-center gap-1.5 font-cinzel"><i class="fa-solid fa-sun text-amber-400"></i> MORNING</span>
                <p class="text-slate-300 leading-relaxed text-xs">Private VIP lounge reception and direct tarmac transfer onto your chartered jet from ${reg.departureHub.split('&')[0]}.</p>
              </div>
              <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span class="text-cyan-300 font-bold block mb-1.5 flex items-center gap-1.5 font-cinzel"><i class="fa-solid fa-cloud-sun text-cyan-400"></i> AFTERNOON</span>
                <p class="text-slate-300 leading-relaxed text-xs">Landing at private helipad. Champagne check-in at ${destObj.title} with dedicated majordome unpacking.</p>
              </div>
              <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span class="text-purple-300 font-bold block mb-1.5 flex items-center gap-1.5 font-cinzel"><i class="fa-solid fa-moon text-purple-400"></i> EVENING & GALA</span>
                <p class="text-slate-300 leading-relaxed text-xs">Welcome 7-course tasting menu paired with grand cru reserves curated by your master private sommelier.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Day 2 -->
        <div class="relative group">
          <div class="absolute -left-[23px] sm:-left-[41px] top-1.5 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-amber-400 ring-4 ring-[#06080D] border-2 border-white shadow-[0_0_10px_rgba(229,195,120,0.8)]"></div>
          <div class="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-[24px] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300">
            <div class="flex items-center justify-between gap-2 mb-3 sm:mb-4">
              <span class="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 sm:px-3.5 py-1 rounded-full border border-amber-400/20 font-cinzel">
                DAY 2
              </span>
              <span class="text-[11px] sm:text-xs text-slate-400 font-sans">
                <i class="fa-solid fa-sparkles text-amber-400 mr-1"></i> Bespoke Signature Experience
              </span>
            </div>
            <h5 class="text-xl sm:text-2xl font-bold font-cormorant text-white mb-3 sm:mb-5">Exclusive Curated Expedition & Private Yacht / Heli</h5>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5 text-xs font-sans">
              <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span class="text-amber-300 font-bold block mb-1.5 flex items-center gap-1.5 font-cinzel"><i class="fa-solid fa-sun text-amber-400"></i> MORNING</span>
                <p class="text-slate-300 leading-relaxed text-xs">Private helicopter ascent or private yacht navigation tailored to ${destObj.highlights[0]}.</p>
              </div>
              <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span class="text-cyan-300 font-bold block mb-1.5 flex items-center gap-1.5 font-cinzel"><i class="fa-solid fa-cloud-sun text-cyan-400"></i> AFTERNOON</span>
                <p class="text-slate-300 leading-relaxed text-xs">Exclusive access to off-market sanctuaries and bespoke masterclasses unavailable to general public.</p>
              </div>
              <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span class="text-purple-300 font-bold block mb-1.5 flex items-center gap-1.5 font-cinzel"><i class="fa-solid fa-moon text-purple-400"></i> EVENING & GALA</span>
                <p class="text-slate-300 leading-relaxed text-xs">Starlit candlelit private dinner with personalized acoustic performance.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Day 3 -->
        <div class="relative group">
          <div class="absolute -left-[23px] sm:-left-[41px] top-1.5 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-amber-400 ring-4 ring-[#06080D] border-2 border-white shadow-[0_0_10px_rgba(229,195,120,0.8)]"></div>
          <div class="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-[24px] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300">
            <div class="flex items-center justify-between gap-2 mb-3 sm:mb-4">
              <span class="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 sm:px-3.5 py-1 rounded-full border border-amber-400/20 font-cinzel">
                DAY 3
              </span>
              <span class="text-[11px] sm:text-xs text-slate-400 font-sans">
                <i class="fa-solid fa-spa text-amber-400 mr-1"></i> Regeneration & Departure Return
              </span>
            </div>
            <h5 class="text-xl sm:text-2xl font-bold font-cormorant text-white mb-3 sm:mb-5">Thermal Wellness Recovery & Executive Return</h5>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5 text-xs font-sans">
              <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span class="text-amber-300 font-bold block mb-1.5 flex items-center gap-1.5 font-cinzel"><i class="fa-solid fa-sun text-amber-400"></i> MORNING</span>
                <p class="text-slate-300 leading-relaxed text-xs">Bespoke thermal hydrotherapy, deep tissue restoration, and private sound bath.</p>
              </div>
              <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span class="text-cyan-300 font-bold block mb-1.5 flex items-center gap-1.5 font-cinzel"><i class="fa-solid fa-cloud-sun text-cyan-400"></i> AFTERNOON</span>
                <p class="text-slate-300 leading-relaxed text-xs">Curated private packing service with souvenir authentication certificate.</p>
              </div>
              <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <span class="text-purple-300 font-bold block mb-1.5 flex items-center gap-1.5 font-cinzel"><i class="fa-solid fa-moon text-purple-400"></i> EVENING & GALA</span>
                <p class="text-slate-300 leading-relaxed text-xs">Private helicopter return to executive jet lounge for flight back to ${reg.departureHub.split('&')[0]}.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  container.className = "dossier-animate";
}

function downloadItineraryPdf(title) {
  const reg = REGIONS_DATABASE[currentRegionKey] || REGIONS_DATABASE.IN;
  const dossierText = `LUMINA VOYAGE VIP DOSSIER\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nSanctuary: ${title}\nRegion: ${reg.name} Edition (${reg.currency})\nDeparture Hub: ${reg.departureHub}\nCurated by: Lumina AI & VIP Concierge (${reg.conciergePhone})\nStatus: Certified Authentic & Confidential`;
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(dossierText).then(() => {
      showToast(`✦ Master Dossier for "${title}" copied to clipboard & prepared for export!`);
    }).catch(() => {
      showToast(`✦ Master Dossier for "${title}" prepared for VIP export.`);
    });
  } else {
    showToast(`✦ Master Dossier for "${title}" prepared for VIP export.`);
  }
}

// --- 7. INTERACTIVE TRIP COST ESTIMATOR ---
function updateCalculator() {
  const daysSlider = document.getElementById("calc-days");
  const guestsSlider = document.getElementById("calc-guests");
  const tierSelect = document.getElementById("calc-tier");

  if (!daysSlider || !guestsSlider) return;

  const days = parseInt(daysSlider.value, 10);
  const guests = parseInt(guestsSlider.value, 10);
  const tier = tierSelect ? tierSelect.value : "bespoke";

  let baseRatePerGuestDay = 1200; // Bespoke
  if (tier === "signature") baseRatePerGuestDay = 850;
  if (tier === "royal") baseRatePerGuestDay = 2400;

  const totalUsd = days * guests * baseRatePerGuestDay;
  const depositUsd = Math.round(totalUsd * 0.15);

  document.getElementById("calc-days-val").textContent = `${days} Days`;
  document.getElementById("calc-guests-val").textContent = `${guests} Guests`;
  document.getElementById("calc-total-price").textContent = formatCurrency(totalUsd);
  document.getElementById("calc-deposit-price").textContent = formatCurrency(depositUsd);
}

// --- 8. LIVE BOOKING NOTIFICATIONS ENGINE ---
const RECENT_BOOKINGS = [
  { name: "Julian & Clara K.", from: "London, UK", dest: "Villa TreVille, Amalfi", time: "3 mins ago" },
  { name: "Rohit & Ananya S.", from: "Mumbai, India", dest: "Wildflower Hall, Shimla", time: "5 mins ago" },
  { name: "Sheikh Mansoor Al-Q.", from: "Dubai, UAE", dest: "Cheval Blanc, Maldives", time: "7 mins ago" },
  { name: "Dr. Ethan Vance", from: "San Francisco, US", dest: "Amangiri Resort, Utah", time: "12 mins ago" },
  { name: "Lord Sterling H.", from: "Mayfair, UK", dest: "Belmond Splendido, Portofino", time: "18 mins ago" },
  { name: "Lady Genevieve M.", from: "Monaco", dest: "Aman-i-Khás, Rajasthan", time: "24 mins ago" }
];

let bookingTickerIndex = 0;

function showNextBookingToast() {
  const toast = document.getElementById("live-booking-toast");
  if (!toast) return;

  const data = RECENT_BOOKINGS[bookingTickerIndex % RECENT_BOOKINGS.length];
  bookingTickerIndex++;

  toast.innerHTML = `
    <div class="flex items-center gap-3.5">
      <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold text-sm shadow-md shrink-0">
        ${data.name.charAt(0)}
      </div>
      <div class="flex-1 min-w-0">
        <div class="text-[10px] text-amber-300 font-semibold flex items-center gap-1.5 font-cinzel">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Just Confirmed • ${data.time}
        </div>
        <div class="text-xs font-bold text-white truncate font-sans">${data.name} (${data.from})</div>
        <div class="text-[11px] text-slate-300 truncate font-sans">Reserved ${data.dest}</div>
      </div>
      <button onclick="document.getElementById('live-booking-toast').classList.add('translate-y-28', 'opacity-0')" class="text-slate-400 hover:text-white text-xs p-1">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `;

  toast.classList.remove("translate-y-28", "opacity-0");

  setTimeout(() => {
    toast.classList.add("translate-y-28", "opacity-0");
  }, 6500);
}

// --- 9. AMBIENT SOUNDSCAPE SYNTHESIZER ---
let audioCtx = null;
let ambientGain = null;
let isPlayingAmbient = false;
let noiseNode = null;

function toggleAmbientAudio() {
  const btnText = document.getElementById("audio-btn-text");
  const visualizer = document.getElementById("audio-wave-visualizer");
  
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }

  if (!isPlayingAmbient) {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    startGentleOceanWaves();
    isPlayingAmbient = true;
    if (btnText) btnText.textContent = "Ambience: ON";
    if (visualizer) {
      visualizer.querySelectorAll(".sound-bar").forEach(bar => bar.classList.remove("opacity-40"));
    }
    showToast("Ambient Alpine & Ocean Breeze soundscape enabled 🎧");
  } else {
    stopGentleOceanWaves();
    isPlayingAmbient = false;
    if (btnText) btnText.textContent = "Ambience: OFF";
    if (visualizer) {
      visualizer.querySelectorAll(".sound-bar").forEach(bar => bar.classList.add("opacity-40"));
    }
    showToast("Ambient soundscape muted");
  }
}

function startGentleOceanWaves() {
  if (!audioCtx) return;
  
  ambientGain = audioCtx.createGain();
  ambientGain.gain.setValueAtTime(0.08, audioCtx.currentTime);
  ambientGain.connect(audioCtx.destination);

  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
    b6 = white * 0.115926;
  }

  noiseNode = audioCtx.createBufferSource();
  noiseNode.buffer = noiseBuffer;
  noiseNode.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(320, audioCtx.currentTime);

  noiseNode.connect(filter);
  filter.connect(ambientGain);
  noiseNode.start();
}

function stopGentleOceanWaves() {
  if (noiseNode) {
    try { noiseNode.stop(); } catch(e){}
  }
}

// --- 10. QUICK VIEW & BOOKING MODALS ---
function openQuickView(destId) {
  const reg = REGIONS_DATABASE[currentRegionKey] || REGIONS_DATABASE.IN;
  const item = reg.destinations.find(d => d.id === destId) || reg.destinations[0];
  const modal = document.getElementById("quick-view-modal");
  const content = document.getElementById("quick-view-content");
  if (!modal || !content || !item) return;

  content.innerHTML = `
    <div class="relative h-72 sm:h-80 overflow-hidden rounded-2xl mb-6">
      <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-[#06080D] via-transparent to-black/40"></div>
      <div class="absolute top-4 left-4 flex gap-2">
        <span class="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 font-cinzel">${item.tag}</span>
        <span class="px-3.5 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md">${item.coordinates}</span>
      </div>
      <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div>
          <h3 class="text-3xl font-bold font-cormorant text-white">${item.title}</h3>
          <p class="text-xs text-amber-300 font-sans"><i class="fa-solid fa-location-dot mr-1"></i> ${item.location} • <span class="text-emerald-400 font-medium">${reg.flag} ${item.flightTime || 'Direct Jet'}</span></p>
        </div>
        <div class="text-right">
          <span class="text-[10px] text-slate-300 uppercase tracking-wider block font-cinzel">Pricing (${reg.currency})</span>
          <span class="text-2xl font-bold text-amber-300 font-cormorant">${formatCurrency(item.priceUsd)}</span>
        </div>
      </div>
    </div>

    <div class="space-y-6 text-sm font-sans">
      <div>
        <h4 class="font-bold text-white uppercase text-xs tracking-wider mb-2 font-cinzel">Sanctuary Overview</h4>
        <p class="text-slate-300 leading-relaxed text-xs sm:text-sm">${item.description}</p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <span class="text-[10px] text-slate-400 block uppercase font-cinzel">Best Season</span>
          <span class="text-xs font-semibold text-white mt-0.5 block">${item.bestSeason}</span>
        </div>
        <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <span class="text-[10px] text-slate-400 block uppercase font-cinzel">Recommended Stay</span>
          <span class="text-xs font-semibold text-white mt-0.5 block">${item.duration}</span>
        </div>
        <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <span class="text-[10px] text-slate-400 block uppercase font-cinzel">VIP Departure Route</span>
          <span class="text-xs font-semibold text-amber-300 mt-0.5 block">${reg.flag} ${reg.departureHub.split('&')[0]}</span>
        </div>
      </div>

      <div>
        <h4 class="font-bold text-white uppercase text-xs tracking-wider mb-3 font-cinzel">VIP Curated Inclusions</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${item.highlights.map(h => `
            <div class="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] text-xs text-slate-200">
              <i class="fa-solid fa-circle-check text-amber-400"></i> ${h}
            </div>
          `).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
        <button onclick="closeQuickView()" class="px-5 py-2.5 rounded-full glass-pill hover:bg-white/15 text-white text-xs font-semibold">
          Close
        </button>
        <button onclick="closeQuickView(); openBookingModal('${item.id}')" class="gold-glow-btn px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
          ✦ Inquire & Reserve Sanctuary
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeQuickView() {
  const modal = document.getElementById("quick-view-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function openBookingModal(destId) {
  const reg = REGIONS_DATABASE[currentRegionKey] || REGIONS_DATABASE.IN;
  const item = reg.destinations.find(d => d.id === destId) || reg.destinations[0];
  const modal = document.getElementById("booking-modal");
  const destName = document.getElementById("booking-dest-name");
  const destPrice = document.getElementById("booking-dest-price");

  if (!modal || !item) return;

  if (destName) destName.textContent = item.title;
  if (destPrice) destPrice.textContent = `${formatCurrency(item.priceUsd)} / stay`;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeBookingModal() {
  const modal = document.getElementById("booking-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function submitBookingForm(e) {
  e.preventDefault();
  const form = e.target;
  const nameInput = form.querySelector('input[name="fullname"]');
  const emailInput = form.querySelector('input[name="email"]');
  const phoneInput = form.querySelector('input[name="phone"]');

  const name = nameInput ? nameInput.value.trim() : "Distinguished Traveler";
  const email = emailInput ? emailInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";

  // Strict Phone Validation (Only digits, optional +, min 7 digits)
  const phoneDigitsOnly = phone.replace(/\D/g, '');
  if (!phone || phoneDigitsOnly.length < 7 || phoneDigitsOnly.length > 16) {
    showToast("⚠️ Please enter a valid phone number (numbers only, 7-15 digits)");
    if (phoneInput) {
      phoneInput.focus();
      phoneInput.classList.add("ring-2", "ring-rose-500");
      setTimeout(() => phoneInput.classList.remove("ring-2", "ring-rose-500"), 3000);
    }
    return;
  }

  // Strict Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showToast("⚠️ Please enter a valid email address");
    if (emailInput) {
      emailInput.focus();
      emailInput.classList.add("ring-2", "ring-rose-500");
      setTimeout(() => emailInput.classList.remove("ring-2", "ring-rose-500"), 3000);
    }
    return;
  }

  // Name Validation
  if (!name || name.length < 2) {
    showToast("⚠️ Please enter your full name & title");
    if (nameInput) nameInput.focus();
    return;
  }

  const reg = REGIONS_DATABASE[currentRegionKey] || REGIONS_DATABASE.IN;
  
  const modalBody = document.getElementById("booking-modal-body");
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="text-center py-8 space-y-5">
        <div class="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-3xl flex items-center justify-center mx-auto animate-bounce">
          <i class="fa-solid fa-check"></i>
        </div>
        <h3 class="text-3xl font-bold font-cormorant text-white">Bespoke Reservation Initiated</h3>
        <p class="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-sans">
          Thank you, <strong class="text-amber-300">${name}</strong>. Your dossier has been routed to the <strong class="text-emerald-400">${reg.name} Elite Desk</strong> for WhatsApp dispatch to <span class="text-emerald-400 font-mono font-semibold">${phone}</span>. Your Senior Director will contact you within <span class="text-emerald-400 font-semibold">12 minutes</span>.
        </p>
        <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 inline-block font-cinzel">
          ✦ Priority VIP Guarantee: 100% Refundable Deposit • Zero Flight Markups
        </div>
        <div class="pt-4">
          <button onclick="closeBookingModal(); location.reload();" class="gold-glow-btn px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider">
            Return to Lumina Voyage
          </button>
        </div>
      </div>
    `;
  }
  showToast("Reservation Request received! VIP Concierge dispatched ✦");
}

// --- 11. TOAST NOTIFICATION UTILITY ---
function showToast(message) {
  let toastContainer = document.getElementById("global-toast");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "global-toast";
    toastContainer.className = "fixed bottom-6 right-6 z-50 transition-all duration-300 transform translate-y-28 opacity-0 pointer-events-none";
    document.body.appendChild(toastContainer);
  }

  toastContainer.innerHTML = `
    <div class="glass-gold-box px-5 py-3 rounded-2xl shadow-2xl border border-amber-400/40 text-white text-xs font-semibold flex items-center gap-3 backdrop-blur-xl pointer-events-auto">
      <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
      ${message}
    </div>
  `;

  toastContainer.classList.remove("translate-y-28", "opacity-0");

  setTimeout(() => {
    toastContainer.classList.add("translate-y-28", "opacity-0");
  }, 4500);
}

// --- 12. FAQ ACCORDION LOGIC ---
function toggleFaq(index) {
  const item = document.getElementById(`faq-item-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (!item || !icon) return;

  const isHidden = item.classList.contains("hidden");

  document.querySelectorAll('[id^="faq-item-"]').forEach(el => el.classList.add("hidden"));
  document.querySelectorAll('[id^="faq-icon-"]').forEach(el => el.classList.remove("rotate-180"));

  if (isHidden) {
    item.classList.remove("hidden");
    icon.classList.add("rotate-180");
  }
}

// --- 13. NEWSLETTER VIP CLUB SUBSCRIPTION ---
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  if (input && input.value) {
    const reg = REGIONS_DATABASE[currentRegionKey] || REGIONS_DATABASE.IN;
    showToast(`Welcome to Lumina Private Club! ${formatCurrency(500)} VIP Credit applied to ${input.value}`);
    input.value = "";
  }
}

function closeMobileNav() {
  const mobileNav = document.getElementById("mobile-nav");
  const icon = document.getElementById("mobile-menu-icon");
  if (mobileNav) mobileNav.classList.add("hidden");
  if (icon) {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}

// --- 14. INITIALIZATION ON DOM READY ---
document.addEventListener("DOMContentLoaded", () => {
  // Set default initial region to India
  setCountryEdition("IN");

  // Setup live calculators
  const daysSlider = document.getElementById("calc-days");
  const guestsSlider = document.getElementById("calc-guests");
  const tierSelect = document.getElementById("calc-tier");

  if (daysSlider) daysSlider.addEventListener("input", updateCalculator);
  if (guestsSlider) guestsSlider.addEventListener("input", updateCalculator);
  if (tierSelect) tierSelect.addEventListener("change", updateCalculator);
  updateCalculator();

  // Start realistic booking toast ticker
  setTimeout(showNextBookingToast, 4000);
  setInterval(showNextBookingToast, 18000);

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      const isHidden = mobileNav.classList.toggle("hidden");
      if (mobileMenuIcon) {
        if (isHidden) {
          mobileMenuIcon.classList.remove("fa-xmark");
          mobileMenuIcon.classList.add("fa-bars");
        } else {
          mobileMenuIcon.classList.remove("fa-bars");
          mobileMenuIcon.classList.add("fa-xmark");
        }
      }
    });
  }

  // Real-time phone number input sanitizer (Strictly numbers only)
  document.addEventListener("input", (e) => {
    if (e.target && (e.target.type === "tel" || e.target.name === "phone" || e.target.id === "booking-phone-input")) {
      e.target.value = e.target.value.replace(/[^0-9+\s\-()]/g, '');
    }
  });
});
