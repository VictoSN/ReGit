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
    name: string
    full_name: string
    description: string | null
    created_at: Date
    html_url: string
    language: string | null
    stargazers_count: number
    forks_count: number
    watchers_count: number
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