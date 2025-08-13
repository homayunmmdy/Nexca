import Link from "next/link";

interface Props {
  children: {
    name: string;
    href: string;
  }[];
  loading?: boolean;
}

const HorizontalMenuChildren = ({ children, loading = false }: Props) => {
  if (!children) return null;
  return (
    <ul className="absolute top-12 right-0 hidden group-hover:flex bg-base-300 rounded-xl p-2.5 w-full gap-2.5 flex-wrap">
      {loading ? (
        <>
          <div className="skeleton h-8 w-20"></div>
          <div className="skeleton h-8 w-20"></div>
          <div className="skeleton h-8 w-20"></div>
          <div className="skeleton h-8 w-20"></div>
        </>
      ) : (
        children.map((nav) => (
          <li key={nav.name}>
            <Link href={nav.href} title={nav.name}>
              {nav.name}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default HorizontalMenuChildren;
