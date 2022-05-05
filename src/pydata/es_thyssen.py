import infoCrawler

url = 'https://www.museothyssen.org/en/exhibitions'
exb_nums = 2
titles_selector = ".snippet__title "
dates_selector = ".snippet__text"
thumbnails_selector = ".snippet img:first-child"
details_links_selector = ".snippet > a"
details_content_selector = ""

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )