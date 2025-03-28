declare module "xlsx" {
  export function read(data: Uint8Array, options: { type: string }): Workbook;

  export interface Workbook {
    SheetNames: string[];
    Sheets: { [key: string]: WorkSheet };
  }

  export interface WorkSheet {
    [key: string]: any;
  }

  export const utils: {
    sheet_to_json<T>(
      worksheet: WorkSheet,
      options?: { header?: number | string[] },
    ): T[];
  };
}
