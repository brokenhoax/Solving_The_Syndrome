import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="flex mt-auto w-full px-4 md:w-700 text-gray-200">
      <div className="h-16 flex items-center justify-center border-t-2 border-red-400 min-w-full  bg-gray-900">
        <div className="text-sm font-medium z-10">2024 CozyCampus</div>
        <img className="h-6 m-4" src={logo} alt="Logo"></img>
      </div>
    </footer>
  );
}
