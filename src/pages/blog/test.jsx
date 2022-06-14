import React, { useEffect } from "react";
import "../../styles/scss/blog.scss";
import "../../styles/app.css";

const Test = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=js&amp;skin=desert";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="m-64 h-32">
      <div className="h-64 mx-64 overflow-y-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        ullam reprehenderit consequuntur eaque dolor, sequi nihil quia iste
        labore, molestias neque. Vero exercitationem similique tenetur commodi
        in assumenda blanditiis totam quas quae iure ratione error nobis, maxime
        ipsa omnis nisi molestias sit est quos asperiores nihil. Dolore, ipsum.
        Voluptas numquam, dolore earum sequi impedit blanditiis tempora
        exercitationem laborum corporis voluptatum nisi totam nulla ipsum maxime
        amet voluptates cum cupiditate dignissimos deserunt repudiandae ea.
        Blanditiis non consequuntur optio necessitatibus id, fuga earum
        repudiandae repellendus facilis fugit vitae molestiae officia provident,
        dolorum, rerum tenetur magnam ratione unde nesciunt iusto quos dolore.
        Eaque soluta optio vel fugiat dolores, eum ipsa, numquam facilis rerum
        illum nemo ad quis. Nam ipsa possimus magnam consequatur, cum molestias
        explicabo amet pariatur nesciunt tempora cupiditate corrupti id iure,
        cumque quaerat facere quasi placeat! Culpa ut consequuntur nostrum modi!
        Ab dolore quam rerum, non commodi at autem dolorem impedit voluptas.
      </div>
    </div>
  );
};

export default Test;
