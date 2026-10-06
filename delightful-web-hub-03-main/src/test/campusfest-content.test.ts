import { describe, expect, it } from "vitest";

import { campusFestEvents, campusFestGallery, campusFestSchedule, campusFestStats } from "@/lib/campusfest";

describe("CampusFest 2026 content", () => {
  it("includes the six events specified for the festival", () => {
    expect(campusFestEvents.map((event) => event.name)).toEqual([
      "Code Clash",
      "Robo Wars",
      "Hackathon",
      "Battle of Bands",
      "Dance Fusion",
      "Photography Challenge",
    ]);
  });

  it("preserves each published day, time, and schedule activity", () => {
    expect(campusFestSchedule).toEqual([
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
    ]);
  });

  it("shows the requested audience, event, and festival-day totals", () => {
    expect(campusFestStats).toEqual([
      { value: "1000+", label: "Students" },
      { value: "20+", label: "Events" },
      { value: "3", label: "Days of Fun" },
    ]);
  });

  it("includes the six requested gallery themes", () => {
    expect(campusFestGallery.map((image) => image.label)).toEqual([
      "Technical events",
      "Cultural events",
      "Students",
      "Stage performance",
      "Robotics",
      "Prize distribution",
    ]);
  });
});