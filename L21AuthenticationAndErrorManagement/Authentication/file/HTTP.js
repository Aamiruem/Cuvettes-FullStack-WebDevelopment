// ✅ Level 200 – Success
// These indicate the request was successfully received, understood, and accepted.

// 200 OK – Standard response for a successful HTTP request.

// 201 Created – Request has been fulfilled, and a new resource is created (e.g., after a POST request).

// 202 Accepted – Request has been accepted for processing, but not completed yet.

// 203 Non-Authoritative Information – Returned meta-information is not from the origin server (e.g., from a proxy).

// 204 No Content – The server successfully processed the request but is not returning any content.

// ⚠️ Level 400 – Client Errors
// These indicate the client made an error (e.g., bad request, unauthorized access).

// 400 Bad Request – The server could not understand the request due to invalid syntax.

// 401 Unauthorized – Authentication is required and has failed or not been provided.

// 403 Forbidden – The client does not have permission to access the requested resource.

// 404 Not Found – The server cannot find the requested resource.

// 409 Conflict – The request could not be completed due to a conflict (e.g., duplicate data).

// 🛑 Level 500 – Server Errors
// These indicate the server failed to fulfill a valid request.

// 500 Internal Server Error – A generic error occurred on the server.

// 501 Not Implemented – The server does not support the functionality required.

// 502 Bad Gateway – The server received an invalid response from the upstream server.

// 503 Service Unavailable – The server is currently unavailable (overloaded or down).

// 504 Gateway Timeout – The server did not receive a timely response from another server.

// 599 Network Timeout – Non-standard code, often used by custom proxies or APIs to indicate network timeout.

