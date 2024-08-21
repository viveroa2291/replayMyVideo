import { JSDOM } from 'jsdom'

const getRumbleUrl = async () => {
    // const response = await fetch('https://x.com/dondatimes/status/1753797053019308420'); // X Link
    const response = await fetch('https://rumble.com/v4yjhvh-city-in-the-sky-kanye-west.html'); 
    if(!response.ok) {
      throw new Error(`HTPP error: ${response.status}`)
    }
    const html = await response.text()

    const dom = new JSDOM(html)
    const document = dom.window.document

    const downloads = document.querySelector('.downloads')
    console.log('html', html)
    return ''
}

export default getRumbleUrl; 