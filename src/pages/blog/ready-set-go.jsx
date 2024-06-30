import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "../../styles/scss/blog.scss";
import "../../styles/app.css";
import Footer from "../../components/common/footer";

const ReadySetGo = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=bsh&amp;skin=desert";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-col items-center font-base leading-7 md:leading-8 text-base md:text-lg pt-32">
      <div className="w-full md:w-700 space-y-4 px-8 pb-16">
        {/* Title */}
        <h1 id="top" className="self-center text-2xl md:text-5xl font-bold">
          Ready Set Go
        </h1>
        <p className="italic text-red-400">June 8th, 2022</p>
        <div className="border-b border-red-400"></div>
        {/* Headline */}
        <p className="md:text-xl leading-7 md:leading-8 mt-12 italic">
          So, you've dabbled with
          <span>
            <a
              href="https://create-react-app.dev/docs/getting-started"
              className="px-1 text-red-400 hover:text-red-300"
            >
              create-react-app
            </a>
          </span>
          and you're ready to build and share something amazing with the world.
          Now what? This post will walk you through creating a GitHub repository
          to manage and back up your application as well as using GitHub Pages
          to publish your app to the web.
        </p>
        <div className="block border-b border-red-400"></div>
        {/* Table of Contents */}
        <h2 className="text-xl md:text-3xl font-semibold pt-2">
          Table of Contents
        </h2>
        <ol className="list-decimal pb-2 pl-8 space-y-2 md:text-xl font-medium">
          <li>
            <HashLink
              className="text-red-400 hover:text-red-300"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
              to="/Solving_The_Syndrome/blog/ready-set-go#register"
            >
              Create a GitHub Account
            </HashLink>
          </li>
          <li>
            <HashLink
              className="text-red-400 hover:text-red-300"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
              to="/Solving_The_Syndrome/blog/ready-set-go#create"
            >
              Create a GitHub Repository
            </HashLink>
          </li>
          <li>
            <HashLink
              className="text-red-400 hover:text-red-300"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
              to="/Solving_The_Syndrome/blog/ready-set-go#clone"
            >
              Clone Your GitHub Repository
            </HashLink>
          </li>
          <li>
            <HashLink
              className="text-red-400 hover:text-red-300"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
              to="/Solving_The_Syndrome/blog/ready-set-go#push"
            >
              Push Your Code to GitHub
            </HashLink>
          </li>
          <li>
            <HashLink
              className="text-red-400 hover:text-red-300"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
              to="/Solving_The_Syndrome/blog/ready-set-go#build"
            >
              Create a Production Build
            </HashLink>
          </li>
          <li>
            {" "}
            <HashLink
              className="text-red-400 hover:text-red-300"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
              to="/Solving_The_Syndrome/blog/ready-set-go#publish"
            >
              Publish Your App to GitHub Pages
            </HashLink>
          </li>
          <li>
            {" "}
            <HashLink
              className="text-red-400 hover:text-red-300"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
              to="/Solving_The_Syndrome/blog/ready-set-go#deploy"
            >
              Deploy Your Build to GitHub Pages
            </HashLink>
          </li>
        </ol>
        <div className="border-b border-red-400"></div>
        {/* Create a GitHub Account */}
        <div className="flex items-center justify-start">
          <h2 id="register" className="text-xl md:text-3xl pt-4 font-semibold">
            Create a GitHub Account
            <span>
              <HashLink smooth to="#top">
                <span className="text-xl md:text-3xl pl-2 text-red-400 hover:text-red-300">
                  #
                </span>
              </HashLink>
            </span>
          </h2>
        </div>
        <p>
          You need a place to store your code and GitHub is pretty much the
          defacto code repository on the web. You'll use the git version control
          system to manage your code repositories—repositories which you'll
          store in GitHub. Let's sign up at{""}
          <span className="px-1 text-red-400 hover:text-red-300">
            <a href="https://github.com/signup">GitHub Signup</a>
          </span>
          and follow the steps to set up an account.
        </p>
        {/* Create a GitHub Repository */}
        <div className="flex items-center justify-start">
          <h2 id="create" className="text-xl md:text-3xl pt-4 font-semibold">
            Create a GitHub Repository
            <HashLink smooth to="#top">
              <span className="text-xl md:text-3xl pl-2 text-red-400">#</span>
            </HashLink>
          </h2>
        </div>
        <p>
          Let's create our first GitHub repository! There should be a green
          button on your GitHub homepage labeled "New". Click it to create a new
          repository or
          <span className="px-1 text-red-400 hover:text-red-300">
            <a href="https://github.com/new">click here</a>
          </span>
          to save a few keyboard strokes. Give your repository a name and set it
          to "public". No need to bother with any of the other settings for now.
        </p>
        {/* Clone Your GitHub Repository */}
        <div className="flex items-center justify-start">
          <h2 id="clone" className="text-xl md:text-3xl pt-4 font-semibold">
            Clone Your GitHub Repository
            <HashLink smooth to="#top">
              <span className="text-xl md:text-3xl pl-2 text-red-400">#</span>
            </HashLink>
          </h2>
        </div>
        <p>
          You'll want to save your app to your computer and sync it to GitHub.
          So, we'll create a folder for our app and we'll clone our GitHub
          repository to the same folder.
        </p>
        <p>
          To clone your repository, go to your repository on GitHub and, on the
          "Code" page there's a green "Code" button. Clicking it will present a
          dropdown menu with a "copy to clipboard" button for your repository's
          GitHub URL. We'll use this URL, along with the "git clone" command, to
          clone our repository locally so we can develop our changes locally
          using all of the wonderful capabilities provided by a version control
          system known as git. To learn more about git, check out their{" "}
          <span className="px-1 text-red-400 hover:text-red-300">
            <a href="https://git-scm.com/">documentation.</a>
          </span>
        </p>
        <pre className="pt-24 text-xs md:text-lg prettyprint text-red-400 bg-gray-700 leading-8 rounded-2xl overflow-auto mr-auto">
          {`
    ## Create and access a directory for your app
    mkdir my_app
    cd my_app
    ## Clone your repository
    git clone <your-git-repository>
          `}
        </pre>
        {/* Push Your Code to GitHub */}
        <div className="flex items-center justify-start">
          <h2 id="push" className="text-xl md:text-3xl pt-4 font-semibold">
            Push Your Code to GitHub
            <HashLink smooth to="#top">
              <span className="text-xl md:text-3xl pl-2 text-red-400">#</span>
            </HashLink>
          </h2>
        </div>
        <p>
          Refer to the{" "}
          <a
            href="https://create-react-app.dev/docs/getting-started"
            className="text-red-400 hover:text-red-300"
          >
            Create React App
          </a>{" "}
          tutorial for creating your new React app. Make sure you're still in
          your "my_app" directory when creating your new React application. Once
          you're ready to save your changes, save them locally and then push
          your code to GitHub. See below for example code you can use to stage,
          commit, and push your changes to GitHub.
        </p>
        <pre className="text-xs md:text-lg prettyprint text-red-400 bg-gray-700 leading-8 rounded-2xl overflow-auto mr-auto">
          {`
  # Stage all of your changes
  git add --all
  # Commit all of your changes and add a message"
  git commit -m "my_app - initial commit"
  # Push your code!
  git push
          `}
        </pre>
        {/* Create a Production Build */}
        <div className="flex items-center justify-start">
          <h2 id="build" className="text-xl md:text-3xl pt-4 font-semibold">
            Create a Production Build
            <HashLink smooth to="#top">
              <span className="text-xl md:text-3xl pl-2 text-red-400">#</span>
            </HashLink>
          </h2>
        </div>
        <p>
          The production build is an web optimized version of our app. This is
          the version we'll post to GitHub Pages. Production builds improve load
          time which makes for happier users. So run that build and get ready to
          deploy your app.
        </p>
        <pre className="text-xs md:text-lg prettyprint text-red-400 bg-gray-700 leading-8 rounded-2xl overflow-auto mr-auto">
          {`
  # Create your product build
  npm run build
          `}
        </pre>
        {/* Publish Your App to GitHub Pages */}
        <div className="flex items-center justify-start">
          <h2 id="publish" className="text-xl md:text-3xl pt-4 font-semibold">
            Publish Your App to GitHub Pages
            <HashLink smooth to="#top">
              <span className="text-xl md:text-3xl pl-2 text-red-400">#</span>
            </HashLink>
          </h2>
        </div>
        <p>
          For a more in-depth understanding of GitHub Pages,{" "}
          <span className="px-1 text-red-400 hover:text-red-300">
            <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site">
              please read the documentation,
            </a>
          </span>
          but if you're looking for the TL;DR, then you should know that
          deploying your application from a GitHub repository to GitHub Pages
          is, as you should expect, very easy. Simply go to "Settings" and
          "Pages" page, select "Deploy from a branch" as your "Source" and pick
          a branch from the "Branch" dropdown which will be used to build your
          application.
        </p>
        {/* Deploy Your Build to GitHub Pages */}
        <div className="flex items-center justify-start">
          <h2 id="deploy" className="text-xl md:text-3xl pt-4 font-semibold">
            Deploy Your Build to GitHub Pages
            <HashLink smooth to="#top">
              <span className="text-xl md:text-3xl pl-2 text-red-400">#</span>
            </HashLink>
          </h2>
        </div>
        <p>
          From here on out, to deploy your changes to GitHub Pages, just follow
          the previous steps (i.e., stage, commit, push, build) and if you'd
          like to publish updates to your GitHub Pages page from the comfort of
          your terminal, just install the NPM package called
          <span className="px-1 text-red-400 hover:text-red-300">
            <a href="https://www.npmjs.com/package/gh-pages#command-line-utility">
              gh-pages
            </a>
          </span>
          and set up a package.json "deploy" script to push your code to your
          GitHub Pages page as is illustrated below. Godspeed!
        </p>
        <pre className="text-xs md:text-lg prettyprint text-red-400 bg-gray-700 leading-8 rounded-2xl overflow-auto mr-auto">
          {`
      # Deploy your build to gh-pages
      npm run deploy
      😎
          `}
        </pre>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default ReadySetGo;
