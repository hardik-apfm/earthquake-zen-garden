export interface FeatureCollection {
  features: Feature[];
  metadata: Metadata;
  bbox: number[];
}

export interface Point {
  coordinates: number[];
}

export interface Feature {
  properties: FeatureProperty,
  geometry: Point,
  id: string;
}

export interface FeatureProperty {
  mag:     number;
  place:   string;
  time:    number;
  updated: number;
  tz:      number;
  url:     string;
  detail:  string;
  felt:    number | null;
  cdi:     number | null;
  mmi:     null;
  alert:   null;
  status:  string;
  tsunami: number;
  sig:     number;
  net:     string;
  code:    string;
  ids:     string;
  sources: string;
  types:   string;
  nst:     number | null;
  dmin:    number | null;
  rms:     number;
  gap:     number | null;
  magType: string;
  type:    string;
  title:   string;
}

export interface Metadata {
  generated: number;
  url:       string;
  title:     string;
  status:    number;
  api:       string;
  count:     number;
}

export interface Profile {
  firstName:   string;
  lastName:    string;
  avatarImage: string;
  phone:       string;
  email:       string;
  bio:         string;
}

export interface Site {
  title:     string;
  heroImage: string;
  logoImage: string;
}
