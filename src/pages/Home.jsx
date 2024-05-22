import ProjectCard from "../components/ProjectCard";
import Heading from "../components/typography/Heading";

function Home() {
  return (
    <>
      <header className="mb-16">
        <Heading>Adin Vashi</Heading>
        <div className="">
          <span className="block">Software Engineer</span>
          <span className="block">Writes occasionally</span>
          <span className="block">Lives in NYC</span>
        </div>
      </header>
      <section className="mb-16">
        <h2 className="font-bold text-2xl mb-8 text-neutral-100">Projects</h2>
        <div className="flex flex-col">
          <ProjectCard
            title="Kino"
            subtitle="Hobby project"
            description="Chrome extension to export Kindle highlights to Notion"
            link="/notion"
          />
          <ProjectCard
            title="Audiome"
            subtitle="Co-founder"
            description="A hip-hop data website that allows users to see an artist's guest features or two artists' guest features"
            link="https://audiome.io"
          />
          <ProjectCard
            title="Catalogger"
            subtitle="Hobby project"
            description="A custom tool to help me organize my Spotify playlists while listening"
            link="https://catalogger.xyz"
          />
        </div>
      </section>
      <section className="mb-16">
        <h2 className="font-bold text-2xl mb-8 text-neutral-100">
          Work History
        </h2>
        <div className="mb-8">
          <h3 className="font-bold text-lg text-neutral-100">Loxo</h3>
          <span className="block">2024 - Present</span>
          <br />
          <span className="block">Full-stack Engineer</span>
          <span className="block">
            React, Redux, GraphQL, Ruby on Rails, Postgres, AWS
          </span>
        </div>
        <div className="mb-8">
          <h3 className="font-bold text-lg text-neutral-100">
            Isometric Technologies
          </h3>
          <span className="block">2022 - 2023</span>
          <br />
          <span className="block">Full-stack Engineer</span>
          <span className="block">
            React, Redux, Ruby on Rails, Postgres, AWS
          </span>
        </div>
        <div className="mb-8">
          <h3 className="font-bold text-lg text-neutral-100">Mainvest</h3>
          <span className="block">2021 - 2022</span>
          <br />
          <span className="block">Full-stack Engineer</span>
          <span className="block">Vue, Vuex, Django, Postgres, Heroku</span>
        </div>
      </section>
    </>
  );
}

export default Home;
