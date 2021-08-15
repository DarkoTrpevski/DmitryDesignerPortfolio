export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export const weekday = () => {
  let now = new Date().getDay()
  return days[now]
}