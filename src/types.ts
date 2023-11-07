export enum Category {
  Gaseous = "gaseous",
  Telluric = "telluric",
}

export interface Link {
  url: string,
  text: string,
}

export interface Planet {
  category: Category;
  cover: string;
  name: string;
  subtitle: string;
  slug: string;
}