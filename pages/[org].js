import Layout from "../components/Layout";
import Error from "next/error";
import fetch from "isomorphic-unfetch";
import request from "superagent";
import { useRouter } from "next/router";

function Org({
  errorCode,
  login: name,
  avatar_url,
  blog,
  location,
  html_url,
  ...props
}) {
  console.log(props);
  const router = useRouter();
  const { org } = router.query;

  if (errorCode) {
    // return <div>404</div>;
    return <Error statusCode={errorCode} />;
  }

  return (
    <Layout>
      <img src={avatar_url} className="w-32 rounded mb-5" />
      <h1 className="text-2xl font-bold">{name}</h1>

      <ul>
        <li>
          <a className="text-blue-600" href={html_url}>
            Github
          </a>
        </li>
        <li>
          <a className="text-blue-600" href={blog}>
            Website
          </a>
        </li>
      </ul>
    </Layout>
  );
}

Org.getInitialProps = async ctx => {
  console.log(process.env);

  try {
    const res = await request
      .get(`https://api.github.com/orgs/${ctx.query.org}`)
      .set("User-Agent", "Delta")
      .auth("milesalex", process.env.GITHUB_TOKEN);

    if (res.status > 400) {
      return { errorCode: res.status };
    }

    return res.body;
  } catch (err) {
    return {
      errorCode: 404
    };
  }
};

export default Org;
