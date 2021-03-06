import Head from 'next/head';

const Home = () => (
  <div className="container">
    <Head>
      <title>Meet Isaac, the developer</title>
      <link rel="icon" href="/profile-img.jpeg" />
    </Head>

    <main>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQEL2C1SjNWfrw/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=hrTiSHxZp5c-EVWo25ocbL-_MkvSx4CNg8uTwPpblZg"
        alt="profile"
      />
      <h1>ISAAC FRIMPONG GYAMFI</h1>
      <hr />
      <p>Full Stack Web developer | BSc. Computer Science</p>
    </main>

    <footer>
      <div className="card">
        <p>Connect on LinkedIn</p>
        <a href="https://linkedin.com/in/isaacgyamfi8">isaacgyamfi8</a>
      </div>
      <div className="card">
        <p>Follow me on GitHub</p>
        <a href="https://github.com/isaacgyamfi">isaacgyamfi</a>
      </div>
      <div className="card">
        <p>Become my friend on Facebook</p>
        <a href="https://facebook.com/bohyeba.isaac.7">bohyeba.isaac.7</a>
      </div>
      <div className="card">
        <p>Follow me on Twitter</p>
        <a href="https://twitter.com/gyamisaac">gyamisaac</a>
      </div>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        border-top: 1px solid #eaeaea;
        display: flex;
        flex-direction: row
        justify-content: center;
        align-items: center;
      }

      img {
        height: 150px;
        width: 150px;
        border-radius: 75px
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
