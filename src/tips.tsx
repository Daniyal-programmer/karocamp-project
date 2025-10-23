type tips = {
  logo_src: string;
  title: string;
  description: string;
};

function Tips({ logo_src, title, description }: tips) {
  return (
    <div  className="border-solid border-[2px] border-[#3f3f3f] p-[10px] rounded-[15px] pl-[5px] m-[20px] md">
      <img src={logo_src} alt={title} />
      <h2>{title}</h2>
      <p className="w-[300px]">{description}</p>
    </div>
  );
}

export default Tips;