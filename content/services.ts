type Service = {
  id: string;
  title: string;
  description: string;
  details: string;
  status: "sample" | "verified";
  species: "Dog" | "Cat";
  image?: { src: string; alt: string; position?: string };
};

export const services: readonly Service[] = [
  {
    id: "haircuts",
    title: "Full Grooming",
    description: "A fresh haircut and coat care suited to your dog's everyday life.",
    details: "A sample full groom could include a bath, dry, brush-out and haircut. Ask the salon what is included for your pet.",
    status: "sample",
    species: "Dog",
    image: { src: "/images/coat.webp", alt: "Small cream and gray dog on a grooming table" },
  },
  {
    id: "baths",
    title: "Bath & Brush",
    description: "A refresh for coats that need a clean-up between haircuts.",
    details: "A sample bath visit could include a wash, dry and brush-out. Ask about options for your dog's coat.",
    status: "sample",
    species: "Dog",
    image: { src: "/images/long-coat.webp", alt: "Dog with a long blond coat on the grooming table" },
  },
  {
    id: "cats",
    title: "Cat Grooming",
    description: "Grooming for cats, with care for each cat's coat and comfort.",
    details: "The salon publicly lists cat grooming. Call to ask which services are available for your cat.",
    status: "verified",
    species: "Cat",
    image: { src: "/images/cat.webp", alt: "Orange and white cat wrapped in a blue towel", position: "50% 46%" },
  },
  {
    id: "nails",
    title: "Nail Care",
    description: "An example of a shorter visit for routine upkeep.",
    details: "Ask whether nail care can be booked on its own or added to a groom.",
    status: "sample",
    species: "Dog",
  },
  {
    id: "extras",
    title: "Coat Care Add-ons",
    description: "Examples include an extra brush-out or a conditioning treatment.",
    details: "Ask the salon which extras are appropriate and what they cost.",
    status: "sample",
    species: "Dog",
  },
];
