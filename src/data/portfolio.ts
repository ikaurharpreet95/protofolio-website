import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p7 from "@/assets/portfolio-7.jpg";

export type Category = "Wedding" | "Housewarming" | "Digital" | "Custom";

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "wedding-floral",
    title: "Wedding Invitation",
    category: "Wedding",
    description: "Elegant floral invitation featuring soft pastel colours.",
    image: p1,
  },
  {
    id: "traditional-wedding",
    title: "Traditional Wedding Invite",
    category: "Wedding",
    description: "Classic design with gold accents.",
    image: p2,
  },
  {
    id: "minimal-wedding",
    title: "Minimal Wedding Invitation",
    category: "Wedding",
    description: "Clean typography with luxury styling.",
    image: p3,
  },
  {
    id: "housewarming",
    title: "Housewarming Invitation",
    category: "Housewarming",
    description: "Modern family invitation featuring warm earthy colours.",
    image: p4,
  },
  {
    id: "floral-housewarming",
    title: "Floral Housewarming Invite",
    category: "Housewarming",
    description: "Elegant botanical design.",
    image: p5,
  },
  {
    id: "digital",
    title: "Digital Invitation",
    category: "Digital",
    description: "Animated WhatsApp invitation.",
    image: p6,
  },
  {
    id: "premium-custom",
    title: "Premium Custom Invitation",
    category: "Custom",
    description: "Luxury invitation suite.",
    image: p7,
  },
];

export const categories: ("All" | Category)[] = [
  "All",
  "Wedding",
  "Housewarming",
  "Digital",
  "Custom",
];
