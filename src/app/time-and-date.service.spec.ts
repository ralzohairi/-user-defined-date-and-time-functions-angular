import { TestBed } from '@angular/core/testing';

import { TimeAndDateService } from './time-and-date.service';

// Declarations
let timeAndDateService: TimeAndDateService;

describe('TimeAndDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});

    // To Access Service
    timeAndDateService = TestBed.get(TimeAndDateService);
  });

  it('should be created', () => {
    const service: TimeAndDateService = TestBed.get(TimeAndDateService);
    expect(service).toBeTruthy();
  });

  // ----------- isSameYear() Unit Tests -----------

  it('should return true when checking if passed dates are in the same year while passing dates in the same year', () => {
    let date1 = new Date(2018, 3, 18, 10, 3, 0);
    let date2 = new Date(2018, 6, 5, 10, 3, 0);

    expect(timeAndDateService.isSameYear(date1, date2)).toBe(true);
  });

  it('should return false when checking if passed dates are in the same year while passing dates not in the same year', () => {
    let date1 = new Date(2007, 3, 18, 10, 3, 0);
    let date2 = new Date(2018, 6, 5, 10, 3, 0);

    expect(timeAndDateService.isSameYear(date1, date2)).toBe(false);
  });

  // ----------- isSameMonth() Unit Tests -----------

  it('should return true when checking if passed dates are in the same month while passing dates in the same month', () => {
    let date1 = new Date(2007, 5, 18, 10, 3, 0);
    let date2 = new Date(2018, 5, 5, 10, 3, 0);

    expect(timeAndDateService.isSameMonth(date1, date2)).toBe(true);
  });

  it('should return false when checking if passed dates are in the same month while passing dates not in the same month', () => {
    let date1 = new Date(2007, 1, 18, 10, 3, 0);
    let date2 = new Date(2018, 5, 5, 10, 3, 0);

    expect(timeAndDateService.isSameMonth(date1, date2)).toBe(false);
  });

  // ----------- isSameDayDate() Unit Tests -----------

  it('should return true when checking if passed dates are in the same day while passing dates of the same day date', () => {
    let date1 = new Date(2007, 5, 18, 10, 3, 0);
    let date2 = new Date(2018, 6, 18, 10, 3, 0);

    expect(timeAndDateService.isSameDayDate(date1, date2)).toBe(true);
  });

  it('should return false when checking if passed dates are in the same day while passing dates not of the same day date', () => {
    let date1 = new Date(2007, 1, 18, 10, 3, 0);
    let date2 = new Date(2018, 5, 17, 10, 3, 0);

    expect(timeAndDateService.isSameDayDate(date1, date2)).toBe(false);
  });

  // ----------- isSameHour() Unit Tests -----------

  it('should return true when checking if passed dates have the same hour while passing dates having the same hour', () => {
    let date1 = new Date(2007, 5, 18, 10, 3, 0);
    let date2 = new Date(2018, 5, 18, 10, 3, 0);

    expect(timeAndDateService.isSameHour(date1, date2)).toBe(true);
  });

  it('should return false when checking if passed dates have the same hour while passing dates not having the same hour', () => {
    let date1 = new Date(2007, 1, 18, 10, 3, 0);
    let date2 = new Date(2018, 5, 17, 9, 3, 0);

    expect(timeAndDateService.isSameHour(date1, date2)).toBe(false);
  });

  // ----------- isSameMinute() Unit Tests -----------

  it('should return true when checking if passed dates have the same minutes while passing dates having the same minutes', () => {
    let date1 = new Date(2007, 5, 18, 9, 30, 0);
    let date2 = new Date(2018, 5, 18, 10, 30, 0);

    expect(timeAndDateService.isSameMinute(date1, date2)).toBe(true);
  });

  it('should return false when checking if passed dates have the same minutes while passing dates not having the same minutes', () => {
    let date1 = new Date(2007, 1, 18, 10, 5, 0);
    let date2 = new Date(2018, 5, 17, 10, 30, 0);

    expect(timeAndDateService.isSameMinute(date1, date2)).toBe(false);
  });

  // ----------- isDateRightNow() Unit Tests -----------

  it('should return true when checking if a date is the date right now while passing this moment\'s date', () => {
    expect(timeAndDateService.isDateRightNow(new Date())).toBe(true);
  });

  it('should return false when checking if a date is the date right now while passing an old date', () => {
    expect(timeAndDateService.isDateRightNow(new Date(2018, 3, 18, 10, 3, 0))).toBe(false);
  });

  // ----------- isDateToday() Unit Tests -----------

  it('should return true when checking if a date is today\'s date while passing today\'s date', () => {
    expect(timeAndDateService.isDateToday(new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      10,
      3,
      0,
    ))).toBe(true);
  });

  it('should return false when checking if a date is today\'s date while passing an old date', () => {
    expect(timeAndDateService.isDateToday(new Date(2018, 3, 18, 10, 3, 0))).toBe(false);
  });

  // ----------- isDateYesterday() Unit Tests -----------

  it('should return true when checking if a date is yesterday\'s date while passing yesterday\s date', () => {
    const dateOfNow = new Date();
    const yesterday = new Date();
    // set yesterday to the same date of today's date but decrease days by 1.
    yesterday.setDate(dateOfNow.getDate() - 1);

    expect(timeAndDateService.isDateYesterday(yesterday)).toBe(true);
  });

  it('should return false when checking if a date is yesterday\'s date while passing an old date', () => {
    expect(timeAndDateService.isDateYesterday(new Date())).toBe(false);
  });

  // ----------- isDateThisMonth() Unit Tests -----------

  it('should return true when checking if passed date exists in the current month while passing a date in the current month', () => {
    expect(timeAndDateService.isDateThisMonth(new Date())).toBe(true);
  });

  it('should return false when checking if passed date exists in the current month while passing a date not in the current month', () => {
    let dateRightNow = new Date();
    let dateOfLastMonth = new Date();
    dateOfLastMonth.setMonth(dateRightNow.getMonth() - 1);

    expect(timeAndDateService.isDateThisMonth(dateOfLastMonth)).toBe(false);
  });

  // ----------- areDatesIdentical() Unit Tests -----------

  it('should return true when checking if two dates are identical and passing identical dates', () => {
    expect(timeAndDateService.areDatesIdentical(new Date(2018, 3, 18, 10, 3, 0), new Date(2018, 3, 18, 10, 3, 0))).toBe(true);
  });

  it('should return false when checking if two dates are identical and passing non-identical dates', () => {
    expect(timeAndDateService.areDatesIdentical(new Date(2018, 3, 18, 10, 2, 0), new Date(2018, 3, 18, 10, 3, 0))).toBe(false);
  });

  // ----------- formatDateToHHMM() Unit Tests -----------

  it('should return \'10:03 AM\' when passing the date \'01/8/2018 10:03:00:00\' as a date type to format it to \'HH:MM clocktype\'', () => {
    expect(timeAndDateService.formatDateToHHMM(new Date(2018, 0, 8, 10, 3, 0))).toBe('10:03 AM');
  });

  it('should return \'10:03 PM\' when passing the date \'01/8/2018 22:03:00:00\' as a date type to format it to \'HH:MM clocktype\'', () => {
    expect(timeAndDateService.formatDateToHHMM(new Date(2018, 0, 8, 22, 3, 0))).toBe('10:03 PM');
  });

  // ----------- formatDateToHHMMSS() Unit Tests -----------
  it("should return '10:50:01 AM' when passing a date of the same time to format it to HHMMSS", () => {
    expect(timeAndDateService.formatDateToHHMMSS(new Date(2019, 3, 18, 10, 50, 1))).toBe("10:50:01 AM");
  });

  it("should return '10:50:55 PM' when passing a date of the same time to format it to HHMMSS", () => {
    expect(timeAndDateService.formatDateToHHMMSS(new Date(2019, 3, 18, 22, 50, 55))).toBe("10:50:55 PM");
  });

  // ----------- formatDateToDDMMYY() Unit Tests -----------

  it('should return \'18/4/19\' when passing the date \'18/04/2019\' to format it to DD/MM/YY without zero prefix', () => {
    expect(timeAndDateService.formatDateToDDMMYY(new Date(2019, 3, 18, 10, 3, 0), false)).toBe('18/4/19');
  });

  it('should return \'18/04/19\' when passing the date \'18/04/2019\' to format it to DD/MM/YY with zero prefix', () => {
    expect(timeAndDateService.formatDateToDDMMYY(new Date(2019, 3, 18, 10, 3, 0), true)).toBe('18/04/19');
  });

  // ----------- sortListOfDates() Unit Tests -----------

  it('should return the list of dates sorted in an ascending order', () => {
    const listToSort = [new Date(2019, 3, 18, 10, 3, 0),
    new Date(2007, 3, 18, 10, 3, 0), new Date(2020, 3, 18, 10, 3, 0), new Date(2019, 2, 18, 10, 3, 0)];

    const sortedVersionOfList = [new Date(2020, 3, 18, 10, 3, 0), new Date(2019, 3, 18, 10, 3, 0),
    new Date(2019, 2, 18, 10, 3, 0), new Date(2007, 3, 18, 10, 3, 0)];

    expect(timeAndDateService.sortListOfDates(listToSort, true)).toEqual(sortedVersionOfList);
  });

  it('should return the list of dates sorted in an descending order', () => {
    const listToSort = [new Date(2019, 3, 18, 10, 3, 0),
    new Date(2007, 3, 18, 10, 3, 0), new Date(2020, 3, 18, 10, 3, 0), new Date(2019, 2, 18, 10, 3, 0)];

    const sortedVersionOfList = [new Date(2007, 3, 18, 10, 3, 0),
    new Date(2019, 2, 18, 10, 3, 0), new Date(2019, 3, 18, 10, 3, 0), new Date(2020, 3, 18, 10, 3, 0)];

    expect(timeAndDateService.sortListOfDates(listToSort, false)).toEqual(sortedVersionOfList);
  });

  // ----------- formatDateToMonthNameAndDay() Unit Tests -----------

  it('should return \'April 18\' when passing the date \'18/04/2019\' to format it to \'monthName dayDate\'', () => {
    expect(timeAndDateService.formatDateToMonthNameAndDay(new Date(2019, 3, 18, 10, 3, 0), false)).toBe('April 18');
  });

  it('should return \'Apr 18\' when passing the date \'18/04/2019\' to format it to \'monthName dayDate\'', () => {
    expect(timeAndDateService.formatDateToMonthNameAndDay(new Date(2019, 3, 18, 10, 3, 0), true)).toBe('Apr 18');
  });

});
