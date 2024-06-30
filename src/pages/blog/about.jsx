import React, { useEffect } from "react";
import headshot from "../../assets/headshot.jpg";
import "../../styles/scss/blog.scss";
import "../../styles/app.css";
import Footer from "../../components/common/footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-col items-center justify-between min-h-full">
      <div className="font-base leading-7 md:leading-8 text-base md:text-lg">
        <div className="w-full md:w-700 space-y-4 pt-32 px-8">
          <h1 className="text-2xl md:text-5xl font-bold">About</h1>
          <p className="italic text-red-400">June 5th, 2022</p>
          <div className="border-b border-red-400"></div>
          {/* Headline */}
          <h2 className="text-2xl font-bold pt-4">Welcome to CozyCampus!</h2>
          <p className="md:text-xl leading-7 md:leading-8 mt-12 italic">
            My name is Andrew Kraus and I enjoy all things tech and design. I
            have learned most of what I know on those subjects from strangers on
            the internet and mostly for free. To return the favor, I've built
            this dark and cozy corner of the web. CozyCampus is meant to be
            educational, is designed for readers, and its content will include
            subjects such as web development, web design, user experience,
            cybescurity, networking, linux, and more. So, grab a cup of coffee
            and get comfy! <i className="fas fa-mug-hot text-gray-700"></i>
          </p>
          <div className="block border-b border-red-400"></div>
          <h2 className="text-2xl font-bold pt-4">About the Writer</h2>
          <p>
            Understanding the intersection of business, people, and technology
            requires a good mix of hard and soft skills and a lot of practice.
            Eighteen years into my career and I've worked in tech as a reseller,
            a network architect, a manufacturer representative, and, most
            recently, a software engineer. My employers have been some of the
            largest and most storied in the business (IBM) to some of the
            smaller/more niche players vying to make their mark (Convr). Like my
            experience, my skills are diverse, but the common threads throughout
            are my desire to problem solve, the satisfaction I get from helping
            others, and, of course, my love of technology. Thanks for stopping
            by!
          </p>
          {/* Contact Details */}
          <div className="flex items-center space-x-4 pt-4 pb-8">
            <img
              src={headshot}
              className="rounded-full h-16 w-16"
              alt="Logo"
            ></img>
            <div className="flex flex-col">
              <h2 className="font-bold ">Andrew Kraus</h2>
              <div className="space-x-2">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/andrewkraus/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-red-400 text-gray-700"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/brokenhoax/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-red-400 text-gray-700"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default About;
