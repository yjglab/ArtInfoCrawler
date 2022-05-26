import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.historymuseum.ca/exhibitions/'
exb_nums = 1
titles_selector = "#today_filter .hwm-poster-title"
dates_selector = "#today_filter .hwm-poster-date"
thumbnails_selector = "#today_filter .hwm-poster-image"
details_links_selector = "#today_filter .hwm-poster-wrapper"
details_content_selector = ".post-content-main"
category = "museum"
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )