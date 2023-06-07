import { Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid";
import logo from "@/assets/images/logo.png"

type Props = {}

const Navbar = (props: Props) => {
  const elem="flex items-center justify-between"
  return (
<nav>
  <div className={`${elem} fixed top-0 z-20 w-full py-6 `}>
<div className={`${elem} mx-auto w-4/5`}>
  <div className={`${elem} w-full gap-12c`}>
  <img src={logo}  alt="logo"/>

  <div className={`${elem} w-full`}>
    <div className={`${elem} gap-7 text-sm`}>
      <p>Home</p>
      <p>Benifit</p>
      <p>Classes</p>
      <p>Contact us</p>


    </div>
<div>
<p>Sign in</p>
<button>Join a memmer</button>
</div>
  </div>
  </div>



</div>
  </div>
</nav>
  )
}
export default Navbar;