import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.nfm.go.kr/user/planexhibition/home/63/selectPlanExhibitionNList.do'
exb_nums = 3
titles_selector = ".d-exhibition__subject"
dates_selector = ".d-exhibition__info-item:first-child"
thumbnails_selector = ".d-exhibition__thumb > img"
details_links_selector = ".d-exhibition__subject > a"
details_contents_selector = ".c-sections > p"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_links_selector,
    details_contents_selector,
    )

