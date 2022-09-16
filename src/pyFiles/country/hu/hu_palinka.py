import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://palinkaexperience.com/en/museum/'
exb_nums = 1
titles_selector = ".entry-content > h2"
dates_selector = "meta"
thumbnails_selector = ".entry-header > img"
details_links_selector = "meta"
details_content_selector = ".entry-content > p"
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