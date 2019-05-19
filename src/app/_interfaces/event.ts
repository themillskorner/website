export interface IEvent {
  date: Date;
  title: string;
  details: string;
  price: number;
  venue?: string;
  address: string;
  images?: string[];
}
