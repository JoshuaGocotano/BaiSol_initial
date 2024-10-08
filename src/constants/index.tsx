import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import richard from "../assets/profile-pictures/richard.jpg";
import roboam from "../assets/profile-pictures/roboam.jpg";
import joshua from "../assets/profile-pictures/joshua.jpg";

export const navItems = [
  { label: "Home", section: "heroRef" },
  { label: "Features", section: "featureRef" },
  { label: "Workflow", section: "workflowRef" },
  { label: "Pricing", section: "pricingRef" },
  { label: "Developers", section: "developersRef" },
] as const;

export const developers = [
  {
    name: "Roboam Dosdos",
    role: "Hacker",
    image: roboam,
    description:
      "The hacker or programmer of the group and have a fair knowledge of frontend and backend development.",
  },
  {
    name: "Richard Quirante",
    role: "Hustler",
    image: richard,
    description:
      "Manages the group and also has a lot of knowledge with backend and front development with react and C#.",
  },
  {
    name: "Joshua Gocotano",
    role: "Hipster",
    image: joshua,
    description:
      "Working on UI/UX and have a sufficient knowledge in stylesheets like Tailwind CSS and Bootstrap.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Package A",
    price: "₱50,000",
    features: [
      "For homes with 5kw usage",
      "On-grid System",
      "Solar can only be used in day",
      "Can reduce your bill up to 50%",
    ],
  },
  {
    title: "Package B",
    price: "₱150,000",
    features: [
      "For structures with 5kw usage",
      "Hybrid System",
      "Solar can be used day or night",
      "Can reduce your bill up to 40%",
    ],
  },
  {
    title: "Package C",
    price: "₱300,000",
    features: [
      "For bigger structures or usage",
      "with 15kw or more usage",
      "Hybrid System",
      "Can reduce your bill up to 30%",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
