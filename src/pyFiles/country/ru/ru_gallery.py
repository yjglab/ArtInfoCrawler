import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'http://en.rusmuseum.ru/exhibitions/current/'
exb_nums = 6
titles_selector = ".dotline3 div .name"
dates_selector = ".dotline3 div .date"
thumbnails_selector = ".dotline3 div img"
details_links_selector = "meta"
details_content_selector = ".dotline3 div p:last-child"
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