function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('受付回数回答') || ss.insertSheet('受付回数回答');

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['送信日時', '店舗名', '名前', '難易度', '得点', '満点', '正答率', '回答詳細']);
  }

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp || new Date(),
    data.store || '',
    data.name || '',
    data.difficulty || '',
    data.score || 0,
    data.total || 0,
    data.percent || 0,
    data.answers || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
