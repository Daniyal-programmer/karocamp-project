import Tips from "./tips";
import img from "./publick/cockroach.svg";
function Cards() {
  return (
    <div className="bg-[#e2e2e262]">
      <h1 className="m-auto w-[fit-content] text-[30px] pt-[40px]">
        Everything you need to track issues
      </h1>
      <p className="m-auto w-[fit-content] text-center mt-[20px] text-[#505050]">
        powerful features that help you stay organized and keep your projects on
        to track.
      </p>
      <div className="flex justify-around flex-wrap">
        <Tips
          logo_src={img}
          title="Issue Management"
          description="Create , assign , and track bugs and features requests with detailed descriptions and attachments"
        />
        <Tips
          logo_src={img}
          title="Issue Management"
          description="Create , assign , and track bugs and features requests with detailed descriptions and attachments"
        />
        <Tips
          logo_src={img}
          title="Issue Management"
          description="Create , assign , and track bugs and features requests with detailed descriptions and attachments"
        />
        <Tips
          logo_src={img}
          title="Issue Management"
          description="Create , assign , and track bugs and features requests with detailed descriptions and attachments"
        />
        <Tips
          logo_src={img}
          title="Issue Management"
          description="Create , assign , and track bugs and features requests with detailed descriptions and attachments"
        />
        <Tips
          logo_src={img}
          title="Issue Management"
          description="Create , assign , and track bugs and features requests with detailed descriptions and attachments"
        />
      </div>
    </div>
  );
}

export default Cards;
