export const formattedDateAndTime = (time: number) => {
  const date = new Date(time);
  try {
    const dateString =  date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',

    });
    const timeString = date.toLocaleTimeString('en-us', {
      hour: 'numeric',
      minute: '2-digit'
    });
    return `${dateString}, ${timeString}`
  } catch (e) {
    console.error(e);
    return '';
  }
}
