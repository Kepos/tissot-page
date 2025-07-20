// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PageTeaser({ title, description, image, link }: any) {
  return (
    <a
      href={link}
      className="page-teaser block hover:drop-shadow-xl  hover:border-b-[0.5px] hover:border-[#ffcd5e] hover:bg-bladck cursor-pointer md:p-6 md:pb-6 pb-16 transition-transform duration-500 hover:translate-x-[-0px] hover:-translate-y-[10px] "
      target="_blank"
    >
      <img src={image} />
      <h3 className="text-[#ffcd5e] text-xl my-3">{title}</h3>
      <p className="text-white ">{description}</p>
    </a>
  );
}
