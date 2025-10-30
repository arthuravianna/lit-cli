export async function isCidPinned(cid:string, PINATA_JWT: string) {
  const url = new URL('https://api.pinata.cloud/data/pinList');
  url.searchParams.set('hashContains', cid);
  try {
    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${PINATA_JWT}` },
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Pinata pinList error ${res.status}: ${text}`);
    }
    const data = await res.json();
    const rows = data?.rows || data?.items || [];
    // Try to find an exact hash match
    return rows.some((r: any) => r?.ipfs_pin_hash === cid || r?.IpfsHash === cid || r?.hash === cid);
  } catch (e) {
    const error = e as Error;
    console.warn(
        'Warning: Failed to check existing Pinata pins. Proceeding to upload.',
        error instanceof Error ? error?.message || error : error
    );
    return false;
  }
}

export async function uploadToIPFS(filename:string, fileContent:string, PINATA_JWT: string) {
  try {
    const form = new FormData();
    form.append('file', new Blob([fileContent], { type: 'application/javascript' }), filename);

    const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PINATA_JWT}`,
      },
      body: form,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${text}`);
    }

    const data = await response.json();
    return data.IpfsHash;
  } catch (error) {
    console.error('Error uploading to IPFS:', error);
    throw error;
  }
}
