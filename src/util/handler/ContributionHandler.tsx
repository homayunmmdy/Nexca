class ContributionHandler {
  private currentYear : number = 2024;
  private startDate: Date = new Date(this.currentYear, 0, 1);

  constructor(private contributions: any) {}

  private getDaysInYear(year : number): number {
    return ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0)? 366 : 365;
  }

  private daysInArray = Array.from({ length: this.getDaysInYear(this.currentYear) }, (_, i) => {
    const date = new Date(this.startDate);
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
    return this.contributions?.filter((contribute: any) => {
      const contributionDate = new Date(contribute.date);
      return contributionDate.toDateString() === date.toDateString();
    }).length ?? 0;
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

  get daysArray(): Date[] {
    return this.daysInArray;
  }
}

export default ContributionHandler;
