/**
 * Noor Layers.mfg - B2B Product Catalog Dataset
 * 7 Main Categories:
 * 1. Jackets
 * 2. Hoodies
 * 3. Sportswear
 * 4. T-Shirts
 * 5. Tracksuits
 * 6. Custom Products
 * 7. Other (Factory Facilities, Equipment & Certification)
 */

const NOOR_CATALOG = [
  // ==================== 1. JACKETS ====================
  {
    id: "JK-001",
    category: "Jackets",
    name: "Vintage Brown Quilted Leather Motorcycle Jacket",
    description: "Full-grain distressed cowhide motorcycle jacket featuring diamond-quilted shoulder reinforcements, padded lumbar panel, and heavy-duty antiqued brass YKK hardware. Available for private label custom cut & sew production.",
    image: "images/catalog/product_029.jpg",
    tag: "Genuine Leather",
    moq: "50 Pcs"
  },
  {
    id: "JK-002",
    category: "Jackets",
    name: "Western Fringe Heavyweight Leather Biker Jacket",
    description: "Heavy-gauge black cowhide biker jacket styled with authentic western arm fringe, metal-eyelet side lacing, and silver concho accents. Fully customizable with bespoke lining and embossed hardware.",
    image: "images/catalog/product_030.jpg",
    tag: "Custom Leather",
    moq: "50 Pcs"
  },
  {
    id: "JK-003",
    category: "Jackets",
    name: "Diamond Quilted Asymmetric Leather Biker Jacket",
    description: "Distressed brown leather motorcycle jacket featuring an asymmetrical front zipper closure, diamond quilting, and twin adjustable waist buckles for an ergonomic riding fit.",
    image: "images/catalog/product_031.jpg",
    tag: "Moto Outerwear",
    moq: "50 Pcs"
  },
  {
    id: "JK-004",
    category: "Jackets",
    name: "Classic Belted Cowhide Motorcycle Jacket",
    description: "Pebble-grain leather motorcycle jacket featuring an integrated waist belt with nickel roller buckle, snap-down lapels, and industrial heavy-duty zips.",
    image: "images/catalog/product_032.jpg",
    tag: "Pebble Cowhide",
    moq: "50 Pcs"
  },
  {
    id: "JK-005",
    category: "Jackets",
    name: "Full-Fringe Black Leather Riding Jacket",
    description: "100% genuine black cowhide leather jacket featuring hand-cut fringe cascading along the rear yoke and sleeve lines. Custom manufactured with bespoke fringe lengths and custom tags.",
    image: "images/catalog/product_033.jpg",
    tag: "Fringe Leather",
    moq: "50 Pcs"
  },
  {
    id: "JK-006",
    category: "Jackets",
    name: "Shearling-Lined Quilted Leather Winter Jacket",
    description: "Heavy-duty black cowhide leather jacket lined with plush faux shearling along the collar, hem, and cuffs, accented by diamond-quilted shoulder paneling for premium winter warmth.",
    image: "images/catalog/product_037.jpg",
    tag: "Shearling Lined",
    moq: "50 Pcs"
  },
  {
    id: "JK-007",
    category: "Jackets",
    name: "Shearling-Trimmed Leather Biker Jacket (Detail)",
    description: "Close-up detailing showcasing plush faux fur collar trim, reinforced leather seam lines, antiqued metal zipper pockets, and adjustable waist buckle tabs.",
    image: "images/catalog/product_039.jpg",
    tag: "Hardware Detail",
    moq: "50 Pcs"
  },
  {
    id: "JK-008",
    category: "Jackets",
    name: "Women's Faux-Fur Hooded Belted Winter Coat",
    description: "Water-resistant insulated winter coat featuring plush faux-fur hood trim, elasticated cinched waist belt, and thermal quilted lining. Customizable in multiple outerwear colorways.",
    image: "images/catalog/product_040.jpg",
    tag: "Winter Coat",
    moq: "100 Pcs"
  },
  {
    id: "JK-009",
    category: "Jackets",
    name: "Women's Longline Faux-Fur Trim Winter Parka",
    description: "Full-length insulated winter parka with deep fleece-lined hand pockets, detachable faux-fur hood trim, and heavy-duty storm placket flap for cold climates.",
    image: "images/catalog/product_041.jpg",
    tag: "Parka Collection",
    moq: "100 Pcs"
  },
  {
    id: "JK-010",
    category: "Jackets",
    name: "Luxury Belted Winter Parka with Plush Collar",
    description: "Tailored winter parka engineered with windproof technical twill, belted waistline, and oversized plush fur trim. Full private label OEM customization available.",
    image: "images/catalog/product_042.jpg",
    tag: "Belted Outerwear",
    moq: "100 Pcs"
  },
  {
    id: "JK-011",
    category: "Jackets",
    name: "Faux-Suede Sherpa-Lined Shearling Coat (QC Spec)",
    description: "Camel faux-suede coat bonded with plush sherpa fleece lining undergoing chest measurement and pattern tolerance verification. Demonstrates our precision quality control standards.",
    image: "images/catalog/product_056.jpg",
    tag: "Shearling Outerwear",
    moq: "100 Pcs"
  },
  {
    id: "JK-012",
    category: "Jackets",
    name: "Classic Faux-Suede Sherpa-Trimmed Winter Coat",
    description: "Supple faux-suede shell featuring wide sherpa notch lapels, exposed fleece cuffs, and twin front welt pockets. Engineered for premium retail outerwear brands.",
    image: "images/catalog/product_057.jpg",
    tag: "Sherpa Coat",
    moq: "100 Pcs"
  },
  {
    id: "JK-013",
    category: "Jackets",
    name: "Faux-Suede Sherpa Winter Coat (Back Seam View)",
    description: "Rear panel showcase highlighting structured cut-and-sew seam work, reinforced back yoke, and contrasting sherpa fleece piping for enhanced silhouette definition.",
    image: "images/catalog/product_058.jpg",
    tag: "Back Seam Spec",
    moq: "100 Pcs"
  },
  {
    id: "JK-014",
    category: "Jackets",
    name: "Two-Tone Hooded Windbreaker (Hardware Detail)",
    description: "Colorblocked hooded jacket showing durable metal zipper, snap-button protective storm placket, and custom drawstring hardware. Available with custom brand embossing.",
    image: "images/catalog/product_059.jpg",
    tag: "Hardware Spec",
    moq: "100 Pcs"
  },
  {
    id: "JK-015",
    category: "Jackets",
    name: "Faux-Suede Shearling Jacket (Table Inspection)",
    description: "Flat-measurement quality control demonstration verifying cut-and-sew tolerances against client tech-pack specifications in our manufacturing facility.",
    image: "images/catalog/product_060.jpg",
    tag: "QC Inspection",
    moq: "100 Pcs"
  },
  {
    id: "JK-016",
    category: "Jackets",
    name: "All-Weather Stand-Collar Water-Resistant Jacket",
    description: "High-performance daily outerwear engineered with water-resistant technical outer shell and lightweight thermal insulation. Available with custom silicone chest patches and private labeling.",
    image: "images/catalog/product_079.jpg",
    tag: "Technical Shell",
    moq: "100 Pcs"
  },

  // ==================== 2. HOODIES ====================
  {
    id: "HD-001",
    category: "Hoodies",
    name: "Colorblock Zip-Up Fleece Hoodie",
    description: "380 GSM brushed fleece zip hoodie with contrast colorblocked sleeve panels, split kangaroo pocket, metal zipper, and heavy ribbed cuffs. Ready for custom colorways and embroidery.",
    image: "images/catalog/product_011.jpg",
    tag: "Fleece 380 GSM",
    moq: "50 Pcs"
  },
  {
    id: "HD-002",
    category: "Hoodies",
    name: "Heavyweight Oversized Streetwear Fleece Hoodies",
    description: "Luxury 400+ GSM French terry cotton pullover hoodies featuring double-lined hood, kangaroo pocket, and modern boxy drop-shoulder cut. Available with custom puff printing and damask labels.",
    image: "images/catalog/product_036.jpg",
    tag: "Streetwear 420 GSM",
    moq: "50 Pcs"
  },
  {
    id: "HD-003",
    category: "Hoodies",
    name: "Tri-Tone Zip Streetwear Blank Collection",
    description: "Black, Heather Grey, and Earth Brown boxy zip-up hoodies with dropped shoulders, two-way YKK metal zips, and 420 GSM heavyweight combed fleece.",
    image: "images/hoodie-trio.jpeg",
    tag: "Tri-Tone Trio",
    moq: "50 Pcs"
  },
  {
    id: "HD-004",
    category: "Hoodies",
    name: "Heavyweight Heather Grey Zip Hoodie",
    description: "Ultra-thick double knitted loopback fleece with matching thick round drawcords, double-layered hood, and 450 GSM French terry composition.",
    image: "images/hoodie-grey-zip.jpeg",
    tag: "Heather Terry",
    moq: "50 Pcs"
  },
  {
    id: "HD-005",
    category: "Hoodies",
    name: "Sage Green Clean Minimalist Zip Hoodie",
    description: "Custom Pantone dyed sage green with silver hardware, split kangaroo pocket, and clean seamless shoulder finish in 400 GSM luxury cotton fleece.",
    image: "images/hoodie-sage-green.jpeg",
    tag: "Custom Garment Dye",
    moq: "50 Pcs"
  },
  {
    id: "HD-006",
    category: "Hoodies",
    name: "Pastel Bubblegum Pink Pullover Kangaroo Hoodie",
    description: "Heavyweight 400 GSM cotton-poly fleece blank featuring oversized relaxed drop shoulders, seamless ribbed waistband, and custom dyed matching drawstrings.",
    image: "images/hoodie-pink-pullover.jpeg",
    tag: "Pullover Fleece",
    moq: "50 Pcs"
  },

  // ==================== 3. SPORTSWEAR ====================
  {
    id: "SW-001",
    category: "Sportswear",
    name: "Two-Tone Technical Windbreaker Jacket (Front)",
    description: "Lightweight windproof and water-resistant nylon shell with contrast geometric paneling, storm hood, and zippered utility pockets for athletic and activewear lines.",
    image: "images/catalog/product_004.jpg",
    tag: "Technical Shell",
    moq: "100 Pcs"
  },
  {
    id: "SW-002",
    category: "Sportswear",
    name: "Two-Tone Technical Windbreaker Jacket (Back)",
    description: "Rear ergonomic yoke construction with breathable ventilation ports and reinforced weatherproof seam taping. Available for custom team and athletic brand customization.",
    image: "images/catalog/product_006.jpg",
    tag: "Ventilated Yoke",
    moq: "100 Pcs"
  },
  {
    id: "SW-003",
    category: "Sportswear",
    name: "Matte Black Compression Sportswear Baselayer Set",
    description: "Hydrophobic moisture-wicking compression baselayers with 6-needle flatlock anti-chafing construction, laser cut airflow vents, and 88% Poly / 12% Spandex blend.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsyqYwp5ftmJYd_dmdgYshNCGP4KE46DM2VX424z-i9-1o-aN6GLEpUFEH5E_iFAcwyWUW5YRd8RSDNvdMOT882n6WYDb8vmJxO2Nzv8XChhd8ef86mO_dKtbtHd3cw0WwyWtOoNqsXrWZ8uvgKxhM9GlTeLbw1eKDa1g6kEtfmBim0_A5y8PNcYtW1VPI6QhzTYjcxDLlrOuZcaZUIGlh5fNibh-NScKyoH5hcOEzcdi6RPYG599r",
    tag: "4-Way Stretch",
    moq: "100 Pcs"
  },

  // ==================== 4. T-SHIRTS ====================
  {
    id: "TS-001",
    category: "T-Shirts",
    name: "Bulk Packaged Vintage Mineral Wash Graphic Tees",
    description: "Pre-shrunk, folded, and polybagged private-label graphic t-shirts ready for retail distribution and international export with custom barcode swing tags.",
    image: "images/catalog/product_007.jpg",
    tag: "Export Packaging",
    moq: "100 Pcs"
  },
  {
    id: "TS-002",
    category: "T-Shirts",
    name: "'Dramatic' Vintage Graphic Crewneck T-Shirt",
    description: "220 GSM combed cotton vintage white graphic tee with soft-hand discharge screen printing and reinforced ribbed collar. Custom sizing and wash treatments available.",
    image: "images/catalog/product_017.jpg",
    tag: "Vintage Graphic",
    moq: "100 Pcs"
  },
  {
    id: "TS-003",
    category: "T-Shirts",
    name: "'Vintage Modern Life' Classic Car Graphic Tee",
    description: "Heavyweight washed cotton tee featuring retro automotive screen print graphics, distressed aesthetic, and double-needle durable hems.",
    image: "images/catalog/product_018.jpg",
    tag: "Automotive Retro",
    moq: "100 Pcs"
  },
  {
    id: "TS-004",
    category: "T-Shirts",
    name: "Botanical Floral Slogan Graphic T-Shirt",
    description: "Boutique drop-shoulder t-shirt in natural unbleached cotton with delicate botanical floral screen printing and custom woven hem label.",
    image: "images/catalog/product_019.jpg",
    tag: "Organic Graphic",
    moq: "100 Pcs"
  },
  {
    id: "TS-005",
    category: "T-Shirts",
    name: "'VOGUE Lifestyle' Graphic Streetwear T-Shirt",
    description: "240 GSM heavy combed cotton oversized tee with high-definition screen printing, metallic accents, and enzyme wash finishing for luxury streetwear labels.",
    image: "images/catalog/product_020.jpg",
    tag: "Heavy Cotton 240 GSM",
    moq: "100 Pcs"
  },
  {
    id: "TS-006",
    category: "T-Shirts",
    name: "Coastal Palms Scenic Oversized T-Shirt",
    description: "100% combed cotton jersey in a relaxed drop-shoulder cut featuring soft multi-color scenic pigment screen printing with soft hand-feel.",
    image: "images/catalog/product_021.jpg",
    tag: "Scenic Pigment Print",
    moq: "100 Pcs"
  },
  {
    id: "TS-007",
    category: "T-Shirts",
    name: "Minimalist Typographic Drop-Shoulder T-Shirt",
    description: "Heavyweight 220 GSM ring-spun cotton tee with high-density rubberized typographic chest print and bespoke sizing charts.",
    image: "images/catalog/product_022.jpg",
    tag: "High-Density Print",
    moq: "100 Pcs"
  },
  {
    id: "TS-008",
    category: "T-Shirts",
    name: "Cyberpunk Neon Graphic Acid-Wash T-Shirt",
    description: "Vintage acid-washed 100% cotton tee showcasing vibrant neon blue DTG/plastisol artwork with lightning and chrome typographic elements.",
    image: "images/catalog/product_023.jpg",
    tag: "Acid Wash Graphic",
    moq: "100 Pcs"
  },
  {
    id: "TS-009",
    category: "T-Shirts",
    name: "Vintage Pop-Art Graphic T-Shirt",
    description: "Soft-washed cotton jersey tee featuring iconic pop-art screen printing with vibrant contrast inks, available with custom private branding.",
    image: "images/catalog/product_024.jpg",
    tag: "Pop-Art Screen Print",
    moq: "100 Pcs"
  },
  {
    id: "TS-010",
    category: "T-Shirts",
    name: "Distressed Tour Graphic Vintage T-Shirt",
    description: "Heavyweight vintage black cotton t-shirt with crackle-effect back screen print reminiscent of retro band merchandise and tour apparel.",
    image: "images/catalog/product_025.jpg",
    tag: "Crackle Tour Print",
    moq: "100 Pcs"
  },
  {
    id: "TS-011",
    category: "T-Shirts",
    name: "Retro Animation Multi-Panel Graphic T-Shirt",
    description: "Regular-fit combed cotton jersey tee with high-definition multi-color screen printing across upper back and eco-friendly water-based inks.",
    image: "images/catalog/product_026.jpg",
    tag: "Multi-Panel Print",
    moq: "100 Pcs"
  },
  {
    id: "TS-012",
    category: "T-Shirts",
    name: "High-Precision Multi-Color Graphic Print T-Shirt",
    description: "180–200 GSM ring-spun cotton tee demonstrating crisp multi-color screen printing with tight color registration and wash durability.",
    image: "images/catalog/product_027.jpg",
    tag: "Color Registration",
    moq: "100 Pcs"
  },
  {
    id: "TS-013",
    category: "T-Shirts",
    name: "Women's Combed Cotton V-Neck Basic T-Shirt",
    description: "Lightweight ultra-soft V-neck tee constructed from 100% premium combed ring-spun cotton jersey with ribbed collar and reinforced hem stitching.",
    image: "images/catalog/product_063.jpg",
    tag: "Combed Cotton Jersey",
    moq: "100 Pcs"
  },

  // ==================== 5. TRACKSUITS ====================
  {
    id: "TR-001",
    category: "Tracksuits",
    name: "Custom Poly-Tricot Athletic Training Tracksuit",
    description: "Full cut-and-sew athletic tracksuit with contrast side piping, ribbed cuffs, zipped ankles, and YKK zipper pockets. Tailored for sports clubs and fitness brands.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    tag: "Poly-Tricot 280 GSM",
    moq: "50 Sets"
  },
  {
    id: "TR-002",
    category: "Tracksuits",
    name: "Heavyweight French Terry Streetwear Sweatsuit Set",
    description: "Coordinated 420 GSM French terry hoodie and relaxed-fit cuffed sweatpants set with deep pockets, flat cotton drawstrings, and custom embroidery.",
    image: "images/hoodie-grey-zip.jpeg",
    tag: "Heavy Terry Set",
    moq: "50 Sets"
  },

  // ==================== 6. CUSTOM PRODUCTS ====================
  {
    id: "CP-001",
    category: "Custom Products",
    name: "'DREAMS NVR DIE' High-Density Plastisol Heat Transfer",
    description: "Custom multi-layer screen printed heat transfer badges engineered for luxury streetwear branding, direct heat press application, and high wash durability.",
    image: "images/catalog/product_003.jpg",
    tag: "Heat Transfers",
    moq: "250 Units"
  },
  {
    id: "CP-002",
    category: "Custom Products",
    name: "Cartoon Character Multi-Color Heat Transfer",
    description: "Full-color custom graphic transfer prints for youth and streetwear collections with crisp vector detail and eco-friendly certified inks.",
    image: "images/catalog/product_005.jpg",
    tag: "Plastisol Transfer",
    moq: "250 Units"
  },
  {
    id: "CP-003",
    category: "Custom Products",
    name: "High-Vis Tactical Techwear Cargo Pants",
    description: "Constructed from heavy-duty yellow cotton twill with contrast black mesh pockets, multi-point tactical webbing straps, and detachable chrome chains.",
    image: "images/catalog/product_034.jpg",
    tag: "Bespoke Techwear",
    moq: "50 Pcs"
  },
  {
    id: "CP-004",
    category: "Custom Products",
    name: "Yellow Multi-Strap Techwear Cargo Trousers",
    description: "Avant-garde relaxed-fit tactical trousers featuring high-visibility yellow twill, modular black webbing harnesses, metal hardware, and oversized cargo storage.",
    image: "images/catalog/product_035.jpg",
    tag: "Modular Cargo",
    moq: "50 Pcs"
  },
  {
    id: "CP-005",
    category: "Custom Products",
    name: "White Tactical Multi-Strap Streetwear Ensemble",
    description: "Two-piece statement streetwear set featuring a graphic slogan tee paired with multi-strap white tactical cargo trousers with contrast red webbed harnesses and metal hardware.",
    image: "images/catalog/product_038.jpg",
    tag: "Streetwear Ensemble",
    moq: "50 Sets"
  },
  {
    id: "CP-006",
    category: "Custom Products",
    name: "Gothic Tactical Buckled Utility Skirt",
    description: "Avant-garde gothic utility skirt featuring multi-buckle adjustable nylon straps, D-ring hardware, and deep pleated panels for alternative fashion brands.",
    image: "images/catalog/product_043.jpg",
    tag: "Gothic Techwear",
    moq: "50 Pcs"
  },
  {
    id: "CP-007",
    category: "Custom Products",
    name: "Gothic Buckled Utility Skirt (Detail View)",
    description: "Rear and side view highlighting reinforced eyelet strapping, quick-release metal buckles, and structured industrial stitching.",
    image: "images/catalog/product_044.jpg",
    tag: "Buckle Details",
    moq: "50 Pcs"
  },
  {
    id: "CP-008",
    category: "Custom Products",
    name: "Tailored Gothic Bolero Cropped Jacket",
    description: "Bespoke cropped evening bolero jacket with structured stand collar, ornate metallic frogging, and velvet finish for theatrical and alternative labels.",
    image: "images/catalog/product_045.jpg",
    tag: "Ornate Bolero",
    moq: "50 Pcs"
  },
  {
    id: "CP-009",
    category: "Custom Products",
    name: "Steampunk Corseted Jacket & Skirt Two-Piece Set",
    description: "Custom-tailored historical fantasy costume set featuring boned corset detailing, lace-up accents, and matching structured skirt.",
    image: "images/catalog/product_046.jpg",
    tag: "Costume Set",
    moq: "30 Sets"
  },
  {
    id: "CP-010",
    category: "Custom Products",
    name: "Historical Theatrical Marching Band Coat",
    description: "Custom ceremonial military-inspired coat with contrast piping, metallic shoulder epaulets, and ornamental brass dome buttons.",
    image: "images/catalog/product_047.jpg",
    tag: "Theatrical Uniform",
    moq: "30 Pcs"
  },
  {
    id: "CP-011",
    category: "Custom Products",
    name: "Ceremonial Officer Tunic with Braided Frogging",
    description: "Handcrafted wool-blend ceremonial tunic featuring intricate gold wire frogging, standing mandarin collar, and tailored cut for military bands and lodges.",
    image: "images/catalog/product_048.jpg",
    tag: "Gold Frogging",
    moq: "30 Pcs"
  },
  {
    id: "CP-012",
    category: "Custom Products",
    name: "Double-Breasted Military Band Officer Tunic",
    description: "High-collar military marching tunic in heavy wool blend with dual-row gold button closure and precision tailored fit.",
    image: "images/catalog/product_049.jpg",
    tag: "Officer Tunic",
    moq: "30 Pcs"
  },
  {
    id: "CP-013",
    category: "Custom Products",
    name: "Ceremonial Parade Tunic with Brass Accents",
    description: "Export-grade ceremonial parade uniform tunic featuring contrasting collar facings, shoulder cord loops, and reinforced seams.",
    image: "images/catalog/product_050.jpg",
    tag: "Parade Tunic",
    moq: "30 Pcs"
  },
  {
    id: "CP-014",
    category: "Custom Products",
    name: "Traditional Highland Bagpiper Wool Doublet",
    description: "Authentic Scottish piper doublet crafted from heavy Melton wool with silver diamond-stamped buttons and scalloped tassets.",
    image: "images/catalog/product_051.jpg",
    tag: "Highland Doublet",
    moq: "25 Pcs"
  },
  {
    id: "CP-015",
    category: "Custom Products",
    name: "Highland Pipe Band Doublet with Braided Trim",
    description: "Traditional military pipe band uniform doublet featuring ornate braided shoulder gauntlets and silver metallic lace trims.",
    image: "images/catalog/product_052.jpg",
    tag: "Pipe Band Doublet",
    moq: "25 Pcs"
  },
  {
    id: "CP-016",
    category: "Custom Products",
    name: "Ceremonial Double-Breasted Guard Tunic",
    description: "Heavyweight ceremonial wool jacket tailored for marching regiments, pipe bands, and formal civilian organizations.",
    image: "images/catalog/product_053.jpg",
    tag: "Regimental Tunic",
    moq: "25 Pcs"
  },
  {
    id: "CP-017",
    category: "Custom Products",
    name: "Scottish Argyll Piper Uniform Jacket",
    description: "Classic Scottish Argyll kilt jacket crafted in 100% pure new wool with gauntlet cuffs and silver-finish crest buttons.",
    image: "images/catalog/product_054.jpg",
    tag: "Argyll Kilt Jacket",
    moq: "25 Pcs"
  },
  {
    id: "CP-018",
    category: "Custom Products",
    name: "Ornate Gold-Braided Ceremonial Doublet",
    description: "Masterpiece ceremonial highland jacket featuring elaborate metallic gold Soutache braiding across chest, sleeves, and skirts.",
    image: "images/catalog/product_055.jpg",
    tag: "Gold Soutache Doublet",
    moq: "20 Pcs"
  },

  // ==================== 7. OTHER (FACILITIES & EQUIPMENT) ====================
  {
    id: "OT-001",
    category: "Other",
    name: "Noor Layers Export Logistics Hub",
    description: "Primary dispatch facility and secure container loading yard for global air and sea shipments departing directly to Karachi and international hubs.",
    image: "images/catalog/product_001.jpg",
    tag: "Logistics Hub",
    moq: "Export Yard"
  },
  {
    id: "OT-002",
    category: "Other",
    name: "Rotary Screen Printing Carousel Workstation",
    description: "Multi-station manual and semi-automatic screen printing carousel for precision color registration, discharge inks, and high-yield volume output.",
    image: "images/catalog/product_002.jpg",
    tag: "Screen Printing Station",
    moq: "Facility Spec"
  },
  {
    id: "OT-003",
    category: "Other",
    name: "Precision Pattern Cutting & Spreading Table",
    description: "Long-bed fabric spreading and multi-ply knife cutting table ensuring millimeter-level pattern tolerance across high-volume production runs.",
    image: "images/catalog/product_008.jpg",
    tag: "Cutting Room",
    moq: "Facility Spec"
  },
  {
    id: "OT-004",
    category: "Other",
    name: "Textile Roll Storage & Preparation Bay",
    description: "Organized raw fabric inventory and preparation section for bulk knit and woven material inspection prior to spreading.",
    image: "images/catalog/product_009.jpg",
    tag: "Fabric Staging",
    moq: "Facility Spec"
  },
  {
    id: "OT-005",
    category: "Other",
    name: "High-Speed Industrial Stitching Line",
    description: "Dedicated assembly line featuring lockstitch, overlock, and flatlock machines configured for continuous B2B apparel production.",
    image: "images/catalog/product_010.jpg",
    tag: "Stitching Line",
    moq: "Facility Spec"
  },
  {
    id: "OT-006",
    category: "Other",
    name: "Pattern Grading & Tracing Station",
    description: "Full-scale master pattern layout and fabric yield optimization table minimizing textile waste for OEM custom size grading.",
    image: "images/catalog/product_012.jpg",
    tag: "Pattern Grading",
    moq: "Facility Spec"
  },
  {
    id: "OT-007",
    category: "Other",
    name: "Heavy-Gauge Fabric Roll Staging Area",
    description: "Fabric staging zone supporting large-scale cutting cycles for fleece, jersey, and technical shell fabrics.",
    image: "images/catalog/product_013.jpg",
    tag: "Raw Materials",
    moq: "Facility Spec"
  },
  {
    id: "OT-008",
    category: "Other",
    name: "Factory Logistics & Vehicle Staging Bay",
    description: "Logistics yard handling containerized dispatch directly to Karachi sea port and Islamabad/Sialkot international cargo airports.",
    image: "images/catalog/product_014.jpg",
    tag: "Freight Bay",
    moq: "Facility Spec"
  },
  {
    id: "OT-009",
    category: "Other",
    name: "Tajima Industrial Computerized Embroidery Console",
    description: "Digital controller for multi-head automated Tajima embroidery systems, supporting complex multi-color stitch files.",
    image: "images/catalog/product_015.jpg",
    tag: "Tajima Automation",
    moq: "Facility Spec"
  },
  {
    id: "OT-010",
    category: "Other",
    name: "20-Head Industrial Multi-Color Embroidery Machine",
    description: "High-capacity automated multi-head embroidery line delivering high-precision chest emblems, sleeve badges, and direct garment embroidery.",
    image: "images/catalog/product_016.jpg",
    tag: "20-Head Embroidery",
    moq: "Facility Spec"
  },
  {
    id: "OT-011",
    category: "Other",
    name: "Sialkot Chamber of Commerce & Industry Certificate",
    description: "Official membership certificate issued by SCCI verifying legal factory registration and export accreditation for Noor Tags in Sialkot, Pakistan.",
    image: "images/catalog/product_073.jpg",
    tag: "SCCI Accredited",
    moq: "Verification"
  },
  {
    id: "OT-012",
    category: "Other",
    name: "SCCI Official Export Trade Accreditation Certificate",
    description: "Certified export trade registration confirming legitimate enterprise status, international compliance, and transparent supply chain.",
    image: "images/catalog/product_074.jpg",
    tag: "Export License",
    moq: "Verification"
  },
  {
    id: "OT-013",
    category: "Other",
    name: "Computerized Automated Sewing Workstation",
    description: "Panoramic view of automated pattern sewing machinery for continuous high-speed, defect-free apparel manufacturing.",
    image: "images/catalog/product_075.jpg",
    tag: "Automated Sewing",
    moq: "Facility Spec"
  },
  {
    id: "OT-014",
    category: "Other",
    name: "Programmable Industrial Sewing Machine Interface",
    description: "Electronic touchscreen control panel for automated tacking and decorative embroidery machines on the factory floor.",
    image: "images/catalog/product_076.jpg",
    tag: "Digital Control",
    moq: "Facility Spec"
  },
  {
    id: "OT-015",
    category: "Other",
    name: "Precision Digital Platform Export Shipping Scale",
    description: "Digital platform scale displaying pre-shipment gross carton weight verification (48.120 kg) for international air and ocean freight compliance.",
    image: "images/catalog/product_078.jpg",
    tag: "Export Weight Verification",
    moq: "Compliance"
  }
];

// Attach to window
window.NOOR_CATALOG = NOOR_CATALOG;
