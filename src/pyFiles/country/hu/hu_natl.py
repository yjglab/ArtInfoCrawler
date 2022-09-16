import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://mnm.hu/en/exhibitions'
exb_nums = 3
titles_selector = ".title-slider-always-visible-area > h3"
dates_selector = "meta"
thumbnails_selector = ".item-cover"
details_links_selector = ".node-link-overlay"
details_content_selector = ".content-box"
category = "museum"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    category,
    )