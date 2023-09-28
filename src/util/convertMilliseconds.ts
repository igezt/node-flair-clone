// Converts milliseconds to the highest order of time.
export function convertMillisecondsToHighestOrder(ms: number): string {
  if (ms < 1000) {
    return "Less than 1 second ago";
  } else if (ms < 60000) {
    let seconds = Math.floor(ms / 1000);
    return `about ${seconds} seconds ago`;
  } else if (ms < 3600000) {
    let minutes = Math.floor(ms / 60000);
    return `about ${minutes} minutes ago`;
  } else if (ms < 86400000) {
    let hours = Math.floor(ms / 3600000);
    return `about ${hours} hours ago`;
  } else if (ms < 86400000 * 30) {
    let days = Math.floor(ms / 86400000);
    return `about ${days} days ago`;
  } else if (ms < 86400000 * 30 * 12) {
    let months = Math.floor(ms / (86400000 * 30));
    return `about ${months} months ago`;
  } else {
    return "more than a year ago";
  }
}
