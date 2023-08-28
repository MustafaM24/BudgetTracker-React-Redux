function formatTimestamp(timestamp) {
    if (!timestamp) {
      return 'No timestamp available';
    }
  
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    };
  
    return timestamp.toLocaleString('en-US', options);
  }

export { formatTimestamp };