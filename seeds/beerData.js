const data = [
  {
    image: '../images/moretti.jpg',
    title: 'Birra Moretti Zero',
    brand: 'Birra Moretti',
    abv: '0',
    calories: '20',
    type: 'Lager',
    ingredients: 'Water, Barley Malt, Hop, Hop Extract, Natural Flavouring',
    country: 'Italy',
    volume: '330',
    description: 'Quality beer, authentic Italian taste.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "Love me a Moretti I do. Glad they do a 0% one now"
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "Brilliant beer. No complaints. I promise."
      }
    ],
    rating: {
      overall: 5,
      taste: 5,
      value: 4,
      realness: 5
    },
    upvotes: 5,
    staffPicks: true
  },
  {
    image: '../../images/corona.jpg',
    title: 'Corona Cero Alcohol Free',
    brand: 'Corona',
    abv: '0',
    calories: '56',
    type: 'Lager',
    ingredients: 'Water, Barley Malt, Maize, Sugar, Hops, Natural Flavours',
    country: 'Belgium',
    volume: '330',
    description: 'Quench your cerveza cravings with a crip Corona Cero.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "Perfect for a warm summer sesh."
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',      
        body: "Light and refreshing. Lovely."
      }
    ],
    rating: {
      overall: 5,
      taste: 5,
      value: 5,
      realness: 5
    },
    upvotes: 8,
    staffPicks: false
  },
  {
    image: '../../images/doombar_zero.jpg',
    title: 'Doom Bar Zero Amber Ale',
    brand: 'Doom Bar',
    abv: '0',
    calories: '13',
    type: 'Ale',
    ingredients:
      'Water, Malted Barley, Sugar, Oats, Hops and Hop Extracts, Antioxidant: Ascorbic Acid, Natural Flavours',
    country: 'UK',
    volume: '500',
    description: 'Perfectly balanced beer with a subtle taste',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "Shocking. Never again"
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "I am a nice person but can't think of something positive to say."
      }
    ],
    rating: {
      overall: 2,
      taste: 2,
      value: 2,
      realness: 2
    },
    upvotes: 9,
    staffPicks: false
  },
  {
    image: '../../images/erdinger.jpg',
    title: 'Erdinger Alkoholfrei Grapefruit',
    brand: 'Erdinger',
    abv: '0.3',
    calories: '25',
    type: 'Wheat beer',
    ingredients:
      '50% Erdinger Alkoholfrei (Water, Wheat Malt, Barley Malt, Hops, Yeast, Carbon Dioxide), 50% Refreshment Drink with Grapefruit',
    country: 'Germany',
    volume: '330',
    description: 'Freshingly good after a light jog on a warm summer\'s day.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "A New Gen Beer."
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',      
        body: "Once tried it after Berlin half marathon, it was nice but also free..."
      }
    ],
    rating: {
      overall: 3,
      taste: 3,
      value: 3,
      realness: 3
    },
    upvotes: 15,
    staffPicks: true
  },
  {
    image: '../../images/heineken.jpg',
    title: 'Heineken 0.0 Alcohol Free Lager',
    brand: 'Heineken',
    abv: '0.05',
    calories: '21',
    type: 'Lager',
    ingredients: 'Water, Malted Barley, Hop Extract, Natural Flavourings',
    country: 'Scotland',
    volume: '330',
        description: 'Fruity and refreshing malt notes. Incredibly light and refreshing.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "it is definitely better than they used to make it years ago"
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "Fruiiiiiiiitty and freeeeeeshhh."
      }
    ],
    rating: {
      overall: 3,
      taste: 3,
      value: 3,
      realness: 4
    },
    upvotes: 3,
    staffPicks: false
  },
  {
    image: '../../images/koppaberg_pear.jpg',
    title: 'Kopparberg Alcohol Free Pear Cider',
    brand: 'Kopparberg',
    abv: '0.05',
    calories: '42',
    type: 'Cider',
    ingredients:
      'Carbonated Water, Fermented Pears, Pear Juice, Sugar, Acidifier (Citric Acid)',
    country: 'Sweden',
    volume: '500',
    description: 'Sweet and revitalising, refreshingly pear.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "I drink at least two a day"
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "I prefer the strawberry"
      }
    ],
    rating: {
      overall: 3,
      taste: 5,
      value: 3,
      realness: 3
    },
    upvotes: 9,
    staffPicks: false
  },
  {
    image: '../../images/kopparberg_strawberry_lime.jpg',
    title: 'Kopparberg Cider Plus Strawberry & Lime Alcohol Free',
    brand: 'Kopparberg',
    abv: '0.05',
    calories: '41',
    type: 'Cider',
    ingredients:
      'Carbonated Water, Fermented Apples, Juice (Apple, Strawberry, Elderberry & Lime), Sugar',
    country: 'Sweden',
    volume: '500',
    description: 'A delicious mix of raspberry and blackcurrant',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "Could do with more strawberry"
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',      
        body: "Tastes like fizzy pop"
      }
    ],
    rating: {
      overall: 4,
      taste: 3,
      value: 3,
      realness: 3
    },
    upvotes: 10,
    staffPicks: false
  },
  {
    image: '../../images/kopparberg_mixed_fruit.jpg',
    title: 'Kopparberg Mixed Fruit Alcohol Free',
    brand: 'Kopparberg',
    abv: '0.05',
    calories: '38',
    type: 'Cider',
    ingredients:
      'Carbonated Water, Fermented Apples, Juice (Apple, Blackcurrant, Elderberry, Raspberry), Sugar, Acidifier (Citric Acid), Flavouring, Preservative (Potassium Sorbate)',
    country: 'Sweden',
    volume: '500',
    description: 'A delicious mix of raspberry and blackcurrant',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',      
        body: "Quite sweet but it's nice"
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "Lovely lovely lovely"
      }
    ],
    rating: {
      overall: 3,
      taste: 3,
      value: 3,
      realness: 3
    },
    upvotes: 4,
    staffPicks: false
  },
  {
    image: '../../images/lucky_saint.jpg',
    title: 'Lucky Saint 0.5%',
    brand: 'Lucky Saint',
    abv: '0.5',
    calories: '16',
    type: 'Beer',
    ingredients: 'Water, Barley, Yeast, Hops',
    country: 'Germany',
    volume: '330',
    description: 'Not for the Saint-Hearted. Bavarianly biscuity taste.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',      
        body: "This is one of my faves. Gets me a bit tipsy!"
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "One of my go to brands now."
      }
    ],
    rating: {
      overall: 5,
      taste: 5,
      value: 4,
      realness: 5
    },
    upvotes: 4,
    staffPicks: true
  },
  {
    image: '../../images/peroni.jpg',
    title: 'Peroni Nastro Azzurro 0.0%',
    brand: 'Peroni',
    abv: '0.05',
    calories: '23',
    type: 'Beer',
    ingredients: 'Water, Barley Malt, Italian Maize, Hops, Natural Flavours',
    country: 'Italy',
    volume: '330',
    description: 'TEXT',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "i love this beer!!"
      }
    ],
    rating: {
      overall: 4,
      taste: 5,
      value: 3,
      realness: 5
    },
    upvotes: 3,
    staffPicks: false
  },
  {
    image: '../../images/san_miguel.jpg',
    title: 'San Miguel 0.0%',
    brand: 'San Miguel',
    abv: '0',
    calories: '24',
    type: 'Beer',
    ingredients: 'Water, Barley Malt, Hops, Flavourings',
    country: 'Spain',
    volume: '330',
    description: 'A refreshingly crisp choice, with tantalising hops.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "i love this beer!!"
      }
    ],
    rating: {
      overall: 4,
      taste: 5,
      value: 3,
      realness: 5
    },
    upvotes: 2,
    staffPicks: true
  },
  {
    image: '../../images/stella.jpg',
    title: 'Stella Artois Premium Alcohol Free Lager',
    brand: 'Stella Artois',
    abv: '0',
    calories: '18',
    type: 'Lager',
    ingredients: 'Water, Malted Barley, Hops, Sugar, Natural Flavours',
    country: 'Belgium',
    volume: '330',
    description: 'Hoppy, refreshing and no where',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "Nice nice nice"
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "Not a huge fan"
      }
    ],
    rating: {
      overall: 3,
      taste: 4,
      value: 2,
      realness: 4
    },
    upvotes: 2,
    staffPicks: false
  },
  {
    image: '../../images/thatchers_zero.jpg',
    title: 'Thatchers Zero Somerset Cider',
    brand: 'Thatchers',
    abv: '0.05',
    calories: '47',
    type: 'Cider',
    ingredients: 'Cider apples',
    country: 'UK',
    volume: '500',
    description: 'Medium-dry taste, bursting with appley goodness.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "Lovely on a summer's evening!"
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "Chillllllllll"
      }
    ],
    rating: {
      overall: 4,
      taste: 3,
      value: 4,
      realness: 4
    },
    upvotes: 3,
    staffPicks: false
  },
  {
    image: '../../images/lazer_crush.jpg',
    title: 'Lazer Crush - Alcohol Free IPA',
    brand: 'Beavertown',
    abv: '0.03',
    calories: '83',
    type: 'Ale',
    ingredients: 'Water, Malted Barley, Hops, Yeast',
    country: 'UK',
    volume: '330',
    description: 'Strong taste with refreshing and gentle with hints of fruit and zero alcohol.',
    comments: [],
    rating: {
      overall: 4,
      taste: 3,
      value: 4,
      realness: 4
    },
    upvotes: 1,
    staffPicks: true
  },
  {
    image: '../../images/m_s_czech_lager.jpg',
    title: 'Marks and Spencer Low Alcohol Czech Lager',
    brand: 'Marks and Spencer',
    abv: '0.05',
    calories: '83',
    type: 'Lager',
    ingredients: 'Water, Malted Barley, Glucose-Fructose Syrup, Yeast, Hops',
    country: 'Czech Republic',
    volume: '500',
    description: 'Crisp and refreshing taste pairs well with dishes such as herbed chicken or calamari.',
    comments: [],
    rating: {
      overall: 4,
      taste: 3,
      value: 4,
      realness: 4
    },
    upvotes: 2,
    staffPicks: false
  },
  {
    image: '../../images/m_s_pale_ale.jpg',
    title: 'Marks and Spencer Pale Ale',
    brand: 'Marks and Spencer x Adnams',
    abv: '0.05',
    calories: '18',
    type: 'Ale',
    ingredients: 'Water, Malted Barley, Hops, Yeast',
    country: 'UK',
    volume: '330',
    description: 'M&S have teamed up with Adnams to offer this refreshing low alcohol pale ale',
    comments: [],
    rating: {
      overall: 4,
      taste: 3,
      value: 4,
      realness: 4
    },
    upvotes: 2,
    staffPicks: false
  },
  {
    image: '../../images/old_mout_cider.jpg',
    title: 'Pineapple & Raspberry Alcohol Free Fruit Cider',
    brand: 'Old Mout',
    abv: '0',
    calories: '25',
    type: 'Cider',
    ingredients: 'Water, Apple Juice (from Concentrate), Sugar, Fruit Juices from Concentrate: Pineapple Juice, Raspberry Juice',
    country: 'EU',
    volume: '500',
    description: '"A light and invigorating blend of natural sweetness from pineapple and the tanginess of raspberry.',
    comments: [],
    rating: {
      overall: 4,
      taste: 3,
      value: 4,
      realness: 4
    },
    upvotes: 2,
    staffPicks: false
  },
  {
    image: '../../images/peach_and_lime_cider.jpg',
    title: 'Sainsbury\'s Peach and Lime Cider',
    brand: 'Sainsbury\'s',
    abv: '0.5',
    calories: '35',
    type: 'Cider',
    ingredients: 'Water, Cider, Apple Juice Concentrate, Glucose- Fructose Syrup',
    country: 'UK',
    volume: '500',
    description: '"A harmonious blend of apple, ripe peach and zesty lime, creating a satisfyingly crisp and refreshing beverage.',
    comments: [],
    rating: {
      overall: 4,
      taste: 3,
      value: 4,
      realness: 4
    },
    upvotes: 2,
    staffPicks: false
  },
  {
    image: '../images/big_drop_pine_trail.jpg',
    title: 'Big Drop Pine Trail',
    brand: 'Big Drop',
    abv: '0.5',
    calories: '17',
    type: 'Ale',
    ingredients: 'Water, Barley, Wheat, Lactose (milk), Hops, Yeast',
    country: 'UK',
    volume: '330',
    description: 'Bitter but balanced taste, with a limey citrus finish.',
    comments: [
    ],
    rating: {
      overall: 4,
      taste: 5,
      value: 3,
      realness: 5
    },
    upvotes: 1,
    staffPicks: true
  },
  {
    image: '../images/english_apple_cider.jpg',
    title: 'Sainsbury\'s Medium Dry Apple Cider',
    brand: 'Sainsbury\'s',
    abv: '0.9',
    calories: '30',
    type: 'Cider',
    ingredients: 'Water, Cider, Bittersweet Apple Juice Concentrate, Sugar, Acidity Regulator: Malic Acid, Carbon Dioxide, Preservative: Potassium Metabisulphite',
    country: 'UK',
    volume: '500',
    description: 'Mature and oakly flavour, filled with ripe apple aromas.',
    comments: [
    ],
    rating: {
      overall: 4,
      taste: 5,
      value: 3,
      realness: 5
    },
    upvotes: 1,
    staffPicks: false
  },
  {
    image: '../images/freestar.jpg',
    title: 'Freestar Alcohol Free',
    brand: 'Freestar',
    abv: '0.3',
    calories: '30',
    type: 'Lager',
    ingredients: 'Water, Barley, Hops, Yeast',
    country: 'UK',
    volume: '500',
    description: 'Refreshing and delicious taste, great all year round.',
    comments: [
    ],
    rating: {
      overall: 4,
      taste: 5,
      value: 3,
      realness: 5
    },
    upvotes: 1,
    staffPicks: false
  },
  {
    image: '../images/guinness.jpg',
    title: 'Guinness Alcohol Free',
    brand: 'Guinness',
    abv: '0',
    calories: '17',
    type: 'Lager',
    ingredients: 'Water, Malted Barley, Roasted Barley, Fructose, Hops, Yeast, Natural Flavourings',
    country: 'Ireland',
    volume: '500',
    description: 'Smooth and roasted taste with hints of coffee and chocolate.',
    comments: [
    ],
    rating: {
      overall: 4,
      taste: 5,
      value: 3,
      realness: 5
    },
    upvotes: 1,
    staffPicks: false
  },
  {
    image: '../images/hazy_jane.jpg',
    title: 'Brewdog Hazy Jane',
    brand: 'Brewdog',
    abv: '0.5',
    calories: '46',
    type: 'Ale',
    ingredients: 'Water, Lactose (Milk), Hops, Malted Barley, Yeast, Malted Wheat, Malted Oats, Lactic Acid',
    country: 'UK',
    volume: '330',
    description: 'Light and full-bodied, with hints of fruitness.',
    comments: [
    ],
    rating: {
      overall: 4,
      taste: 5,
      value: 3,
      realness: 5
    },
    upvotes: 1,
    staffPicks: false
  },
  {
    image: '../images/infinite.jpg',
    title: 'Infinite Pale',
    brand: 'Infinite',
    abv: '0.5',
    calories: '11',
    type: 'Ale',
    ingredients: 'Malted Barley, Wheat, Oats, Hops, Yeast, Hops: Citra, Amarillo, Centennial',
    country: 'UK',
    volume: '330',
    description: 'Refreshingly hoppy with a bold citrusy taste.',
    comments: [
    ],
    rating: {
      overall: 4,
      taste: 5,
      value: 3,
      realness: 5
    },
    upvotes: 1,
    staffPicks: false
  },
  {
    image: '../images/old_specked_hen.jpg',
    title: 'Old Speckled Hen Low Alcohol',
    brand: 'Old Speckled Hen',
    abv: '0.5',
    calories: '22',
    type: 'Ale',
    ingredients: 'Water, Malted Barley Extract, Malted Barley, Natural Hop Flavouring, Hops, Colouring: E150c',
    country: 'UK',
    volume: '330',
    description: 'Premium taste and aroma with 54% fewer calories than the regular Old Speckled Hen',
    comments: [
    ],
    rating: {
      overall: 4,
      taste: 5,
      value: 3,
      realness: 5
    },
    upvotes: 1,
    staffPicks: false
  },
  {
    image: '../images/session_ale.jpg',
    title: 'Sainsbury\'s Low Alcohol Session Ale',
    brand: 'Sainsbury\'s',
    abv: '0.5',
    calories: '23',
    type: 'Ale',
    ingredients: 'Water, Barley Malt, Barley Malt Extract, Hop, Hop Extract, Citric Acid.',
    country: 'UK',
    volume: '500',
    description: 'Balanced matly notes with a subtle sweet finish.',
    comments: [
    ],
    rating: {
      overall: 4,
      taste: 5,
      value: 3,
      realness: 5
    },
    upvotes: 1,
    staffPicks: false
  },
  {
    image: '../images/beer_placeholder.jpg',
    title: 'Adnams Ghost Ship Bottle Beer 0.5%',
    brand: 'Adnams',
    abv: '0.5',
    calories: '23',
    type: 'Ale',
    ingredients: 'Water, Malted Barley, Malted Rye, Hops, Yeast',
    country: 'UK',
    volume: '500',
    description: 'An un-boo-lievably crisp taste. Will raise your spirits if shipwrecked.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "Makes me smile!"
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "Is this vegan? Unsure..."
      }
    ],
    rating: {
      overall: 4,
      taste: 5,
      value: 3,
      realness: 5
    },
    upvotes: 1,
    staffPicks: false
  },
  {
    image: '../images/beer_placeholder.jpg',
    title: 'Bavaria 0.0% Beer',
    brand: 'Bavaria',
    abv: '0',
    calories: '24',
    type: 'Lager',
    ingredients:
      'Natural Mineral Water, Barley Malt, Glucose Syrup, Hop Extract, Flavouring',
    country: 'Netherlands',
    volume: '330',
    description: 'Definitely not the Wurst. You do not need a Wiesn to try this.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',      
        body: "Light and refreshing. Just my cuppa beer."
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "Goes well with a cheese and pickle sandwich. No mayo."
      }
    ],
    rating: {
      overall: 3,
      taste: 4,
      value: 3,
      realness: 3
    },
    upvotes: 2,
    staffPicks: false
  },
  {
    image: '../images/beer_placeholder.jpg',
    title: 'Becks Blue Alcohol Free',
    brand: 'Becks',
    abv: '0.05',
    calories: '14',
    type: 'Lager',
    ingredients: 'Water, Barley Malt, Hops, Yeast',
    country: 'Germany',
    volume: '330',
    description: 'You don\'t have to be Posh to love a Becks.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "I drink this on the way home from my corporate job."
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "Too mainstream for my liking. They were better when independently owned."
      }
    ],
    rating: {
      overall: 3,
      taste: 2,
      value: 3,
      realness: 2
    },
    upvotes: 3,
    staffPicks: false
  },
  {
    image: '../images/beer_placeholder.jpg',
    title: 'Big Drop Brewing Paradiso Citra Ipa',
    brand: 'Big Drop Brewing Co.',
    abv: '0.5',
    calories: '18.5',
    type: 'Ale',
    ingredients: 'Water, Barley, Oats, Wheat, Lactose (Milk) Hops, Yeast',
    country: 'UK',
    volume: '330',
    description: 'Citrusy undertones. Crisp taste. Will not leave you feeling bitter.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',      
        body: "Not usually a fan of fruity beers but this is okay."
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "Big Drop? More like Big Flop."
      }
    ],
    rating: {
      overall: 2,
      taste: 2,
      value: 1,
      realness: 4
    },
    upvotes: 4,
    staffPicks: false
  },
  {
    image: '../../images/beer_placeholder.jpg',
    title: 'Brewdog Punk Af',
    brand: 'Brewdog',
    abv: '0.5',
    calories: '15',
    type: 'Ale',
    ingredients:
      'Water, Lactose (Milk), Malted Barley, Hops, Yeast, Malted Oats, Malted Wheat, Lactic Acid',
    country: 'UK',
    volume: '330',
    description: 'For the mainstream beer rebels who love to conform against the grain.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',      
        body: "This one is a little strong for me. I felt tipsy after one."
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "Nice and chill. Like me."
      }
    ],
    rating: {
      overall: 4,
      taste: 4,
      value: 4,
      realness: 5
    },
    upvotes: 6,
    staffPicks: false
  },
  {
    image: '../../images/beer_placeholder.jpg',
    title: 'Brooklyn Alcohol Free Hoppy Lager',
    brand: 'Brooklyn',
    abv: '0.4',
    calories: '29',
    type: 'Lager',
    ingredients: 'Water, Malted Barley, Hops',
    country: 'EU',
    volume: '330',
    description: 'Pale caramel notes, with a piney finish.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "I'm American and I don't even know if this is from Brooklyn?!"
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "This is quite nice."
      }
    ],
    rating: {
      overall: 4,
      taste: 4,
      value: 3,
      realness: 4
    },
    upvotes: 7,
    staffPicks: false
  },
  {
    image: '../../images/beer_placeholder.jpg',
    title: 'Free Damm Lager',
    brand: 'Free Damm',
    abv: '0',
    calories: '20',
    type: 'Lager',
    ingredients:
      'Water, Barley Malt (8%), Maize, Glucose and Fructose Syrup, Rice, Hops',
    country: 'Spain',
    volume: '330',
        description: 'Brewed in Barcelona with top quality ingredients.',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',      
        body: "Perfect on a beach in Barcelona"
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "This one is alright!"
      }
    ],
    rating: {
      overall: 4,
      taste: 4,
      value: 5,
      realness: 4
    },
    upvotes: 6,
    staffPicks: false
  },
  {
    image: '../../images/beer_placeholder.jpg',
    title: 'Leffe Blonde 0% Alcohol Free Beer',
    brand: 'Leffe',
    abv: '0',
    calories: '40',
    type: 'Beer',
    ingredients:
      'Water, Barley Malt, Maize, Barley, Sugar, Hops, Natural Aromas',
    country: 'Belgium',
    volume: '250',
    description: 'Rich, fruity notes and full of character',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',     
        body: "Nice but you need it in the right glass"
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "reminds me of Belgium"
      }
    ],
    rating: {
      overall: 5,
      taste: 4,
      value: 4,
      realness: 5
    },
    upvotes: 5,
    staffPicks: false
  },
  {
    image: '../../images/beer_placeholder.jpg',
    title: 'Shipyard Low Tide Pale Ale',
    brand: 'Shipyard',
    abv: '0.5',
    calories: '17',
    type: 'Ale',
    ingredients: 'Water, Barley, Wheat, Hops, Milk (Lactose), Yeast',
    country: 'UK',
    volume: '500',
    description: 'The tide might be low but this will raise your spirits!',
    comments: [
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "Great for a pale ale"
      },
      {
        user_id: '63b84adaaf2c390d49703c8e',
        body: "niceeeee"
      }
    ],
    rating: {
      overall: 4,
      taste: 4,
      value: 4,
      realness: 5
    },
    upvotes: 1,
    staffPicks: false
  }
];

module.exports = data;