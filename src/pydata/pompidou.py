import infoCrawler

url = 'https://www.centrepompidou.fr/en/'
titles_selector = ".card-title"
dates_selector = ".dateEvenement"

infoCrawler.print_msm_data(url, titles_selector, dates_selector)