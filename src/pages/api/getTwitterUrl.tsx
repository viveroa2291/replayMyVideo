import { JSDOM } from 'jsdom'

const getTwitterUrl = async () => {
    const response = await fetch('https://publish.twitter.com/'); // X Link
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

export default getTwitterUrl; 