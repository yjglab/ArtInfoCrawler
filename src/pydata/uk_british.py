import infoCrawler
# ?
url = 'https://www.britishmuseum.org/exhibitions-events'
exb_nums = 10
titles_selector = ".teaser__title > span:nth-child(1)"
dates_selector = ".teaser__meta-item:nth-child(2)"
thumbnails_selector = ".media img"
details_links_selector = ".teaser__link"
details_contents_selector = ".section--intro__content .h3"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_links_selector,
    details_contents_selector,
    )

