function Repo({ repo, ...props }) {
  console.log(repo)
  return (
    <div className="border p-3 rounded mb-4">
      <h3 className="font-semibold">{repo.name}</h3>
      <p>{repo.description}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <a href={repo.html_url}>View on GitHub</a>
    </div>
  )
}

Repo.getInitialProps = async (ctx, props) => {
  // console.log(props)
  return { h1: 1 }
}

export default Repo
