import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = ''
exb_nums = 1
titles_selector = "."
dates_selector = "."
thumbnails_selector = "."
details_links_selector = "."
details_content_selector = "."
category = ""
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )