import { Button } from "@/components/atoms";

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}
const HamburgerIcon = ({ isOpen, toggleMenu }: Props) => {
  return (
    <div className="dropdown">
      <Button
        color="btn-primary"
        className="lg:hidden btn-outline mr-2.5"
        aria-label="close and open menu"
      >
        <svg
          onClick={toggleMenu}
          className="h-6 w-6 lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </Button>
    </div>
  );
};

export default HamburgerIcon;
