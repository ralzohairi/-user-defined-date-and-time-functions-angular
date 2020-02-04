// .:: User defined date & time functions implemented by @ralzohairi ::.

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TimeAndDateService {

  constructor() { }

  /** Determines whether the two passed dates are in the same year
   * @param {Date} date1 -the first date to be tested
   * @param {Date} date2 -the second date to be tested
   * @returns {Boolean} whether the passed dates are in the same year
   */
  isSameYear(date1: Date, date2: Date) {
    // getYear: returns the year (four digits for dates between year 1000 and 9999)
    // of the specified date
    return date1.getFullYear() === date2.getFullYear();
  }

  /** Determines whether the two passed dates are in the same month
   * @param {Date} date1 -the first date to be tested
   * @param {Date} date2 -the second date to be tested
   * @returns {Boolean} whether the passed dates are in the same month
   */
  isSameMonth(date1: Date, date2: Date) {
    // getMonth: returns the month (from 0 to 11) for the specified date,
    // according to local time
    return date1.getMonth() === date2.getMonth();
  }

  /** Determines whether the two passed dates are on the same day date
   * @param {Date} date1 -the first date to be tested
   * @param {Date} date2 -the second date to be tested
   * @returns {Boolean} whether the passed dates are on the same day date
   */
  isSameDayDate(date1: Date, date2: Date) {
    // getDate: returns the day of the month (from 1 to 31) for the specified date.
    return date1.getDate() === date2.getDate();
  }

  /** Determines whether the two passed dates have the same hour value
   * @param {Date} date1 -the first date to be tested
   * @param {Date} date2 -the second date to be tested
   * @returns {Boolean} whether the passed dates have the same hour value
   */
  isSameHour(date1: Date, date2: Date) {
    // getHours: returns the hour (from 0 to 23) of the specified date and time.
    return date1.getHours() === date2.getHours();
  }

  /** Determines whether the two passed dates have the same minute value
   * @param {Date} date1 -the first date to be tested
   * @param {Date} date2 -the second date to be tested
   * @returns {Boolean} whether the passed dates have the same minute value
   */
  isSameMinute(date1: Date, date2: Date) {
    // getMinutes: returns the minutes (from 0 to 59) of the specified date and time.
    return date1.getMinutes() === date2.getMinutes();
  }

  /** Returns whether the passed date is the date for the moment of right now,
   *  with respect to today being the date at the moment of function execution
   * @param {Date} date -the date to be tested
   * @returns {Boolean} whether the passed date is the date for the moment of right now
   */
  isDateRightNow(timestamp: Date): boolean {
    // store today's date
    const dateOfNow = new Date();

    // calculate each required aspect of the date to determine if date is today
    const datesHavSameYear = this.isSameYear(timestamp, dateOfNow);
    const datesHavSameMonth = this.isSameMonth(timestamp, dateOfNow);
    const datesHavSameDay = this.isSameDayDate(timestamp, dateOfNow);
    const datesHavSameHour = this.isSameHour(timestamp, dateOfNow);
    const datesHavSameMinute = this.isSameMinute(timestamp, dateOfNow);

    // date is right now if its in the same year, month, day and time (hours & minutes)
    return datesHavSameYear && datesHavSameMonth && datesHavSameDay && datesHavSameHour && datesHavSameMinute;
  }

  /** Returns whether the passed date is the date of today, with respect to today being
   * the date at the moment of function execution
   * @param {Date} date -the date to be tested
   * @returns {Boolean} whether the passed date is the date of today
   */
  isDateToday(timestamp: Date): boolean {
    // store today's date
    let dateOfNow = new Date();

    // calculate each required aspect of the date to determine if date is today
    const datesHaveSameYear = this.isSameYear(timestamp, dateOfNow);
    const datesHaveSameMonth = this.isSameMonth(timestamp, dateOfNow);
    const datesHaveSameDay = this.isSameDayDate(timestamp, dateOfNow);

    // date is today if its in the same year, month, day
    return datesHaveSameYear && datesHaveSameMonth && datesHaveSameDay;
  }

  /** Returns whether the passed date is the date of yesterday, with respect to today being
   * the date at the moment of function execution
   * @param {Date} date -the date to be tested
   * @returns {Boolean} whether the passed date is the date of yesterday
   */
  isDateYesterday(timestamp: Date): boolean {

    // store today's date
    const dateOfNow = new Date();
    // create the date of yesterday
    const yesterday: Date = this.getYesterdaysDate();

    // calculate each required aspect of the date to determine if date is yesterday
    const datesHaveSameYear = this.isSameYear(timestamp, dateOfNow);
    const datesHaveSameMonth = this.isSameMonth(timestamp, dateOfNow);
    const isYesterdayInDay = this.isSameDayDate(timestamp, yesterday);

    // date is yesterday if its in the same year, month and match yesterday's day date
    return datesHaveSameYear && datesHaveSameMonth && isYesterdayInDay;
  }

  /** Returns yesterday's date, with respect to today being
   * the date at the moment of function execution
   * @returns {Date} the date of yesterday
   */
  getYesterdaysDate() {
    // create the date of yesterday using the date of today
    const dateOfNow = new Date();
    const yesterday = new Date();
    // set yesterday to the same date of today's date but decrease days by 1.
    yesterday.setDate(dateOfNow.getDate() - 1);

    return yesterday;
  }

  /** Returns whether the passed date is in the current month, with respect to today being
   * the date at the moment of function execution
   * @param {Date} date -the date to be tested
   * @returns {Boolean} whether the passed date is in the current month
   */
  isDateThisMonth(timestamp: Date): boolean {

    // store today's date
    const dateOfNow = new Date();

    // calculate each required aspect of the date to determine if date is in the current
    // month
    const datesHaveSameYear = this.isSameYear(timestamp, dateOfNow);
    const datesHaveSameMonth = this.isSameMonth(timestamp, dateOfNow);

    // date is yesterday if its in the same year and month
    return datesHaveSameYear && datesHaveSameMonth;
  }

  /** Returns whether the passed dates are identical or not
   * @param {Date} date1 - the first date for comparison
   * @param {Date} date2 - the second date for comparison
   * @returns {Boolean} whether or not the passed dates are identical
   */
  areDatesIdentical(date1: Date, date2: Date) {
    return date1.getTime() === date2.getTime(); // getTime on date returns the number
    // of milliseconds elapsed between 1 January 1970 00:00:00 UTC and the given
    // date
  }

  /** Convert any date object to time of the format HH:MM for 12 hour clock
   * @param {Date} date -the date to be converted
   * @returns {String} time in HH:MM format with AM or PM
   */
  formatDateToHHMM(date: Date): string {
    let hrs = date.getHours();
    const mins = date.getMinutes();
    const clockType = hrs >= 12 ? "PM" : "AM";

    hrs = hrs % 12; // to get time - 12 where it becomes less than 12 (12-12)

    if (hrs === 0) {
      hrs = 12;
    }

    return (hrs < 10 ? "0" + hrs : hrs) + ":" + (mins < 10 ? "0" + mins : mins) + " " +
      clockType;
  }

  /** Formats any to the format HH:MM:SS for 12 hour clock
   * @param {Date} date -the date to be converted
   * @returns {String} time in HH:MM:SS format with AM or PM
   */
  formatDateToHHMMSS(date: Date): string {
    let hrs = date.getHours();
    const mins = date.getMinutes();
    const sec = date.getSeconds();

    const clockType = hrs >= 12 ? "PM" : "AM";

    hrs = hrs % 12; // to get time - 12 where it becomes less than 12 (12-12)

    if (hrs === 0) {
      hrs = 12;
    }
    return (hrs < 10 ? "0" + hrs : hrs)
      + ":" + (mins < 10 ? "0" + mins : mins)
      + ":" + (sec < 10 ? "0" + sec : sec)
      + " " + clockType;
  }

  /** Convert any date object to the format: DD/MM/YY
   * @param {Date} date -the date to be converted
   * @param {Date} prefixSingleDigitsWithZero - determines whether or not to prefix
   * single digits with a zero
   * @returns {String} date in DD/MM/YY format
   */
  formatDateToDDMMYY(date: Date, prefixSingleDigitsWithZero: boolean): string {

    const dayDate: number = date.getDate();
    const month: number = (date.getMonth() + 1); // as months in date object start from 0

    // const month = 
    return (prefixSingleDigitsWithZero && dayDate < 10 ? "0" + dayDate : dayDate) +
      "/" + (prefixSingleDigitsWithZero && month < 10 ? "0" + month : month) +
      "/" + date.getFullYear().toString().substr(-2); /*get last 2 digits only 
      (if negative value is passed to substr, uses it as a character index from
      the end of the string)*/
  }

  /** Convert any date object to the format: MonthName dayNumber
   * @param {Date} date -the date to be converted
   * @param {Boolean} abbreviateMonths - determines whether or not to abbreviate months
   * to a 3 letter month name
   * @returns {String} date in 'MonthName dayNumber' format
   */
  formatDateToMonthNameAndDay(date: Date, abbreviateMonths: boolean): string {
    // Determine whether or not to use the abbreviated month names
    let months;

    if (abbreviateMonths) {
      months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"]; // 3-letter abbreviated months
    } else {
      months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"]; // non abbreviated
      // months
    }

    // Returns date in month name day format
    return months[date.getMonth()] + " " + date.getDate();
  }

  /** Sorts the passed list of dates based on the order preference
   * @param {Array} list - the list of dates to sort
   * @param {Boolean} sortInAscendingorder - Determines whether or not to sort the list in
   * ascending order
   * @returns {Array} the sorted list
   */
  sortListOfDates(list: Date[], sortInAscendingorder: boolean): Date[] {
    // Note: Ascending for dates means that earlier values precede later ones

    // 1. Sort the list of dates baed on order preference
    // 1.1. In Ascending order
    if (sortInAscendingorder) {
      list.sort((dateA: Date, dateB: Date) => {
        /* to order dates from the latest to oldest based on timestamp,
         dateB comes first only if passed function returns postive,
         in which case if dateB is larger than dateA */
        return dateB.getTime() - dateA.getTime(); // getTime on date returns the number
        // of milliseconds elapsed between 1 January 1970 00:00:00 UTC and the given
        // date
      });
    }
    // 1.2. In Desending order
    else {
      list.sort((dateA: Date, dateB: Date) => {
        /* to order dates from the latest to oldest based on timestamp,
         dateB comes first only if passed function returns postive,
         in which case if dateB is larger than dateA */
        return dateA.getTime() - dateB.getTime(); // getTime on date returns the number
        // of milliseconds elapsed between 1 January 1970 00:00:00 UTC and the given
        // date
      });
    }

    // 2. Return the sorted list
    return list;
  }

  /** Returns the proper text representation of the passed timestamp
   * @param {Date} timestamp - the timestamp to return the text representation of
   * @returns {String} (in order) "Now" if timestamp is right now, "HH:MM pm/am" if timestamp
   *  is today, "Yesterday" if timestamp is yesterday's date, "MonthName dayDate" if
   *  timestamp is this month and returns "dd/mm/yy" otherwise.
   */
  getTextRepresentationOfTimestamp(timestamp: Date) {

    // CASE 1: If timestamp is right now
    if (this.isDateRightNow(timestamp)) {
      // the textual representation will be "Now"
      return "Now";
    }
    // CASE 2: Else if it's a date of today
    else if (this.isDateToday(timestamp)) {
      // the textual representation will be "HH:MM pm/am"
      return this.formatDateToHHMM(timestamp).toLowerCase();
    }
    // CASE 3: Else if it's a date of yesterday
    else if (this.isDateYesterday(timestamp)) {
      // the textual representation will be "Yesterday"
      return "Yesterday";
    }
    // CASE 4: Else if it's a date of this month
    else if (this.isDateThisMonth(timestamp)) {
      // the textual representation will be "monthName day"
      return this.formatDateToMonthNameAndDay(timestamp, false);
    }
    // CASE 5: Else the textual representation will be "DD/MM/YY"
    else {
      return this.formatDateToDDMMYY(timestamp, false);
    }
  }
}
