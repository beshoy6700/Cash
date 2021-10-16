export class Country {
  id: number;
  name: string;
  slug: string;
  status: boolean;
  user_id: number

  constructor(id: number, name: string, slug: string, status: boolean, user_id: number) {

    this.id = id;
    this.name = name;
    this.slug = slug;
    this.status = status;
    this.user_id = user_id;


  }
}
