import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.historymuseum.ca/exhibitions/'
exb_nums = 2
titles_selector = "#hwm-hero .hwm-poster-title"
dates_selector = "#hwm-hero .hwm-poster-date"
thumbnails_selector = "#hwm-hero .hwm-poster-image"
details_links_selector = "#hwm-hero .hwm-poster-wrapper"
details_content_selector = "#QOE-about-feature-text_1"
category = "museum"
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,category
    )