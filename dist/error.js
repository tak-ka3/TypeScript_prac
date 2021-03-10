"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    function ask() {
        return prompt('When is your birthday?');
    }
    function parse(birthday) {
        let date = new Date(birthday);
        if (!isValid(date)) {
            // return null
            throw new RangeError('Enter a date in the form YYYY/MM/DD');
        }
        return date;
    }
    function isValid(date) {
        return Object.prototype.toString.call(date) === '[object Date]';
    }
    // let date = parse(ask())
    // if (date){
    //   console.info('Date is', date.toISOString())
    // }else{
    //   console.error('Error parsing date for some reason')
    // }
    try {
        // let date = parse(ask())
        // console.info('Date is', date?.toISOString())
    }
    catch (e) {
        if (e instanceof RangeError) {
            console.error(e.message);
        }
        else {
            throw e;
        }
    }
}
{
    class InvalidDateFormatError extends RangeError {
    }
    class DateIsInTheFutureError extends RangeError {
    }
    function parse(birthday) {
        let date = new Date(birthday);
        if (!isValid(date)) {
            // return null
            throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD');
        }
        if (date.getTime() > Date.now()) {
            throw new DateIsInTheFutureError('Are you a timeord?');
        }
        return date;
    }
    function isValid(date) {
        return Object.prototype.toString.call(date) === '[object Date]';
    }
    try {
        // let date = parse(ask())
        // console.info('Date is', date?.toISOString())
    }
    catch (e) {
        if (e instanceof InvalidDateFormatError) {
            console.error(e.message);
        }
        else if (e instanceof DateIsInTheFutureError) {
            console.info(e.message);
        }
        else {
            throw e;
        }
    }
}
{
    // function parse (birthday: string): Date[]{
    //   let date = new Date(birthday)
    //   if (!isValid(date)){
    //     return []
    //   }
    //   return [date]
    // }
    // let date = parse(ask())
    // date
    //   .map
    //   .forEach(_ => console.info('Date is', _))
}
//# sourceMappingURL=error.js.map