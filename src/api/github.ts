export interface GitHubUser {
    login: string
    name: string | null
    avatar_url: string
    html_url: string
    bio: string | null
    followers: number
    public_repos: number
    created_at: Date
}

export interface GitHubRepo {
    owner: GitHubUser
    name: string
    description: string | null
    created_at: Date
    html_url: string
    language: string | null
    stargazers_count: number
    forks_count: number
    watchers_count: number
}

export interface GitHubStar{
    full_name: string
    owner: GitHubUser
    html_url: string
    stargazers_count: number
}

export async function getGitHubUser(username: string): Promise<GitHubUser> {
    const res = await fetch("https://api.github.com/users/" + username)
    if (res.status === 404) throw new Error("User not found")
    if (!res.ok) throw new Error("GitHub API error")
    return await res.json()
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
    const res = await fetch("https://api.github.com/users/" + username + "/repos")
    if (!res.ok) throw new Error("GitHub API error")
    return await res.json()
}

export async function getGitHubStars(username: string): Promise<GitHubStar[]> {
    const res = await fetch("https://api.github.com/users/" + username + "/starred")
    if (!res.ok) throw new Error("GitHub API error")
    return await res.json()
}