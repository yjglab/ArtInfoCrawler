import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.fotografiskcenter.dk/udstillinger'
exb_nums = 1
titles_selector = ".c-view--exhibitions .c-link--reset"
dates_selector = ".c-view--exhibitions .c-text--no_space"
thumbnails_selector = ".c-thumbnail--large img"
details_links_selector = ".c-view--exhibitions .c-link--reset"
details_content_selector = ".c-body--shuffle > p"
category = "gallery"
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,category
    )