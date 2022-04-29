import infoCrawler

url = 'https://www.nationalgallery.org.uk/exhibitions'
exb_nums = 7
titles_selector = ".exhibition-title"
dates_selector = ".exhibition-date"
thumbnails_selector = ".card-img-top .w-100 > div"
details_selector = ".exhibition-img-link a"
details_content_selector = "div.body-text"
infoCrawler.print_msm_data(
    url,
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_selector,
    details_content_selector,
    )