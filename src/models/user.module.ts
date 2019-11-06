export class User {
  id: number;
  login: string;
  email?: string;
  avatar_url: string;
  name?: string;
  updated_at?: string;
  created_at?: string;

  constructor(json?: any) {
    if (json != null) {
      this.login = json.login;
      this.id = json.id;
      this.avatar_url = json.avatar_url;
      this.name = json.name;
      this.email = json.email;
      this.created_at = json.created_at;
      this.updated_at = json.updated_at;
    }
  }

  static toArray(jsons: any[]): User[] {
    const users: User[] = [];
    if (jsons != null) {
      for (const json of jsons) {
        users.push(new User(json));
      }
    }
    return users;
  }

}
