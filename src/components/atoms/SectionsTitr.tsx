interface SectionsTitrProps {
    children: string,
    bg? : string
}
const SectionsTitr = ({ children, bg = 'bg-indigo-700'}: SectionsTitrProps) => {
  return (
    <div className="flex items-center gap-2 mb-2 md:mb-4">
      <p className={`${bg} p-3 rounded-lg text-white text-nowrap text-sm md:text-lg`}>
        {children}
      </p>
      <div className="h-0.5 w-full bg-base-300"></div>
    </div>
  );
};

export default SectionsTitr;
