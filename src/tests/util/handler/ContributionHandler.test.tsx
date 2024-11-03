import ContributionHandler from "../../../util/handler/ContributionHandler";

describe("Contribution Handler", () => {
  let handler: ContributionHandler;
  const currentYear = 2024;
  const sampleContributions = [
    { date: "2024-01-01T00:00:00.00Z" },
    { date: "2024-01-01T00:00:00.00Z" },
    { date: "2024-02-15T00:00:00.00Z" },
    { date: "2024-03-20T00:00:00.00Z" },
    { date: "2024-03-20T00:00:00.00Z" },
    { date: "2024-03-20T00:00:00.00Z" },
    { date: "2024-21-311T00:00:00.00Z" },
  ];
  beforeEach(() => {
    handler = new ContributionHandler(sampleContributions);
  });

  describe("initialization", () => {
    it("should create an instace with contributions", () => {
      expect(handler).toBeInstanceOf(ContributionHandler);
    });

    it("should initialize with empty contribution ", () => {
      const emptyHandler = new ContributionHandler([]);
      expect(emptyHandler).toBeInstanceOf(ContributionHandler);
    });
  });
  describe("daysArray", () => {
    it(`should return array of dates for entire year ${currentYear}`, () => {
      const days = handler.daysArray;
      expect(days).toHaveLength(366); // 2024 is a leap year
      expect(days[0]).toEqual(new Date(2024, 0, 1));
      expect(days[days.length - 1]).toEqual(new Date(2024, 11, 31));
    });

    it("should include February 29th (leap day)", () => {
      const days = handler.daysArray;
      const leapDay = days.find(
        (date) =>
          date.getFullYear() === 2024 &&
          date.getMonth() === 1 &&
          date.getDate() == 29
      );
      expect(leapDay).toBeDefined();
    });

    it("should have dates in chronological order", () => {
      const days = handler.daysArray;
      for (let i = 1; i < days.length; i++) {
        expect(days[i].getTime()).toBeGreaterThan(days[i - 1].getTime());
      }
    });
    describe('getColor', () => {
        it('should return gray for 0 contributions', () => {
          expect(handler.getColor(0)).toBe('bg-gray-200');
        });
    
        it('should return light indigo for 1-2 contributions', () => {
          expect(handler.getColor(1)).toBe('bg-indigo-500');
          expect(handler.getColor(2)).toBe('bg-indigo-500');
        });
    
        it('should return medium indigo for 3-4 contributions', () => {
          expect(handler.getColor(3)).toBe('bg-indigo-600');
          expect(handler.getColor(4)).toBe('bg-indigo-600');
        });
    
        it('should return dark indigo for 5-6 contributions', () => {
          expect(handler.getColor(5)).toBe('bg-indigo-700');
          expect(handler.getColor(6)).toBe('bg-indigo-700');
        });
    
        it('should return darkest indigo for 7+ contributions', () => {
          expect(handler.getColor(7)).toBe('bg-indigo-800');
          expect(handler.getColor(10)).toBe('bg-indigo-800');
        });
      });
    
      describe('getContributionCount', () => {
        it('should return correct count for date with multiple contributions', () => {
          const date = new Date('2024-03-20');
          expect(handler.getContributionCount(date)).toBe(3);
        });
    
        it('should return correct count for date with single contribution', () => {
          const date = new Date('2024-02-15');
          expect(handler.getContributionCount(date)).toBe(1);
        });
    
        it('should return 0 for date with no contributions', () => {
          const date = new Date('2024-05-01');
          expect(handler.getContributionCount(date)).toBe(0);
        });
    
        it('should handle undefined contributions', () => {
          const emptyHandler = new ContributionHandler(undefined);
          const date = new Date('2024-01-01');
          expect(emptyHandler.getContributionCount(date)).toBe(0);
        });
      });
    
      describe('formatDate', () => {
        it('should format date correctly for start of year', () => {
          const date = new Date(2024, 0, 1);
          expect(handler.formatDate(date)).toBe('Jan 1, 2024');
        });
    
        it('should format date correctly for end of year', () => {
          const date = new Date(2024, 11, 31);
          expect(handler.formatDate(date)).toBe('Dec 31, 2024');
        });
    
        it('should format date correctly for leap day', () => {
          const date = new Date(2024, 1, 29);
          expect(handler.formatDate(date)).toBe('Feb 29, 2024');
        });
    
        it('should handle single-digit dates', () => {
          const date = new Date(2024, 3, 5);
          expect(handler.formatDate(date)).toBe('Apr 5, 2024');
        });
    
        it('should handle double-digit dates', () => {
          const date = new Date(2024, 6, 15);
          expect(handler.formatDate(date)).toBe('Jul 15, 2024');
        });
      });
    
      describe('edge cases and error handling', () => {
    
        it('should handle malformed dates in contributions', () => {
          const handlerWithBadDates = new ContributionHandler([
            { date: 'invalid-date' },
            { date: '2024-01-01T00:00:00.000Z' }
          ]);
          
          expect(handlerWithBadDates.getContributionCount(new Date('2024-01-01'))).toBe(1);
        });
    
        it('should handle null contributions array', () => {
          const handlerWithNull = new ContributionHandler(null);
          expect(handlerWithNull.getContributionCount(new Date('2024-01-01'))).toBe(0);
        });
      });
    
  });
});
