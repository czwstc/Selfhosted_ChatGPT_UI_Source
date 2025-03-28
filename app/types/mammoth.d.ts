declare module "mammoth" {
  interface MammothOptions {
    arrayBuffer: ArrayBuffer;
    styleMap?: string;
  }

  interface MammothResult {
    value: string;
    messages: Array<{
      type: string;
      message: string;
    }>;
  }

  export function convertToHtml(
    options: MammothOptions,
  ): Promise<MammothResult>;
  export function extractRawText(
    options: MammothOptions,
  ): Promise<MammothResult>;
}
