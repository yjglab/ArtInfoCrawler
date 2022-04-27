import infoCrawler

url = 'https://www.britishmuseum.org/exhibitions-events'
titles_selector = ".teaser__title > span:nth-child(1)"
# dates_selector = ".teaser__meta > li:nth-child(2)"
dates_selector = ".teaser__meta-item:nth-child(2)"
thumbnails_selector = ".media img"

infoCrawler.print_msm_data(
    url, 
    titles_selector, 
    dates_selector, 
    thumbnails_selector
    )

