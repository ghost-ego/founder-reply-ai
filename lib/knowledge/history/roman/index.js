// lib/knowledge/history/roman/index.js

import { romanOverview } from "./overview";
import { romanRepublic } from "./republic";
import { romanEmpire } from "./empire";
import { romanEmperors } from "./emperors";
import { romanMilitary } from "./military";
import { romanWars } from "./wars";
import { romanSociety } from "./society";
import { romanReligion } from "./religion";
import { romanEconomy } from "./economy";
import { romanArchitecture } from "./architecture";
import { romanProvinces } from "./provinces";
import { romanTimeline } from "./timeline";

export const romanKnowledge = {
  overview: romanOverview,
  republic: romanRepublic,
  empire: romanEmpire,
  emperors: romanEmperors,
  military: romanMilitary,
  wars: romanWars,
  society: romanSociety,
  religion: romanReligion,
  economy: romanEconomy,
  architecture: romanArchitecture,
  provinces: romanProvinces,
  timeline: romanTimeline
};

export const romanTopics = Object.keys(romanKnowledge);

export function getRomanKnowledge(topic) {
  return romanKnowledge[topic] || null;
}

export default romanKnowledge;
