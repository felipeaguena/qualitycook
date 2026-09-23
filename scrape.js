const fs = require('fs');
const https = require('https');
const path = require('path');

async function scrape() {
    const res = await fetch('https://qualitycook.com.br/');
    const html = await res.text();
    
    // Very basic regex to find image URLs
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    const images = [];
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
        images.push(match[1]);
    }

    // Basic regex to find some texts
    const textRegex = /<h[1-6][^>]*>(.*?)<\/h[1-6]>/g;
    const texts = [];
    while ((match = textRegex.exec(html)) !== null) {
        texts.push(match[1].replace(/<[^>]+>/g, '').trim());
    }

    const pRegex = /<p[^>]*>(.*?)<\/p>/g;
    while ((match = pRegex.exec(html)) !== null) {
        texts.push(match[1].replace(/<[^>]+>/g, '').trim());
    }
    
    fs.writeFileSync('site-data.json', JSON.stringify({ images, texts }, null, 2));
    console.log('Data saved to site-data.json');
}

scrape();
