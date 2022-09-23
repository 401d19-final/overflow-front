export default function parseTime(time) {
  const updated_time = {
    year: parseInt(time.substring(0, 4)),
    month: parseInt(time.substring(5, 7)),
    day: parseInt(time.substring(8, 10)),
    hour: parseInt(time.substring(11, 13)),
    minute: parseInt(time.substring(14, 16)),
    second: parseInt(time.substring(17, 19)),
  };
  const d = new Date();
  const curr_year = d.getFullYear();
  if (updated_time.year !== d.getFullYear()) {
    if (curr_year - updated_time.year !== 1) {
      return `${curr_year - updated_time.year} years ago`
    } else {
      return `${curr_year - updated_time.year} year ago`
    }
  }
  const curr_month = d.getMonth() + 1;
  if (updated_time.month !== curr_month) {
    if (curr_month - updated_time.month !== 1) {
      return `${curr_month - updated_time.month} months ago`
    } else {
      return `${curr_month - updated_time.month} month ago`
    }
  }
  const curr_day = d.getDate();
  if (updated_time.day !== curr_day) {
    if (curr_day - updated_time.day !== 1) {
      return `${curr_day - updated_time.day} days ago`
    } else {
      return `${curr_day - updated_time.day} day ago`
    }
  }
  const curr_hour = d.getHours();
  if (updated_time.hour !== curr_hour) {
    if (curr_hour - updated_time.hour !== 1) {
      return `${curr_hour - updated_time.hour} hours ago`
    } else {
      return `${curr_hour - updated_time.hour} hour ago`
    }
  }
  const curr_minute = d.getMinutes();
  if (updated_time.minute !== curr_minute) {
    if (curr_minute - updated_time.minute !== 1) {
      return `${curr_minute - updated_time.minute} minutes ago`
    } else {
      return `${curr_minute - updated_time.minute} minute ago`
    }
  }
  if (d.getSeconds() - updated_time.second !== 1) {
    return `${d.getSeconds() - updated_time.second} seconds ago`;
  } else {
    return `${d.getSeconds() - updated_time.second} second ago`;
  }
}