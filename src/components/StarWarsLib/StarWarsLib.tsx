import './StarWarsLib.scss';

export default function StarWarsLib() {
  return (
    <>
      <div className="section" id="section1">
        <h1>Phase 1</h1>
        <div>
          <p>
            This is a project that I've been working on for a few years now. It
            started as a Google Sheet for me to keep track of all the Star Wars
            Canon books that I was reading. The goal was to be able to read
            every new, Canon book and have a place to write out my thoughts and
            ratings to share with my friends. The Sheet worked great, but I
            wanted something that was easier to read and something I would want
            to share with others as well.
          </p>
          <img src="/src/assets/SWLibPhase1.png" className="image-section" />
        </div>
      </div>
      <div className="section" id="section2">
        <h1>Phase 2</h1>
        <div>
          <p>
            Using my experience as an Angular dev, I created a website with the
            main goals being 1) A place to store my Star Wars Book Reviews and
            2) To look really nice. I had been developing using Angular for a
            few years now so I tried to flex my understanding of colors, UI, and
            legibility. Another big focus was to create code that was easy to
            maintain since this would end up being a fairly dynamic site. Using
            Github Pages, I hosted it for my friends to access.
          </p>
        </div>
      </div>
      <div className="section" id="section3">
        <h1>Phase 3</h1>
        <div>
          <p>
            The project expanded to include other rankings that I had made,
            including ranking all 134 episodes of The Clone Wars, 74 episodes of
            Rebels, a Chronological breakdown of each Clone Wars episode, and a
            link to a video editing project that blended together the events of
            Revenge of the Sith and the final 4 episodes of the Clone Wars
            together. This was a fairly large amount of data, and it was
            difficult to maintian. I had looked into online Databases but found
            nothing that would suit my needs for free, so I mocked up a database
            using Typescript and Json. It was neat, but still required code
            changes any time I wanted to modify the data.
          </p>
          <img src="/src/assets/SWLibPhase3.png" className="image-section" />
        </div>
      </div>
      <div className="section" id="section4">
        <h1>Phase 4</h1>
        <div>
          <p>
            I went about 2 years without updating any of my rankings due to how
            arduous it was to make any modifications. Having set up a home
            server environment, I was able to create a Database using MySQL and
            an API using Express.JS. I migrated the data to the database and set
            up the website to read from that API. Now that the data is much
            easier to maintain, I have been keeping my book rankings and
            recommendations updated. This is also when I started hosting the
            site on my own domain, which can be found{' '}
            <a
              href="https://starwarslibrary.jeffapotamous.com/"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <img src="/src/assets/SWLibPhase4.png" className="image-section" />
        </div>
      </div>
    </>
  );
}
