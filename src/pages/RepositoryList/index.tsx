import { useEffect, useState } from "react";
import { Repository } from "../../components/Repository/index";

interface repository {
  name: string;
  description: string;
  html_url: string;
  language: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  }
}

export function RepositoryList() {
  const [repository, setRepository] = useState<repository[]>([]);
  useEffect(() => {
    fetch("https://api.github.com/users/MarceloCChaves/repos")
      .then((response) => response.json())
      .then((data) => setRepository(data));
  }, [repository]);

  return (
    <section>
      <div>
        {repository.map((index) => {
          return (
            <div>
              <Repository
                key={index.name}
                name={index.name}
                html_url={index.html_url}
                description={index.description}
                language={index.language}
                owner={index.owner}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
