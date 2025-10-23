import Button from "./button";
function Fishing() {
  return (
    <div className="block w-[fit-content] m-auto mt-[110px] mb-[120px]">
      <p className="block w-[fit-content] m-auto text-[10px] text-black bg-[#c1c1c1d0] p-[3px] pl-[6px] pr-[6px] rounded-[5px]">
        Built for developers, by developers
      </p>
      <h1 className="block w-[fit-content] m-auto text-[35px] mt-[25px]">
        Track issues like a pro
      </h1>
      <p className="block max-w-[630px] m-auto text-[15px] mt-[25px] justify-between text-center text-[#5E5E5E]">
        A powerful issue tracking system inspired by Github. Manager bugs,
        feature requests, and project tasks with ease. perfect for teams of any
        size.
      </p>
      <div className="flex justify-between w-[320px] m-auto mt-[35px]">
        <Button value={"Get started for free"} color={'black'} />
        <Button value={"view demo"} color={'white'} />
      </div>
    </div>
  );  
}

export default Fishing;
