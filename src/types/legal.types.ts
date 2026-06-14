export interface LegalSectionItem {
  title: string;
  content: string;
}

export interface LegalSection {
  id: string;
  heading: string;
  items: LegalSectionItem[];
}

export interface LegalPage {
  slug: string;
  title: string;
  description: string;
  sections: LegalSection[];
}
