export interface IBaseSection {
  title: string;
  backdropPath?: string;
  role: string;
  publishable: boolean;
  sectionIndex: number;
}
export type IHeroSection = IBaseSection & {
  role: "hero";
}

export type IContactSection = IBaseSection & {
  role: "contact";
  callToAction: string;
  form: any;
};

export type IPageSection = IContactSection | IHeroSection;
