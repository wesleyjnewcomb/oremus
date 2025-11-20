type PrayerId = string;

export interface Prayer {
  id: PrayerId;
  name: string;
  description: string;
  text: string[];
  repititions?: number;
}

export interface PrayerSection {
  title: string;
  prayers: Array<PrayerId | [PrayerId, reptitions: number]>;
}

export interface PrayerSet {
  title: string;
  description: string;
  sections: PrayerSection[];
}
