const https = require('https');

const TOOL_NAME = 'Creatify AI';
const url = process.argv[2] || 'https://creatify.ai';

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const code = 'card';
    console.log(`[${TOOL_NAME}] Status: ${res.statusCode}`);
    console.log(`[${TOOL_NAME}] Length: ${data.length} chars`);
    console.log(`[${TOOL_NAME}] Promo Code: ${code}`);
    console.log(`[${TOOL_NAME}] Price: $39`);
    console.log(`[${TOOL_NAME}] Discount: 15% off`);
  });
}).on('error', (err) => {
  console.error(`[${TOOL_NAME}] Error: ${err.message}`);
});
