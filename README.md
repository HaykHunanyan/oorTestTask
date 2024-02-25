# Location API

This API allows users to manage location information similar to Tripadvisor.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server with `npm run start`.

## Usage

- To create a location document: Send a POST request to `/api/locations`.
- To retrieve all location documents: Send a GET request to `/api/locations`.
- To retrieve a specific location document by ID: Send a GET request to `/api/locations/{location_id}`.
- To update a location document by ID: Send a PATCH request to `/api/locations/{location_id}`.
- To delete a location document by ID: Send a DELETE request to `/api/locations/{location_id}`.

For detailed API documentation, refer to the Swagger/OpenAPI documentation.
