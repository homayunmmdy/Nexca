/**
 * A utility class to handle contributions.
 * @class ContributionHandler
 */
class ContributionHandler {
  /**
   * The year of the contributions.
   * @type {number}
   * @private
   */
  private currentYear : number = 2024;

  /**
   * The start date of the year.
   * @type {Date}
   * @private
   */
  private startDate: Date = new Date(this.currentYear, 0, 1);

  /**
   * The contributions.
   * @type {any}
   * @private
   */
  private contributions: any;

  /**
   * Constructor.
   * @param {any} contributions - The contributions.
   */
  constructor(contributions: any) {
    this.contributions = contributions;
  }

  /**
   * Gets the number of days in a year.
   * @param {number} year - The year.
   * @returns {number} The number of days in the year.
   * @private
   */
  private getDaysInYear(year : number): number {
    return ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0)? 366 : 365;
  }

  /**
   * Gets an array of the days in the year.
   * @type {Date[]}
   * @private
   */
  private daysInArray = Array.from({ length: this.getDaysInYear(this.currentYear) }, (_, i) => {
    const date = new Date(this.startDate);
    date.setDate(date.getDate() + i);
    return date;
  });

  /**
   * Gets the color for the given day based on the number of contributions.
   * @param {number} count - The number of contributions.
   * @returns {string} The color for the given day.
   */
  getColor = (count: number) => {
    if (count === 0) return "bg-gray-200";
    if (count < 3) return "bg-indigo-500";
    if (count < 5) return "bg-indigo-600";
    if (count < 7) return "bg-indigo-700";
    return "bg-indigo-800";
  };

  /**
   * Gets the number of contributions for the given day.
   * @param {Date} date - The date.
   * @returns {number} The number of contributions for the given day.
   */
  getContributionCount = (date: Date) => {
    return this.contributions?.filter((contribute: any) => {
      const contributionDate = new Date(contribute.date);
      return contributionDate.toDateString() === date.toDateString();
    }).length ?? 0;
  };

  /**
   * Formats the given date.
   * @param {Date} date - The date.
   * @returns {string} The formatted date.
   */
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

  /**
   * Gets the array of days in the year.
   * @type {Date[]}
   */
  get daysArray(): Date[] {
    return this.daysInArray;
  }
}

/**
 * Creates a new ContributionHandler.
 * @param {any} contributions - The contributions.
 * @returns {ContributionHandler} The ContributionHandler.
 */
export default ContributionHandler;

