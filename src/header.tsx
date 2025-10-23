import Button from "./button";
import img from "./publick/cockroach.svg";
function Header() {
  return (
    <div className="flex justify-between block mt-[3px] border-b-[1px] border- border-[#5E5E5E] pb-[3px] fixed top-0 right-0 left-0 bg-[#ffff] mt-[0px]">
      <a href="#" className="ml-[20px] flex flex-row text-cente outline-none">
        <img src={img} className="w-[30px]" />
        <p className="text-[20px] pt-[7px] ml-[3px]">IssueTracker</p>
      </a>
      <div className="m-[10px] mr-[90px] outline-none">
        <Button value={"sign in"} color={'white'} />
        <Button value={"sign up"} color={'black'} />
      </div>
    </div>
  );
}

export default Header;
