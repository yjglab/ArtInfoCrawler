import infoCrawler

url = 'https://www.nationalgallery.org.uk/exhibitions'
titles_selector = ".exhibition-title"
dates_selector = ".exhibition-date"
thumbnails_selector = ".card-img-top .w-100 > div"
details_selector = ".exhibition-img-link a"
infoCrawler.print_msm_data(
    url, 
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_selector,
    )