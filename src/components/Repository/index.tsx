import "../../css/RepositoryList.css";

interface GithubProps {
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

export function Repository(props: GithubProps) {
  return (
    <li className="repository-list">
      <div className="repository">
        <div className="title">
          <strong className="repository-title">Repositório: {props.name.replaceAll("-", " ")}</strong>
            <a className="link-to-profile" href={props.owner.html_url} target="_blank" rel="noreferrer">
            <img src={props.owner.avatar_url} alt={props.name} title={props.owner.login}/>
          </a>
        </div>
        <p>Descrição: {props.description ? props.description : "Sem descrição"}</p>
        <p>Linguagem: <strong className={props.language === "HTML" ? "html" : ""}>{props.language}</strong></p>
        <a target="_blank" rel="noreferrer" href={props.html_url}>
          Acessar repositório
        </a>
      </div>
    </li>
  );
}
