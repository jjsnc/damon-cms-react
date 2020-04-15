import FastScanner from 'fastscan'

// var words = ["今日头条","微信", "支付宝"]
// var scanner = new FastScanner(words)
// var content = "今日头条小程序终于来了，这是继微信、支付宝、百度后，第四个推出小程序功能的App。猫眼电影率先试水，出现在今日头条。"
// var offWords = scanner.search(content)
// console.log(offWords)
// var hits = scanner.hits(content)
// console.log(hits)

/**
 * @param {string} word
 * @param {string} content
 */
export async function searchForWord(word, content) {
    const scanner = new FastScanner(word)
    const offWords = scanner.search(content)
    return offWords
}

/**
 * @param {Array<string>} words
 * @param {string} content
 */
export async function searchForWords(words, content) {
    const scanner = new FastScanner(words)
    const offWords = scanner.search(content)
    return offWords
}

/**
 * @param {string} keyword
 * @param {Array} logs
 */
export async function searchLogKeyWord(keyword, logs, className = 'strong') {
    const _logs = logs.map(log => {
        let msg = log.message
        msg = msg.replace(RegExp(`${keyword}`, 'g'), `<spam className="${className}">${keyword}</spam>`)
        log.message = msg
        return log
    })
    return _logs
}

