const puppeteer = require('puppeteer')

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' })
  await page.addStyleTag({
    content: '@page { size: auto; }'
  })
  const pdf = await page.pdf({
    path: 'cover_letter.pdf',
    format: 'A4',
    printBackground: true
  })

  await browser.close()
  return pdf
}

printPDF()
