import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://polin.pl/en/temporary-exhibitions'
exb_nums = 3
titles_selector = ".related-content h2"
dates_selector = ".node-tag-info"
thumbnails_selector = ".related-content picture img"
details_links_selector = "meta"
details_content_selector = ".related-content p:nth-last-of-type(1)"
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