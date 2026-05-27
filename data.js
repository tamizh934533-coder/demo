function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.time, data.yourName, data.crushName, data.result]);
  return ContentService.createTextOutput("Success");
}
