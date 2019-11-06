import { User } from './user.module'

export class Repo {
  name: string;
  owner: User;
  full_name: string;
  id: number;

  constructor(json?: any) {
    if (json != null) {
      this.id = json.id;
      this.name = json.name;
      this.full_name = json.full_name;
      this.owner = json.owner;
    }
  }

  static toArray(jsons: any[]): Repo[] {
    const repos: Repo[] = [];
    if (jsons != null) {
      for (const json of jsons) {
        repos.push(new Repo(json));
      }
    }
    return repos;
  }

}
