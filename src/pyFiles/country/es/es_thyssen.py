import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.museothyssen.org/en/exhibitions'
exb_nums = 5
titles_selector = ".snippet__title "
dates_selector = ".snippet__text"
thumbnails_selector = ".snippet img:first-child"
details_links_selector = ".snippet__body > a"
details_content_selector = ".u-display-inline:nth-of-type(4)"
category = "gallery"

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