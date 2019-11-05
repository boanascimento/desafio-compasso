import { User } from './user.module'

export class Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: User;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: string;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  constructor(json?: any) {
    if (json != null) {
      this.id = json.id;
      this.node_id = json.node_id;
      this.name = json.name;
      this.full_name = json.full_name;
      this.private = json.private;
      this.owner = json.owner;
      this.html_url = json.html_url;
      this.description = json.description;
      this.fork = json.fork;
      this.url = json.url;
      this.forks_url = json.forks_url;
      this.keys_url = json.keys_url;
      this.collaborators_url = json.collaborators_url;
      this.teams_url = json.teams_url;
      this.hooks_url = json.hooks_url;
      this.issue_events_url = json.issue_events_url;
      this.events_url = json.events_url;
      this.assignees_url = json.assignees_url;
      this.branches_url = json.branches_url;
      this.tags_url = json.tags_url;
      this.blobs_url = json.blobs_url;
      this.git_tags_url = json.git_tags_url;
      this.git_refs_url = json.git_refs_url;
      this.trees_url = json.trees_url;
      this.statuses_url = json.statuses_url;
      this.languages_url = json.languages_url;
      this.stargazers_url = json.stargazers_url;
      this.contributors_url = json.contributors_url;
      this.subscribers_url = json.subscribers_url;
      this.subscription_url = json.subscription_url;
      this.commits_url = json.commits_url;
      this.git_commits_url = json.git_commits_url;
      this.comments_url = json.comments_url;
      this.issue_comment_url = json.issue_comment_url;
      this.contents_url = json.contents_url;
      this.compare_url = json.compare_url;
      this.merges_url = json.merges_url;
      this.archive_url = json.archive_url;
      this.downloads_url = json.downloads_url;
      this.issues_url = json.issues_url;
      this.pulls_url = json.pulls_url;
      this.milestones_url = json.milestones_url;
      this.notifications_url = json.notifications_url;
      this.labels_url = json.labels_url;
      this.releases_url = json.releases_url;
      this.deployments_url = json.deployments_url;
      this.created_at = json.created_at;
      this.updated_at = json.updated_at;
      this.pushed_at = json.pushed_at;
      this.git_url = json.git_url;
      this.ssh_url = json.ssh_url;
      this.clone_url = json.clone_url;
      this.svn_url = json.svn_url;
      this.homepage = json.homepage;
      this.size = json.size;
      this.stargazers_count = json.stargazers_count;
      this.watchers_count = json.watchers_count;
      this.language = json.language;
      this.has_issues = json.has_issues;
      this.has_projects = json.has_projects;
      this.has_downloads = json.has_downloads;
      this.has_wiki = json.has_wiki;
      this.has_pages = json.has_pages;
      this.forks_count = json.forks_count;
      this.mirror_url = json.mirror_url;
      this.archived = json.archived;
      this.disabled = json.disabled;
      this.open_issues_count = json.open_issues_count;
      this.license = json.license;
      this.forks = json.forks;
      this.open_issues = json.open_issues;
      this.watchers = json.watchers;
      this.default_branch = json.default_branch;
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
