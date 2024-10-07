function createCalendar(year, month)
{
    // months are 0-11
    month = month - 1
    let table = document.createElement("table");

    let tableHead = document.createElement("thead");
    const weekDays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"]

    for (week of weekDays)
    {
        let th = document.createElement("th");
        th.textContent = week;
        th.style.fontSize = "medium";
        th.style.padding = "5px"

        tableHead.appendChild(th);
    }
    table.appendChild(tableHead);

    let daysMonth = new Date(year, month, 0).getDate();
    let dayStart = new Date(year,month,1).getDay();
    if (dayStart == 0) {
        dayStart = 6;
    } else {
        dayStart = dayStart - 1
    }

    // create first row
    let row = document.createElement("tr");
    let count = 0;
    let day = 1;
    while (true)
    {   
        let td = document.createElement("td");
        if (count < dayStart)
        {
            td.textContent = "";
        } else {
            td.textContent = day;
            day = day + 1
        }


        td.style.padding = "5px"
        row.appendChild(td)

        count = count + 1
        if (count > 6) {
            break;
        }
    } 
    table.appendChild(row);

    count = 0;
    let tr = document.createElement("tr")
    while (day <= daysMonth) {
        let td = document.createElement("td");
        td.textContent = day;
        tr.appendChild(td);

        count = count + 1
        if (count > 6)
        {
            table.appendChild(tr);
            tr = document.createElement("tr");
            count = 0
        }

        day = day + 1;
    }
    table.appendChild(tr);

    document.body.appendChild(table);
}
createCalendar(2024,2)