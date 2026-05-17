export async function getGithubStats(username: string) {
  try {
    const [userRes, contributionsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        next: { revalidate: 3600 },
      }),
      fetch(`https://github-contributions-api.jogruber.de/v4/${username}`, {
        next: { revalidate: 3600 },
      }),
    ]);

    const user = await userRes.json();
    const contributions = await contributionsRes.json();

    return {
      followers: user.followers ?? 0,
      public_repos: user.public_repos ?? 0,
      contributions: contributions.contributions ?? [],
      total: contributions.total ?? {},
    };
  } catch {
    return {
      followers: 0,
      public_repos: 0,
      contributions: [],
      total: {},
    };
  }
}