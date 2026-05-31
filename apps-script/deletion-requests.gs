const SHEET_NAME = "Sheet1";
const DEFAULT_STATUS = "Requested";

function doPost(e) {
  const params = e.parameter || {};
  const user = cleanValue(params.user);
  const userId = cleanValue(params.userId);
  const game = cleanValue(params.game) || "LineIQ";
  const status = cleanValue(params.status) || DEFAULT_STATUS;

  if (!user || !userId) {
    return htmlResponse("Missing required user or ID value.");
  }

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getSheets()[0];

  // Sheet columns: User, ID, Game, Date, Status
  sheet.appendRow([user, userId, game, new Date(), status]);

  return htmlResponse("Deletion request received.");
}

function cleanValue(value) {
  return String(value || "").trim().slice(0, 500);
}

function htmlResponse(message) {
  return HtmlService.createHtmlOutput(message);
}
