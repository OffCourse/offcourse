export interface IBaseSection {
  role: string;
  publishable: boolean;
  backdropPath?: string;
}
export type IHeroSection = IBaseSection & {
  role: "hero";
  title: string;
}

export type IContactSection = IBaseSection & {
  role: "contact";
  callToAction: string;
  form: any;
};

export type IPageSection = IContactSection | IHeroSection;
