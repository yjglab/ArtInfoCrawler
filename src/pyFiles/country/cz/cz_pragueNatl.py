import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.nm.cz/en/program/exhibitions'
exb_nums = 12
titles_selector = ".eCont > h3"
dates_selector = ".eInfo span time" # permanent
thumbnails_selector = ".eImg img"
details_links_selector = ".eImg a"
details_content_selector = ".textLayoutL > p"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )