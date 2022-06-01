import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.artgallery.nsw.gov.au/whats-on/exhibitions/'
exb_nums = 5
titles_selector = ".card-exhibition-title"
dates_selector = ".card-exhibition-dates"
thumbnails_selector = ".image-picture img"
details_links_selector = ".card-exhibition-link"
details_content_selector = ".textModule p:first-child"
category = "gallery"
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )