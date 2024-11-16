const TicketsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <div className="skeleton h-80 w-full"></div>
      <div className="skeleton h-80 w-full"></div>
      <div className="skeleton h-80 w-full"></div>
      <div className="skeleton h-80 w-full"></div>
      <div className="skeleton h-80 w-full"></div>
      <div className="skeleton h-80 w-full"></div>
    </div>
  );
};

export default TicketsSkeleton;
