import React, { useEffect } from "react";
import headshot from "../../assets/headshot.jpg";
import "../../styles/scss/blog.scss";
import "../../styles/app.css";
import Footer from "../../components/common/footer";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="flex flex-col items-center justify-center mt-20 overflow-hidden">
      <div className="w-full md:w-700 px-8">
        <h1 className="self-center text-5xl font-bold mb-2">About Me</h1>
        <h2 className="italic text-red-400">June 5th, 2022</h2>
        <p className="text-xl my-8 leading-10">
          In my professional experience, understanding the big picture (the
          intersection of business, people, and technology) requires a good mix
          of hard and soft skills and a lot of practice. Fifteen years into my
          career and I’ve worked as a reseller, a network architect, a
          manufacturer representative, and, most recently, a software engineer.
          My employers have been some of the largest and most storied in the
          business (IBM) to some of the smaller/more niche players vying to make
          their mark (Convr). Like my experience, my skills are diverse, but the
          common threads throughout are my desire to problem solve, the
          satisfaction I get from helping others, and, of course, my love of
          technology!
        </p>
        <p className="text-xl my-8 leading-10">
          More recently (in 2019), while working for IBM Security, I embarked on
          a 6-month Web Development bootcamp with Northwestern University. Truth
          be told, I had originally enrolled in their cybersecurity bootcamp so
          as to build on top of my past networking and security training, but I
          thought, “before you know how to break an app, it couldn’t hurt to
          know how to build one”. I took a chance, signed up, and was hooked.
        </p>
        <p className="text-xl my-8 leading-10">
          Gaining developer experience was a game changer. At 36 years old, and
          on the verge of starting a family, I had difficult decision to make. I
          could continue my established path with IBM Security, accept an offer
          for field engineer with Netskope, or do something completely different
          from what I had done in the past by accepting a front-end web
          developer position with a startup out of Schaumburg, IL. I took the
          latter and turned a 3-month internship into a full-time job as a
          professional software engineer eventually leading Convr’s front-end
          developer team.
        </p>
        <p className="text-xl my-8 leading-10">
          While I’m extremely proud of and thankful for my experience at Convr,
          I’m excited to take on new experiences. I’m interested in working
          different technologies (e.g., other JavaScript frameworks like React
          and Vue), meeting interesting and passionate people, and solving new
          and challenging problems. While I enjoy all things code, I prefer
          front-end development and design, though, if the right opportunity
          presents itself, I’m all ears.
        </p>
        <div className="inline-flex items-center w-full pb-6">
          <img src={headshot} className="rounded-full h-16 w-16" alt="Logo"></img>
          {/* Contact Details */}
          <div className="ml-4 font-semibold text-base">
            <div className="flex flex-col">
              <div className="font-bold text-2xl">Andrew Kraus</div>
              <a
                href="https://www.linkedin.com/in/andrewkraus/"
                className="hover:text-red-400"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/brokenhoax/"
                className="hover:text-red-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default About;
