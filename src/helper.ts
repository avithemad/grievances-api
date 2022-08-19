export const convertSheetToJson = (sheetData: any[][]): any[] => {
  // Extract fields from first row
  const headerRow = headersToCamelCase(sheetData[0]);
  const result: any[] = [];
  sheetData.shift();
  sheetData.forEach((element, index) => {
    const record: any = {};
    element.forEach((cell, index) => {
      record[headerRow[index]] = cell;
    });
    result.push(record);
  });
  return result;
};
export const headersToCamelCase = (headerRow: any[]): any[] => {
  const result: any[] = [];
  headerRow.forEach((element) => {
    // convert header to camel case and push
    result.push(
      element
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, function (match: any, chr: string) {
          return chr.toUpperCase();
        })
    );
  });
  return result;
};
