export interface GitHubUser {
    login: string
    name: string | null
    avatar_url: string
    bio: string | null
    html_url: string
    followers: number
    public_repos: number
}

export interface GitHubRepo {
    name: string
    full_name: string
    html_url: string
    stargazers_count: number
    watchers_count: number
    language: string | null
    forks_count: number
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