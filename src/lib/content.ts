import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// ── Types ──────────────────────────────────────────────────────────

export interface SponsorLogo {
  src: string;
  alt: string;
  height?: string;
  href?: string;
}

export interface SponsorsData {
  logos: SponsorLogo[];
}

export interface HeroData {
  sponsor: string;
  title: string;
  titleAccent: string;
  tagline: string;
  nextEvent: {
    name: string;
    url: string;
    dates: string;
    location: string;
  };
}

export interface AboutCard {
  icon: string;
  title: string;
  description: string;
}

export interface AboutData {
  sectionLabel: string;
  heading: string;
  headingLine2: string;
  cards: AboutCard[];
  charterLink: {
    text: string;
    href: string;
  };
}

export interface TrackItem {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export interface TracksData {
  sectionLabel: string;
  heading: string;
  subtitle: string;
  items: TrackItem[];
}

export interface ResourceItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface ResourcesData {
  sectionLabel: string;
  heading: string;
  subtitle: string;
  items: ResourceItem[];
}

export interface ConferenceItem {
  year: number;
  location: string;
  country: string;
  url: string;
  dates?: string;
  highlight?: boolean;
}

export interface ConferencesData {
  sectionLabel: string;
  heading: string;
  subtitle: string;
  items: ConferenceItem[];
}

export interface CharterData {
  title: string;
  subtitle: string;
  label: string;
  pdfHref: string;
  content: string;
}

// ── Helpers ────────────────────────────────────────────────────────

const contentDir = path.join(process.cwd(), "content");

function readYaml<T>(filename: string): T {
  const filePath = path.join(contentDir, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(`---\n${raw}\n---`);
  return data as T;
}

function readMarkdown(filename: string) {
  const filePath = path.join(contentDir, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { data, content };
}

export async function markdownToHtml(md: string): Promise<string> {
  const result = await remark().use(html).process(md);
  return result.toString();
}

// ── Loaders ────────────────────────────────────────────────────────

export function getHero(): HeroData {
  return readYaml<HeroData>("hero.yaml");
}

export function getAbout(): AboutData {
  return readYaml<AboutData>("about.yaml");
}

export function getTracks(): TracksData {
  return readYaml<TracksData>("tracks.yaml");
}

export function getResources(): ResourcesData {
  return readYaml<ResourcesData>("resources.yaml");
}

export function getConferences(): ConferencesData {
  return readYaml<ConferencesData>("conferences.yaml");
}

export function getSponsors(): SponsorsData {
  return readYaml<SponsorsData>("sponsors.yaml");
}

export async function getCharter(): Promise<CharterData> {
  const { data, content } = readMarkdown("charter.md");
  const htmlContent = await markdownToHtml(content);
  return {
    title: data.title,
    subtitle: data.subtitle,
    label: data.label,
    pdfHref: data.pdfHref,
    content: htmlContent,
  };
}
