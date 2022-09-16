import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.namuseum.gr/en/permanent_exhibition/'
exb_nums = 7
titles_selector = ".permanent-grid:first-child div h4"
dates_selector = ".permanent-grid:first-child div img" # permanent
thumbnails_selector = ".permanent-grid:first-child div img"
details_links_selector = ".permanent-grid:first-child div a"
details_content_selector = ".main-content > p"
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