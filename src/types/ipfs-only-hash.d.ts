declare module 'ipfs-only-hash' {
  /**
   * Calculate the IPFS hash for some data
   * @param content - The content to hash (string or Uint8Array)
   * @param options - Optional parameters for the hashing process
   * @returns Promise that resolves to the IPFS hash as a string
   */
  export function of(content: string | Uint8Array, options?: {
    cidVersion?: 0 | 1;
    rawLeaves?: boolean;
    onlyHash?: boolean;
    [key: string]: any;
  }): Promise<string>;
}