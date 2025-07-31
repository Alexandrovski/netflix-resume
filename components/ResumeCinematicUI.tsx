import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "The Quantum Closer",
    years: "2024 – Present",
    tagline: "Helping the world’s top AI teams bend reality.",
    synopsis:
      "Yuri joins AWS’s elite AI/ML team, managing a multi-million dollar portfolio. From quantum computing to 3D simulations, he helps the brightest minds on Earth (and maybe Mars) commercialize the future faster.",
    genre: "Tech Thriller, Sci-Fi Business",
    image: "/posters/quantumCloser.jpg"
  },
  {
    title: "Data Stories: The Observable Chronicles",
    years: "2022 – 2024",
    tagline: "4x revenue growth during a data drought.",
    synopsis:
      "At Sequoia-backed Observable, Yuri leads a rebellion in data storytelling. Under a legendary D3 founder and with a board of tech royalty, he scales revenue like a boss—during the toughest market since 2008.",
    genre: "Startup Drama, Analytics Epic",
    image: "/posters/observable.jpg"
  },
  {
    title: "Logo Hunt: The CrowdAI Gambit",
    years: "2020 – 2022",
    tagline: "From zero to 8x logos. And $10M ARR.",
    synopsis:
      "Starting from scratch, Yuri builds CrowdAI’s GTM motion, partnering with global giants from Honeywell to BP. With only 3 reps, he makes a Series A company punch like a Series C.",
    genre: "Industrial AI Espionage",
    image: "/posters/crowdai.jpg"
  },
  {
    title: "SkipHatch: The Lost Startup",
    years: "2019 – 2020",
    tagline: "A recommendation engine before its time.",
    synopsis:
      "A bold play in luxury retail data, backed by WhatsApp and Polyvore alumni. Though short-lived, SkipHatch’s origin story shows Yuri’s nose for market timing, team-building, and fundraising grit.",
    genre: "Indie Drama, Founder Documentary",
    image: "/posters/skiphatch.jpg"
  },
  {
    title: "Boardroom Ops: The Parsable Playbook",
    years: "2016 – 2019",
    tagline: "C-suites, continents, and partner-led growth.",
    synopsis:
      "Reporting to the CEO, Yuri scales ARR from $3M to $20M and closes record-setting deals across five continents. Built Parsable’s partner ecosystem from zero to hero, and mid-market engine from scratch.",
    genre: "Global Business Thriller",
    image: "/posters/parsable.jpg"
  },
  {
    title: "Scoutible: Disrupt the Game",
    years: "2015 – 2016",
    tagline: "Hiring meets gaming. Launched at TechCrunch.",
    synopsis:
      "Helping launch a mobile-game-based hiring platform, Yuri leads GTM and PMF efforts, while raising money and building technical teams. Scoutible is backed by Mark Cuban and makes a splash at Disrupt.",
    genre: "Futurist Docu-Series",
    image: "/posters/scoutible.jpg"
  },
  {
    title: "Zenefits: Unicorns and Outbound Armies",
    years: "2013 – 2015",
    tagline: "From employee #20 to 250 outbound reps.",
    synopsis:
      "At the peak of SaaS madness, Yuri rides Zenefits to a $4.5B valuation. Tasked with scaling outbound sales, he delivers 90% of the company’s pipeline. It’s “The Fastest Growing SaaS Company in History.”",
    genre: "Hypergrowth Biopic",
    image: "/posters/zenefits.jpg"
  },
  {
    title: "Retargeter: The Bootstrap Hustle",
    years: "2010 – 2013",
    tagline: "No VC, no problem.",
    synopsis:
      "As part of the founding team, Yuri drives ReTargeter to INC 500 status with hustle, vision, and no BDR help. From $500 to $100K+ deals, he becomes head of sales and brings in 40% of all revenue.",
    genre: "Indie Tech Grind",
    image: "/posters/retargeter.jpg"
  },
  {
    title: "Analyst Origins",
    years: "2008 – 2010",
    tagline: "Before the sales wars began.",
    synopsis:
      "The training ground. Yuri learns revenue and marketing strategy from the creators of “The Challenger Sale.” His time at Gartner/CEB lays the foundation for the battles to come.",
    genre: "Corporate Backstory",
    image: "/posters/gartner.jpg"
  }
];

export default function ResumeCinematicUI() {
  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">🎬 Yuri's Career as Cinema</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-[390px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h2 className="text-xl font-bold leading-tight">{exp.title}</h2>
              <p className="text-xs italic text-gray-300">{exp.years}</p>
              <p className="text-xs text-gray-400">🎬 {exp.genre}</p>
              <p className="text-sm mt-1 font-medium text-white">{exp.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
