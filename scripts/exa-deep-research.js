// CLI & Module: Deep Research qua Exa.ai API
// Nạp tri thức kỹ thuật từ các nguồn quốc tế uy tín vào wiki/knowledge/
// Cách dùng CLI:
//   node scripts/exa-deep-research.js "ASTM D4607 activated carbon iodine number" [--save=wiki/knowledge/ly-thuyet-hap-phu-than-hoat-tinh.md] [--num=5]
const fs = require('fs');
const path = require('path');
const https = require('https');
const { getEnv } = require('./lib/env-loader');

function requestExa(endpoint, payload, apiKey) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(payload);
    const options = {
      hostname: 'api.exa.ai',
      port: 443,
      path: endpoint,
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        'User-Agent': 'Antigravity-DeepResearch/1.0'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`Exa API HTTP ${res.statusCode}: ${body}`));
          return;
        }
        try {
          resolve(JSON.parse(body));
        } catch(e) {
          reject(new Error(`Lỗi parse JSON từ Exa: ${body}`));
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function searchExa(query, options = {}) {
  const apiKey = options.apiKey || getEnv('EXA_API_KEY');
  if (!apiKey) {
    throw new Error('Thiếu EXA_API_KEY trong .agents/.env hoặc biến môi trường process.env.EXA_API_KEY');
  }

  const numResults = options.numResults || 5;
  const useAutoprompt = options.useAutoprompt !== undefined ? options.useAutoprompt : true;
  const type = options.type || 'neural';
  const includeDomains = options.includeDomains || undefined;

  const payload = {
    query: query,
    type: type,
    useAutoprompt: useAutoprompt,
    numResults: numResults,
    contents: {
      text: {
        maxCharacters: options.maxCharacters || 3500
      },
      summary: true
    }
  };

  if (includeDomains && Array.isArray(includeDomains) && includeDomains.length > 0) {
    payload.includeDomains = includeDomains;
  }

  return await requestExa('/search', payload, apiKey);
}

async function main() {
  const args = process.argv.slice(2);
  const query = args.filter(a => !a.startsWith('--')).join(' ');

  if (!query) {
    console.log('Cách dùng: node scripts/exa-deep-research.js "<truy vấn>" [--save=<file_path>] [--num=5] [--domains=epa.gov,sciencedirect.com]');
    process.exit(1);
  }

  const saveArg = args.find(a => a.startsWith('--save='));
  const savePath = saveArg ? saveArg.slice('--save='.length) : null;

  const numArg = args.find(a => a.startsWith('--num='));
  const numResults = numArg ? parseInt(numArg.slice('--num='.length)) : 5;

  const domainsArg = args.find(a => a.startsWith('--domains='));
  const includeDomains = domainsArg ? domainsArg.slice('--domains='.length).split(',').map(d => d.trim()) : undefined;

  console.log(`🔍 Đang gửi truy vấn Deep Research tới Exa.ai: "${query}"...`);
  try {
    const result = await searchExa(query, {
      numResults: numResults,
      includeDomains: includeDomains
    });

    console.log(`✅ Nhận được ${result.results ? result.results.length : 0} kết quả nghiên cứu chất lượng cao:\n`);

    let outputMarkdown = `# Kết Quả Deep Research: ${query}\n\n`;
    outputMarkdown += `- **Thời gian trích xuất**: ${new Date().toISOString()}\n`;
    outputMarkdown += `- **Nguồn tổng hợp**: Exa.ai Neural Search Engine\n\n---\n\n`;

    if (result.results && result.results.length > 0) {
      result.results.forEach((item, idx) => {
        console.log(`[${idx + 1}] ${item.title}`);
        console.log(`    🔗 URL: ${item.url}`);
        console.log(`    💡 Summary: ${item.summary ? item.summary.slice(0, 150) + '...' : 'N/A'}\n`);

        outputMarkdown += `## ${idx + 1}. [${item.title}](${item.url})\n\n`;
        outputMarkdown += `- **Tác giả / Nguồn**: ${item.author || 'N/A'}\n`;
        outputMarkdown += `- **Ngày công bố**: ${item.publishedDate || 'N/A'}\n`;
        if (item.summary) {
          outputMarkdown += `\n> **Tóm tắt cốt lõi**: ${item.summary}\n\n`;
        }
        if (item.text) {
          outputMarkdown += `### Trích dẫn nội dung kỹ thuật:\n\n${item.text}\n\n`;
        }
        outputMarkdown += `---\n\n`;
      });
    }

    if (savePath) {
      const fullPath = path.isAbsolute(savePath) ? savePath : path.join(process.cwd(), savePath);
      const parentDir = path.dirname(fullPath);
      if (!fs.existsSync(parentDir)) fs.mkdirSync(parentDir, { recursive: true });

      if (fs.existsSync(fullPath)) {
        fs.appendFileSync(fullPath, `\n\n${outputMarkdown}`, 'utf8');
        console.log(`📝 Đã bổ sung dữ liệu nghiên cứu vào file: ${fullPath}`);
      } else {
        fs.writeFileSync(fullPath, outputMarkdown, 'utf8');
        console.log(`📝 Đã lưu tài liệu nghiên cứu mới tại: ${fullPath}`);
      }
    } else {
      console.log('💡 Gợi ý: Dùng cờ --save=wiki/knowledge/<ten-file>.md để lưu trực tiếp vào kho tri thức.');
    }
  } catch (error) {
    console.error(`❌ Lỗi Deep Research Exa.ai:`, error.message);
    if (error.message.includes('Thiếu EXA_API_KEY')) {
      console.log('\n👉 Vui lòng kiểm tra EXA_API_KEY trong file .agents/.env');
    }
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { searchExa, requestExa };
