export class User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;

  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  hireable?: string;
  bio?: string;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  created_at?: string;
  updated_at?: string;
  constructor(json?: any) {
    if (json != null) {
      this.login = json.login;
      this.id = json.id;
      this.node_id = json.node_id;
      this.avatar_url = json.avatar_url;
      this.gravatar_id = json.gravatar_id;
      this.url = json.url;
      this.html_url = json.html_url;
      this.followers_url = json.followers_url;
      this.following_url = json.following_url;
      this.gists_url = json.gists_url;
      this.starred_url = json.starred_url;
      this.subscriptions_url = json.subscriptions_url;
      this.organizations_url = json.organizations_url;
      this.repos_url = json.repos_url;
      this.events_url = json.events_url;
      this.received_events_url = json.received_events_url;
      this.type = json.type;
      this.site_admin = json.site_admin;
      this.name = json.name;
      this.company = json.company;
      this.blog = json.blog;
      this.location = json.location;
      this.email = json.email;
      this.hireable = json.hireable;
      this.bio = json.bio;
      this.public_repos = json.public_repos;
      this.public_gists = json.public_gists;
      this.followers = json.followers;
      this.following = json.following;
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
