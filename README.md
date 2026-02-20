# test-render

Slideshow webapp pulling images from Azure Blob Storage.

## Setup

Copy `.env.example` to `.env` and fill in your values:

```
AZURE_STORAGE_CONNECTION_STRING=your_connection_string_here
AZURE_STORAGE_CONTAINER_NAME=your_container_name_here
```

## Render Deployment

**Build command:**
```
npm install
```

**Start command:**
```
npm start
```

Set the following environment variables in your Render service:

| Variable | Description |
|---|---|
| `AZURE_STORAGE_CONNECTION_STRING` | Azure Blob Storage connection string |
| `AZURE_STORAGE_CONTAINER_NAME` | Azure Blob Storage container name |