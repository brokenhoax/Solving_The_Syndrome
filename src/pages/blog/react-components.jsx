import React, { useEffect } from "react";
import "../../styles/scss/blog.scss";
import "../../styles/app.css";
import kungfoo from "../../assets/images/kung-foo.jpg";
import Footer from "../../components/common/footer";

const IKnowKungFoo = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=js&amp;skin=desert";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <section className="flex flex-col items-center mt-20">
      <div className="w-full md:w-700 px-8">
        <h1 className="self-center text-5xl font-bold mb-2">I Know Kung Foo</h1>
        <h2 className="italic text-red-400">March 5th, 2021</h2>
        <p className="text-xl my-8 leading-10 mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eum
          voluptatem commodi. Assumenda voluptatum autem explicabo, cupiditate
          nemo esse ex rem voluptates beatae ullam qui magni dignissimos totam
          eius enim est illum numquam repellat molestiae doloremque alias
          sapiente obcaecati? Alias laboriosam cupiditate sint mollitia aliquam?
          Qui ipsa inventore ex reiciendis.
        </p>
        <div className="flex flex-col items-center">
          <img
            src={kungfoo}
            alt="Application"
            className="w-3/5 rounded-lg"
          ></img>
        </div>
        <p className="text-xl my-8 leading-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae
          deleniti nemo corporis magnam provident voluptas aspernatur laborum
          veniam maxime mollitia harum pariatur sint, doloribus blanditiis,
          libero et voluptate. Consequatur corporis delectus amet, sint odio
          consequuntur quia quo exercitationem esse totam pariatur neque iusto
          eum unde harum aspernatur distinctio non.
        </p>
        <p className="text-xl my-8 leading-10">
          Fast-forward to 2021, and
          <a href="https://neuralink.com/" className="text-red-400">
            {" "}
            we're getting closer to making that a reality.
          </a>{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quis
          deleniti illum est optio voluptas eius explicabo nisi dolorum tempore
          ipsa, deserunt quod quo, magnam consectetur adipisci veniam eum. Sint,
          possimus incidunt. Repudiandae, nostrum aliquam. Inventore in culpa
          quibusdam esse a excepturi quasi, rerum eum at, fugiat quas eligendi
          autem quidem dolores porro dignissimos ipsa impedit fugit cumque.
          Esse, vero?
        </p>
        <p className="text-xl my-8 leading-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ipsum
          magnam minima illum. In id nemo earum quis culpa dolor minima quia.
          Esse laboriosam accusantium quisquam eveniet dolorum exercitationem
          officiis illum, ab consectetur non. Minus minima nihil magni, debitis
          iure aliquid itaque eligendi ratione ab beatae porro ducimus fuga
          dolores.
        </p>
        <div className="flex flex-col items-center">
          <pre className="w-full text-sm prettyprint text-red-400 bg-gray-900 leading-10 rounded-lg overflow-auto">
            {`
    function life() {
        let chance = Math.floor(Math.random() * 10) + 1;
        if ( chance > 5 ) {
          return console.log ("You live!") 
        } else {
          return console.log ("You die!")
        }
    }
              `}
          </pre>
        </div>
        <p className="text-xl my-8 leading-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequuntur, cum soluta nostrum sequi neque laborum esse ad libero
          placeat aliquam hic nesciunt omnis assumenda ab autem aliquid nulla
          eveniet unde itaque repellendus vel iste reprehenderit? Perspiciatis
          eum vero eaque fugit, quidem reiciendis iste, harum nobis error soluta
          totam odio assumenda voluptatum ullam qui. Dolorem quos esse suscipit
          aut excepturi aliquid?
        </p>
        <p className="text-xl my-8 leading-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          perspiciatis rem odio ad delectus, dolore repellat dolores autem
          exercitationem facilis reiciendis ratione, debitis eligendi doloremque
          mollitia pariatur dignissimos doloribus. Libero ut eligendi facere
          odit eos eaque labore tenetur fugit vel soluta id nostrum quis,
          tempore cum deleniti! Vel ipsa quos quaerat veniam molestiae quam!
          Iusto numquam adipisci ea nesciunt quaerat minus non aperiam, in ipsum
          ullam, praesentium harum illum veniam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatem nihil facere maxime
          distinctio impedit, officiis dolor excepturi ab placeat ad!
        </p>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default IKnowKungFoo;
