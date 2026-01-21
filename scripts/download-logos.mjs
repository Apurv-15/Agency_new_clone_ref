/**
 * Logo Download and Processing Script (Improved)
 * Downloads partner logos from reliable sources and converts them to standardized JPEG format
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { execSync } from 'child_process';

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'assets', 'partners');

const LOGO_SOURCES = [
    {
        name: 'Varroc',
        filename: 'varroc.jpg',
        domain: 'varroc.com',
        sources: [
            'https://www.varroc.com/wp-content/uploads/2021/08/varroc-logo.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Varroc_logo.png/800px-Varroc_logo.png'
        ]
    },
    {
        name: 'Greaves Cotton',
        filename: 'greaves.jpg',
        domain: 'greavescotton.com',
        sources: [
            'https://upload.wikimedia.org/wikipedia/commons/9/98/Greaves_Cotton_New_Logo.png',
            'https://im.proptiger.com/1/658043/6/greaves-cotton-logo-10332859.jpeg'
        ]
    },
    {
        name: 'Videocon',
        filename: 'videocon.jpg',
        domain: 'videocon.com',
        sources: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Videocon_logo.svg/1280px-Videocon_logo.svg.png'
        ]
    },
    {
        name: 'Endurance Technologies',
        filename: 'endurance.jpg',
        domain: 'endurancegroup.com',
        sources: [
            'https://upload.wikimedia.org/wikipedia/commons/0/0f/Endurance_Technologies_logo.png',
            'https://www.endurancegroup.com/wp-content/themes/endurance/images/logo.png'
        ]
    },
    {
        name: 'Sterlite Technologies',
        filename: 'sterlite.jpg',
        domain: 'stl.tech',
        sources: [
            'https://www.stl.tech/wp-content/uploads/2023/05/stl-logo.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Sterlite_Technologies_Limited.svg/1200px-Sterlite_Technologies_Limited.svg.png'
        ]
    },
    {
        name: 'Ceekay Daikin',
        filename: 'ceekay.jpg',
        domain: 'daikinindia.com',
        sources: [
            'https://www.daikinindia.com/sites/default/files/daikin_logo.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Daikin_logo.svg/1200px-Daikin_logo.svg.png'
        ]
    },
    {
        name: 'DSK Digital',
        filename: 'dsk.jpg',
        domain: 'dskdigital.com',
        sources: [
            'https://logo.clearbit.com/dskdigital.com'
        ]
    },
    {
        name: 'Bartronics',
        filename: 'bartronics.jpg',
        domain: 'bartronics.com',
        sources: [
            'https://logo.clearbit.com/bartronics.com',
            'https://dir.indiamart.com/search.mp?ss=bartronics+india+limited'
        ]
    },
    {
        name: 'Mother Dairy',
        filename: 'motherdairy.jpg',
        domain: 'motherdairy.com',
        sources: [
            'https://www.motherdairy.com/images/logo.png',
            'https://upload.wikimedia.org/wikipedia/commons/f/f7/Mother_Dairy_Logo.png'
        ]
    },
    {
        name: 'Maharashtra Gramin Bank',
        filename: 'mgb.jpg',
        domain: 'mahagramin.in',
        sources: [
            'https://upload.wikimedia.org/wikipedia/commons/f/f1/Mgb_logo.png'
        ]
    },
    {
        name: 'NDDB',
        filename: 'nddb.jpg',
        domain: 'nddb.coop',
        sources: [
            'https://nddb.coop/sites/default/files/nddb_logo.png'
        ]
    },
    {
        name: 'Mission Milk',
        filename: 'missionmilk.jpg',
        domain: 'nddb.coop',
        sources: [
            'https://nddb.coop/sites/default/files/ndp_logo.png'
        ]
    },
    {
        name: 'Sujan Corporate Wisdom',
        filename: 'sujan.jpg',
        domain: 'sujan.in',
        sources: [
            'https://www.sujan.in/images/sujan-logo.png'
        ]
    },
    {
        name: 'AIOCD AWACS',
        filename: 'aiocd.jpg',
        domain: 'aiocdawacs.com',
        sources: [
            'https://aiocdawacs.com/images/logo.png'
        ]
    },
    {
        name: 'Aegis',
        filename: 'aegis.jpg',
        domain: 'aegisglobal.com',
        sources: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/AEGIS_Logo.svg/1200px-AEGIS_Logo.svg.png'
        ]
    },
    {
        name: 'Amul',
        filename: 'amul.jpg',
        domain: 'amul.com',
        sources: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Amul_official_logo.svg/1280px-Amul_official_logo.svg.png',
            'https://amul.com/m/images/logo.png'
        ]
    }
];

const agent = new https.Agent({
    rejectUnauthorized: false
});

async function downloadFile(url) {
    return new Promise((resolve, reject) => {
        // Determine protocol
        const protocol = url.startsWith('https') ? https : http;
        const options = {
            agent,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
                'Referer': new URL(url).origin
            }
        };

        const req = protocol.get(url, options, (res) => {
            // Handle redirects manually if needed, but usually protocol.get handles them if we don't pass custom agent sometimes? 
            // Actually standard node https.get does NOT follow redirects automatically.

            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                downloadFile(res.headers.location).then(resolve).catch(reject);
                return;
            }

            if (res.statusCode !== 200) {
                reject(new Error(`Status ${res.statusCode}`));
                return;
            }

            const chunks = [];
            res.on('data', chunk => chunks.push(chunk));
            res.on('end', () => resolve(Buffer.concat(chunks)));
            res.on('error', reject);
        });

        req.on('error', reject);
        req.setTimeout(10000, () => {
            req.destroy();
            reject(new Error('Timeout'));
        });
    });
}

// Clearbit fallback
async function downloadFromClearbit(domain) {
    if (!domain) return null;
    const url = `https://logo.clearbit.com/${domain}?size=800&format=png`;
    try {
        console.log(`  Attempting Clearbit: ${url}`);
        return await downloadFile(url);
    } catch (e) {
        return null;
    }
}

async function processImage(buffer, outputPath) {
    try {
        await sharp(buffer)
            .flatten({ background: '#ffffff' })
            .resize(1200, 600, {
                fit: 'contain',
                background: '#ffffff'
            })
            .jpeg({ quality: 90 })
            .toFile(outputPath);
        return true;
    } catch (e) {
        console.error(`  Processing failed: ${e.message}`);
        return false;
    }
}

async function generatePlaceholder(name, outputPath) {
    const svg = `
    <svg width="1200" height="600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f8f9fa"/>
          <stop offset="100%" stop-color="#dee2e6"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <text x="50%" y="50%" font-family="Arial" font-size="64" fill="#495057" text-anchor="middle" dominant-baseline="middle" font-weight="bold">${name}</text>
    </svg>
  `;
    await sharp(Buffer.from(svg))
        .jpeg()
        .toFile(outputPath);
}

async function main() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const results = [];

    for (const partner of LOGO_SOURCES) {
        console.log(`\nProcessing ${partner.name}...`);
        const outputPath = path.join(OUTPUT_DIR, partner.filename);
        let success = false;
        let sourceUsed = '';

        // 1. Try defined sources
        for (const source of partner.sources) {
            try {
                console.log(`  Trying: ${source}`);
                const buffer = await downloadFile(source);
                if (await processImage(buffer, outputPath)) {
                    console.log(`  ✓ Success`);
                    success = true;
                    sourceUsed = source;
                    break;
                }
            } catch (e) {
                console.log(`  ✗ Failed: ${e.message}`);
            }
        }

        // 2. Try Clearbit if not successful
        if (!success) {
            try {
                const buffer = await downloadFromClearbit(partner.domain);
                if (buffer && await processImage(buffer, outputPath)) {
                    console.log(`  ✓ Success (Clearbit)`);
                    success = true;
                    sourceUsed = `Clearbit (${partner.domain})`;
                }
            } catch (e) { }
        }

        // 3. Fallback to placeholder
        if (!success) {
            console.log(`  ⚠ Generating placeholder`);
            await generatePlaceholder(partner.name, outputPath);
            sourceUsed = 'Placeholder (Auto-generated)';
        }

        results.push({ ...partner, success, sourceUsed });
    }

    // Generate Report
    const report = `# Partner Logos Sources
Generated: ${new Date().toLocaleString()}

| Partner | Status | Source |
|---------|--------|--------|
${results.map(r => `| ${r.name} | ${r.success ? '✓' : '⚠'} | ${r.sourceUsed} |`).join('\n')}
`;
    fs.writeFileSync(path.join(OUTPUT_DIR, 'SOURCES.md'), report);
}

main();
