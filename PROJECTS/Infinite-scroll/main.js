(function () {

    
    const quotesEl = document.querySelector('.quotes')
    const loader = document.querySelector('.loader')
    
    
    const getQuotes = async (page, limit) => {
    const API = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`
    const response = await fetch(API)
    
    if (!response.ok) {
        throw new Error (`An error occurred: ${response.status}`)
    }
    
    return await response.json()
}

    // show the quotes 
    const showQuotes = (quotes) => {
        quotes.forEach(quote => {
            const quoteEl = document.createElement('blockquote')
            quoteEl.classList.add('quote')
            
            quoteEl.innerHTML = `
            <span>${quote.id}</span>
            ${quote.quote}
            <footer>${quote.author}</footer>
            `
            
            quotesEl.appendChild(quoteEl)
        });
    }


    // Show/hide loading indicator functions

    const hideLoader =() => {
        loader.classList.remove('show')
    }

    const showLoader = () => {
        loader.classList.add('show')
    }

    let currentPage = 1
    const limit = 10
    let total = 0


    const hasMoreQuotes = (page, limit, total) => {
        const startIndex = (page - 1) * limit + 1
        return total === 0 || startIndex < total
    }

    // load quotes 

    const loadQuotes = async (page, limit) => {
        showLoader()
        
        setTimeout(async () => {
            
            
            try {
                if(hasMoreQuotes(page,limit,total)) {
                    const response = await getQuotes(page, limit)
                    showQuotes(response.data)
                    
                    total = response.total
                }
            } catch (error) {
                console.log(error.message);
            } finally {
                hideLoader()
            }
        }, 2000)
    }

    window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        
        if(scrollTop + clientHeight >= scrollHeight - 5 && hasMoreQuotes(currentPage, limit, total)) {
            currentPage++;
            loadQuotes(currentPage, limit)
        }
    }, {
        passive: true
    })


    loadQuotes(currentPage, limit)
})()