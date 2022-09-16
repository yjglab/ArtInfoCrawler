import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.pradomuseumtickets.com/prado-museum-exhibitions/'
exb_nums = 3
titles_selector = ".card-content-section:nth-child(n+2) h3"
dates_selector = ".card-content-section > p:last-child"
thumbnails_selector = ".cDfczU picture img"
details_selector = "meta"
details_content_selector = ".card-content-section:nth-child(n+2) p:nth-of-type(1)"
category = "museum"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_selector,
    details_content_selector,
    category
    )