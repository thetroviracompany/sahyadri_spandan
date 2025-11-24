import { TeamMember, Destination } from './types';

export const APP_NAME = "Sahyadri Spandan";
export const TAGLINE = "Your Trusted Tour & Travel Partner Across India";

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Gorakhnath Dongare", role: "Founder & CEO" },
  { name: "Nilesh Sadgir", role: "CFO" },
  { name: "Abhishek Patil", role: "COO" },
  { name: "Pratiksha More", role: "CTEO & Trek Leader" },
  { name: "Dhanashri Jadhav", role: "CMO" },
  { name: "Anurag Phand", role: "Trek Leader" },
];

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    id: "goa",
    title: "Goa Getaways",
    description: "Sun, sand, and serenity awaits in the party capital of India.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rajasthan",
    title: "Rajasthan Heritage Trails",
    description: "Experience the royal grandeur of palaces and deserts.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "himachal",
    title: "Himachal & Kashmir Adventures",
    description: "Mountains calling? Witness the snowy peaks and lush valleys.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kerala",
    title: "Kerala Backwaters",
    description: "God's own country offering tranquil houseboat experiences.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mahabaleshwar",
    title: "Mahabaleshwar & Lonavala",
    description: "Perfect weekend retreats amidst the Sahyadri ranges.",
    image: "/assets/mahabaleshwar.png"
  },
  {
    id: "trekking",
    title: "Sahyadri Trekking & Fort Tours",
    description: "For the thrill-seekers, conquer the historic forts.",
    image: "/assets/trek.png"
  }
];

export const COMPANY_VALUES = [
  { title: "Quality & Safety", desc: "We prioritize your safety and comfort above all else." },
  { title: "Authentic Local Experiences", desc: "Discover the real India through local eyes." },
  { title: "Transparent Pricing", desc: "No hidden costs, just honest travel planning." },
  { title: "Responsible Tourism", desc: "We care for nature and the communities we visit." }
];

export const BOOKING_STEPS = [
  { title: "Choose Destination", desc: "Pick from our curated list or request a custom trip." },
  { title: "Send Dates", desc: "WhatsApp us your preferred travel dates." },
  { title: "Get Itinerary", desc: "Receive a detailed plan & transparent quote." },
  { title: "Confirm Booking", desc: "Pay securely and pack your bags!" }
];

export const CONTACT_INFO = {
  phone: "+91 9370665082",
  email: "spandansahyadri@gmail.com",
  whatsapp: "+91 9370665082"
};
