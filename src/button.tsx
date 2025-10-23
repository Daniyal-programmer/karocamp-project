type butt = {
  value: String;
  color:String;
};
function Button({ value , color }: butt) {
  if (color === "black") {
    return (
      <>
        <a
          href="#"
          className="p-[5px] m-[3px] outline-none border-solid border-black border-[3px] rounded-[5px] bg-black text-white  w-[fit-content]"
        >
          {value}
        </a>
      </>
    );
  } else if(color === 'white') {
    return (
      <>
        <a href="#" className="p-[5px] border-solid border-black border-[1.5px] rounded-[5px] m-[3px] outline-none text-[18px] w-[fit-content]">
          {value}
        </a>
      </>
    );
  }
}

export default Button;
