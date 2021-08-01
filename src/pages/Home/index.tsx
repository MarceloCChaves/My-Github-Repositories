import { useEffect, useState } from "react";

interface GithubProps {
  login: string;
  location: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
}

export function Home(props: GithubProps) {
  const [userInfo, setUserInfo] = useState<GithubProps[]>([]);
  useEffect(() => {
    fetch("https://api.github.com/users/MarceloCChaves")
      .then((response) => response.json())
      .then((data) => setUserInfo(data));
  }, [userInfo]);

  return (
    <div>
      <section key={props.login}>
        <h1>{props.login}</h1>
      </section>
    </div>
  );
}
