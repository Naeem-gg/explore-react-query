export function convertTime(inputTime:string) {
    const [hours, minutes] = inputTime.split(':').map(Number);
    let period = 'AM';
  
    if (hours >= 12) {
      period = 'PM';
    }
  
    let hours12 = hours % 12;
    hours12 = hours12 || 12; // 0 should be displayed as 12
  
    const formattedTime = `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
  
    return formattedTime;
  }