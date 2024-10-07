function createCalendar(year, month) {
    // Create a new table element
    const calendar = document.createElement('table');
  
    // Create a table header row for weekdays
    const headerRow = document.createElement('tr');
    const daysOfWeek = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    daysOfWeek.forEach(day => {
      const headerCell = document.createElement('th');
      headerCell.textContent = day;
      headerRow.appendChild(headerCell);
    });
    calendar.appendChild(headerRow);
  
    // Calculate the first day of the given month
    const date = new Date(year, month, 1);
    const firstDay = date.getDay();
  
    // Create table rows for the days of the month
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      if (date.getDay() === 0) { // If it's Sunday, start a new row
        const newRow = document.createElement('tr');
        calendar.appendChild(newRow);
      }
      const cell = document.createElement('td');
      cell.textContent = day;
      const currentRow = calendar.lastElementChild;
      currentRow.appendChild(cell);
  
      // Update the date for the next cell
      date.setDate(day + 1);
    }
  
    // Append the calendar to the body (or another desired container)
    document.body.appendChild(calendar);
  }
  
  // Example usage: create a calendar for September 2012
  createCalendar(2012, 8);