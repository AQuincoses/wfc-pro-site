// Google Apps Script — paste this into Extensions > Apps Script in your Google Sheet
// Then Deploy > New Deployment > Web App > Execute as "Me" > Access "Anyone"

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  // Add headers if sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Submitted At',
      'Team Name',
      'Contact Name',
      'Email',
      'Phone',
      'Location',
      'Affiliation',
      'Competitive History',
      'Roster',
      'Highlight Reel',
      'References',
      'Sponsorship Info'
    ]);
  }

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.teamName || '',
    data.contactName || '',
    data.email || '',
    data.phone || '',
    data.location || '',
    data.affiliation || '',
    data.history || '',
    data.roster || '',
    data.highlightReel || '',
    data.references || '',
    data.sponsorship || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
