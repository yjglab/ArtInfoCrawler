import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://muze.gov.tr/muzeler'
exb_nums = 3
titles_selector = ".owl-item.active .text-uppercase"
dates_selector = "meta" # 상시
thumbnails_selector = ".owl-item.active .item figure a img"
details_links_selector = ".owl-item.active .item figure a"
details_content_selector = ".museum-description p:nth-of-type(2)"
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