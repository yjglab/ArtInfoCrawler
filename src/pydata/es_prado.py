import infoCrawler

url = 'https://www.pradomuseumtickets.com/prado-museum-exhibitions/'
titles_selector = ".hmDdQg"
dates_selector = ".card-content-section > p:last-child"

infoCrawler.print_msm_data(url, titles_selector, dates_selector)