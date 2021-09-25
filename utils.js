import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  format,
  startOfDay,
  startOfHour,
} from 'date-fns';

export const formatTime = t => {
  if (differenceInMonths(new Date(), new Date(t)) > 12)
    return format(new Date(5), 'MMMM yyyy');
  if (differenceInDays(new Date(), new Date(t)) > 30)
    return differenceInMonths(new Date(), new Date(t)) + ' months';
  if (differenceInDays(startOfDay(new Date()), startOfDay(new Date(t))) === 1)
    return 'yesterday';
  if (differenceInHours(startOfHour(new Date()), startOfHour(new Date(t))) > 23)
    return differenceInDays(new Date(), new Date(t)) + ' days';
  if (differenceInMinutes(new Date(), new Date(t)) > 59)
    return (
      differenceInHours(startOfHour(new Date()), startOfHour(new Date(t))) +
      ' hours'
    );
  if (differenceInMinutes(new Date(), new Date(t)) > 1)
    return differenceInMinutes(new Date(), new Date(t)) + ' minutes';
  if (differenceInMinutes(new Date(), new Date(t)) < 1) return 'now';
};
