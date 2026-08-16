/**
 * Hackathon TEAM registrations → Google Sheet
 * Sheet: https://docs.google.com/spreadsheets/d/1iEJ6luQu0dmrjtUqyzSm82SwhsuypUjKHSw2fomh7cE/edit
 *
 * Writes two tabs:
 *   "Registrations" — ONE row per team, carrying the full details of all four
 *                     people (lead + up to 3 members). 36 columns.
 *   "Members"       — one row per person, for filtering/sorting individuals.
 *
 * Headers are rewritten automatically if they no longer match, so you do not
 * need to delete the tab after changing the columns below.
 *
 * After ANY edit here: Deploy → Manage deployments → pencil icon →
 * Version: New version → Deploy. Saving alone does not update the live URL.
 */

var SHEET_ID = '1iEJ6luQu0dmrjtUqyzSm82SwhsuypUjKHSw2fomh7cE';
var TEAMS_SHEET = 'Registrations';
var MEMBERS_SHEET = 'Members';

/** Per-person column labels, repeated for the lead and each member. */
function personHeaders(prefix) {
  return [
    prefix + ' Name',
    prefix + ' Email',
    prefix + ' Phone',
    prefix + ' Role',
    prefix + ' Experience',
    prefix + ' GitHub',
    prefix + ' LinkedIn'
  ];
}

var TEAM_HEADERS = []
  .concat(['Submitted At', 'Team Name', 'Company / Organization', 'Team Size'])
  .concat(personHeaders('Lead'))
  .concat(personHeaders('Member 1'))
  .concat(personHeaders('Member 2'))
  .concat(personHeaders('Member 3'))
  .concat(['Project Idea', 'Newsletter Opt-in']);

var MEMBER_HEADERS = [
  'Submitted At',
  'Team Name',
  'Position',
  'First Name',
  'Last Name',
  'Email',
  'Phone',
  'Role',
  'Experience',
  'GitHub',
  'LinkedIn'
];

function doPost(e) {
  // Serialise appends so two simultaneous submissions cannot collide.
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (err) {
    return json({ ok: false, error: 'busy' });
  }

  try {
    var d = JSON.parse(e.postData.contents);
    var when = d.submittedAt || new Date().toISOString();
    var lead = d.lead || {};
    var members = d.members || [];

    // 1. One row per team — everyone's details on the same line.
    var row = [when, d.teamName || '', d.company || '', d.teamSize || '']
      .concat(personCells(lead))
      .concat(personCells(members[0]))
      .concat(personCells(members[1]))
      .concat(personCells(members[2]))
      .concat([
        d.projectIdea || '',
        d.agreeNewsletter ? 'Yes' : 'No'
      ]);

    getSheet(TEAMS_SHEET, TEAM_HEADERS).appendRow(row);

    // 2. One row per person, for filtering.
    var peopleSheet = getSheet(MEMBERS_SHEET, MEMBER_HEADERS);
    peopleSheet.appendRow(personRow(when, d.teamName, 'Team Lead', lead));
    for (var i = 0; i < members.length; i++) {
      peopleSheet.appendRow(personRow(when, d.teamName, 'Member ' + (i + 1), members[i]));
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Open the /exec URL in a browser to confirm the deployment is live. */
function doGet() {
  return json({ ok: true, message: 'Hackathon team registration endpoint is live (v2, all members)' });
}

/** Seven cells for one person; blanks when the slot is unused. */
function personCells(p) {
  p = p || {};
  return [
    fullName(p),
    p.email || '',
    p.phone || '',
    p.role || '',
    p.experience || '',
    p.github || '',
    p.linkedin || ''
  ];
}

function personRow(when, teamName, position, p) {
  p = p || {};
  return [
    when,
    teamName || '',
    position,
    p.firstName || '',
    p.lastName || '',
    p.email || '',
    p.phone || '',
    p.role || '',
    p.experience || '',
    p.github || '',
    p.linkedin || ''
  ];
}

function fullName(p) {
  return [(p || {}).firstName || '', (p || {}).lastName || ''].join(' ').trim();
}

function getSheet(name, headers) {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName(name);

  if (!sheet) {
    sheet = ss.insertSheet(name);
  }

  // Write headers on a fresh tab, or refresh them if the columns have changed.
  var needsHeaders = sheet.getLastRow() === 0;
  if (!needsHeaders) {
    var lastCol = sheet.getLastColumn();
    var current = sheet.getRange(1, 1, 1, Math.max(lastCol, 1)).getValues()[0];
    needsHeaders = current.length !== headers.length ||
      String(current[current.length - 1]) !== headers[headers.length - 1];
  }

  if (needsHeaders) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 170);
  }

  return sheet;
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
