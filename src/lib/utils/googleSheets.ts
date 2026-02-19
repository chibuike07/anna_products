import { google } from "googleapis";

// Load credentials from environment or a secure location

const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
const SERVICE_ACCOUNT_EMAIL =
  process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(
  /\\n/g,
  "\n",
);

if (!SHEET_ID || !SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
  throw new Error(
    "Google Sheet ID, service account email, or private key not set in environment variables.",
  );
}

const auth = new google.auth.JWT({
  email: SERVICE_ACCOUNT_EMAIL,
  key: PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

export const fetchSheetData = async ({ tabName }: { tabName: string }) => {
  const sheets = google.sheets({ version: "v4", auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: tabName,
  });
  const rows = res.data.values;
  if (!rows || rows.length < 2) return [];
  const [headers, ...dataRows] = rows;
  return dataRows.map((row) => {
    const obj: Record<string, string> = {};
    headers.forEach((header, i) => {
      obj[header] = row[i] || "";
    });
    return obj;
  });
};

export const getProducts = async () => fetchSheetData({ tabName: "Products" });
export const getCategories = async () =>
  fetchSheetData({ tabName: "Categories" });
