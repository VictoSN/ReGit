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
    full_name: string
    description: string | null
    created_at: Date
    html_url: string
    language: string | null
    stargazers_count: number
    forks_count: number
    watchers_count: number
    license: {
        spdx_id: string
    } | null
    contents_url: string | null
}

export interface GitHubRepoCommit {
    sha: string
    commit: {
        message: string
        date: Date
    }
    author: {
        login: string
        avatar_url: string
    }
    html_url: string
}

export interface GitHubRepoContent {
    name: string
    path: string
    html_url: string
    type: string
}

export interface GitHubRepoContentDetails {
    commit: {
        author: {
            date: string
        }
        message: string
    }
    html_url: string
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

export async function getGitHubStars(username: string): Promise<GitHubRepo[]> {
    const res = await fetch("https://api.github.com/users/" + username + "/starred")
    if (!res.ok) throw new Error("GitHub API error")
    return await res.json()
}

export async function getGitHubPopular(): Promise<GitHubRepo[]> {
    const res = await fetch("https://api.github.com/search/repositories?q=stars:>100000&sort=stars&order=desc&per_page=100")
    if (!res.ok) throw new Error("GitHub API error")
    const data: { items: GitHubRepo[] } = await res.json()
    return data.items
}

export async function getGitHubFork(): Promise<GitHubRepo[]> {
    const res = await fetch("https://api.github.com/search/repositories?q=stars:>100000&sort=forks&order=desc&per_page=10")
    if (!res.ok) throw new Error("GitHub API error")
    const data: { items: GitHubRepo[] } = await res.json()
    return data.items
}

function parseGitHubUrl(url: string) {
    const [owner, repo] = new URL(url).pathname.split("/").filter(Boolean)
    return { owner, repo }
}

export async function getGitHubRepo(url: string): Promise<GitHubRepo> {
    const { owner, repo } = parseGitHubUrl(url)
    const res = await fetch("https://api.github.com/repos/" + owner + "/" + repo)
    if (res.status === 404) throw new Error("User not found")
    if (!res.ok) throw new Error("GitHub API error")
    return await res.json()
}