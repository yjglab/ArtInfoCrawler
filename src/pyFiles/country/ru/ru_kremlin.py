import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler
# 오래걸림
url = 'https://www.kreml.ru/en-Us/exhibitions/'
exb_nums = 2
titles_selector = ".slide .slide-text strong"
dates_selector = ".slide .slide-text span:nth-child(2)"
thumbnails_selector = ".slide > a > img"
details_links_selector = ".slide .slide-text a span:nth-child(3)"
details_content_selector = "."
category = "museum"
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )