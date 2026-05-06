export async function getTotalCommits(username: string): Promise<number> {
  try {
    const res = await fetch(
      `https://api.github.com/search/commits?q=author:${username}`,
      {
        headers: { Accept: "application/vnd.github.cloak-preview+json" },
        next: { revalidate: 3600 },
      }
    );
    const data = await res.json();
    return data.total_count ?? 0;
  } catch {
    return 0;
  }
}