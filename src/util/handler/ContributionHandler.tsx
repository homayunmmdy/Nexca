class ContributionHandler {
  private today: Date = new Date();

  constructor(
    private contributions: any
  ) {}

  private oneYearAgo = new Date(
    this.today.getFullYear() - 1,
    this.today.getMonth(),
    this.today.getDate()
  );

  private daysInArray = Array.from({ length: 365 }, (_, i) => {
    const date = new Date(this.oneYearAgo);
    date.setDate(date.getDate() + i);
    return date;
  });

  getColor = (count: number) => {
    if (count === 0) return "bg-gray-200";
    if (count < 3) return "bg-indigo-500";
    if (count < 5) return "bg-indigo-600";
    if (count < 7) return "bg-indigo-700";
    return "bg-indigo-800";
  };

  getContributionCount = (date: Date) => {
    // @ts-ignore
    return this.contributions?.filter((contribute) => {
      const contributionDate = new Date(contribute.date);
      return contributionDate.toDateString() === date.toDateString();
    }).length;
  };
  
  formatDate = (date: Date): string => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  get daysArray() : Date[] {
    return this.daysInArray
  }
}

export default ContributionHandler;
