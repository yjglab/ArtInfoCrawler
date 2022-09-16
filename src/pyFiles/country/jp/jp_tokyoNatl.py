import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.tnm.jp/modules/r_calender/index.php?date=today&lang=en'
exb_nums = 3
titles_selector = "#event_02 .contents-list a > h3"
dates_selector = "#event_02 .contents-list a > p"
thumbnails_selector = ".exhibition-list img"
details_links_selector = "#event_02 .contents-list a"
details_contents_selector = ".information-list .text .inner p:nth-of-type(3)" 
category = "museum"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_links_selector,
    details_contents_selector,
    category
    )

