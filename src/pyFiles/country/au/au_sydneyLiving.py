import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://sydneylivingmuseums.com.au/events-exhibitions'
exb_nums = 2
titles_selector = ".pane-content .media__head"
dates_selector = ".pane-content .date"
thumbnails_selector = ".pane-content .media__img img"
details_links_selector = ".media__link"
details_content_selector = ".body .introduction"
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