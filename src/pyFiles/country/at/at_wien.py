import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.wienmuseum.at/en/exhibitions/current-exhibitions'
exb_nums = 2
titles_selector = ".margin-bottom > a"
dates_selector = ".col-md-8 > p > strong"
thumbnails_selector = ".col-md-4 img"
details_links_selector = ".margin-bottom a"
details_content_selector = "#main p:nth-of-type(2)"
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