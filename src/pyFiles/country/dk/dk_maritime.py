import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://mfs.dk/en/exhibition/'
exb_nums = 7
titles_selector = ".exhibition-header"
dates_selector = "meta"
thumbnails_selector = ".exhibition-polygon-image-image image"
details_links_selector = "meta"
details_content_selector = ".exhibition-excerpt"
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