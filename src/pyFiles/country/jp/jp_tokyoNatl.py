import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.tnm.jp/modules/r_calender/index.php?date=today&lang=en'
exb_nums = 1
titles_selector = ".information-list .text .title"
dates_selector = ".information-list .text .info"
thumbnails_selector = ".information-list img"
details_links_selector = ".information-list .text .inner p:nth-child(4)"
details_contents_selector = "" 
infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_links_selector,
    details_contents_selector,
    )

