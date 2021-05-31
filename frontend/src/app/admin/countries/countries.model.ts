import {formatDate} from "@angular/common";

export class Countries {
  id: number;
  name: string;
  slug: string;
  lat: string;
  long: string;
  status: string;
  admin: string;

  constructor(contacts) {
    {
      this.id = contacts.id || this.getRandomID();
      this.name = contacts.name || "";
      this.slug = contacts.slug || "";
      this.lat = contacts.lat || "";
      this.long = contacts.long || "";
      this.status = contacts.status || "";
      this.admin = contacts.admin || "";
    }
  }

  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
