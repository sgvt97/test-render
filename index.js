const express = require('express');
const { BlobServiceClient } = require('@azure/storage-blob');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/images', async (req, res) => {
  const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
  const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME;

  if (!connectionString || !containerName) {
    return res.status(500).json({
      error: 'Azure Storage is not configured. Please set AZURE_STORAGE_CONNECTION_STRING and AZURE_STORAGE_CONTAINER_NAME environment variables.'
    });
  }

  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg']);
    const urls = [];

    for await (const blob of containerClient.listBlobsFlat()) {
      const ext = path.extname(blob.name).toLowerCase();
      if (imageExtensions.has(ext)) {
        const blockBlobClient = containerClient.getBlockBlobClient(blob.name);
        urls.push(blockBlobClient.url);
      }
    }

    res.json({ images: urls });
  } catch (err) {
    res.status(500).json({ error: `Failed to retrieve images from Azure Blob Storage: ${err.message}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
