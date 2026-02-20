# test-render

Slideshow webapp pulling images from Azure Blob Storage.

## Setup

Copy `.env.example` to `.env` and fill in your values.

You need to supply **one** of the two authentication options below, plus the container name.

---

### Option 1 – Connection string (Access keys)

The **connection string** is **not** the Blob SAS token or the Blob SAS URL.  
Find it in the Azure Portal:

1. Open your **Storage account**
2. In the left menu go to **Security + networking → Access keys**
3. Click **Show** next to *key1* and copy the **Connection string**

It looks like:
```
DefaultEndpointsProtocol=https;AccountName=<account>;AccountKey=<key>;EndpointSuffix=core.windows.net
```

Set the environment variable:
```
AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=...
```

---

### Option 2 – Blob service SAS URL (limited-access alternative)

A **Blob service SAS URL** gives scoped, time-limited access without exposing your account key.  
Generate one in the Azure Portal:

1. Open your **Storage account**
2. In the left menu go to **Security + networking → Shared access signature**
3. Under **Allowed services** select **Blob**
4. Set the permissions (at minimum: Read, List) and an expiry date
5. Click **Generate SAS and connection string**
6. Copy the **Blob service SAS URL** (starts with `https://<account>.blob.core.windows.net?sv=...`)

Set the environment variable:
```
AZURE_STORAGE_SAS_URL=https://<account>.blob.core.windows.net?sv=...
```

> **Note:** When `AZURE_STORAGE_SAS_URL` is set it takes priority over `AZURE_STORAGE_CONNECTION_STRING`.

---

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
| `AZURE_STORAGE_CONNECTION_STRING` | Connection string from **Access keys** in the Azure Portal (Option 1) |
| `AZURE_STORAGE_SAS_URL` | Blob service SAS URL from **Shared access signature** in the Azure Portal (Option 2) |
| `AZURE_STORAGE_CONTAINER_NAME` | Name of the blob container holding your images |

You only need to set **one** of `AZURE_STORAGE_CONNECTION_STRING` or `AZURE_STORAGE_SAS_URL`.
