import { JSDOM } from 'jsdom'

const getRumbleUrl = async () => {
    const response = await fetch('https://publish.twitter.com/'); // X Link
    // const response = await fetch('https://rumble.com/v4yjhvh-city-in-the-sky-kanye-west.html'); 
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