import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'http://www.btm.hu/hu/events'
exb_nums = 3
titles_selector = ".exhibition-detail-element h2 a"
dates_selector = ".exhibition-detail-element .exhibition-metadata"
thumbnails_selector = ".exhibition-detail-element .exhibition-detail-image"
details_links_selector = ".exhibition-detail-element h2 a"
details_content_selector = ".content"
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