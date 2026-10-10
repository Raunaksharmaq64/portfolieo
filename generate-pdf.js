import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

(async () => {
  console.log('Launching browser compiler...');
  const browser = await chromium.launch({ 
    headless: true
  });
  const page = await browser.newPage();
  
  // Load local HTML file
  const filePath = path.resolve('public/resume.html');
  console.log(`Loading: file://${filePath}`);
  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle' });
  
  // Compile to PDF
  console.log('Generating PDF (A4 format)...');
  // Emulate screen or print
  await page.emulateMedia({ media: 'print' });

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px'
    }
  });
  
  fs.writeFileSync('Raunak_Sharma_Resume.pdf', pdfBuffer);
  fs.writeFileSync('public/assets/images/Raunak_Resume.pdf', pdfBuffer);
  
  if (fs.existsSync('dist/assets/images')) {
    fs.writeFileSync('dist/assets/images/Raunak_Resume.pdf', pdfBuffer);
  }
  
  await browser.close();
  console.log('PDF Generated Successfully as: Raunak_Sharma_Resume.pdf & public/assets/images/Raunak_Resume.pdf');
})();
