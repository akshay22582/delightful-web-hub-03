import codingPhoto from "@/assets/campusfest-coding.jpg";
import roboticsPhoto from "@/assets/campusfest-robotics.jpg";
import hackathonPhoto from "@/assets/campusfest-hackathon.jpg";
import bandsPhoto from "@/assets/campusfest-bands.jpg";
import dancePhoto from "@/assets/campusfest-dance.jpg";
import photographyPhoto from "@/assets/campusfest-photography.jpg";

export interface CampusFestEvent {
  name: string;
  description: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
}

export const campusFestEvents: CampusFestEvent[] = [
  {
    name: "Code Clash",
    description: "A competitive coding challenge for programming enthusiasts.",
    category: "Technology",
    date: "15 December · Day 1",
    image: codingPhoto,
    imageAlt: "College students taking part in a programming competition",
  },
  {
    name: "Robo Wars",
    description: "Build, battle and showcase your robotics skills.",
    category: "Robotics",
    date: "15 December · Day 1",
    image: roboticsPhoto,
    imageAlt: "Student-built robots face off in a competition arena",
  },
  {
    name: "Hackathon",
    description: "Build innovative solutions to real-world problems.",
    category: "Innovation",
    date: "16 December · Day 2",
    image: hackathonPhoto,
    imageAlt: "Student teammates celebrate their hackathon project",
  },
  {
    name: "Battle of Bands",
    description: "A musical competition for talented college bands.",
    category: "Music",
    date: "17 December · Day 3",
    image: bandsPhoto,
    imageAlt: "College musicians perform together on an outdoor stage",
  },
  {
    name: "Dance Fusion",
    description: "Show your creativity and energy on stage.",
    category: "Dance",
    date: "16 December · Day 2",
    image: dancePhoto,
    imageAlt: "Student dancers perform at a college festival",
  },
  {
    name: "Photography Challenge",
    description: "Capture the best moments through your lens.",
    category: "Photography",
    date: "16 December · Day 2",
    image: photographyPhoto,
    imageAlt: "A student photographer captures a campus event",
  },
];

export const campusFestSchedule = [
  {
    name: "Day 1",
    date: 15,
    items: [
      { time: "09:00 AM", name: "Opening Ceremony" },
      { time: "11:00 AM", name: "Code Clash" },
      { time: "02:00 PM", name: "Robo Wars" },
      { time: "05:00 PM", name: "Cultural Events" },
    ],
  },
  {
    name: "Day 2",
    date: 16,
    items: [
      { time: "10:00 AM", name: "Hackathon" },
      { time: "01:00 PM", name: "Photography Challenge" },
      { time: "04:00 PM", name: "Dance Fusion" },
      { time: "07:00 PM", name: "DJ Night" },
    ],
  },
  {
    name: "Day 3",
    date: 17,
    items: [
      { time: "10:00 AM", name: "Final Competitions" },
      { time: "04:00 PM", name: "Prize Distribution" },
      { time: "06:00 PM", name: "Closing Ceremony" },
    ],
  },
];

export const campusFestStats = [
  { value: "1000+", label: "Students" },
  { value: "20+", label: "Events" },
  { value: "3", label: "Days of Fun" },
];

export const campusFestGallery = [
  {
    label: "Technical events",
    alt: "Students coding side by side at a college programming event",
    image: codingPhoto,
  },
  {
    label: "Cultural events",
    alt: "Student performers dancing together beneath festival lights",
    image: dancePhoto,
  },
  {
    label: "Students",
    alt: "A student team smiles together after completing their project",
    image: hackathonPhoto,
  },
  {
    label: "Stage performance",
    alt: "College band performs live at an outdoor campus concert",
    image: bandsPhoto,
  },
  {
    label: "Robotics",
    alt: "Robots compete in a student-built battle arena",
    image: roboticsPhoto,
  },
  {
    label: "Prize distribution",
    alt: "Happy student teammates celebrate a successful festival project",
    image: hackathonPhoto,
  },
];