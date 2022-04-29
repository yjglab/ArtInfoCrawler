import infoCrawler

url = 'https://www.pradomuseumtickets.com/prado-museum-exhibitions/'
titles_selector = ".card-content-section:nth-child(n+2) h3"
dates_selector = ".card-content-section > p:last-child"
thumbnails_selector = ".Image__Picture-q20dtc-0 > img"
details_selector = ".card-content-section:nth-child(n+2) p:nth-of-type(1)"
infoCrawler.print_msm_data(
    url, 
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_selector
    )