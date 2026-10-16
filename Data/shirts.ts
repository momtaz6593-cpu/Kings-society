export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  tags?: string[];
}

export const MEN_SHIRTS: Product[] = [
  {
    id: "kings-black-crown-shirt",
    name: "Kings Society Black Crown Shirt",
    price: "$45.00",
    image: "/men-shirt-1.png",
    description: "Premium black short-sleeve shirt with signature 'K' crown logo.",
    tags: ["shirt", "black", "crown", "logo", "short sleeve", "casual", "streetwear", "men", "kings society", "dark", "summer"]
  },
  {
    id: "classic-white-casual-shirt",
    name: "Classic White Casual Shirt",
    price: "$39.00",
    image: "/white-shirt-2.png",
    description: "Minimalist crisp white short-sleeve button-down shirt.",
    tags: ["shirt", "white", "classic", "casual", "button down", "short sleeve", "minimalist", "clean", "formal", "men"]
  },
  {
    id: "black-pinstripe-shirt",
    name: "Black Pinstripe Shirt",
    price: "$42.00",
    image: "/men-shirt-3.png",
    description: "Stylish black vertical striped shirt with cuffed sleeves.",
    tags: ["shirt", "black", "stripe", "pinstripe", "vertical stripe", "stylish", "formal", "casual", "cuffed", "men"]
  },
  {
    id: "olive-green-utility-shirt",
    name: "Olive Green Utility Shirt",
    price: "$48.00",
    image: "/men-shirt-4.png",
    description: "Rugged olive green military-style shirt with double pockets.",
    tags: ["shirt", "olive", "green", "utility", "military", "cargo", "pockets", "rugged", "men", "streetwear"]
  },
  {
    id: "abstract-printed-beige-shirt",
    name: "Abstract Printed Beige Shirt",
    price: "$46.00",
    image: "/men-shirt-5.png",
    description: "Artistic beige shirt with bold black abstract print.",
    tags: ["shirt", "beige", "cream", "print", "abstract", "printed", "artistic", "resort", "trendy", "men"]
  },
  {
    id: "charcoal-stitch-black-shirt",
    name: "Charcoal Stitch Black Shirt",
    price: "$44.00",
    image: "/men-shirt-6.png",
    description: "Dark charcoal relaxed-fit shirt with clean contrast stitching.",
    tags: ["shirt", "charcoal", "black", "dark", "stitch", "contrast", "relaxed fit", "casual", "men"]
  },
  {
    id: "vintage-cuban-collar-shirt",
    name: "Vintage Cuban Collar Shirt",
    price: "$42.00",
    image: "/men-shirt-7.png",
    description: "Retro-inspired relaxed Cuban collar shirt with subtle texture.",
    tags: ["shirt", "cuban collar", "vintage", "retro", "relaxed", "texture", "summer", "resort", "men"]
  },
  {
    id: "minimal-monochrome-shirt",
    name: "Minimal Monochrome Shirt",
    price: "$49.00",
    image: "/men-shirt-8.png",
    description: "Modern minimalist design crafted with high-grade breathable fabric.",
    tags: ["shirt", "monochrome", "minimal", "minimalist", "breathable", "premium", "modern", "men"]
  },
];

export const BOYS_SHIRTS: Product[] = [
  {
    id: "bs-1",
    name: "Boys Off-White Crown T-Shirt",
    description: "Premium oversized off-white tee with chest crown logo",
    price: "$10.00",
    image: "/boy-t-shirt-1.png",
    tags: ["tshirt", "t-shirt", "tee", "off white", "cream", "crown", "logo", "oversized", "boys", "kids", "casual"]
  },
  {
    id: "bs-2",
    name: "Boys Minimalist Black Short-Sleeve",
    description: "Sleek all-black casual shirt with subtle golden crest",
    price: "$12.00",
    image: "/men-shirt-3.png",
    tags: ["shirt", "black", "short sleeve", "gold", "crest", "minimalist", "casual", "boys", "kids"]
  },
  {
    id: "bs-3",
    name: "Boys Charcoal Contrast Pocket Shirt",
    description: "Modern dark charcoal short-sleeve shirt with white stitching",
    price: "$12.50",
    image: "/men-shirt-8.png",
    tags: ["shirt", "charcoal", "pocket", "contrast", "stitching", "dark", "boys", "kids", "casual"]
  },
  {
    id: "bs-4",
    name: "Boys Classic Beige Casual Shirt",
    description: "Clean linen-cotton blend beige shirt for casual wear",
    price: "$13.00",
    image: "/men-shirt-4.png",
    tags: ["shirt", "beige", "linen", "cotton", "casual", "clean", "classic", "boys", "kids"]
  },
  {
    id: "bs-5",
    name: "Boys Military Green Utility Shirt",
    description: "Rugged double-pocket olive green long-sleeve shirt",
    price: "$15.00",
    image: "/men-shirt-6.png",
    tags: ["shirt", "military", "green", "olive", "utility", "long sleeve", "pockets", "boys", "kids"]
  },
  {
    id: "bs-6",
    name: "Boys Black Vertical Pinstripe Shirt",
    description: "Stylish black shirt with sharp contrast white pinstripes",
    price: "$14.00",
    image: "/men-shirt-5.png",
    tags: ["shirt", "black", "stripe", "pinstripe", "stylish", "contrast", "boys", "kids", "formal"]
  },
  {
    id: "bs-7",
    name: "Boys Artistic Printed Resort Shirt",
    description: "Trendy cream shirt featuring bold abstract ink art",
    price: "$13.50",
    image: "/men-shirt-7.png",
    tags: ["shirt", "printed", "artistic", "resort", "cream", "abstract", "ink art", "trendy", "boys", "kids"]
  },
  {
    id: "bs-8",
    name: "Boys Stealth Black Graphic Tee",
    description: "Comfortable dark black cotton t-shirt with chest print",
    price: "$9.00",
    image: "/black-T-shirt-2.png",
    tags: ["tshirt", "t-shirt", "tee", "graphic tee", "black", "cotton", "print", "stealth", "boys", "kids"]
  },
];