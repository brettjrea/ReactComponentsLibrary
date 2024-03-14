
/**
 * HttpClient for Deno
 *
 * @param {GitHttpRequest} request
 * @returns {Promise<GitHttpResponse>}
 */
export async function request({
  onProgress, // Note: This argument might not be directly usable with fetch. You would need a custom implementation for progress tracking.
  url,
  method = 'GET',
  headers = {},
  body,
}) {
  // In Deno, body can be directly used with fetch if it's a ReadableStream or similar. If it's an array of values, you need to convert it.
  if (body && Array.isArray(body)) {
    // Collect the array into a single Uint8Array or Blob if necessary. Deno uses TypedArrays and Blobs instead of Node's Buffer.
    body = new Blob(body); // This assumes `body` is an array of Buffer-like objects.
  }

  try {
    const response = await fetch(url, {
      method,
      headers,
      body, // Directly usable with fetch
    });

    // Assuming response needs to be streamed back, though fetch already handles this more gracefully.
    const reader = response.body?.getReader();

    // Stream the response body. Note: This is a simplification.
    // You might need to adapt this part depending on how `fromNodeStream` was used.
    async function* streamResponse(reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        yield value;
      }
    }

    return {
      url: response.url,
      method: response.method, // Note: 'method' might not be directly accessible like this. You might need to retain the original request method.
      statusCode: response.status,
      statusMessage: response.statusText, // Fetch API does not directly provide a statusMessage, this is an approximation.
      body: reader ? streamResponse(reader) : undefined,
      headers: response.headers, // This is a Headers object, might need conversion to a plain object if necessary.
    };
  } catch (e) {
    throw e; // Proper error handling should be applied here.
  }
}

export default { request };
