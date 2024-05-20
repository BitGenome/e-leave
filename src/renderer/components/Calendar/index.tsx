import { Calendar, dayjsLocalizer } from 'react-big-calendar';
// eslint-disable-next-line import/newline-after-import
import dayjs from 'dayjs';
const localizer = dayjsLocalizer(dayjs);

const events = [
  // Sample events array
  {
    title: 'Event 1',
    start: new Date(2024, 3, 18),
    end: new Date(2024, 3, 20),
  },
  // ... more events
];

export default function CalendarLayout() {
  return <Calendar localizer={localizer} events={events} />;
}
