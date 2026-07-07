// Google Apps Script — bind this to the Google Sheet that should collect RSVPs.
// Deployment steps: see the RSVP section in the project README/chat instructions.
//
// 1. Create a Google Sheet with a header row:
//    Timestamp | First Name | Last Name | Arrival Date | Arrival Time | Events | Note
// 2. Extensions > Apps Script, delete the boilerplate, paste this file's contents.
// 3. Deploy > New deployment > type "Web app".
//    Execute as: Me. Who has access: Anyone.
// 4. Copy the deployed URL (ends in /exec) into the RSVP_SHEET_URL env var on Vercel.

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  var eventsAttending = Object.keys(data.events || {})
    .map(function (name) {
      return name + " (" + data.events[name] + ")";
    })
    .join(", ");

  sheet.appendRow([
    new Date(),
    data.first || "",
    data.last || "",
    data.notSure ? "Not sure yet" : data.arrivalDate || "",
    data.notSure ? "" : data.arrivalTime || "",
    eventsAttending,
    data.note || "",
  ]);

  return ContentService.createTextOutput(JSON.stringify({ status: "ok" })).setMimeType(
    ContentService.MimeType.JSON
  );
}
