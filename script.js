function JSDate() {
    const date = new Date();
    document.getElementById("dateDemo").innerHTML = 'Date: ' + date; //standard format
    document.getElementById("dateDemoFullYear").innerHTML = 'Year: ' + date.getFullYear(); //get year
    document.getElementById("dateDemoMonth").innerHTML = 'Month: ' + date.getMonth(); //get month 
    document.getElementById("dateDemoDate").innerHTML = 'Date: ' + date.getDate(); //get Date
    document.getElementById("dateDemoHour").innerHTML = 'Hour: ' + date.getHours(); //get Hour
    document.getElementById("dateDemoMinutes").innerHTML = 'Minutes: ' + date.getMinutes(); //get Minutes
    document.getElementById("dateDemoSeconds").innerHTML = 'Seconds: ' + date.getSeconds(); //get Seconds
    document.getElementById("dateDemoDay").innerHTML = 'Day: ' + date.getDay(); //get Day
}
