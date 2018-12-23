export default {
  cart: {
    items: [],
    total: ''
  },
  config: {
    currencies: ['$'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    quantities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  products: [
    {
      text: "Men's Outerwear",
      image: "https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg",
      clicked: "mens_outerwear",
      clothes: [
        {
          id: "mo-001",
          inventory: "3",
          urlid: "/detail/mens_outerwear/Men+s+Tech+Shell+Full-Zip",
          text: "Men's Tech Shell Full-Zip",
          price: "$50.20",
          description: "A versatile full-zip that you can wear all day long and even to the gym. This technical shell features moisture-wicking fabric, added stretch and a hidden pocket for your smartphone or media player.",
          features: [
            "100% polyester.",
            "Smooth, technical front with textured mesh back.",
            "Drawstring bottom for adjustable fit.",
            "Raglan sleeves.",
            "Available in forest green with the white Google logo embroidered at left chest."
          ],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-15068A.jpg",
        },
        {
          id: "mo-002",
          inventory: "5",
          urlid: "/detail/mens_outerwear/Anvil+L+S+Crew+Neck+-+Grey",
          text: "Anvil L/S Crew Neck - Grey",
          price: "$22.15",
          description: "You'll be swooning over this crew neck as soon as you feel how soft it is.",
          features: [
            "40% preshrunk ring-spun cotton, 60% polyester terry fleece.",
            "Available in dark heather charcoal with the white Google logo screen printed across center chest."
          ],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-14154A.jpg",
        },
        {
          id: "mo-003",
          inventory: "3",
          urlid: "/detail/mens_outerwear/Green+Flex+Fleece+Zip+Hoodie",
          text: "Green Flex Fleece Zip Hoodie",
          price: "$45.65",
          description: "Ultra soft. Ultra cozy. Our popular flex fleece hoodie now available in speckled green.",
          features: [
            "50% cotton / 50% polyester.",
            "Made in the USA.",
            "Full-zip.",
            "Available in green with specks of blue and the white Google logo embroidered at left bicep."
          ],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-14157A.jpg",
        },
        {
          id: "mo-004",
          inventory: "6",
          urlid: "/detail/mens_outerwear/Android+Nylon+Packable+Jacket",
          text: "Android Nylon Packable Jacket",
          price: "$33.60",
          description: "Pack. Pack. Pack it up! This nylon jacket with reflective trim can literally be packed into itself in seconds. Features a waterproof nylon fabric, Android eyes & antennaes on the hood and a carrying strap when jacket is fully packed. Android robot is printed on back above zipper in a reflective, metallic finish.",
          features: [],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-15041A.jpg",
        }
      ]
    },
    {
      text: "Ladies's Outerwear",
      image: "https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg",
      clicked: "ladies_outerwear",
      clothes: [
        {
          id: "lo-001",
          inventory: "2",
          urlid: "/detail/ladies_outerwear/Ladies+Modern+Stretch+Full+Zip",
          text: "Ladies Modern Stretch Full Zip",
          price: "$41.60",
          description: "With an updated fit and figure-flattering details, this full-zip combines ultra soft cotton with a dash of spandex to retain its shape all day long.",
          features: [
            "96% cotton, 4% spandex.",
            "Gently contoured silhouette & longer length design for a style that moves with you.",
            "Self-fabric hood.",
            "Dyed-to-match zipper.",
            "Front slash pockets.",
            "Open cuffs & hem.",
            "Available in Mosaic Blue with the white Google logo embroidered at left chest."
          ],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-24102A.jpg"
        },
        {
          id: "lo-002",
          inventory: "5",
          urlid: "/detail/ladies_outerwear/Ladies+Colorblock+Wind+Jacket",
          text: "Ladies Colorblock Wind Jacket",
          price: "$45.90",
          description: "Brighten up your commute on gloomy days. This lightweight jacket features a subtle grid texture and a punch of bright pink at each side panel.",
          features: [
            "100% polyester dobby shell with jersey lining.",
            "Packable zip-in hood with contrast pink zipper.",
            "Cadet collar and elastic cuffs.",
            "Adjustable toggles at waist can be cinched for a flattering fit.",
            "Available in grey/dark rose with the white Google logo embroidered at left chest."
          ],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-25058A.jpg"
        },
        {
          id: "lo-003",
          inventory: "4",
          urlid: "/detail/ladies_outerwear/Ladies+Voyage+Fleece+Jacket",
          text: "Ladies Voyage Fleece Jacket",
          price: "$48.00",
          description: "Perhaps the equivalent to that comfort blanket you had years ago is a cozy fleece. This full-zip is the perfect layering piece for those 'in-between' months when mother nature just can't make up her mind.",
          features: [
            "100% polyester anti-pill yarn fleece.",
            "100% polyester taffeta lining in sleeves.",
            "Tricot-lined lower pockets with reverse coil zippers.",
            "Available in purple with the white Google logo embroidered at left chest.",
            "Please note! Sizing runs larger than normal. Consider ordering a size smaller than normal."
          ],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-24101A.jpg"
        },
        {
          id: "lo-004",
          inventory: "3",
          urlid: "/detail/ladies_outerwear/Ladies+Pullover+L+S+Hood",
          text: "Ladies Pullover L/S Hood",
          price: "$36.50",
          description: "A longsleeve layering piece with a hood. What more can you ask for between season changes.",
          features: [
            "85% polyester, 15% cotton.",
            "Ultra lightweight, tissue jersey fabric.",
            "Scoop-neck with hood.",
            "Available in jewel blue with the white Google logo screenprinted across center chest."
          ],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-24098A.jpg"
        }
      ]
    },
    {
      text: "Men's T-Shirts",
      image: "https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg",
      clicked: "mens_tshirts",
      clothes: [
        {
          id: "mt-001",
          inventory: "2",
          urlid: "/detail/mens_tshirts/YouTube+Organic+Cotton+T-Shirt+-+Grey",
          text: "YouTube Organic Cotton T-Shirt - Grey",
          price: "$14.75",
          description: "Stay casual and cool in this 100% organic pre-shrunk cotton T-shirt. Available in charcoal grey with full-color YouTube logo screened on front.",
          features: [],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-13058A.jpg"
        },
        {
          id: "mt-002",
          inventory: "4",
          urlid: "/detail/mens_tshirts/Inbox+-+Subtle+Actions+T-Shirt",
          text: "Inbox - Subtle Actions T-Shirt",
          price: "$17.05",
          description: "Sometimes even the subtlest of actions can make a big difference. This tee highlights all of the icons & features available in your Gmail inbox!",
          features: [
            "60% cotton, 40% polyester blend.",
            "Available in charcoal heather with the inbox icons screenprinted at front chest and inbox tag sewn onto left sleeve."
          ],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-13256A.jpg"
        },
        {
          id: "mt-003",
          inventory: "3",
          urlid: "/detail/mens_tshirts/Adult+Android+Superhero+T-Shirt",
          text: "Adult Android Superhero T-Shirt",
          price: "$14.95",
          description: "Mr. Kent has nothing on Super Droid, especially since this robot has only one weakness-a sweet tooth (considering all of its confectionery-themed versions)! This adorable Bella+Canvas tee features a unisex fit that is sure to please both male and female Android fans.",
          features: [
            "100% combed, ringspun cotton.",
            "Unisex fit.",
            "Tag-free label for added comfort.",
            "Available in royal blue with the Super Droid robot screen printed at center chest.",
            "Sizes run smaller than normal. Reference men's sizing chart for additional details."
          ],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-13239A.jpg"
        },
        {
          id: "mt-004",
          inventory: "5",
          urlid: "/detail/mens_tshirts/Men+s+Vintage+Heather+T-Shirt",
          text: "Men's Vintage Heather T-Shirt",
          price: "$15.80",
          description: "A casual-cool, vintage-inspired tee perfect for all. Just remember that the best part about any classic is that it only improves with age. The more you wash it, the softer it feels.",
          features: [
            "65% polyester, 35% cotton.",
            "Available in heather navy, blue, purple or green with the white Google logo screened across center chest of each."
          ],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-13264A.jpg"
        }
      ]
    },
    {
      text: "Ladies's T-Shirts",
      image: "https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg",
      clicked: "ladies_tshirts",
      clothes: [
        {
          id: "lt-001",
          inventory: "3",
          urlid: "/detail/ladies_tshirts/Ladies+Chrome+T-Shirt",
          text: "Ladies Chrome T-Shirt",
          price: "$13.30",
          description: "The best of three fabrics combined into one seductively-soft tee.",
          features: [
            "50% polyester, 25% combed and ring-spun cotton, 25% rayon.",
            "Side-seamed.",
            "Semi-relaxed fit.",
            "Available in heather blue with the white Google Chrome logo screenprinted at center chest."
          ],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-23180A.jpg"
        },
        {
          id: "lt-002",
          inventory: "2",
          urlid: "/detail/ladies_tshirts/Ladies+Google+New+York+T-Shirt",
          text: "Ladies Google New York T-Shirt",
          price: "$18.35",
          description: "Are you feeling lucky? Inspired by city lights in The Big Apple, this tee features the 'I'm Feeling Lucky New York' phrase at back.",
          features: [
            "100% cotton.",
            "American Apparel shirt designed with a ladies fit in mind.",
            "Available in Black with the Google logo and 'I'm Feeling Lucky' New York printed on back yoke in White.",
            "Sizing runs smaller than normal. Please reference size chart before ordering."
          ],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-23226A.jpg"
        },
        {
          id: "lt-003",
          inventory: "5",
          urlid: "/detail/ladies_tshirts/Ladies+Gmail+T-Shirt",
          text: "Ladies Gmail T-Shirt",
          price: "$16.40",
          description: "Show your inbox some love. The new Gmail tee has arrived, complete with a subtle Mvelope design that showcases all of the Gmail icons you use on the daily.",
          features: [
            "50% polyester, 25% cotton.",
            "Bella+Canvas.",
            "Available in vintage red with the new Gmail print screenprinted across center chest."
          ],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-23179A.jpg"
        },
        {
          id: "lt-004",
          inventory: "3",
          urlid: "/detail/ladies_tshirts/Ladies+G+Logo+White+T-Shirt",
          text: "Ladies G Logo White T-Shirt",
          price: "$13.30",
          description: "There's a new G in town and it's here to stay. Get your hands on this comfy white tee with the new Google icon.",
          features: [
            "100% combed and ring-spun cotton.",
            "Side seamed, relaxed fit.",
            "Bella+Canvas.",
            "Available in white with the Google 'G' icon screenprinted at front."
          ],
          image: "https://shop.polymer-project.org/esm-bundled/data/images/10-23178A.jpg"
        }
      ]
    }
  ]
}
