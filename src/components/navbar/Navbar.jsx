import React, { useState, createContext } from 'react';
import "../../styles/app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

export const NavbarContext = createContext();


const Navbar = () => {

  const [navvy, setNavvy] = useState(
    {
      isActive: false,
    }
  )
  


  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact Us",
      path: "/contact-us",
    },
    {
      title: "Login",
      path: "/login",
    },
  ];

    function setNavbarstatus() {
      if (navvy.isActive) {
        setNavvy({isActive: false})
      } else {
        setNavvy({isActive: true});
      }
    }

  return (
    <div>
      <div className="bg-gray-900 text-gray-400 max-w-full flex items-center justify-between">
        <img className="h-8 m-4" src={logo} alt="Logo"></img>
        <div className="font-plex font-bold px-4 md:text-xl lg:text-2xl">
          A Blog About Learning To Code
        </div>
        <button  
          onClick={() => {setNavbarstatus()}}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
        <div className={`${navvy.isActive}` ? `${"hide"}` : `${"font-plex block bg-gray-900 font-semibold p-4"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vel nam tempore quaerat ducimus, in voluptate beatae sunt deleniti numquam quasi non atque sequi a incidunt id officia voluptatem pariatur omnis ratione sit totam inventore quo magni. Rem eligendi harum officiis omnis est illo vel, consequatur consectetur ea facilis quaerat nostrum. Provident perspiciatis repudiandae quibusdam doloremque excepturi corrupti autem illo eos voluptate id molestiae, expedita et sapiente laborum recusandae maxime, illum fuga molestias libero enim culpa. Ut omnis sit officia velit blanditiis consectetur dolores in fugiat. Eveniet sunt debitis fugiat at facilis pariatur assumenda cumque possimus numquam qui suscipit illum optio, voluptas nobis maiores autem magni rem asperiores provident rerum commodi? Similique exercitationem in magnam molestiae labore provident, nam quas repellendus esse laudantium rem pariatur natus praesentium at adipisci, reiciendis beatae! Natus itaque accusantium alias nisi, libero laudantium qui dolore vel tempore nobis in, saepe possimus impedit maiores id voluptate ut perspiciatis atque? Commodi, officiis facere voluptas dignissimos error reiciendis odio hic doloremque? Quam est mollitia assumenda necessitatibus, magnam officiis architecto optio nam, illo eius in adipisci incidunt. Sapiente, deleniti incidunt non soluta esse illum. Ex, ut facere eaque fugit voluptas optio vero quam cumque molestias in laboriosam voluptate accusantium. Sit magni est nemo, aut deleniti fuga vel tempora. Natus culpa accusantium inventore nihil a ipsam nam quis tenetur magnam eius! Minus mollitia totam asperiores, vitae maiores incidunt deleniti delectus laborum! Nobis dolor nam molestias suscipit amet, odio sequi quia exercitationem assumenda ab placeat sunt cum quod repellat dolore dolores quaerat sit. Doloribus voluptas itaque eveniet ut unde qui minus officia facilis, accusamus modi aliquam alias distinctio a cum dignissimos dolorem repellat reiciendis, quo quia ab eius? Voluptates sed, voluptas ea recusandae tempore quia repellat eum quaerat vitae architecto veniam aliquam? Officiis temporibus hic voluptas velit quisquam quod, fugiat a doloribus repellat vero voluptatem natus quas, aliquid tempore et nisi molestias quae commodi officia minus neque eum corporis voluptatibus! Officiis itaque illo facilis optio maiores, non vero velit ipsum sapiente quod. Unde autem, voluptatem tempora rem cumque delectus illum explicabo nihil nisi rerum beatae, possimus perferendis. Id dolorem delectus nihil expedita accusamus eveniet corporis? Maiores saepe repudiandae iusto veniam possimus nemo aliquam deserunt, exercitationem itaque illum quo nihil corrupti nisi a, veritatis incidunt non eius! Alias consequuntur ut nihil velit amet accusantium rerum magni libero impedit? Aspernatur fuga quam nisi possimus? Itaque dolor molestiae enim molestias autem minima sed ipsa minus perspiciatis, similique iusto eveniet, fugiat animi dolores tempora error provident facere! Temporibus, fugit voluptatum error totam recusandae, eligendi quam nobis quae voluptas deleniti molestiae beatae et praesentium obcaecati non est, repellat distinctio ratione cum. Obcaecati nemo odio eius! Commodi voluptatibus accusantium vel. Pariatur possimus recusandae numquam commodi unde repellendus consequatur alias laboriosam ipsam adipisci deleniti fuga dolore eligendi rem quaerat molestiae quam architecto ea quasi iusto, nisi in! Voluptatum accusantium eveniet ducimus assumenda beatae similique omnis quibusdam rem illum optio aut velit ut facere, perspiciatis nemo dolores quo, deserunt obcaecati reprehenderit ullam eum? Repellendus eius vel soluta corporis quod totam non tempora aspernatur delectus, dolorem nobis sit aliquid quam. Distinctio voluptates, adipisci totam, eligendi, error consectetur illum maxime alias quis earum tempore at dolor. Odio reiciendis ut deleniti expedita iure atque, ex voluptatum doloremque? Est dolorum recusandae deleniti commodi dolorem numquam, cupiditate itaque non aut reiciendis sit et fugiat! Fugit vitae tempore commodi quis delectus modi provident eaque explicabo omnis sit quaerat iusto sint repellat libero placeat perspiciatis nemo, dicta magnam minus? Fugiat eos molestiae est eius obcaecati voluptatum tenetur architecto, dolore labore blanditiis ipsum similique aspernatur? Dolorum quo mollitia tempore error dolore, delectus eveniet iste laboriosam officiis qui.
      </div>
    </div>
  );
};
export default Navbar;
