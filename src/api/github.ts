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
        author: {
            date: Date
        }
    }
    author: {
        login: string
        avatar_url: string
    }
    html_url: string
}

export interface GitHubRepoContent {
    path: string
    html_url: string
    type: string
}

export async function getGitHubUser(owner: string): Promise<GitHubUser> {
    const res = await fetch("https://api.github.com/users/" + owner)
    if (res.status === 404) throw new Error("User not found")
    if (!res.ok) throw new Error("GitHub API error")
    return await res.json()
}

export async function getGitHubRepos(owner: string): Promise<GitHubRepo[]> {
    const res = await fetch("https://api.github.com/users/" + owner + "/repos")
    if (!res.ok) throw new Error("GitHub API error")
    return await res.json()
}

export async function getGitHubStars(owner: string): Promise<GitHubRepo[]> {
    const res = await fetch("https://api.github.com/users/" + owner + "/starred")
    if (!res.ok) throw new Error("GitHub API error")
    return await res.json()
}

export async function getGitHubPopular(): Promise<GitHubRepo[]> {
    const page = Math.floor(Math.random() * 10) + 1
    const res = await fetch("https://api.github.com/search/repositories?q=stars:>10000&sort=stars&order=desc&per_page=100&page=" + page)
    if (!res.ok) throw new Error("GitHub API error")
    const data: { items: GitHubRepo[] } = await res.json()
    return data.items
}

export async function getGitHubForks(): Promise<GitHubRepo[]> {
    const day = Math.floor(Date.now() / 86400000)
    const page = (day % 10) + 1
    const res = await fetch("https://api.github.com/search/repositories?q=forks:>1000&sort=forks&order=desc&per_page=10&page=" + page)
    if (!res.ok) throw new Error("GitHub API error")
    const data: { items: GitHubRepo[] } = await res.json()
    return data.items
}

export async function getGitHubRepo(owner: string, repo: string): Promise<GitHubRepo> {
    const res = await fetch("https://api.github.com/repos/" + owner + "/" + repo)
    if (res.status === 404) throw new Error("User not found")
    if (!res.ok) throw new Error("GitHub API error")
    return await res.json()
}

export async function getGitHubCommitCount(owner: string, repo: string) : Promise<number> {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
    if (!res.ok) throw new Error("GitHub API error")

    const link = res.headers.get("Link")
    if (!link) return 1 // no pagination = only 1 commit

    const match = link.match(/page=(\d+)>; rel="last"/)
    return match ? parseInt(match[1], 10) : 1
}

export async function getGitHubCommits(owner: string, repo: string): Promise<GitHubRepoCommit[]> {
    const res = await fetch("https://api.github.com/repos/" + owner + "/" + repo  + "/commits")
    if (!res.ok) throw new Error("GitHub API error")
    return await res.json() // return direct array
}

export async function getGitHubContents(owner: string, repo: string): Promise<GitHubRepoContent[]> {
    const res = await fetch("https://api.github.com/repos/" + owner + "/" + repo  + "/contents")
    if (!res.ok) throw new Error("GitHub API error")
    return await res.json()
}

export async function getGitHubReadme(owner: string, repo: string): Promise<string> {
    const res = await fetch("https://api.github.com/repos/" + owner + "/" + repo + "/readme")
    if (!res.ok) throw new Error("GitHub API error")
    const data = await res.json()
    return atob(data.content)
}