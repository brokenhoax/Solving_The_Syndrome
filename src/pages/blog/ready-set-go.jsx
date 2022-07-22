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
  return (
    <section className="flex flex-col items-center leading-9 text-lg mt-20">
      <div className="w-full md:w-700 space-y-4 px-8">
        <h1 className="self-center text-5xl font-bold">Ready Set Go</h1>
        <p className="italic text-red-400">June 8th, 2022</p>
        <div className="block border-b border-gray-700"></div>
        <p className="text-2xl leading-10 mt-12 italic">
          So, you've dabbled with{" "}
          <span>
            <a
              href="https://create-react-app.dev/docs/getting-started"
              className="px-1 text-red-300 hover:text-red-400"
            >
              create-react-app
            </a>
          </span>{" "}
          and you're ready to build something useful and share it with the
          world. Now what? This post will walk through the following steps:
        </p>
        <ol className="list-decimal pt-2 pb-4 pl-8 font-medium space-y-2 text-xl  text-gray-600">
          <li>
            <HashLink to="/blog/ready-set-go#register">
              Setting up an account on GitHub
            </HashLink>
          </li>
          <li>
            <HashLink to="/blog/ready-set-go#create">
              Creating a GitHub repository
            </HashLink>
          </li>
          <li>
            <HashLink to="/blog/ready-set-go#clone">
              Cloning your Github repository
            </HashLink>
          </li>
          <li>
            <HashLink to="/blog/ready-set-go#push">
              Pushing your changes to Github
            </HashLink>
          </li>
          <li>
            <HashLink to="/blog/ready-set-go#build">
              Creating a production build
            </HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/blog/ready-set-go#deploy">
              Deploying your production build to Github Pages
            </HashLink>
          </li>
        </ol>
        <div className="block border-b border-gray-700"></div>
        <h2 id="register" className="text-3xl pt-2 font-semibold">
          Setting up an account on Github
        </h2>
        <p>
          You need a place to store your code and Github is pretty much the
          defacto code repo on the web. Let's sign up at{""}
          <span className="px-1 text-red-300 hover:text-red-400">
            <a href="https://github.com/signup">Github Signup</a>
          </span>
          and follow the prompts to set up an account.
        </p>
        <h2 id="create" className="text-3xl pt-2 font-semibold">
          Creating a GitHub repository
        </h2>
        <p>
          There should be a green button on your GitHub homepage labeled "New".
          Click it to create a new repository or
          <span className="px-1 text-red-300 hover:text-red-400">
            <a href="https://github.com/new">click here</a>
          </span>
          to save a few keyboard strokes. Give your repository a name and set it
          to "public". No need to bother with any of the other settings for now.
        </p>
        <h2 id="clone" className="text-3xl pt-2 font-semibold">
          Cloning your GitHub repository
        </h2>
        <p>
          You'll want to save your app to your computer and sync it to GitHub.
          So, we'll create a folder for our app and we'll clone our GitHub
          repository to the same folder.
        </p>
        <pre className="pt-24 text-lg prettyprint text-red-400 bg-gray-900 leading-10 rounded-2xl overflow-auto mr-auto">
          {`
    ## Create and access a directory for your app
    mkdir my_app
    cd my_app
    ## Clone your repository
    git clone <your-git-repository>
          `}
        </pre>
        <h2 id="push" className="text-3xl pt-2 font-semibold">
          Make and push your changes to Github
        </h2>
        <p>
          Refer to the{" "}
          <a
            href="https://create-react-app.dev/docs/getting-started"
            className="text-red-300 hover:text-red-400"
          >
            Create React App
          </a>
          &nbsp; tutorial for creating your new React app. Make sure you're
          still in your "my_app" directory when creating your new React
          application. Once you're ready to save your app, just push your code
          to Github and continue on to "Creating a production build".{" "}
        </p>
        <pre className="text-lg prettyprint text-red-400 bg-gray-900 leading-10 rounded-2xl overflow-auto mr-auto">
          {`
  # Stage all of your changes
  git add --all
  # Commit all of your changes and add a message"
  git commit -m "my_app - initial commit"
  # Push your code!
  git push
          `}
        </pre>
        <h2 id="build" className="text-3xl pt-2 font-semibold">
          Creating a production build
        </h2>
        <p>
          The production build is an web optimized version of our app. This is
          the version we'll post to GitHub pages. Production builds improve load
          time which makes for happier users. So run that build and get ready to
          deploy your app.
        </p>
        <pre className="text-lg prettyprint text-red-400 bg-gray-900 leading-10 rounded-2xl overflow-auto mr-auto">
          {`
  # Create your product build
  npm run build
          `}
        </pre>
        <h2 id="deploy" className="text-3xl pt-2 font-semibold">
          Deploying your build to Github Pages
        </h2>
        <p>
          Deploy your app to GitHub pages and check your published site to
          confirm your changes!
        </p>
        <pre className="text-lg prettyprint text-red-400 bg-gray-900 leading-10 rounded-2xl overflow-auto mr-auto">
          {`
  # Deploy your build to gh-pages
  npm run deploy
  😎`}
        </pre>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default ReadySetGo;
