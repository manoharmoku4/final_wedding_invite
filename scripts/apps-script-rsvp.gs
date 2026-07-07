// Google Apps Script — bind this to the Google Sheet that should collect RSVPs.
// Deployment steps: see the RSVP section in the project README/chat instructions.
//
// 1. Create a Google Sheet with a header row:
//    Timestamp | First Name | Last Name | Arrival Date | Arrival Time |
//    Engagement | Mehndi | Haldi | Pellikuthuru | Pelli | Reception | Note
// 2. Extensions > Apps Script, delete the boilerplate, paste this file's contents.
// 3. Deploy > New deployment > type "Web app".
//    Execute as: Me. Who has access: Anyone.
// 4. Copy the deployed URL (ends in /exec) into the RSVP_SHEET_URL env var on Vercel.

var EVENT_NAMES = ["Engagement", "Mehndi", "Haldi", "Pellikuthuru", "Pelli", "Reception"];

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  // If the guest isn't sure of their travel dates, mark every event Tentative
  // rather than relying on individual per-event selections.
  var eventCells = EVENT_NAMES.map(function (name) {
    if (data.notSure) return "Tentative";
    var status = (data.events || {})[name];
    if (status === "yes") return "Yes";
    if (status === "tentative") return "Tentative";
    return "No";
  });

  var row = [
    new Date(),
    data.first || "",
    data.last || "",
    data.notSure ? "Not sure yet" : data.arrivalDate || "",
    data.notSure ? "" : data.arrivalTime || "",
  ]
    .concat(eventCells)
    .concat([data.note || ""]);

  sheet.appendRow(row);

  return ContentService.createTextOutput(JSON.stringify({ status: "ok" })).setMimeType(
    ContentService.MimeType.JSON
  );
}
