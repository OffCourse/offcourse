export interface IBaseSection {
  title: string;
  backdropPath?: string;
  role: string;
  publishable: boolean;
  sectionIndex: number;
}
export type IHeroSection = IBaseSection;

export type IContactSection = IBaseSection & {
  callToAction: string;
  form: any;
};

export type IPageSection = IHeroSection | IContactSection;
